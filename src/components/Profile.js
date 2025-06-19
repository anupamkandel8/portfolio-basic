import React from "react";
import Image from "next/image";

const downloadPdf = () => {
  const link = document.createElement("a"); // create <a> tag
  link.href = "/anupam-resume.pdf"; // file location (inside public)
  link.download = "anupam-resume.pdf"; // force download with filename
  link.target = "_blank"; // open in new tab
  link.click(); // trigger click
};

export default function Profile({ className }) {
  return (
    <div
      className={`  flex flex-col items-center text-center  pt-6  ${className}`}
    >
      <Image
        src="/profile.jpg"
        alt="Profile"
        height={200}
        width={200}
        className="rounded-[30%] lg:hidden"
      />
      <Image
        src="/profile.jpg"
        alt="Profile"
        height={350}
        width={350}
        className="rounded-[30%] hidden lg:block"
      />
      <h1 className="text-3xl lg:text-6xl font-bold mt-4">{`I'm  Anupam Kandel`}</h1>
      <p className="text-lg lg:text-3xl text-gray-400 mt-0 md:mt-5 font-semibold">
        A passionate Full Stack Web Developer
      </p>
      <div className="flex gap-5 mt-10">
        <div className="flex flex-col items-center hover:scale-120  transition-transform duration-200">
          <a
            href="https://www.linkedin.com/in/anupam-kandel-561b72243/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-10 h-10"
            />
            <span className="text-xs mt-1 text-gray-400">LinkedIn</span>
          </a>
        </div>
        <div className="flex flex-col items-center hover:scale-120  transition-transform duration-200">
          <a
            href="https://github.com/anupamkandel8"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-10 h-10 bg-white rounded-full"
            />
            <span className="text-xs mt-1 text-gray-400">GitHub</span>
          </a>
        </div>
        <div
          onClick={downloadPdf}
          className="flex flex-col items-center cursor-pointer hover:scale-120  transition-transform duration-200"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="Resume"
            className="w-10 h-10"
          />
          <span className="text-xs mt-1 text-gray-400">Resume</span>
        </div>
      </div>
      <div className="flex w-full max-w-90 gap-4"></div>
    </div>
  );
}
