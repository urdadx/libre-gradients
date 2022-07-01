import Spinner from "../components/Spinner";
import Card from "../components/Card";
import colorGradients from "../data/data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeStyled } from "../styles/HomeStyled";

const GradientsList = () => {
    const [gradients, setGradients] = useState([]);
    const [loading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setGradients(colorGradients)
        setIsLoading(false)
        
    }, [])

    return ( 
        <>
        <HomeStyled>
        <section className="main">  
                    {
                    !loading && gradients.length !== 0 ? gradients.map((gradient) => {
                        return  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                        <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                        </Link>
                }) : 
                    <Spinner />
                }

                </section>
        </HomeStyled>
        </>
     );
}
 
export default GradientsList;