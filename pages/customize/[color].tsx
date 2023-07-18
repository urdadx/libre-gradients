import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState, useEffect, useRef } from "react";
import { Gradient } from "@/types/gradients";
import data from "@/data/gradients.json";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import CircularSlider from "@fseehawer/react-circular-slider";
import { CopyIcon, Download } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CodePreview } from "@/components/code-preview";
import html2canvas from "html2canvas";


const Color = () => {
	const colorGradient: Gradient[] = data;

	const [gradients, setGradients] = useState<Gradient[]>([]);
	const [, setIsLoading] = useState(false);
	const [rotation, setRotation] = useState(140);

	const router = useRouter();
	const { color } = router.query;

	useEffect(() => {
		setIsLoading(true);
		try {
			setGradients(colorGradient);
		} catch (error) {
			toast.error("There was an error");
		} finally {
			setIsLoading(false);
		}
	}, [colorGradient]);

	const downloadRef = useRef<HTMLDivElement>(null);

	const handleDownloadPNG = async () => {
		if (downloadRef.current) {
			const scale = 1.5;
			const width = downloadRef.current.offsetWidth * scale;
			const height = downloadRef.current.offsetHeight * scale;

			try {
				toast.success(`${color}.png`)
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
						a.download = `${color}.png`;
						a.click();
					}
				})
			} catch (error) {
				toast.error("An error occured")
			}

		}

	};


	return (
		<>
			<SiteHeader showGenerate={false} />
			<div className="mt-16 flex flex-col justify-center">
				<h3 className="hero-title text-5xl text-center font-extrabold">
					Customize
				</h3>
				<h3 className="text-lg mt-4 text-gray-400 text-center">
					Customize gradients to fit your design style ✨
				</h3>
			</div>
			<div className="w-full mx-auto flex justify-center my-14 sm:flex-wrap">
				{gradients.map((gradient) => {
					if (gradient.name === color) {
						return (
							<>
								<div className="w-auto h-auto flex flex-row gap-4 border rounded-2xl">
									<div className="w-[600px] p-6 border-r bg-gray-50 rounded-l-2xl">
										<div ref={downloadRef} key={gradient.name} className="download-me w-full h-[350px] rounded-md blur-0"
											style={{
												background: `linear-gradient(${rotation}deg, ${gradient.colors[0]}, ${gradient.colors[1]})`,
											}}
										/>
									</div>
									<div className=" w-2/5 p-2 font-semibold block mr-4">
										<div className="w-[420px]">
											<div className="flex justify-center gap-6 my-4">
												{gradient.colors?.map((color, index) => {
													return (
														<div key={index}
															className="flex flex-col gap-2">
															<p className="text-gray-600">
																Color {index + 1}
															</p>
															<div className="w-[205px] border rounded-md flex items-center justify-between h-[40px] p-2">
																<small className="px-2 text-sm font-medium">
																	{color}
																</small>
																<div style={{
																	background: `${color}`,
																}}
																	className="w-[30px] h-[30px] rounded-lg">
																	<input
																		type="color"
																		className="opacity-0 cursor-pointer"
																	/>
																</div>
															</div>
														</div>
													);
												}
												)}
											</div>
											<div className="flex flex-col my-6 gap-y-4">
												<p className="text-gray-600">
													Rotation
												</p>
												<div className="w-[100px] mx-auto z-0">
													<CircularSlider
														dataIndex={rotation}
														onChange={(angle: number) => {
															setRotation(angle)
														}}
														initialValue={140}
														width={100}
														valueFontSize="20px"
														labelFontSize="9px"
														verticalOffset="0em"
													/>
												</div>
											</div>
											<p className="text-gray-600">Export</p>
											<div className="w-full flex flex-row gap-x-4 mt-2">
												<Dialog>
													<DialogTrigger asChild>
														<Button
															size="lg"
															className="w-[200px] h-[50px] bg-[#6057eb] border border-[#7d75ee] flex gap-2 items-center text-white hover:bg-[#7d75ee]"
															variant="default">
															<p className="font-semibold text-md">
																Copy CSS code
															</p>
															<CopyIcon size={20} />
														</Button>
													</DialogTrigger>
													<CodePreview rotation={rotation} colors={gradient.colors} />
												</Dialog>

												<Button
													onClick={handleDownloadPNG}
													size="lg"
													className="w-[200px] h-[50px] bg-background border border-[#7d75ee] flex gap-2 items-center text-[#7d75ee] hover:bg-gray-100"
													variant="default">
													<p className="font-semibold text-md">
														Download PNG
													</p>
													<Download size={20} />
												</Button>

											</div>
										</div>
									</div>
								</div>
							</>
						);
					}
				})}
			</div>
			<SiteFooter />
		</>
	);
};

export default Color;
