import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

const Projects = ({ onToggleTheme, isBlack }) => {
  return (
    <section 
      id="projects" 
      className={`relative min-h-screen text-center transition duration-500  py-20 ${isBlack ? "bg-black text-white" : "bg-pink-100 text-black"}`} 
    >
      <h2 className={`text-4xl text-center mb-3 ${isBlack ? "text-pink-400" : "text-black"}`}>
        Apps I've Built
      </h2>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-5">
        I have included project development in this projects.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <a
            href={project.link}
            key={idx}
            className="h-full"
          >
            <div
              key={idx}
              className={`p-1 rounded-2xl border transition flex flex-col h-full ${
                isBlack
                  ? "bg-gray-800 border-pink-600 text-white hover:shadow-pink-500/40"
                  : "bg-white border-pink-600 text-black hover:shadow-lg"
              }`}
            >
              <div className="flex-grow flex">
                <img
                  alt={project.title}
                  className="relative w-full sm:w-1/2 md:w-48 h-auto object-cover object-center rounded-l-2xl"
                  src={project.image}
                />
                <div className={`py-10 relative z-2 w-full `}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className={`title-font text-lg font-medium mb-3 ${isBlack ? "text-white" : "text-black"}`}>
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;