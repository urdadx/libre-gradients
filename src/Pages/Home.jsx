import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { HomeStyled } from "../styles/HomeStyled";
import colorGradients from "../data/data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import { Button } from "../styles/ButtonStyled";
import Spinner from "../components/Spinner";

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
                <div className="category">
                    <Link className="sorted-link" to="/sorted/red">
                        <Button border="none" background="#FF025E">Red</Button>
                    </Link>
                    <Link className="sorted-link" to="/sorted/yellow">
                        <Button border="none" background="#FFD000">Yellow</Button>
                    </Link>
                    <Link className="sorted-link" to="/sorted/green">
                        <Button border="none" background="#64F38C">Green</Button>
                    </Link>
                    <Link className="sorted-link" to="/sorted/blue">
                        <Button border="none" background="#019DF7">Blue</Button>
                    </Link>
                    <Link className="sorted-link" to="/sorted/black">
                        <Button border="none" background="#161A1D">Black</Button>
                    </Link>
                    <Link className="sorted-link" to="/sorted/white">
                        <Button color="black" border="none" background="#e0dddd">White</Button>
                    </Link>
                 
                </div>
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
            </div>
        </HomeStyled>
        </>
     );
}
 
export default Home;