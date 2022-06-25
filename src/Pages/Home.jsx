import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { HomeStyled } from "../styles/HomeStyled";
import colorGradients from "../data/data.json";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { Button } from "../styles/ButtonStyled";


const Home = () => {

    const [gradients, setGradients] = useState([]);
    const [loading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setGradients(colorGradients)
        setIsLoading(false)
    }, [])

    return ( 
        <>
        <HomeStyled>
            <Navbar />

            <div className="wrapper">
                {/* <div className="sort">
                    <Button>Red</Button>
                    <Button>Green</Button>
                    <Button>Yellow</Button>
                    <Button>Blue</Button>
                    <Button>Black</Button>
                    <Button>Randomize</Button>


                </div> */}
                <section className="main">
                    {
                    !loading && gradients.length !== 0 ? gradients.map((gradient) => {
                        return  <Card color={gradient.colors} name={gradient.name} />
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