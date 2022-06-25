import { CardStyled } from "../styles/CardStyled";
import "animate.css/animate.min.css";
import gradients from "../data/data.json";
import { useState } from "react";

const Card = () => {
    const [gradient, setGradients] = useState([])
    console.log(gradient.name)
    return (

        <>
        <CardStyled>

            <div data-aos="fade-left" className="card-wrapper">
                <div className="gradient"><h5 className="name">Lemon</h5></div>
                <div className="actions">
                    <div className="colors">
                        <div style={{background:"#373F51"}} className="indie-colors"></div>
                        <div style={{background:"#6CD4FF"}} className="indie-colors"></div>
                        <div style={{background:"#EE6C4D"}} className="indie-colors"></div>
                    </div>
                    <div className="icons">
                        <ion-icon name="code-slash-outline"></ion-icon>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </CardStyled>
        </>
      );
}
 
export default Card;
