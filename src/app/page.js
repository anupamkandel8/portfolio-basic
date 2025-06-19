"use client";

import React from "react";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import { Toaster } from "react-hot-toast";

export default function page() {
  return (
    <>
      <Toaster />

      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-3 justify-center items-center">
        <Profile className="sm:min-h-screen" />
        <div>
          <Contact className='max-w-100 mx-auto ' />
          <Skill className="hidden sm:block " />
        </div>
      </div>

      <Experience />

      <Project />

      <Skill className="sm:hidden" />
    </>
  );
}

{
  /* <button
  className=" max-w-fit mx-auto m-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg sm:hidden"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Contact Me!
</button>; */
}
