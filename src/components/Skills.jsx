import React from "react";
import "./Skills.css";
import { FaGlobe, FaDatabase, FaCogs, FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>

        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card">
            <div className="skill-icon"><FaGlobe /></div>
            <h2>Frontend</h2>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
              <li>Responsive UI Design</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <div className="skill-icon"><FaCogs /></div>
            <h2>Backend</h2>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* Database */}
          <div className="skill-card">
            <div className="skill-icon"><FaDatabase /></div>
            <h2>Database</h2>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Tools & Others */}
          <div className="skill-card">
            <div className="skill-icon"><FaTools /></div>
            <h2>Tools & Others</h2>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>GenAI</li>
              <li>Clerk</li>
              <li>Figma</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
