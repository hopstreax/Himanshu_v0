import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Archive } from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialHeader } from "@/components/subpage/EditorialHeader";
import { flagshipProjects, secondaryProjects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Himanshu Patro",
  description:
    "Flagship engineering work including TraceKit (Autonomous AI testing) and AI Interviewer, alongside full-stack application archives.",
};

export default function ProjectsPage() {
  return (
    <PageShell activeSection="projects">
      <EditorialHeader
        sectionNumber="02 / PROJECTS"
        title="Selected Systems"
        subtitle="Autonomous testing orchestration, generative AI simulation platforms, and full-stack software applications."
        badge="PORTFOLIO ARCHIVE"
      />

      <div className="flex flex-col space-y-16">
        {/* Section 1: Flagship Engineering Systems */}
        <section aria-labelledby="flagship-heading">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-8">
            <Sparkles className="w-3.5 h-3.5 text-ink" />
            <h2 id="flagship-heading">FLAGSHIP WORK</h2>
          </div>

          <div className="space-y-10">
            {flagshipProjects.map((project) => (
              <article
                key={project.slug}
                className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-canvas-subtle/40 hover:bg-canvas-subtle/70 transition-colors flex flex-col space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-surface text-ink font-medium">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-ink-subtle">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-[24px] sm:text-[28px] font-semibold text-ink tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[13px] font-mono uppercase tracking-editorial text-ink-muted mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-[14px] sm:text-[15px] text-ink-muted leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 text-[13px] text-ink-muted list-disc list-outside ml-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                {/* Tech & Case Study Link */}
                <div className="pt-4 border-t border-border-subtle/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors shrink-0 group"
                  >
                    <span>READ CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: Secondary / Archived Work */}
        <section aria-labelledby="secondary-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <Archive className="w-3.5 h-3.5" />
            <h2 id="secondary-heading">SECONDARY / PREVIOUS APPLICATIONS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {secondaryProjects.map((project) => (
              <article
                key={project.slug}
                className="p-5 rounded-lg border border-border-subtle/70 bg-canvas-subtle/20 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-ink-subtle mb-2">
                    <span className="uppercase">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-[18px] font-semibold text-ink">
                    {project.title}
                  </h3>

                  <p className="text-[13px] text-ink-muted leading-relaxed mt-1.5">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle/50 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface text-ink-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center space-x-1 text-[10px] font-mono font-medium uppercase tracking-wider text-ink hover:text-ink-muted transition-colors"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
