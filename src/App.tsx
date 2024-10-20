import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./Components/Data";
import FlagDetail from "./Components/FlagDetail";
import Hero from "./Components/Hero";

const App: React.FC = () => {
  return (
    
    <Router>
       <Hero/>
      <Routes>
       
        <Route path="/" element={<Data />} />
        <Route path="/flag/:cca3" element={<FlagDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
