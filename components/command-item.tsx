import React from "react";
import Link from "next/link";
import { CategoryItemProps } from "@/types/category";

export const CommandItem = ({ category }: CategoryItemProps) => {
	return (
		<Link
			href={`/category/${category.name}`}
			className="h-10 w-20 lg:w-[11%] p-1 border border-gray-200 rounded-md flex items-center justify-center mx-1"
			style={{ background: category.color }}>
			<h3
				className={`text-md font-bold capitalize Inter ${
					category.name === "white" ? "text-[#000]" : "text-white"
				}`}>
				{category.name}
			</h3>
		</Link>
	);
};
