import React from "react";
import "./Skills.css";
import { FaCode, FaDatabase, FaLayerGroup, FaNodeJs, FaReact, FaTools } from "react-icons/fa";

export default function Skills() {
  const skillsData = [
    {
      icon: FaReact,
      title: "Frontend",
      description: "Interfaces that are responsive, clear, and easy to use.",
      level: 88,
      skills: ["React.js", "JavaScript", "Redux", "Tailwind CSS", "Responsive UI"]
    },
    {
      icon: FaNodeJs,
      title: "Backend",
      description: "APIs and server logic for real application workflows.",
      level: 78,
      skills: ["Node.js", "Express.js", "REST APIs", "Java"]
    },
    {
      icon: FaDatabase,
      title: "Database",
      description: "Data models, queries, and connected application storage.",
      level: 76,
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      icon: FaTools,
      title: "Tools",
      description: "Developer tools that help ship projects neatly.",
      level: 84,
      skills: ["Git & GitHub", "VS Code", "GenAI", "Clerk", "Figma", "Vercel"]
    }
  ];

  const skillStats = [
    { value: "4", label: "Skill areas" },
    { value: "18+", label: "Tools & technologies" },
    { value: "MERN", label: "Strongest stack" }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <p className="skills-eyebrow">Technical toolkit</p>
          <h1 className="skills-title fade-in-down">Skills that turn ideas into working products</h1>
          <p className="skills-subtitle">
            A practical mix of frontend, backend, database, and delivery tools for building
            modern full-stack web applications.
          </p>
        </div>

        <div className="skills-stats" aria-label="Skills summary">
          {skillStats.map((stat) => (
            <div className="skills-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <article key={skill.title} className="skill-card fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="skill-card-top">
                  <div className="skill-icon" aria-hidden="true">
                    <IconComponent />
                  </div>
                  <span>{skill.level}%</span>
                </div>
                <h2>{skill.title}</h2>
                <p>{skill.description}</p>
                <div className="skill-meter" aria-label={`${skill.title} strength ${skill.level} percent`}>
                  <span style={{ inlineSize: `${skill.level}%` }}></span>
                </div>
                <ul className="skill-list">
                  {skill.skills.map((item) => (
                    <li key={item} className="skill-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="skills-workflow">
          <div className="workflow-item">
            <FaLayerGroup aria-hidden="true" />
            <span>Plan UI</span>
          </div>
          <div className="workflow-line"></div>
          <div className="workflow-item">
            <FaCode aria-hidden="true" />
            <span>Build features</span>
          </div>
          <div className="workflow-line"></div>
          <div className="workflow-item">
            <FaTools aria-hidden="true" />
            <span>Test & deploy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
