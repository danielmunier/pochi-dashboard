// src/utils/api.ts
import axios from "axios";
import { Guild } from "./types";
import { validateCookies } from "./helper";
import { redirect } from "next/navigation";

export const fetchMutualGuilds = async () => {
  const headers = validateCookies();
  if (!headers) {
    return { guilds: [] }; // Retorna uma lista vazia se a validação dos cookies falhar
  }

  try {
    const API_URL = "http://localhost:1500/api/";
    const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, {
      headers,
    });
    return { guilds };
  } catch (e) {
    console.error(e);
    return { guilds: [] };
  }
};

export const fetchValidGuild = async (id: string, headers: HeadersInit) => {
  const API_URL = "http://localhost:1500/api";

  const response = await fetch(`${API_URL}/guilds/${id}/permissions`, {
    headers,
  });
  return response;
}

export const fetchGuild = async (id: string): Promise<Guild | any> => {

  try {
    const headers = validateCookies();
    if (!headers) {
      return { redirect: { destination: "/" } }; // Retorna uma lista vazia se a validação dos cookies falhar
    }

    const API_URL = process.env.API_URL;

    const { data: guild } = await axios.get<Guild>(`${API_URL}/guilds/${id}`, {
      headers
    });


    return { guild };
  } catch (error) {
    console.error(error)
  }
};


export const fetchGuildChannels = async (id: string) => {
  const API_URL = process.env.API_URL;
  const headers = validateCookies();
  if (!headers) {
    return { channels: [] }; // Retorna uma lista vazia se a validação dos cookies falhar
  }

  try {
    const { data: channels } = await axios.get(`${API_URL}/guilds/${id}/channels`, {
      headers,
    });

    return channels ;
  } catch (error) {
    console.error(error);
  }
};