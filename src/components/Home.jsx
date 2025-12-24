import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <header className="home-container" id="home">
      <div className="home-content">
        <div className="text-section">
          <h1>
            Hii, I am <span className="highlight">Sonali Patil</span>
            <br />
            <span className="subtitle">Full Stack Developer</span>
          </h1>

          <h2 className="tagline">
            I am passionate about crafting responsive and interactive web
            experiences.
          </h2>

          <div className="buttons">
            <a className="btn btn-primary" href="#footer">
              Let’s Connect
            </a>
            <a className="btn btn-outline" href="\reume.pdf.pdf" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
