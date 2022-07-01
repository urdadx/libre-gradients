import Home from "./Pages/Home";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import ColorDetail from "./Pages/ColorDetail";
import { Toaster } from "react-hot-toast";
import Bookmarks from "./Pages/Bookmarks";
import NotFound from "./Pages/NotFound";
import SortedColors from "./Pages/SortedColors";
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {

  const [searchText, setSearchText] = useState("");
      
  return (
    <div className="App">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router>
          <Navbar searchText={searchText} setSearchText={setSearchText} />
          <Routes>
            <Route path="/" element={<Home searchText={searchText} setSearchText={setSearchText} />} />
            <Route path="/indie-color/:name" element={<ColorDetail />}  />
            <Route path="/bookmarks" element={<Bookmarks  />} />
            <Route path="/sorted/:sortedName" element={<SortedColors />} />
            <Route path="*" element={<NotFound title="Page not Found" status="404" icon="🤖" />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
