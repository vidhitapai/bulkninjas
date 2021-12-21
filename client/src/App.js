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
import Addproduct from "./components/Addproduct";
import ViewCart from "./components/ViewCart";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <Signup setLoggedIn={setLoggedIn} user={user} setUser={setUser} />
            }
          />
          <Route
            path="/login"
            element={
              <Login user={user} setUser={setUser} setLoggedIn={setLoggedIn} />
            }
          />
          <Route
            path="/verificationsignup"
            element={<OtpSignup user={user} setUser={setUser} />}
          />
          <Route
            path="/verificationlogin"
            element={<OtpLogin user={user} setUser={setUser} />}
          />
          <Route
            path="/search"
            element={<Search setCart={setCart} cart={cart} />}
          />
          <Route
            path="/products"
            element={
              <Viewproducts image="https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80" />
            }
          />
          <Route
            path="/cart"
            element={
              <Viewproducts cart={cart}/>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
