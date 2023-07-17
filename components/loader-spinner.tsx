import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
	return (
		<>
			<div className="flex justify-center mt-10 mx-auto">
				<Oval
					height={80}
					width={80}
					color={"#4B0082"}
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
					ariaLabel="oval-loading"
					secondaryColor={"#4B0082"}
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
			</div>
			
		</>
	);
};

export default Loader;
