import "./App.css";
import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import NavigationBar from "./components/NavigationBar";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
