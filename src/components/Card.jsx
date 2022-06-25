import { CardStyled } from "../styles/CardStyled";
import "animate.css/animate.min.css";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';


const Card = ({ color , name}) => {

    const colorCode = `background: ${color[0]};\nbackground: -webkit-linear-gradient(to left, ${color[0]}, ${color[1]}); \nbackground: linear-gradient(to left, ${color[0]}, ${color[1]});`;

    const copyCode = () => {
         // clipboard api
    navigator.clipboard.writeText(colorCode);

    toast.success("Copied to clipboard!"); // toaster

    }   

    return (

        <>
        <CardStyled>
        {
            <div className="card-wrapper">
                <div style={{
                    background: `linear-gradient(to left, ${color[0]}, ${color[1]})`,
                }}
                        className="gradient">
                    <h5 className="name">{name}</h5>
                </div>
                <div className="actions">
                    <div className="colors">
                        {
                            color.map((color)=>{
                                return <div style={{background:`${color}`}} className="indie-colors"></div>
                            })
                        }
            
                    </div>
                    <div className="icons">
                        <Link  to="#" onClick={copyCode}>
                            <Icon icon="bi:code-slash" inline={true} width="25" height="25" />
                        </Link>
                        <Link to="#">
                            <Icon icon="carbon:bookmark-add" inline={true} width="25" height="25" />
                        </Link>
                    </div>
                </div>
            </div>

        }
        </CardStyled>
        </>
      );
}
 
export default Card;
