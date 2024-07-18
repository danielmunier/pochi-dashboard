
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Guild } from "@/utils/types";
import { GuildContext, GuildProvider } from "./context/GuildContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pochi Dashboard",
  description: "Dashboard of Pochi Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GuildProvider >
          {children}
        </GuildProvider>
        
        </body>
    </html>
  );
}