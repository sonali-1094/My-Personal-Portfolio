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
import PortfolioAssistant from "./components/PortfolioAssistant.jsx";

const SECTION_IDS = ["home", "about", "experience", "skills", "services", "projects", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (SECTION_IDS.includes(hash)) {
      setActiveSection(hash);
      window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
          window.history.replaceState(null, "", `#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const handleNavigate = useCallback((sectionId) => {
    if (!SECTION_IDS.includes(sectionId)) return;
    setActiveSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }, []);

  return (
    <div className="app-shell" data-theme={theme}>
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="section-stage">
        <div className="section-shell">
          <Home onNavigate={handleNavigate} />
          <About onNavigate={handleNavigate} />
          <Experience />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </div>
      </main>
      <PortfolioAssistant />
    </div>
  );
}
