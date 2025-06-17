const techLogos = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
};

export const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    keyFetures: [
      "TMDB API integration",
      "Responsive design",
      "User authentication",
    ],
    description: "",
    technologies: [
      { name: "React", logo: techLogos["React"] },
      { name: "Node.js", logo: techLogos["Node.js"] },
      { name: "MongoDB", logo: techLogos["MongoDB"] },
    ],
    githubLink: " ",
    liveLink: "https://example.com/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for project two.",
    keyFetures: ["GraphQL API", "Server-side rendering", "PostgreSQL database"],
    technologies: [
      { name: "Next.js", logo: techLogos["Next.js"] },
      { name: "GraphQL", logo: techLogos["GraphQL"] },
      { name: "PostgreSQL", logo: techLogos["PostgreSQL"] },
    ],
    githubLink: " ",
    liveLink: "https://example.com/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for project three.",
    keyFetures: ["Real-time chat", "User authentication", "Responsive design"],
    technologies: [
      { name: "Vue.js", logo: techLogos["Vue.js"] },
      { name: "Firebase", logo: techLogos["Firebase"] },
    ],
    githubLink: " ",
    liveLink: "https://example.com/project-three",
  },
];

export const jobs = [
  {
    id: 1,
    title: "Web Developer",
    company: "PI Innovations",
    location: "On-site",
    duration: "2022-2024",
    description: "Developing front-end web applications using React.",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "TechSthal Solutions",
    location: "On-site",
    duration: "2024-present",
    description: [
      "Build websites and web applications using React, Next.js, and Node.js.",
      "Worked as robotics engineer, writing programs for robotic systems.",
    ],
  },
];

export const skills = [
  ["Backend", ["Node.js", "Express"]],
  ["Frontend", ["React", "HTML", "CSS"]],
  ["Languages", ["JavaScript", "Python", "TypeScript"]],
  ["Cloud", ["Versel", "Render"]],
  ["Database", ["MongoDB", "PostgreSQL", "MySQL"]],
];
