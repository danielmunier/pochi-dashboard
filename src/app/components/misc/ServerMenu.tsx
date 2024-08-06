import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/utils/lib";
import Link from "next/link";
import { MdGroups } from "react-icons/md";
import { Guild } from "@/utils/types";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export function ServerMenu({ guilds }: { guilds: Guild[] }) {
  console.log(guilds)
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center justify-between gap-2 py-2 px-4 hover:bg-gray-300 rounded border-b-2 w-full">
          <div className="flex items-center gap-2">
            <MdGroups />
            <span>Meus Servidores</span>
          </div>
          <IoIosArrowDown size={14} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="border rounded-md mt-2 w-48 bg-white shadow-lg">
        {guilds.length > 0 ? (
          guilds.map((guild: Guild) => (
            <DropdownMenu.Item key={guild.id} className="flex items-center gap-2 py-2 px-4 hover:bg-gray-200">
              <Image
                src={guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : "/default-icon.png"}
                alt={guild.name}
                width={20}
                height={20}
                className="rounded-full"
              />
              <Link
                href={`/dashboard/${guild.id}`}
                className="text-sm text-gray-700 hover:underline"
              >
                {guild.name}
              </Link>
            </DropdownMenu.Item>
          ))
        ) : (
          <p className="py-2 px-4 text-sm text-gray-500">Nenhum servidor encontrado</p>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
