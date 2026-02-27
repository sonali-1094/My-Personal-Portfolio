import React, { useEffect, useState } from "react";
import "./Home.css";
import { trackEvent } from "../utils/analytics";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const resumePDF = "/IMP SONALI RESUME.pdf";

const TEXTS = [
  "I craft responsive and interactive web experiences.",
  "I build modern web applications using React.",
  "I turn ideas into clean and engaging UI."
];

export default function Home({ onNavigate }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 50, y: 35 });

  const quickFacts = ["MERN Stack Developer", "AI-Ready Apps", "Java Developer"];

  useEffect(() => {
    const currentText = TEXTS[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % TEXTS.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setPointerPosition({ x, y });
  };

  const handleNavigate = (event, sectionId) => {
    event.preventDefault();
    onNavigate?.(sectionId);
  };

  return (
    <header
      className="home-container"
      id="home"
      onMouseMove={handleMouseMove}
      style={{
        "--pointer-x": `${pointerPosition.x}%`,
        "--pointer-y": `${pointerPosition.y}%`
      }}
    >
      <div className="home-bg-animation"></div>

      <div className="home-content">
        <div className="text-section">
          <p className="intro-pill fade-in-down">Open to internships and Jobs</p>
          <h1 className="fade-in-down">
            Hello, I am <span className="highlight">Sonali Patil</span>
            <br />
            <span className="subtitle">MERN Stack Developer</span>
          </h1>

          <h2 className="tagline fade-in-up">
            {displayText}
            <span className="cursor">|</span>
          </h2>

          <div className="hero-highlights fade-in-up" style={{ animationDelay: "0.2s" }}>
            {quickFacts.map((fact) => (
              <span key={fact} className="fact-chip">{fact}</span>
            ))}
          </div>

          <div className="buttons fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              className="btn btn-primary"
              href="#contact"
              onClick={(event) => {
                trackEvent("cta_click", { cta: "connect" });
                handleNavigate(event, "contact");
              }}
            >
              <span className="btn-text">Let's Connect</span>
              <span className="btn-icon">→</span>
            </a>

            <a
              className="btn btn-outline"
              href={resumePDF}
              download="IMP SONALI RESUME.pdf"
              onClick={() => trackEvent("resume_download_click", { source: "home_hero" })}
            >
              <span className="btn-text">Download Resume</span>
              <span className="btn-icon">↓</span>
            </a>
          </div>

          <div className="hero-social-links fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://www.linkedin.com/in/sonali-patil-190257288"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              onClick={() => trackEvent("social_click", { platform: "linkedin", source: "home_hero" })}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/sonali-1094"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              onClick={() => trackEvent("social_click", { platform: "github", source: "home_hero" })}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:sonalirpatil361@gmail.com"
              aria-label="Email Sonali Patil"
              onClick={() => trackEvent("social_click", { platform: "email", source: "home_hero" })}
            >
              <FaEnvelope />
              <span>Gmail</span>
            </a>
            <a
              href="https://x.com/SonaliPatil018"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              onClick={() => trackEvent("social_click", { platform: "twitter", source: "home_hero" })}
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" onClick={(event) => handleNavigate(event, "about")}>
        Scroll
      </a>

      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </header>
  );
}
