// utils/helper.ts
"use server"
import { headers } from "next/headers";

export const validateCookies = async () => {
  const cookieHeader = headers().get("cookie");
  
  if (!cookieHeader) {
    return {}; // Return empty object if no cookie header found
  }
  
  const sessionID = cookieHeader.split("; ").find(cookie => cookie.startsWith("connect.sid="))?.split("=")[1];
  if (!sessionID) {
    return {}; // Return empty object if sessionID is not found
  }
  return { 'Cookie': `connect.sid=${sessionID}` }; // Return headers object with correct format
};