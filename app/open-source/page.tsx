import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Terminal,
  Cpu,
  FolderGit2,
  BookOpen,
  GitCommit,
  GitPullRequest,
  Workflow,
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { ContributionGraph } from "@/components/subpage/ContributionGraph";
import {
  graphifyStory,
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
  const otherEcosystems = ecosystemContributions.filter(
    (eco) => eco.repoName.toLowerCase() !== "graphify"
  );

  const totalContributions = githubActivity.days.reduce((acc, d) => acc + d.count, 0);
  const activeDays = githubActivity.days.filter((d) => d.count > 0).length;

  return (
    <PageShell activeSection="open-source">
      {/* Editorial Opening / Hero Statement */}
      <header className="pb-12 mb-16 border-b border-[#242830] space-y-8">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#45D6A0]" />
            <span className="text-[#F4F1EA] font-semibold">03 / OPEN SOURCE</span>
            <span>·</span>
            <span>ENGINEERING ARCHIVE</span>
          </div>
          <span className="hidden sm:inline-block">
            GITHUB @HOPSTREAX
          </span>
        </div>

        <div className="space-y-4 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6">
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] leading-[0.95]">
              OPEN<br />
              <span className="text-[#45D6A0]">SOURCE</span>
            </h1>

            <div className="space-y-1 md:text-right">
              <div className="text-[clamp(3rem,5.5vw,4.5rem)] font-mono font-light tracking-tighter text-[#45D6A0] leading-none">
                50+
              </div>
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#F4F1EA] font-semibold">
                MERGED / CLOSED PRS
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#666B73]">
                3+ MONTHS TOTAL OSS HORIZON
              </div>
            </div>
          </div>

          <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-[#C5C8CE] font-sans font-light leading-relaxed max-w-3xl pt-4">
            I learn software by getting inside systems I didn’t build. Rather than writing code in a vacuum, contributing to mature repositories forces you to respect existing invariants and justify every diff under maintainer review.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-[#666B73] border-t border-[#242830]">
          <span className="text-[#5CA8FF] font-semibold">GRAPHIFY: 30+ MERGED PRS (~2 MONTHS)</span>
          <span className="hidden sm:inline">·</span>
          <span>SPECIALIZATION: AST EXTRACTION & SYMBOL RESOLUTION</span>
          <span className="hidden sm:inline">·</span>
          <span className="text-[#45D6A0]">OVERALL OSS: 50+ MERGED/CLOSED PRS (3+ MONTHS)</span>
        </div>
      </header>

      <div className="flex flex-col space-y-24">
        {/* ============================================================ */}
        {/* 01 / CONTRIBUTION METRICS COMPARISON                         */}
        {/* ============================================================ */}
        <section aria-labelledby="signal-heading" className="space-y-8">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
            <GitPullRequest className="w-3.5 h-3.5 text-[#45D6A0]" />
            <h2 id="signal-heading">01 / CONTRIBUTION SIGNAL & VERIFIED OUTPUT</h2>
          </div>

          {/* Editorial Data Spread (Hairline Rules, Zero Cards) */}
          <div className="border-t-2 border-[#F4F1EA] border-b border-[#242830] py-10 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Primary Anchor: Graphify */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#5CA8FF] font-semibold">
                  <span>01 / CODE INTELLIGENCE CORE</span>
                  <span>·</span>
                  <span>GRAPHIFY-LABS / GRAPHIFY</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
                  <div className="text-[clamp(3.5rem,6vw,5rem)] font-mono font-light tracking-tighter text-[#5CA8FF] leading-none select-none">
                    30+
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-mono uppercase tracking-wider font-bold text-[#F4F1EA]">
                      GRAPHIFY MERGED PRS
                    </div>
                    <div className="text-[11px] font-mono text-[#666B73] uppercase tracking-wider">
                      ~2 MONTHS CONTRIBUTION PERIOD
                    </div>
                    <p className="text-[13px] text-[#9A9DA3] leading-relaxed pt-1">
                      AST extraction, multi-language Tree-Sitter resolvers, and incremental graph merging deduplication.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Anchor: Overall OSS */}
              <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-[#242830] lg:pl-10">
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#45D6A0] font-semibold">
                  <span>02 / BROADER ECOSYSTEM</span>
                  <span>·</span>
                  <span>CROSS-REPOSITORY REACH</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                  <div className="text-[clamp(3rem,5vw,4.25rem)] font-mono font-light tracking-tighter text-[#45D6A0] leading-none select-none">
                    50+
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-mono uppercase tracking-wider font-bold text-[#F4F1EA]">
                      OPEN SOURCE PRS
                    </div>
                    <div className="text-[11px] font-mono text-[#666B73] uppercase tracking-wider">
                      MERGED & CLOSED · 3+ MONTHS
                    </div>
                  </div>
                </div>

                <p className="text-[12px] font-mono text-[#9A9DA3] leading-relaxed pt-1">
                  Spanning Graphify, PDA, Agent Orchestrator, Headroom, Continue, and other repositories.
                </p>
              </div>
            </div>

            {/* Context Verification Note */}
            <div className="pt-6 border-t border-[#242830] text-[12px] text-[#666B73] leading-relaxed font-mono">
              30+ merged PRs in Graphify over ~2 months. 50+ merged/closed PRs across 3+ months of open-source contribution, spanning Graphify, PDA, Agent Orchestrator, Headroom, Continue, and other projects.
            </div>
          </div>

          {/* Integrated GitHub Activity Calendar */}
          <div className="pt-4">
            <ContributionGraph />
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02 / GRAPHIFY ARCHITECTURAL CASE STUDY                       */}
        {/* ============================================================ */}
        <section aria-labelledby="graphify-heading" className="space-y-8">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
            <div className="flex items-center space-x-2">
              <Cpu className="w-3.5 h-3.5 text-[#5CA8FF]" />
              <h2 id="graphify-heading">02 / GRAPHIFY ARCHITECTURE & INVESTIGATIONS</h2>
            </div>
            <a
              href="https://github.com/Graphify-Labs/graphify"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-[#5CA8FF] hover:underline"
            >
              <span>GRAPHIFY-LABS / GRAPHIFY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="border-t border-[#242830] pt-8 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <h3 className="text-3xl sm:text-4xl font-mono font-bold uppercase tracking-tight text-[#F4F1EA]">
                  Deterministic Code Intelligence
                </h3>
                <p className="text-[14px] text-[#9A9DA3] leading-relaxed">
                  Building code intelligence requires transforming arbitrary source files into deterministic symbol dependency graphs without silent failures.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4 font-mono text-[13px] border-l border-[#242830] pl-6 text-[#C5C8CE]">
                <div className="text-[11px] uppercase tracking-widest text-[#5CA8FF] font-semibold">
                  CORE MODULE CONTRIBUTIONS:
                </div>
                <div>• AST Extraction: Multi-language Tree-Sitter visitors (Python, JS, TS)</div>
                <div>• Symbol Resolution: Normalized cross-file tables across definition files</div>
                <div>• Graph Deduplication: Scoped carried-hyperedge deduplication & cycle checks</div>
                <div>• Build Cache: Incremental re-extraction preventing memory bloat</div>
              </div>
            </div>

            {/* Resolved Engineering Investigations (Zero Cards, Editorial Split) */}
            <div className="space-y-6 pt-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
                VERIFIED INVESTIGATION RECORDS:
              </div>

              <div className="divide-y divide-[#242830] border-t border-b border-[#242830]">
                {graphifyInvestigations.map((inv, idx) => (
                  <div key={idx} className="py-6 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <div className="flex items-center space-x-2 font-mono text-[13px] font-bold text-[#F4F1EA]">
                        <span className="text-[#5CA8FF]">INV_0{idx + 1}</span>
                        <span className="text-[#343943]">/</span>
                        <span>{inv.title}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#45D6A0]">
                        VERIFIED PR MERGED
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px] pt-1">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#666B73] block">
                          FAILURE MODE & INVESTIGATION:
                        </span>
                        <p className="text-[#9A9DA3] leading-relaxed">
                          {inv.problem}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#45D6A0] block">
                          ENGINEERING RESOLUTION:
                        </span>
                        <p className="text-[#C5C8CE] leading-relaxed">
                          {inv.change}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 / ECOSYSTEM CONTRIBUTIONS                                 */}
        {/* ============================================================ */}
        <section aria-labelledby="ecosystem-heading" className="space-y-8">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
            <div className="flex items-center space-x-2">
              <Workflow className="w-3.5 h-3.5 text-[#45D6A0]" />
              <h2 id="ecosystem-heading">03 / ECOSYSTEM REPOSITORY TIMELINE</h2>
            </div>
            <span>CONTRIBUTOR ARCHIVE</span>
          </div>

          <div className="divide-y divide-[#242830] border-t border-b border-[#242830]">
            {otherEcosystems.map((eco, idx) => (
              <div key={idx} className="py-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#45D6A0] font-semibold">
                      ECOSYSTEM RECORD 0{idx + 1} · {eco.organization}
                    </div>
                    <h3 className="text-2xl font-mono font-bold uppercase text-[#F4F1EA]">
                      {eco.repoName}
                    </h3>
                  </div>

                  <a
                    href={eco.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-mono uppercase tracking-wider text-[#9A9DA3] hover:text-[#F4F1EA]"
                  >
                    <span>VIEW REPOSITORY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-[14px] text-[#C5C8CE] leading-relaxed max-w-3xl">
                  {eco.description || eco.summary}
                </p>

                {eco.contributionAreas && eco.contributionAreas.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[12px] font-mono text-[#9A9DA3]">
                    {eco.contributionAreas.map((area: string, aIdx: number) => (
                      <div key={aIdx} className="flex items-start space-x-2">
                        <span className="text-[#45D6A0] select-none">—</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
