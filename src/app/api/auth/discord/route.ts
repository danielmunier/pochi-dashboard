import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

// Método GET para a rota específica
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        return NextResponse.redirect(`${process.env.API_URL}/api/auth/discord/redirect`);

    } catch (error: any) {
        // Retorne um erro como JSON
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
