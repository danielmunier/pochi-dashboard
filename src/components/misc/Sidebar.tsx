"use client"
import Image from "next/image";
import { MdSpaceDashboard } from "react-icons/md";
import { BsTerminal } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";



const routes = [
  {
    name: 'dashboard',
    icon: <MdSpaceDashboard size={48} />,
    getPath: (id: string) => `/dashboard/${id}`,
  },
  {
    name: 'commands',
    icon: <BsTerminal size={48} />,
    getPath: (id: string) => `/dashboard/${id}/commands`,
  },
  {
    name: 'settings',
    icon: <FaWrench size={48} />,
    getPath: (id: string) => `/dashboard/${id}/settings`,
  },
];

export const Sidebar = () => {
  const params = useParams()

  return (
    <div>
      <div className="mb-4 p-4">
        <Image
          src="https://cdn.discordapp.com/icons/1041140810881699860/5f5e3eafb46342d45703cb973e17934f.png"
          height={40}
          width={40}
          alt="guild_avatar"
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col items-center space-y-8">
       {
        routes.map((route) => (
          <div key={route.name} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
            <Link href={route.getPath(params.id as string)}>
            {route.icon}
            </Link>
          </div>
        ))
       }
      </div>
    </div>
  );
};
