import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function SiteHeader({ showGenerate }: { showGenerate: boolean }) {
	return (
		<header className="sticky z-40 top-0 w-full border-b bg-background">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-2">
					<nav className="flex items-center space-x-4">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									{showGenerate && (
										<Link
											href="/generate"
											className="generate-btn rounded-sm text-sm text-white font-bold h-10 py-[10px] px-6 w-80 p-1 hover:text-gray-100">
											Generate ⚡️
										</Link>
									)}
								</TooltipTrigger>
								<TooltipContent>
									<p>Extract palettes from an image 🤯</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>

						<Link
							className="flex items-center"
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer">
							<div
								className={buttonVariants({
									size: "sm",
									variant: "ghost",
								})}>
								<Icons.gitHub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link
							href={siteConfig.links.twitter}
							target="_blank"
							rel="noreferrer">
							<div
								className={buttonVariants({
									size: "sm",
									variant: "ghost",
								})}>
								<Icons.twitter className="h-5 w-5 fill-current" />
								<span className="sr-only">Twitter</span>
							</div>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
