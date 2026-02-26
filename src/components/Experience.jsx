import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Full Stack Development",
    company: "TechnoHacks Solutions Pvt. Ltd.",
    type: "Internship",
    period: "Jan 2026 - Feb 2026",
    points: [
      "Developed responsive web applications using HTML, CSS, JavaScript, React.js, and Node.js following modern UI/UX practices.",
      "Implemented REST API integration and collaborated on frontend–backend functionality for real-time project modules.",
      "Built reusable components and optimized application performance while following Git-based version control practices."
    ]
  },
  {
    role: "Java Developer Intern",
    company: "The Developers Arena",
    type: "Remote",
    period: "Dec 2025 - Feb 2026",
    points: [
      "Developed multiple Java applications and a capstone Library Management System.",
      "Implemented OOP, CRUD operations, JDBC, MySQL, and Collections Framework.",
      "Built menu-driven systems with validation, exception handling, and file persistence."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Nexus Solution",
    type: "Remote",
    period: "June 2025 - Aug 2025",
    points: [
      "Built responsive frontend modules using React.js and reusable component patterns.",
      "Integrated frontend screens with backend REST APIs and handled loading/error states.",
      "Collaborated in Git-based Agile workflow with regular sprint tasks and code reviews."
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h1 className="experience-title">Experience</h1>
        <p className="experience-subtitle">
          Practical development experience across internships and production-style projects.
        </p>

        <div className="experience-list">
          {experiences.map((item) => (
            <article key={`${item.role}-${item.period}`} className="experience-card">
              <div className="experience-head">
                <h2>{item.role}</h2>
                <span className="experience-period">{item.period}</span>
              </div>

              <p className="experience-meta">
                {item.company} <span>•</span> {item.type}
              </p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
