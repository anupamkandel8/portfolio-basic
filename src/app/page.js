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

      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-3 justify-center items-center lg:px-10">
          <Profile className="  lg:min-h-screen" />
          <div>
            <Contact className="max-w-100 mx-auto " />
            <Skill className=" hidden sm:block " />
          </div>
        </div>

        <Experience />

        <Project />

        <Skill className=" sm:hidden justify-center" />
        <div
          className=" max-w-fit mx-auto m-8 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all duration-300  hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Contact Me!
        </div>
      </div>
    </>
  );
}
