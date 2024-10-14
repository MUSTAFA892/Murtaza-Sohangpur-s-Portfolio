type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Murtaza Huzefa",
    fullName: "Murtaza Huzefa",
    email: "smoothuxmuru@gmail.com",
  },
  hero: {
    name: "Murtaza Huzefa",
    p: ["UI/UX and Graphic Designer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `On the UI/UX side, we focus on designing intuitive, user-friendly interfaces that enhance user experiences across digital platforms. By combining aesthetics with usability, we ensure that every design we create not only looks stunning but also functions seamlessly to meet business goals. Our mission is to help our clients stand out, drive user engagement, and turn ideas into impactful digital realities.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Designing specialized UIs in Figma for products like luxury watches, Jordan sneakers, futuristic clothing, game interfaces, and ride-hailing services involves creating visually engaging and intuitive experiences. Each UI features prominent logos, streamlined navigation menus, and striking hero sections with high-quality images and compelling taglines.`,
    },
  },
};
