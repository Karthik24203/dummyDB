"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();

  return (
    <header className="cursor-pointer select-none border-b-2 flex justify-between px-16 py-5">
      <Link href={"/"} passHref>
        <h1 className=" font-mono text-4xl text-blue-500 ">dummyDB</h1>
      </Link>
      <div className=" flex text-xl space-x-9 mr-16 text-blue-600 ">
        <Link href={"/create"} passHref>
          <h2
            className=" px-5 py-2 border-2 border-black bg-blue-500 hover:bg-blue-600 active:bg-blue-700
           text-white rounded-full"
          >
            Create
          </h2>
        </Link>
        <Link href={"/documentation"} passHref>
          <h2 className=" px-5 py-2 border-blue-600 hover:bg-blue-100 active:bg-blue-200 border-2 rounded-full">
            Docs
          </h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
