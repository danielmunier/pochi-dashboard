
import { getBotGuilds } from "../../../utils/api";
import { auth } from "@/auth";
import { GuildMenuItem} from "../../components/guilds/GuildMenuItem"

export default async function AdminPage() {
  const session = await auth()
  if(!session) return <>Not Authenticated</>
  const botGuilds = await getBotGuilds();
  console.log(botGuilds)
 if(!getBotGuilds) return <>No Guilds</>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Selecione o servidor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {botGuilds.map((guild: any) => (
          <div key={guild.id}>
            <GuildMenuItem guild={guild} />
          </div> 
        ))}
      </div>
    </div>
  );
}
