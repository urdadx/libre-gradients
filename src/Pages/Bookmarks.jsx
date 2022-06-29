import { HomeStyled } from "../styles/HomeStyled";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Meta from "../components/Meta";
import Spinner from "../components/Spinner";

const Bookmarks  = () => {

    const [loading, setLoading] = useState(true)

    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

    useEffect(() => {
        scrollTop()
        setLoading(false)
    }, [])

    const gradients = JSON.parse(localStorage.getItem("saved-gradients")) || [];

    return ( 
        <>
        <Meta title=" Gradients Ninja | Bookmarks" />
            <HomeStyled>
            <Navbar />
            <div className="wrapper">
            <h2 className="saved">Saved Gradients</h2>
                <section style={{marginTop:"0.5rem"}} className="main">
                    {
                    !loading ? gradients.map((gradient) => {
                        return  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                            <Card color={gradient.colors} name={gradient.name} />
                        </Link>
                    }) : 
                    <Spinner />

                    }

                    {
                        !loading && gradients.length === 0 ? 
                        <div className="loader">
                            <h1 style={{color:"grey", fontSize:"27px"}}>Ooops.. You have no saved gradients 🤖</h1>
                        </div> : ""
                    }
                  
                </section>
            </div>
        </HomeStyled>
        </>
     );
}
    
export default Bookmarks;