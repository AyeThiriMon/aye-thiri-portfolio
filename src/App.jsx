import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [isBlack, setIsBlack] = useState(true);

  const toggleTheme = () => {
    setIsBlack(!isBlack);
  };

  return (
     <div style={{ fontFamily: "'Dancing Script', cursive" }}>
      <Navbar onToggleTheme={toggleTheme} isBlack={isBlack} />
      <About onToggleTheme={toggleTheme} isBlack={isBlack} />
      <Projects onToggleTheme={toggleTheme} isBlack={isBlack} />
      <Skills onToggleTheme={toggleTheme} isBlack={isBlack} />
      <Contact onToggleTheme={toggleTheme} isBlack={isBlack} />
    </div>
  );
} 

export default App;
