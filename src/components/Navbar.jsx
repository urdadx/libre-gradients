import { NavbarStyled } from "../styles/Navbar.Styled";
import { Button } from "../styles/ButtonStyled";

const Navbar = () => {
    return ( 
        <>
        <NavbarStyled>
            <nav className="navbar">   
                <div className="header">
                    <img alt="logo" src="https://img.icons8.com/ios-filled/50/7161e7/naruto.png"/>
                    <h3 className="logo-name">Gradient Ninja</h3>
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
                    <Button>Sign In</Button>
                    <Button>Github</Button>
                </div>

            </nav>
        </NavbarStyled>
        </>
     );
}
 
export default Navbar;