import { HomeStyled } from "../styles/HomeStyled";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Card from "../components/Card";

const Bookmarks  = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    }, [])

    const gradients = JSON.parse(localStorage.getItem("saved-gradients"));
    console.log(gradients)

    return ( 
        <>
            <HomeStyled>
            <Navbar />
            <h2 style={{textAlign:'center'}}>Saved Gradients</h2>
            <div className="wrapper">
        
                <section className="main">
                    {
                    !loading && gradients.length !== 0 ? gradients.map((gradient) => {
                        return  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                          <Card color={gradient.colors} name={gradient.name} />
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
    
export default Bookmarks;