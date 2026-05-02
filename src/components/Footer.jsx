import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { trackEvent } from "../utils/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-name">Sonali Patil</h2>
          <p className="footer-role">
            Creative developer building friendly interfaces, reliable web apps,
            and practical AI-powered solutions.
          </p>

          <div className="footer-social-icons">
            <a
              href="https://github.com/sonali-1094"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              onClick={() => trackEvent("social_click", { platform: "github" })}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sonali-patil-190257288"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              onClick={() => trackEvent("social_click", { platform: "linkedin" })}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/SonaliPatil018"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X profile"
              onClick={() => trackEvent("social_click", { platform: "x" })}
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:sonalirpatil109@gmail.com"
              aria-label="Send email"
              onClick={() => trackEvent("social_click", { platform: "email" })}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-services">
          <h3>Services</h3>
          <a href="#services">Frontend Development</a>
          <a href="#services">Full Stack Web Apps</a>
          <a href="#services">Backend & APIs</a>
          <a href="#services">UI / UX Assistance</a>
          <a href="#services">Java & Spring Boot Development</a>
          <a href="#services">AI & GenAI Solutions</a>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-cta">
          <h3>Have an idea?</h3>
          <p>Send the details and I will get back to you with a practical next step.</p>
          <a
            className="footer-email-btn"
            href="mailto:sonalirpatil109@gmail.com"
            onClick={() => trackEvent("footer_email_click", { source: "footer" })}
          >
            <FaEnvelope />
            Email Me
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{`© ${currentYear} Sonali Patil. All rights reserved.`}</span>
        <a href="#home" aria-label="Back to top">
          <FaArrowUp />
          Back to top
        </a>
      </div>
    </footer>
  );
}
