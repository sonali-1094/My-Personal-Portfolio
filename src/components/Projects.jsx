import React, { useState } from "react";
import "./Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const projectList = [
    {
      title: "Tomato",
      img: "/Tomato.JPG",
      link: "https://food-delivary-rosy.vercel.app/",
      description: "Food delivery UI built with React."
    },
    {
      title: "QuickCart",
      img: "/QuickCart.JPG",
      link: "https://quick-cart-84p937x6k-sonali-patils-projects.vercel.app/",
      description: "Modern E-commerce shopping UI."
    },
    {
      title: "PlantVentory-CRUD App",
      img: "/PlantVentory.JPG",
      link: "https://nextjs-crud-app-beryl.vercel.app/",
      description: "Next.js CRUD inventory management."
    },
    {
      title: "Youtube Clone",
      img: "/Youtube.jpg",
      link: "https://youtube-clone-six-orcin.vercel.app/",
      description: "YouTube UI clone using React."
    },
    {
      title: "Edusity",
      img: "/edusity.png",
      link: "https://edusity-react-xyz.vercel.app/",
      description: "Educational website design."
    },
    {
      title: "TodoList",
      img: "/TodoList app.JPG",
      link: "https://todolist-app-nine-flax.vercel.app/",
      description: "Modern todo list application."
    },
    {
      title: "Meditech",
      img: "/Meditech.jpg",
      link: "https://meditech-healthcare-orcin.vercel.app/",
      description: "AI-powered health UI."
    },
    {
      title: "SigmaValue-ChatBot",
      img: "/sigmavalue-chatbot.PNG",
      link: "https://github.com/sonali-1094/sigmavalue-realestate-chatbot.git",
      description: "AI-powered ChatBot."
    },
    {
      title: "News-Mag",
      img: "/news-mag.png",
      link: "https://github.com/sonali-1094/News-Mag-react.git",
      description: "News magazine UI design."
    },
  ];

  const firstThree = projectList.slice(0, 3);
  const otherProjects = projectList.slice(3);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <h1 className="projects-title">My Work</h1>

        {/* FIRST 3 PROJECTS LIKE SCREENSHOT */}
        <div className="featured-projects">
          {firstThree.map((project, index) => (
            <div key={index} className="project-card-large">

              <img src={project.img} alt={project.title} />

              <div className="overlay-large">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <a href={project.link} target="_blank">
                  <div className="open-btn-large">
                    <FaExternalLinkAlt />
                  </div>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* OTHER PROJECTS */}
        {showMore && (
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <div key={index} className="project-card-small">

                <img src={project.img} alt={project.title} />

                <div className="overlay-small">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>

                  <a href={project.link} target="_blank">
                    <div className="open-btn-small">
                      <FaExternalLinkAlt />
                    </div>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* TOGGLE BUTTON */}
        <div className="see-more-container">
          <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>

      </div>
    </section>
  );
}
