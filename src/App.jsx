
import Home from "./pages/Home";
import React from "react";
// import { Link, Element } from "react-scroll";
import About from "./pages/About";
import './App.css'
import Student_dashboard from "./pages/Student_dashboard";

function App() {
  return (
    <>
      <div className="bgg-blackk overflow-y-scroll ">

        {/* <div className="h-screen">
          <Home />
        </div>
        <div className="h-screen">
          <About />
        </div>
        <div className="h-screen">
          <Student_dashboard />
        </div> */}

        <div className="my-[10vh]">
          <Home />
        </div>
        <div className="my-[10vh]">
          <About />

        </div>

      </div >

      <Student_dashboard />

    </>
  );
}


export default App;
