
import { auth, signIn } from "@/auth"
import Link from "next/link"

import { useEffect } from "react"
import { FaDiscord } from "react-icons/fa"

export default async function Home() {
  const session = await auth()
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center flex flex-col">
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to Pochi! {session?.user?.name || ""}</h1>
        {/* Menu */}

        <form 
        className="flex flex-col gap-4"
        action={async () => {
        "use server"
        await signIn('discord')
      }}>
          <button
          type="submit"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            <FaDiscord size={30} />
            <span>Login with discord</span>
          </button>

        </form>
        <Link 
        href="/menu">Menu</Link>
      </div>
    </div>
  )
}
