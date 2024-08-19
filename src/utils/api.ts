// src/utils/api.ts
import axios from "axios";
import { Guild } from "./types";
import { validateCookies } from "./helper";
import { FormData } from "@/app/dashboard/[id]/page";
import { auth } from "../auth";


export const handleLogin = async () => {
  return axios.get(`/api/auth/discord`)
}

export const addBot = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/api/bot`);
    return response;
  } catch (error) {
    console.log(error);
    return { error: "Erro ao adicionar bot no servidor" };
  }
};

export const getBotGuilds = async () => {
  try {
    const { data: botGuilds } = await axios.get(`${process.env.API_URL}/api/guilds/`)
    console.log(botGuilds.guilds)
    return botGuilds.guilds
  } catch (error) {
    console.log(error)
  }
}

export const getUserData = async () => {
  try {
    const session = await auth()
    if (!session || !session.accessToken) {
      console.log(session)
      throw new Error("No access token empty or no session found");
    }

    const { data: userData } = await axios.get(`${process.env.API_URL}/api/user/`, {
      headers: {
        Authorization: `${session.accessToken}`,
      },
    })
    return userData
  } catch (error) {

  }
}

export const getUserAdminGuilds = async () => {
  try {
    const session = await auth()
    if (!session || !session.accessToken) {
      console.log(session)
      throw new Error("No access token empty or no session found");
    }


    const { data: userGuilds } = await axios.get(`${process.env.API_URL}/api/user/guilds/`, {
      headers: {
        Authorization: `${session.accessToken}`,
      },
    })
    return userGuilds
  } catch (error) {
    console.log(error)
    return { message: "Erro ao consultar guildas dos usuários" }
  }

}

export const fetchMutualGuilds = async () => {


  try {

    const { data: guilds } = await axios.get(`http://localhost:3000/api/user/guilds/`)
    return { guilds }
  } catch (e) {
    console.error(e);
    return { guilds: [] };
  }
};

export const fetchValidGuild = async (id: string, headers: HeadersInit) => {
  try {
    const response = await fetch(`${process.env.API_URL}/guilds/${id}/permissions`, {
      headers,
      credentials: "include"
    });
    return response;
  } catch (error: any) {
    console.log(error)
    return {
      status: error.message
    }
  }
};

export const fetchGuild = async (id: string): Promise<Guild | any> => {
  const headers = await validateCookies();
  if (!headers) {
    return { redirect: { destination: "/" } };
  }

  try {
    const { data: guild } = await axios.get<Guild>(`${process.env.API_URL}/guilds/${id}`, {
      headers,
    });
    return { guild };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGuildChannels = async (id: string) => {

  try {
    const { data: guilds } = await axios.get(`/api/guilds/${id}/channels`,


    );


    return guilds;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchTicketConfig = async (id: string) => {
  try {
    const { data: ticketConfig } = await axios.get(`/api/tickets/${id}`)

    return ticketConfig
  } catch (error) {

  }

}

export const getGuildConfig = async (id: string) => {

  try {
    const { data: guildDataConfig } = await axios.get(`/api/guilds/${id}/config`)

    return guildDataConfig

  } catch (error) {
    console.log(error)
    return {}
  }

}



export const updateGuildConfig = async (formData: FormData) => {
  try {

    return axios.post(`/api/guilds/${formData.guildId}/config`, formData)


  } catch (error: any) {
    console.log({ error: error.message })
    return {}

  }
}


export const getGuildRoles = async (id: string) => {
  try {
    const { data: roles } = await axios.get(`/api/guilds/${id}/roles`)
    return roles

  } catch (error) {
    console.log(error)

  }
}