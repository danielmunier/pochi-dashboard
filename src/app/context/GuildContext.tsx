// app/context/GuildContext.tsx
"use client";

import { createContext, useState } from "react";
import { Guild } from "@/utils/types";

type GuildContextType = {
  guild?: Guild;
  setGuild: (guild: Guild) => void;
};

export const GuildContext = createContext<GuildContextType>({
  setGuild: () => {},
});

export const GuildProvider = ({ children }: { children: React.ReactNode }) => {
  const [guild, setGuild] = useState<Guild>();

  return (
    <GuildContext.Provider value={{ guild, setGuild }}>
      {children}
    </GuildContext.Provider>
  );
};
