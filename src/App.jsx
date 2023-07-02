import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro";

import Portfolio from "./components/portfolio/Portfolio";

import Works from "./components/works/Works";

import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

import "./app.scss";
function App() {
  return (
    <div className="app">
      <Topbar />

      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Skills />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export default App;
