import * as React from "react";
import { Category } from "@/types/category";
import { CommandItem } from "./command-item";

export default function CommandBar() {
  const categories: Category[] = [
    {
      name: "red",
      color: "#FF025E",
    },
    {
      name: "yellow",
      color: "#FFD000",
    },
    {
      name: "green",
      color: "#64f38c",
    },
    {
      name: "blue",
      color: "#019df7",
    },
    {
      name: "black",
      color: "#161a1d",
    },
    {
      name: "white",
      color: "#fff",
    },
  ];
  return (
    <>
      <div className="px-3 pt-4  w-full flex items-center justify-center flex-wrap">
        {categories.map((item, index) => (
          <CommandItem key={index} category={item} />
        ))}
      </div>
    </>
  );
}
