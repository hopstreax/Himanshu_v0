"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Workflow, GitPullRequest, Activity } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div
      aria-label="Selected Engineering Work"
      className="w-full space-y-24 sm:space-y-32 select-none"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 border-b border-border-subtle">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
            <Workflow className="w-3.5 h-3.5 text-[#FFB86B]" />
            <span>02 / SELECTED WORK & FLAGSHIPS</span>
          </div>
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-mono font-bold uppercase tracking-tight text-ink">
            ENGINEERING CASE STUDIES
          </h2>
        </div>
        <Link
          href="/projects"
          className="group inline-flex items-center space-x-1.5 text-[11px] font-mono uppercase tracking-wider text-ink-subtle hover:text-ink transition-colors"
        >
          <span>VIEW FULL ARCHIVE (4 SYSTEMS)</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* ===================================================================== */}
      {/* PROJECT 01: TRACEKIT (Asymmetrical Browser Pipeline Layout)           */}
      {/* ===================================================================== */}
      <section
        aria-label="Project 01: TraceKit"
        className="w-full relative group"
        onMouseEnter={() => setHoveredProject("tracekit")}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="border-t border-border-subtle pt-8 sm:pt-12 space-y-8">
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <div className="flex items-center space-x-3">
              <span className="text-3xl sm:text-4xl font-mono font-light text-ink">
                01
              </span>
              <span className="text-border-strong">/</span>
              <span className="text-[#9B7BFF] font-semibold">FLAGSHIP AGENTIC SYSTEM</span>
            </div>
            <div className="flex items-center space-x-4 pt-2 sm:pt-0">
              <Link
                href="/projects/tracekit"
                className="inline-flex items-center space-x-1 text-[#9B7BFF] hover:underline uppercase tracking-wider font-semibold"
              >
                <span>CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span>·</span>
              <a
                href="https://tracekit-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-ink-muted hover:text-ink uppercase tracking-wider"
              >
                <span>LIVE APP</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span>·</span>
              <a
                href="https://github.com/hopstreax/testing-agent_v0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-ink-muted hover:text-ink uppercase tracking-wider"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Asymmetric Split: Massive Typography (Left) vs Architectural Brief (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-[clamp(2.25rem,4.2vw,3.75rem)] font-mono font-bold uppercase tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1">
                TRACEKIT
              </h3>
              <div className="text-lg sm:text-xl font-mono text-[#9B7BFF] uppercase tracking-wider">
                AUTONOMOUS BROWSER TESTING
              </div>
              <p className="text-[15px] sm:text-[16px] text-ink-body font-sans leading-relaxed pt-2 max-w-xl">
                Autonomous browser testing agent with self-healing test execution and deterministic DOM assertion triage. Decouples reasoning from evaluation truth.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4 pt-2 border-l border-border-subtle pl-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle block">
                  CORE INVARIANT
                </span>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  LLMs hallucinate test pass/fail results when visually grading execution. TraceKit enforces objective Chromium Playwright DOM assertions as single sources of truth.
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle block">
                  TECH STACK
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-mono text-ink-muted">
                  <span>TypeScript</span>
                  <span>·</span>
                  <span>Next.js 16</span>
                  <span>·</span>
                  <span>Python 3.11</span>
                  <span>·</span>
                  <span>FastAPI</span>
                  <span>·</span>
                  <span>Patchright CDP</span>
                  <span>·</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Execution Pipeline: OBSERVE ── REASON ── ACT ── VERIFY ── REPORT */}
          <div className="pt-6 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B7BFF]" />
              <span>EXECUTION PIPELINE · DETERMINISTIC LOOP</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
              {[
                { stage: "01", name: "OBSERVE", detail: "Accessibility Tree & Locators" },
                { stage: "02", name: "REASON", detail: "Action Planning & Intent" },
                { stage: "03", name: "ACT", detail: "Patchright CDP Dispatch" },
                { stage: "04", name: "VERIFY", detail: "Deterministic DOM Assertions" },
                { stage: "05", name: "REPORT", detail: "4-Part Structured Traces" },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="border-t border-border-subtle pt-3 space-y-1 group/step transition-colors duration-200 hover:border-[#9B7BFF]"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-ink-subtle">
                    <span>{step.stage}</span>
                    <span className="text-border-strong">—</span>
                  </div>
                  <div className="text-[13px] font-mono font-bold uppercase tracking-wider text-ink group-hover/step:text-[#9B7BFF] transition-colors">
                    {step.name}
                  </div>
                  <p className="text-[11px] text-ink-muted font-mono leading-tight">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* PROJECT 02: GRAPHIFY (Code Intelligence Tree Composition)             */}
      {/* ===================================================================== */}
      <section
        aria-label="Project 02: Graphify"
        className="w-full relative group"
        onMouseEnter={() => setHoveredProject("graphify")}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="border-t border-border-subtle pt-8 sm:pt-12 space-y-8">
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <div className="flex items-center space-x-3">
              <span className="text-3xl sm:text-4xl font-mono font-light text-ink">
                02
              </span>
              <span className="text-border-strong">/</span>
              <span className="text-[#5CA8FF] font-semibold">CODE INTELLIGENCE CORE</span>
              <span className="text-border-strong">·</span>
              <span className="text-ink-subtle">30+ MERGED PRS</span>
            </div>
            <div className="flex items-center space-x-4 pt-2 sm:pt-0">
              <Link
                href="/open-source#graphify"
                className="inline-flex items-center space-x-1 text-[#5CA8FF] hover:underline uppercase tracking-wider font-semibold"
              >
                <span>INVESTIGATION LOGS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span>·</span>
              <a
                href="https://github.com/Graphify-Labs/graphify"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-ink-muted hover:text-ink uppercase tracking-wider"
              >
                <span>GITHUB REPO</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Centered/Distinct Visual Composition */}
          <div className="space-y-4">
            <h3 className="text-[clamp(2.25rem,4.2vw,3.75rem)] font-mono font-bold uppercase tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1">
              GRAPHIFY
            </h3>
            <div className="text-lg sm:text-xl font-mono text-[#5CA8FF] uppercase tracking-wider">
              CODE INTELLIGENCE & SYMBOL DEPENDENCY GRAPH
            </div>
            <p className="text-[15px] sm:text-[16px] text-ink-body font-sans leading-relaxed max-w-2xl">
              Multi-language AST parsing, Tree-Sitter resolvers, and incremental graph merging deduplication. Resolved cross-file symbol lookups and prevented AST node eviction during syntax errors.
            </p>
          </div>

          {/* Pipeline: SOURCE → PARSE → RESOLVE → MERGE → EMIT */}
          <div className="py-4 border-y border-border-subtle">
            <div className="flex flex-wrap items-center justify-between gap-y-2 text-[12px] font-mono font-bold uppercase tracking-wider text-ink">
              <span className="text-[#5CA8FF]">SOURCE</span>
              <span className="text-border-strong">→</span>
              <span>PARSE (TREE-SITTER)</span>
              <span className="text-border-strong">→</span>
              <span>RESOLVE (CROSS-FILE)</span>
              <span className="text-border-strong">→</span>
              <span>MERGE (DEDUPLICATION)</span>
              <span className="text-border-strong">→</span>
              <span className="text-[#45D6A0]">EMIT (DETERMINISTIC)</span>
            </div>
          </div>

          {/* Monospace Code Tree Hierarchy Diagram */}
          <div className="bg-[#08090B] border border-border-subtle p-6 font-mono text-[12px] sm:text-[13px] leading-relaxed">
            <div className="text-ink-subtle uppercase text-[10px] tracking-widest pb-3">
              ARCHITECTURE SUB-SYSTEMS & CONTRIBUTED MODULES:
            </div>
            <div className="space-y-1.5 text-ink-body">
              <div className="text-[#5CA8FF] font-bold">GRAPHIFY / CORE ARCHITECTURE</div>
              <div className="pl-4 text-ink-muted">
                ├── <span className="text-ink font-semibold">AST EXTRACTION</span>: Multi-language Tree-Sitter visitors (Python, JS, TS)
              </div>
              <div className="pl-4 text-ink-muted">
                ├── <span className="text-ink font-semibold">RESOLUTION ENGINE</span>: Normalized symbol tables across definition files
              </div>
              <div className="pl-4 text-ink-muted">
                ├── <span className="text-ink font-semibold">GRAPH MERGING</span>: Scoped carried-hyperedge deduplication & cycle checks
              </div>
              <div className="pl-4 text-ink-muted">
                └── <span className="text-ink font-semibold">INCREMENTAL BUILDS</span>: Deterministic caching preventing re-scan bloat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* PROJECT 03: AI INTERVIEWER (Speech Stream & Latency Composition)      */}
      {/* ===================================================================== */}
      <section
        aria-label="Project 03: AI Interviewer"
        className="w-full relative group"
        onMouseEnter={() => setHoveredProject("ai-interviewer")}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="border-t border-border-subtle pt-8 sm:pt-12 space-y-8">
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <div className="flex items-center space-x-3">
              <span className="text-3xl sm:text-4xl font-mono font-light text-ink">
                03
              </span>
              <span className="text-border-strong">/</span>
              <span className="text-[#FFB86B] font-semibold">REAL-TIME SIMULATION SYSTEM</span>
            </div>
            <div className="flex items-center space-x-4 pt-2 sm:pt-0">
              <Link
                href="/projects/ai-interviewer"
                className="inline-flex items-center space-x-1 text-[#FFB86B] hover:underline uppercase tracking-wider font-semibold"
              >
                <span>CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span>·</span>
              <a
                href="https://github.com/hopstreax/ai-interviewer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-ink-muted hover:text-ink uppercase tracking-wider"
              >
                <span>GITHUB REPO</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Staggered Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-[clamp(2.25rem,4.2vw,3.75rem)] font-mono font-bold uppercase tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1">
                AI INTERVIEWER
              </h3>
              <div className="text-lg sm:text-xl font-mono text-[#FFB86B] uppercase tracking-wider">
                REAL-TIME INTERVIEW SYSTEM
              </div>
              <p className="text-[15px] sm:text-[16px] text-ink-body font-sans leading-relaxed pt-2">
                LLM-driven interview simulation platform with real-time speech recognition, dynamic difficulty adaptation, and multi-dimensional candidate evaluation.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4 pt-2">
              <div className="border border-border-subtle p-5 space-y-3 bg-[#08090B]">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                  <span className="flex items-center space-x-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#FFB86B]" />
                    <span>AUDIO TELEMETRY & ADAPTATION SPECS</span>
                  </span>
                  <span className="text-[#FFB86B] font-semibold">ACTIVE STREAM</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-[12px] font-mono pt-1">
                  <div>
                    <span className="text-ink-subtle block text-[10px]">SPEECH RECOGNITION</span>
                    <span className="text-ink font-semibold">Streaming Whisper / Vosk</span>
                  </div>
                  <div>
                    <span className="text-ink-subtle block text-[10px]">DIFFICULTY ENGINE</span>
                    <span className="text-ink font-semibold">Dynamic Prompt Modulation</span>
                  </div>
                  <div>
                    <span className="text-ink-subtle block text-[10px]">EVALUATION TRACE</span>
                    <span className="text-ink font-semibold">Multi-Dimensional Scorecard</span>
                  </div>
                  <div>
                    <span className="text-ink-subtle block text-[10px]">RUNTIMES</span>
                    <span className="text-ink font-semibold">Python · Streamlit · Llama</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pipeline: INGEST → TRANSCRIBE → REASON → ADAPT → EVALUATE */}
          <div className="pt-2 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB86B]" />
              <span>REAL-TIME STREAM PIPELINE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
              {[
                { stage: "01", name: "INGEST", detail: "Microphone Audio Buffer" },
                { stage: "02", name: "TRANSCRIBE", detail: "Real-Time Speech-to-Text" },
                { stage: "03", name: "REASON", detail: "Semantic Depth Analysis" },
                { stage: "04", name: "ADAPT", detail: "Difficulty Level Modulation" },
                { stage: "05", name: "EVALUATE", detail: "Structured Scorecard Generation" },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="border-t border-border-subtle pt-3 space-y-1 group/step transition-colors duration-200 hover:border-[#FFB86B]"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-ink-subtle">
                    <span>{step.stage}</span>
                    <span className="text-border-strong">—</span>
                  </div>
                  <div className="text-[13px] font-mono font-bold uppercase tracking-wider text-ink group-hover/step:text-[#FFB86B] transition-colors">
                    {step.name}
                  </div>
                  <p className="text-[11px] text-ink-muted font-mono leading-tight">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
