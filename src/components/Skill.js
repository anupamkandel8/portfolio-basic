import React from "react";

import { skills } from "@/personalData.js";

export default function Skill({className}) {
  return (
    <>
      <div className={`mt-4 ${className} `} >
        <h1 className="text-center font-bold text-2xl m-5 ">Skills</h1>
        <ul>
          {skills.map((category, idx) => (
            <li key={idx} className="mb-4 flex items-center">
              <span className="font-semibold mr-2">
                {category.category + ":"}
              </span>
              <span className="flex flex-wrap gap-3 mt-0">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="relative flex items-center gap-1 group "
                    tabIndex={0}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    {/* Tooltip */}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity z-10 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
