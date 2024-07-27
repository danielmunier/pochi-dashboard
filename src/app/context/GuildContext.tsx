"use client"

import { createContext, ReactNode, useState} from "react"




export const GuildContext = createContext([])


export function GuildProvider({children}: {children: ReactNode}) {
    const [guilds, setGuilds] = useState([])

    function update(guilds: any) {
        setGuilds(guilds)
    }

    return (
        <GuildContext.Provider value={[]}>
            {children}
        </GuildContext.Provider>
    )
}