import { EducationItem, ExperienceItem } from "@/types/portfolio";

export const identity = {
  name: "Himanshu Patro",
  title: "AI / Software / Open Source",
  summary:
    "Software Engineer and Full Stack AI Developer focused on building high-performance web applications, intelligent automation systems, and developer tooling. Active open-source contributor.",
  location: "Bhubaneswar, India",
} as const;

export const education: EducationItem = {
  degree: "Bachelor of Technology (B.Tech) in Information Technology",
  institution: "Institute of Technical Education and Research (ITER), Bhubaneswar",
  period: "2022 – 2026",
  grade: "CGPA: 8.0 / 10.0",
};

export const experiences: readonly ExperienceItem[] = [
  {
    company: "Celebal Technologies",
    role: "Software Development Intern – ReactJS / Full Stack",
    period: "June 2025 – August 2025",
    location: "Remote",
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
    period: "July 2024 – September 2024",
    location: "Jamshedpur, India",
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
