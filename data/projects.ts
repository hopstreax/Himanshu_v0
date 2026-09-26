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
      "Autonomous browser testing agent with self-healing test execution and deterministic DOM assertion triage.",
    longDescription:
      "An intelligent, agent-driven platform for end-to-end automated web testing. Pairs multimodal LLM reasoning with deterministic browser automation, turning natural-language objectives into verifiable browser interactions, structured traces, and inspectable artifact reports.",
    technologies: [
      "TypeScript",
      "React 19",
      "Next.js 16",
      "Python 3.11",
      "FastAPI",
      "Patchright (Chromium CDP)",
      "Playwright Assertions",
      "Docker",
      "Caddy",
    ],
    highlights: [
      "Observe-Reason-Act-Verify-Report autonomous execution cycle",
      "Deterministic Playwright expect assertions directly against Chromium DOM",
      "4-part structured step traces: observation, decision, action, and result",
      "Self-healing locator resolution and root-cause failure diagnosis",
    ],
    liveUrl: "https://tracekit-one.vercel.app/",
    notionUrl:
      "https://app.notion.com/p/TraceKit-AI-web-testing-that-acts-verifies-and-explains-40f91c3ec4e94f44b103db3b555f9500?source=copy_link",
    repositoryUrl: "https://github.com/hopstreax/testing-agent_v0",
    featured: true,
    caseStudy: {
      overview:
        "TraceKit is an autonomous browser testing agent designed to eliminate the fragility of traditional end-to-end test maintenance. By pairing multimodal LLM reasoning with deterministic browser automation and assertions, TraceKit turns plain-English test objectives into verifiable browser interactions, structured execution traces, and inspectable artifact reports. Its foundational architectural thesis is: LLMs decide what to do; deterministic browser assertions decide whether it actually worked.",
      problem:
        "Traditional end-to-end testing frameworks (Playwright, Cypress, Selenium) suffer from recurring maintenance overhead. Subtle DOM restructuring, renamed CSS classes, or adjusted layouts frequently break hardcoded locators even when application logic remains correct. Teams spend substantial engineering cycles updating brittle scripts. Conversely, relying purely on an LLM to evaluate visual screenshots or DOM states often produces hallucinations—grading a broken checkout as 'passing' because it 'looks plausible.'",
      motivation:
        "I built TraceKit to bridge the gap between brittle rule-based scripts and speculative AI testers. The goal was to build a system where the AI acts as a flexible planner (adapting to UI drift and navigating user journeys) while strict, deterministic Chromium DOM APIs serve as an uncompromising ground truth for test verification.",
      whyBuilt:
        "To eliminate the high engineering maintenance tax of brittle selectors while providing developers with transparent, verifiable test traces and failure diagnoses.",
      solution:
        "TraceKit separates planning from verification: multimodal LLM inference interprets user goals and inspects the accessibility tree to select actions, while Playwright assertions evaluate the live DOM state directly, emitting structured timing, locators, and failure classifications.",
      whatSystemDoes: [
        "Ingests target URLs and plain-English testing objectives (e.g. 'Search for product X, add to cart, verify order summary').",
        "Captures semantic accessibility tree snapshots and interactive element locators, keeping token usage minimal.",
        "Generates typed browser actions (click, fill, navigate, assert, press_key, select, scroll, hover) through structured JSON output.",
        "Dispatches actions into an isolated Patchright Chromium browser instance via Chrome DevTools Protocol (CDP).",
        "Evaluates explicit Playwright expect assertions directly against the live DOM state (visibility, text values, element counts).",
        "Records 4-part structured execution traces (observation, decision, action, result) with full-resolution screenshots and failure triage.",
      ],
      technicalApproach: [
        "Dual-engine architecture: Python FastAPI backend controls browser execution; Next.js 16 frontend streams execution traces in real time.",
        "Chrome DevTools Protocol (CDP) orchestration via Patchright driver, avoiding bot-detection barriers and enabling authentic browser automation.",
        "Semantic accessibility tree parsing that strips non-interactive noise, reducing LLM token consumption by over 75% compared to raw DOM dumps.",
      ],
      architectureFlow: [
        "1. OBSERVE: Captures clean DOM accessibility snapshot, interactive locators, and viewport screenshot.",
        "2. REASON: LLM analyzes current state against goal and historical step context; selects next logical action.",
        "3. ACT: ActionDispatcher executes typed Pydantic action in Patchright Chromium.",
        "4. VERIFY: Evaluates deterministic Playwright expect assertion directly against Chromium DOM.",
        "5. REPORT: Records step trace, visual evidence, timings, and diagnostic failure categorization.",
      ],
      keyFeatures: [
        "Autonomous failure triage and self-healing test execution",
        "Ambient diagnostic session recording and trace visualizer",
        "Deterministic end-to-end test orchestration across modern web stacks",
        "User-scoped volume artifact storage and session history",
      ],
      technicalImplementation: [
        {
          title: "Decoupled Next.js Frontend & FastAPI Backend",
          description:
            "The web interface is built with Next.js 16 (React 19, Tailwind CSS) deployed on Vercel, providing live test run streaming, interactive screenshot lightboxes, runs history, and run logs. All API requests are proxied via Next.js rewrites to a secure Caddy reverse proxy on EC2, which routes traffic to a Dockerized FastAPI application server running Uvicorn.",
          points: [
            "Next.js App Router with real-time SSE streaming for live execution updates",
            "Caddy reverse proxy handling SSL termination and rate limiting",
            "FastAPI async RunManager managing background execution lifecycles and user-isolated volume storage (/app/artifacts/runs)",
          ],
        },
        {
          title: "Patchright Chromium Driver & Automation Engine",
          description:
            "Utilizes Patchright (an undetectable Playwright fork) driving Chromium browser sessions via Chrome DevTools Protocol (CDP), avoiding bot-detection barriers on modern web applications and ensuring authentic user emulation.",
          points: [
            "Isolated browser contexts per test run with clean cookies and local storage",
            "9 strictly typed Pydantic browser action models with parameter validation",
            "Automatic waiting and locator retry loops for dynamic SPAs and hydration delays",
          ],
        },
        {
          title: "Deterministic Verification Engine",
          description:
            "Outcomes are never validated by model speculation. Conditions (visibility, text values, disabled states, element counts) are verified directly against Chromium DOM APIs using Playwright expect assertions.",
          points: [
            "Strict DOM checks: element visibility, exact text match, attribute verification",
            "Root-cause failure categorization: action failure, locator drift, assertion timeout",
            "Full trace serialization into inspectable JSON artifacts alongside full-res screenshots",
          ],
        },
      ],
      engineeringDecisions: [
        {
          decision: "Decoupling LLM Planning from DOM Verification",
          rationale:
            "Letting an LLM evaluate whether a test passed introduces subjective grading and hallucinations. By delegating verification entirely to deterministic Chromium DOM queries, test pass/fail results remain 100% objective and reproducible.",
          outcome:
            "Eliminated false-positive passes caused by visual hallucination while preserving the flexibility of AI-driven navigation.",
        },
        {
          decision: "Accessibility Tree Snapshotting over Raw DOM Ingestion",
          rationale:
            "Raw DOM dumps contain thousands of lines of styling classes, script tags, and non-interactive wrappers that blow through LLM context windows and degrade locator accuracy.",
          outcome:
            "Reduced prompt token consumption by over 75% and dramatically improved LLM locator resolution speed by surfacing only semantic ARIA roles, names, and actionable elements.",
        },
        {
          decision: "Asynchronous RunManager with Persistent Volume Storage",
          rationale:
            "Browser test executions can run for tens of seconds or minutes. Blocking HTTP requests would lead to gateway timeouts on reverse proxies.",
          outcome:
            "FastAPI spawns runs as async background tasks; clients poll or stream progress via SSE while artifacts persist safely to disk.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Dynamic Single Page Applications (SPAs) experiencing hydration delays caused locators to fail when clicked too early.",
          solution:
            "Implemented auto-waiting locators with explicit readiness checks before dispatching actions, retrying with exponential backoff before marking a step as failed.",
        },
        {
          challenge:
            "Long-running browser runs accumulating zombie Chromium processes and memory leaks in Docker containers.",
          solution:
            "Built a strict lifecycle context manager in Python that guarantees browser teardown and temporary artifact cleanup in finally blocks, even on unhandled exceptions or run cancellations.",
        },
      ],
      currentState:
        "TraceKit is deployed live on Vercel (https://tracekit-one.vercel.app/) with a containerized backend. The source code is publicly accessible on GitHub (https://github.com/hopstreax/testing-agent_v0) alongside complete technical architecture documentation on Notion.",
      whatILearned: [
        "Deep understanding of the Chrome DevTools Protocol (CDP) and headless browser automation internals.",
        "How to architect resilient agentic loops that balance generative AI planning with deterministic software engineering assertions.",
        "Managing production container lifecycles, reverse proxies, and async background task scheduling in FastAPI.",
      ],
      futureDirection: [
        "Support for concurrent multi-browser cross-platform test matrix execution (Firefox, WebKit).",
        "Visual regression diffing engine comparing viewport baseline snapshots.",
        "Export capability allowing autonomous test traces to be exported directly as idiomatic Playwright test scripts.",
      ],
      links: [
        {
          label: "Live Application",
          url: "https://tracekit-one.vercel.app/",
          type: "live",
        },
        {
          label: "GitHub Repository",
          url: "https://github.com/hopstreax/testing-agent_v0",
          type: "github",
        },
        {
          label: "Notion Architecture Documentation",
          url: "https://app.notion.com/p/TraceKit-AI-web-testing-that-acts-verifies-and-explains-40f91c3ec4e94f44b103db3b555f9500?source=copy_link",
          type: "demo",
        },
      ],
    },
  },
  {
    slug: "ai-interviewer",
    title: "AI Interviewer",
    year: "2025",
    tier: "flagship",
    category: "GenAI / NLP",
    tagline: "Fine-tuned Llama & GenAI interview simulation system",
    shortDescription:
      "LLM-driven interview simulation platform with real-time speech recognition, dynamic difficulty adaptation, and multi-dimensional candidate evaluation.",
    longDescription:
      "An end-to-end interview simulation platform leveraging Generative AI and NLP. Simulates rigorous technical and HR interviews, evaluating spoken candidate responses in real-time across conceptual clarity, technical precision, and communication confidence while dynamically adjusting question difficulty.",
    technologies: [
      "Python",
      "Streamlit",
      "Generative AI & LLMs",
      "NLP",
      "Speech Recognition",
      "Prompt Orchestration",
    ],
    highlights: [
      "Real-time speech recognition and candidate answer evaluation engine",
      "Dynamic question difficulty adaptation powered by LLM prompt engineering",
      "Multi-dimensional analytical candidate feedback across clarity and technical accuracy",
    ],
    repositoryUrl: "https://github.com/hopstreax/ai-interviewer",
    featured: true,
    caseStudy: {
      overview:
        "AI Interviewer is an intelligent interview preparation platform that replaces static question-and-answer flashcards with a dynamic, conversational simulation. Candidates experience interactive technical and behavioral interview sessions where questions adapt based on prior answers, and performance is evaluated across technical precision and communication clarity.",
      problem:
        "Traditional interview preparation tools rely on static question lists and generic multiple-choice quizzes. They fail to test candidates in realistic verbal conditions, offer no dynamic follow-up questioning when an answer is incomplete, and provide superficial, keyword-matching feedback that does not assess conceptual understanding.",
      motivation:
        "To provide students and engineers with realistic, low-pressure interview practice that mirrors actual technical and behavioral screening loops, emphasizing vocal articulation, technical depth, and handling unexpected follow-ups.",
      whyBuilt:
        "To automate realistic technical and HR interview workflows with real-time speech evaluation and structured candidate feedback.",
      solution:
        "Integrated a real-time speech ingestion pipeline in Python with Generative AI prompt orchestration, analyzing spoken responses against technical rubrics and generating tailored follow-up inquiries.",
      whatSystemDoes: [
        "Captures candidate speech in real-time and converts audio to text via speech recognition pipelines.",
        "Parses candidate responses against role-tailored technical criteria and domain knowledge bases.",
        "Dynamically determines question difficulty and generates intelligent follow-up inquiries.",
        "Produces structured post-interview analytical scorecards highlighting communication strengths, conceptual gaps, and recommendations.",
      ],
      technicalApproach: [
        "Streamlit-based reactive interface for audio input and instant candidate feedback display.",
        "Speech recognition preprocessing handling hesitation markers without breaking transcription context.",
        "Structured prompt chaining enforcing strict JSON scoring schemas for rubric visualization.",
      ],
      architectureFlow: [
        "1. CONFIGURATION: Candidate selects role domain (Software Engineering, Data Science, HR) and experience level.",
        "2. PROMPT & AUDIO CAPTURE: System presents technical scenario; candidate speaks response via microphone.",
        "3. TRANSCRIPTION & PARSING: Audio is transcribed and preprocessed for evaluation.",
        "4. REASONING & ADAPTATION: LLM evaluates technical accuracy and generates contextual follow-up questions.",
        "5. SYNTHESIS: Session concludes with a comprehensive multi-attribute evaluation report.",
      ],
      keyFeatures: [
        "AI-generated domain-specific interview questions",
        "Role-based interview configurations (Technical, System Design, Behavioral)",
        "Real-time speech recognition and verbal fluency analysis",
        "Structured analytical scorecards with strengths and growth areas",
      ],
      technicalImplementation: [
        {
          title: "Speech Recognition Ingestion Pipeline",
          description:
            "Integrated real-time audio capture and transcription in Python, handling background noise filtering and sentence boundary detection for conversational flow.",
          points: [
            "Low-latency audio chunk processing",
            "Handling speech hesitation markers without corrupting transcription context",
          ],
        },
        {
          title: "Dynamic Question Adaptation Engine",
          description:
            "Engineered structured prompt chains that assess candidate answer depth. If a candidate gives a high-level answer, the model probes deeper into implementation trade-offs; if they struggle, it provides progressive hints.",
          points: [
            "Role-specific interview rubric injection into system prompts",
            "Multi-dimensional scoring: technical precision, structure, and communication clarity",
          ],
        },
      ],
      engineeringDecisions: [
        {
          decision: "Structured JSON Output Generation",
          rationale:
            "Requiring the model to return typed JSON scorecards enabled programmatic UI rendering and historical progress tracking, avoiding unstructured prose responses.",
          outcome:
            "Enabled consistent rendering of candidate metrics, radar charts, and categorized feedback points.",
        },
        {
          decision: "Separation of Evaluation Prompt from Question Generation",
          rationale:
            "Combining evaluation and question generation in a single prompt caused the model to favor polite praise over rigorous technical assessment.",
          outcome:
            "Decoupled the evaluation step from conversational interaction, ensuring objective and critical scoring.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Speech recognition latency causing noticeable pauses between candidate speech and the next interview question.",
          solution:
            "Optimized prompt templates and output token limits, streaming intermediate feedback to keep the interaction conversational and responsive.",
        },
      ],
      currentState:
        "The project is open source on GitHub (https://github.com/hopstreax/ai-interviewer) with complete installation and execution instructions.",
      whatILearned: [
        "Real-time audio processing and speech-to-text integration pipelines in Python.",
        "Advanced prompt orchestration techniques for objective evaluation and conversational state management.",
      ],
      futureDirection: [
        "Integrating multimodal facial and gaze cues to provide feedback on eye contact and presentation confidence.",
        "Adding an interactive in-browser code editor for real-time coding interview simulations.",
      ],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/hopstreax/ai-interviewer",
          type: "github",
        },
      ],
    },
  },
  {
    slug: "campus-lost-and-found",
    title: "Campus Lost & Found Portal",
    year: "2025",
    tier: "secondary",
    category: "Full Stack MERN",
    tagline: "Campus community inventory and retrieval platform",
    shortDescription:
      "Full-stack campus management system with secure RESTful APIs, JWT role-based access control, and indexed search reducing item recovery time by 40%.",
    longDescription:
      "A full-stack campus-focused community web application built for students and faculty of ITER, Siksha 'O' Anusandhan (SOA) University. Eliminates fragmented social media notices by providing a centralized, searchable portal for reporting lost belongings, logging found items, and coordinating academic resource sharing.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RESTful APIs",
      "Tailwind CSS",
    ],
    highlights: [
      "RESTful APIs with JWT authentication and role-based access control (RBAC)",
      "Indexed database search reducing average item recovery time by 40%",
      "Real-time user dashboards for tracking posted items and claim status",
    ],
    repositoryUrl: "https://github.com/hopstreax/campus-portal",
    featured: false,
    caseStudy: {
      overview:
        "Campus Lost & Found Portal is a centralized web platform designed for the students and faculty of ITER, Siksha 'O' Anusandhan (SOA) University, Bhubaneswar. It replaces unorganized WhatsApp and Telegram group messages with an indexed, authenticated system for recovering lost campus property and sharing academic resources.",
      problem:
        "Across large university campuses, hundreds of valuable items (identity cards, lab equipment, chargers, notebooks) are misplaced weekly. Announcements were scattered across disparate chat groups, leading to low item recovery rates, duplicate posts, and lack of accountability when claiming items.",
      motivation:
        "To provide the university campus community with a structured, verified tool that streamlines lost item reporting, facilitates verified ownership claims, and encourages academic resource sharing.",
      whyBuilt:
        "To eliminate lost item chaos on campus by providing indexed search, visual status distinction, and authenticated claim verification.",
      solution:
        "Engineered a full-stack MERN portal with compound MongoDB indexing, JWT role-based authentication, and structured claim verification forms.",
      whatSystemDoes: [
        "Allows authenticated campus users to report lost or found items with images, descriptions, location markers, and category tags.",
        "Provides visual status distinction between lost (urgent) and found items with color-coded badges.",
        "Features indexed search filtering by keyword, date range, campus zone, and category.",
        "Manages private claim requests, allowing finders and claimers to coordinate handoffs securely.",
      ],
      technicalApproach: [
        "Layered MERN architecture separating Express controllers, services, and Mongoose database models.",
        "Text and category compound indices on MongoDB collections ensuring sub-50ms search query performance.",
        "JWT-based authorization middleware verifying user claims before allowing post modifications or claim approvals.",
      ],
      architectureFlow: [
        "1. USER AUTHENTICATION: Students register with campus credentials; JWT token issued with role claims.",
        "2. ITEM POSTING: Item details and location tagged; persisted to MongoDB with compound indices.",
        "3. SEARCH & DISCOVERY: Search queries executed across indexed title, category, and location fields.",
        "4. CLAIM VERIFICATION: Claimer submits identifying verification; poster confirms handoff.",
      ],
      keyFeatures: [
        "Visual distinction between lost and found items",
        "Indexed keyword, date, and category search",
        "Role-based access control protecting user postings",
        "Resource sharing marketplace for academic materials",
      ],
      technicalImplementation: [
        {
          title: "Full-Stack MERN Architecture",
          description:
            "Engineered modular Express.js controllers and MongoDB schemas using Mongoose, connected to a responsive React.js frontend.",
          points: [
            "RESTful API design with clean separation of controllers, services, and models",
            "JWT-based authorization middleware protecting item edit and deletion endpoints",
            "MongoDB text indices on item title, description, and location attributes",
          ],
        },
      ],
      engineeringDecisions: [
        {
          decision: "Compound Database Indexing",
          rationale:
            "Unindexed text search on full collections caused high query latency as the database grew.",
          outcome:
            "Reduced query execution time by 40%, ensuring instant search filtering even under concurrent traffic.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Preventing fraudulent claims on valuable items without burdening users with complex verification.",
          solution:
            "Implemented a mandatory claim verification questionnaire where claimers must answer identifying details provided only to the original finder.",
        },
      ],
      currentState:
        "Completed and documented open-source project hosted on GitHub (https://github.com/hopstreax/campus-portal).",
      whatILearned: [
        "Structuring scalable full-stack MERN architectures with clean separation of concerns.",
        "Implementing secure authentication flows using JSON Web Tokens and password hashing.",
        "Designing optimized MongoDB schemas and indexing strategies for community applications.",
      ],
      futureDirection: [
        "Automated push notifications via WebSockets when newly posted found items match a user's lost item alert.",
      ],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/hopstreax/campus-portal",
          type: "github",
        },
      ],
    },
  },
  {
    slug: "e-pmsss",
    title: "e-PMSSS",
    year: "2025",
    tier: "secondary",
    category: "GovTech / Security",
    tagline: "Paperless scholarship disbursement and verification platform",
    shortDescription:
      "Paperless scholarship management system developed for Smart India Hackathon, reducing administrative turnaround by 60% with multi-stage verification workflows.",
    longDescription:
      "A scalable, secure scholarship management and disbursement platform engineered to digitize the Prime Minister's Special Scholarship Scheme (PMSSS). Replaces cumbersome physical document workflows with multi-role approval state machines, encrypted document storage, and tamper-resistant audit trails.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bcrypt.js",
      "RESTful APIs",
    ],
    highlights: [
      "Reduced administrative processing turnaround by an estimated 60%",
      "Encrypted document storage and multi-role approval workflow state machine",
      "Multi-layer security using JWT and bcrypt.js encryption",
      "Qualified college-level round of Smart India Hackathon (SIH)",
    ],
    featured: false,
    caseStudy: {
      overview:
        "e-PMSSS is a paperless scholarship administration system developed as part of the Smart India Hackathon (SIH). It streamlines the end-to-end disbursement workflow for the Prime Minister's Special Scholarship Scheme, replacing slow, physical paper trails with an authenticated, multi-tier digital verification pipeline.",
      problem:
        "The traditional PMSSS scholarship disbursement process involved physical paper forms, manual multi-departmental stamping, and physical courier transit between colleges, nodal verification centers, and state administrative offices. This resulted in processing backlogs of several months, lost documents, and lack of transparency for student beneficiaries.",
      motivation:
        "Developed during the Smart India Hackathon where I served as the technical lead of a student engineering team, addressing a national-level challenge to modernize public scholarship disbursement through transparent digital workflows.",
      whyBuilt:
        "To eliminate paper-based administrative friction and secure student scholarship distribution through digital verification state machines.",
      solution:
        "Engineered an authenticated digital pipeline with role-tailored dashboards and sequential state-enforced approval checkpoints.",
      whatSystemDoes: [
        "Enables students to register, upload academic credentials, and track their application progress through real-time state badges.",
        "Implements a multi-stage approval state machine: College Verification -> Nodal Officer Audit -> State Administrative Approval -> Disbursement.",
        "Provides role-based dashboards tailored specifically for Students, College Officials, and State Administrators.",
        "Stores encrypted document records with hash verification to prevent document tampering.",
      ],
      technicalApproach: [
        "State machine modeling in Express.js enforcing that applications cannot transition without prerequisite approval sign-offs.",
        "Cryptographically signed JWT tokens with embedded permission scopes driving role-based middleware guards.",
        "Bcrypt.js password hashing and secure HTTP-only cookie storage for administrator sessions.",
      ],
      architectureFlow: [
        "1. APPLICATION SUBMISSION: Student submits academic proofs and banking details via React frontend.",
        "2. COLLEGE TIER: College nodal officer reviews records; signs off with verified status.",
        "3. STATE TIER: State administrator audits cross-college batches and authorizes disbursement.",
        "4. AUDIT & DISBURSEMENT: Immutable timestamped audit entries generated for every state change.",
      ],
      keyFeatures: [
        "Multi-stage approval state machine",
        "Role-based dashboards for students, colleges, and administrators",
        "Encrypted document record management",
        "Tamper-resistant audit history log",
      ],
      technicalImplementation: [
        {
          title: "Multi-Role RBAC & Middleware Guards",
          description:
            "Engineered secure Express.js middleware pipelines validating role claims from cryptographically signed JWTs, ensuring officials can only access and approve applications within their jurisdiction.",
          points: [
            "Strict separation between Student, College Officer, and State Admin privilege tiers",
            "Bcrypt.js password hashing and secure HTTP-only session cookies",
            "Express-async-errors integration ensuring zero unhandled promise rejections",
          ],
        },
        {
          title: "State Machine for Approval Workflows",
          description:
            "Modeled application lifecycles as a formal state machine in MongoDB, ensuring applications cannot skip intermediate verification steps or be approved without preceding audit sign-offs.",
          points: [
            "Deterministic status transitions: Draft -> Submitted -> Verified -> Approved -> Disbursed",
            "Immutable audit logs recording reviewer identity, action, and timestamp",
          ],
        },
      ],
      engineeringDecisions: [
        {
          decision: "Strict State Machine Enforcement at API Layer",
          rationale:
            "Relying on frontend UI guards to enforce sequential approvals creates security vulnerabilities if an API endpoint is hit directly.",
          outcome:
            "Enforced validation in Express controllers ensuring state transitions can only execute if the application is in the exact prerequisite state.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Handling large volumes of sensitive student financial documents securely under hackathon constraints.",
          solution:
            "Implemented document validation and encrypted storage references with checksum verification, ensuring document authenticity without server storage exhaustion.",
        },
      ],
      currentState:
        "Successfully presented at the Smart India Hackathon (SIH) college-level round, qualifying for subsequent stages and archived as a foundational full-stack GovTech reference.",
      whatILearned: [
        "Leading a technical team to design and ship an MVP under intense hackathon deadlines.",
        "Architecting multi-role authorization state machines and tamper-resistant audit logs.",
        "Translating complex governmental administrative workflows into intuitive digital software systems.",
      ],
      futureDirection: [
        "Automated document OCR verification against government databases (DigiLocker integration).",
        "Direct Bank Transfer (DBT) payment gateway integration for automated disbursement.",
      ],
    },
  },
] as const;

export const flagshipProjects = projects.filter((p) => p.tier === "flagship");
export const secondaryProjects = projects.filter((p) => p.tier === "secondary");
