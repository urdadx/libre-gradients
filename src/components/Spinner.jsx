import { TailSpin } from "react-loader-spinner";
import { HomeStyled } from "../styles/HomeStyled";

const Spinner  = () => {
    return ( 
        <>
        <HomeStyled>
            <div className="loader"> 
                    <TailSpin width="90" color="blue" />
            </div>
        </HomeStyled>
        </>
     );
}
 
export default Spinner ;