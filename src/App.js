import "./App.css";
import { React, useEffect, useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import NavigationBar from "./components/NavigationBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [exit, setExit] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setExit("loader-exit");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className={`loader ${exit}`}>
          <h1 className="loading-logo fw-bold">Aa.</h1>
        </div>
      ) : (
        <>
          <NavigationBar /> <Home /> <About /> <Projects /> <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
