import React from "react";
import "./App.css";
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js';
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Navbar from "./components/Navbar.js"
function App() {


  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <Navbar/>
      
      </ThemeProvider>
    </div>
  );
}

export default App;
