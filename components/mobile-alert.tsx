import Image from "next/image";
import alertPlaceholder from "@/public/386shots_so.png";
import Arc from "@/public/browsers/arc.webp";
import Chrome from "@/public/browsers/chrome.webp";
import Edge from "@/public/browsers/edge.png";
import Firefox from "@/public/browsers/firefox.webp";
import Opera from "@/public//browsers/opera.webp"
import Link from "next/link";

const browsers = [
    Arc,
    Chrome,
    Edge,
    Firefox,
    Opera
]

const MobileAlert = () => {
    return (
        <>
            <body className="bg-black text-white relative h-[100vh] w-[100vw] inset-0 bg-[url(../public/grid.svg)] bg-center [mask-image:linear-gradient(180deg,rgba(255,255,255,0))]" >
                <div className="top-1/2 translate-y-1/4">
                    <h3 className=" hero-title text-3xl font-semibold text-center">LibreGradients</h3>
                    <div className="w-full h-auto flex flex-col justify-center">
                        <Image
                            className="w-full flex justify-center"
                            alt="placeholder"
                            width={400}
                            height={400}
                            src={alertPlaceholder}
                        />
                        <h3 className="font-semibold text-xl text-center">
                            LibreGradients mobile is coming
                        </h3>
                        <h3 className="text-center p-2 font-lg">
                            In the meantime, please use one of the Desktop Browsers below
                        </h3>
                        <div className="flex items-center justify-center gap-6 my-6">
                            {
                                browsers?.map((image) => {
                                    return (
                                        <Image
                                            width={30}
                                            height={30}
                                            src={image}
                                            alt={`${image}-pic`}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="flex justify-center mt-8">
                            <h3>Made by {" "}
                                <Link className="underline text-blue-400" href="https://twitter.com/NerdyProgramme2">
                                    @urdadx
                                </Link> . {" "}
                                Give it a ⭐ on <Link className="underline text-blue-400" href="https://github.com/urdadx/Gradients-Ninja">
                                    Github
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default MobileAlert;