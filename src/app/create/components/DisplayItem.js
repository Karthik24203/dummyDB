"use client";
import React, { useEffect, useState } from "react";
//import ReactJson from "react-json-view";
import { JsonViewer } from "@textea/json-viewer";

import dynamic from "next/dynamic";

function DisplayItem({ data, api }) {
  const [origin, setOrigin] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const ReactJson = dynamic(() => import("react18-json-view"), {
    ssr: false,
  });

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(`${origin}${api}`);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="w-full">
      <div className="w-full  mt-5">
        <h2 className="ml-5 text-2xl font-semibold flex-start">Your API:</h2>
        <div className="flex justify-center w-full">
          <div className=" relative md:min-w-[400px] lg:max-w-[500px] lg:w-[600px]   border-2 rounded mt-3 ">
            {api ? (
              <button
                onClick={handleCopy}
                className=" absolute top-1 hover:opacity-100 right-1 font-mono px-2 py-1 rounded bg-black opacity-50 text-white"
              >
                {copied ? "copied" : "copy"}
              </button>
            ) : (
              ""
            )}
            <p
              className="  py-5 pt-8 px-2 break-all select-all break-words overflow-auto
            whitespace-pre-wrap"
            >
              {api ? `${origin}${api}` : "Your API will be displayed here"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 md:text-2xl flex flex-col items-start w-full">
        <h2 className=" ml-6 font-semibold">Your Data looks like:</h2>
        <div className="flex justify-center w-full h-96 overflow-auto">
          <div className=" md:w-[400px] lg:max-w-[500px] lg:w-[600px] mt-3 border-2 rounded-lg p-4 overflow-auto custom-scrollbar2">
            {data ? (
              <JsonViewer className=" text-xl" value={data} />
            ) : (
              <p className="text-gray-500 text-xl">
                Your dummy data example will be displayed here
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayItem;
