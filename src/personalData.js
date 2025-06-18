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
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  HTML:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Vercel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  Render:
    "https://avatars.githubusercontent.com/u/42880151?s=200&v=4",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
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
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: techLogos["Node.js"] },
      { name: "Express", logo: techLogos["Express"] },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", logo: techLogos["React"] },
      { name: "HTML", logo: techLogos["HTML"] },
      { name: "CSS", logo: techLogos["CSS"] },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", logo: techLogos["JavaScript"] },
      { name: "Python", logo: techLogos["Python"] },
      { name: "TypeScript", logo: techLogos["TypeScript"] },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "Vercel", logo: techLogos["Vercel"] },
      { name: "Render", logo: techLogos["Render"] },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", logo: techLogos["MongoDB"] },
      { name: "PostgreSQL", logo: techLogos["PostgreSQL"] },
      { name: "MySQL", logo: techLogos["MySQL"] },
    ],
  },
];
