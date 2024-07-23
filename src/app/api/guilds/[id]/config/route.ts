import axios from "axios"
import { headers } from "next/headers"
import  prismadb  from "@/lib/prismadb"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }, response: NextResponse) {
    try {
        const { id } = params
        const guild = await prismadb.Guild.findUnique({ 
            where: { guildId: id },
            include: {
                FormEntry: true,
                ticketConfig: true,
                lobbyConfig: true,
                customStatus: true,

            } },
         
           
        
        )
        

        return NextResponse.json(guild)
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "Erro ao consultar canais da guilda"}, {status: 500})
    }
}




export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await request.json();


    const { ticketCategory, entryFormChannel, rolesMemberApproved, rolesVerification } = data;


    await prismadb.Guild.update({
      where: { guildId: id },
      data: {
        ticketConfig: {
          update: {
            ticketCategoryId: ticketCategory ? ticketCategory.value : null,
          },
        },
        FormEntry: {
          update: {
            formChannelId: entryFormChannel ? entryFormChannel.value : null,
            rolesMemberApproved: rolesMemberApproved ? rolesMemberApproved.map((role: { value: string }) => role.value) : [],
            rolesVerification: rolesVerification ? rolesVerification.map((role: { value: string }) => role.value) : [],
          },
        },
      },
    });

    return NextResponse.json({ message: "Configuração da guilda atualizada com sucesso" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao atualizar a configuração da guilda" }, { status: 500 });
  }
}
