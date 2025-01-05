import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./Components/Data";
import FlagDetail from "./Components/FlagDetail";
import Hero from "./Components/Hero";
import SearchResults from "./Components/SearchResults";

import Footer1 from "./Components/Footer1";

const App: React.FC = () => {
  return (
    <Router>
      <Hero />
      <Routes>
        <Route path="/data" element={<Data />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/flag/:cca3" element={<FlagDetail />} />
      </Routes>
      <Footer1 />
    </Router>
  );
};

export default App;
