import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { HomeStyled } from "../styles/HomeStyled";
import colorGradients from "../data/data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import { Button } from "../styles/ButtonStyled";
import Spinner from "../components/Spinner";
import { categories } from "../utils/categories";

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
                {
                      categories.map((category) => {
                        return <>
                        <Link className="sorted-link" to={`/sorted/${category.name}`}>
                            <Button color="white" border="none" background={`${category.color}`}>{category.name}</Button>
                        </Link>
                        </>
                      })
        
                    }
                    <Link className="sorted-link" to="/sorted/White">
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