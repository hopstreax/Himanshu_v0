import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  FileText,
  Github,
  Layers,
  Terminal,
  AlertCircle,
  Lightbulb,
  Compass,
  Workflow,
  Sparkles,
} from "lucide-react";
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

  const title = `${project.title} — Engineering Case Study`;
  const description = `${project.tagline}. ${project.shortDescription}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Engineering Case Study | Himanshu Patro`,
      description,
      url: `https://himanshupatro.dev/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Engineering Case Study | Himanshu Patro`,
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
  const caseStudy = project.caseStudy;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.shortDescription,
    programmingLanguage: project.technologies,
    author: {
      "@type": "Person",
      name: "Himanshu Patro",
      url: "https://himanshupatro.dev",
    },
    dateCreated: project.year,
    url: `https://himanshupatro.dev/projects/${project.slug}`,
    ...(project.repositoryUrl && { codeRepository: project.repositoryUrl }),
    ...(project.liveUrl && { targetProduct: { "@type": "WebApplication", url: project.liveUrl } }),
  };

  return (
    <PageShell activeSection="projects">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

        <p className="text-[15px] sm:text-[17px] text-ink-muted leading-relaxed font-mono uppercase tracking-editorial">
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

        {/* Verified Links & Project Artifacts */}
        {(project.liveUrl || project.repositoryUrl || project.notionUrl) && (
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-canvas border border-border-strong hover:bg-surface text-ink text-[11px] font-mono font-semibold uppercase tracking-wider transition-colors group"
                aria-label={`Open live deployment for ${project.title}`}
              >
                <span>LIVE APPLICATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-canvas border border-border-subtle hover:border-border-strong hover:bg-surface text-ink text-[11px] font-mono font-medium uppercase tracking-wider transition-colors group"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB REPO</span>
                <ArrowUpRight className="w-3 h-3 text-ink-subtle group-hover:text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            {project.notionUrl && (
              <a
                href={project.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-canvas border border-border-subtle hover:border-border-strong hover:bg-surface text-ink-muted hover:text-ink text-[11px] font-mono font-medium uppercase tracking-wider transition-colors group"
                aria-label={`Open Notion specification for ${project.title}`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>NOTION DOCS</span>
                <ArrowUpRight className="w-3 h-3 text-ink-subtle group-hover:text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        )}
      </header>

      {/* Case Study Content */}
      <article className="space-y-16">
        {/* 01: Overview & Positioning */}
        <section aria-labelledby="overview-heading" className="space-y-4">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Sparkles className="w-3.5 h-3.5 text-ink" />
            <h2 id="overview-heading">01 / OVERVIEW & POSITIONING</h2>
          </div>
          <p className="text-[16px] sm:text-[17px] text-ink leading-relaxed">
            {caseStudy?.overview || project.longDescription}
          </p>
        </section>

        {/* 02: The Core Engineering Problem */}
        <section aria-labelledby="problem-heading" className="pt-8 border-t border-border-subtle/80 space-y-4">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <AlertCircle className="w-3.5 h-3.5 text-ink" />
            <h2 id="problem-heading">02 / THE CORE ENGINEERING PROBLEM</h2>
          </div>
          <div className="p-5 rounded-xl border border-border-subtle bg-surface/50 text-[15px] text-ink-muted leading-relaxed">
            {caseStudy?.problem}
          </div>
        </section>

        {/* 03: Why I Built It */}
        {caseStudy?.whyBuilt && (
          <section aria-labelledby="why-heading" className="pt-8 border-t border-border-subtle/80 space-y-4">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <Lightbulb className="w-3.5 h-3.5 text-ink" />
              <h2 id="why-heading">03 / WHY I BUILT IT</h2>
            </div>
            <p className="text-[15px] sm:text-[16px] text-ink-muted leading-relaxed">
              {caseStudy.whyBuilt}
            </p>
          </section>
        )}

        {/* 04: What The System Does */}
        {caseStudy?.whatSystemDoes && (
          <section aria-labelledby="capabilities-heading" className="pt-8 border-t border-border-subtle/80 space-y-5">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <Layers className="w-3.5 h-3.5 text-ink" />
              <h2 id="capabilities-heading">04 / WHAT THE SYSTEM DOES</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {caseStudy.whatSystemDoes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-border-subtle bg-canvas-subtle/30 flex items-start space-x-3"
                >
                  <span className="text-[11px] font-mono text-ink-subtle mt-0.5 shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-[13px] text-ink leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 05: Architecture & Execution Flow */}
        {caseStudy?.architectureFlow && (
          <section aria-labelledby="flow-heading" className="pt-8 border-t border-border-subtle/80 space-y-5">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <Workflow className="w-3.5 h-3.5 text-ink" />
              <h2 id="flow-heading">05 / ARCHITECTURE & EXECUTION FLOW</h2>
            </div>

            <div className="p-6 rounded-xl border border-border-subtle bg-canvas-subtle/40 space-y-4">
              <div className="space-y-3">
                {caseStudy.architectureFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg border border-border-subtle/70 bg-surface/70 font-mono text-[12px] sm:text-[13px] text-ink leading-relaxed"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 06: Technical Implementation */}
        {caseStudy?.technicalImplementation && (
          <section aria-labelledby="implementation-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <Cpu className="w-3.5 h-3.5 text-ink" />
              <h2 id="implementation-heading">06 / TECHNICAL IMPLEMENTATION</h2>
            </div>

            <div className="space-y-6">
              {caseStudy.technicalImplementation.map((section, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-border-subtle bg-canvas-subtle/30 space-y-3"
                >
                  <h3 className="text-[16px] font-semibold text-ink">
                    {section.title}
                  </h3>
                  <p className="text-[14px] text-ink-muted leading-relaxed">
                    {section.description}
                  </p>

                  {section.points && (
                    <ul className="pt-3 border-t border-border-subtle/50 space-y-1.5 text-[13px] text-ink-muted">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-ink-muted mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 07: Key Engineering Decisions */}
        {caseStudy?.engineeringDecisions && caseStudy.engineeringDecisions.length > 0 && (
          <section aria-labelledby="decisions-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <Terminal className="w-3.5 h-3.5 text-ink" />
              <h2 id="decisions-heading">07 / KEY ENGINEERING DECISIONS</h2>
            </div>

            <div className="space-y-4">
              {caseStudy.engineeringDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border-subtle bg-surface/50 space-y-2.5"
                >
                  <div className="text-[14px] font-semibold text-ink font-mono uppercase">
                    {decision.decision}
                  </div>
                  <div className="text-[13px] text-ink-muted leading-relaxed">
                    <span className="font-semibold text-ink">Rationale: </span>
                    {decision.rationale}
                  </div>
                  {decision.outcome && (
                    <div className="text-[13px] text-ink-muted leading-relaxed pt-2 border-t border-border-subtle/50">
                      <span className="font-semibold text-ink">Outcome: </span>
                      {decision.outcome}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 08: Challenges & Solutions */}
        {caseStudy?.challengesAndSolutions && caseStudy.challengesAndSolutions.length > 0 && (
          <section aria-labelledby="challenges-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <AlertCircle className="w-3.5 h-3.5 text-ink" />
              <h2 id="challenges-heading">08 / CHALLENGES & HOW I SOLVED THEM</h2>
            </div>

            <div className="space-y-4">
              {caseStudy.challengesAndSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border-subtle bg-canvas-subtle/20 space-y-3"
                >
                  <div className="text-[14px] font-semibold text-ink">
                    Challenge {idx + 1}: {item.challenge}
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface/80 border border-border-subtle/70 text-[13px] text-ink-muted leading-relaxed">
                    <span className="font-semibold text-ink">Solution: </span>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 09: Current State & Verification */}
        {caseStudy?.currentState && (
          <section aria-labelledby="state-heading" className="pt-8 border-t border-border-subtle/80 space-y-4">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <CheckCircle2 className="w-3.5 h-3.5 text-ink" />
              <h2 id="state-heading">09 / CURRENT STATE & DEPLOYMENT</h2>
            </div>
            <p className="text-[15px] text-ink leading-relaxed">
              {caseStudy.currentState}
            </p>
          </section>
        )}

        {/* 10: What I Learned */}
        {caseStudy?.whatILearned && (
          <section aria-labelledby="learned-heading" className="pt-8 border-t border-border-subtle/80 space-y-4">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <Lightbulb className="w-3.5 h-3.5 text-ink" />
              <h2 id="learned-heading">10 / WHAT I LEARNED</h2>
            </div>

            <ul className="space-y-2.5 text-[14px] text-ink-muted list-disc list-outside ml-4">
              {caseStudy.whatILearned.map((lesson, idx) => (
                <li key={idx} className="leading-relaxed">
                  {lesson}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 11: Future Direction & Roadmap */}
        {caseStudy?.futureDirection && (
          <section aria-labelledby="future-heading" className="pt-8 border-t border-border-subtle/80 space-y-4">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <Compass className="w-3.5 h-3.5 text-ink" />
              <h2 id="future-heading">11 / FUTURE DIRECTION</h2>
            </div>

            <ul className="space-y-2 text-[13px] text-ink-muted list-disc list-outside ml-4">
              {caseStudy.futureDirection.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {/* Inter-project navigation */}
      <ProjectNavigation currentSlug={project.slug} />
    </PageShell>
  );
}
