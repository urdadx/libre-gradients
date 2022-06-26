import Home from "./Pages/Home";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import ColorDetail from "./Pages/ColorDetail";
import { Toaster } from "react-hot-toast";
import Bookmarks from "./Pages/Bookmarks";
import NotFound from "./Pages/NotFound";

const App = () => {
      

  return (
    <div className="App">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/indie-color/:name" element={<ColorDetail />}  />
              <Route path="/bookmarks" element={<Bookmarks  />} />
              <Route path="*" element={<NotFound title="Page not Found" status="404" icon="🤖" />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
