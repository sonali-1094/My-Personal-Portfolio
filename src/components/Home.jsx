import React, { useEffect, useState } from "react";
import "./Home.css";

const TEXTS = [
  "I craft responsive and interactive web experiences.",
  "I build modern web applications using React.",
  "I turn ideas into clean and engaging UI."
];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TEXTS[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } 
    else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } 
    else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % TEXTS.length);
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <header className="home-container" id="home">
      <div className="home-bg-animation"></div>
      <div className="home-content">
        <div className="text-section">
          <h1 className="fade-in-down">
            Hii, I am <span className="highlight">Sonali Patil</span>
            <br />
            <span className="subtitle">Full Stack Developer</span>
          </h1>

          {/* Typing Animation */}
          <h2 className="tagline fade-in-up">
            {displayText}
            <span className="cursor">|</span>
          </h2>

          <div className="buttons fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a className="btn btn-primary" href="#footer">
              <span className="btn-text">Let's Connect</span>
              <span className="btn-icon">→</span>
            </a>
            <a className="btn btn-outline" href="/resume.pdf" download>
              <span className="btn-text">Download Resume</span>
              <span className="btn-icon">↓</span>
            </a>
          </div>
        </div>
      </div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </header>
  );
}
