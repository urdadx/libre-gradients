import { NavbarStyled } from "../styles/Navbar.Styled";
import { Button } from "../styles/ButtonStyled";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Navbar = () => {

    const { authWithGoogle } = useAuth();
    const { currentUser } = useAuth();
    const { googleSignout } = useAuth();


    const handleGoogleLogin = async()=>{
        try{    
          await authWithGoogle();
          toast.success("Login successful")

        }
        catch(error){
          toast.error(error.message);
        }
   }

   const handleSignOut = async() => {
        await googleSignout()
        toast.success("You logged out")
   }


    return ( 
        <>
        <NavbarStyled>
            <nav className="navbar">   
                <div className="header">
                    <img alt="logo" src="https://img.icons8.com/ios-filled/50/7161e7/naruto.png"/>
                    <h3 className="logo-name">
                        <Link style={{textDecoration:"none",color:"#7161E7"}} to="/">Gradients Ninja</Link>
                    </h3>
                </div>
                <div className="search-wrapper">
                    <input type="search" placeholder="Search Gradients..." className="search-bar" />
                </div>
                <div className="actions">
                    <ion-icon name="bookmarks-outline"></ion-icon>
                    <ion-icon name="moon-outline"></ion-icon>
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                </div>

                <div className="auth">
                    <Button onClick={currentUser ? handleSignOut : handleGoogleLogin } color="#000" weight="300" background="#fff">
                        {
                            currentUser ? 
                            <img className="btn-img"  src={currentUser.photoURL} alt="" /> :
                            <img className="btn-img" alt="" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                        }
                        <span>
                        {
                            currentUser ? "Logout" : "Sign In"
                        }
                        </span>
                    </Button>

                    <Button color="#000" width="100px" weight="300" background="#fff">
                        
                         <img className="btn-img" alt="" src="https://img.icons8.com/glyph-neue/64/000000/github.png"/>
                        <a rel="noreferrer" style={{textDecoration:"none"}}
                            href="https://github.com/WahabDev12" target="_blank" >Fork</a>
                    </Button>
                </div>

            </nav>
        </NavbarStyled>
        </>
     );
}
 
export default Navbar;