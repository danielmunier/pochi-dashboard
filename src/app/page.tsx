'use client'
import Link from "next/link"
import { useEffect } from "react"
import { FaDiscord } from "react-icons/fa"

export default function Home() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center flex flex-col">
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to Pochi</h1>
        {/* Menu */}

        <button
          className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          <FaDiscord size={30} />
          <Link href="/api/auth/discord">Login with Discord</Link>
          <Link href="/menu">Menu</Link>
        </button>
      </div>
    </div>
  )
}
