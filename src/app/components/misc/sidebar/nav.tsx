import { cn } from "@/utils/lib";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import Icon from "@/app/icon.png";
import { MdMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

import { UserNav } from "../UserNav";
import Image from "next/image";
import { getUserAdminGuilds } from "@/utils/api";
import { auth } from "@/auth";
import { ServerMenu } from "../ServerMenu";
import { ThemeButton } from "../ThemeButton";
import { SignOut } from "../SignOut";

const routes = [
  {
    title: "Inicio",
    to: "/",
    icon: <FaHome />
  }
];

export default async function Sidebar() {
  const session = await auth();
  
  let guilds = [];

  if (session) {
    guilds = await getUserAdminGuilds();
  }

  return (
    <div className="flex">
      <nav className={`bg-custom-dark-gray w-64 hidden sm:flex flex-col justify-between`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-5">
            <Link
              className="flex items-center gap-2"
              href="/"
            >
              <Image
                alt="Pochi Logo"
                width={32}
                height={32}
                src={Icon}
              />
              <span className="font-bold text-lg">Pochi</span>

            </Link>
            {/* <ThemeButton/> */}
          </div>

          {routes.map((route) => (
            <Link
              key={route.to}
              href={route.to}
              className={cn("flex items-center gap-2 p-4 hover:bg-gray-500 rounded")}
            >
              {route.icon}
              {route.title}
            </Link>
          ))}

          <ServerMenu guilds={guilds} />
        </div>

        <div className="p-5 flex items-center justify-between">
          <UserNav />
        </div>
      </nav>

      <div className="flex-grow sm:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="p-2">
              <MdMenu size={32} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="border p-5 rounded">
            {routes.map((route) => (
              <DropdownMenu.Item key={route.to}>
                <Link
                  href={route.to}
                  className={cn(
                    "block py-2 px-4 hover:bg-gray-300 rounded"
                  )}
                >
                  {route.title}
                </Link>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}
