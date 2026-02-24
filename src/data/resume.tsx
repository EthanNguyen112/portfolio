import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ethan Nguyen",
  initials: "EN",
  url: "https://EthanNguyen112.io",//Temporary URL
  avatarUrl: "/me.jpg",
  location: "Fountain Valley, CA",
  locationLink: "https://www.google.com/maps/place/Fountain+Valley,+CA",
  summary: "I wanted to be an inventor to create and be part of something big. Those ideas influenced me to get a bachelor's degree in Computer engineering from California state university. My experience spans from playing with legos as a kid to working with brilliant minds on nuclear power systems. I've programmed microcontrollers for professors, worked with VBScript in assisting tech writers, and creating Python scripts for SWE managers.",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.j s",
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
      company: "MuseumSoft",
      href: "https://museumsoft.com/",
      badges: [],
      location: "Remote",
      title: "SaaS Platform for Museum Management",
      logoUrl: "/l3harris.png",
      start: "july 2025",
      end: "December 2025",
      description:
        "Engineered and maintained full-stack features across ticketing, CRM, membership management, and event scheduling platforms. Designed and implemented RESTful APIs using NestJS, Prisma, and PostgreSQL with comprehensive Swagger documentation to support scalable and maintainable backend services. Developed responsive frontend pages and reusable UI components using Next.js, shadcn/ui, and Tailwind CSS, ensuring consistency across the application. Implemented secure authentication and authorization workflows using JWT with refresh token rotation and role-based access control (RBAC). Designed and deployed a signed-URL file upload pipeline integrated with Google Cloud Storage to enable secure, direct-to-cloud asset uploads while minimizing backend load.",
    },
    {
      company: "L3Harris Power Pargon Inc",
      href: "https://www.l3harris.com/",
      badges: [],
      location: "Anheim, CA",
      title: "Software Engineer Intern",
      logoUrl: "/l3harris.png",
      start: "June 2019",
      end: "january 2021",
      description:
        "I automated Jira tracking for more than fifty engineering tickets to eliminate manual reporting and improve project visibility for management, integrated and debugged hardware and software for nuclear power systems to strengthen data accuracy and system reliability, maintained an organized Confluence workspace with updated documentation and product architecture, and developed a GUI-based application that reduced manual documentation effort by thirty percent while ensuring consistent and compliant records.",
    }
  ],
  education: [
    {
      school: "California State University, Long Beach",
      href: "https://www.csulb.edu/",
      degree: "Bachelor of Science, Computer Engineering",
      logoUrl: "/LB.jpg",
      //start: "2016",
      end: "2022",
      description:
      "Electrical/Electronics 101, Embedded Systems, Operating Systems, System on Chip Design, Digital Signal Process Design, Computer Architecture, Digital Design Tech Verification, MicroProcessors + Controllers"
,
    },
  ],
  projects: [
    {
      title: "Embedded Weather Quest",
      href: "https://github.com/EthanNguyen112/Uni-Projects/tree/main/Embedded_Weather_Quest",
      //dates:
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
      image: "/projects/EmbeddedWeatherQuest.PNG",
      video:
        "",
    },
    {
      title: "IOSAppCounter",
      href: "https://github.com/EthanNguyen112/IOSAppCounter",
      
      active: true,
      description:
        "An automation for the IOS shortcut app to show how many times an application has been open and how long it's been used. The purpose is to actively keep the user aware of their screen time, productivity tracking, and app usage awareness.",
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
      video: "/projects/IOS.mp4",
    },
    {
      title: "Bluetooth Robot Car",
      href: "https://github.com/EthanNguyen112/Uni-Projects/tree/main/Bluetooth_Controlled_Robot_Car",
     
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
      image: "/projects/RC.PNG",
      video: "",
    },
    {
      title: "Traffic Light Controller",
      href: "https://github.com/EthanNguyen112/Uni-Projects/tree/main/Traffic_Light_Controller",
      
      active: true,
      description:
        "A traffic light control system developed using a microcontroller programed via C. Simulates a real-world intersection with North-South, East-West vehicle lanes, and pedestrian crossing functionality",
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
      image: "/projects/trafficLightController.PNG",
      video: "",
    },
    {
      title: "Serial Terminal Calculator",
      href: "https://github.com/EthanNguyen112/Uni-Projects/tree/main/Serial_Terminal_Calculator",
      //dates: "April 2023 - September 2023",
      active: true,
      description:
        "A serial communication calculator program built on the 8051 microcontroller. This project interfaces with a PC terminal emulator to perform arithmetic operations in decimal, binary, and hexadecimal number systems.",
      technologies: [
        "C (Embedded C)",
        "8051 microcontroller",
        "keil uVision4 IDE",
        "Terminal emulator",

      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/EthanNguyen112/Uni-Projects/tree/main/Serial_Terminal_Calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/serialTerminalCalculator.png",
      video: "",
    },
    {
      title: "Arduino iot webvideo",
      href: "https://github.com/EthanNguyen112/Arduino-iot-webvideo",
      dates: "In-progress",
      active: true,
      description:
        "A doorbell with a camera linking to different devices will be using autodesk's hobbist circuit maker, fusion 360.",
      technologies: [
        "Arduino uno wifi",
        "LCD screen",

      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/EthanNguyen112/Arduino-iot-webvideo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/workinprogress.mp4",
    },
    
    
  ],
} as const;
