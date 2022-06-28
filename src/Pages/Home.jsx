import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { HomeStyled } from "../styles/HomeStyled";
import colorGradients from "../data/data.json";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

const Home = () => {

    const [gradients, setGradients] = useState([]);
    const [loading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setGradients(colorGradients)
        setIsLoading(false)
        
    }, [])


    return ( 
        <>
        <Meta />
        <HomeStyled>
            <Navbar />
            <div className="wrapper">
        
                <section className="main">
                    {
                    !loading && gradients.length !== 0 ? gradients.map((gradient) => {
                        return  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                        <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                        </Link>
                }) : 
                <div className="loader"> 
                    <TailSpin width="90" color="blue" />
                </div>
                }

                </section>
            </div>
        </HomeStyled>
        </>
     );
}
 
export default Home;