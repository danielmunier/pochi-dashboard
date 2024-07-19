'use client'
import { FaDiscord } from "react-icons/fa"
import { config } from "dotenv"
config()

export default function Home() {
  const handleLogin = () => {
    const API_URL = 'https://pochi-api.onrender.com' || 'http://localhost:1500'
    window.location.href = API_URL + "/api/auth/discord/redirect"
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <button
          className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          <FaDiscord size={30} />
          <span>Login with Discord</span>
        </button>
      </div>
    </div>
  )
}
