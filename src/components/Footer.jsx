import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
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
            <a href="https://github.com/sonali-1094" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sonali-patil-190257288" target="_blank"><FaLinkedin /></a>
            <a href="https://x.com/SonaliPatil018" target="_blank"><FaTwitter /></a>
            <a href="mailto:sonalirpatil361@gmail.com"><FaEnvelope /></a>
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
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2025 Sonali Patil — All Rights Reserved
      </div>
    </footer>
  );
}
