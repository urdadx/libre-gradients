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
import { categories } from "../utils/categories";

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
                      <>
                        {loading ? (
                            <Spinner />
                        ) :
                        (
                      <>
           {
              sortedName === "Red"
                ? redGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                    <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))
                : sortedName === "Green"
                ? greenGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                    <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))
                : sortedName === "Blue"
                ? blueGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                     <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))
                : sortedName === "White"
                ? whiteGradients.map((gradient) => (
                  <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                     <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                  </Link>
                  ))
                : sortedName === "Yellow"
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