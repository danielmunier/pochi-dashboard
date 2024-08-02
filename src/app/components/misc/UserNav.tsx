import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar"
import { SignOut } from "./SignOut";


export const UserNav = async ({session}: {session: any}) => {
   
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="relative h-9 w-9 rounded-full">
                    <Avatar.Root>
                        <Avatar.Image
                            className="rounded-full"
                            src={session.user?.image ?? ""}
                        />


                    </Avatar.Root>
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="w-50" forceMount >
                    <DropdownMenu.Label className="font-normal">
                        <div className="flex flex-col space-y-2 rounded-sm border-slate-700	border-2 p-4">
                            <p className="text-sm font-medium leading-none">{session.user?.name}</p>
                            <p className="text-xs leading-none text-muted-foreground">
                                {session.user?.email}
                            </p>
                           <SignOut/>
                        </div>
                    </DropdownMenu.Label>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>

        </DropdownMenu.Root>
    )
}