import React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers } from "lucide-react";

export function SelectedWork() {
  const systems = [
    {
      index: "01",
      tier: "FLAGSHIP AGENTIC SYSTEM",
      title: "TraceKit",
      tagline: "Autonomous AI web testing & test orchestration engine",
      thesis:
        "Autonomous browser testing agent with self-healing test execution and deterministic DOM assertion triage.",
      problem:
        "Traditional E2E test scripts break on minor layout shifts or renamed CSS classes, while LLMs hallucinate test outcomes if asked to visually grade execution.",
      solution:
        "Decouples planning from verification: multimodal LLM reasoning plans actions from accessibility trees, while strict Chromium DOM Playwright assertions provide 100% objective, reproducible pass/fail truth.",
      technologies: [
        "TypeScript",
        "Next.js 16",
        "Python 3.11",
        "FastAPI",
        "Patchright (CDP)",
        "Playwright",
        "Docker",
      ],
      flowSteps: [
        { label: "01 OBSERVE", desc: "Accessibility Tree & Locators" },
        { label: "02 REASON", desc: "Action Planning & Intent" },
        { label: "03 ACT", desc: "Patchright CDP Dispatch" },
        { label: "04 VERIFY", desc: "Deterministic DOM Assertions" },
        { label: "05 REPORT", desc: "4-Part Structured Traces" },
      ],
      caseStudyUrl: "/projects/tracekit",
      liveUrl: "https://tracekit-one.vercel.app/",
      githubUrl: "https://github.com/hopstreax/testing-agent_v0",
    },
    {
      index: "02",
      tier: "CODE INTELLIGENCE CORE · 30+ MERGED PRS",
      title: "Graphify",
      tagline: "Multi-language AST parsing & symbol dependency graph engine",
      thesis:
        "Code intelligence, multi-language AST extraction, and symbol dependency graph engine with deterministic builds.",
      problem:
        "Cross-file imports in modular codebases caused detached symbol stubs; incremental compilation re-scans duplicated carried hyperedges and bloated memory.",
      solution:
        "Normalized symbol tables across definition files, scoped deduplication across re-extracted chunk boundaries, and fail-closed parser resilience preventing AST node loss.",
      technologies: [
        "Python",
        "Tree-Sitter",
        "NetworkX",
        "AST Analysis",
        "pytest",
        "Graph Theory",
      ],
      flowSteps: [
        { label: "01 SOURCE", desc: "Multi-Language Codebases" },
        { label: "02 PARSE", desc: "Tree-Sitter AST Visitor Passes" },
        { label: "03 RESOLVE", desc: "Cross-File Symbol Tables" },
        { label: "04 MERGE", desc: "Incremental Graph Deduplication" },
        { label: "05 EMIT", desc: "Deterministic Code Graph" },
      ],
      caseStudyUrl: "/open-source#graphify",
      githubUrl: "https://github.com/Graphify-Labs/graphify",
    },
    {
      index: "03",
      tier: "REAL-TIME SIMULATION PLATFORM",
      title: "AI Interviewer",
      tagline: "Fine-tuned Llama & GenAI interview simulation system",
      thesis:
        "LLM-driven interview simulation platform with real-time speech recognition, dynamic difficulty adaptation, and multi-dimensional candidate evaluation.",
      problem:
        "Static interview prep tools lack conversational verbal pressure and fail to evaluate conceptual depth with adaptive follow-up questioning.",
      solution:
        "Pairs a real-time speech recognition pipeline in Python with structured prompt chains that dynamically assess candidate depth, modulate technical difficulty, and produce multi-dimensional evaluation scorecards.",
      technologies: [
        "Python",
        "Streamlit",
        "Generative AI & LLMs",
        "NLP",
        "Speech Recognition",
        "Prompt Orchestration",
      ],
      flowSteps: [
        { label: "01 INGEST", desc: "Real-Time Microphone Stream" },
        { label: "02 TRANSCRIBE", desc: "Speech Recognition Pipeline" },
        { label: "03 REASON", desc: "Dynamic Prompt Chain" },
        { label: "04 ADAPT", desc: "Contextual Technical Follow-Ups" },
        { label: "05 EVALUATE", desc: "Structured Analytical Rubric" },
      ],
      caseStudyUrl: "/projects/ai-interviewer",
      githubUrl: "https://github.com/hopstreax/ai-interviewer",
    },
  ];

  return (
    <div
      aria-label="Selected Engineering Work"
      className="w-full space-y-12 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-2 border-b border-border-subtle/80">
        <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
          <Layers className="w-3.5 h-3.5 text-ink" />
          <h2 className="font-medium text-ink">
            <span className="font-semibold">02</span>
            <span className="mx-1.5 opacity-60">/</span>
            <span>SELECTED WORK & CASE STUDIES</span>
          </h2>
        </div>
        <Link
          href="/projects"
          className="group inline-flex items-center space-x-1 text-[10px] font-mono uppercase tracking-widest text-ink-subtle hover:text-ink transition-colors"
        >
          <span>ALL 4 PROJECTS IN ARCHIVE</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Featured Systems List */}
      <div className="space-y-12">
        {systems.map((system) => (
          <article
            key={system.index}
            className="p-6 sm:p-8 md:p-10 rounded-2xl border border-border-subtle/80 bg-canvas-subtle/30 space-y-8 transition-colors hover:border-ink/40"
          >
            {/* Top Row: Index, Tier & Title */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 pb-6 border-b border-border-subtle/60">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                  <span>SYSTEM {system.index}</span>
                  <span>·</span>
                  <span className="font-semibold text-ink">{system.tier}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-mono font-semibold text-ink tracking-tight uppercase">
                  {system.title}
                </h3>
              </div>

              {/* Action Links */}
              <div className="flex items-center space-x-3 text-[11px] font-mono uppercase tracking-editorial pt-2 md:pt-0">
                <Link
                  href={system.caseStudyUrl}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-ink text-canvas hover:bg-ink-muted transition-colors"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
                {system.liveUrl && (
                  <a
                    href={system.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-border-subtle hover:border-ink transition-colors text-ink"
                  >
                    <span>LIVE APP</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                {system.githubUrl && (
                  <a
                    href={system.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-border-subtle hover:border-ink transition-colors text-ink"
                  >
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Core Thesis & Problem/Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle block">
                    ENGINEERING THESIS
                  </span>
                  <p className="text-[14px] sm:text-[15px] font-medium text-ink leading-relaxed">
                    “{system.thesis}”
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle block">
                    THE PROBLEM
                  </span>
                  <p className="text-[13px] text-ink-muted leading-relaxed font-sans">
                    {system.problem}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle block">
                    ENGINEERING ARCHITECTURE
                  </span>
                  <p className="text-[13px] text-ink-muted leading-relaxed font-sans">
                    {system.solution}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle block">
                    TECHNOLOGIES & PROTOCOLS
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {system.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-canvas rounded border border-border-subtle text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Architecture Execution Pipeline */}
            <div className="pt-4 border-t border-border-subtle/60 space-y-3">
              <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                <Cpu className="w-3 h-3 text-ink" />
                <span>SYSTEM EXECUTION PIPELINE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {system.flowSteps.map((step, idx) => (
                  <div
                    key={step.label}
                    className="p-3 bg-canvas rounded-xl border border-border-subtle flex flex-col justify-between space-y-1"
                  >
                    <div className="text-[10px] font-mono font-semibold text-ink uppercase tracking-wider">
                      {step.label}
                    </div>
                    <div className="text-[9px] text-ink-muted font-sans leading-tight">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
