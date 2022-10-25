import "./App.scss";
import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";

import Preloader from "./components/Preloader";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import NavigationBar from "./components/NavigationBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const tl = gsap.timeline();
  useEffect(() => {
    tl.to(".main", { display: "inline" })
      .to(".preloader", { opacity: 0 }, 3.5)
      .to(".main-contents", { display: "inline" });
  }, [tl]);

  return (
    <>
      <div className="preloader">
        <Preloader />
      </div>
      <div className="main">
        <NavigationBar />
        <Home />
        <div className="main-contents">
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
