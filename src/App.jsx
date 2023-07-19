import Topbar from "./components/topbar/Topbar.jsx";

import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

import { useState } from "react";

import "./app.scss";
import Menu from "./components/menu/Menu.jsx";
import About from "./components/about/About.jsx";
import Home from "./components/intro/Home.jsx";
import Work from "./components/portfolio/Work.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
