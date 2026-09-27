import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Cpu,
  FileText,
  Github,
  Layers,
  Terminal,
  AlertCircle,
  Lightbulb,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { ProjectNavigation } from "@/components/subpage/ProjectNavigation";
import { StatementBlock } from "@/components/primitives/Editorial";
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

  const projectAccents: Record<string, string> = {
    tracekit: "#9B7BFF",
    "ai-interviewer": "#FFB86B",
    "campus-lost-and-found": "#45D6A0",
    "e-pmsss": "#5CA8FF",
  };
  const accent = projectAccents[project.slug] || "#9B7BFF";

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
          className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#9A9DA3] hover:text-[#F4F1EA] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO WORK / 2026 ARCHIVE</span>
        </Link>
      </div>

      {/* Case Study Editorial Header */}
      <header className="pb-12 mb-20 border-b border-[#242830] space-y-8">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
          <div className="flex items-center space-x-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <span style={{ color: accent }} className="font-semibold">
              {isFlagship ? "FLAGSHIP ARCHITECTURE" : "ENGINEERING ARCHIVE"}
            </span>
            <span>·</span>
            <span>{project.category}</span>
          </div>
          <span>{project.year} · PRODUCTION RECORD</span>
        </div>

        {/* Project Title */}
        <div className="space-y-4 max-w-5xl">
          <h1 className="text-[clamp(2.75rem,5vw,5rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] leading-[0.98]">
            {project.title}
          </h1>

          <p className="text-[clamp(1.1rem,1.8vw,1.35rem)] text-[#C5C8CE] font-sans font-light leading-relaxed max-w-3xl pt-2">
            {project.tagline}
          </p>
        </div>

        {/* Stack & Verified Deployment Links */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-[#242830]">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#9A9DA3]">
            <span className="text-[#666B73] uppercase tracking-wider mr-1">STACK:</span>
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-0.5 border border-[#242830] text-[#F4F1EA]">
                {tech}
              </span>
            ))}
          </div>

          {(project.liveUrl || project.repositoryUrl || project.notionUrl) && (
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono uppercase tracking-wider">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 border font-semibold transition-colors"
                  style={{ borderColor: accent, color: accent }}
                >
                  <span>LIVE APP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-[#242830] text-[#F4F1EA] hover:border-[#666B73] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3 text-[#666B73]" />
                </a>
              )}
              {project.notionUrl && (
                <a
                  href={project.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-[#242830] text-[#9A9DA3] hover:text-[#F4F1EA] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>NOTION DOCS</span>
                  <ArrowUpRight className="w-3 h-3 text-[#666B73]" />
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Case Study Sticky / Split Editorial Chapters */}
      <article className="space-y-24 sm:space-y-32">
        {/* ============================================================ */}
        {/* 01 / PROBLEM                                                 */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#242830] pt-10">
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-2">
            <div className="text-3xl sm:text-4xl font-mono font-light tracking-tighter text-[#666B73]">
              01
            </div>
            <div className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA]">
              PROBLEM & MOTIVATION
            </div>
            <div className="text-[11px] font-mono text-[#666B73] uppercase tracking-widest">
              FAILURE MODES & INVARIANTS
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <StatementBlock
              statement={
                caseStudy?.motivation ||
                caseStudy?.whyBuilt ||
                caseStudy?.overview ||
                project.shortDescription
              }
              attribution={`${project.title} Architecture Brief`}
            />

            <div className="space-y-4 text-[15px] sm:text-[16px] text-[#C5C8CE] leading-relaxed">
              <p>{caseStudy?.overview || project.longDescription}</p>

              {caseStudy?.problem && (
                <div className="border-l-2 border-[#F4F1EA] pl-6 py-2 my-4 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA3] font-semibold block">
                    THE ARCHITECTURAL FAILURE POINT:
                  </span>
                  <p className="text-[15px] text-[#F4F1EA]">
                    {caseStudy.problem}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02 / SYSTEM PIPELINE                                         */}
        {/* ============================================================ */}
        {caseStudy?.architectureFlow && caseStudy.architectureFlow.length > 0 && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#242830] pt-10">
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-2">
              <div className="text-3xl sm:text-4xl font-mono font-light tracking-tighter text-[#666B73]">
                02
              </div>
              <div className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA]">
                SYSTEM PIPELINE
              </div>
              <div className="text-[11px] font-mono text-[#666B73] uppercase tracking-widest">
                DETERMINISTIC FLOW
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {caseStudy.solution && (
                <div className="space-y-2 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#666B73] block">
                    ENGINEERING SOLUTION:
                  </span>
                  <p className="text-[16px] text-[#F4F1EA] font-sans leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              )}

              {/* Connected Pipeline Flow */}
              <div className="border border-[#242830] bg-[#08090B] p-6 space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#666B73] pb-2 flex items-center space-x-2">
                  <Workflow className="w-3.5 h-3.5" style={{ color: accent }} />
                  <span>STEP-BY-STEP EXECUTION TRACE:</span>
                </div>

                <div className="space-y-4">
                  {caseStudy.architectureFlow.map((step, idx) => {
                    const colonIndex = step.indexOf(":");
                    const stepTitle =
                      colonIndex !== -1
                        ? step.slice(0, colonIndex).replace(/^\d+\.\s*/, "").trim()
                        : `STAGE 0${idx + 1}`;
                    const stepDesc =
                      colonIndex !== -1 ? step.slice(colonIndex + 1).trim() : step;

                    return (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-3 border-b border-[#242830] last:border-0"
                      >
                        <div className="sm:w-1/3 flex items-center space-x-2 font-mono text-[12px] font-bold uppercase text-[#F4F1EA]">
                          <span style={{ color: accent }}>0{idx + 1}</span>
                          <span>{stepTitle}</span>
                        </div>
                        <p className="sm:w-2/3 text-[13px] text-[#9A9DA3] font-sans leading-relaxed">
                          {stepDesc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 03 / IMPLEMENTATION CHAPTERS                                 */}
        {/* ============================================================ */}
        {caseStudy?.technicalImplementation && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#242830] pt-10">
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-2">
              <div className="text-3xl sm:text-4xl font-mono font-light tracking-tighter text-[#666B73]">
                03
              </div>
              <div className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA]">
                IMPLEMENTATION
              </div>
              <div className="text-[11px] font-mono text-[#666B73] uppercase tracking-widest">
                TECHNICAL CHAPTERS
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8 divide-y divide-[#242830]">
              {caseStudy.technicalImplementation.map((chapter, idx) => (
                <div key={idx} className={`${idx > 0 ? "pt-8" : ""} space-y-3`}>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#666B73] block">
                    CHAPTER 0{idx + 1}
                  </span>
                  <h4 className="text-xl font-mono font-bold text-[#F4F1EA]">
                    {chapter.title}
                  </h4>
                  <p className="text-[14px] text-[#C5C8CE] leading-relaxed">
                    {chapter.description}
                  </p>
                  {chapter.points && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[12px] font-mono text-[#9A9DA3]">
                      {chapter.points.map((p, pIdx) => (
                        <div key={pIdx} className="flex items-start space-x-2">
                          <span className="text-[#666B73] select-none">—</span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 04 / TRADEOFFS & ENGINEERING DECISIONS                       */}
        {/* ============================================================ */}
        {caseStudy?.engineeringDecisions && caseStudy.engineeringDecisions.length > 0 && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#242830] pt-10">
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-2">
              <div className="text-3xl sm:text-4xl font-mono font-light tracking-tighter text-[#666B73]">
                04
              </div>
              <div className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA]">
                TRADEOFFS
              </div>
              <div className="text-[11px] font-mono text-[#666B73] uppercase tracking-widest">
                ARCHITECTURAL DECISIONS
              </div>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#242830]">
              {caseStudy.engineeringDecisions.map((decision, idx) => (
                <div key={idx} className="py-6 first:pt-0 space-y-3">
                  <div className="flex items-baseline space-x-2 font-mono text-[12px] uppercase">
                    <span className="text-[#666B73]">DECISION 0{idx + 1}:</span>
                    <span className="text-[#F4F1EA] font-bold">{decision.decision}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] pt-1">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#666B73] block">
                        RATIONALE:
                      </span>
                      <p className="text-[#C5C8CE]">{decision.rationale}</p>
                    </div>
                    {decision.outcome && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF718C] block">
                          OUTCOME & ARCHITECTURAL IMPACT:
                        </span>
                        <p className="text-[#9A9DA3]">{decision.outcome}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 05 / RESULTS & LESSONS                                        */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#242830] pt-10">
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-2">
            <div className="text-3xl sm:text-4xl font-mono font-light tracking-tighter text-[#666B73]">
              05
            </div>
            <div className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA]">
              RESULT
            </div>
            <div className="text-[11px] font-mono text-[#666B73] uppercase tracking-widest">
              VALIDATION & LESSONS
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {caseStudy?.whatILearned && caseStudy.whatILearned.length > 0 && (
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666B73] block">
                  KEY LESSONS LEARNED:
                </span>
                <div className="space-y-2 text-[14px] text-[#C5C8CE]">
                  {caseStudy.whatILearned.map((lesson: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-[#45D6A0] font-mono font-bold">✓</span>
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {caseStudy?.futureDirection && caseStudy.futureDirection.length > 0 && (
              <div className="pt-6 border-t border-[#242830] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666B73] block">
                  FUTURE HORIZON:
                </span>
                <div className="space-y-1.5 text-[13px] text-[#9A9DA3]">
                  {caseStudy.futureDirection.map((direction: string, dIdx: number) => (
                    <div key={dIdx} className="flex items-start space-x-2">
                      <span className="text-[#666B73] select-none">—</span>
                      <span>{direction}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </article>

      {/* Project Navigation Footer */}
      <footer className="mt-20 pt-10 border-t border-[#242830]">
        <ProjectNavigation currentSlug={project.slug} />
      </footer>
    </PageShell>
  );
}
