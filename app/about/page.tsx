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
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialHeader } from "@/components/subpage/EditorialHeader";
import { aboutData } from "@/data/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineering profile of Himanshu Patro: based in Jamshedpur, Jharkhand, India. B.Tech in CSIT from ITER, Siksha 'O' Anusandhan (SOA) University. Corporate internships at Celebal Technologies and Tata Steel, and open source engineering.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Himanshu Patro",
    description:
      "Engineering profile of Himanshu Patro: based in Jamshedpur, Jharkhand, India. B.Tech in CSIT from ITER, Siksha 'O' Anusandhan (SOA) University. Corporate internships at Celebal Technologies and Tata Steel, and open source engineering.",
    url: "https://himanshupatro.dev/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Himanshu Patro",
    description:
      "Engineering profile of Himanshu Patro: based in Jamshedpur, Jharkhand, India. B.Tech in CSIT from ITER, Siksha 'O' Anusandhan (SOA) University. Corporate internships at Celebal Technologies and Tata Steel, and open source engineering.",
  },
};

export default function AboutPage() {
  return (
    <PageShell activeSection="about">
      <EditorialHeader
        sectionNumber="01 / ABOUT"
        title="Engineering Profile"
        subtitle={aboutData.shortBio}
        badge="ENGINEERING DOSSIER"
      />

      <div className="flex flex-col space-y-16">
        {/* Section 1: Background & Summary */}
        <section aria-labelledby="background-heading" className="space-y-6">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Terminal className="w-3.5 h-3.5 text-ink" />
            <h2 id="background-heading">01 / BACKGROUND & PERSONAL INFORMATION</h2>
          </div>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-ink-muted leading-relaxed">
            {aboutData.longBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Demographic & Institutional Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            <div className="p-4 rounded-lg border border-border-subtle bg-canvas-subtle/30 space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-ink-muted" />
                <span>Current Base</span>
              </div>
              <div className="text-[14px] font-semibold text-ink">
                {aboutData.baseLocation || aboutData.location}
              </div>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-canvas-subtle/30 space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-1.5">
                <GraduationCap className="w-3 h-3 text-ink-muted" />
                <span>Degree & Discipline</span>
              </div>
              <div className="text-[14px] font-semibold text-ink">
                {aboutData.education.degree} in {aboutData.education.field}
              </div>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-canvas-subtle/30 space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-1.5">
                <Sparkles className="w-3 h-3 text-ink-muted" />
                <span>Graduation Timeline</span>
              </div>
              <div className="text-[14px] font-semibold text-ink">
                Graduating 2026 ({aboutData.education.period})
              </div>
            </div>
          </div>

          {/* Institutional Academic Card */}
          <div className="p-6 rounded-xl border border-border-subtle bg-canvas-subtle/40 flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-[18px] sm:text-[19px] font-semibold text-ink">
                  {aboutData.education.institution}
                </h3>
                <div className="text-[13px] text-ink-muted mt-0.5">
                  {aboutData.education.location}
                </div>
              </div>
              <div className="text-[11px] font-mono text-ink-subtle sm:text-right shrink-0">
                <div className="text-ink font-semibold">{aboutData.education.grade}</div>
                <div>Class of 2026</div>
              </div>
            </div>

            {aboutData.education.highlights && (
              <div className="pt-3 border-t border-border-subtle/60 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-ink-subtle mb-1">
                  Academic Milestones & Leadership
                </div>
                <ul className="space-y-1.5 text-[13px] text-ink-muted">
                  {aboutData.education.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink/40 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: What I Build */}
        {aboutData.whatIBuild && aboutData.whatIBuild.length > 0 && (
          <section aria-labelledby="build-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <Layers className="w-3.5 h-3.5 text-ink" />
              <h2 id="build-heading">02 / WHAT I BUILD</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutData.whatIBuild.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border-subtle bg-canvas-subtle/30 flex flex-col justify-between space-y-3"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                      {item.domain}
                    </span>
                    <h3 className="text-[16px] font-semibold text-ink mt-1">
                      {item.headline}
                    </h3>
                    <p className="text-[13px] text-ink-muted leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border-subtle/50 flex flex-wrap gap-1.5">
                    {item.competencies.map((comp) => (
                      <span
                        key={comp}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-ink border border-border-subtle/40"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Engineering Interests */}
        <section aria-labelledby="interests-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Cpu className="w-3.5 h-3.5 text-ink" />
            <h2 id="interests-heading">03 / ENGINEERING INTERESTS & FOCUS AREAS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutData.engineeringInterests?.map((interest, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border-subtle/80 bg-canvas-subtle/30 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle mb-1">
                    {interest.category}
                  </div>
                  <h3 className="text-[16px] font-semibold text-ink">
                    {interest.title}
                  </h3>
                  <p className="text-[13px] text-ink-muted leading-relaxed mt-2">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle/50 flex flex-wrap gap-1.5">
                  {interest.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-ink border border-border-subtle/40"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Open Source Journey */}
        {aboutData.openSourceJourney && (
          <section aria-labelledby="journey-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
            <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              <GitBranch className="w-3.5 h-3.5 text-ink" />
              <h2 id="journey-heading">04 / OPEN SOURCE PROGRESSION & JOURNEY</h2>
            </div>

            <p className="text-[15px] text-ink leading-relaxed">
              {aboutData.openSourceJourney.summary}
            </p>

            <div className="space-y-4 pt-2">
              {aboutData.openSourceJourney.stages.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border-subtle bg-surface/50 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-ink">
                      {stage.phase}
                    </span>
                    <span className="text-[12px] font-mono text-ink-subtle">
                      {stage.focus}
                    </span>
                  </div>
                  <p className="text-[13px] text-ink-muted leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: Professional Experience */}
        <section aria-labelledby="experience-heading" className="pt-8 border-t border-border-subtle/80 space-y-8">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Briefcase className="w-3.5 h-3.5 text-ink" />
            <h2 id="experience-heading">05 / PROFESSIONAL INTERNSHIP EXPERIENCE</h2>
          </div>

          <div className="space-y-8">
            {aboutData.experiences.map((exp, idx) => (
              <article
                key={idx}
                className="p-6 rounded-xl border border-border-subtle bg-canvas-subtle/20 flex flex-col space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-ink">
                      {exp.role}
                    </h3>
                    <div className="text-[13px] text-ink-muted font-medium mt-0.5">
                      {exp.company} · {exp.location}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-ink-subtle shrink-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-[13px] sm:text-[14px] text-ink-muted leading-relaxed list-disc list-outside ml-4">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-border-subtle/60 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-ink-muted border border-border-subtle/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 6: How I Work (Engineering Discipline) */}
        <section aria-labelledby="work-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Terminal className="w-3.5 h-3.5 text-ink" />
            <h2 id="work-heading">06 / HOW I WORK & ENGINEERING DISCIPLINE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutData.howIWork?.map((principle, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border-subtle bg-canvas-subtle/30 flex flex-col justify-between space-y-3"
              >
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">
                    {principle.principle}
                  </h3>
                  <p className="text-[13px] text-ink-muted leading-relaxed mt-1.5">
                    {principle.summary}
                  </p>
                </div>

                <ul className="pt-2 border-t border-border-subtle/40 space-y-1 text-[12px] text-ink-muted">
                  {principle.practices.map((practice, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ink-muted mt-0.5 shrink-0" />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Current Work & Focus */}
        <section aria-labelledby="current-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Sparkles className="w-3.5 h-3.5 text-ink" />
            <h2 id="current-heading">07 / CURRENT FOCUS & ACTIVE WORK</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aboutData.currentWork?.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border-subtle bg-canvas-subtle/40 flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-surface text-ink font-medium">
                    {item.status}
                  </span>
                  <h3 className="text-[15px] font-semibold text-ink mt-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-ink-muted leading-relaxed mt-1.5">
                    {item.detail}
                  </p>
                </div>

                {item.linkUrl && (
                  <div className="pt-2 border-t border-border-subtle/50">
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[11px] font-mono font-medium uppercase tracking-wider text-ink hover:text-ink-muted transition-colors group"
                    >
                      <span>{item.linkLabel || "LEARN MORE"}</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Outside Engineering */}
        <section aria-labelledby="arts-heading" className="pt-8 border-t border-border-subtle/80 space-y-6">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Palette className="w-3.5 h-3.5 text-ink" />
            <h2 id="arts-heading">08 / BEYOND CODE & CREATIVE DISCIPLINES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aboutData.outsideEngineering?.map((art, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border-subtle/70 bg-canvas-subtle/20 flex flex-col space-y-2"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                  {art.category}
                </span>
                <h3 className="text-[15px] font-semibold text-ink">
                  {art.title}
                </h3>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  {art.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: Technical Skills Matrix */}
        <section aria-labelledby="skills-heading" className="pt-8 border-t border-border-subtle/80 space-y-4">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <Code2 className="w-3.5 h-3.5 text-ink" />
            <h2 id="skills-heading">09 / TECHNICAL SKILLS MATRIX</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {aboutData.coreSkills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-mono px-3 py-1 rounded-full border border-border-subtle bg-canvas text-ink"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Cross Link to Open Source */}
        <div className="p-6 rounded-xl border border-border-strong bg-surface/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
              OPEN SOURCE VERIFICATION
            </div>
            <div className="text-[16px] font-semibold text-ink mt-0.5">
              30+ Merged PRs in Graphify & Ecosystem Tooling
            </div>
            <div className="text-[13px] text-ink-muted mt-0.5">
              Explore concrete engineering investigations across AST analysis, symbol resolution, and streaming protocols.
            </div>
          </div>
          <Link
            href="/open-source"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-md bg-canvas border border-border-strong text-[11px] font-mono font-semibold tracking-widest uppercase text-ink hover:bg-surface transition-colors shrink-0 group"
          >
            <span>VIEW OPEN SOURCE</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
