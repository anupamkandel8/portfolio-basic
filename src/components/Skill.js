import React from "react";

import { skills } from "@/personalData.js";

export default function Skill({ className }) {
  return (
    <div className={`mt-8 ${className}`}>
      <h1 className="text-center font-extrabold text-3xl mb-3 tracking-wide text-gray-100">
        Skills
      </h1>
      <ul className="flex flex-wrap gap-4 justify-center  mx-auto">
        {skills.map((category, idx) => (
          <li
            key={idx}
            className="bg-[#363452]  p-1 rounded-md shadow-md hover:shadow-lg hover:scale-120 transition-all duration-200 hover:mx-1"
          >
            <div className="font-semibold mb-1 text-center text-sm text-gray-100">
              {category.category}
            </div>
            <div className="flex flex-wrap gap-1 ">
              {category.items.map((skill, i) => (
                <div
                  key={i}
                  className="w-13 h-fit flex flex-col items-center  transition-transform hover:scale-130  "
                  tabIndex={0}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-7 h-7  "
                  />
                  <p className="text-[10px] font-medium text-gray-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
