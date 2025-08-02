"use client";
import React from "react";
import { FaBolt } from "react-icons/fa";

const code = `
[ Field Name ]     [ Data Type ]     [ Data Subtype ]
------------------------------------------------------
| firstName      | String          | First Name      |
| email          | String          | Email Address   |
| age            | Number          | Integer         |
`;

function Page() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-gray-100 border border-gray-300 rounded p-6 font-sans text-base leading-relaxed space-y-4">
        <h2 className="font-bold text-2xl">📘 How It Works</h2>

        <p>
          Use the schema builder below to define the structure of your dummy
          data. This schema will be used to generate random data via a REST API
          endpoint.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>
            Click the <strong>"Add Field"</strong> button to define a new entry
            in your schema.
          </li>
          <li>
            Each field includes:
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>
                <strong>Field Name:</strong> The key name for your data (e.g.{" "}
                <code>email</code>, <code>age</code>)
              </li>
              <li>
                <strong>Data Type:</strong> The general type (e.g.{" "}
                <code>String</code>, <code>Number</code>, <code>Date</code>)
              </li>
              <li>
                <strong>Data Subtype:</strong> Appears after selecting a type. A
                more specific format (e.g. <code>First Name</code>,{" "}
                <code>Last Name</code>, <code>City</code>, <code>Float</code>)
              </li>
            </ul>
          </li>
        </ul>

        <p>
          After you click <strong>"Submit"</strong>, an API will be generated
          for you based on your schema. A live example of the generated data
          will appear on the right.
        </p>

        <p>
          <strong>Note:</strong> The structure (schema) stays the same, but the
          values are randomly generated on each API call.
        </p>

        <h3 className="font-semibold text-lg mt-6">📋 Example Schema Table</h3>
        <pre className="bg-white border border-gray-200 rounded p-4 font-mono text-sm whitespace-pre-wrap">
          {code}
        </pre>

        <h3 className="font-semibold text-lg mt-6">📦 Example API Response</h3>
        <pre className="bg-white border border-gray-200 rounded p-4 font-mono text-sm whitespace-pre-wrap">
          {`{
  "firstName": "Emily",
  "email": "emily.west@example.com",
  "age": 32
}`}
        </pre>

        <h3 className="font-bold text-2xl mt-6">⚙️ How to Use It in Code</h3>
        <p>Once your API is generated, fetch the data like this:</p>
        <pre className="bg-white border border-gray-200 rounded p-4 font-mono text-sm whitespace-pre-wrap">
          {`import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  
  let res = await axios.get("https://dummydb.io/api/your-endpoint-id");
  setData(res.data);
}`}
        </pre>
        <p className="text-sm text-gray-600">
          Replace <code>"https://dummydb.io/api/your-endpoint-id"</code> with
          your actual DummyDB API URL.
        </p>
      </div>
    </div>
  );
}

export default Page;
