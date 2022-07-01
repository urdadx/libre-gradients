import { HomeStyled } from "../styles/HomeStyled";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import { Button } from "../styles/ButtonStyled";
import { categories } from "../utils/categories";
import GradientsList from "../components/GradientsList";
import Navbar from "../components/Navbar";

const Home = () => {
  
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
                  <GradientsList />

                </section>
            </div>
        </HomeStyled>
        </>
     );
}
 
export default Home;