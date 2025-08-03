import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const { url } = req;
  //console.log("a", url);
  const types = searchParams.getAll("types[]");
  const subtypes = searchParams.getAll("subtypes[]");
  const inputValue = searchParams.getAll("inputValue[]");
  const limit = parseInt(searchParams.get("limit"));
  //console.log(types, subtypes, inputValue, limit);
  let arr = [];
  Array.from({ length: limit }).forEach(() => {
    let obj = {};
    types.forEach((element, index) => {
      obj[inputValue[index]] = faker[element][subtypes[index]]();
    });
    arr.push(obj);
  });
  //console.log(arr);
  const response = NextResponse.json(arr, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}

export function OPTIONS() {
  const response = NextResponse.json(null, { status: 204 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
