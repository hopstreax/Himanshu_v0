import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, FolderGit2 } from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering project archive of Himanshu Patro: TraceKit (Autonomous AI browser testing), AI Interviewer, Campus Lost & Found, and e-PMSSS.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — Himanshu Patro",
    description:
      "Engineering project archive of Himanshu Patro: TraceKit (Autonomous AI browser testing), AI Interviewer, Campus Lost & Found, and e-PMSSS.",
    url: "https://himanshupatro.dev/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Himanshu Patro",
    description:
      "Engineering project archive of Himanshu Patro: TraceKit (Autonomous AI browser testing), AI Interviewer, Campus Lost & Found, and e-PMSSS.",
  },
};

export default function ProjectsPage() {
  return (
    <PageShell activeSection="projects">
      {/* Editorial Opening / Hero Statement */}
      <header className="pb-10 mb-14 border-b border-border-subtle/80 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2.5 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80 font-medium">
              PROJECTS / 01
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
              PORTFOLIO ARCHIVE
            </span>
          </div>
          <span className="text-[11px] font-mono text-ink-subtle hidden sm:inline-block">
            4 SELECTED SYSTEMS
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-ink leading-[1.1]">
            Selected Systems
          </h1>

          <p className="text-[16px] sm:text-[19px] text-ink-muted leading-relaxed font-sans max-w-3xl">
            Autonomous testing orchestration, generative AI simulation platforms, and full-stack software applications. Each project is documented as a complete engineering case study.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-ink-subtle border-t border-border-subtle/50">
          <span>FLAGSHIPS: TRACEKIT & AI INTERVIEWER</span>
          <span className="hidden sm:inline">·</span>
          <span>ARCHIVED: CAMPUS RECOVERY & GOVTECH</span>
          <span className="hidden sm:inline">·</span>
          <span>VERIFIED: PRODUCTION CODE REPOSITORIES</span>
        </div>
      </header>

      {/* The Editorial Project Archive (List Pattern, No Box Cards) */}
      <section aria-labelledby="archive-heading" className="space-y-6">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
          <div className="flex items-center space-x-2">
            <FolderGit2 className="w-3.5 h-3.5 text-ink" />
            <h2 id="archive-heading">ENGINEERING ARCHIVE DIRECTORY</h2>
          </div>
          <span>CHRONOLOGICAL INDEX</span>
        </div>

        <div className="divide-y divide-border-subtle border-t-2 border-ink border-b border-border-subtle">
          {projects.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block py-8 sm:py-10 px-2 -mx-2 hover:bg-canvas-subtle/30 rounded-lg transition-all"
            >
              <div className="flex flex-col space-y-4">
                {/* Meta Row: Number, Category, Year */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-ink">
                      0{idx + 1}
                    </span>
                    <span className="text-ink-subtle">/</span>
                    <span className="uppercase tracking-wider text-ink-subtle">
                      {project.category}
                    </span>
                    {project.tier === "flagship" && (
                      <span className="hidden sm:inline-block px-2 py-0.2 rounded bg-surface border border-border-subtle text-[9px] font-semibold text-ink uppercase tracking-widest">
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  <span className="text-ink-subtle">{project.year}</span>
                </div>

                {/* Title & Arrow */}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[26px] sm:text-[34px] md:text-[40px] font-semibold text-ink tracking-tight group-hover:translate-x-1.5 transition-transform duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-[12px] font-mono font-semibold uppercase tracking-wider text-ink shrink-0 group-hover:text-ink transition-colors">
                    <span className="hidden sm:inline">CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Short Thesis */}
                <p className="text-[15px] sm:text-[16px] text-ink-muted leading-relaxed font-sans max-w-3xl">
                  {project.tagline}
                </p>

                {/* Tech Pills & Highlights Teaser */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] font-mono">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded bg-surface text-ink-muted border border-border-subtle/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-ink-subtle group-hover:text-ink-muted transition-colors">
                    {project.highlights[0]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross Link to Open Source */}
      <section className="pt-16">
        <div className="border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
              COMPILER & AST ANALYSIS
            </div>
            <div className="text-[15px] font-semibold text-ink">
              Looking for Open Source Systems Engineering?
            </div>
            <p className="text-[13px] text-ink-muted max-w-xl">
              Explore 30+ maintainer-reviewed pull requests to Graphify across Tree-Sitter parsers, symbol tables, and incremental build pipelines.
            </p>
          </div>

          <Link
            href="/open-source"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-md bg-canvas border border-border-strong text-[11px] font-mono font-semibold tracking-widest uppercase text-ink hover:bg-surface transition-colors shrink-0 group"
          >
            <span>VIEW OPEN SOURCE</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
