import toast from "react-hot-toast";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import html2canvas from "html2canvas";
import { useRef } from "react";

export const DownloadPreview = ({ colors, rotation }: { colors: String[], rotation?: Number }) => {

    const gradientPreview = `
        linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})
    `
    const downloadRef = useRef<HTMLDivElement>(null);

    const handleDownloadPNG = async () => {
        if (downloadRef.current) {
            const scale = 1.5;
            const width = downloadRef.current.offsetWidth * scale;
            const height = downloadRef.current.offsetHeight * scale;

            try {
                toast.success(`gradient.png`)
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
                        a.download = `gradient.png`;
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
            <DialogContent>
                <DialogHeader className="mx-auto">
                    <DialogTitle className="text-gray-600">
                        Preview gradient ✨
                    </DialogTitle>
                </DialogHeader>
                <div className="w-full h-[230px] flex flex-col justify-center rounded-md">
                    <div ref={downloadRef} className="w-full h-[210px] rounded-md blur-0"
                        style={{
                            background: `${gradientPreview}`
                        }}
                    />
                </div>
                <div className="flex justify-center">
                    <Button className="generate-btn" onClick={handleDownloadPNG}>Download 🚀</Button>
                </div>
            </DialogContent>
        </>
    );
};
