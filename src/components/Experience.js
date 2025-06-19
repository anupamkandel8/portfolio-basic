import React from "react";
import {jobs} from "@/personalData.js"

export default function Experience() {
  return (
    <>
      <h1 className="  text-center text-4xl  font-bold mb-5 mt-8 ">
        Experience
      </h1>

      <div className=" flex flex-wrap justify-center gap-3 ">
        {[...jobs].reverse().map((job) => (
          <div
            key={job.id}
            className=" bg-[#363452]  max-w-80 p-2 border-gray-500  border-b-1 rounded-lg shadow-sm hover:scale-108 hover:mx-1 transition-all duration-200"
          >
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="text-black text-lg">{job.company}</p>
            <p className="text-gray-500 text-sm">{job.duration}</p>
            {Array.isArray(job.description) ? (
              <ul className="list-disc pl-5 mt-2">
                {job.description.map((desc, index) => (
                  <li key={index} className="text-gray-900 text-md">
                    {desc}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-900 text-md">{job.description}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
