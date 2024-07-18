"use client"
import Image from "next/image";
import { MdSpaceDashboard } from "react-icons/md";
import { FaWrench, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";



const routes = [
  {
    name: 'dashboard',
    icon: <MdSpaceDashboard size={28} />,
    getPath: (id: string) => `/dashboard/${id}`,
  },
  {
    name: 'settings',
    icon: <FaWrench size={28} />,
    getPath: (id: string) => `/dashboard/${id}/settings`,
  },
  {
    name: 'Voltar',
    icon: <FaArrowLeft size={28} />,
    getPath: (id: string) => `/menu`,
  },
];

export const Sidebar = () => {
  const params = useParams()

  return (
    <div className="">
      <div className="flex justify-center p-3">
        <Image
          src="https://cdn.discordapp.com/icons/1041140810881699860/5f5e3eafb46342d45703cb973e17934f.png"
          height={90}
          width={90}
          alt="guild_avatar"
          className="rounded-full "
        />
      </div>

      <div className="flex flex-col items-center space-y-8">
       {
        routes.map((route) => (
          <div key={route.name} className="text-gray-400 p-4 hover:text-white transition duration-300 cursor-pointer w-full space-x-4">
            <Link href={route.getPath(params.id as string)} className="flex flex-row space-x-4">
            {route.icon} <span>{route.name}</span>
            </Link>
          </div>
        ))
       }
      </div>
    </div>
  );
};
