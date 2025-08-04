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
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Vercel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  Render: "https://avatars.githubusercontent.com/u/42880151?s=200&v=4",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Socket.io": "https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg",
  Zustand:
    "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
  TMDB: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
};

export const projects = [
  {
    id: 1,
    title: "Chatting Website",
    keyFetures: [
      "Socket.io Integration",
      "Realtime Chat",
      "State Management using Zustand",
    ],
    technologies: [
      { name: "Socket.io", logo: techLogos["Socket.io"] },
      { name: "React", logo: techLogos["React"] },
      { name: "Zustand", logo: techLogos["Zustand"] },
    ],
    githubLink: "https://github.com/anupamkandel8/chatApp",
    liveLink: "https://chatapp-rx5q.onrender.com/",
  },
  {
    id: 2,
    title: "Netflix Clone",
    keyFetures: [
      "TMDB API integration",
      "Responsive design",
      "User authentication",
    ],
    description: "",
    technologies: [
      { name: "TMDB API", logo: techLogos["TMDB"] },
      { name: "React", logo: techLogos["React"] },
      { name: "MongoDB", logo: techLogos["MongoDB"] },
    ],
    githubLink: "https://github.com/anupamkandel8/netflix-clone",
    liveLink: "https://netflix-clone-mysm.onrender.com/",
  },

  {
    id: 3,
    title: "Course Selling Website",
    description: "Description for project three.",
    keyFetures: ["User authentication", "Course management",'Admin User Interface'],
    technologies: [
      { name: "Next.js", logo: techLogos["Next.js"] },
      { name: "TypeScript", logo: techLogos["TypeScript"] },
      { name: "Express", logo: techLogos["Express"] },
    ],
    githubLink: "https://github.com/anupamkandel8/course",
    // liveLink: "https://example.com/project-three",
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
      { name: "Next.js", logo: techLogos["Next.js"] },
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
