import {
  AboutData,
  EducationItem,
  ExperienceItem,
  EngineeringInterestItem,
  WorkPrincipleItem,
  CurrentWorkItem,
  OutsideEngineeringItem,
  WhatIBuildItem,
  OpenSourceJourneySection,
} from "@/types/portfolio";

export const education: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Information Technology (CSIT)",
  institution:
    "Institute of Technical Education and Research (ITER), Siksha 'O' Anusandhan (SOA) University",
  location: "Bhubaneswar, Odisha, India",
  period: "2022 — 2026",
  grade: "CGPA: 8.0 / 10.0",
  highlights: [
    "Smart India Hackathon (SIH) College-level round qualifier & technical lead for e-PMSSS",
    "Google Developer Student Clubs (GDSC) core community member & peer learning contributor",
    "Google Cloud Arcade (2024 & 2025) certifications in cloud infrastructure, Kubernetes, and AI/ML services",
    "Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering",
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
      "Engineered and optimized a corporate Service Desk Application using React.js, improving UI responsiveness and reducing page load time by 30% across desktop and mobile platforms.",
      "Built a dynamic ticket management system with priority tagging, category selection, and real-time status tracking, reducing average issue resolution time by 25%.",
      "Integrated real-time ticket status updates and notification workflows, enhancing end-user transparency and support-team communication efficiency.",
      "Collaborated in an Agile development environment, participating in sprint reviews, planning sessions, and maintaining modular component architecture.",
      "Ensured seamless RESTful API integration between React.js frontend and Node.js/Express.js backend, maintaining consistent and reliable data flow.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
  },
  {
    company: "Tata Steel Ltd.",
    role: "Application Development Intern – Full Stack MERN",
    period: "July 2024 — September 2024",
    location: "Jamshedpur, Jharkhand, India",
    type: "internship",
    bulletPoints: [
      "Designed and deployed a full-stack MERN dashboard application for internal user access management, supporting 500+ organizational users and streamlining authentication workflows.",
      "Implemented JWT and bcrypt.js based authentication with role-based access control (RBAC), reducing unauthorized access risks and ensuring secure session management.",
      "Developed and deployed 10+ scalable RESTful APIs using Node.js and Express.js, integrated with MongoDB for real-time CRUD operations and efficient data retrieval.",
      "Created fully responsive interfaces with React.js and Tailwind CSS, achieving cross-device compatibility and improving user experience consistency.",
      "Streamlined MongoDB query performance through compound indexing strategies, improving data retrieval speed by approximately 20%.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Bcrypt.js"],
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
  "MySQL",
  "Tailwind CSS",
  "Generative AI & LLMs",
  "REST APIs",
  "Playwright & Patchright",
  "Docker",
  "Linux / Shell",
  "Git & GitHub",
] as const;

export const whatIBuild: readonly WhatIBuildItem[] = [
  {
    domain: "Full-Stack Web Systems",
    headline: "Scalable MERN & Next.js Platforms",
    description:
      "Engineered production web applications featuring modular component architecture, robust RESTful APIs, and role-based access control (RBAC). Experienced with database indexing, responsive layouts, and performance optimization.",
    competencies: [
      "React.js & Next.js App Router",
      "Express.js & Node.js RESTful Services",
      "MongoDB Schema Design & Query Indexing",
      "JWT Authentication & Session Management",
    ],
  },
  {
    domain: "AI-Powered Developer Tooling",
    headline: "Autonomous Testing & Agent Runtimes",
    description:
      "Constructed TraceKit, an autonomous web testing agent that pairs LLM planning with deterministic Chromium DOM assertions. Focuses on actionable failure classification and structured execution traces rather than speculative visual checks.",
    competencies: [
      "Chromium Automation via Patchright / CDP",
      "Deterministic Playwright Assertions",
      "Semantic Accessibility Tree Snapshotting",
      "Structured Pydantic Action Modeling",
    ],
  },
  {
    domain: "Code Intelligence & Compilers",
    headline: "AST Analysis & Dependency Graphs",
    description:
      "Active core contributor to Graphify with 30+ merged pull requests. Investigates multi-language AST extraction (Tree-Sitter), symbol table construction, cross-file import resolution, and incremental graph merging deduplication.",
    competencies: [
      "Tree-Sitter Multi-Language Parsers",
      "NetworkX Dependency Graph Construction",
      "Symbol Table & Import Resolution",
      "Fail-Closed Parser Error Recovery",
    ],
  },
  {
    domain: "Reliable Software Engineering",
    headline: "System Behavior, Protocols & Hardening",
    description:
      "Investigated and solved production-grade edge cases in open-source systems: SSE streaming keepalive protocols in AI proxies, Windows subprocess isolation with CREATE_NO_WINDOW, and bounded atomic tempfile operations.",
    competencies: [
      "Server-Sent Events (SSE) Keepalive Frames",
      "Cross-Platform Process Management",
      "Automated Regression Test Suites (pytest/Vitest)",
      "Strict Scoping & Defensible Pull Requests",
    ],
  },
] as const;

export const engineeringInterests: readonly EngineeringInterestItem[] = [
  {
    title: "Understanding Production Codebases",
    category: "Code Intelligence",
    description:
      "Tracing complex architectural flows, dependency graphs, and AST visitor passes in large, unfamiliar repositories before writing code.",
    competencies: [
      "AST Analysis (Tree-Sitter)",
      "Cross-File Symbol Resolution",
      "Execution Flow Mapping",
      "Dependency Graph Traversal",
    ],
  },
  {
    title: "Systematic Debugging & Root Cause Analysis",
    category: "Software Reliability",
    description:
      "Isolating reproduction fixtures for edge-case bugs—such as carried-hyperedge collisions or SSE timeout disconnects—and fixing root mechanisms instead of applying superficial patches.",
    competencies: [
      "Minimal Standalone Reproductions",
      "Asynchronous Race Condition Isolation",
      "Protocol-Level Debugging (HTTP/SSE)",
      "Fail-Closed State Invariants",
    ],
  },
  {
    title: "Developer Tooling & Testing Infrastructure",
    category: "Developer Experience",
    description:
      "Building automation that shortens feedback loops: autonomous browser test runners, structured error parsers for IDE extensions, and deterministic compilation watchers.",
    competencies: [
      "Headless Browser Control (Patchright/Playwright)",
      "Deterministic DOM Verification",
      "IDE Error Diagnostic Extractors",
      "Automated Regression Testing",
    ],
  },
  {
    title: "AI-Assisted Engineering & Agent Runtimes",
    category: "Intelligent Systems",
    description:
      "Designing agentic loops that balance generative AI planning with deterministic software verification barriers, ensuring outputs are grounded in verifiable execution traces.",
    competencies: [
      "Structured JSON Output Generation",
      "Prompt Orchestration & Rubric Tuning",
      "Decoupled Execution Pipelines",
      "Agent State Management",
    ],
  },
  {
    title: "Open-Source Engineering & Maintainer Collaboration",
    category: "Collaborative Engineering",
    description:
      "Navigating open-source projects, participating in technical design discussions, respecting established invariants, and delivering clean, maintainer-reviewed pull requests.",
    competencies: [
      "Conventional Commits & Clean Diffs",
      "Multi-Platform CI Compatibility",
      "Collaborative Code Reviews",
      "Comprehensive PR Summaries",
    ],
  },
  {
    title: "Architecture & System Behavior",
    category: "Systems & Backend",
    description:
      "Engineering resilient backend services: managing asynchronous worker queues, optimizing database queries with compound indexing, and handling cross-platform process isolation.",
    competencies: [
      "FastAPI Async RunManagers",
      "Express Middleware Pipelines",
      "Compound Database Indexing",
      "Reverse Proxy Routing (Caddy)",
    ],
  },
] as const;

export const openSourceJourney: OpenSourceJourneySection = {
  summary:
    "My open-source journey progressed from exploring unfamiliar architectures and diagnosing small edge cases into sustained, core contributions to enterprise-grade code intelligence and developer infrastructure.",
  stages: [
    {
      phase: "Stage 1: Exploration & Targeted Bugfixes",
      focus: "Understanding diverse production runtimes and diagnostic layers",
      description:
        "Started by studying real-world repositories across different ecosystems. In Continue (AI code assistant), investigated structured error payloads from model providers, building nested message extraction to replace opaque GUI error alerts. In Headroom Labs, resolved premature SSE streaming disconnects during long-running LLM completions by implementing transport-level keepalive frames.",
    },
    {
      phase: "Stage 2: Community Platforms & State Machines",
      focus: "Data integrity and state machine edge cases",
      description:
        "Contributed to ProteinDeficientsAnonymous (PDA), resolving waitlist promotion bugs (Issue #971 / PR #1024) where party guests were separated during capacity promotions, enforcing member-only gate logic, normalizing phone numbers to international E.164 formats, and hardening Playwright end-to-end test suites.",
    },
    {
      phase: "Stage 3: Core Contributions to Graphify",
      focus: "Code intelligence, multi-language AST parsing, and graph determinism",
      description:
        "Became an active core contributor to Graphify with 30+ maintainer-reviewed pull requests. Tackled complex problems across AST parsing (Python, TypeScript, C#, Razor, Ruby, Terraform), cross-file symbol and import resolution, incremental graph merging deduplication, fail-closed semantic node protection, and Windows process isolation.",
    },
  ],
};

export const howIWork: readonly WorkPrincipleItem[] = [
  {
    principle: "1. Map Before Modifying",
    summary:
      "When tackling an unfamiliar codebase, I trace data flow, inspect call trees, and map AST visitors or runtime lifecycles before editing a single line.",
    practices: [
      "Read architecture documentation and trace entrypoints end-to-end",
      "Inspect existing test fixtures to understand expected invariants",
      "Isolate exact components responsible for state transformations",
    ],
  },
  {
    principle: "2. Reproduce with Minimal Test Cases",
    summary:
      "I never patch symptoms blindly. Every bug investigation begins by constructing a minimal, reproducible test case that reliably fails before any fix is applied.",
    practices: [
      "Write standalone reproduction scripts or isolated unit tests",
      "Verify failures against exact expected edge-case inputs",
      "Eliminate external dependencies to isolate root cause mechanisms",
    ],
  },
  {
    principle: "3. Address Root Causes, Not Symptoms",
    summary:
      "Superficial workarounds accumulate tech debt. I investigate why the invariant broke—whether due to resolver order, chunk scoping, or async timeout—and fix the core mechanism.",
    practices: [
      "Fix underlying logic rather than adding arbitrary delays or null checks",
      "Enforce fail-closed guarantees when partial failures occur",
      "Ensure changes maintain architectural consistency across the project",
    ],
  },
  {
    principle: "4. Write Targeted Regression Tests",
    summary:
      "A bugfix without a regression test will eventually regress. Every contribution is verified by automated tests that permanently protect against recurrence.",
    practices: [
      "Add explicit assertions covering boundary conditions and edge cases",
      "Verify both positive outcomes and clean failure handling",
      "Confirm test suites pass across operating systems (Linux and Windows)",
    ],
  },
  {
    principle: "5. Make Atomic, Defensible Changes",
    summary:
      "Clean pull requests respect maintainer time. I keep PRs strictly scoped to one problem, provide clear commit messages with technical context, and explain trade-offs transparently.",
    practices: [
      "Maintain tight diffs without unrelated formatting noise",
      "Structure commit messages following conventional commits",
      "Document the problem, investigation, change, and validation in PR summaries",
    ],
  },
  {
    principle: "6. Validate via Type Checks, Linters & Production Builds",
    summary:
      "Code is only complete when all verification gates pass cleanly without warnings, type errors, or bundle bloat.",
    practices: [
      "Run strict TypeScript compiler checks (`tsc --noEmit`)",
      "Ensure zero ESLint warnings and clean code styling",
      "Validate production builds (`next build`) to ensure runtime and SSG correctness",
    ],
  },
] as const;

export const currentWork: readonly CurrentWorkItem[] = [
  {
    title: "TraceKit — Autonomous Browser Testing Engine",
    detail:
      "Actively engineering an agentic testing platform combining Patchright Chromium automation with deterministic DOM assertions. Eliminates selector fragility and provides 4-part structured traces with failure triage.",
    status: "Active Flagship Project",
    linkUrl: "https://tracekit-one.vercel.app/",
    linkLabel: "Live Deployment",
  },
  {
    title: "Graphify — Code Intelligence & AST Parsing",
    detail:
      "Continuing core open-source contributions to Graphify. Focused on multi-language symbol resolution, incremental graph merging deduplication, and fail-closed parser robustness across modular codebases.",
    status: "30+ Merged Pull Requests",
    linkUrl: "https://github.com/Graphify-Labs/graphify",
    linkLabel: "GitHub Repository",
  },
  {
    title: "Advanced Full-Stack & Agent Architecture",
    detail:
      "Investigating scalable asynchronous task runtimes, low-latency streaming protocols (SSE), and containerized microservice deployments for developer productivity tooling.",
    status: "Ongoing Engineering Focus",
  },
] as const;

export const outsideEngineering: readonly OutsideEngineeringItem[] = [
  {
    title: "Vocal Training & Music",
    category: "Vocal Practice",
    description:
      "Dedicated vocal training across classical and contemporary Indian musical traditions. Regular practice sharpens auditory acuity, pitch precision, breath control, and deep concentration.",
  },
  {
    title: "Painting & Visual Arts",
    category: "Fine Arts",
    description:
      "Exploring traditional and mixed-media painting. Studying composition, negative space, perspective, and harmonic color palettes informs my approach to clean, editorial digital interfaces.",
  },
  {
    title: "Calligraphy & Lettering",
    category: "Lettering Discipline",
    description:
      "Practicing hand lettering and formal calligraphy. Cultivates patience, fine motor control, and an appreciation for typographic rhythm, proportion, and balance.",
  },
] as const;

export const aboutData: AboutData = {
  name: "Himanshu Patro",
  title: "Software Engineer · Full Stack AI Developer",
  shortBio:
    "Software Engineer based in Jamshedpur, Jharkhand, India, specializing in dependable web systems, autonomous browser testing agents, and open-source code intelligence.",
  longBio: [
    "I am a Software Engineer based in Jamshedpur, Jharkhand, India, graduating in Computer Science and Information Technology (CSIT, B.Tech 2022–2026) from the Institute of Technical Education and Research (ITER), Siksha 'O' Anusandhan (SOA) University, Bhubaneswar, Odisha, India. My engineering work sits at the intersection of full-stack web platforms, autonomous testing systems, and open-source code intelligence.",
    "Across corporate software engineering internships at Celebal Technologies and Tata Steel Ltd., I developed production-grade web applications, designed secure RESTful APIs with role-based access control (RBAC), and optimized frontend responsiveness and database query indexing for hundreds of organizational users.",
    "As an active open-source contributor with 30+ maintainer-reviewed pull requests in Graphify (a code intelligence and AST analysis framework) alongside work in Agent Orchestrator, Continue, and Headroom, I thrive in complex, unfamiliar codebases—reproducing subtle bugs, strengthening regression suites, and engineering robust, platform-agnostic fixes.",
  ],
  currentFocus:
    "Autonomous browser test orchestration with Patchright and deterministic DOM assertions, multi-language code graph extraction engines, and resilient full-stack web architectures.",
  location: "Jamshedpur, Jharkhand, India",
  baseLocation: "Jamshedpur, Jharkhand, India",
  technicalFocusAreas: [
    "Full-Stack Web Architecture (React, Next.js, Node.js, Express, MongoDB)",
    "Autonomous AI Web Testing & Test Orchestration (Patchright, Playwright, Chromium)",
    "AST Parsing & Symbol Dependency Graphs (Tree-Sitter, Graph Theory)",
    "Secure API Design, Authentication & RBAC (JWT, Bcrypt, Query Indexing)",
  ],
  education,
  experiences,
  coreSkills,
  whatIBuild,
  engineeringInterests,
  openSourceJourney,
  howIWork,
  currentWork,
  outsideEngineering,
};

// Backwards compatibility for existing imports
export const identity = {
  name: aboutData.name,
  title: aboutData.title,
  summary: aboutData.shortBio,
  location: aboutData.location,
} as const;
