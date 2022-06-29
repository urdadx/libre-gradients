import { ModalStyled } from "../styles/ModalStyled";
import { Link } from "react-router-dom";
import { Button } from "../styles/ButtonStyled";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { GOOGLE_LOGO } from "../assets/ImageLinks";

const AddColor = ({ close }) => {

    const { currentUser } = useAuth();

    const { authWithGoogle } = useAuth();


    const handleGoogleLogin = async()=>{
        try{    
          await authWithGoogle();
          toast.success("Login successful")

        }
        catch(error){
          toast.error(error.message);
        }
    }

    const handleSubmitColor = () => {
        toast.success("You gradient is waiting to be approved");
    }

    return ( 
        <>
            <ModalStyled>
                <div className="header">
                        <div className="header_title_wrapper">
                            <h3 className="header_title">Add a new gradient! Help us grow ❤️</h3>   
                        </div>
                        <Link className="close-btn" to="#" onClick={close}>
                            <ion-icon size="large" name="close-outline"></ion-icon>
                        </Link>
                </div>
                {
                    currentUser ?  
                
                <div className="disclaimer">
                    <div className="form-container">
                        <p>Gradient name</p>
                        <input placeholder="Name" type="text"></input>
                        <p>Add Pallettes *1-4 max*</p>

                        <div className="pallette-div">
                            <input placeholder="color #1" type="text"></input>
                            <input placeholder="color #2" type="text"></input>
                        </div>

                         <div className="pallette-div">
                            <input placeholder="color #3" type="text"></input>
                            <input placeholder="color #4" type="text"></input>
                        </div>
               
                    <div className="btn-div">
                        <Button onClick={handleSubmitColor} width="150px">
                            Add Gradient
                        </Button>
                    </div>
                    </div>
                </div> : <>
                    <h3 className="login-alert">Please log in to add gradient 🔥 </h3>
                    <div className="modal-sign-in">
                        <Button
                            onClick={handleGoogleLogin}
                            style={{paddingRight:"20px"}} width="120px" 
                            color="#000" weight="300" background="#fff">
                            <img className="btn-img" alt="" src={GOOGLE_LOGO}/>
                            <span>Sign In</span>
                        </Button>
                    </div>
                </>
                }

            </ModalStyled>
       
        </>
     );
}
 
export default AddColor;