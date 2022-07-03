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
import AddColor from "./AddColor"
import { GITHUB_LOGO, GOOGLE_LOGO, LOGO_URL } from "../assets/ImageLinks";
import { USER_PROFILE } from "../assets/ImageLinks";

const Navbar = ({ searchText, setSearchText }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [isAddModal, setIsAddModal] = useState(false);

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
            <nav className="navbar" >   
                <div className="header">
                    <img alt="logo" className="logo" src={LOGO_URL} />
                    <Link  style={{textDecoration:"none",color:"#7161E7"}} to="/">
                        <h3 className="logo-name">
                            Gradients Ninja
                        </h3>
                    </Link>
                </div>
                <div className="search-wrapper">
                    <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search Gradients..." 
                        className="search-bar" />
                </div>
                <div className="actions">
                    <Link  data-tip="hello world" className="bk-parent" to="/bookmarks">
                        <Icon icon="bi:bookmark-check" color="grey"
                               width="30" height="30" inline={true} />
                       <Description message="Bookmarks" />
                    </Link>
                
                    <Link onClick={openGenerate} className="bk-parent" to="#">
                        <Icon icon="akar-icons:cloud-upload"  color= "grey"
                               width="30" height="30" inline={true} />
                        <Description message="Generator" />
                    </Link>
                    <Link onClick={openAddModal} to="#" className="bk-parent">
                        <Icon icon="carbon:add-alt"  color="grey"
                              width="30" height="30" inline={true} />
                        <Description message="Add colors" />
                    </Link>
                    <Link className="bk-parent" to="#">
                        <img alt="" src={!currentUser ? USER_PROFILE : currentUser.photoURL} 
                             className="user"></img>
                    </Link>
                </div>

                <div className="auth">
                    <Button onClick={currentUser ? handleSignOut : handleGoogleLogin}
                            color= "#000"
                            weight="300" background= "#fff">
                        
                            <img className="btn-img" alt="" src={GOOGLE_LOGO}/>
                        <span>
                        {
                            currentUser ? "Logout" : "Sign In"
                        }
                        </span>
                    </Button>

                    <Button 
                        color= "#000" weight="100" 
                        background= "#fff">
                        
                         <img className="btn-img" alt="" src={GITHUB_LOGO}/>
                        <a rel="noreferrer" className="fork"
                            href="https://github.com/WahabDev12/gradients-ninja" target="_blank" >Contribute</a>
                    </Button>
                </div>
            </nav>
        </NavbarStyled>
        </>
     );
}
 
export default Navbar;