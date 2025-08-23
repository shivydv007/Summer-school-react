
import Home from "./pages/Home";
import React from "react";
import Try from "./pages/Try";
import { Link, Element } from "react-scroll";
import About from "./pages/About";
import './App.css'

function App() {
  return (
    <>
      <div className="overflow-y-scroll h-screen">

        <div className="h-screen">
          <Home />
        </div>
        <div className="h-screen">
          <About />
        </div>

      </div>
    </>
  );
}


export default App;
