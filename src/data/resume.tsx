import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ethan Nguyen",
  initials: "DV",
  url: "https://dillion.io",
  location: "Fountain Valley, CA",
  locationLink: "https://www.google.com/maps/place/Fountain+Valley,+CA",
  description:
    "| Computer Engineer | Software Engineer | WebDeveloper | Tech Enthusiast | ",
  summary:
    "I wanted to be an inventor to create and be part of something big. Those ideas influenced me to get a bachelor's degree in Computer engineering from California state university. My experience spans from playing with legos as a kid to working with brilliant minds on nuclear power systems. I've programmed microcontrollers for professors, worked with VBScript in assisting tech writers, and creating Python scripts for SWE managers."
  ,
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
    "Verilog",
    "Bash",
    "VBscript"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Ethannguyen112@gmail.com",
    tel: "+1 (714) 913-5777",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EthanNguyen112",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ethan-nguyen112/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "L3Harris Power Pargon Inc",
      href: "https://www.l3harris.com/",
      badges: [],
      location: "Anheim, CA",
      title: "Software Engineer Intern",
      logoUrl: "/atomic.png",
      start: "June 2019",
      end: "january 2021",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    }
  ],
  education: [
    {
      school: "California State University, Long Beach",
      href: "https://www.csulb.edu/",
      degree: "Bachelor of Science, Computer Engineering",
      logoUrl: "/ib.png",
      //start: "2016",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Embedded Weather Quest",
      href: "https://github.com/EthanNguyen112/Uni-Projects/tree/main/Embedded_Weather_Quest",
      //dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "This project demonstrates how to build an IoT-enabled embedded weather application",
      technologies: [
        "C",
        "APIs",
        "TM4C123 Microcontroller",
        "ST7735R Color LCD",
        "CC3100ModBoost",

      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/EthanNguyen112/Uni-Projects/tree/main/Embedded_Weather_Quest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Bluetooth Robot Car",
      href: "https://github.com/EthanNguyen112/Uni-Projects/tree/main/Bluetooth_Controlled_Robot_Car",
      //dates: "June 2023 - Present",
      active: true,
      description:
        "A wireless robot car built using the microcontroller and Bluetooth module, controlled from a laptop or smartphone via UART communication. Demonstrates embedded systems, Bluetooth configuration, and PWM-based motor control.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/EthanNguyen112/Uni-Projects/tree/main/Bluetooth_Controlled_Robot_Car",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    
  ],
} as const;
