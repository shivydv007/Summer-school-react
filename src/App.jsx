
import Home from "./pages/Home";
import React from "react";
// import { Link, Element } from "react-scroll";
import About from "./pages/About";
import './App.css'
import Student_dashboard from "./pages/Student_dashboard";
import Summer_school_experience from "./pages/Summer_school_experience";

function App() {
  return (
    <>
      <div className="bgg-blackk overflow-y-scroll ">

        <div className="my-[10vh]">
          <Home />
        </div>
        <div className="my-[10vh]">
          <About />
        </div>

      </div >

      <div>
      <Student_dashboard />
      </div>


      <div className="summer_school_experience_body">
        < Summer_school_experience />
      </div>

    </>
  );
}


export default App;
