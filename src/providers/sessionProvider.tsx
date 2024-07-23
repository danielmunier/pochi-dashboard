import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextAuthSessionProvider {
    children: ReactNode
}

export default function NextAuthSessionProvider({ children }: NextAuthSessionProvider) {
    return <SessionProvider>{children}</SessionProvider>


}