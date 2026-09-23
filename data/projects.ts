import { ProjectItem } from "@/types/portfolio";

export const projects: readonly ProjectItem[] = [
  {
    slug: "tracekit",
    title: "TraceKit",
    year: "2025",
    tag: "AI / TESTING",
    tagline: "Autonomous AI web testing & test orchestration engine",
    summary:
      "An intelligent, agent-driven platform for end-to-end automated web testing, self-healing browser test suites, and ambient diagnostic tracking.",
    technologies: ["TypeScript", "React", "Node.js", "Python", "Playwright"],
    featured: true,
  },
  {
    slug: "ai-interviewer",
    title: "AI Interviewer",
    year: "2025",
    tag: "GENAI / NLP",
    tagline: "Fine-tuned Llama-based interview simulation system",
    summary:
      "End-to-end simulation platform using Generative AI and NLP, providing structured real-time speech recognition, dynamic difficulty adjustment, and candidate evaluation.",
    technologies: ["Python", "Streamlit", "Generative AI", "NLP", "Speech Recognition"],
    featured: true,
  },
  {
    slug: "campus-lost-and-found",
    title: "Campus Lost & Found Portal",
    year: "2025",
    tag: "FULL STACK",
    tagline: "Campus community inventory and retrieval platform",
    summary:
      "Full-stack management system with secure RESTful APIs, JWT role-based access, and indexed search reducing discovery time by 40%.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    featured: false,
  },
  {
    slug: "e-pmsss",
    title: "e-PMSSS",
    year: "2025",
    tag: "GOVTECH",
    tagline: "Paperless scholarship disbursement system",
    summary:
      "Scalable platform eliminating paper-based administration, featuring multi-stage application tracking and encrypted document verification.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bcrypt"],
    featured: false,
  },
] as const;
