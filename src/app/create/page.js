"use client";
import { az, fa, faker } from "@faker-js/faker";
import axios from "axios";
import React, { useState } from "react";
import FormItem from "./components/FormItem";
import DisplayItem from "./components/DisplayItem";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

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

    // Validation
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item.inputValue || !item.dropDownValue || !item.subTypeValue) {
        toast.error(
          `Please fill out all fields (Name, Type, Subtype) for field #${
            i + 1
          }`,
          {
            style: {
              textAlign: "center",
              fontWeight: "600",
              fontFamily: "monospace",
              fontSize: "15px",
            },
          }
        );
        setLoading(false);
        return;
      }
      inpVal.push(item.inputValue);
      types.push(item.dropDownValue);
      subtypes.push(item.subTypeValue);
    }

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
    } catch (error) {
      console.log(error);
      alert("An error occurred while generating data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full flex">
      <div className="flex justify-center h-full w-full items-center text-2xl text-center font-bold px-5 md:hidden">
        <h2>
          This interface is optimized for larger screens. Please switch to a
          bigger device for the best experience.
        </h2>
      </div>
      <div className=" flex-1 md:flex hidden items-stretch">
        <div className="  w-1/2  border-r-2">
          <div className=" w-full flex justify-center items-center space-x-3  p-4 border-b-2">
            <button
              onClick={handleAdd}
              className=" p-4 py-2  bg-blue-500 hover:bg-blue-600 active:bg-blue-700
               text-white text-xl rounded"
            >
              Add Field
            </button>
            <button
              onClick={handleSubmit}
              className="  bg-blue-500 hover:bg-blue-600 active:bg-blue-700
               font-semibold text-white text-xl px-4 py-2 rounded-md"
            >
              {loading ? <FaSpinner className=" animate-spin" /> : `Submit`}
            </button>
            <div className=" flex justify-center text-lg font-semibold ml-3 items-center flex-col">
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                defaultValue={1}
                type="number"
                className="border py-3 text-center rounded-2xl border-blue-500"
                min={1}
                max={100}
                onChange={(e) => handleQuantity(e.target.value)}
              />
            </div>
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
