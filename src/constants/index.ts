import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 

  threejs,
  maya,
  AI,
  AE,
  DW,
  Figma,
  Framer,
  spline,
  wix,
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Figma Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Templates Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Figma Developer",
    companyName: "Figma",
    icon: Figma,
    iconBg: "#383E56",
    date: "March 2022 ",
    points: [
      "Designing and prototyping interactive user interfaces for web and mobile applications using Figma.",
      "Collaborating with UX/UI teams to create wireframes, mockups, and high-fidelity designs.",
      "Optimizing user experience through intuitive layouts and seamless navigation.",
      "Maintaining design consistency by managing style guides and design systems.",
    ],
    
  },
  {
    title: "Illustrator",
    companyName: "Illustrator",
    icon: AI,
    iconBg: "#E6DEDD",
    date: "Jan 2022 ",
    points: [
      "Creating vector-based illustrations and graphics for branding, marketing, and web assets.",
      "Designing logos, icons, and promotional material with attention to scalability and clarity.",
      "Collaborating with clients and creative teams to develop custom visual concepts.",
      "Enhancing web and app visuals by integrating hand-drawn elements with digital design tools.",
    ],
    
  },
  {
    title: "Dreamweaver",
    companyName: "Dreamweaver",
    icon: DW,
    iconBg: "#383E56",
    date: "Jan 2022 ",
    points: [
      "Developing and maintaining responsive websites using HTML, CSS, and JavaScript within Dreamweaver.",
      "Utilizing Dreamweaver’s visual interface for rapid front-end development and code management.",
      "Collaborating with designers to implement pixel-perfect layouts across multiple browsers.",
      "Integrating interactive features and optimizing website performance for user engagement.",
    ],
    
  },
  {
    title: "After Effects",
    companyName: "Sfter Effects",
    icon: AE,
    iconBg: "#E6DEDD",
    date: "Jan  2024    ",
    points: [
      "Designing and animating motion graphics for videos,  ations, and promotional content using After Effects.",
      "Creating dynamic visual effects for websites, apps, and digital media campaigns.",
      "Collaborating with video production teams to deliver high-quality post-production work.",
      "Optimizing animations for smooth performance and cross-platform compatibility.",
    ],
    
  },
  {
    title: "Wix Studio",
    companyName: "Wix Studio",
    icon: wix,
    iconBg: "#E6DEDD",
    date: "April  2024    ",
    points: [
      "Building custom websites using Wix Studio’s drag-and-drop interface and design tools.",
      "Implementing dynamic content, animations, and responsive layouts for unique client websites.",
      "Collaborating with content creators to design landing pages and interactive features.",
      "Ensuring websites are SEO-optimized and mobile-friendly for a seamless user experience.",
    ],
    
  },
  {
    title: "Framer",
    companyName: "Framer",
    icon: Framer,
    iconBg: "#E6DEDD",
    date: "May  2024    ",
    points: [
      "Prototyping interactive components and high-fidelity animations using Framer.",
      "Creating responsive design systems for web and mobile interfaces with built-in interactivity.",
      "Collaborating with developers to ensure a smooth transition from design to production.",
      "Iterating on designs quickly, testing user interactions, and refining visual components.",
    ],
    
  },
  {
    title: "Spline",
    companyName: "Spline",
    icon: spline,
    iconBg: "#E6DEDD",
    date: "May  2024    ",
    points: [
      "Developing 3D models and animations for interactive web experiences using Spline.",
      "Integrating 3D elements into web designs, providing depth and engagement to user interfaces.",
      "Collaborating with creative teams to enhance user interactions through immersive design.",
      "Optimizing 3D assets for smooth performance across multiple platforms and devices.",
    ],
    
  },
  {
    title: "Maya",
    companyName: "Maya",
    icon: maya,
    iconBg: "#E6DEDD",
    date: "June  2024    ",
    points: [
      "Modeling, rigging, and animating 3D assets for film, games, and interactive media using Maya.",
      "Collaborating with game designers and animators to bring characters and environments to life.",
      "Developing realistic visual effects and motion capture animations using advanced tools.",
      "Optimizing 3D scenes for rendering, ensuring high-quality output and efficient production pipelines.",
    ],
    
  },
];



const projects: TProject[] = [
  {
    name: "Shoes UI",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: a,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Cycle Shopping UI",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: b,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Clothing UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: c,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Nike Shopping UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: d,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Headphones UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: e,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Clothing UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: f,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Luxury Watches UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: g,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Jordan Shopping UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: h,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Uber UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: i,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Game UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: j,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Shoes UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: k,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
  {
    name: "Futuristics Clothing UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: l,
    sourceCodeLink: "https://github.com/Murtaza-Huzefa-Sohangpur",
  },
];

export { services, technologies, experiences, projects };
