import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT SIDE - IMAGE */}
        <div className="about-photo">
          <img src="\sonali's pic.jpg" alt="Sonali Patil" />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            I am a passionate Full Stack Developer who enjoys building modern,
            responsive seeking opportunities to apply skills in real-world projects and interactive digital experiences. I love working with
            React, Java, Spring Boot, and AI-powered tech.
          </p>

          {/* TAB HEADINGS */}
          <div className="about-tabs">
            <button 
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>

            <button 
              className={activeTab === "experience" ? "active" : ""}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>

            <button 
              className={activeTab === "education" ? "active" : ""}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="tab-content">
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
                <li><span>Frontend Intern</span> – Built responsive UI</li>
                <li><span>Java Developer</span> – REST APIs, Spring Boot</li>
                <li><span>Freelancer</span> – Full stack project delivery</li>
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
