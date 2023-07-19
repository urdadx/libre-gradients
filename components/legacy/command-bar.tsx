interface CommandBarProps extends React.HTMLAttributes<HTMLDivElement> { }
import * as React from "react"

export function CommandBar({ className, ...props }: CommandBarProps) {

    return (
        <>
            <div className="px-3 pt-1 pb-3 w-[60%] h-[67px] mx-auto flex items-center justify-center flex-wrap">
                <div className=" w-full h-full flex justify-center mx-auto align-center backdrop-blur-sm bg-white border rounded-lg border-gray-200">
                    <div className="p-1 px-2 border-r border-gray-200">
                        {/* Items here */}
                    </div>



                </div>
            </div>
        </>
    )
}   