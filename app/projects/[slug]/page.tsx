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
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { ProjectNavigation } from "@/components/subpage/ProjectNavigation";
import { EditorialSection, SectionIndex, StatementBlock, MetadataRow } from "@/components/primitives/Editorial";
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
          <span>PROJECT ARCHIVE</span>
        </Link>
      </div>

      {/* Case Study Editorial Header */}
      <header className="pb-10 mb-14 border-b border-border-subtle/80 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                isFlagship
                  ? "border-border-strong bg-canvas-subtle font-semibold text-ink"
                  : "border-border-subtle bg-surface text-ink-muted"
              }`}
            >
              {isFlagship ? "FLAGSHIP ENGINEERING CASE STUDY" : "ENGINEERING ARCHIVE"}
            </span>
            <span className="text-[11px] font-mono text-ink-subtle">
              {project.category}
            </span>
          </div>
          <span className="text-[11px] font-mono text-ink-subtle">
            {project.year} · PRODUCTION
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-ink leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-[16px] sm:text-[19px] text-ink-muted leading-relaxed font-sans max-w-3xl">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-border-subtle/50">
          <span className="text-[10px] font-mono uppercase tracking-wider text-ink-subtle mr-2">
            STACK:
          </span>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-ink border border-border-subtle/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Verified Links Bar */}
        {(project.liveUrl || project.repositoryUrl || project.notionUrl) && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-canvas border border-border-strong hover:bg-surface text-ink text-[11px] font-mono font-semibold uppercase tracking-wider transition-colors group"
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
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-canvas border border-border-subtle hover:border-border-strong hover:bg-surface text-ink text-[11px] font-mono font-medium uppercase tracking-wider transition-colors group"
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
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-canvas border border-border-subtle hover:border-border-strong hover:bg-surface text-ink-muted hover:text-ink text-[11px] font-mono font-medium uppercase tracking-wider transition-colors group"
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

      {/* Case Study Content Flow */}
      <article className="space-y-16">
        {/* ============================================================ */}
        {/* 01 / WHY I BUILT IT                                          */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="why-heading" hasTopRule={false}>
          <SectionIndex
            id="why-heading"
            number="01"
            title="WHY I BUILT IT & MOTIVATION"
            icon={<Lightbulb className="w-3.5 h-3.5" />}
          />

          <div className="space-y-6 pt-2">
            <StatementBlock
              statement={
                caseStudy?.motivation ||
                caseStudy?.whyBuilt ||
                caseStudy?.overview ||
                project.shortDescription
              }
              attribution={`${project.title} Architecture Brief`}
            />

            <p className="text-[15px] sm:text-[16px] text-ink leading-relaxed">
              {caseStudy?.overview || project.longDescription}
            </p>
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 02 / THE CORE ENGINEERING PROBLEM                            */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="problem-heading">
          <SectionIndex
            id="problem-heading"
            number="02"
            title="THE CORE ENGINEERING PROBLEM"
            icon={<AlertCircle className="w-3.5 h-3.5" />}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-4 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                FAILURE MODES & INVARIANTS
              </span>
              <p className="text-[13px] text-ink-muted">
                What breaks in traditional architectures without deterministic constraints.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-[15px] sm:text-[16px] text-ink-muted leading-relaxed pl-4 border-l-2 border-ink">
                {caseStudy?.problem}
              </p>

              {caseStudy?.solution && (
                <div className="pt-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink font-semibold block mb-1">
                    ENGINEERING SOLUTION:
                  </span>
                  <p className="text-[14px] text-ink leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              )}
            </div>
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 03 / SYSTEM EXECUTION FLOW (Visual Flowchart Structure)     */}
        {/* ============================================================ */}
        {caseStudy?.architectureFlow && caseStudy.architectureFlow.length > 0 && (
          <EditorialSection labelledBy="system-heading">
            <SectionIndex
              id="system-heading"
              number="03"
              title="SYSTEM EXECUTION PIPELINE"
              icon={<Workflow className="w-3.5 h-3.5" />}
              sideText="DETERMINISTIC CYCLE"
            />

            {/* Visual Architectural Flow Structure */}
            <div className="pt-2 space-y-6">
              <div className="border-t-2 border-ink border-b border-border-subtle py-8">
                {/* Flow Diagram (Horizontal on desktop / Vertical on mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
                  {(() => {
                    const flowSteps = caseStudy.architectureFlow;
                    return flowSteps.map((step, idx) => {
                      const colonIndex = step.indexOf(":");
                      const stepTitle =
                        colonIndex !== -1 ? step.slice(0, colonIndex).replace(/^\d+\.\s*/, "").trim() : `STAGE 0${idx + 1}`;
                      const stepDesc = colonIndex !== -1 ? step.slice(colonIndex + 1).trim() : step;

                      return (
                        <div key={idx} className="relative flex flex-col justify-between space-y-3 p-4 rounded-lg bg-canvas-subtle/30 border border-border-subtle group">
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono font-semibold text-ink-subtle">
                                0{idx + 1}
                              </span>
                              {idx < flowSteps.length - 1 && (
                                <ArrowRight className="hidden md:inline w-3.5 h-3.5 text-ink-subtle/70" />
                              )}
                            </div>
                            <div className="text-[13px] font-semibold uppercase tracking-wider text-ink font-mono">
                              {stepTitle}
                            </div>
                          </div>

                          <p className="text-[12px] text-ink-muted leading-relaxed">
                            {stepDesc}
                          </p>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>
            </div>
          </EditorialSection>
        )}

        {/* ============================================================ */}
        {/* 04 / ARCHITECTURE & CORE CAPABILITIES                        */}
        {/* ============================================================ */}
        {(caseStudy?.whatSystemDoes || caseStudy?.technicalApproach) && (
          <EditorialSection labelledBy="arch-heading">
            <SectionIndex
              id="arch-heading"
              number="04"
              title="ARCHITECTURE & SYSTEM CAPABILITIES"
              icon={<Layers className="w-3.5 h-3.5" />}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              {caseStudy.whatSystemDoes && (
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold block">
                    CAPABILITIES & SCOPE
                  </span>
                  <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
                    {caseStudy.whatSystemDoes.map((item, idx) => (
                      <div key={idx} className="py-3 flex items-start space-x-3">
                        <span className="text-[11px] font-mono font-semibold text-ink-subtle mt-0.5">
                          0{idx + 1}
                        </span>
                        <p className="text-[13px] text-ink leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseStudy.technicalApproach && (
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold block">
                    TECHNICAL METHODOLOGY
                  </span>
                  <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
                    {caseStudy.technicalApproach.map((item, idx) => (
                      <div key={idx} className="py-3 flex items-start space-x-3">
                        <span className="text-[11px] font-mono font-semibold text-ink-subtle mt-0.5">
                          0{idx + 1}
                        </span>
                        <p className="text-[13px] text-ink-muted leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </EditorialSection>
        )}

        {/* ============================================================ */}
        {/* 05 / TECHNICAL IMPLEMENTATION                                */}
        {/* ============================================================ */}
        {caseStudy?.technicalImplementation && (
          <EditorialSection labelledBy="implementation-heading">
            <SectionIndex
              id="implementation-heading"
              number="05"
              title="TECHNICAL IMPLEMENTATION CHAPTERS"
              icon={<Cpu className="w-3.5 h-3.5" />}
              sideText={`${caseStudy.technicalImplementation.length} CHAPTERS`}
            />

            <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
              {caseStudy.technicalImplementation.map((section, idx) => (
                <div key={idx} className="py-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                      CHAPTER 0{idx + 1}
                    </span>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-ink">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-[14px] text-ink-muted leading-relaxed max-w-3xl">
                    {section.description}
                  </p>

                  {section.points && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[13px] text-ink-muted">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-ink/60 mt-2 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </EditorialSection>
        )}

        {/* ============================================================ */}
        {/* 06 / KEY ENGINEERING DECISIONS                               */}
        {/* ============================================================ */}
        {caseStudy?.engineeringDecisions && caseStudy.engineeringDecisions.length > 0 && (
          <EditorialSection labelledBy="decisions-heading">
            <SectionIndex
              id="decisions-heading"
              number="06"
              title="KEY ENGINEERING DECISIONS & TRADEOFFS"
              icon={<Terminal className="w-3.5 h-3.5" />}
            />

            <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
              {caseStudy.engineeringDecisions.map((decision, idx) => (
                <div key={idx} className="py-6 space-y-3">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-[11px] font-mono font-semibold text-ink-subtle">
                      0{idx + 1}
                    </span>
                    <h4 className="text-[16px] font-semibold text-ink font-mono">
                      {decision.decision}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] leading-relaxed pl-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ink-subtle font-semibold block">
                        Rationale & Constraints
                      </span>
                      <p className="text-ink-muted">{decision.rationale}</p>
                    </div>

                    {decision.outcome && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-ink-subtle font-semibold block">
                          Verified Outcome
                        </span>
                        <p className="text-ink">{decision.outcome}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </EditorialSection>
        )}

        {/* ============================================================ */}
        {/* 07 / CHALLENGES & ROOT-CAUSE FIXES                           */}
        {/* ============================================================ */}
        {caseStudy?.challengesAndSolutions && caseStudy.challengesAndSolutions.length > 0 && (
          <EditorialSection labelledBy="challenges-heading">
            <SectionIndex
              id="challenges-heading"
              number="07"
              title="CHALLENGES & ROOT-CAUSE RESOLUTIONS"
              icon={<AlertCircle className="w-3.5 h-3.5" />}
            />

            <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
              {caseStudy.challengesAndSolutions.map((item, idx) => (
                <div key={idx} className="py-6 space-y-3">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-[11px] font-mono font-semibold text-ink-subtle">
                      0{idx + 1}
                    </span>
                    <h4 className="text-[15px] font-semibold text-ink">
                      {item.challenge}
                    </h4>
                  </div>

                  <div className="pl-6">
                    <p className="text-[13px] text-ink-muted leading-relaxed pl-3 border-l border-border-subtle">
                      <span className="font-semibold text-ink font-mono text-[10px] uppercase tracking-wider block mb-0.5">
                        Solution & Fix:
                      </span>
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </EditorialSection>
        )}

        {/* ============================================================ */}
        {/* 08 / WHAT I LEARNED                                          */}
        {/* ============================================================ */}
        {caseStudy?.whatILearned && (
          <EditorialSection labelledBy="learned-heading">
            <SectionIndex
              id="learned-heading"
              number="08"
              title="WHAT I LEARNED · ENGINEERING TAKEAWAYS"
              icon={<Lightbulb className="w-3.5 h-3.5" />}
            />

            <div className="pt-2">
              <ul className="divide-y divide-border-subtle border-t border-b border-border-subtle">
                {caseStudy.whatILearned.map((lesson, idx) => (
                  <li key={idx} className="py-4 flex items-start space-x-3 text-[14px] text-ink leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-ink-muted mt-0.5 shrink-0" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </EditorialSection>
        )}

        {/* ============================================================ */}
        {/* 09 / CURRENT STATE & DEPLOYMENT                              */}
        {/* ============================================================ */}
        {caseStudy?.currentState && (
          <EditorialSection labelledBy="state-heading">
            <SectionIndex
              id="state-heading"
              number="09"
              title="CURRENT STATE & VERIFICATION"
              icon={<CheckCircle2 className="w-3.5 h-3.5" />}
            />

            <div className="p-6 rounded-xl border border-border-subtle bg-canvas-subtle/30 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                SYSTEM STATUS
              </div>
              <p className="text-[15px] text-ink leading-relaxed">
                {caseStudy.currentState}
              </p>
            </div>
          </EditorialSection>
        )}

        {/* ============================================================ */}
        {/* 10 / VERIFIED PROJECT LINKS                                  */}
        {/* ============================================================ */}
        {caseStudy?.links && caseStudy.links.length > 0 && (
          <EditorialSection labelledBy="links-heading">
            <SectionIndex
              id="links-heading"
              number="10"
              title="VERIFIED ARTIFACTS & LINKS"
              icon={<Compass className="w-3.5 h-3.5" />}
            />

            <div className="pt-2 flex flex-wrap gap-4">
              {caseStudy.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-md bg-canvas border border-border-strong hover:bg-surface text-ink text-[12px] font-mono font-medium uppercase tracking-wider transition-colors group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </EditorialSection>
        )}
      </article>

      {/* Inter-project navigation */}
      <ProjectNavigation currentSlug={project.slug} />
    </PageShell>
  );
}
