import React from "react";
import "../styles/Projects.css";
import p1 from "../imges/background/x8skdsukkmwiwxejthio.jpg";
import p2 from "../imges/background/space-stars-background-2560-x-1600-lse9op6opf9ax17b.jpg";
import p3 from "../imges/background/syo43ktrlu3huqaqye2c.jpg";


const Projects = () => {
    const projectList = [
      {
        id: 1,
        name: "Space tourism multi-page website",
        description: "Description for project 1",
        image: p1,
        link:"https://alialtaweel.github.io/Space-tourism-multipage-website/index.html",
        // /portfolio/public/imges
      },
      {
        id: 2,
        name: "MCE Executer Finland",
        description: "Description for project 2",
        image: p2,
        link:"https://darkblue-pig-967810.hostingersite.com/",
      },
      {
        id: 3,
        name: "Advice Generator",
        description: "Description for project 3",
        image: p3,
        link: "https://alialtaweel.github.io/advice-generator-app-main/",
      },
      {
        id: 4,
        name: "Project 4",
        description: "Description for project 4",
        image: "/images/project4.jpg",
      },
    ];
  
    return (
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <h3><a href={project.link} 
    target="_blank" 
    rel="noopener noreferrer"> {project.name}</a></h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default Projects;
