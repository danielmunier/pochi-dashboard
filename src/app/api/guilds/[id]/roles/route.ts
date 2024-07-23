import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string }, response: NextResponse }) {
    try {
        const { id } = params
        const { data: roles } = await axios.get(`${process.env.DISCORD_API_URL}/guilds/${id}/roles`, {
            headers: {
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
            }
        })
        return NextResponse.json(roles)

    } catch (error) {
        console.error(error)
        NextResponse.json({error: "Erro ao consultar cargos da guilda"}, {status: 403})
    }
}