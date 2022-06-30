import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { HomeStyled } from "../styles/HomeStyled";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import { Button } from "../styles/ButtonStyled";
import { useParams } from "react-router-dom";
import { greenGradients, redGradients, yellowGradients, blackGradients, blueGradients, whiteGradients } from "../utils/generateColors";
import Spinner from "../components/Spinner";

const SortedColors = () => {

    const [loading, setIsLoading] = useState(false);
    const { sortedName } = useParams()
    
    useEffect(() => {
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
                      <>
                        {loading ? (
                            <Spinner />
                        ) :
                        (
                      <>
           {sortedName === "red"
                ? redGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                    <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))
                : sortedName === "green"
                ? greenGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                    <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))
                : sortedName === "blue"
                ? blueGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                     <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))
                : sortedName === "white"
                ? whiteGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                     <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))
                : sortedName === "yellow"
                ? yellowGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                     <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))
                : blackGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                     <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))}
                  </>
              )}
                          </>
                    }
                  

                </section>
            </div>
        </HomeStyled>
        </>
     );
}
 
export default SortedColors;