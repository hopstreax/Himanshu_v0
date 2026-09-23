import { AboutData, EducationItem, ExperienceItem } from "@/types/portfolio";

export const education: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Information Technology",
  institution: "Institute of Technical Education and Research (ITER)",
  location: "Bhubaneswar, India",
  period: "2022 — 2026",
  grade: "CGPA: 8.0 / 10.0",
  highlights: [
    "Smart India Hackathon (SIH) College-level round qualifier & technical lead",
    "Google Developer Student Clubs (GDSC) core community member",
    "Google Cloud Arcade (2024 & 2025) certifications in cloud computing & AI/ML",
  ],
};

export const experiences: readonly ExperienceItem[] = [
  {
    company: "Celebal Technologies",
    role: "Software Development Intern – ReactJS / Full Stack",
    period: "June 2025 — August 2025",
    location: "Remote",
    type: "internship",
    bulletPoints: [
      "Engineered and optimized a Service Desk Application using React.js, improving UI responsiveness and reducing page load time by 30% across desktop and mobile platforms.",
      "Built a dynamic ticket management system with priority tagging, category selection, and real-time status tracking, reducing average issue resolution time by 25%.",
      "Collaborated in an Agile development environment, participating in code reviews, sprint planning, and maintaining modular component architecture.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    company: "Tata Steel Ltd.",
    role: "Application Development Intern – Full Stack MERN",
    period: "July 2024 — September 2024",
    location: "Jamshedpur, India",
    type: "internship",
    bulletPoints: [
      "Designed and deployed a full-stack MERN dashboard application for internal user access management, supporting 500+ organizational users.",
      "Implemented JWT and bcrypt.js authentication with role-based access control (RBAC), reducing unauthorized access risks.",
      "Improved and deployed 10+ scalable RESTful APIs using Node.js and Express.js with MongoDB query indexing.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
] as const;

export const coreSkills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "Python",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Generative AI & LLMs",
  "REST APIs",
  "Git & GitHub",
] as const;

export const aboutData: AboutData = {
  name: "Himanshu Patro",
  title: "AI / Software / Open Source",
  shortBio:
    "Software Engineer and Full Stack AI Developer specializing in scalable web systems, autonomous testing agents, and open-source code intelligence.",
  longBio: [
    "Results-driven Software Engineer with hands-on experience building scalable full-stack web applications, robust RESTful APIs, and intelligent automation tooling.",
    "Active open-source contributor with 30+ merged PRs in code intelligence and AST analysis frameworks. Proven track record across corporate engineering teams at Celebal Technologies and Tata Steel Ltd.",
  ],
  currentFocus:
    "Autonomous AI web testing systems, code graph extraction engines, and generative AI developer tooling.",
  location: "Bhubaneswar, India",
  technicalFocusAreas: [
    "Full-Stack Web Architecture & Performance",
    "Generative AI & LLM-Powered Workflow Engines",
    "AST Parsing & Code Graph Extraction",
    "Autonomous Browser Test Orchestration",
  ],
  education,
  experiences,
  coreSkills,
};

// Backwards compatibility for existing imports
export const identity = {
  name: aboutData.name,
  title: aboutData.title,
  summary: aboutData.shortBio,
  location: aboutData.location,
} as const;
