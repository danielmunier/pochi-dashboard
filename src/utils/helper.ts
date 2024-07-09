import { headers } from "next/headers";

export const validateCookies = () => {
  const sessionID = headers().get('cookie')?.split('; ').find(cookie => cookie.startsWith('connect.sid='))?.split('=')[1];
  return sessionID ? { Cookie: `connect.sid=${sessionID}` } : null;
}
