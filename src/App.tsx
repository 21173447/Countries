import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./Components/Data";
import FlagDetail from "./Components/FlagDetail";
import Hero from "./Components/Hero";
import SearchResults from "./Components/SearchResults";

import Footer1 from "./Components/Footer1";
import Navbar from "./Components/NavBar";
import About from "./Components/About";
import GetInTouch from "./Components/GetInTouch";

const App: React.FC = () => {
  return (
    <Router>
<Navbar/>
      <Hero />
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/country/:cca3" element={<FlagDetail />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/about" element={<About />} />
        <Route path="/flag/:cca3" element={<FlagDetail />} />

      </Routes>
      <Footer1 />
    </Router>
  );
};

export default App;
