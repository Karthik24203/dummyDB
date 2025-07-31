"use client";

import { useRouter } from "next/navigation";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/create");
  };
  return (
    <div className=" w-full  flex-1 flex  flex-col items-center justify-center text-center space-y-9">
      <div className=" w-[900px] space-y-9">
        <h1 className=" text-5xl font-bold">
          Mock APIs. Instant Testing. Zero Setup.
        </h1>
        <h2 className=" text-3xl ">
          Define your schema and get custom test data instantly — no sign-up, no
          hassle.
        </h2>
      </div>
      <div className=" flex space-x-5">
        <h2
          onClick={handleClick}
          className=" px-5 py-2 rounded bg-green-400 text-white"
        >
          Get Started
        </h2>
        <h2
          onClick={() => router.push("/documentation")}
          className=" border-2 border-green-400 rounded px-7 text-green-400 py-2"
        >
          Docs
        </h2>
      </div>
    </div>
  );
}
