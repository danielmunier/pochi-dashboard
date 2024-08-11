import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import { auth } from "@/auth";
import { SignIn } from "./SignIn";
import Link from "next/link";
import { getUserData } from "@/utils/api";
import { SignOut } from "./SignOut";

export const UserNav = async () => {
    const session = await auth();
    const user = await getUserData()

    if (!session) {
        return <SignIn />;
    }

    return (
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button className="flex items-center gap-2 p-2">
                        <Avatar.Root className="inline-flex items-center justify-center overflow-hidden h-9 w-9">
                            <Avatar.Image
                                className="h-full w-full"
                                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` ?? ""}
                                alt={session.user?.name ?? "User"}
                            />
                            <Avatar.Fallback
                                className="flex items-center justify-center h-full w-full text-sm"
                                delayMs={600}
                            >
                                {session.user?.name?.charAt(0).toUpperCase()}
                            </Avatar.Fallback>
                        </Avatar.Root>
                        <span className="text-sm font-medium">
                            {session.user?.name}
                        </span>
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content className="w-50 mt-2 rounded-md shadow-lg">
                        <DropdownMenu.Label className="font-normal">
                            <div className="flex flex-col space-y-2 rounded-sm border-2 p-4 w-40 hover:bg-gray-500">
                                <Link href={"/user"} className="text-sm font-medium leading-none">Perfil</Link>

                            </div>
                        </DropdownMenu.Label>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
            <SignOut/>

        </>
    );
};
