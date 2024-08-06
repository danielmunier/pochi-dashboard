import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react"
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import { Inter } from "next/font/google";
import "../styles/globals.css";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import Sidebar from "./components/misc/sidebar/nav";
import { ThemeProvider } from "@/providers/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pochi Dashboard",
  description: "Dashboard of Pochi Bot",



};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <html lang="en">
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
