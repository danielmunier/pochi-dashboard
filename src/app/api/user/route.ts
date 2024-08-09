import { auth } from "@/auth";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, response: NextResponse) {
    try {
        const accessToken = req.headers.get('authorization')
     
        const { data: userData } = await axios(`${process.env.DISCORD_API_URL}/users/@me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return NextResponse.json(userData);
    } catch (error: any) {
        return NextResponse.json({error: error.message});
    }
}