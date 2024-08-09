"use client"
import { useTheme } from "next-themes";
import Image from "next/image";

export function UserProfile({user}: {user: any}) {
  const {theme} = useTheme()
  if(!user) return <></>

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,500px)_auto] gap-3 lg:gap-6">
            <div className="flex flex-col">
                {user.banner ? (
                    <Image
                        alt="User banner"
                        src={`https://cdn.discordapp.com/banners/${user.id}/${user.banner}?size=1024`}
                        className="object-cover rounded-2xl aspect-[1100/440]"
                        width={1100}
                        height={440}
                    />
                ) : (
                    <div className="bg-brand rounded-2xl aspect-[1100/440]" />
                )}
                <div className="flex flex-col items-start mt-[-50px] ml-[40px] gap-2">
                    <Image
                        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
                        alt={`${user.username}'s avatar`}
                        className="w-[100px] h-[100px] rounded-full ring-[4px] ring-card-background"
                        width={100}
                        height={100}
                    />
                    <div className="font-semibold text-2xl">{user.username}</div>
                </div>
            </div>
            <div className={`card-full p-4 rounded-3xl h-fit variant-primary ${theme === "dark" ? "bg-custom-dark-gray" : "bg-custom-light-gray"}`}>
                <div className="card-header text-2xl font-semibold">Configurações</div>
                <div className="card-body flex flex-col gap-6 mt-3">
                    {/* Add your configuration options here */}
                </div>
            </div>
        </div>
    )
}
