import { fetchValidGuild } from "@/utils/api";
import axios from "axios";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }: { params: { id: string } }, response: NextResponse) {
    try {
        const { id } = params
        const authorization = headers().get('Cookie')

        const { data: guildData } = await axios(`${process.env.API_URL}/api/guilds/${id}/config`, {
            headers: { authorization }
        })

        return NextResponse.json(guildData)
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}



export async function POST(request: NextRequest, { params }: { params: { id: string } }, response: NextResponse) {
    try {
        const data = await request.json()
        const { id } = params
        const authorization = headers()

        const isValidGuild = await fetchValidGuild(id, authorization)
        if (isValidGuild) {
            const { id } = params
            const authorization = headers().get('Cookie')

            const { data: guildData } = await axios.post(`${process.env.API_URL}/api/guilds/${id}/config`, {
                headers: { authorization },
                data
            }
            )

            return NextResponse.json(guildData)
        }

        //return response.status !== 200 ? NextResponse.next() : NextResponse.redirect(new URL("/", req.url))


        //return NextResponse.json(guildData)
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}

