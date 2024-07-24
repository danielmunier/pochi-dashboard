import Link from 'next/link';
import { Theme, Box } from '@radix-ui/themes';
import { cn } from '@/utils/helper';
import { FaDiscord } from 'react-icons/fa';
import { UserNav } from './UserNav';
import { auth, signIn } from '@/auth';
import { SignIn } from './SignIn';

export default async function Navbar() {
    const session = await auth()
    return (
        <nav className="flex items-center justify-between h-[60px] px-6">
            <div className="flex items-center space-x-4 lg:space-x-6">
                <Link href="/" className="flex items-center gap-2 font-semibold" prefetch={false}>
                    <span className="text-white">Pochi Dashboard</span>
                </Link>
                <Link href="/menu" className="text-sm font-medium text-white transition-colors hover:text-primary">
                    Meus servidores
                </Link>
                <Link href="/examples/dashboard" className="text-sm font-medium text-white transition-colors hover:text-primary">
                    Sobre nós
                </Link>
            </div>
        <SignIn session={session}/>
        </nav>
    );
}