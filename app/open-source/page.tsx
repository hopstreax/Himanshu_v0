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
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialHeader } from "@/components/subpage/EditorialHeader";
import { ContributionGraph } from "@/components/subpage/ContributionGraph";
import {
  graphifyStory,
  openSourceRepositories,
  graphifyInvestigations,
  ecosystemContributions,
} from "@/data/openSource";
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
  return (
    <PageShell activeSection="open-source">
      <EditorialHeader
        sectionNumber="03 / OPEN SOURCE"
        title="Open Source Engineering"
        subtitle="Contributing to real-world code intelligence engines, multi-agent frameworks, and developer infrastructure."
        badge="PRIMARY OSS PORTFOLIO"
      />

      <div className="flex flex-col space-y-16">
        {/* 1. Verified Live GitHub Contribution Activity Graph */}
        <section aria-labelledby="activity-heading">
          <h2 id="activity-heading" className="sr-only">
            GitHub Contribution Activity
          </h2>
          <ContributionGraph />
        </section>

        {/* 2. Open Source Journey & Engineering Essay */}
        <section aria-labelledby="journey-heading" className="space-y-4">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <BookOpen className="w-3.5 h-3.5 text-ink" />
            <h2 id="journey-heading">01 / OPEN SOURCE JOURNEY & PHILOSOPHY</h2>
          </div>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-ink-muted leading-relaxed">
            {graphifyStory.journeyEssay?.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* 3. Headline Metrics Banner */}
        <section aria-labelledby="metrics-heading" className="pt-8 border-t border-border-subtle/80">
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

        {/* 4. Primary Deep Dive: Graphify Engine Case Study */}
        <section aria-labelledby="graphify-heading" className="pt-8 border-t border-border-subtle/80 space-y-8">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <GitFork className="w-3.5 h-3.5 text-ink" />
            <h2 id="graphify-heading">02 / PRIMARY CASE STUDY — THE GRAPHIFY ENGINE</h2>
          </div>

          <div className="p-6 rounded-xl border border-border-strong bg-canvas-subtle/40 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-surface border border-border-subtle font-semibold text-ink">
                  CORE CONTRIBUTOR · 30+ MERGED PRS
                </span>
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-ink mt-2">
                  Graphify: Code Intelligence & Symbol Graphs
                </h3>
              </div>
              <a
                href={graphifyStory.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-canvas border border-border-subtle hover:border-border-strong text-ink text-[11px] font-mono font-medium uppercase tracking-wider transition-colors shrink-0 group"
              >
                <span>GRAPHIFY REPO</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p className="text-[15px] sm:text-[16px] text-ink-muted leading-relaxed">
              {graphifyStory.longDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {graphifyStory.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-ink border border-border-subtle/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Graphify Pipeline Scope */}
          <div className="space-y-4">
            <div className="text-[12px] font-mono uppercase tracking-wider text-ink font-semibold flex items-center space-x-2">
              <Cpu className="w-3.5 h-3.5 text-ink" />
              <span>Investigated Pipeline Areas</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {graphifyStory.coreAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-border-subtle bg-canvas-subtle/20 flex items-start space-x-2.5"
                >
                  <span className="text-[10px] font-mono text-ink-subtle mt-0.5 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-[13px] font-medium text-ink leading-snug">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Representative Engineering Investigations */}
          <div className="space-y-6 pt-4">
            <div className="text-[12px] font-mono uppercase tracking-wider text-ink font-semibold flex items-center space-x-2">
              <Workflow className="w-3.5 h-3.5 text-ink" />
              <span>Representative Engineering Investigations</span>
            </div>

            <div className="space-y-6">
              {graphifyInvestigations.map((inv, idx) => (
                <article
                  key={idx}
                  className="p-6 rounded-xl border border-border-subtle bg-surface/40 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-border-subtle/60 pb-3">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                        {inv.scope} {inv.prReference && `· ${inv.prReference}`}
                      </div>
                      <h4 className="text-[17px] sm:text-[18px] font-semibold text-ink mt-0.5">
                        Investigation {idx + 1}: {inv.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1 sm:mt-0">
                      {inv.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-canvas text-ink-subtle border border-border-subtle/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] leading-relaxed">
                    <div className="p-4 rounded-lg bg-canvas-subtle/30 border border-border-subtle/70 space-y-1.5">
                      <div className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider">
                        1. Problem & Invariant Violation
                      </div>
                      <p className="text-ink-muted">{inv.problem}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-canvas-subtle/30 border border-border-subtle/70 space-y-1.5">
                      <div className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider">
                        2. Investigation & Root Cause
                      </div>
                      <p className="text-ink-muted">{inv.investigation}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-canvas-subtle/30 border border-border-subtle/70 space-y-1.5">
                      <div className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider">
                        3. Structural Code Change
                      </div>
                      <p className="text-ink-muted">{inv.change}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-canvas-subtle/30 border border-border-subtle/70 space-y-1.5">
                      <div className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider">
                        4. Regression Test & Validation
                      </div>
                      <p className="text-ink-muted">{inv.validation}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border-subtle/50 flex items-start space-x-2 text-[13px]">
                    <CheckCircle2 className="w-4 h-4 text-ink mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider mr-1.5">
                        Result:
                      </span>
                      <span className="text-ink-muted">{inv.result}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Ecosystem Repositories & Engineering Work */}
        <section aria-labelledby="ecosystem-heading" className="pt-8 border-t border-border-subtle/80 space-y-8">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <FolderGit2 className="w-3.5 h-3.5 text-ink" />
            <h2 id="ecosystem-heading">03 / ECOSYSTEM CONTRIBUTIONS & WORK</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ecosystemContributions.map((eco) => (
              <article
                key={eco.repoName}
                className="p-6 rounded-xl border border-border-subtle bg-canvas-subtle/30 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-ink-subtle">
                    <span className="uppercase">{eco.organization}</span>
                    <span>{eco.role}</span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <h3 className="text-[18px] font-semibold text-ink">
                      {eco.repoName}
                    </h3>
                    <a
                      href={eco.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[11px] font-mono text-ink hover:text-ink-muted transition-colors group"
                      aria-label={`View ${eco.repoName} on GitHub`}
                    >
                      <span>REPO</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  <p className="text-[13px] text-ink-muted leading-relaxed">
                    {eco.summary}
                  </p>

                  <div className="p-3.5 rounded-lg bg-surface/60 border border-border-subtle/60 space-y-1.5 text-[12px]">
                    <div className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider">
                      Technical Work:
                    </div>
                    <p className="text-ink-muted leading-relaxed">
                      {eco.technicalWork}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-surface/60 border border-border-subtle/60 space-y-1.5 text-[12px]">
                    <div className="font-semibold text-ink font-mono uppercase text-[10px] tracking-wider">
                      What I Learned:
                    </div>
                    <p className="text-ink-muted leading-relaxed">
                      {eco.whatILearned}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border-subtle/50 flex flex-wrap gap-1">
                  {eco.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface text-ink-subtle border border-border-subtle/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. Repository Ecosystem Summary List */}
        <section aria-labelledby="repos-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Terminal className="w-3.5 h-3.5 text-ink" />
            <h2 id="repos-heading">04 / COMPLETE OPEN SOURCE ECOSYSTEM</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {openSourceRepositories.map((repo) => (
              <div
                key={repo.url}
                className="p-4 rounded-lg border border-border-subtle bg-canvas-subtle/20 flex flex-col justify-between space-y-2.5"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-ink-subtle">
                    {repo.organization}
                  </div>
                  <h4 className="text-[15px] font-semibold text-ink mt-0.5">
                    {repo.name}
                  </h4>
                  <p className="text-[12px] text-ink-muted leading-relaxed mt-1">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border-subtle/40 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-ink-subtle">
                    {repo.focusAreas[0]}
                  </span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[10px] font-mono font-medium text-ink hover:text-ink-muted transition-colors group"
                  >
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Verification Callout */}
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
      </div>
    </PageShell>
  );
}
