import React from "react";
import ReactJson from "react-json-view";

function DisplayItem({ data, api }) {
  return (
    <div className="w-full">
      <div className="w-full mt-5">
        <h2 className="ml-5 text-2xl font-semibold flex-start">Your API:</h2>
        <div className="flex justify-center w-full">
          <p
            className="w-[600px] mt-3 rounded-md bg-gray-300 text-center py-3 px-2 break-words overflow-auto
           whitespace-pre-wrap"
          >
            {api
              ? `${window.location.origin}${api}`
              : "Your API will be displayed here"}
          </p>
        </div>
      </div>

      <div className="ml-5 mt-6 text-2xl flex-start">
        <h2 className="font-semibold">Your Data looks like:</h2>
        <div className="flex justify-center w-full h-96 overflow-auto">
          <div className="w-[600px] mt-3 bg-gray-300 rounded-lg p-4 overflow-auto custom-scrollbar2">
            {data ? (
              <ReactJson
                src={data}
                theme="monokai" // You can change the theme as needed
                collapsed={false}
                enableClipboard={true}
                displayDataTypes={false}
              />
            ) : (
              <p className="text-gray-500">
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
