import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT SIDE - IMAGE */}
        <div className="about-photo fade-in-left">
          <img src="\sonali's pic.jpg" alt="Sonali Patil" />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="about-content fade-in-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            I am a passionate Full Stack Developer who enjoys building modern,
            responsive seeking opportunities to apply skills in real-world projects and interactive digital experiences. I love working with
            React, Java, Spring Boot, and AI-powered tech.
          </p>

          {/* TAB HEADINGS */}
          <div className="about-tabs">
            <button 
              className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>

            <button 
              className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>

            <button 
              className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="tab-content fade-in">
            {activeTab === "skills" && (
              <ul>
                <li><span>UI/UX</span> – Designing Web/App interfaces</li>
                <li><span>Web Development</span> – MERN, Java Spring Boot</li>
                <li><span>App Development</span> – Building Mobile Apps</li>
                <li><span>AI Tools</span> – GenAI, NLP</li>
              </ul>
            )}

            {activeTab === "experience" && (
              <ul>
                <li>
                  <span>Software Developer Intern</span> – Dec 2025 – Present
                  <div className="exp-details">
                    <p>Nexus Solution • Remote</p>
                    <ul className="exp-points">
                      <li>Built responsive UI using React.js and modern CSS</li>
                      <li>Integrated frontend with backend REST APIs</li>
                      <li>Worked in Agile workflow using Git</li>
                    </ul>
                  </div>
                </li>
              </ul>
            )}

            {activeTab === "education" && (
              <ul>
                <li><span>B.E. in Electronics & Computer Engineering</span></li>
                <li>– Savitribai Phule Pune University</li>
                <li>– Java, DSA, Full Stack</li>
              </ul>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
