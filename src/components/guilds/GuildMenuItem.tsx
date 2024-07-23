import { Guild } from "@/utils/types";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FC } from "react";

type GuildMenuItemProps = {
  guild: Guild;
};



export const GuildMenuItem: FC<GuildMenuItemProps> = ({ guild }) => {
  const iconUrl = guild.icon
    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
    : "/default-icon.png"; // Caminho para um ícone padrão caso a guilda não tenha um ícone


    const handleGuildClick = (guildId: string) => {
      // Navigate to the dashboard URL with the guild ID
      redirect(`/dashboard/${guildId}`);
    };

  return (
    <Link href={`/dashboard/${guild.id}`}>
    <div className="border border-gray-700 bg-gray-800 rounded-lg p-4 mb-4 text-white cursor-pointer flex items-center space-x-4 hover:bg-gray-700 transition duration-300">
      <img src={iconUrl} alt={`${guild.name} icon`} className="w-12 h-12 rounded-full" />
      <div>
        <h2 className="text-xl font-bold">{guild.name}</h2>
        <p className="text-gray-400">{guild.description || "No description available"}</p>
      </div>
    </div>
    </Link>
  );
};
