import "./App.css";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import NavigationBar from "./components/NavigationBar";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
