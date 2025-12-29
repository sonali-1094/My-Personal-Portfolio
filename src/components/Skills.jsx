import React, { useState } from "react";
import "./Skills.css";
import { FaGlobe, FaDatabase, FaCogs, FaTools } from "react-icons/fa";

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const skillsData = [
    {
      id: 1,
      icon: FaGlobe,
      title: "Frontend",
      skills: ["JavaScript", "React.js", "Redux", "Tailwind CSS", "Responsive UI Design"]
    },
    {
      id: 2,
      icon: FaCogs,
      title: "Backend",
      skills: ["Java", "Spring Boot", "REST APIs"]
    },
    {
      id: 3,
      icon: FaDatabase,
      title: "Database",
      skills: ["MySQL", "MongoDB"]
    },
    {
      id: 4,
      icon: FaTools,
      title: "Tools & Others",
      skills: ["Git & GitHub", "VS Code", "GenAI", "Clerk", "Figma"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h1 className="skills-title fade-in-down">Skills</h1>

        <div className="skills-grid">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.id}
                className={`skill-card fade-in-up ${hoveredCard === skill.id ? "active-card" : ""} ${selectedCard === skill.id ? "selected" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(skill.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedCard(selectedCard === skill.id ? null : skill.id)}
              >
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    <IconComponent />
                  </div>
                </div>
                <h2>{skill.title}</h2>
                <ul className="skill-list">
                  {skill.skills.map((item, idx) => (
                    <li key={idx} style={{ animationDelay: `${idx * 0.05}s` }} className="skill-item">
                      <span className="skill-dot"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
