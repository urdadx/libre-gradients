import CommandBar from "@/components/command-bar";
import GradientList from "@/components/gradient-list";
import { Layout } from "@/components/layout";
import Beams from "../public/beams.jpg";
import Image from "next/image";

export default function IndexPage() {
	return (
		<>
			<Layout>
				<Image
					alt="img"
					src={Beams}
					className="w-screen absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
				/>
				<div className="relative inset-0 bg-[url(../public/grid.svg)] bg-center [mask-image:linear-gradient(180deg,rgba(255,255,255,0))]">
					<div className=" container mx-auto grid items-center gap-6 pb-8 pt-4 md:py-2">
						<CommandBar />
						<GradientList />
					</div>
				</div>
			</Layout>
		</>
	);
}
