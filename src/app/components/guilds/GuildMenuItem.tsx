import { Guild } from "@/utils/types";
import Link from "next/link";
import { FC } from "react";

type GuildMenuItemProps = {
  guild: Guild;
};



export const GuildMenuItem: FC<GuildMenuItemProps> = ({ guild }) => {
  const iconUrl = guild.icon
    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
    : "/default-icon.png"; // Caminho para um ícone padrão caso a guilda não tenha um ícone



  return (
   
      <Link href={`/dashboard/${guild.id}`}>
        <div className="border border-gray-700 rounded-lg p-4 mb-4 text-white cursor-pointer flex items-center space-x-4 hover:bg-gray-700 transition duration-200">
          <img src={iconUrl} alt={`${guild.name} icon`} className="w-14 h-14 rounded-full" />
          <div>
            <h2 className="text-xl font-bold">{guild.name}</h2>
            <p className="text-gray-400">{guild.description || "No description available"}</p>
          </div>
        </div>
      </Link>

  );
};
