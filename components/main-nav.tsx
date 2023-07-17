import * as React from "react";
import Link from "next/link";
import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { Input } from "./ui/input";
import useSearchText from "@/context/app-store";

interface MainNavProps {
	items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
	const [updateSearchText] = useSearchText((state) => [state.updateSearchText]);

	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="flex items-center space-x-2">
				<div className="bg-[#7269E7] w-[20px] h-[20px] rounded-full" />
				<span className="inline-block text-[#7269E7] font-bold">
					{siteConfig.name}
				</span>
			</Link>

			<nav className="flex gap-3 w-[550px] mx-auto">
				<Input
					onChange={(e) => updateSearchText(e.currentTarget.value)}
					type="search"
					placeholder="Search gradients by name or hex code..."
				/>
			</nav>
		</div>
	);
}
