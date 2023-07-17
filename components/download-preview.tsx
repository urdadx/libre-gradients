import toast from "react-hot-toast";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

export const DownloadPreview = ({ colors, rotation }: {colors: String[], rotation: Number}) => {

    const handleDownload = () => {

    }
    
	return (
		<>
			<DialogContent>
				<DialogHeader className="mx-auto">
					<DialogTitle className="text-gray-600">
                        Preview image
                    </DialogTitle>
				</DialogHeader>
				<div className="w-full h-[230px] flex flex-col justify-center rounded-md">
                    <div className="w-full h-[210px] rounded-md blur-0"
                        style={{
                            background: `linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]})`,
                        }}
                    />
				</div>
                <div className="flex justify-center">
                    <Button className="generate-btn" onClick={handleDownload}>Download</Button>
                </div>
			</DialogContent>
		</>
	);
};
