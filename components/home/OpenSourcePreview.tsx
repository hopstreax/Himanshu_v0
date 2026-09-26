import React from "react";
import Link from "next/link";
import { ArrowUpRight, GitPullRequest } from "lucide-react";

export function OpenSourcePreview() {
  const repositories = [
    {
      name: "Graphify",
      organization: "Graphify-Labs",
      role: "Core Contributor · 30+ Merged PRs (~2 mos)",
      description:
        "Code intelligence & multi-language AST parsing. Resolved cross-file symbol lookups, scoped carried-hyperedge deduplication, and protected against AST node eviction on parse errors.",
      technologies: ["Python", "Tree-Sitter", "NetworkX", "pytest"],
      url: "https://github.com/Graphify-Labs/graphify",
      isPrimary: true,
    },
    {
      name: "PDA",
      organization: "ProteinDeficientsAnonymous",
      role: "Contributor · Multiple PRs",
      description:
        "Event RSVP management tooling. Fixed waitlist promotion bugs separating party guests, enforced member-only gate logic, and hardened Playwright E2E test suites.",
      technologies: ["TypeScript", "Playwright", "State Machines", "React"],
      url: "https://github.com/ProteinDeficientsAnonymous/pda",
    },
    {
      name: "Agent Orchestrator",
      organization: "Untrivial-ai",
      role: "Contributor",
      description:
        "Multi-agent task orchestration and execution runtime pipelines for desktop workflows and background agent runs.",
      technologies: ["Python", "Async Workflows", "Agent Runtimes"],
      url: "https://github.com/Untrivial-ai/agent-orchestrator",
    },
    {
      name: "Headroom",
      organization: "headroomlabs-ai",
      role: "Contributor",
      description:
        "Contextual intelligence infrastructure. Implemented transport-level keepalive frames for Server-Sent Events (SSE), resolving premature disconnects during long-running LLM completions.",
      technologies: ["TypeScript", "SSE Protocols", "AI Infrastructure"],
      url: "https://github.com/headroomlabs-ai/headroom",
    },
    {
      name: "Continue",
      organization: "continuedev",
      role: "Contributor",
      description:
        "Open-source AI code assistant ecosystem. Built structured error message extraction for model providers, eliminating opaque GUI failure alerts.",
      technologies: ["TypeScript", "IDE Integrations", "Developer Tooling"],
      url: "https://github.com/continuedev/continue",
    },
  ];

  return (
    <div
      aria-label="Open Source Contributions"
      className="w-full space-y-8 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-2 border-b border-border-subtle/80">
        <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
          <GitPullRequest className="w-3.5 h-3.5 text-ink" />
          <h2 className="font-medium text-ink">
            <span className="font-semibold">03</span>
            <span className="mx-1.5 opacity-60">/</span>
            <span>OPEN SOURCE CONTRIBUTIONS</span>
          </h2>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
          50+ MERGED/CLOSED PRS ACROSS 3+ MONTHS
        </span>
      </div>

      {/* Opening Statement */}
      <blockquote className="p-6 rounded-xl border-l-2 border-ink bg-canvas-subtle/30 space-y-2">
        <p className="text-[15px] sm:text-[16px] text-ink italic leading-relaxed">
          &ldquo;I learn software by getting inside systems I didn&apos;t build: tracing AST visitor passes in Graphify, diagnosing keepalive disconnects in AI proxies, and enforcing strict state machine invariants in community tooling.&rdquo;
        </p>
        <cite className="block text-[10px] font-mono uppercase tracking-widest text-ink-subtle not-italic">
          — Himanshu Patro · Open Source Philosophy
        </cite>
      </blockquote>

      {/* Repositories Rows */}
      <div className="space-y-4">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className={`p-5 sm:p-6 rounded-xl border transition-colors ${
              repo.isPrimary
                ? "bg-canvas-subtle/50 border-ink/40 shadow-2xs"
                : "bg-canvas border-border-subtle/80 hover:border-ink/30"
            } space-y-3`}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div className="flex items-center space-x-2.5">
                <span className="text-[14px] sm:text-[15px] font-mono font-semibold text-ink uppercase tracking-wider">
                  {repo.name}
                </span>
                <span className="text-[10px] font-mono text-ink-subtle">
                  / {repo.organization}
                </span>
              </div>
              <span className="text-[11px] font-mono font-medium text-ink uppercase tracking-editorial self-start sm:self-auto">
                {repo.role}
              </span>
            </div>

            <p className="text-[13px] text-ink-muted leading-relaxed font-sans">
              {repo.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap gap-1.5">
                {repo.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono px-2 py-0.5 bg-canvas-subtle rounded border border-border-subtle text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-[10px] font-mono uppercase tracking-widest text-ink-subtle hover:text-ink transition-colors"
              >
                <span>REPOSITORY</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Prominent CTA */}
      <div className="pt-2 flex justify-start">
        <Link
          href="/open-source"
          className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-ink text-canvas hover:bg-ink-muted transition-colors text-[11px] font-mono uppercase tracking-editorial"
        >
          <span>EXPLORE FULL OPEN-SOURCE CASE STUDIES & 370-DAY GRAPH</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
