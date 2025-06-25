import React from "react";
import { projects } from "@/personalData.js";

export default function Project() {
  return (
    <>
      <div className="text-4xl font-semibold text-center mt-10 mb-5 ">
        Projects
      </div>

      <div className=" flex  flex-wrap gap-3 justify-center ">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" min-w-full   sm:min-w-60  text-center  py-2 px-1  border-gray-400 border-b-1  rounded-lg shadow-sm bg-[#363452] "
          >
            <h3 className="text-lg lg:text-2xl font-semibold">
              {project.title}
            </h3>

            <h1 className="text-lg lg:text-xl mt-2">Key Features: </h1>
            <ul className="">
              {project.keyFetures.map((feature) => (
                <li key={feature} className=" text-md  text-gray-200 ">
                  {feature}
                </li>
              ))}
            </ul>

            <div>
              <h1 className="my-0">... </h1>
              <p className="text-gray-300 text-sm ">Used technologies:</p>
              {project.technologies.map((tech, index) => (
                <img
                  key={index}
                  src={tech.logo}
                  alt={tech.name}
                  title={tech.name}
                  className="inline-block w-6 h-6 mr-2"
                />
              ))}
            </div>
            <h1 className="">... </h1>

            <div className="  ">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  title="GitHub"
                  className="inline-block w-7 h-7 align-text-bottom mr-1 mb-1"
                />
              </a>
              <span className="mx-2"></span>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://www.svgrepo.com/show/310964/live.svg"
                    alt="Live Demo"
                    title="Live Demo"
                    className="inline-block w-8 h-8 align-text-bottom mr-1"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
