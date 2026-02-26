import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import "./theme-overrides.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const SECTION_IDS = ["home", "about", "experience", "skills", "services", "projects", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (SECTION_IDS.includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  const handleNavigate = useCallback((sectionId) => {
    if (!SECTION_IDS.includes(sectionId)) return;
    setActiveSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "services":
        return <Services />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-shell">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="section-stage" aria-live="polite">
        <div key={activeSection} className="section-shell">
          {renderActiveSection()}
        </div>
      </main>
    </div>
  );
}
