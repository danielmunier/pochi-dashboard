import axios from "axios"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }, response: NextResponse) {
    try {
        const { id } = params
        const authorization = headers().get('Cookie')

        const { data: guildData } = await axios(`${process.env.API_URL}/api/guilds/${id}/`, {
            headers: { authorization }
        })

        return NextResponse.json(guildData)
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({error: "Error main route"})

    }
}
