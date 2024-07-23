import axios from "axios"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }, response: NextResponse) {
    try {
        const { id } = params
   
        const { data: guildData } = await axios(`${process.env.DISCORD_API_URL}/guilds/${id}`, {
            headers: { 
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
            },
        })

        return NextResponse.json(guildData)
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "Erro ao consultar guilda"}, {status: 500})
    }
}
