"use client"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { MdGroups } from "react-icons/md";
import { Guild } from "@/utils/types";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useTheme } from "next-themes";

export function ServerMenu({ guilds }: { guilds: Guild[] }) {
  const { theme } = useTheme();
  
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center justify-between gap-2 p-4 hover:bg-gray-500 rounded w-full">
          <div className="flex items-center gap-2">
            <MdGroups />
            <span>Meus Servidores</span>
          </div>
          <IoIosArrowDown size={14} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="border rounded-md mt-2 w-48 shadow-lg">
        {guilds.length > 0 ? (
          guilds.map((guild: Guild) => (
            <Link
              key={guild.id} // Aqui é o local correto para a 'key'
              href={`/dashboard/${guild.id}`}
              className="text-sm gap-2 flex"
            >
              <DropdownMenu.Item className="flex items-center gap-2 p-4 w-full  hover:bg-gray-500 hover:no-underline	">
                <Image
                  src={guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}` : "/default-icon.png"}
                  alt={guild.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                {guild.name}
              </DropdownMenu.Item>
            </Link>
          ))
        ) : (
          <p className="py-2 px-4 text-sm text-gray-500">Nenhum servidor encontrado</p>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
