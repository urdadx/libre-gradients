import Home from "./Pages/Home";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import ColorDetail from "./Pages/ColorDetail";
import { Toaster } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";

// animate.css
import "animate.css";

const App = () => {
  Aos.init();

  return (
    <div className="App">
        <Toaster  position="bottom-center" reverseOrder={false} />
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/indie-color/:name" element={<ColorDetail />}  />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
