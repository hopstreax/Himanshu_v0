import React from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialHeader } from "@/components/subpage/EditorialHeader";
import { aboutData } from "@/data/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, engineering experience at Celebal Technologies and Tata Steel, education at ITER, and technical focus areas of Himanshu Patro.",
  openGraph: {
    title: "About — Himanshu Patro",
    description:
      "Background, engineering experience at Celebal Technologies and Tata Steel, education at ITER, and technical focus areas of Himanshu Patro.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Himanshu Patro",
    description:
      "Background, engineering experience at Celebal Technologies and Tata Steel, education at ITER, and technical focus areas of Himanshu Patro.",
  },
};

export default function AboutPage() {
  return (
    <PageShell activeSection="about">
      <EditorialHeader
        sectionNumber="01 / ABOUT"
        title="Engineering & Background"
        subtitle={aboutData.shortBio}
        badge="CURRICULUM VITAE"
      />

      <div className="flex flex-col space-y-16">
        {/* Narrative Section */}
        <section aria-labelledby="narrative-heading">
          <h2 id="narrative-heading" className="sr-only">
            Background Narrative
          </h2>
          <div className="space-y-4 text-[15px] sm:text-[16px] text-ink-muted leading-relaxed">
            {aboutData.longBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-surface/60 border border-border-subtle flex items-start space-x-3">
            <Sparkles className="w-4 h-4 text-ink mt-0.5 shrink-0" />
            <div className="text-[13px] text-ink-muted leading-relaxed">
              <span className="font-semibold text-ink">Current Direction: </span>
              {aboutData.currentFocus}
            </div>
          </div>
        </section>

        {/* Technical Focus Areas */}
        <section aria-labelledby="focus-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <Code2 className="w-3.5 h-3.5" />
            <h2 id="focus-heading">TECHNICAL FOCUS AREAS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.technicalFocusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border-subtle/80 bg-canvas-subtle/40 flex items-start space-x-3"
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

        {/* Experience Section */}
        <section aria-labelledby="experience-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-8">
            <Briefcase className="w-3.5 h-3.5" />
            <h2 id="experience-heading">CORPORATE INTERNSHIP EXPERIENCE</h2>
          </div>

          <div className="space-y-10">
            {aboutData.experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-ink">
                      {exp.role}
                    </h3>
                    <div className="text-[13px] text-ink-muted">
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

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section aria-labelledby="education-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            <h2 id="education-heading">EDUCATION & ACADEMICS</h2>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-canvas-subtle/50 flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-ink">
                  {aboutData.education.degree} in {aboutData.education.field}
                </h3>
                <div className="text-[13px] text-ink-muted">
                  {aboutData.education.institution} · {aboutData.education.location}
                </div>
              </div>
              <div className="text-[11px] font-mono text-ink-subtle sm:text-right">
                <div>{aboutData.education.period}</div>
                <div className="text-ink font-medium">{aboutData.education.grade}</div>
              </div>
            </div>

            {aboutData.education.highlights && (
              <ul className="pt-2 border-t border-border-subtle/60 space-y-1.5 text-[12px] text-ink-muted">
                {aboutData.education.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start space-x-2">
                    <span className="w-1 h-1 rounded-full bg-ink/40 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Core Skills */}
        <section aria-labelledby="skills-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <h2 id="skills-heading">CORE TECHNICAL SKILLS</h2>
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
        <div className="p-6 rounded-xl border border-border-subtle bg-surface/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
              OPEN SOURCE STORY
            </div>
            <div className="text-[15px] font-semibold text-ink mt-0.5">
              30+ Merged PRs in Graphify
            </div>
            <div className="text-[12px] text-ink-muted mt-0.5">
              Explore multi-language AST extraction, dependency graphs, and deterministic builds.
            </div>
          </div>
          <Link
            href="/open-source"
            className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors shrink-0 group"
          >
            <span>VIEW OPEN SOURCE</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
