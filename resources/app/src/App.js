
import './App.css';
import React from 'react';
import "./Components/Navbar/navbar.css";
import Banner from "./Components/banner.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "../node_modules/animate.css/animate.min.css";



const toggle = document.getElementsByTagName('nav')
console.log(toggle);
// if (toggle.classList.contains('active')) {

// }


function App() {
  return (
    <>
      <Router>
        <Banner />
      </Router>
    </>

  );
}

export default App;
