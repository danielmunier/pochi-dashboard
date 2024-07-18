import { fetchValidGuild } from "@/utils/api";
import axios from "axios";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const authorization = headers().get('Cookie');

        const { data: guildData } = await axios(`${process.env.API_URL}/api/guilds/${id}/config`, {
            headers: { authorization }
        });

        return NextResponse.json(guildData);
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const data = await request.json();
        const { id } = params;
        const authorization = headers();

        const isValidGuild = await fetchValidGuild(id, authorization);
        if (isValidGuild) {
            const { data: guildData } = await axios.post(`${process.env.API_URL}/api/guilds/${id}/config`, {
                headers: { authorization },
                data
            });

            return NextResponse.json(guildData);
        }

        return NextResponse.json({ error: 'Invalid guild' }, { status: 400 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
