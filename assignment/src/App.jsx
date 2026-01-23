import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './App.css'

import Cards from "./components/Cards";
import MyNavbar from "./components/Navbar";
function App() {
  return (
    <>
          <MyNavbar />
      <div className="hero">
        <h1 className="logo">
          Mar<span>é</span>e
        </h1>

        <p className="text">
          Welcome to Marée, a brand new illustration & design portfolio
          just waiting for your work to start populating its templates!
        </p>

<button className="btn purchase-btn">PURCHASE</button>
      </div>
        <Cards />
    </>
  );
}
console.log(App);

export default App;
