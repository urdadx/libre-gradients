import { ModalStyled } from "../styles/ModalStyled";
import { Link } from "react-router-dom";

const AddColor = ({ close }) => {
    return ( 
        <>
            <ModalStyled>
                <div className="header">
                        <div className="header_title_wrapper">
                            <h3 className="header_title">Add a new gradient ❤️</h3>
                        </div>
                        <Link className="close-btn" to="#" onClick={close}>
                            <ion-icon size="large" name="close-outline"></ion-icon>
                        </Link>
                </div>

                <div className="disclaimer">
                    <p style={{marginTop:"5rem", fontSize:"30px"}}>Feature coming soon...🎉</p>
                </div>
            </ModalStyled>
       
        </>
     );
}
 
export default AddColor;