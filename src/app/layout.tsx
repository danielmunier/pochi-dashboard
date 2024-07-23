import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react"

import { Inter } from "next/font/google";
import "../styles/globals.css";
import NextAuthSessionProvider from "@/providers/sessionProvider";


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
          {children}

      </body>
    </html>

  );
}
