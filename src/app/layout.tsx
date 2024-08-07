import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Analytics } from "@vercel/analytics/react"

import { Inter } from "next/font/google";
import "../styles/globals.css";
import Icon from "@/app/icon.png"; // Import the icon for the favicon
import NextAuthSessionProvider from "@/providers/sessionProvider";
import Sidebar from "./components/misc/sidebar/nav";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pochi",
  description: "Olá, me chamo Pochi! Sou um bot vários propósitos e funções para o Discord. Me adicione em seu servidor!",
  keywords: ["Pochi", "Bot Discord", "Pochita", "Chainsaw man"],
  icons: {
    icon: "https://cdn.discordapp.com/icons/1041140810881699860/5f5e3eafb46342d45703cb973e17934f.png"
  },
  openGraph: {
    images: "https://cdn.discordapp.com/icons/1041140810881699860/5f5e3eafb46342d45703cb973e17934f.png",
    
  }

};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`https://cdn.discordapp.com/icons/1041140810881699860/5f5e3eafb46342d45703cb973e17934f.png`} type="image/png" />
      </head>
      <body className={inter.className}>
          <ThemeProvider defaultTheme="dark" storageKey="pochi-theme">
            <div className="flex h-full">
              <Sidebar />
              <div className="flex-grow gap-2 p-4">
                <main>{children}</main>
              </div>
            </div>
          </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
