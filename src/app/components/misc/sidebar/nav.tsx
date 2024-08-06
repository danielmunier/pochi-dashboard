import { cn } from "@/utils/lib";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import Icon from "@/app/icon.png"
import { MdMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

import { UserNav } from "../UserNav";
import Image from "next/image";

const routes = [
  {
    title: "Inicio",
    to: "/",
    icon: <FaHome />
  },
  {
    title: "Meus servidores",
    to: "/dashboard",
    icon: <MdGroups />

  },
];

export default function Sidebar() {
  return (
    <div className="flex border-b">
      <nav className="border-r w-64 hidden sm:block">
        <div className="p-5">
          <Link
            className="flex items-center mb-5 gap-2"
            href="/">

            <Image
              alt="Pochi Logo"
              width={32}
              height={32}
              src={Icon}
            />
            <span className="font-bold text-lg">Pochi</span>

          </Link>

          {routes.map((route) => (

            <Link
              key={route.to}
              href={route.to}
              className={cn("flex items-center gap-2 py-2 px-4 hover:bg-gray-300 rounded border-b-2")}
            >
              {route.icon}
              {route.title}
            </Link>
          ))}
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
