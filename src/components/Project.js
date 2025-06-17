import React from "react";
import { projects } from "@/personalData.js";

export default function Project() {
  return (
    <>
      <div className="text-2xl font-semibold text-center  ml-2 ">Projects</div>

      <div className=" grid  grid-cols-1 sm:grid-cols-2 gap-2 mt-4 px-10  sm:px-0">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" mx-auto min-w-70 sm:min-w-0 text-center  py-2 md:mx-0  border-gray-400 border-b-1  rounded-lg shadow-sm bg-[#d4d4ff]"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>

            <h1 className="text-sm mt-2">Key Features: </h1>
            <ul className="">
              {project.keyFetures.map((feature) => (
                <li key={feature} className=" text-sm text-gray-600 ">
                  {feature}
                </li>
              ))}
            </ul>

            <div>
              <h1 className="my-0">... </h1>
              <p className="text-gray-500 text-sm ">Used technologies:</p>
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
              <a href={project.githubLink}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  title="GitHub"
                  className="inline-block w-5 h-5 align-text-bottom mr-1 mb-1"
                />
              </a>
              <span className="mx-2"></span>
              <a href={project.liveLink}>
                <img
                  src="https://www.svgrepo.com/show/310964/live.svg"
                  alt="Live Demo"
                  title="Live Demo"
                  className="inline-block w-7 h-7 align-text-bottom mr-1"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
