"use client";
import { az, faker } from "@faker-js/faker";
import axios from "axios";
import React, { useState } from "react";
import FormItem from "./components/FormItem";

function CreateApi() {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [api, setApi] = useState("");
  const types = Object.keys(faker);
  const obj = [];
  const handleAdd = () => {
    setItems((prev) => [
      ...prev,
      {
        openMain: false,
        openSub: false,
        inputValue: "",
        dropDownValue: "",
        subTypeValue: "",
      },
    ]);
  };

  const toggleDropDown = (index) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, openMain: !item.openMain } : item
      )
    );
  };

  const toggleSubDropdown = (index) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, openSub: !item.openSub } : item
      )
    );
  };

  const closeDropDown = (index) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, openMain: false, openSub: false } : item
      )
    );
  };

  const handleInputChange = (index, value) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, inputValue: value } : item
      )
    );
  };

  const handleDropDownSelect = (index, type) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, dropDownValue: type, openMain: false } : item
      )
    );
  };

  const handleSubDropDownSelect = (index, subtype) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, subTypeValue: subtype, openSub: false } : item
      )
    );
  };

  const handleQuantity = (value) => {
    setQuantity(value);
  };

  const handleSubmit = async () => {
    let types = [];
    let subtypes = [];
    let inpVal = [];
    Array.from({ length: quantity }).forEach(() => {
      items.forEach((item, index) => {
        types.push(item.dropDownValue);
        subtypes.push(item.subTypeValue);
        inpVal.push(item.inputValue);
      });
    });
    console.log(types, subtypes);
    try {
      const res = await axios.get("/api/non_user", {
        params: {
          inputValue: inpVal,
          types: types,
          subtypes: subtypes,
          limit: quantity,
        },
      });
      const params = new URLSearchParams();
      inpVal.forEach((val) => params.append("inputValue[]", val));
      types.forEach((val) => params.append("types[]", val));
      subtypes.forEach((val) => params.append("subtypes[]", val));
      params.append("limit", quantity);

      const fullUrl = `/api/non_user?${decodeURIComponent(params.toString())}`;
      console.log("Full URL:", fullUrl);
      setApi(fullUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={handleAdd}
        className=" p-4 py-2 bg-blue-500 text-white text-2xl rounded-full"
      >
        +
      </button>
      <button
        onClick={handleSubmit}
        className=" bg-blue-500 text-white text-xl px-4 py-2 rounded-md"
      >
        Submit
      </button>
      <h2>{api ? api : " loading"}</h2>
      <input
        defaultValue={1}
        type="number"
        className=" border"
        min={1}
        max={5}
        onChange={(e) => handleQuantity(e.target.value)}
      />
      <FormItem items={items} setItems={setItems} />
      {/* <div className=" space-y-4 mt-4 flex flex-col">
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Name"
              value={item.inputValue}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="border"
            />
            <div
              tabIndex="0"
              onBlur={() => closeDropDown(index)}
              className=" relative"
            >
              <div onClick={() => toggleDropDown(index)}>
                {item.dropDownValue || "Options"}
              </div>

              {item.openMain && (
                <div className=" absolute">
                  {types
                    .filter((sub) => typeof faker[sub] !== "function")
                    .map((type, i) => (
                      <div
                        key={i}
                        onClick={() => handleDropDownSelect(index, type)}
                      >
                        {type}
                      </div>
                    ))}
                </div>
              )}
              {item.dropDownValue && (
                <div
                  className=" relative"
                  onBlur={() => closeDropDown(index)}
                  tabIndex={0}
                >
                  <div onClick={() => toggleSubDropdown(index)}>
                    {item.subTypeValue || "SubType"}
                  </div>
                  {item.openSub && (
                    <div>
                      {Object.keys(faker[item.dropDownValue])
                        .filter((sub) => typeof faker[sub] !== "function")
                        .map((sub, i) => (
                          <div
                            key={i}
                            onClick={(e) => handleSubDropDownSelect(index, sub)}
                          >
                            {sub}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default CreateApi;
