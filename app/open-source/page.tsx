import React from "react";
import {
  ArrowUpRight,
  GitPullRequest,
  GitFork,
  ShieldCheck,
  Terminal,
  Cpu,
  FolderGit2,
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialHeader } from "@/components/subpage/EditorialHeader";
import { ContributionGraph } from "@/components/subpage/ContributionGraph";
import { graphifyStory, openSourceRepositories } from "@/data/openSource";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Open-source contributions across Graphify, Agent Orchestrator, PDA, Continue, and Headroom. Multi-language AST analysis and 30+ merged pull requests.",
  alternates: {
    canonical: "/open-source",
  },
  openGraph: {
    title: "Open Source — Himanshu Patro",
    description:
      "Open-source contributions across Graphify, Agent Orchestrator, PDA, Continue, and Headroom. Multi-language AST analysis and 30+ merged pull requests.",
    url: "https://himanshupatro.dev/open-source",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source — Himanshu Patro",
    description:
      "Open-source contributions across Graphify, Agent Orchestrator, PDA, Continue, and Headroom. Multi-language AST analysis and 30+ merged pull requests.",
  },
};

export default function OpenSourcePage() {
  return (
    <PageShell activeSection="open-source">
      <EditorialHeader
        sectionNumber="03 / OPEN SOURCE"
        title="Open Source Contributions"
        subtitle="Contributing to real-world code intelligence engines, multi-agent frameworks, and developer ecosystems."
        badge="GRAPHIFY CONTRIBUTOR"
      />

      <div className="flex flex-col space-y-16">
        {/* 1. Verified GitHub Contribution Activity Graph */}
        <section aria-labelledby="activity-heading">
          <h2 id="activity-heading" className="sr-only">
            GitHub Contribution Activity
          </h2>
          <ContributionGraph />
        </section>

        {/* 2. Headline Metrics Banner */}
        <section aria-labelledby="metrics-heading">
          <h2 id="metrics-heading" className="sr-only">
            Contribution Metrics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {graphifyStory.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border-subtle bg-canvas-subtle/50 flex flex-col space-y-1"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                  {metric.label}
                </div>
                <div className="text-[26px] sm:text-[30px] font-semibold text-ink tracking-tight">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Open Source Repositories & Contribution Ecosystem */}
        <section aria-labelledby="repos-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <FolderGit2 className="w-3.5 h-3.5 text-ink" />
            <h2 id="repos-heading">CONTRIBUTION REPOSITORIES & ECOSYSTEM</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {openSourceRepositories.map((repo) => (
              <article
                key={repo.url}
                className={`p-5 rounded-xl border flex flex-col justify-between space-y-4 transition-colors ${
                  repo.isPrimary
                    ? "border-border-strong bg-canvas-subtle/70"
                    : "border-border-subtle bg-canvas-subtle/30 hover:bg-canvas-subtle/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-ink-subtle mb-2">
                    <span className="uppercase">{repo.organization}</span>
                    {repo.isPrimary && (
                      <span className="font-semibold text-ink px-2 py-0.5 rounded bg-surface border border-border-subtle">
                        PRIMARY WORK
                      </span>
                    )}
                  </div>

                  <h3 className="text-[18px] font-semibold text-ink">
                    {repo.name}
                  </h3>

                  <p className="text-[13px] text-ink-muted leading-relaxed mt-1.5">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle/50 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {repo.focusAreas.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface text-ink-subtle"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-mono font-medium uppercase tracking-wider text-ink hover:text-ink-muted transition-colors shrink-0 ml-2 group"
                    aria-label={`View ${repo.name} repository on GitHub`}
                  >
                    <span>REPO</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Detailed Graphify Story & Architectural Scope */}
        <section aria-labelledby="narrative-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-4">
            <GitFork className="w-3.5 h-3.5 text-ink" />
            <h2 id="narrative-heading">THE GRAPHIFY ENGINE — CORE CONTRIBUTION WORK</h2>
          </div>

          <p className="text-[16px] sm:text-[17px] text-ink leading-relaxed">
            {graphifyStory.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {graphifyStory.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded bg-surface text-ink border border-border-subtle/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 5. Core Pipeline Work & Contribution Areas */}
        <section aria-labelledby="areas-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <Cpu className="w-3.5 h-3.5 text-ink" />
            <h2 id="areas-heading">GRAPHIFY PIPELINE CONTRIBUTIONS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {graphifyStory.coreAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border-subtle/80 bg-canvas-subtle/30 flex items-start space-x-3"
              >
                <span className="text-[11px] font-mono text-ink-subtle mt-0.5">
                  0{idx + 1}
                </span>
                <span className="text-[14px] font-medium text-ink leading-snug">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Notable Pull Requests & Engineering Highlights */}
        <section aria-labelledby="notable-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <Terminal className="w-3.5 h-3.5 text-ink" />
            <h2 id="notable-heading">NOTABLE PULL REQUEST HIGHLIGHTS</h2>
          </div>

          <ul className="space-y-3.5 text-[14px] text-ink-muted list-disc list-outside ml-4">
            {graphifyStory.notableWork.map((work, idx) => (
              <li key={idx} className="leading-relaxed">
                <span className="text-ink font-medium">{work.split(" — ")[0]}</span>
                {work.includes(" — ") && ` — ${work.split(" — ")[1]}`}
              </li>
            ))}
          </ul>
        </section>

        {/* 7. External Link Callout to Graphify Repository */}
        <div className="p-6 rounded-xl border border-border-subtle bg-surface/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-ink shrink-0" />
            <div>
              <div className="text-[14px] font-semibold text-ink">
                Verified GitHub Open Source Activity
              </div>
              <div className="text-[12px] text-ink-muted">
                Explore PR history, commit signatures, and repository contributions on GitHub.
              </div>
            </div>
          </div>

          <a
            href={graphifyStory.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors shrink-0 group"
          >
            <span>VIEW GRAPHIFY REPO</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </PageShell>
  );
}
