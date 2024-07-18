// src/utils/api.ts
import axios from "axios";
import { Guild } from "./types";
import { validateCookies } from "./helper";
import { FormData } from "@/app/dashboard/[id]/page";





export const fetchMutualGuilds = async () => {
  const headersObject = await validateCookies();



  if (!headersObject) {
    return { guilds: [] }; // Return an empty list if cookie validation fails
  }




  try {
    const { data: guilds } = await axios.get(`${process.env.API_URL}/api/guilds/`, {
      headers: headersObject,
    })

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

export const fetchGuildChannels = async (id: string) => {
  const headers = await validateCookies();
  if (!headers) {
    return [];
  }
  try {
    const { data: guilds } = await axios.get(`${process.env.API_URL}/api/guilds/${id}/channels`,
      {
        headers: headers
      }

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

export const fetchGuildConfig = async (id: string) => {

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
    const {data: roles} = await axios.get(`/api/guilds/${id}/roles`)
    return roles
    
  } catch (error) {
    console.log(error)
    
  }
}