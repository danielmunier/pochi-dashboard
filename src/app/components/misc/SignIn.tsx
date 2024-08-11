import { auth, signIn } from '@/auth';
import { FaDiscord } from 'react-icons/fa';
import { UserNav } from './UserNav';

export async function SignIn() {
    const session = await auth();

  return (
        <div>
            <form action={
                async () => {
                    "use server"
                    await signIn("discord")
                }
            }>

                <button
                    type='submit'
                    className="flex items-center gap-2 bg-blue-500 p-1 hover:bg-blue-400 text-white font-bold px-4 rounded"
                >
                    <FaDiscord size={30} />
                    <span>Login</span>
                </button>
            </form>
        </div >
    );

    
}
