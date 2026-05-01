import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { trackEvent } from "../utils/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <h2 className="footer-name">Sonali Patil</h2>
          <p className="footer-role">Creative developer making the web feel alive.
                       Friendly code, Creative solutions Real impact. 
                       Crafting experiences, not just interfaces.</p>

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
            <h3 className="footer-connect">Connect With Me </h3>

        </div>

        {/* MIDDLE - SERVICES LIST */}
        <div className="footer-services">
          <h3>Services</h3>
          <a href="#services">Frontend Development</a>
          <a href="#services">Full Stack Web Apps</a>
          <a href="#services">Backend & APIs</a>
          <a href="#services">UI / UX Assistance</a>
          <a href="#services">Java & Spring Boot Development</a>
          <a href="#services">AI & GenAI Solutions</a>


        </div>

        {/* RIGHT - NAVIGATION */}
        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        {`© ${currentYear} Sonali Patil - All Rights Reserved`}
      </div>
    </footer>
  );
}
