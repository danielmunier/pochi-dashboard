import { NextFetchEvent, NextRequest, NextResponse, URLPattern } from "next/server";
import { fetchValidGuild } from "./utils/api";




export const validateMiddlewareCookies = (req: NextRequest) => {
    const sessionID = req.cookies.get('connect.sid')?.value;
    return sessionID ? {
        Cookie: `connect.sid=${sessionID}`
    } : false
}

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const headers = validateMiddlewareCookies(req)
    if (!headers) return new Response("Unauthorized", { status: 401 })

    const url = req.url;
    const parsedUrl = new URL(url);
    const id = parsedUrl.pathname.split('/')[2];

    const response = await fetchValidGuild(id, headers)
    console.log(response.status)

    // return response.status !== 200 ? NextResponse.redirect(new URL("/", req.url)) : NextResponse.next()

}


export const config = {
    matcher: ['/dashboard/:id*', '/menu'], // Matches requests to the '/protected-route' path
};