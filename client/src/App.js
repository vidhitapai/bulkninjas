import { useState, useEffect } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Home } from "./components/Home";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Signup from './components/Signup';
import Login from './components/Login';
import OtpSignup from './components/otpSignup';
import OtpLogin from './components/otpLogin';
import Search from './components/Search';
import Viewproducts from './components/Viewproducts';
import Dashboard from "./components/Dashboard";
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
        <Route path="/login" element={<Login />} />
        <Route path="/verificationsignup" element={<OtpSignup />} />
        <Route path="/verificationlogin" element={<OtpLogin />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/products" element={<Viewproducts image="https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80"/>} />
        <Route path="/userdashboard" element={<Dashboard/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
