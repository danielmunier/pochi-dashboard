import { auth } from "@/auth"

import axios from "axios"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }, response: NextResponse) {
    try {
        const { data: guildData } = await axios(`${process.env.DISCORD_API_URL}/users/@me/guilds`, {
            headers: {
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
            }
        })


        

        return NextResponse.json({ guilds: guildData })
    }

    catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: "Error main route" })

    }
}

