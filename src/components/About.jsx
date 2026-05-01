import React from "react";
import "./About.css";
import {
  FaBrain,
  FaBriefcase,
  FaCheckCircle,
  FaCode,
  FaGraduationCap,
  FaLayerGroup,
  FaLightbulb,
  FaRocket,
  FaTools
} from "react-icons/fa";

const highlights = [
  { value: "10+", label: "Projects built" },
  { value: "MERN", label: "Main stack" },
  { value: "2027", label: "BE graduation" }
];

const strengths = [
  {
    icon: FaCode,
    title: "Clean Frontend",
    text: "Responsive React interfaces with thoughtful layouts, reusable components, and smooth user flows."
    
  },
  {
    icon: FaLayerGroup,
    title: "Full-Stack Thinking",
    text: "Comfortable connecting UI, APIs, databases, authentication, and deployment into complete products."
  },
  {
    icon: FaBrain,
    title: "AI Curiosity",
    text: "Exploring practical AI features that make apps smarter, faster, and more helpful for users."
  }
];

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Java",
  "REST APIs",
  "Git & GitHub",
  "DSA"
];

const education = [
  {
    title: "Zeal College of Engineering and Research, Pune",
    detail: "BE in Electronics and Computer Engineering",
    meta: "Honours in AI & ML | 2023 - 2027"
  },
  {
    title: "Jath High School and Jr. College, Jath",
    detail: "Higher Secondary Education",
    meta: "12th Grade | Passed in 2022"
  },
  {
    title: "S V R D Highschool, Shegaon",
    detail: "Secondary Education",
    meta: "10th Grade | Passed in 2020"
  }
];

export default function About({ onNavigate }) {
  const handleContactClick = (event) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate("contact");
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-hero">
          <p className="about-eyebrow">About me</p>
          <h1 className="about-title">I build simple, useful web experiences with a full-stack mindset.</h1>
          <p className="about-description">
            I am Sonali Patil, a MERN stack developer and engineering student who enjoys
            turning ideas into clean, responsive, and real-world applications. My focus is
            on building products that look polished, work smoothly, and solve clear problems.
          </p>

          <div className="about-highlights" aria-label="Portfolio highlights">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-profile-card">
          <div className="profile-card-header">
            <div className="profile-icon" aria-hidden="true">
              <FaRocket />
            </div>
            <div>
              <p>Current focus</p>
              <h2>Building portfolio-ready MERN apps</h2>
            </div>
          </div>

          <ul className="focus-list">
            <li><FaCheckCircle /> User-friendly React dashboards and landing pages</li>
            <li><FaCheckCircle /> Backend APIs with Node.js, Express, and MongoDB</li>
            <li><FaCheckCircle /> AI-inspired features for smarter web products</li>
          </ul>
        </div>

        <div className="about-strengths" aria-label="What makes this portfolio unique">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article className="strength-card" key={item.title}>
                <span className="strength-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="about-details-grid">
          <article className="about-panel">
            <div className="panel-heading">
              <FaTools aria-hidden="true" />
              <h2>Core Skills</h2>
            </div>
            <div className="skill-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <p className="panel-note">
              Soft skills: communication, teamwork, problem-solving, time management, and leadership.
            </p>
          </article>

          <article className="about-panel">
            <div className="panel-heading">
              <FaLightbulb aria-hidden="true" />
              <h2>Unique Feature Ideas</h2>
            </div>
            <ul className="idea-list">
              <li>Project case-study cards with problem, solution, tech stack, and result.</li>
              <li>A small AI project recommender that guides visitors to your best work.</li>
              <li>Live availability status for internships, jobs, and collaborations.</li>
            </ul>
          </article>

          <article className="about-panel education-panel">
            <div className="panel-heading">
              <FaGraduationCap aria-hidden="true" />
              <h2>Education</h2>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <div className="education-item" key={item.title}>
                  <span className="education-dot" aria-hidden="true"></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                    <span>{item.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="about-panel availability-panel">
            <div className="panel-heading">
              <FaBriefcase aria-hidden="true" />
              <h2>Open To</h2>
            </div>
            <p>
              Internship roles, fresher opportunities, frontend projects, full-stack
              projects, and collaborative product ideas.
            </p>
            <a className="about-contact-link" href="#contact" onClick={handleContactClick}>
              Start a conversation
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
