import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            I am a MERN stack developer focused on building modern, responsive,
            and real-world web applications. I enjoy creating clean user experiences
            with React and developing scalable backend systems with Node.js, Express,
            and MongoDB.
          </p>

          <div className="skills-card">
            <h2 className="skills-title">Skills</h2>
            <ul className="skills-list">
              <li>
                <span>Technical Skills</span> - Java, JavaScript, React.js, MongoDB,
                MySQL, Git and GitHub, REST APIs, DSA
              </li>
              <li>
                <span>Soft Skills</span> - Communication, Teamwork, Problem-Solving,
                Time Management, Leadership
              </li>
              <li>
                <span>Languages</span> - English, Marathi, Kannada, Hindi
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right">
          <div className="education-badge">
            <span className="badge-icon">&#127891;</span>
            <span className="badge-text">EDUCATION</span>
          </div>

          <div className="education-timeline">
            <article className="timeline-item">
              <div className="timeline-dot">&#127891;</div>
              <div className="timeline-card">
                <h3>Zeal College of Engineering and Research, Pune</h3>
                <p>Bachelor of Engineering in Electronics and Computer Engineering</p>
                <p>Honours in Artificial Intelligence and Machine Learning (AI & ML)</p>
                <p>2023 - Expected Graduation - 2027</p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-dot">&#127891;</div>
              <div className="timeline-card">
                <h3>Higher Secondary: Jath High School and Jr. College, Jath</h3>
                <p>12th Grade </p>
                <p>2022 - Passed</p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-dot">&#127891;</div>
              <div className="timeline-card">
                <h3>Secondary: S V R D Highschool, Shegaon</h3>
                <p>10th Grade</p>
                <p>2020 - Passed</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
