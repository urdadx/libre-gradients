import { GradientCard } from "./gradient-card";
import data from "../data/gradients.json";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Gradient } from "@/types/gradients";
import useSearchText from "@/context/app-store";
import Loader from "./loader-spinner";

const GradientList = () => {
	const colorGradient: Gradient[] = data;

	const [gradients, setGradients] = useState<Gradient[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const [searchText] = useSearchText((state) => [state.searchText, state.updateSearchText]);

	useEffect(() => {
		setIsLoading(true);
		try {
			setTimeout(() => {
				setGradients(colorGradient);
			}, 1000)
		} catch (error) {
			toast.error("There was an error");
		} finally {
			setIsLoading(false);
		}
	}, [colorGradient]);

	if (isLoading) {
		return <div className="">Loading</div>;
	}

	return (
		<>
			<div className="px-8 pt-1 pb-3 w-full gap-x-10 gap-y-6 flex items-center justify-center flex-wrap">
				{gradients.length > 0 ? gradients
					.filter((gradient) => {
						if (searchText === "") {
							return gradient;
						} else if (
							gradient.name
								.toLowerCase()
								.includes(searchText.toLowerCase())
						) {
							return gradient;
						} else if (
							gradient.colors[0]
								.toLowerCase()
								.includes(searchText.toLowerCase())
						) {
							return gradient;
						} else if (
							gradient.colors[1]
								.toLowerCase()
								.includes(searchText.toLowerCase())
						) {
							return gradient;
						}
					})
					.map((gradient, index) => (
						<GradientCard
							key={index}
							name={gradient.name}
							gradient={gradient}
						/>
					)) : <Loader />}
			</div>
		</>
	);
};

export default GradientList;
