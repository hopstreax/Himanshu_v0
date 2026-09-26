import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Palette,
  CheckCircle2,
  MapPin,
  GitBranch,
  BookOpen,
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialSection, SectionIndex, StatementBlock, MetadataRow } from "@/components/primitives/Editorial";
import { aboutData } from "@/data/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineering profile of Himanshu Patro: based in Jamshedpur, Jharkhand, India. B.Tech in CSIT from ITER, Siksha 'O' Anusandhan (SOA) University. Corporate internships at Celebal Technologies and Tata Steel, alongside open-source code intelligence work.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Himanshu Patro",
    description:
      "Engineering profile of Himanshu Patro: based in Jamshedpur, Jharkhand, India. B.Tech in CSIT from ITER, Siksha 'O' Anusandhan (SOA) University. Corporate internships at Celebal Technologies and Tata Steel, alongside open-source code intelligence work.",
    url: "https://himanshupatro.dev/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Himanshu Patro",
    description:
      "Engineering profile of Himanshu Patro: based in Jamshedpur, Jharkhand, India. B.Tech in CSIT from ITER, Siksha 'O' Anusandhan (SOA) University. Corporate internships at Celebal Technologies and Tata Steel, alongside open-source code intelligence work.",
  },
};

export default function AboutPage() {
  return (
    <PageShell activeSection="about">
      {/* Editorial Opening / Hero Statement */}
      <header className="pb-10 mb-14 border-b border-border-subtle/80 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2.5 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80 font-medium">
              ABOUT / 01
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
              ENGINEERING DOSSIER
            </span>
          </div>
          <span className="text-[11px] font-mono text-ink-subtle hidden sm:inline-block">
            CLASS OF 2026 · CSIT
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-[36px] sm:text-[48px] md:text-[58px] font-semibold tracking-tight text-ink leading-[1.08]">
            Himanshu Patro
          </h1>

          <p className="text-[17px] sm:text-[20px] text-ink-muted leading-relaxed font-sans max-w-3xl">
            Software engineer interested in building reliable systems around code, AI agents, and developer tooling.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-ink-subtle border-t border-border-subtle/50">
          <span className="flex items-center space-x-1.5 text-ink font-medium">
            <MapPin className="w-3 h-3 text-ink-muted" />
            <span>JAMSHEDPUR, JHARKHAND, INDIA</span>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>B.TECH CSIT · ITER, SOA UNIVERSITY</span>
          <span className="hidden sm:inline">·</span>
          <span>OPEN SOURCE CONTRIBUTOR (GRAPHIFY)</span>
        </div>
      </header>

      <div className="flex flex-col space-y-16">
        {/* ============================================================ */}
        {/* 01 / WHO I AM                                                */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="who-heading" hasTopRule={false}>
          <SectionIndex
            id="who-heading"
            number="01"
            title="WHO I AM & BACKGROUND"
            icon={<Terminal className="w-3.5 h-3.5" />}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-5 space-y-4">
              <StatementBlock
                statement="Software engineering is at its best when it moves beyond building toys and grapples with the unglamorous realities of complex systems: deterministic execution, edge-case failure classification, and rigorous maintainer review."
                attribution="Engineering Journal"
              />
            </div>

            <div className="lg:col-span-7 space-y-4 text-[15px] sm:text-[16px] text-ink-muted leading-relaxed">
              {aboutData.longBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 02 / WHAT I BUILD                                            */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="build-heading">
          <SectionIndex
            id="build-heading"
            number="02"
            title="WHAT I BUILD · ARCHITECTURAL DOMAINS"
            icon={<Layers className="w-3.5 h-3.5" />}
            sideText="4 CORE DOMAINS"
          />

          <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
            {aboutData.whatIBuild?.map((item, idx) => (
              <div key={idx} className="py-6 space-y-3 group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                      DOMAIN 0{idx + 1} · {item.domain}
                    </span>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-ink group-hover:translate-x-1 transition-transform inline-block">
                      {item.headline}
                    </h3>
                  </div>
                </div>

                <p className="text-[14px] text-ink-muted leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-ink border border-border-subtle/50"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 03 / ENGINEERING INTERESTS                                   */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="interests-heading">
          <SectionIndex
            id="interests-heading"
            number="03"
            title="ENGINEERING INTERESTS & FOCUS AREAS"
            icon={<Cpu className="w-3.5 h-3.5" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {aboutData.engineeringInterests?.map((interest, idx) => (
              <div key={idx} className="space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle block">
                    AREA 0{idx + 1} · {interest.category}
                  </span>
                  <h3 className="text-[17px] font-semibold text-ink">
                    {interest.title}
                  </h3>
                </div>

                <p className="text-[13px] text-ink-muted leading-relaxed pl-3 border-l border-border-subtle">
                  {interest.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {interest.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-surface text-ink border border-border-subtle/40"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 04 / EDUCATION                                               */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="education-heading">
          <SectionIndex
            id="education-heading"
            number="04"
            title="EDUCATION & ACADEMIC FOUNDATION"
            icon={<GraduationCap className="w-3.5 h-3.5" />}
          />

          <div className="border-t border-b border-border-subtle py-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div className="space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                  {aboutData.education.degree}
                </div>
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-ink tracking-tight">
                  {aboutData.education.field}
                </h3>
                <div className="text-[14px] text-ink-muted">
                  {aboutData.education.institution}
                </div>
                <div className="text-[12px] font-mono text-ink-subtle">
                  {aboutData.education.location}
                </div>
              </div>

              <div className="text-left sm:text-right font-mono text-[12px] shrink-0 space-y-1">
                <div className="text-ink font-semibold">{aboutData.education.grade}</div>
                <div className="text-ink-subtle uppercase tracking-wider text-[11px]">
                  Class of 2026 ({aboutData.education.period})
                </div>
                <div className="text-[11px] text-ink-muted">
                  Base: Jamshedpur, Jharkhand, India
                </div>
              </div>
            </div>

            {aboutData.education.highlights && (
              <div className="pt-4 border-t border-border-subtle/60 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle block">
                  ACADEMIC MILESTONES & LEADERSHIP
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-ink-muted">
                  {aboutData.education.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink/50 mt-2 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 05 / EXPERIENCE (The Editorial Timeline)                     */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="experience-heading">
          <SectionIndex
            id="experience-heading"
            number="05"
            title="PROFESSIONAL INTERNSHIP ARCHIVE"
            icon={<Briefcase className="w-3.5 h-3.5" />}
            sideText="EDITORIAL TIMELINE"
          />

          <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
            {/* Experience 1: Celebal Technologies */}
            <article className="py-8 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-ink font-semibold">
                    2025 · CELEBAL TECHNOLOGIES
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-ink">
                    Software Development Intern – ReactJS / Full Stack
                  </h3>
                  <div className="text-[12px] font-mono text-ink-subtle">
                    Remote · June 2025 — August 2025
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-surface border border-border-subtle text-ink font-medium shrink-0">
                  FULL-STACK DEVELOPMENT
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-[13px] leading-relaxed pt-1">
                <div className="lg:col-span-4 space-y-3">
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-subtle font-semibold">
                      Context & Scope
                    </span>
                    <p className="text-ink-muted mt-0.5">
                      Engineered an enterprise Service Desk Application handling cross-departmental incident tickets and user workflows.
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-subtle font-semibold">
                      Verified Metrics
                    </span>
                    <p className="text-ink font-medium font-mono text-[12px] mt-0.5">
                      30% faster page loads · 25% faster ticket resolution
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-2">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-subtle font-semibold">
                    Engineering Work & Impact
                  </span>
                  <ul className="space-y-1.5 text-ink-muted list-disc list-outside ml-4">
                    <li>Built dynamic ticket routing system with priority tagging, category assignment, and real-time status updates.</li>
                    <li>Integrated real-time notification workflows, enhancing end-user transparency and support communication.</li>
                    <li>Maintained modular React component architecture in an Agile sprint environment, ensuring reliable REST API integration with Express/Node.js backends.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-surface text-ink-muted border border-border-subtle/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            {/* Experience 2: Tata Steel Ltd. */}
            <article className="py-8 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-ink font-semibold">
                    2024 · TATA STEEL LTD.
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-ink">
                    Application Development Intern – Full Stack MERN
                  </h3>
                  <div className="text-[12px] font-mono text-ink-subtle">
                    Jamshedpur, Jharkhand, India · July 2024 — September 2024
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-surface border border-border-subtle text-ink font-medium shrink-0">
                  ENTERPRISE MERN
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-[13px] leading-relaxed pt-1">
                <div className="lg:col-span-4 space-y-3">
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-subtle font-semibold">
                      Context & Scope
                    </span>
                    <p className="text-ink-muted mt-0.5">
                      Designed internal enterprise access management dashboard supporting 500+ organizational users.
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-subtle font-semibold">
                      Verified Metrics
                    </span>
                    <p className="text-ink font-medium font-mono text-[12px] mt-0.5">
                      500+ active users · 20% faster MongoDB queries
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-2">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-subtle font-semibold">
                    Engineering Work & Impact
                  </span>
                  <ul className="space-y-1.5 text-ink-muted list-disc list-outside ml-4">
                    <li>Implemented JWT & bcrypt.js session authentication with role-based access control (RBAC).</li>
                    <li>Engineered and deployed 10+ scalable RESTful APIs in Node.js/Express.js with MongoDB schema indexing.</li>
                    <li>Created fully responsive management interfaces using React.js and Tailwind CSS with cross-browser compatibility.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Bcrypt.js"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-surface text-ink-muted border border-border-subtle/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 06 / HOW I WORK                                              */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="discipline-heading">
          <SectionIndex
            id="discipline-heading"
            number="06"
            title="HOW I WORK · ENGINEERING DISCIPLINE"
            icon={<BookOpen className="w-3.5 h-3.5" />}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            {aboutData.howIWork?.map((item, idx) => (
              <div key={idx} className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                  RULE 0{idx + 1}
                </span>
                <h3 className="text-[16px] font-semibold text-ink">
                  {item.principle}
                </h3>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  {item.summary}
                </p>
                <ul className="space-y-1 pt-1 text-[12px] text-ink-muted border-l border-border-subtle pl-3">
                  {item.practices.map((p, pIdx) => (
                    <li key={pIdx}>— {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 07 / OPEN SOURCE JOURNEY                                     */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="oss-journey-heading">
          <SectionIndex
            id="oss-journey-heading"
            number="07"
            title="OPEN SOURCE JOURNEY & SIGNAL"
            icon={<GitBranch className="w-3.5 h-3.5" />}
          />

          <div className="space-y-6 pt-2">
            <p className="text-[15px] sm:text-[16px] text-ink leading-relaxed">
              {aboutData.openSourceJourney?.summary}
            </p>

            <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
              {aboutData.openSourceJourney?.stages.map((stage, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div className="sm:w-1/3">
                    <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-ink block">
                      {stage.phase}
                    </span>
                    <span className="text-[11px] font-mono text-ink-subtle">
                      {stage.focus}
                    </span>
                  </div>
                  <p className="sm:w-2/3 text-[13px] text-ink-muted leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/open-source"
                className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-semibold uppercase tracking-widest text-ink hover:text-ink-muted transition-colors group"
              >
                <span>EXPLORE FULL OPEN SOURCE ARCHIVE</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 08 / BEYOND CODE                                             */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="beyond-heading">
          <SectionIndex
            id="beyond-heading"
            number="08"
            title="BEYOND CODE · CREATIVE DISCIPLINES"
            icon={<Palette className="w-3.5 h-3.5" />}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle border-t border-b border-border-subtle py-6">
            {aboutData.outsideEngineering?.map((art, idx) => (
              <div key={idx} className="sm:px-4 first:sm:pl-0 last:sm:pr-0 space-y-1.5 py-3 sm:py-0">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                  {art.category}
                </span>
                <h4 className="text-[15px] font-semibold text-ink">
                  {art.title}
                </h4>
                <p className="text-[12px] text-ink-muted leading-relaxed">
                  {art.description}
                </p>
              </div>
            ))}
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 09 / TOOLKIT & SKILLS                                        */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="skills-heading">
          <SectionIndex
            id="skills-heading"
            number="09"
            title="TOOLKIT & TECHNICAL SKILLS"
            icon={<Code2 className="w-3.5 h-3.5" />}
          />

          <div className="pt-2 space-y-4">
            <p className="text-[13px] text-ink-muted">
              Core technologies, runtime environments, and tools utilized in daily engineering:
            </p>
            <div className="flex flex-wrap gap-2">
              {aboutData.coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-mono px-3 py-1 rounded bg-canvas-subtle/80 border border-border-subtle text-ink font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </EditorialSection>
      </div>
    </PageShell>
  );
}
