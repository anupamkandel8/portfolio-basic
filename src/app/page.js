import React from "react";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import Project from "@/components/Project";

export default function page() {
  return (
    <>
      <div className="min-h-0 h-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-1 px-1 sm:px-5 py-2 lg:px-40">
        <div className="mx-10 mt-10 sm:mx-0 lg:mt-0 order-3 lg:order-1">
          <Experience />
          <Skill />
        </div>

        <div className=" mx-5 order-1  lg:order-2 ">
          {" "}
          <Profile />
          <Contact />
        </div>

        <div className="order-2 lg:order-3 mt-10 sm:mt-0 ">
          {" "}
          <Project />
        </div>
      </div>
    </>
  );
}
