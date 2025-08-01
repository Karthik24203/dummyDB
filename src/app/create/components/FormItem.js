"use client";
import { az, faker } from "@faker-js/faker";
import axios from "axios";
import React, { useState } from "react";

function FormItem({ items, setItems }) {
  const types = Object.keys(faker);
  const blockedTypes = [
    "_randomizer",
    "helpers",
    "rawDefinitions",
    "definitions",
  ];

  const blockedsubTypes = ["faker", "betweens", "between", "fromCharacters"];

  const allowedtypes = types.filter((type) => !blockedTypes.includes(type));
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

  return (
    <div className=" select-none w-full justify-center items-center flex flex-col ">
      <div className=" space-y-4 mt-4 justify-center items-center flex flex-col">
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Name"
              value={item.inputValue}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="border text-lg border-green-500 px-4 py-2 rounded-xl text-center"
            />
            <div
              tabIndex="0"
              onBlur={() => closeDropDown(index)}
              className=" relative"
            >
              <div
                className=" bg-green-300 mt-2 py-1 cursor-pointer rounded-xl
                 hover:bg-green-400 text-center justify-center text-lg"
                onClick={() => toggleDropDown(index)}
              >
                {item.dropDownValue || "Type"}
              </div>

              {item.openMain && (
                <div
                  className=" text-center bg-green-200 rounded-xl mt-1 z-10
                cursor-pointer w-full absolute  max-h-60 overflow-y-auto custom-scrollbar"
                >
                  {allowedtypes
                    .filter((sub) => typeof faker[sub] !== "function")
                    .map((type, i) => (
                      <div
                        className=" hover:bg-green-400 mx-2 rounded-lg text-lg "
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
                  <div
                    className="bg-green-300 mt-2 py-1 cursor-pointer rounded-xl
                 hover:bg-green-400 active:bg-green-600 active:text-white  text-center justify-center text-lg"
                    onClick={() => toggleSubDropdown(index)}
                  >
                    {item.subTypeValue || "SubType"}
                  </div>
                  {item.openSub && (
                    <div
                      className=" max-h-60 custom-scrollbar overflow-y-auto
                     absolute text-center bg-green-200 rounded-xl mt-1 z-20 cursor-pointer w-full"
                    >
                      {Object.keys(faker[item.dropDownValue])
                        .filter(
                          (sub) =>
                            typeof faker[sub] !== "function" &&
                            !blockedsubTypes.includes(sub)
                        )
                        .map((sub, i) => (
                          <div
                            className="hover:bg-green-400 mx-2 rounded-lg text-lg"
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
      </div>
    </div>
  );
}

export default FormItem;
