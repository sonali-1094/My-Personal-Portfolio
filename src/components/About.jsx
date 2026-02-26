import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT SIDE - IMAGE */}
        <div className="about-photo fade-in-left">
          <img src="/sonali's pic.webp" alt="Sonali Patil portrait" loading="lazy" decoding="async" />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="about-content fade-in-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            I am a MERN stack developer focused on building modern, responsive,
            and real-world web applications. I enjoy creating clean user experiences
            with React and developing scalable backend systems with Node.js, Express,
            and MongoDB.
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
                <li>
                  <span>Technical Skills</span> – Java, JavaScript, React.js, MongoDB, MySQL, Git & GitHub, REST APIs, DSA
                </li>
                <li>
                  <span>Soft Skills</span> – Communication, Teamwork, Problem-Solving, Time Management, Leadership
                </li>
                <li>
                  <span>Languages</span> – English, Marathi, Kannada, Hindi
                </li>
              </ul>
            )}

            {activeTab === "education" && (
              <ul>
                <li><span>Zeal College of Engineering and Research, Pune</span></li>
                <li><span>Expected Graduation</span> – 2027</li>
                <li>
                  <span>Bachelor of Engineering in Electronics and Computer Engineering</span> – Honours in Artificial Intelligence and Machine Learning (AI & ML)
                </li>
                <li><span>CGPA</span> – 8/10</li>
                <li>
                  <span>Relevant Coursework</span> – Object-Oriented Programming, Operating Systems, Data Structures and Algorithms
                </li>
              </ul>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
