import React, { useMemo, useState } from "react";
import "./PortfolioAssistant.css";
import { FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";

const profileData = {
  name: "Sonali Patil",
  role: "MERN Stack Developer",
  location: "Pune, Maharashtra",
  email: "sonalirpatil109@gmail.com",
  skills: [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Java",
    "REST APIs",
    "Git & GitHub",
    "DSA",
    "GenAI"
  ],
  projects: [
    "AI Financial Planner",
    "AI Code Review",
    "GharSeBite Healthy Food Delivery App",
    "Zomato Clone",
    "PlantVentory",
    "SigmaValue Real Estate ChatBot",
    "YouTube Clone",
    "Edusity",
    "TodoList",
    "Meditech",
    "News Mag"
  ],
  experience: [
    "Full Stack Development Internship at TechnoHacks Solutions Pvt. Ltd.",
    "Java Developer Intern at The Developers Arena",
    "Software Developer Intern at Nexus Solution"
  ],
  education: "BE in Electronics and Computer Engineering at Zeal College of Engineering and Research, Pune, with Honours in AI & ML. Expected graduation: 2027.",
  availability: "Open to internships, fresher opportunities, frontend projects, full-stack projects, and collaborations."
};

const quickQuestions = [
  "What projects have you built?",
  "What tech do you know?",
  "Are you open to internships?",
  "How can I contact you?"
];

const initialMessages = [
  {
    sender: "assistant",
    text: "Hi, I am Sonali's portfolio assistant. Ask me about her projects, skills, education, experience, or contact details."
  }
];

function buildAnswer(question) {
  const text = question.toLowerCase();

  if (text.includes("project") || text.includes("built") || text.includes("work")) {
    return `${profileData.name} has built projects like ${profileData.projects.slice(0, 6).join(", ")}, and more. Her strongest project areas are MERN stack apps, AI-powered tools, dashboards, and responsive React interfaces.`;
  }

  if (text.includes("tech") || text.includes("skill") || text.includes("stack") || text.includes("know")) {
    return `Her main stack is MERN. She knows ${profileData.skills.join(", ")}. She focuses on clean React UI, REST APIs, databases, and practical AI features.`;
  }

  if (text.includes("experience") || text.includes("intern")) {
    return `Her experience includes ${profileData.experience.join("; ")}. She has worked on React modules, REST API integration, Java applications, CRUD systems, and Git-based workflows.`;
  }

  if (text.includes("education") || text.includes("college") || text.includes("degree")) {
    return profileData.education;
  }

  if (text.includes("contact") || text.includes("email") || text.includes("hire") || text.includes("available")) {
    return `${profileData.availability} You can contact her at ${profileData.email}.`;
  }

  if (text.includes("where") || text.includes("location")) {
    return `${profileData.name} is based in ${profileData.location}.`;
  }

  return `I can answer from Sonali's portfolio data. Try asking about her projects, tech stack, experience, education, or how to contact her.`;
}

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const latestAssistantMessage = useMemo(() => {
    return [...messages].reverse().find((message) => message.sender === "assistant");
  }, [messages]);

  const askQuestion = (question) => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { sender: "user", text: trimmedQuestion },
      { sender: "assistant", text: buildAnswer(trimmedQuestion) }
    ]);
    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    askQuestion(input);
  };

  return (
    <div className={`portfolio-assistant ${isOpen ? "open" : ""}`}>
      {isOpen && (
        <section className="assistant-panel" aria-label="AI assistant about Sonali">
          <div className="assistant-header">
            <div className="assistant-title">
              <span className="assistant-avatar" aria-hidden="true">
                <FaRobot />
              </span>
              <div>
                <h2>Ask Sonali AI</h2>
                <p>Answers from portfolio data</p>
              </div>
            </div>
            <button type="button" className="assistant-close" aria-label="Close assistant" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="assistant-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`assistant-message ${message.sender}`} key={`${message.sender}-${index}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="assistant-suggestions" aria-label="Suggested questions">
            {quickQuestions.map((question) => (
              <button type="button" key={question} onClick={() => askQuestion(question)}>
                {question}
              </button>
            ))}
          </div>

          <form className="assistant-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="assistant-question">Ask about Sonali</label>
            <input
              id="assistant-question"
              type="text"
              value={input}
              placeholder="Ask about projects, skills..."
              onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit" aria-label="Send question">
              <FaPaperPlane />
            </button>
          </form>

          {latestAssistantMessage && (
            <p className="assistant-footnote">Local assistant, no API needed.</p>
          )}
        </section>
      )}

      <button
        type="button"
        className="assistant-toggle"
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <FaRobot />
        <span>Ask AI</span>
      </button>
    </div>
  );
}
