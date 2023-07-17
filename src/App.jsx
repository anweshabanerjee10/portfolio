import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro";

import Portfolio from "./components/portfolio/Portfolio";

import Works from "./components/works/Works";

import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

import { useState } from "react";

import "./app.scss";
import Menu from "./components/menu/Menu.jsx";
import About from "./components/about/About.jsx";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
