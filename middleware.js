import { NextResponse } from "next/server";

export function middleware(request) {
  let cookie = request.cookies.get("nextjs");

  const allCookies = request.cookies.getAll();

  request.cookies.has("nextjs"); // => true
  request.cookies.delete("nextjs");
  request.cookies.has("nextjs"); // => false

  const response = NextResponse.next();
  response.cookies.set("vercel", "fast");
  response.cookies.set({
    name: "vercel",
    value: "fast",
    path: "/",
  });
  cookie = response.cookies.get("vercel");

  return response;
}
