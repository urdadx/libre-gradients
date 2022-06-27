import { CardStyled } from "../styles/CardStyled";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Fade from 'react-reveal/Fade';
import { copyCode } from "../utils/index.utils";
import { addBookmark } from "../utils/index.utils";
import Description from "./Description";

const Card = ({ color , name, isSaved}) => {

    return (

        <>
        <CardStyled>
        {
            <Fade right>
            <div  className="card-wrapper">
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
                        <Link  className="bk-parent" to="#" onClick={() => copyCode(color)}>
                            <Icon icon="bi:code-slash" inline={true} width="25" height="25" />
                            <Description message="Copy CSS" />
                        </Link>
                        {
                            isSaved && 
                        <Link  ink className="bk-parent" onClick={() => addBookmark(name, color)} to="#">
                            <Icon icon="carbon:bookmark-add" inline={true} width="25" height="25" />
                            <Description message="Save" />
                        </Link>
                        }
                    </div>
                </div>
            </div>

            </Fade>
        }
        </CardStyled>
        </>
      );
}
 
export default Card;
