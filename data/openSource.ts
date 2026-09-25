import { OSSContribution, OpenSourceRepository } from "@/types/portfolio";
import { githubActivity } from "./githubActivity";

export const openSourceRepositories: readonly OpenSourceRepository[] = [
  {
    name: "Graphify",
    organization: "Graphify-Labs",
    url: "https://github.com/Graphify-Labs/graphify",
    description:
      "Code intelligence, multi-language AST parsing, and symbol dependency graph engine.",
    focusAreas: [
      "AST Analysis",
      "Code Intelligence",
      "Symbol Graphs",
      "Deterministic Builds",
    ],
    isPrimary: true,
  },
  {
    name: "Agent Orchestrator",
    organization: "Untrivial-ai",
    url: "https://github.com/Untrivial-ai/agent-orchestrator",
    description:
      "Multi-agent task orchestration, execution runtime pipelines, and agentic workflows.",
    focusAreas: [
      "Multi-Agent Systems",
      "Task Orchestration",
      "Workflow Automation",
    ],
    isPrimary: false,
  },
  {
    name: "PDA",
    organization: "ProteinDeficientsAnonymous",
    url: "https://github.com/ProteinDeficientsAnonymous/pda",
    description:
      "Community open-source software tooling and application systems.",
    focusAreas: [
      "Community Tooling",
      "Software Systems",
      "Collaborative Development",
    ],
    isPrimary: false,
  },
  {
    name: "Continue",
    organization: "continuedev",
    url: "https://github.com/continuedev/continue",
    description:
      "Open-source AI code assistant ecosystem, IDE integrations, and developer workflows.",
    focusAreas: [
      "AI Code Assistant",
      "Developer Workflows",
      "IDE Integrations",
    ],
    isPrimary: false,
  },
  {
    name: "Headroom",
    organization: "headroomlabs-ai",
    url: "https://github.com/headroomlabs-ai/headroom",
    description:
      "Contextual intelligence infrastructure and modern AI runtime tooling.",
    focusAreas: [
      "Contextual Intelligence",
      "AI Infrastructure",
      "Agent Runtime",
    ],
    isPrimary: false,
  },
] as const;

export const graphifyStory: OSSContribution = {
  slug: "graphify",
  project: "Graphify",
  role: "Core Contributor",
  period: "2026",
  metrics: [
    { label: "Merged PRs", value: "30+" },
    { label: "Contribution Period", value: "~2 Months" },
    { label: "Review Status", value: "Maintainer-Reviewed" },
  ],
  tagline: "Code intelligence & symbol graph infrastructure",
  summary:
    "30+ maintainer-reviewed contributions across AST extraction, multi-language parsers, incremental build processing, and interactive HTML export.",
  longDescription:
    "Graphify is an open-source code intelligence and symbol graph engine. Contributions span the entire processing pipeline: AST extraction across multiple programming languages, generic and interface resolution, deterministic builds, method-ghost deduplication, comprehensive regression testing, and LLM diagnostic workflows.",
  coreAreas: [
    "AST Analysis & Multi-Language Parsing",
    "Dependency & Symbol Graph Extraction",
    "Incremental Build Processing",
    "Interactive HTML Graph Export",
    "LLM Workflow Integration",
    "Root-Cause Diagnostics & Regression Testing",
  ],
  notableWork: [
    "Multi-language parser integrations & AST symbol resolution",
    "Deterministic builds via build seed normalization",
    "Interface & generic graph edge resolution across modular codebases",
    "Method-ghost deduplication & shared output root marker resolution",
    "Regression test suites for core graph resolution edge cases",
  ],
  technologies: [
    "Python",
    "TypeScript",
    "Tree-Sitter",
    "AST Analysis",
    "NetworkX",
    "Graph Theory",
  ],
  repositoryUrl: "https://github.com/Graphify-Labs/graphify",
  repositories: openSourceRepositories,
  activity: githubActivity,
};

export const openSourceContributions: readonly OSSContribution[] = [graphifyStory];
