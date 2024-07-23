import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { NextAuthConfig } from "next-auth"
import prismadb from '@/lib/prismadb'
import Discord from "next-auth/providers/discord"

export const authOptions: NextAuthConfig = {
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "identify email guilds",
        },
      },
    }),
  ],
  adapter: PrismaAdapter(prismadb),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days,
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,

  },
  callbacks: {
    async jwt({ token, user, account, profile, session }) {
      if (account?.access_token) {
        token.access_token = account?.access_token
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.access_token
      return session
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log(account)
      return true
    },
  },


}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)