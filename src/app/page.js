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

      <div className=" m-5 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-10">
        {/* Second box */}
        <div className="col-span-1 lg:order-2   lg:col-span-3 ">
          <Profile />
          <Contact />
        </div>
        {/* Third box */}
        <div className="col-span-1 lg:col-span-3 ">
          <Experience />
          <Skill className="max-w-fit sm:max-w-full mx-auto lg:hidden " />
        </div>
        {/* Third box */}
        <div className="flex flex-col col-span-1 order-2 sm:order-3  sm:col-span-2 lg:col-span-4 ">
          <Project />
          <button
            className=" max-w-fit mx-auto m-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg sm:hidden"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Contact Me!
          </button>
          
          <Skill className="max-w-fit  mx-auto hidden lg:block " />
        </div>
      </div>
    </>
  );
}

