import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

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
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${Icon}`} type="image/png" />
        <meta property="og:title" content="Pochi" />
        <meta property="og:description" content="Olá, me chamo Pochi! Sou um bot vários propósitos e funções para o Discord. Me adicione em seu servidor!" />
        <meta property="og:image" content={`${Icon}`} />
        <meta property="og:url" content="https://pochi-dashboard.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pochi" />
        <meta name="twitter:description" content="Olá, me chamo Pochi! Sou um bot vários propósitos e funções para o Discord. Me adicione em seu servidor!" />
        <meta name="twitter:image" content={`${Icon}`} />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="pochi-theme">
          <div className="flex h-full">
            <Sidebar />
            <div className="flex-grow gap-2 p-4">
              <main>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
