import React from "react";

import { skills } from "@/personalData.js";

export default function Skill() {
  return (
    <>
      <h1 className=" font-bold text-xl mt-5">Skill</h1>
      <ul>
        {skills.map((row, idx) => (
          <li key={idx}>
            <p>
              {row[0]}:{" "}
              {row[1].map((skill, i) => (
                <span key={i}>{skill}{i < row[1].length - 1 ? ", " : ""}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
