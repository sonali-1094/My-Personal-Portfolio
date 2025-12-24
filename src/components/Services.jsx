import React from "react";
import "./Services.css";

import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaNodeJs, FaDatabase } from "react-icons/fa";
import { FaJava, FaLeaf } from "react-icons/fa";
import { FaFigma, FaPencilRuler } from "react-icons/fa";
import { FaServer, FaCogs } from "react-icons/fa";
import { FaBrain, FaRobot } from "react-icons/fa";

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h1 className="services-title">Services</h1>

        <div className="services-grid">

          {/* Service 1 */}
          <div className="service-card">
            <div className="service-icon">
              <FaReact />
            </div>
            <h2>Frontend Development</h2>
            <p>
              Clean, modern, responsive UI using React.js, HTML, CSS & Tailwind.
              I craft smooth user experiences with attention to detail.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-icon">
              <FaNodeJs />
            </div>
            <h2>Full Stack Web Apps</h2>
            <p>
              End-to-end MERN stack applications with secure API integration,
              authentication systems, dashboards, and optimized performance.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="service-icon">
              <FaServer />
            </div>
            <h2>Backend & APIs</h2>
            <p>
              REST API development using Node.js, Express, MongoDB and MySQL for
              reliable and scalable server-side solutions.
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <div className="service-icon">
              <FaFigma />
            </div>
            <h2>UI / UX Assistance</h2>
            <p>
              Wireframing & basic UI design using Figma. I focus on clarity,
              consistency, and accessible user-centered design.
            </p>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <div className="service-icon">
              <FaJava />
            </div>
            <h2>Java & Spring Boot Development</h2>
            <p>
              Building secure REST APIs, microservices & enterprise apps using
              Java, Spring Boot, and industry best practices.
            </p>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <div className="service-icon">
              <FaBrain />
            </div>
            <h2>AI & GenAI Solutions</h2>
            <p>
              AI-powered chatbots, automation tools, LLM integrations, and
              generative AI features for modern intelligent applications.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
