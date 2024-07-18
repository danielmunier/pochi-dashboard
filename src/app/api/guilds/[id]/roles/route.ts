import axios from "axios"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }, response: NextResponse) {
    try {
        const { id } = params
        const authorization = headers().get('Cookie')

        const { data: guildData } = await axios(`${process.env.API_URL}/api/guilds/${id}/roles`, {
            headers: { authorization }
        })

        return NextResponse.json(guildData, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "Error GET roles"}, {status: 500})
    }
}
