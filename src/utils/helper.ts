// utils/helper.ts
"use server"
import { headers } from "next/headers";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const validateCookies = async () => {
  const cookieHeader = headers().get("cookie");

  if (!cookieHeader) {
    return {}; // Return empty object if no cookie header found
  }

  const sessionID = cookieHeader.split("; ").find(cookie => cookie.startsWith("connect.sid="))?.split("=")[1];
  if (!sessionID) {
    return {}; // Return empty object if sessionID is not found
  }
  // return { 'Cookie': `connect.sid=${sessionID}` }; // Return headers object with correct format
  console.log(headers())
  return headers()
};



export async function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
