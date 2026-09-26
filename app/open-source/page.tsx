import React from "react";
import {
  ArrowUpRight,
  GitFork,
  ShieldCheck,
  Terminal,
  Cpu,
  FolderGit2,
  BookOpen,
  CheckCircle2,
  Workflow,
  Sparkles,
  GitCommit,
  GitPullRequest,
  Layers,
  Compass,
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { ContributionGraph } from "@/components/subpage/ContributionGraph";
import {
  graphifyStory,
  openSourceRepositories,
  graphifyInvestigations,
  ecosystemContributions,
} from "@/data/openSource";
import { githubActivity } from "@/data/githubActivity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Open-source engineering case studies across Graphify (30+ PRs in code intelligence & AST analysis), Agent Orchestrator, PDA, Continue, and Headroom.",
  alternates: {
    canonical: "/open-source",
  },
  openGraph: {
    title: "Open Source — Himanshu Patro",
    description:
      "Open-source engineering case studies across Graphify (30+ PRs in code intelligence & AST analysis), Agent Orchestrator, PDA, Continue, and Headroom.",
    url: "https://himanshupatro.dev/open-source",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source — Himanshu Patro",
    description:
      "Open-source engineering case studies across Graphify (30+ PRs in code intelligence & AST analysis), Agent Orchestrator, PDA, Continue, and Headroom.",
  },
};

export default function OpenSourcePage() {
  // Separate Graphify (Hero case study) from other ecosystem repositories
  const otherEcosystems = ecosystemContributions.filter(
    (eco) => eco.repoName.toLowerCase() !== "graphify"
  );

  const totalContributions = githubActivity.days.reduce((acc, d) => acc + d.count, 0);
  const activeDays = githubActivity.days.filter((d) => d.count > 0).length;

  return (
    <PageShell activeSection="open-source">
      {/* Editorial Opening / Hero Statement */}
      <header className="pb-10 mb-14 border-b border-border-subtle/80 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2.5 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80 font-medium">
              03 / OPEN SOURCE
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
              ENGINEERING JOURNAL
            </span>
          </div>
          <span className="text-[11px] font-mono text-ink-subtle hidden sm:inline-block">
            GITHUB @HOPSTREAX
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-[34px] sm:text-[46px] md:text-[54px] font-semibold tracking-tight text-ink leading-[1.12]">
            I learn software by getting inside systems I didn’t build.
          </h1>

          <p className="text-[16px] sm:text-[18px] text-ink-muted leading-relaxed font-sans max-w-3xl">
            Rather than writing code in a vacuum, contributing to mature, production-grade repositories forces you to respect existing invariants, understand established architectural patterns, and justify every diff under rigorous maintainer review.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-ink-subtle border-t border-border-subtle/50">
          <span>PRIMARY FOCUS: GRAPHIFY (CODE INTELLIGENCE)</span>
          <span className="hidden sm:inline">·</span>
          <span>SPECIALIZATION: AST EXTRACTION & PARSER GRAMMARS</span>
          <span className="hidden sm:inline">·</span>
          <span>VERIFIED: 50+ MERGED/CLOSED PRS</span>
        </div>
      </header>

      <div className="flex flex-col space-y-20">
        {/* ============================================================ */}
        {/* 01 / CONTRIBUTION SIGNAL (Editorial Metrics Spread + Graph) */}
        {/* ============================================================ */}
        <section aria-labelledby="signal-heading" className="space-y-10">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <GitPullRequest className="w-3.5 h-3.5 text-ink" />
            <h2 id="signal-heading">01 / CONTRIBUTION SIGNAL & VERIFIED OUTPUT</h2>
          </div>

          {/* Asymmetric Editorial Data Spread (Magazine Layout, Thin Rules, No Boxed Cards) */}
          <div className="border-t-2 border-ink border-b border-border-subtle py-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Primary Anchor: Graphify (7 columns) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                  <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle font-semibold text-ink">
                    01 / PRIMARY ENGINE
                  </span>
                  <span>GRAPHIFY IMPACT</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
                  <div className="text-[72px] sm:text-[92px] md:text-[104px] font-light tracking-tighter text-ink leading-none select-none">
                    30+
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[14px] sm:text-[15px] font-mono uppercase tracking-widest font-semibold text-ink leading-tight">
                      GRAPHIFY MERGED PRS
                    </div>
                    <div className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider">
                      ~2 MONTHS CONTRIBUTION PERIOD
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-ink-muted leading-relaxed pt-1">
                      AST extraction, cross-file symbol resolution, and incremental graph merging deduplication.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Rule (desktop) */}
              <div className="hidden lg:flex lg:col-span-1 h-full justify-center">
                <div className="w-px h-full min-h-[140px] bg-border-subtle" />
              </div>

              {/* Secondary Anchor: Overall OSS (4 columns) */}
              <div className="lg:col-span-4 space-y-4 lg:pl-2">
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                  <span className="px-2 py-0.5 rounded bg-canvas border border-border-subtle/80 font-medium text-ink-muted">
                    02 / TOTAL REACH
                  </span>
                  <span>BROADER ECOSYSTEM</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-4">
                  <div className="text-[54px] sm:text-[72px] md:text-[80px] font-light tracking-tighter text-ink leading-none select-none">
                    50+
                  </div>
                  <div className="space-y-1">
                    <div className="text-[14px] font-mono uppercase tracking-widest font-semibold text-ink leading-tight">
                      OPEN SOURCE PRS
                    </div>
                    <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-wider">
                      MERGED & CLOSED · 3+ MONTHS
                    </div>
                  </div>
                </div>

                <p className="text-[12px] font-mono text-ink-muted leading-relaxed pt-1">
                  Spanning Graphify, PDA, Agent Orchestrator, Headroom, Continue, and other repositories.
                </p>
              </div>
            </div>

            {/* Subordinate Context Sentence */}
            <div className="pt-6 border-t border-border-subtle/60 text-[12px] sm:text-[13px] text-ink-muted leading-relaxed font-mono">
              30+ merged PRs in Graphify over ~2 months. 50+ merged/closed PRs across 3+ months of open-source contribution, spanning Graphify, PDA, Agent Orchestrator, Headroom, Continue, and other projects.
            </div>
          </div>

          {/* Integrated GitHub Activity Calendar with Editorial Side Annotation */}
          <div className="pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Side Annotation (3 cols on desktop) */}
              <div className="lg:col-span-3 space-y-5 pt-1">
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold flex items-center space-x-1.5">
                    <GitCommit className="w-3.5 h-3.5 text-ink" />
                    <span>03 / DAILY CADENCE</span>
                  </div>
                  <div className="text-[17px] font-semibold text-ink tracking-tight">
                    GitHub Activity
                  </div>
                  <a
                    href={`https://github.com/${githubActivity.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[12px] font-mono text-ink hover:text-ink-muted transition-colors group"
                  >
                    <span>@{githubActivity.username}</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                <div className="border-t border-border-subtle pt-4 space-y-3 text-[11px] font-mono">
                  <div>
                    <span className="text-ink-subtle uppercase tracking-wider block text-[10px]">
                      Tracked Horizon
                    </span>
                    <span className="font-semibold text-ink text-[13px]">
                      {githubActivity.days.length} DAYS RECORDED
                    </span>
                  </div>
                  <div>
                    <span className="text-ink-subtle uppercase tracking-wider block text-[10px]">
                      Annual Contributions
                    </span>
                    <span className="font-semibold text-ink text-[13px]">
                      {totalContributions} COMMITS & PRS
                    </span>
                  </div>
                  <div>
                    <span className="text-ink-subtle uppercase tracking-wider block text-[10px]">
                      Active Output Days
                    </span>
                    <span className="font-semibold text-ink text-[13px]">
                      {activeDays} ACTIVE DAYS
                    </span>
                  </div>
                </div>
              </div>

              {/* Calendar Heatmap Body (9 cols on desktop) */}
              <div className="lg:col-span-9">
                <ContributionGraph
                  hideHeader={true}
                  className="p-5 sm:p-7 rounded-xl border border-border-subtle bg-surface/30 flex flex-col space-y-5 select-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02 / HOW I GOT HERE (Open Source Progression & Philosophy)   */}
        {/* ============================================================ */}
        <section aria-labelledby="progression-heading" className="pt-10 border-t border-border-subtle/80 space-y-8">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <BookOpen className="w-3.5 h-3.5 text-ink" />
            <h2 id="progression-heading">02 / HOW I GOT HERE · PROGRESSION & PHILOSOPHY</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Thesis Quote & Engineering Mindset (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <blockquote className="p-6 rounded-xl border-l-2 border-ink bg-canvas-subtle/40 space-y-3">
                <p className="text-[15px] sm:text-[16px] text-ink italic leading-relaxed">
                  “Superficial bug fixes are dangerous: when an import resolver misclassifies a symbol stub or a graph merge duplicates a hyperedge, the error silently pollutes the entire graph downstream.”
                </p>
                <cite className="block text-[11px] font-mono uppercase tracking-widest text-ink-subtle not-italic">
                  — Graphify Engineering Journal
                </cite>
              </blockquote>

              <p className="text-[14px] text-ink-muted leading-relaxed">
                Contributing to open source forced me to move beyond building toys. When thousands of developers depend on a parser or runtime, every assumption must be verified through minimal test fixtures and automated regression suites.
              </p>
            </div>

            {/* Right Column: 3-Stage Progression Timeline (7 cols) */}
            <div className="lg:col-span-7 divide-y divide-border-subtle/80 border-t border-b border-border-subtle/80">
              {/* Stage 1 */}
              <div className="py-5 space-y-2 group">
                <div className="flex items-baseline justify-between text-[11px] font-mono">
                  <span className="font-semibold text-ink tracking-wider uppercase group-hover:translate-x-1 transition-transform inline-block">
                    PHASE 01 / EXPLORATION & DIAGNOSTIC LAYERS
                  </span>
                  <span className="text-ink-subtle">Continue · Headroom</span>
                </div>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  Investigated nested error payloads in Continue (AI code assistant), unwrapping deep JSON provider errors to replace opaque alerts. In Headroom Labs, resolved premature SSE streaming disconnects during long-running LLM completions using transport-level keepalive frames.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="py-5 space-y-2 group">
                <div className="flex items-baseline justify-between text-[11px] font-mono">
                  <span className="font-semibold text-ink tracking-wider uppercase group-hover:translate-x-1 transition-transform inline-block">
                    PHASE 02 / STATE MACHINES & GATE LOGIC
                  </span>
                  <span className="text-ink-subtle">ProteinDeficientsAnonymous (PDA)</span>
                </div>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  Resolved waitlist party promotion edge cases (PR #1024) where plus-one guests were split during seat reallocations. Enforced strict RSVP gate validations, normalized phone numbers to international E.164 database standards, and hardened Playwright E2E suites.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="py-5 space-y-2 group">
                <div className="flex items-baseline justify-between text-[11px] font-mono">
                  <span className="font-semibold text-ink tracking-wider uppercase group-hover:translate-x-1 transition-transform inline-block">
                    PHASE 03 / CODE INTELLIGENCE & SYMBOL GRAPHS
                  </span>
                  <span className="text-ink-subtle">Graphify (Core Contributor)</span>
                </div>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  Sustained core contributions across Tree-Sitter AST parsers, cross-file import resolution, carried-hyperedge deduplication in incremental builds, fail-closed semantic node protection, and headless Windows subprocess management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 / GRAPHIFY (THE HERO CASE STUDY)                          */}
        {/* ============================================================ */}
        <section aria-labelledby="graphify-hero-heading" className="pt-10 border-t border-border-subtle/80 space-y-12">
          {/* Hero Case Study Header */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                <GitFork className="w-3.5 h-3.5 text-ink" />
                <h2 id="graphify-hero-heading">03 / PRIMARY CASE STUDY — THE GRAPHIFY ENGINE</h2>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-surface border border-border-strong font-semibold text-ink">
                FLAGSHIP OSS STORY
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-border-subtle/80 pb-8">
              <div className="space-y-2 max-w-3xl">
                <div className="text-[12px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                  CODE INTELLIGENCE & SYMBOL GRAPH ENGINE
                </div>
                <h3 className="text-[36px] sm:text-[48px] md:text-[54px] font-semibold text-ink tracking-tight leading-none">
                  Graphify
                </h3>
                <p className="text-[15px] sm:text-[17px] text-ink-muted leading-relaxed pt-2">
                  {graphifyStory.longDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
                <div className="text-[11px] font-mono text-ink-subtle text-left lg:text-right">
                  <span className="text-ink font-semibold">30+ MERGED PRS</span> · ~2 MONTHS
                </div>
                <a
                  href={graphifyStory.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-md bg-canvas border border-border-strong hover:bg-surface text-ink text-[11px] font-mono font-semibold uppercase tracking-wider transition-colors group"
                >
                  <span>GITHUB REPO</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Technology tags strip */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-ink-subtle mr-2">
                CORE STACK:
              </span>
              {graphifyStory.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-ink border border-border-subtle/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Pipeline Scope Index (6 Pipeline Areas as Architectural Matrix) */}
          <div className="space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-ink font-semibold flex items-center space-x-2">
              <Cpu className="w-3.5 h-3.5 text-ink" />
              <span>INVESTIGATED PIPELINE DOMAINS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle border-t border-b border-border-subtle">
              {graphifyStory.coreAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:px-4 first:sm:pl-0 last:sm:pr-0 space-y-1 group"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle group-hover:text-ink transition-colors">
                    DOMAIN 0{idx + 1}
                  </span>
                  <div className="text-[13px] font-medium text-ink leading-snug">
                    {area}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Investigations as Engineering Chapters */}
          <div className="space-y-8 pt-4">
            <div className="flex items-center justify-between border-b border-border-subtle/80 pb-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-ink font-semibold flex items-center space-x-2">
                <Workflow className="w-3.5 h-3.5 text-ink" />
                <span>ENGINEERING CHAPTERS · INVESTIGATION LOGS</span>
              </div>
              <span className="text-[11px] font-mono text-ink-subtle">
                4 DOCUMENTED ROOT-CAUSE FIXES
              </span>
            </div>

            <div className="space-y-12">
              {graphifyInvestigations.map((inv, idx) => (
                <article
                  key={idx}
                  className="pb-10 border-b border-border-subtle/80 last:border-b-0 space-y-6"
                >
                  {/* Chapter Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-2">
                        <span className="font-semibold text-ink">CHAPTER 0{idx + 1}</span>
                        <span>·</span>
                        <span>{inv.scope}</span>
                        {inv.prReference && (
                          <>
                            <span>·</span>
                            <span className="text-ink-muted">{inv.prReference}</span>
                          </>
                        )}
                      </div>
                      <h4 className="text-[20px] sm:text-[23px] font-semibold text-ink tracking-tight">
                        {inv.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1 shrink-0">
                      {inv.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-canvas text-ink-subtle border border-border-subtle/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4-Step Narrative Flow (Problem → Investigation → Change → Validation) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[13px] leading-relaxed pt-1">
                    {/* Left Column: Problem & Root-Cause */}
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider font-semibold text-ink flex items-center space-x-2">
                          <span className="text-ink-subtle">01</span>
                          <span>Problem & Invariant Violation</span>
                        </div>
                        <p className="text-ink-muted pl-4 border-l border-border-subtle">
                          {inv.problem}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider font-semibold text-ink flex items-center space-x-2">
                          <span className="text-ink-subtle">02</span>
                          <span>Investigation & Root Cause</span>
                        </div>
                        <p className="text-ink-muted pl-4 border-l border-border-subtle">
                          {inv.investigation}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Code Change & Validation */}
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider font-semibold text-ink flex items-center space-x-2">
                          <span className="text-ink-subtle">03</span>
                          <span>Structural Code Change</span>
                        </div>
                        <p className="text-ink-muted pl-4 border-l border-border-subtle">
                          {inv.change}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider font-semibold text-ink flex items-center space-x-2">
                          <span className="text-ink-subtle">04</span>
                          <span>Regression Test & Validation</span>
                        </div>
                        <p className="text-ink-muted pl-4 border-l border-border-subtle">
                          {inv.validation}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Result Bar */}
                  <div className="pt-3 border-t border-border-subtle/80 flex items-start space-x-2.5 text-[13px]">
                    <CheckCircle2 className="w-4 h-4 text-ink mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider mr-2">
                        Verified Outcome:
                      </span>
                      <span className="text-ink-muted">{inv.result}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 / OTHER SYSTEMS (Ecosystem Work)                          */}
        {/* ============================================================ */}
        <section aria-labelledby="other-systems-heading" className="pt-10 border-t border-border-subtle/80 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <FolderGit2 className="w-3.5 h-3.5 text-ink" />
              <h2 id="other-systems-heading">04 / OTHER SYSTEMS & ECOSYSTEM WORK</h2>
            </div>
            <span className="text-[11px] font-mono text-ink-subtle">
              AGENT RUNTIMES · COMMUNITY PLATFORMS · AI PROXIES
            </span>
          </div>

          <div className="divide-y divide-border-subtle/80 border-t border-b border-border-subtle/80">
            {otherEcosystems.map((eco) => (
              <article key={eco.repoName} className="py-8 space-y-6">
                {/* Repo Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                      {eco.organization} · {eco.role}
                    </div>
                    <h3 className="text-[22px] font-semibold text-ink">
                      {eco.repoName}
                    </h3>
                  </div>

                  <a
                    href={eco.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-canvas border border-border-subtle hover:border-border-strong text-ink text-[11px] font-mono font-medium uppercase tracking-wider transition-colors group shrink-0"
                    aria-label={`View ${eco.repoName} on GitHub`}
                  >
                    <span>GITHUB REPO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                <p className="text-[14px] text-ink-muted leading-relaxed max-w-3xl">
                  {eco.description || eco.summary}
                </p>

                {/* 2-Column Split Details without nested card boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] leading-relaxed pt-1">
                  {/* Left Column: Context & Focus */}
                  <div className="space-y-4">
                    {eco.whyInteresting && (
                      <div className="space-y-1">
                        <div className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider">
                          Why It Was Interesting
                        </div>
                        <p className="text-ink-muted pl-3 border-l border-border-subtle text-[13px]">
                          {eco.whyInteresting}
                        </p>
                      </div>
                    )}

                    {eco.contributionAreas && eco.contributionAreas.length > 0 && (
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-ink-subtle font-semibold">
                          Contribution Areas:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {eco.contributionAreas.map((area) => (
                            <span
                              key={area}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas text-ink border border-border-subtle"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Concrete Work & Learnings */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider">
                        Technical Work & Invariant Fixed
                      </div>
                      <p className="text-ink-muted pl-3 border-l border-border-subtle text-[13px]">
                        {eco.technicalWork}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider">
                        What I Learned
                      </div>
                      <p className="text-ink-muted pl-3 border-l border-border-subtle text-[13px]">
                        {eco.whatILearned}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {eco.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface text-ink-subtle border border-border-subtle/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05 / ENGINEERING DISCIPLINE & COMPLETE DIRECTORY            */}
        {/* ============================================================ */}
        <section aria-labelledby="discipline-heading" className="pt-10 border-t border-border-subtle/80 space-y-10">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Compass className="w-3.5 h-3.5 text-ink" />
            <h2 id="discipline-heading">05 / WHAT I LEARNED · ENGINEERING DISCIPLINE</h2>
          </div>

          {/* 4 Core Lessons as Sleek 4-Column Strip (No Boxed Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle border-t border-b border-border-subtle py-6">
            <div className="sm:px-4 first:sm:pl-0 space-y-2 py-3 sm:py-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                PRINCIPLE 01
              </span>
              <h4 className="text-[14px] font-semibold text-ink">
                Map Before Modifying
              </h4>
              <p className="text-[12px] text-ink-muted leading-relaxed">
                Trace data flow and AST structures end-to-end before proposing diffs to respect existing invariants.
              </p>
            </div>

            <div className="sm:px-4 space-y-2 py-3 sm:py-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                PRINCIPLE 02
              </span>
              <h4 className="text-[14px] font-semibold text-ink">
                Minimal Test Fixtures
              </h4>
              <p className="text-[12px] text-ink-muted leading-relaxed">
                Reproduce complex regressions with the smallest isolated code snippet before changing implementation.
              </p>
            </div>

            <div className="sm:px-4 space-y-2 py-3 sm:py-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                PRINCIPLE 03
              </span>
              <h4 className="text-[14px] font-semibold text-ink">
                Root-Cause Precision
              </h4>
              <p className="text-[12px] text-ink-muted leading-relaxed">
                Fix structural root causes rather than applying surface-level patches that mask deeper state corruption.
              </p>
            </div>

            <div className="sm:px-4 last:sm:pr-0 space-y-2 py-3 sm:py-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                PRINCIPLE 04
              </span>
              <h4 className="text-[14px] font-semibold text-ink">
                Automated Invariant Locks
              </h4>
              <p className="text-[12px] text-ink-muted leading-relaxed">
                Lock every resolved edge case into the automated regression suite so fixes remain permanent across builds.
              </p>
            </div>
          </div>

          {/* Complete Directory Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <span className="font-semibold text-ink flex items-center space-x-2">
                <Terminal className="w-3.5 h-3.5 text-ink" />
                <span>COMPLETE OPEN SOURCE DIRECTORY</span>
              </span>
              <span>5 REPOSITORIES</span>
            </div>

            <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
              {openSourceRepositories.map((repo) => (
                <div
                  key={repo.url}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-canvas-subtle/30 px-2 -mx-2 rounded transition-colors group"
                >
                  <div className="flex items-baseline space-x-3">
                    <span className="text-[14px] font-semibold text-ink font-mono">
                      {repo.name}
                    </span>
                    <span className="text-[11px] font-mono text-ink-subtle">
                      {repo.organization}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="text-[11px] font-mono text-ink-muted hidden md:inline">
                      {repo.focusAreas[0]}
                    </span>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[11px] font-mono font-medium text-ink hover:text-ink-muted transition-colors"
                      aria-label={`Open ${repo.name} repository`}
                    >
                      <span>GITHUB</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Banner (Intentionally Bordered Feature Block) */}
          <div className="p-6 rounded-xl border border-border-strong bg-surface/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-ink shrink-0" />
              <div>
                <div className="text-[15px] font-semibold text-ink">
                  Verified GitHub Commits & Pull Requests
                </div>
                <div className="text-[13px] text-ink-muted">
                  Review commit signatures, pull request discussions, and merged changes on GitHub under @hopstreax.
                </div>
              </div>
            </div>

            <a
              href="https://github.com/hopstreax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-md bg-canvas border border-border-strong text-[11px] font-mono font-semibold tracking-widest uppercase text-ink hover:bg-surface transition-colors shrink-0 group"
            >
              <span>GITHUB @HOPSTREAX</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
