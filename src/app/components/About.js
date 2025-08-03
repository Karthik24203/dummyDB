import React from "react";
import { IoIosFlash } from "react-icons/io";

function About() {
  const benefits = [
    "Instant mock APIs — no backend required",
    "Auto-generates realistic fake data",
    "No signup needed — just start testing",
    "Temporary APIs that clean up after use",
    "Fast setup for prototypes and demos",
  ];

  return (
    <div className=" min-h-[400px] md:min-h-[600px] bg-blue-600 text-black flex items-center justify-center p-4">
      <div className=" w-fit bg-white rounded-lg shadow-lg md:p-16 p-8">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-6 ">
          Why Use DummyDB?
        </h1>
        <ul className=" space-y-4 text-gray-800 lg:text-xl font-mono">
          {benefits.map((point, index) => (
            <li key={index} className="flex items-start  space-x-3">
              <IoIosFlash className=" text-2xl text-blue-600" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
