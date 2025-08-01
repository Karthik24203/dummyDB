"use client";
import { az, fa, faker } from "@faker-js/faker";
import axios from "axios";
import React, { useState } from "react";
import FormItem from "./components/FormItem";
import DisplayItem from "./components/DisplayItem";
import { FaSpinner } from "react-icons/fa";

function CreateApi() {
  const [items, setItems] = useState([
    {
      openMain: false,
      openSub: false,
      inputValue: "",
      dropDownValue: "",
      subTypeValue: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [api, setApi] = useState("");
  const [data, setData] = useState("");
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

  const handleQuantity = (value) => {
    setQuantity(value);
    console.log(value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    let types = [];
    let subtypes = [];
    let inpVal = [];
    console.log(quantity);

    items.forEach((item, index) => {
      types.push(item.dropDownValue);
      subtypes.push(item.subTypeValue);
      inpVal.push(item.inputValue);
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
      console.log(res.data);
      setData(res.data);
      setApi(fullUrl);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full flex">
      <div className=" flex-1 flex items-stretch">
        <div className="  w-1/2  border-green-400 border-r-4">
          <div className=" w-full flex justify-center items-center space-x-3  p-4 border-b-4 border-green-400">
            <button
              onClick={handleAdd}
              className=" p-4 py-2 bg-green-400 text-white text-xl rounded"
            >
              Add Field
            </button>
            <button
              onClick={handleSubmit}
              className=" bg-green-400 font-semibold text-white text-xl px-4 py-2 rounded-md"
            >
              {loading ? <FaSpinner className=" animate-spin" /> : `Submit`}
            </button>

            <input
              defaultValue={1}
              type="number"
              className=" border px-1 py-3 text-center  rounded-2xl border-green-400"
              min={1}
              max={5}
              onChange={(e) => handleQuantity(e.target.value)}
            />
          </div>
          <FormItem items={items} setItems={setItems} />
        </div>
        <div className=" h-fit w-1/2 flex">
          <DisplayItem data={data} api={api} />
        </div>
      </div>
    </div>
  );
}

export default CreateApi;
