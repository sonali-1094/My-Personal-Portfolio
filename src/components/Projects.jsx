import React, { useMemo, useState } from "react";
import "./Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { trackEvent } from "../utils/analytics";

const PROJECT_FILTERS = ["Frontend", "Backend", "Full Stack", "MERN Stack", "AI"];

const PROJECT_LIST = [
  {
    id: "ai-financial-planner",
    title: "AI Financial Planner",
    img: "AI financial Planner .png",
    link: "https://github.com/sonali-1094/AI-Financial-Planner.git",
    description: "💸 AI Finance Dashboard & Budget Planner",
    results: [
      "Built a personal finance dashboard with budgeting, savings planning, and expense tracking flows.",
      "Added category-wise expense management, analytics sections, and goal-based saving inputs in a responsive dashboard UI."
    ],
    tech: ["React", "JavaScript", "CSS", "Dashboard UI"],
    categories: ["Frontend", "Full Stack", "AI"]
  },
  {
    id: "ai-code-review",
    title: "AI Code Review",
    img: "/AI Code Review.png",
    link: "https://github.com/sonali-1094",
    description: "🧠 AI Code Review Assistant",
    results: [
      "Built an AI-assisted code review tool that analyzes code snippets and returns improvement suggestions, potential bug alerts, and readability feedback.",
      "Designed a developer-friendly workflow to speed up code quality checks with actionable recommendations."
    ],
    tech: ["React", "Node.js", "AI", "API"],
    categories: ["Frontend", "Backend", "Full Stack", "AI"]
  },
  {
    id: "tomato",
    title: "Tomato",
    img: "/Tomato.webp",
    link: "https://food-delivary-rosy.vercel.app/",
    description: "🍅 Tomato – Food Delivery Platform",
    results: [
      "A modern food delivery web application focused on clean UI, smooth user flow, and responsiveness. The platform allows users to explore food items, view details, and experience a real-world food ordering interface built with reusable React components and optimized layout for all screen sizes.",
      "Developed a full-stack food ordering system using React.js, Node.js, Express.js, and MongoDB with authentication, cart management, and admin dashboard."
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    categories: ["Frontend", "Backend", "Full Stack", "MERN Stack"]
  },
  {
    id: "zomato-clone",
    title: "Zomato Clone",
    img: "/Zomato Clone.png",
    link: "https://github.com/sonali-1094",
    description: "🍽️ Zomato Clone – Food Ordering UI",
    results: [
      "A Zomato-inspired food discovery and ordering interface with reusable React components and responsive layouts.",
      "Implemented restaurant listing flow, modern cards, and smooth user navigation optimized for mobile and desktop."
    ],
    tech: ["React", "JavaScript", "CSS"],
    categories: ["Frontend"]
  },
  {
    id: "plantventory",
    title: "PlantVentory",
    img: "/PlantVentory.webp",
    link: "https://nextjs-crud-app-beryl.vercel.app/",
    description: "🌱 PlantVentory – Inventory Management CRUD App",
    results: [
      "A CRUD-based inventory management application built with Next.js, enabling users to create, update, and manage inventory items efficiently."
    ],
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    categories: ["Backend", "Full Stack"]
  },
  {
    id: "sigmavalue-chatbot",
    title: "SigmaValue ChatBot",
    img: "/sigmavalue-chatbot.webp",
    link: "https://github.com/sonali-1094/sigmavalue-realestate-chatbot.git",
    description: "🤖 SigmaValue – Real Estate Chatbot",
    results: [
      "An AI-powered chatbot designed for real estate assistance with conversational UI and AI workflows.",
      "Built a full-stack chatbot using React and Django to analyze Excel-based real estate data."
    ],
    tech: ["React", "LangChain", "GPT", "Django"],
    categories: ["Frontend", "Backend", "Full Stack", "AI"]
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    img: "/Youtube.webp",
    link: "https://youtube-clone-six-orcin.vercel.app/",
    description: "📺 YouTube Clone",
    results: [
      "A responsive YouTube UI clone using React and YouTube Data API with real-time search."
    ],
    tech: ["React", "API", "CSS"],
    categories: ["Frontend"]
  },
  {
    id: "edusity",
    title: "Edusity",
    img: "/edusity.webp",
    link: "https://edusity-react-xyz.vercel.app/",
    description: "🎓 Edusity – Educational Website",
    results: [
      "A clean and modern educational website UI with responsive design."
    ],
    tech: ["React", "CSS"],
    categories: ["Frontend"]
  },
  {
    id: "todolist",
    title: "TodoList",
    img: "/TodoList app.webp",
    link: "https://todolist-app-nine-flax.vercel.app/",
    description: "✅ TodoList Application",
    results: [
      "A task management app built with React state management and clean UI."
    ],
    tech: ["React", "JavaScript"],
    categories: ["Frontend"]
  },
  {
    id: "meditech",
    title: "Meditech",
    img: "/Meditech.webp",
    link: "https://meditech-healthcare-orcin.vercel.app/",
    description: "🏥 Meditech – Healthcare UI Platform",
    results: [
      "An AI-ready healthcare UI designed with dashboard-style layouts."
    ],
    tech: ["React", "AI", "CSS"],
    categories: ["Frontend"]
  },
  {
    id: "news-mag",
    title: "News Mag",
    img: "/news-mag.webp",
    link: "https://github.com/sonali-1094/News-Mag-react.git",
    description: "📰 News Mag – Online News Magazine",
    results: [
      "A modern news magazine UI with category-based layout and responsive grids."
    ],
    tech: ["React", "API", "CSS"],
    categories: ["Frontend"]
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Frontend");

  const filteredProjects = useMemo(() => {
    return PROJECT_LIST.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  const handleProjectClick = (project) => {
    trackEvent("project_click", {
      project_id: project.id,
      project_title: project.title,
      project_url: project.link,
    });
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h1 className="projects-title">My Work</h1>

        <div className="projects-toolbar">
          <div className="projects-filters">
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-chip ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects-empty">No projects found for this category.</p>
        )}

        <div className="case-studies">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`case-study ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="case-image">
                <img
                  src={project.img}
                  alt={project.title}
                  onError={(event) => {
                    event.currentTarget.src = "/logo.webp";
                  }}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                />
              </div>

              <div className="case-content">
                <h2>{project.title}</h2>
                <p className="case-desc">{project.description}</p>

                <h4>Key Results</h4>
                <ul>
                  {project.results.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-link"
                  onClick={() => handleProjectClick(project)}
                >
                  View Project <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
