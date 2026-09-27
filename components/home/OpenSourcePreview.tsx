"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, GitPullRequest, GitBranch, FolderGit2 } from "lucide-react";

export function OpenSourcePreview() {
  const [selectedRepo, setSelectedRepo] = useState<string>("graphify");

  const repositories = [
    {
      id: "graphify",
      name: "GRAPHIFY",
      org: "Graphify-Labs",
      role: "Core Contributor · 30+ Merged PRs (~2 mos)",
      metric: "30+ MERGED PRS",
      color: "#5CA8FF",
      description:
        "Code intelligence & multi-language AST parsing. Resolved cross-file symbol lookups, scoped carried-hyperedge deduplication, and protected against AST node eviction on parse errors.",
      submodules: [
        { name: "AST", desc: "Tree-Sitter multi-language visitor passes (Python, JS, TS)" },
        { name: "RESOLUTION", desc: "Cross-file symbol table normalization & lookup" },
        { name: "GRAPH MERGING", desc: "Carried-hyperedge deduplication & cycle checks" },
        { name: "INCREMENTAL BUILDS", desc: "Deterministic caching preventing re-scan bloat" },
      ],
      url: "https://github.com/Graphify-Labs/graphify",
    },
    {
      id: "pda",
      name: "PDA",
      org: "ProteinDeficientsAnonymous",
      role: "Contributor · Multiple Merged PRs",
      metric: "EVENT ENGINE",
      color: "#45D6A0",
      description:
        "Event RSVP management tooling. Fixed waitlist promotion bugs separating party guests, enforced member-only gate logic, and hardened Playwright E2E test suites.",
      submodules: [
        { name: "WAITLIST LOGIC", desc: "Atomic party guest promotion preventing group splits" },
        { name: "MEMBER GATE", desc: "Role-based verification before RSVP allocation" },
        { name: "PLAYWRIGHT SUITE", desc: "Deterministic regression testing on state changes" },
      ],
      url: "https://github.com/ProteinDeficientsAnonymous/pda",
    },
    {
      id: "agent-orchestrator",
      name: "AGENT ORCHESTRATOR",
      org: "Untrivial-ai",
      role: "Contributor",
      metric: "AGENT RUNTIMES",
      color: "#9B7BFF",
      description:
        "Multi-agent task orchestration runtime pipelines for desktop workflows and autonomous background agent runs.",
      submodules: [
        { name: "TASK RUNTIME", desc: "Asynchronous task graph execution pipeline" },
        { name: "CONTEXT ISOLATION", desc: "Per-agent execution sandbox and environment state" },
      ],
      url: "https://github.com/Untrivial-ai/agent-orchestrator",
    },
    {
      id: "headroom",
      name: "HEADROOM",
      org: "headroomlabs-ai",
      role: "Contributor",
      metric: "CONTEXT STREAM",
      color: "#FFB86B",
      description:
        "Contextual intelligence infrastructure. Implemented transport-level keepalive frames for Server-Sent Events (SSE), resolving premature disconnects during long-running LLM completions.",
      submodules: [
        { name: "SSE KEEPALIVE", desc: "Periodic heartbeat ping frames preventing socket timeout" },
        { name: "STREAM HEALTH", desc: "Deterministic reconnect protocols on network drops" },
      ],
      url: "https://github.com/headroomlabs-ai/headroom",
    },
    {
      id: "continue",
      name: "CONTINUE",
      org: "continuedev",
      role: "Contributor",
      metric: "DEV TOOLING",
      color: "#818CF8",
      description:
        "Open-source AI code assistant ecosystem. Built structured error message extraction for model providers, eliminating opaque GUI failure alerts.",
      submodules: [
        { name: "ERROR PARSER", desc: "Extract provider-specific error codes into readable alerts" },
        { name: "IDE INTEGRATION", desc: "Clean status reporting across VS Code / JetBrains" },
      ],
      url: "https://github.com/continuedev/continue",
    },
  ];

  const currentRepo = repositories.find((r) => r.id === selectedRepo) || repositories[0];

  return (
    <div
      aria-label="Open Source Contributions"
      className="w-full space-y-12 select-none"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 border-b border-border-subtle">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
            <GitPullRequest className="w-3.5 h-3.5 text-[#45D6A0]" />
            <span>03 / OPEN SOURCE CONTRIBUTION MAP</span>
          </div>
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-mono font-bold uppercase tracking-tight text-ink">
            INTERCONNECTED REPOSITORIES
          </h2>
        </div>
        <Link
          href="/open-source"
          className="group inline-flex items-center space-x-1.5 text-[11px] font-mono uppercase tracking-wider text-ink-subtle hover:text-ink transition-colors"
        >
          <span>VIEW FULL OSS ARCHIVE</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Large Typography Evidence Banner (No Box Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline border-b border-border-subtle pb-10">
        <div className="md:col-span-4 space-y-1">
          <div className="text-[clamp(3.5rem,6vw,5.5rem)] font-mono font-light tracking-tighter text-[#45D6A0] leading-none">
            50+
          </div>
          <div className="text-[13px] font-mono font-semibold uppercase tracking-wider text-ink">
            MERGED / CLOSED PRS
          </div>
          <div className="text-[11px] font-mono text-ink-subtle uppercase tracking-widest">
            3+ MONTHS TOTAL OSS HORIZON
          </div>
        </div>

        <div className="md:col-span-8 space-y-2 border-l border-border-subtle pl-6">
          <p className="text-[16px] sm:text-[18px] text-ink font-sans leading-relaxed">
            I learn software by getting inside systems I didn’t build. Contributing to mature codebases requires respecting established invariants and defending diffs under maintainer scrutiny.
          </p>
          <div className="text-[11px] font-mono text-ink-subtle pt-1">
            <span className="text-[#5CA8FF] font-semibold">30+ PRs in Graphify</span> (~2 months) · <span className="text-[#45D6A0] font-semibold">50+ total PRs</span> across Graphify, PDA, Continue, Headroom & others.
          </div>
        </div>
      </div>

      {/* Interconnected Repository System: Left Repository List, Right Architecture Tree */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Repository Selector (Zero Cards!) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle pb-1">
            SELECT REPOSITORY TO INSPECT RELATIONSHIPS:
          </div>

          <div className="space-y-1">
            {repositories.map((repo) => {
              const isSelected = selectedRepo === repo.id;
              return (
                <div
                  key={repo.id}
                  onClick={() => setSelectedRepo(repo.id)}
                  onMouseEnter={() => setSelectedRepo(repo.id)}
                  className={`p-3 cursor-pointer transition-all duration-200 border-l-2 ${
                    isSelected
                      ? "border-[#45D6A0] bg-[#0D1014] text-ink pl-4"
                      : "border-transparent text-ink-muted hover:text-ink hover:border-border-strong pl-3"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-mono font-bold tracking-wider uppercase">
                      {repo.name}
                    </span>
                    <span
                      className="text-[10px] font-mono font-semibold"
                      style={{ color: isSelected ? repo.color : "#666B73" }}
                    >
                      {repo.metric}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-ink-subtle">
                    {repo.role}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Engineering Tree & Contribution Spec (Zero Cards!) */}
        <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-border-subtle lg:pl-10">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span
                className="text-[11px] font-mono font-bold uppercase tracking-widest"
                style={{ color: currentRepo.color }}
              >
                {currentRepo.org} / {currentRepo.name}
              </span>
              <a
                href={currentRepo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-[11px] font-mono uppercase tracking-wider text-ink-subtle hover:text-ink"
              >
                <span>OPEN REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[14px] text-ink-body font-sans leading-relaxed">
              {currentRepo.description}
            </p>
          </div>

          {/* Connected Tree Representation */}
          <div className="p-5 border border-border-subtle bg-[#08090B] font-mono text-[12px] sm:text-[13px] leading-relaxed">
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle pb-3">
              CONTRIBUTED ARCHITECTURAL SUB-SYSTEMS:
            </div>
            <div className="space-y-2 text-ink-body">
              <div className="font-bold" style={{ color: currentRepo.color }}>
                {currentRepo.name}
              </div>
              <div className="space-y-1 pl-4 text-ink-muted">
                {currentRepo.submodules.map((sub, sIdx) => {
                  const isLast = sIdx === currentRepo.submodules.length - 1;
                  return (
                    <div key={sIdx} className="flex items-start space-x-2">
                      <span className="text-border-strong select-none">
                        {isLast ? "└──" : "├──"}
                      </span>
                      <span>
                        <span className="text-ink font-semibold">{sub.name}</span>:{" "}
                        <span className="text-ink-subtle">{sub.desc}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
