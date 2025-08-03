"use client";

import { useRouter } from "next/navigation";
import About from "./components/About";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className=" w-full ">
      <div className="w-full md:h-[400px] h-[300px] lg:h-[600px] flex flex-col items-center justify-center text-center space-y-9">
        <div
          className="
  w-full 
  sm:max-w-[500px] 
  md:max-w-none 
  lg:max-w-none 
  md:w-[700px] 
  lg:w-[900px] 
  lg:min-w-[700px]
  space-y-9 
  cursor-pointer
"
        >
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Mock APIs. Instant Testing. Zero Setup.
          </h1>
          <h2 className=" text-xl lg:text-3xl md:text-2xl ">
            Define your schema and get custom test data instantly —
            <br />
            <span className="relative font-mono
             inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
              no sign-ups
              <span
                className="absolute left-0 -bottom-1 w-full h-1
               bg-gradient-to-r from-blue-400 to-blue-800 animate-underlineLoop rounded"
              ></span>
            </span>
            , no hassle.
          </h2>
        </div>
        <div className="md:text-lg text-sm flex space-x-5">
          <Link href={"/create"} passHref>
            <h2
              className="  cursor-pointer px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700
           border-black border-2 text-white"
            >
              Get Started
            </h2>
          </Link>
          <Link href={"/documentation"} passHref>
            <h2
              className=" cursor-pointer border-2 border-blue-600 rounded-full px-7 text-blue-600 hover:bg-blue-100
           active:bg-blue-200 py-2"
            >
              Docs
            </h2>
          </Link>
        </div>
      </div>
      <About />
    </div>
  );
}
