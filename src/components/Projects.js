import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import Reveal from "./Reveal"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return (
            <Reveal>
              <Project key={project.id} index={index} {...project} />
            </Reveal>
          )
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Tutorials
        </Link>
      )}
    </section>
  )
}

export default Projects
