import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Navbar({ activeSection = "home", onNavigate, theme = "dark", onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setOpen(false);
    onNavigate?.(sectionId);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(event) => handleNavClick(event, "home")}>
          <img src="/logo.webp" alt="Sonali Patil Logo" className="logo-img" />
          <span>PORTFOLIO</span>
        </a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={(event) => handleNavClick(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="theme-toggle"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          onClick={onToggleTheme}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>

        <button
          type="button"
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((previous) => !previous)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
