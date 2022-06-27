import { NavbarStyled } from "../styles/Navbar.Styled";
import { Button } from "../styles/ButtonStyled";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Description from "./Description";
import Generate from "../Pages/Generate";
import Modal from "react-modal"
import { useState } from "react";
import { SOCIAL_MEDIA_MODAL } from "../utils/index.utils";
import AddColor from "../components/AddColor"

const Navbar = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [isAddModal, setIsAddModal] = useState(false)

    const openGenerate = () => {   
        setIsOpen(true);
    }

    const openAddModal = () => {
        setIsOpen(true)
        setIsAddModal(true)
        
    }
    
      const closeModal = () => {
        setIsOpen(false);
        setIsAddModal(false)
    }

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
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={SOCIAL_MEDIA_MODAL}
                contentLabel="Example Modal"
                >
                    {
                        isAddModal ? <AddColor close={closeModal} /> : 
                         <Generate close = {closeModal} />
                    }
        </Modal>

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
                    <Link className="bk-parent" to="/bookmarks">
                        <Icon icon="bi:bookmark-check" color="gray" width="30" height="30" inline={true} />
                       <Description message="Bookmarks" />
                    </Link>
                    <Link to="#" className="bk-parent">
                        <Icon icon="bi:moon" color="gray" width="30" height="30" inline={true} />
                        <Description message="Dark mode" />
                    </Link>
                    <Link onClick={openGenerate} className="bk-parent" to="#">
                        <Icon icon="akar-icons:cloud-upload" color="gray" width="30" height="30" inline={true} />
                        <Description message="Generator" />
                    </Link>
                    <Link onClick={openAddModal} to="#" className="bk-parent">
                        <Icon icon="carbon:add-alt" color="gray" width="30" height="30" inline={true} />
                        <Description message="Add colors" />
                    </Link>
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