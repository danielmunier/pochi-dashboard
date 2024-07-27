
import { fetchMutualGuilds, getUserAdminGuilds } from "@/utils/api";
import { Guild } from "@/utils/types";
import { GuildMenuItem } from "@/app/components/guilds/GuildMenuItem";
import { auth } from "@/auth";
import { getToken } from "next-auth/jwt";
import { Suspense } from "react";


export default async function MenuPage() {
  const session = await auth()
  if (!session) return <>Not Authenticated</>
  const userGuilds = await getUserAdminGuilds();
  if (!userGuilds) return <>No Guilds</>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Selecione o servidor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<>Carregando...</>}>
          {userGuilds.map((guild: any) => (
            <div key={guild.id}>
              <GuildMenuItem guild={guild} />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
