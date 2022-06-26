import { NavbarStyled } from "../styles/Navbar.Styled";
const Description = ({ message }) => {
    return (
        <>
        <NavbarStyled>
            <div className="desc_wrapper">
             <div className="icon-alert">
                <small>{message}</small>
            </div>
            </div>
        </NavbarStyled>
        </>
      );
}
 
export default Description;