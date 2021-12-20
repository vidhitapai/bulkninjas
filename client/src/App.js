import { useState, useEffect } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Home } from "./components/Home";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Signup from './components/Signup';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  

  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
        <Route path="/register" element={<Signup />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
