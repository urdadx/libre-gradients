import { toast } from "react-hot-toast";

export const copyCode = (color) => {

    const colorCode = `background: ${color[0]};\nbackground: -webkit-linear-gradient(to left, ${color[0]}, ${color[1]} ${color[2] ? color[2] : ""}); \nbackground: linear-gradient(to left, ${color[0]}, ${color[1]} ${color[2] ? color[2] : ""});`;
    navigator.clipboard.writeText(colorCode);
    toast.success("Copied to clipboard!"); 

} 

export const addBookmark = async (name, color ) => {

    const colorInfo = {
        name: name,
        colors: color
    }

    try{
        const saved = JSON.parse(localStorage.getItem("saved-gradients") || "[]")
        saved.push(colorInfo)
        localStorage.setItem("saved-gradients", JSON.stringify(saved))
        toast.success("Saved to bookmarks")
            
    }
    catch(error){
        toast.error(error.message)
    }
    
}

export const randomNumbers = Math.floor(Math.random() * 10000000000)

export const SOCIAL_MEDIA_MODAL = {
    content: {
      top: '54%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'10px',
      fontFamily: 'Inter',
      width:"70%",
      height:"77%",
      padding:"5px",
      overflow:"hidden",
    },
}

export const sample = ["#213a38" ,"#38a2ce","#d28b86" ]

