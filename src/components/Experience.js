import React from "react";
import {jobs} from "@/personalData.js"

export default function Experience() {
  return (
    <>
      <h1 className="  text-center text-5xl font-bold mb-2  ">Experience</h1>

      <div className=" flex  w-2xl mx-auto gap-4">
        {[...jobs].reverse().map((job) => (
          <div key={job.id} className="p-2 border-gray-400 border-b-1 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="text-black">{job.company}</p>
            <p className="text-gray-500 text-sm">{job.duration}</p>
            {Array.isArray(job.description) ? (
              <ul className="list-disc pl-5 mt-2">
                {job.description.map((desc, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {desc}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-sm">{job.description}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
