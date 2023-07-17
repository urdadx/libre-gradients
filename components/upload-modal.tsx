import { ImageSVG } from "./image-svg";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";


export const UploadModal = ({ onChange, value, submit }
	: { onChange: (a: string) => void , value: string, submit: () => void }) => {

	const [base64, setBase64] = useState(value);

	const handleChange = useCallback((base64: string) => {
			onChange(base64);
		}, 
		[onChange]
	);

	const handleDrop = useCallback((files: any) => {
			const file = files[0];
			const maxSize = 2 * 1024 * 1024;

			if (file.size > maxSize) {
				alert("Max file size exceeded. Please upload a file under 2MB.");
				return;
			}

			const reader = new FileReader();
			reader.onload = (event) => {
				if(event.target){
					const value = event.target.result as string;
					setBase64(value);
					handleChange(value);		
				}
			};
			reader.readAsDataURL(file);
		},
		[handleChange]
	);

	const { getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
		onDrop: handleDrop,
		accept: {
			"image/jpeg": [],
			"image/png": [],
		},
	});

	return (
		<>
			<DialogContent>
				<DialogHeader className="mx-auto">
					<DialogTitle>Choose an image 🎨</DialogTitle>
				</DialogHeader>
				<div {...getRootProps({ className:"w-full h-[250px] flex flex-col justify-center border-2 border-dashed rounded-md my-4" })} >
					
					<div className="flex w-full justify-center my-4">
						<ImageSVG />
					</div>
					<h3 className="text-center text-gray-500">

						Drag and drop or click to upload an image ✨
					</h3>
				</div>
			</DialogContent>
		</>
	);
};
