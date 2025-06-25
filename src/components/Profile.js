import React from "react";
import Image from "next/image";

export default function Profile({ className }) {
  const socials = [
    {
      iconLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      link: "https://www.linkedin.com/in/anupam-kandel-561b72243/",
      title: "LinkedIn",
    },
    {
      iconLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/512px-X_icon.svg.png?20250519203220",
      link: "https://twitter.com/anupamkandel8",
      title: "Twitter",
    },
    {
      title: "Mail",
      iconLink: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      link: "mailto:anupamkandel8@gmail.com",
    },

    {
      iconLink: "https://www.svgrepo.com/show/475654/github-color.svg",
      link: "https://github.com/anupamkandel8",
      title: "GitHub",
    },
    {
      iconLink: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
      link: "/anupam-resume.pdf",
      title: "Resume",
    },
  ];

  const downloadPdf = () => {
    const link = document.createElement("a"); // create <a> tag
    link.href = "/anupam-resume.pdf"; // file location (inside public)
    link.download = "anupam-resume.pdf"; // force download with filename
    link.target = "_blank"; // open in new tab
    link.click(); // trigger click
  };

  function SocialComponent({ iconLink, link, title, ...props }) {
    return (
      <div
        {...props}
        className="flex flex-col items-center hover:scale-120  transition-transform duration-200"
      >
        <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
          <img src={iconLink} alt={title} className="w-10 h-10" />
          <span className="text-xs mt-1 text-gray-400">{title}</span>
        </a>
      </div>
    );
  }

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
      <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
        {socials.map((social) => (
          <SocialComponent
            key={social.title}
            iconLink={social.iconLink}
            link={social.link}
            title={social.title}
            onClick={social.title === "Resume" ? downloadPdf : undefined}
          />
        ))}
      </div>
    </div>
  );
}
