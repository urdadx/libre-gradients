import { toast } from "react-hot-toast";

export const copyCode = (color) => {

    const colorCode = `background: ${color[0]};\nbackground: -webkit-linear-gradient(to left, ${color[0]}, ${color[1]} ${color[2] ? color[2] : ""}); \nbackground: linear-gradient(to left, ${color[0]}, ${color[1]} ${color[2] ? color[2] : ""});`;
    navigator.clipboard.writeText(colorCode);
    toast.success("Copied to clipboard!"); // toaster

} 

export const addBookmark = async (name, color ) => {

    const colorInfo = {
        name: name,
        colors: color
    }

    try{
        const saved = JSON.parse(localStorage.getItem("saved-gradients") || "[]")
        for(let element in saved){
            console.log(element.colors)
            if(element.name === colorInfo.name){
                console.log("Already there")
            }
        }
        saved.push(colorInfo)
        localStorage.setItem("saved-gradients", JSON.stringify(saved))
        toast.success("Saved to bookmarks")
    }
    catch(error){
        toast.error(error.message)
    }
    
}