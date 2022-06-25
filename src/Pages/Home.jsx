import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { HomeStyled } from "../styles/HomeStyled";

const Home = () => {
    return ( 
        <>
        <HomeStyled>
            <Navbar />
            <div className="main">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </HomeStyled>
        </>
     );
}
 
export default Home;