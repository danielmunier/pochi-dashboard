import { authOptions } from "@/auth";

interface PrivateLayoutProps {
    children: React.ReactNode;
}


export default async function PrivateLayout({children}: PrivateLayoutProps) {

  

    return (
        <div>
            {children}
        </div>
    )
}