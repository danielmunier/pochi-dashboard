// /dashboard/[guildId]/
import { GuildContext } from "@/app/context/GuildContext";
import { fetchGuild, fetchGuildChannels } from "@/utils/api";
import { useContext, useEffect } from "react";

const DashboardPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { guild } = await fetchGuild(id);
  const channels = await fetchGuildChannels(id);

  channels.forEach((channel: any) => {
    console.log(channel);
  })

  return (
    <div>
      <h1>{guild?.name}</h1>
      <select name="" id="">
        {
           
        }
      </select>
    </div>
  );
};

export default DashboardPage;
