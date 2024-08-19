import Icon from "@/app/icon.png";
import Image from "next/image";
import { UserNav } from "./UserNav";

export default async function Nav() {
    return (
        <nav className="w-full flex items-center justify-between p-5">
            <Image
                alt="App Icon"
                src={Icon}
                width={40}
                height={40}
                className="rounded-full"
            />
            <div className="flex items-center gap-5">
                <ul className="flex gap-5">
                    <li>
                        <a href="/dashboard" className="hover:text-blue-500 transition-colors">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/features" className="hover:text-blue-500 transition-colors">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="/faq" className="hover:text-blue-500 transition-colors">
                            FAQ
                        </a>
                    </li>
                </ul>
                <UserNav />
            </div>
        </nav>
    );
}
