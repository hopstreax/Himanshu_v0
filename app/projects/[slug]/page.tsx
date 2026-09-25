import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Cpu, Layers, Terminal } from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { ProjectNavigation } from "@/components/subpage/ProjectNavigation";
import { projects } from "@/data/projects";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const title = `${project.title} — Case Study`;
  const description = `${project.tagline}. ${project.shortDescription}`;

  return {
    title,
    description,
    openGraph: {
      title: `${project.title} — Case Study | Himanshu Patro`,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study | Himanshu Patro`,
      description,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isFlagship = project.tier === "flagship";

  return (
    <PageShell activeSection="projects">
      {/* Back to Projects Index */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-1.5 text-[11px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>ALL PROJECTS</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="pb-8 mb-12 border-b border-border-subtle/80 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                isFlagship
                  ? "border-border-strong bg-canvas-subtle font-semibold text-ink"
                  : "border-border-subtle bg-surface text-ink-muted"
              }`}
            >
              {isFlagship ? "FLAGSHIP SYSTEM" : "SECONDARY ARCHIVE"}
            </span>
            <span className="text-[11px] font-mono text-ink-subtle">
              {project.category}
            </span>
          </div>
          <span className="text-[11px] font-mono text-ink-subtle">
            {project.year}
          </span>
        </div>

        <h1 className="text-[30px] sm:text-[40px] md:text-[46px] font-semibold tracking-tight text-ink leading-tight">
          {project.title}
        </h1>

        <p className="text-[16px] sm:text-[18px] text-ink-muted leading-relaxed font-mono uppercase tracking-editorial">
          {project.tagline}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-surface text-ink border border-border-subtle/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Case Study Body */}
      {isFlagship ? (
        /* Rich Flagship Case Study Layout */
        <article className="space-y-16">
          {/* Executive Summary */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-3">
              01 / OVERVIEW & POSITIONING
            </h2>
            <p className="text-[16px] sm:text-[17px] text-ink leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          {/* Problem Statement */}
          <section aria-labelledby="problem-heading" className="pt-8 border-t border-border-subtle/80">
            <h2 id="problem-heading" className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-3">
              02 / THE CORE ENGINEERING PROBLEM
            </h2>
            <div className="text-[15px] text-ink-muted leading-relaxed space-y-3">
              {project.slug === "tracekit" ? (
                <>
                  <p>
                    End-to-end browser test suites are notoriously fragile. Asynchronous DOM rendering, dynamic hydration steps, and micro-delays frequently trigger false-positive test failures that consume hours of developer time in manual triage.
                  </p>
                  <p>
                    Existing tools either record dumb video clips that require manual playback inspection or throw opaque assertion timeouts without root-cause diagnostics.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Standard interview preparation tools are fundamentally static: candidates answer pre-recorded prompt questions with zero live verbal evaluation, zero dynamic difficulty adaptation, and superficial keyword-matching assessments.
                  </p>
                  <p>
                    Simulating real-world technical and HR interviews requires an intelligent interactive loop: listening to spoken responses, assessing technical clarity, and dynamically generating relevant follow-up questions.
                  </p>
                </>
              )}
            </div>
          </section>

          {/* Technical Approach & Architecture */}
          <section aria-labelledby="architecture-heading" className="pt-8 border-t border-border-subtle/80">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
              <Cpu className="w-3.5 h-3.5 text-ink" />
              <h2 id="architecture-heading">03 / TECHNICAL ARCHITECTURE & WHAT I BUILT</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-border-subtle bg-canvas-subtle/40 flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center space-x-2 text-ink font-semibold text-[14px]">
                    <CheckCircle2 className="w-4 h-4 text-ink-muted shrink-0" />
                    <span>Implementation Milestone {idx + 1}</span>
                  </div>
                  <p className="text-[13px] text-ink-muted leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-[15px] text-ink-muted leading-relaxed space-y-3">
              {project.slug === "tracekit" ? (
                <p>
                  TraceKit introduces an agentic testing pipeline. Headless browser runs under Playwright are continuously monitored with ambient DOM and network mutation hooks. When an assertion breaks, TraceKit captures the full diagnostic trace, performs root-cause heuristics in Python, and suggests deterministic fixes.
                </p>
              ) : (
                <p>
                  AI Interviewer connects a Python speech-recognition ingestion pipeline with fine-tuned Llama reasoning engines. Candidate responses are evaluated across three dimensions: communication clarity, technical precision, and conceptual depth, with intelligent prompt orchestration adapting questions on the fly.
                </p>
              )}
            </div>
          </section>

          {/* Key Engineering Decisions */}
          <section aria-labelledby="decisions-heading" className="pt-8 border-t border-border-subtle/80">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-4">
              <Terminal className="w-3.5 h-3.5 text-ink" />
              <h2 id="decisions-heading">04 / NOTABLE ENGINEERING DECISIONS</h2>
            </div>

            <div className="space-y-4 text-[14px] text-ink-muted leading-relaxed">
              {project.slug === "tracekit" ? (
                <div className="p-4 rounded-lg bg-surface/50 border border-border-subtle/80 space-y-2">
                  <div className="font-semibold text-ink text-[13px] font-mono uppercase">
                    Decoupled Execution & Diagnostic Pipeline
                  </div>
                  <p>
                    Rather than embedding diagnostic evaluation into the browser runtime (which causes observer effects and slows down page execution), TraceKit exports lightweight event streams and executes triage asynchronously.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-surface/50 border border-border-subtle/80 space-y-2">
                  <div className="font-semibold text-ink text-[13px] font-mono uppercase">
                    Low-Latency Verbal Streaming
                  </div>
                  <p>
                    Structured prompt engineering minimizes round-trip latency, ensuring candidate interview flow remains conversational without awkward multi-second processing pauses.
                  </p>
                </div>
              )}
            </div>
          </section>
        </article>
      ) : (
        /* Secondary Project Detail Layout */
        <article className="space-y-10">
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-3">
              PROJECT OVERVIEW
            </h2>
            <p className="text-[15px] sm:text-[16px] text-ink leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          <section aria-labelledby="highlights-heading" className="pt-6 border-t border-border-subtle/80">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-4">
              <Layers className="w-3.5 h-3.5 text-ink" />
              <h2 id="highlights-heading">KEY ACHIEVEMENTS & IMPLEMENTATION</h2>
            </div>

            <ul className="space-y-3 text-[14px] text-ink-muted list-disc list-outside ml-4">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        </article>
      )}

      {/* Inter-project navigation */}
      <ProjectNavigation currentSlug={project.slug} />
    </PageShell>
  );
}
