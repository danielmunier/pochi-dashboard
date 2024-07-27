import { getBotGuilds } from "@/utils/api"
import axios from "axios"
import { NextRequest, NextResponse } from "next/server"
import { Guild } from "@/utils/types" 


function findCommonGuilds(userGuilds: Guild[], botGuilds: Guild[]): Guild[] {
    const userGuildIds = new Set(userGuilds.map(guild => guild.id));
    return botGuilds.filter(botGuild => userGuildIds.has(botGuild.id));
}

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
        const botGuilds = await getBotGuilds()


        const commonGuilds = findCommonGuilds(adminUserGuilds, botGuilds);


        return NextResponse.json(commonGuilds)
    }

    catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: "Error user guilds route" })

    }
}

