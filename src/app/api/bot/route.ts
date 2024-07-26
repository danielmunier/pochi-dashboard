import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const redirectUri = `${process.env.NEXTAUTH_URL}`
        return NextResponse.redirect(`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=8&integration_type=0&scope=bot&redirect_uri=${redirectUri}`)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Erro ao adicionar bot no servidor" }, { status: 403 })
    }
}