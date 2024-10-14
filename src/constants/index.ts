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
 
  carrent,
  jobit,
  tripguide,
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
      "Designing a Shoes UI in Figma involves creating a sleek, visually appealing interface that allows users to easily browse and shop for shoes. At the top, the header features a well-placed logo on the left, followed by a central search bar for finding specific shoes, and a horizontal navigation menu with options like Men, Women, Kids, and Sale. On the right, icons for user profile and shopping cart provide easy access, with the cart showing the number of items inside.",
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
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Cycle Shopping UI",
    description:
      "Designing a Cycling Gear Shopping UI in Figma requires a balance of functionality, clean design, and engaging visuals to make browsing and purchasing easy for users. Here's a description of how to structure the UI: The header at the top features the brand logo on the left for quick identification, followed by a central search bar for users to find specific cycling gear, such as bikes, helmets, or accessories.",
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
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Clothing UI",
    description:
      "Designing a Clothing Shopping UI in Figma involves creating an intuitive and visually appealing interface that enhances the shopping experience. The header features the brand logo on the left, a central search bar for quick item searches, and a horizontal navigation menu with categories like Men,Women,Kids,New Arrivals, and Sale. Icons for the user profile, wish list, and shopping cart are positioned on the right, with the cart displaying the number of items.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: c,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Nike Shopping UI",
    description:
      "Designing a Nike Shopping UI in Figma would focus on a modern, dynamic, and sporty interface that aligns with Nike’s brand identity. The header would feature the iconic Nike logo on the left, followed by a clean search bar for users to find products like sneakers, apparel, or accessories, and a horizontal navigation menu with categories such as Men, Women, Kids, New Arrivals, and Sale. ",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: d,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Headphones UI",
    description:
      "Designing a Headphones Shopping UI in Figma involves creating an engaging and user-friendly interface that highlights various headphone products effectively. The header would feature a prominent brand logo on the left, followed by a central search bar for users to quickly find specific headphones or related accessories.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: e,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Clothing UI",
    description:
      "Designing a Clothing Shopping UI in Figma involves creating an intuitive and visually appealing interface that enhances the shopping experience. The header features the brand logo on the left, a central search bar for quick item searches, and a horizontal navigation menu with categories like Men,Women,Kids,New Arrivals, and Sale. Icons for the user profile, wish list, and shopping cart are positioned on the right, with the cart displaying the number of items.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: f,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Luxury Watches UI",
    description:
      "Designing a Luxury Watches Shopping UI in Figma involves creating a sophisticated and elegant interface that reflects the high-end nature of the products. The header would prominently display the brand logo on the left, complemented by a central search bar for users to easily find specific watch models or accessories. ",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: g,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Jordan Shopping UI",
    description:
      "Designing a Jordan Shopping UI in Figma involves creating a bold, dynamic interface that reflects the iconic style and culture associated with the Jordan brand. The header would feature the classic Jumpman logo prominently on the left, accompanied by a central search bar for users to quickly find specific sneakers or apparel. ",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: h,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Uber UI",
    description:
      "Designing an Uber-like UI in Figma focuses on creating a sleek, user-friendly interface that facilitates ride-hailing and transportation services. The header would prominently display the Uber logo on the left, alongside a central search bar where users can enter their destination.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: i,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Game UI",
    description:
      "Designing a Game UI in Figma involves creating an immersive and interactive interface that enhances the gaming experience while providing essential information at a glance. The main menu would feature the game logo prominently at the top, accompanied by vibrant background art that reflects the game’s theme.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: j,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Shoes UI",
    description:
      "Designing a Shoes UI in Figma involves creating a sleek, visually appealing interface that allows users to easily browse and shop for shoes. At the top, the header features a well-placed logo on the left, followed by a central search bar for finding specific shoes, and a horizontal navigation menu with options like Men, Women, Kids, and Sale. On the right, icons for user profile and shopping cart provide easy access, with the cart showing the number of items inside.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: k,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Futuristics Clothing UI",
    description:
      "Designing a Futuristic Clothing UI in Figma involves creating a sleek and innovative interface that reflects modern fashion trends and technology. The header would feature a minimalist logo on the left, accompanied by a streamlined search bar for users to quickly find specific clothing items.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: l,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
