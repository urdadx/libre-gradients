import Spinner from "../components/Spinner";
import Card from "../components/Card";
import colorGradients from "../data/data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeStyled } from "../styles/HomeStyled";

const GradientsList = ({ searchText }) => {
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
        {loading ? (
        <Spinner />
      ) : (
        gradients // eslint-disable-next-line
          .filter((gradient) => {
            if (searchText === "") {
              return gradient;
            } else if (
              gradient.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            ) {
              return gradient;
            } else if (
              gradient.colors[0]
                .toLowerCase()
                .includes(searchText.toLowerCase())
            )
            {
              return gradient;
            }
            else if (
                gradient.colors[1]
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            )
            {
            return gradient;
            }
          })
          .map((gradient, key) => {
            return (
                <Link style={{textDecoration:"none"}} to={`/indie-color/${gradient.name}`}>
                    <Card color={gradient.colors} name={gradient.name} isSaved = {true}   />
                </Link>
            );
          })
      )}

                </section>
        </HomeStyled>
        </>
     );
}



 
export default GradientsList;