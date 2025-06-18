import React from "react";

import { skills } from "@/personalData.js";

export default function Skill() {
  return (
    <>
      <h1 className="font-bold text-xl mt-5">Skill</h1>
      <ul>
        {skills.map((category, idx) => (
          <li key={idx} className="mb-4 flex items-center">
            <span className="font-semibold mr-2">{category.category + ":"}</span>
            <span className="flex flex-wrap gap-3 mt-0">
              {category.items.map((skill, i) => (
                <span key={i} className="flex items-center gap-1">
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                  {/* <span>{skill.name}</span> */}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
