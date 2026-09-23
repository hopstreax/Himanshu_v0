import { ProjectItem } from "@/types/portfolio";

export const projects: readonly ProjectItem[] = [
  {
    slug: "tracekit",
    title: "TraceKit",
    year: "2025",
    tier: "flagship",
    category: "Autonomous AI Testing",
    tagline: "Autonomous AI web testing & test orchestration engine",
    shortDescription:
      "Autonomous browser testing agent with self-healing test suites and ambient diagnostic tracking.",
    longDescription:
      "An intelligent, agent-driven platform for end-to-end automated web testing. Employs intelligent browser execution, real-time diagnostic recording, and autonomous failure triage.",
    technologies: ["TypeScript", "React", "Node.js", "Python", "Playwright"],
    highlights: [
      "Autonomous failure triage and self-healing test execution",
      "Ambient diagnostic session recording and trace visualizer",
      "Deterministic end-to-end test orchestration across modern web stacks",
    ],
    featured: true,
  },
  {
    slug: "ai-interviewer",
    title: "AI Interviewer",
    year: "2025",
    tier: "flagship",
    category: "GenAI / NLP",
    tagline: "Fine-tuned Llama-based interview simulation system",
    shortDescription:
      "LLM-driven interview simulation with real-time speech evaluation and dynamic question adaptation.",
    longDescription:
      "End-to-end simulation platform using Generative AI and NLP, providing structured real-time speech recognition, dynamic difficulty adjustment, and candidate evaluation.",
    technologies: ["Python", "Streamlit", "Generative AI", "NLP", "Speech Recognition"],
    highlights: [
      "Real-time speech recognition and answer evaluation engine",
      "Dynamic question difficulty adjustment powered by LLM prompt engineering",
      "Structured analytical candidate feedback across technical accuracy and clarity",
    ],
    featured: true,
  },
  {
    slug: "campus-lost-and-found",
    title: "Campus Lost & Found Portal",
    year: "2025",
    tier: "secondary",
    category: "Full Stack MERN",
    tagline: "Campus community inventory and retrieval platform",
    shortDescription:
      "Full-stack management system with secure RESTful APIs, JWT role-based access, and indexed search.",
    longDescription:
      "Community portal enabling rapid posting, search, and claim tracking for misplaced items across the campus.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: [
      "RESTful APIs with JWT authentication and RBAC",
      "Indexed search reducing item discovery time by 40%",
      "Real-time user dashboards for tracking posted items and claim activity",
    ],
    featured: false,
  },
  {
    slug: "e-pmsss",
    title: "e-PMSSS",
    year: "2025",
    tier: "secondary",
    category: "GovTech / Security",
    tagline: "Paperless scholarship disbursement system",
    shortDescription:
      "Paperless scholarship platform with multi-stage verification and encrypted records.",
    longDescription:
      "Scalable platform eliminating paper-based administration, reducing processing turnaround by 60% with multi-stage application tracking and encrypted document storage.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bcrypt"],
    highlights: [
      "Reduced administrative processing turnaround by 60%",
      "Encrypted document storage and multi-role approval workflow",
      "Multi-layer security using JWT and bcrypt.js encryption",
    ],
    featured: false,
  },
] as const;

export const flagshipProjects = projects.filter((p) => p.tier === "flagship");
export const secondaryProjects = projects.filter((p) => p.tier === "secondary");
