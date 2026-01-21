import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1 className="logo">
          Mar<span>é</span>e
        </h1>

        <p className="text">
          Welcome to Marée, a brand new illustration & design portfolio
          just waiting for your work to start populating its templates!
        </p>

        <button className="btn">PURCHASE</button>
      </div>
    </>
  );
}
console.log(App);

export default App;
