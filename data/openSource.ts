import { OSSContribution } from "@/types/portfolio";

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
  repositoryUrl: "https://github.com/hopstreax",
};

export const openSourceContributions: readonly OSSContribution[] = [graphifyStory];
