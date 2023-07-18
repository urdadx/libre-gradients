import React, { useRef } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ThreeDots from "./three-dots";
import { Clipboard, Download, Paintbrush } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import html2canvas from "html2canvas";

interface Gradient {
	name: string;
	colors: string[];
}

interface GradientCardProps {
	gradient: Gradient;
	name: String;
}

export const GradientCard: React.FC<GradientCardProps> = ({ gradient }) => {
	const { name, colors } = gradient;

	const code = `
		background: linear-gradient(140deg, ${colors[0]}, ${colors[1]}),
	`
	const handleCopyCode = () => {
		navigator.clipboard.writeText(code);
		toast.success("Code copied to clipboard!");
	};

	const downloadRef = useRef<HTMLDivElement>(null);

	const handleDownloadPNG = async () => {
		if (downloadRef.current) {
			const scale = 1.5;
			const width = downloadRef.current.offsetWidth * scale;
			const height = downloadRef.current.offsetHeight * scale;

			await toast.promise(
				html2canvas(downloadRef.current, { scale }).then((canvas) => {
					const scaledCanvas = document.createElement("canvas");
					scaledCanvas.width = width;
					scaledCanvas.height = height;

					const scaledContext = scaledCanvas.getContext("2d");
					if (scaledContext) {
						scaledContext.drawImage(canvas, 0, 0, width, height);
						const url = scaledCanvas.toDataURL("image/png");
						const a = document.createElement("a");
						a.href = url;
						a.download = `${name}.png`;
						a.click();
					}
				}),
				{
					loading: "Downloading",
					error: "An error occured",
					success: `Saved ${name}.png`
				}
			)

		}

	};


	return (
		<>
			<div className="group h-[240px] w-[240px] shadow-md border cursor-pointer rounded-md flex flex-col items-start justify-end relative overflow-hidden dark:border-[#444]">
				<div
					onClick={handleCopyCode}
					ref={downloadRef}
					style={{
						background: `linear-gradient(140deg, ${colors[0]}, ${colors[1]})`,
					}}
					className="h-[190px] w-full flex justify-between items-center overflow-hidden">
					<h4 className="group-hover:block hidden text-sm font-semibold text-white my-auto mx-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100">
						{name}
					</h4>
				</div>
				<div className="py-2 px-1 flex justify-between items-center h-[50px] w-full bg-white overflow-hidden">
					<div className="p-2 flex items-start ">
						{colors.map((color, index) => (
							<div
								key={index}
								className=" flex items-center px-1 gap-1">
								<div
									className="w-[20px] h-[20px] rounded-sm "
									style={{ backgroundColor: color }}></div>
								<small
									style={{ color: color }}
									className="font-semibold">
									{color}
								</small>
							</div>
						))}
					</div>
					<Popover>
						<PopoverTrigger>
							<ThreeDots className="h-5 w-5 font-extrabold text-gray-500" />
							<PopoverContent className="flex flex-row text-sm cursor-pointer">
								<ul className="">
									<Link
										href={`/customize/${name}`}
										className="py-2 flex gap-2 items-center text-gray-700 hover:text-blue-500">
										<Paintbrush size={17} /> Open in editor
									</Link>
									<li onClick={handleCopyCode} className="py-2 flex gap-2 items-center text-gray-700 hover:text-blue-500">
										<Clipboard size={15} />
										Copy CSS code
									</li>
									{/* <li onClick={handleDownloadPNG}
										className="py-2 flex gap-2 items-center text-gray-700 hover:text-blue-500">
										<Download size={17} /> Download
									</li> */}
								</ul>
							</PopoverContent>
						</PopoverTrigger>
					</Popover>
				</div>
			</div>
		</>
	);
};
