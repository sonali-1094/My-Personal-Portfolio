import React, { useState } from "react";
import "./Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const projectList = [
    // ===== SAME PROJECT DATA (UNCHANGED) =====
    {
      title: "Tomato",
      img: "/Tomato.JPG",
      link: "https://food-delivary-rosy.vercel.app/",
      description: "🍅 Tomato – Food Delivery Platform",
      results: [
        "A modern food delivery web application focused on clean UI, smooth user flow, and responsiveness. The platform allows users to explore food items, view details, and experience a real-world food ordering interface built with reusable React components and optimized layout for all screen sizes.",
        "Developed a full-stack food ordering system using React.js, Node.js, Express.js, and MongoDB with authentication, cart management, and admin dashboard."
      ],
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "QuickCart",
      img: "/QuickCart.JPG",
      link: "https://quick-cart-84p937x6k-sonali-patils-projects.vercel.app/",
      description: "🛒 QuickCart – E-Commerce Shopping Platform",
      results: [
        "A fully responsive e-commerce UI that simulates an online shopping experience. It includes product listings, intuitive cart flow, and a modern design system."
      ],
      tech: ["Next.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "PlantVentory",
      img: "/PlantVentory.JPG",
      link: "https://nextjs-crud-app-beryl.vercel.app/",
      description: "🌱 PlantVentory – Inventory Management CRUD App",
      results: [
        "A CRUD-based inventory management application built with Next.js, enabling users to create, update, and manage inventory items efficiently."
      ],
      tech: ["Next.js", "PostgreSQL", "Prisma"]
    },
    {
      title: "SigmaValue ChatBot",
      img: "/sigmavalue-chatbot.PNG",
      link: "https://github.com/sonali-1094/sigmavalue-realestate-chatbot.git",
      description: "🤖 SigmaValue – Real Estate Chatbot",
      results: [
        "An AI-powered chatbot designed for real estate assistance with conversational UI and AI workflows.",
        "Built a full-stack chatbot using React and Django to analyze Excel-based real estate data."
      ],
      tech: ["React", "LangChain", "GPT", "Django"]
    },
    {
      title: "YouTube Clone",
      img: "/Youtube.jpg",
      link: "https://youtube-clone-six-orcin.vercel.app/",
      description: "📺 YouTube Clone",
      results: [
        "A responsive YouTube UI clone using React and YouTube Data API with real-time search."
      ],
      tech: ["React", "API", "CSS"]
    },
    {
      title: "Edusity",
      img: "/edusity.png",
      link: "https://edusity-react-xyz.vercel.app/",
      description: "🎓 Edusity – Educational Website",
      results: [
        "A clean and modern educational website UI with responsive design."
      ],
      tech: ["React", "CSS"]
    },
    {
      title: "TodoList",
      img: "/TodoList app.JPG",
      link: "https://todolist-app-nine-flax.vercel.app/",
      description: "✅ TodoList Application",
      results: [
        "A task management app built with React state management and clean UI."
      ],
      tech: ["React", "JavaScript"]
    },
    {
      title: "Meditech",
      img: "/Meditech.jpg",
      link: "https://meditech-healthcare-orcin.vercel.app/",
      description: "🏥 Meditech – Healthcare UI Platform",
      results: [
        "An AI-ready healthcare UI designed with dashboard-style layouts."
      ],
      tech: ["React", "AI", "CSS"]
    },
    {
      title: "News Mag",
      img: "/news-mag.png",
      link: "https://github.com/sonali-1094/News-Mag-react.git",
      description: "📰 News Mag – Online News Magazine",
      results: [
        "A modern news magazine UI with category-based layout and responsive grids."
      ],
      tech: ["React", "API", "CSS"]
    }
  ];

  const firstThree = projectList.slice(0, 3);
  const otherProjects = projectList.slice(3);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h1 className="projects-title">My Work</h1>

        {/* ===== FIRST 3 PROJECTS ===== */}
        <div className="case-studies">
          {firstThree.map((project, index) => (
            <div
              key={index}
              className={`case-study ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="case-image">
                <img src={project.img} alt={project.title} />
              </div>

              <div className="case-content">
                <h2>{project.title}</h2>
                <p className="case-desc">{project.description}</p>

                <h4>Key Results</h4>
                <ul>
                  {project.results.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" className="case-link">
                  View Project <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ===== SEE MORE PROJECTS ===== */}
        {showMore && (
          <div className="case-studies" style={{ marginTop: "3rem" }}>
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`case-study ${index % 2 === 0 ? "reverse" : ""}`}
              >
                <div className="case-image">
                  <img src={project.img} alt={project.title} />
                </div>

                <div className="case-content">
                  <h2>{project.title}</h2>
                  <p className="case-desc">{project.description}</p>

                  <h4>Key Results</h4>
                  <ul>
                    {project.results.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="tech-stack">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" className="case-link">
                    View Project <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== BUTTON ===== */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button
            onClick={() => setShowMore(!showMore)}
            style={{
              padding: "10px 26px",
              borderRadius: "30px",
              border: "1px solid #cbd5e1",
              background: "white",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>

      </div>
    </section>
  );
}
