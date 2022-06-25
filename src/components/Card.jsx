import { CardStyled } from "../styles/CardStyled";
import "animate.css/animate.min.css";


const Card = ({ color , name}) => {



    return (

        <>
        <CardStyled>
        {
            <div data-aos="fade-left" className="card-wrapper">
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
                        <ion-icon name="code-slash-outline"></ion-icon>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
            </div>

        }
        </CardStyled>
        </>
      );
}
 
export default Card;
