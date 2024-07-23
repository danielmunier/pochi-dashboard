import { auth } from "@/auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, response: NextResponse) {

    return new Response("Hello, world!");
}