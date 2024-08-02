
import { cn } from "@/utils/lib"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { MdMenu } from "react-icons/md";
import { UserNav } from "../UserNav";


const routes = [
	{
		title: "Inicio",
		to: "/",
	},
	{
		title: "Meus servidores",
		to: "/menu",
	}
]

export default function Nav() {
	return (
		<nav className="w-full bg-card border-b">
			<div className="flex justify-between p-5 h-16">
            
				<div className="sm:hidden">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger>
                           <MdMenu size={32}/>
						</DropdownMenu.Trigger>
						<DropdownMenu.DropdownMenuContent className="border p-5 rounded">
							{routes.map((route) => (
								<DropdownMenu.DropdownMenuItem key={route.to}>
									<Link
										key={route.to}
										href={route.to}
										className={cn(
											"text-muted-foreground font-semibold hover:text-primary",
									
										)}>
										{route.title}
									</Link>
								</DropdownMenu.DropdownMenuItem>
							))}
						</DropdownMenu.DropdownMenuContent>
					</DropdownMenu.Root>
				</div>
                          
				<div className="gap-x-4 font-semibold hidden sm:flex">
					{routes.map((route) => (
						<Link
							key={route.to}
							href={route.to}
							className={cn(
								"text-muted-foreground hover:text-primary",
								
							)}>
							{route.title}
						</Link>
					))}
				</div>

                <UserNav/>
			</div>
		</nav>
	)
}