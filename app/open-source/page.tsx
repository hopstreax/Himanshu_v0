import React from "react";
import { ArrowUpRight, GitPullRequest, GitFork, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialHeader } from "@/components/subpage/EditorialHeader";
import { graphifyStory } from "@/data/openSource";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Open-source contributions across Graphify: AST analysis, symbol graph extraction, incremental processing, and 30+ merged pull requests.",
  openGraph: {
    title: "Open Source — Himanshu Patro",
    description:
      "Open-source contributions across Graphify: AST analysis, symbol graph extraction, incremental processing, and 30+ merged pull requests.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source — Himanshu Patro",
    description:
      "Open-source contributions across Graphify: AST analysis, symbol graph extraction, incremental processing, and 30+ merged pull requests.",
  },
};

export default function OpenSourcePage() {
  return (
    <PageShell activeSection="open-source">
      <EditorialHeader
        sectionNumber="03 / OPEN SOURCE"
        title="Open Source Contributions"
        subtitle={graphifyStory.summary}
        badge="GRAPHIFY CONTRIBUTOR"
      />

      <div className="flex flex-col space-y-16">
        {/* Metrics Banner */}
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

        {/* Narrative & Architectural Scope */}
        <section aria-labelledby="narrative-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-4">
            <GitFork className="w-3.5 h-3.5 text-ink" />
            <h2 id="narrative-heading">THE GRAPHIFY ENGINE</h2>
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

        {/* Core Contribution Focus Areas */}
        <section aria-labelledby="areas-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <Cpu className="w-3.5 h-3.5 text-ink" />
            <h2 id="areas-heading">CORE PIPELINE WORK & CONTRIBUTION AREAS</h2>
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

        {/* Notable Pull Requests & Engineering Highlights */}
        <section aria-labelledby="notable-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <Terminal className="w-3.5 h-3.5 text-ink" />
            <h2 id="notable-heading">NOTABLE ENGINEERING CONTRIBUTIONS</h2>
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

        {/* External Link Callout */}
        <div className="p-6 rounded-xl border border-border-subtle bg-surface/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-ink shrink-0" />
            <div>
              <div className="text-[14px] font-semibold text-ink">
                Verified GitHub Open Source Activity
              </div>
              <div className="text-[12px] text-ink-muted">
                Explore PR history, commit signatures, and repository contributions.
              </div>
            </div>
          </div>

          <a
            href={graphifyStory.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors shrink-0 group"
          >
            <span>VIEW ON GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </PageShell>
  );
}
