import { auth } from "@/auth"
import axios from "axios"
import { getToken } from "next-auth/jwt"
import { useSession } from "next-auth/react"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest, { params }: { params: { id: string } }, res: NextResponse) {
    try {
        const accessToken = req.headers.get("authorization")
        if(!accessToken) return NextResponse.json({})
        const { data: guildData } = await axios(`${process.env.DISCORD_API_URL}/users/@me/guilds`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        const adminUserGuilds = guildData.filter((guild: any) => (BigInt(guild.permissions) & BigInt(0x8)) === BigInt(0x8))
        return NextResponse.json(adminUserGuilds)
    }

    catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: "Error user guilds route" })

    }
}

