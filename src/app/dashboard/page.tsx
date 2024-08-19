
import { fetchMutualGuilds, getUserAdminGuilds } from "@/utils/api";
import { Guild } from "@/utils/types";
import { GuildMenuItem } from "@/app/components/guilds/GuildMenuItem";
import { auth } from "@/auth";
import { getToken } from "next-auth/jwt";
import { Suspense } from "react";


export default async function MenuPage() {
  const session = await auth()
  if (!session) return <>Not Authenticated</>


  return (
    <div className="container mx-auto p-4">
     <h1>Dashboard</h1>
    </div>
  );
}
