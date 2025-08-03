"use client";

import { useRouter } from "next/navigation";
import About from "./components/About";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className=" w-full ">
      <div className="w-full h-[600px] flex flex-col items-center justify-center text-center space-y-9">
        <div className="w-[900px] space-y-9 cursor-pointer">
          <h1 className="text-5xl font-bold">
            Mock APIs. Instant Testing. Zero Setup.
          </h1>
          <h2 className=" text-3xl ">
            Define your schema and get custom test data instantly — no sign-up,
            no hassle.
          </h2>
        </div>
        <div className=" flex space-x-5">
          <Link href={"/create"} passHref>
            <h2
              className=" cursor-pointer px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700
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
