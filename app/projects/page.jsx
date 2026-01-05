"use client";

import { useState } from "react";

const PROJECTS = [
  {
    id: "weatherwise",
    title: "Weatherwise",
    role: "Personal side project",
    description:
      "A minimalist weather app focused on clear typography and small design details. Built as a playground for UI experiments and API-driven components.",
    tech: "React · Next.js · Weather API · CSS",
    link: "https://helenadouglas.github.io/weatherwise/",  },
  {
    id: "bachelor",
    title: "Fair Pay — Digital Payment Platform (Bachelor Project)",
    role: "Industry collaboration",
    description:
      "Developed a full-stack payment solution for Fair Technology where debtors can view and complete credit-based payments through a secure web link. The system included a React/Next.js frontend, REST-based backend in Java/Quarkus, PSP-integration, Azure deployment and Cosmos DB storage. I worked mainly on backend architecture, API design and integration. The project followed a Scrum workflow with user testing and continuous iteration.",
    tech: "Full-stack development · System architecture · Agile collaboration",
    link: null,
  },
  {
    id: "greengroove",
    title: "GreenGroove",
    role: "Frontend course project",
    description:
      "Front-end web application for discovering and booking music events with a focus on sustainability. Built as part of a course during my semester abroad to explore UX, responsive layout and accessible, semantic HTML/CSS for a green event platform.",
    tech: "HTML · CSS · JavaScript · UX / UI",
    link: "https://greengroove.netlify.app/",
  },
  {
    id: "portfolio",
    title: "This portfolio",
    role: "Personal side project",
    description:
      "Custom portfolio built with Next.js from scratch. Focused on layout, typography, and a minimal, print-inspired aesthetic with light/dark modes.",
    tech: "Next.js · React · CSS · Design systems",
    link: null,
  },
];

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const activeProject = PROJECTS.find((project) => project.id === activeId);

  return (
    <main className="page">
      <section className="frame">
        <div className="noise-panel" />

        <div className="left-column">
          <div>
            <h1 className="name">Projects</h1>
            <nav className="nav">
              {PROJECTS.map((project) => (
                <button
                  key={project.id}
                  className={`nav-item ${
                    project.id === activeId ? "active" : ""
                  }`}
                  onClick={() => setActiveId(project.id)}
                >
                  {project.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="right-column">
          {activeProject && (
            <>
              <p className="project-role">{activeProject.role}</p>
              <p>{activeProject.description}</p>
              <p className="project-tech">{activeProject.tech}</p>
              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View project
                </a>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}