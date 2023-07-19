import { useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import testImage from "../public/test_image.jpg";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { CopyIcon, Download, ImageIcon } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CodePreview } from "@/components/code-preview";
import { DownloadPreview } from "@/components/download-preview";
import { Palette } from "color-thief-react";
import Loader from "@/components/loader-spinner";
import { samples } from "@/lib/helpers";

const Generate = () => {

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [, setIsLoading] = useState(false);
  const [image, setImage] = useState<any>(testImage);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onLoad = (fileString: string) => {
    setImage(fileString);
  };

  const getBase64 = (file: File) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onLoad(reader.result);
      }
    };
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const files = e.target.files;
    const file = files && files[0];
    if (file) {
      getBase64(file);
    }
    setIsLoading(false);
  };

  const imgSrc = image;

  return (
    <>
      <SiteHeader showGenerate={false} />
      <div className="mt-16 flex flex-col justify-center">
        <h3 className="hero-title text-5xl text-center font-extrabold">
          Color Palettes
        </h3>
        <h3 className="text-lg mt-4 text-gray-400 text-center">
          Generate beautiful color palettes from your images 🚀
        </h3>
      </div>
      <div className="w-full  mx-auto flex justify-center my-16 sm:flex-wrap">
        <div className="w-auto flex flex-row gap-4 border rounded-2xl">
          <div className="w-[600px] p-6 border-r bg-gray-50 rounded-l-2xl">
            <Image
              width={600}
              height={250}
              alt="test-image"
              className="h-[400px] object-cover overflow-hidden rounded-md blur-0"
              src={imgSrc}
            />
            <div className="mt-8 mb-2">
              <div>
                <input
                  ref={fileInputRef}
                  className="opacity-0 absolute"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
                <Button
                  onClick={handleClick}
                  size="lg"
                  className="w-full h-[50px] bg-[#6057eb] flex gap-2 justify-center items-center
                text-white hover:bg-[#7d75ee]"
                  variant="default"
                >
                  <p className="text-white font-semibold text-md">
                    Upload an image
                  </p>
                  <ImageIcon size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-2/5 p-2 font-semibold block mr-4">
            <div className="translate-y-1/3 w-[450px] block my-1">
              <p className="text-xl text-gray-500 mb-2 mt-2 text-center">
                Extracted colors ✨
              </p>
              <Palette
                src={imgSrc}
                crossOrigin="anonymous"
                format="hex"
                colorCount={4}
              >
                {({ loading, data }) => {
                  if (loading) return <div className=""><Loader /></div>;
                  return (
                    <>

                      <div className="display-namew-full py-4 flex justify-center overflow-hidden cursor-pointer relative">
                        <div className="flex flex-row gap-x-6">

                          {
                            !data && samples.map((color: string) => {
                              return (
                                <div className="flex flex-col gap-2" key={color}>
                                  <div
                                    style={{
                                      background: `${color}`,
                                    }}
                                    className={`rounded-md w-[60px] h-[60px]`}
                                  ></div>
                                  <span
                                    className={`text-[${color}] text-sm font-medium`}
                                  >
                                    {color}
                                  </span>
                                </div>
                              )
                            })
                          }
                          {data?.map((color: string) => (
                            <div className="flex flex-col gap-2" key={color}>
                              <div
                                style={{
                                  background: `${color}`,
                                }}
                                className={`rounded-md w-[60px] h-[60px]`}
                              ></div>
                              <span
                                className={`text-[${color}] text-sm font-medium`}
                              >
                                {color}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-[450px] h-auto translate-y-32 flex flex-col gap-[15px]">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="lg"
                              className="w-full h-[50px] bg-background border border-[#7d75ee] flex gap-2 items-center text-[#7d75ee] hover:bg-gray-100"
                              variant="default"
                            >
                              <p className="font-semibold text-md">Copy CSS code</p>
                              <CopyIcon size={20} />
                            </Button>
                          </DialogTrigger>
                          <CodePreview colors={data ?? samples} rotation={140} />
                        </Dialog>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="lg"
                              className="w-full h-[50px] bg-background border border-[#7d75ee] flex gap-2 items-center text-[#7d75ee] hover:bg-gray-100"
                              variant="default"
                            >
                              <p className="font-semibold text-md">Download gradient</p>
                              <Download size={20} />
                            </Button>
                          </DialogTrigger>
                          <DownloadPreview colors={data ?? samples} rotation={140} />
                        </Dialog>
                      </div>
                    </>
                  );
                }}
              </Palette>

            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export default Generate;
