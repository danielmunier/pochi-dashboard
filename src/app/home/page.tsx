import { FaPlay, FaPlus } from "react-icons/fa";
import Nav from "../components/misc/nav";
import Image from "next/image";
import { getBotGuilds } from "@/utils/api";
import { Guild } from "@/utils/types";
import Icon from "@/app/icon.png"

// Function to shuffle an array
function shuffleArray(array: Guild[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default async function Home() {
  let botGuilds: Guild[] = [];

  try {
    botGuilds = await getBotGuilds();
    botGuilds = shuffleArray(botGuilds).slice(0, 5); // Shuffle and select only 5 guilds
  } catch (error) {
    console.error("Failed to fetch bot guilds:", error);
  }

  return (
    <div className="flex flex-col min-h-screen text-white bg-custom-dark-gray">
      <section className="flex flex-col justify-center items-center flex-grow m-5">
        <div className="flex flex-col gap-5 text-center max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight">
            Descubra o melhor bot de Discord para a sua comunidade.
          </h1>
          <p className="text-gray-400">
            Um bot de Discord desenvolvido para ajudar a manter a comunidade com o melhor gerenciamento.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
              Adicionar ao Discord
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-transparent border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
              <FaPlay />
              <span>Ver mais detalhes</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-custom-gray p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Servidores populares com o nosso bot </h1>
        </div>
        <div className="flex justify-center gap-5 overflow-x-auto">
          {botGuilds.length > 0 ? (
            botGuilds.map((guild: Guild) => (
              <div key={guild.id} className="bg-custom-dark p-5 rounded-lg shadow-md flex flex-col items-center w-64">
                <Image
                  src={guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : Icon} // Fallback to a default icon if the guild doesn't have one
                  alt={guild.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">{guild.name}</h3>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">Nenhum servidor disponível.</p>
          )}
        </div>
      </section>


    </div>
  );
}
