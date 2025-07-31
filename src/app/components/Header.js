"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/create");
  };

  const handleHome = () => {
    router.push("/");
  };
  const handleDocs = () => {
    router.push("/documentation");
  };
  return (
    <header className="cursor-pointer select-none border-b-2 border-green-400 flex justify-between px-16 py-5">
      <h1 onClick={handleHome} className=" font-bold text-4xl text-green-400 ">
        dummyDB
      </h1>
      <div className=" flex text-xl space-x-9 mr-16 text-green-400">
        <h2
          onClick={handleClick}
          className=" px-5 py-2 bg-green-400 text-white rounded"
        >
          Create
        </h2>
        <h2
          onClick={handleDocs}
          className=" px-5 py-2 border-green-400 border-2 rounded"
        >
          Docs
        </h2>
      </div>
    </header>
  );
}

export default Header;
