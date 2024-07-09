
import { fetchMutualGuilds } from "@/utils/api";
import { Guild } from "@/utils/types";
import {GuildMenuItem}  from "@/components/guilds/GuildMenuItem";
type Props = {
  guilds: Guild[];
};

export default async function MenuPage() {
  const { guilds } = await fetchMutualGuilds();


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Selecione o servidor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guilds.map((guild) => (
          <div key={guild.id}>
            <GuildMenuItem guild={guild} />
          </div>
        ))}
      </div>
    </div>
  );
}
