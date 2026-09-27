import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Palette,
  MapPin,
  GitBranch,
  BookOpen,
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialSection, SectionIndex, StatementBlock } from "@/components/primitives/Editorial";
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
      {/* Editorial Opening / Dossier Header */}
      <header className="pb-12 mb-16 border-b border-[#242830] space-y-8">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
            <span className="text-[#F4F1EA] font-semibold">01 / ABOUT</span>
            <span>·</span>
            <span>ENGINEERING DOSSIER</span>
          </div>
          <span className="hidden sm:inline-block">
            CLASS OF 2026 · CSIT
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] leading-[0.96]">
            HIMANSHU<br />
            <span className="text-[#9A9DA3]">PATRO</span>
          </h1>

          <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-[#C5C8CE] font-sans font-light leading-relaxed max-w-3xl pt-2">
            Software engineer building reliable systems around code, AI agents, developer tooling and open-source code intelligence.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-[#666B73] border-t border-[#242830]">
          <span className="flex items-center space-x-1.5 text-[#F4F1EA]">
            <MapPin className="w-3.5 h-3.5 text-[#45D6A0]" />
            <span>JAMSHEDPUR, JHARKHAND, INDIA</span>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>B.TECH CSIT · ITER, SOA UNIVERSITY</span>
          <span className="hidden sm:inline">·</span>
          <span className="text-[#5CA8FF]">GRAPHIFY CORE CONTRIBUTOR</span>
        </div>
      </header>

      <div className="flex flex-col space-y-24">
        {/* ============================================================ */}
        {/* 01 / WHO I AM                                                */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="who-heading" hasTopRule={false}>
          <SectionIndex
            id="who-heading"
            number="01"
            title="WHO I AM & PHILOSOPHY"
            icon={<Terminal className="w-3.5 h-3.5" />}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
            <div className="lg:col-span-5 space-y-4">
              <StatementBlock
                statement="Software engineering is at its best when it moves beyond building toys and grapples with the unglamorous realities of complex systems: deterministic execution, edge-case failure classification, and rigorous maintainer review."
                attribution="Engineering Journal"
              />
            </div>

            <div className="lg:col-span-7 space-y-5 text-[15px] sm:text-[16px] text-[#C5C8CE] leading-relaxed">
              {aboutData.longBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 02 / BACKGROUND & TIMELINE (2024 ─── 2025 ─── 2026)          */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="background-heading">
          <SectionIndex
            id="background-heading"
            number="02"
            title="BACKGROUND & EXPERIENCE TIMELINE"
            icon={<Briefcase className="w-3.5 h-3.5" />}
            sideText="2024 — 2026"
          />

          {/* Horizontal Editorial Timeline Graphic */}
          <div className="pt-6 space-y-8">
            <div className="border border-[#242830] bg-[#08090B] p-6 sm:p-8">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#666B73] pb-6">
                CHRONOLOGICAL PATHWAY /
              </div>

              {/* Connected Horizontal Timeline on Desktop / Vertical on Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
                {/* Horizontal timeline connector bar */}
                <div className="hidden md:block absolute top-3 left-6 right-6 h-[1px] bg-[#242830] z-0" />

                {/* 2024 Node */}
                <div className="relative z-10 space-y-2 md:pr-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-[#0D1014] border border-[#FFB86B] flex items-center justify-center text-[10px] font-mono text-[#FFB86B] font-bold">
                      24
                    </span>
                    <span className="text-[12px] font-mono font-bold uppercase text-[#F4F1EA]">
                      TATA STEEL
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#666B73]">
                    JULY 2024 — SEPT 2024
                  </div>
                  <p className="text-[12px] text-[#9A9DA3] font-sans leading-relaxed">
                    Full-Stack MERN Intern. Internal access management dashboard supporting 500+ organizational users.
                  </p>
                </div>

                {/* 2025 Node */}
                <div className="relative z-10 space-y-2 md:px-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-[#0D1014] border border-[#9B7BFF] flex items-center justify-center text-[10px] font-mono text-[#9B7BFF] font-bold">
                      25
                    </span>
                    <span className="text-[12px] font-mono font-bold uppercase text-[#F4F1EA]">
                      CELEBAL TECHNOLOGIES
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#666B73]">
                    JUNE 2025 — AUG 2025
                  </div>
                  <p className="text-[12px] text-[#9A9DA3] font-sans leading-relaxed">
                    Software Development Intern. Enterprise Service Desk Application with dynamic routing (30% faster loads).
                  </p>
                </div>

                {/* 2025-2026 Node */}
                <div className="relative z-10 space-y-2 md:pl-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-[#0D1014] border border-[#45D6A0] flex items-center justify-center text-[10px] font-mono text-[#45D6A0] font-bold">
                      26
                    </span>
                    <span className="text-[12px] font-mono font-bold uppercase text-[#F4F1EA]">
                      OPEN SOURCE (GRAPHIFY)
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#666B73]">
                    SUSTAINED CORE CONTRIBUTIONS
                  </div>
                  <p className="text-[12px] text-[#9A9DA3] font-sans leading-relaxed">
                    30+ maintainer PRs to Graphify code intelligence core; 50+ overall merged PRs across open source.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Internships Breakdown (Zero Cards, Editorial Rows) */}
            <div className="divide-y divide-[#242830] border-t border-b border-[#242830]">
              {/* Celebal Technologies */}
              <article className="py-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-[#9B7BFF] font-semibold">
                      2025 · CELEBAL TECHNOLOGIES
                    </div>
                    <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#F4F1EA]">
                      Software Development Intern – ReactJS / Full Stack
                    </h3>
                    <div className="text-[12px] font-mono text-[#666B73]">
                      Remote · June 2025 — August 2025
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA3]">
                    ENTERPRISE INCIDENT WORKFLOWS
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-[13px] leading-relaxed pt-2">
                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#666B73] font-semibold block">
                      VERIFIED IMPACT
                    </span>
                    <div className="text-sm font-mono text-[#F4F1EA]">
                      30% faster page loads · 25% faster ticket resolution
                    </div>
                    <p className="text-[#9A9DA3] text-[12px]">
                      Engineered dynamic incident ticket routing and notification workflows.
                    </p>
                  </div>

                  <div className="lg:col-span-8 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#666B73] font-semibold block">
                      KEY RESPONSIBILITIES
                    </span>
                    <ul className="space-y-1.5 text-[#C5C8CE]">
                      <li>• Built dynamic ticket routing system with priority tagging and category assignment.</li>
                      <li>• Integrated real-time notification workflows, reducing incident escalation latency.</li>
                      <li>• Maintained modular React component architecture in an Agile sprint environment.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Tata Steel */}
              <article className="py-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-[#FFB86B] font-semibold">
                      2024 · TATA STEEL LTD.
                    </div>
                    <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#F4F1EA]">
                      Application Development Intern – Full Stack MERN
                    </h3>
                    <div className="text-[12px] font-mono text-[#666B73]">
                      Jamshedpur, Jharkhand, India · July 2024 — September 2024
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA3]">
                    ENTERPRISE ACCESS MANAGEMENT
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-[13px] leading-relaxed pt-2">
                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#666B73] font-semibold block">
                      VERIFIED IMPACT
                    </span>
                    <div className="text-sm font-mono text-[#F4F1EA]">
                      500+ active users · 20% faster MongoDB queries
                    </div>
                    <p className="text-[#9A9DA3] text-[12px]">
                      Engineered role-based access control and scalable internal REST APIs.
                    </p>
                  </div>

                  <div className="lg:col-span-8 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#666B73] font-semibold block">
                      KEY RESPONSIBILITIES
                    </span>
                    <ul className="space-y-1.5 text-[#C5C8CE]">
                      <li>• Implemented JWT & bcrypt.js authentication with role-based permissions (RBAC).</li>
                      <li>• Engineered and deployed 10+ RESTful APIs in Node.js/Express.js with MongoDB indexing.</li>
                      <li>• Designed responsive management interfaces using React.js and Tailwind CSS.</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 03 / EDUCATION (Archival Entry Pattern)                      */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="education-heading">
          <SectionIndex
            id="education-heading"
            number="03"
            title="EDUCATION & ACADEMIC ARCHIVE"
            icon={<GraduationCap className="w-3.5 h-3.5" />}
          />

          <div className="border-t border-b border-[#242830] py-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#FFB86B]">
                  BACHELOR OF TECHNOLOGY
                </div>
                <h3 className="text-3xl sm:text-4xl font-mono font-bold text-[#F4F1EA]">
                  Computer Science & Information Technology
                </h3>
                <div className="text-[15px] text-[#C5C8CE]">
                  Institute of Technical Education and Research (ITER)
                </div>
                <div className="text-[13px] font-mono text-[#666B73]">
                  Siksha &apos;O&apos; Anusandhan (SOA) University · Bhubaneswar, Odisha
                </div>
              </div>

              <div className="text-left md:text-right font-mono shrink-0 space-y-1">
                <div className="text-2xl font-bold text-[#F4F1EA]">CGPA: 8.35</div>
                <div className="text-[11px] text-[#45D6A0] uppercase tracking-widest">
                  CLASS OF 2026 (2022 — 2026)
                </div>
                <div className="text-[11px] text-[#666B73]">
                  BASE: JAMSHEDPUR, JHARKHAND, INDIA
                </div>
              </div>
            </div>

            {aboutData.education.highlights && (
              <div className="pt-6 border-t border-[#242830] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666B73] block">
                  ACADEMIC INVOLVEMENT & LEADERSHIP:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-[#9A9DA3]">
                  {aboutData.education.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2">
                      <span className="text-[#FFB86B] font-mono text-[11px] mt-0.5 select-none">—</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 04 / SKILLS TYPOGRAPHIC TECHNICAL MATRIX                     */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="skills-heading">
          <SectionIndex
            id="skills-heading"
            number="04"
            title="TECHNICAL MATRIX & TOOLKIT"
            icon={<Code2 className="w-3.5 h-3.5" />}
            sideText="SYSTEMS SPECS"
          />

          <div className="pt-4 space-y-8">
            <p className="text-[14px] text-[#9A9DA3]">
              Technical competencies categorized by engineering domains. No arbitrary progress bars or inflated percentages:
            </p>

            {/* Typographic Technical Matrix (Hairline Grid, Zero Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-b border-[#242830] py-8">
              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#9B7BFF] font-semibold border-b border-[#242830] pb-2">
                  01 / LANGUAGES & COMPILERS
                </div>
                <div className="space-y-1.5 font-mono text-[13px] text-[#F4F1EA]">
                  <div>TypeScript / JavaScript</div>
                  <div>Python 3.11+</div>
                  <div>Java</div>
                  <div>C / C++</div>
                  <div>HTML5 / CSS3 / SQL</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#5CA8FF] font-semibold border-b border-[#242830] pb-2">
                  02 / CODE INTEL & PARSING
                </div>
                <div className="space-y-1.5 font-mono text-[13px] text-[#F4F1EA]">
                  <div>Tree-Sitter Grammars</div>
                  <div>AST Extraction & Visitors</div>
                  <div>NetworkX & Graph Theory</div>
                  <div>Symbol Resolution Tables</div>
                  <div>Deterministic Build Caching</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#45D6A0] font-semibold border-b border-[#242830] pb-2">
                  03 / AGENTS & BROWSER CDP
                </div>
                <div className="space-y-1.5 font-mono text-[13px] text-[#F4F1EA]">
                  <div>Chromium DevTools Protocol (CDP)</div>
                  <div>Patchright & Playwright</div>
                  <div>Autonomous Action Loops</div>
                  <div>DOM Assertion Triaging</div>
                  <div>Multimodal LLM Reasoning</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#FFB86B] font-semibold border-b border-[#242830] pb-2">
                  04 / FULL-STACK PLATFORMS
                </div>
                <div className="space-y-1.5 font-mono text-[13px] text-[#F4F1EA]">
                  <div>Next.js 16 (App Router)</div>
                  <div>React 19 & State Engines</div>
                  <div>Node.js & Express.js</div>
                  <div>FastAPI (Python)</div>
                  <div>RESTful API Architecture</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#818CF8] font-semibold border-b border-[#242830] pb-2">
                  05 / STORAGE & INFRASTRUCTURE
                </div>
                <div className="space-y-1.5 font-mono text-[13px] text-[#F4F1EA]">
                  <div>MongoDB & Schema Indexing</div>
                  <div>PostgreSQL & Prisma</div>
                  <div>Docker & Containerization</div>
                  <div>Server-Sent Events (SSE)</div>
                  <div>Git & Monorepo Tooling</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF718C] font-semibold border-b border-[#242830] pb-2">
                  06 / TESTING & VERIFICATION
                </div>
                <div className="space-y-1.5 font-mono text-[13px] text-[#F4F1EA]">
                  <div>pytest & Unit Isolation</div>
                  <div>Playwright End-to-End</div>
                  <div>Structured Trace Generation</div>
                  <div>CI/CD GitHub Actions</div>
                  <div>Maintainer Pull-Request Review</div>
                </div>
              </div>
            </div>
          </div>
        </EditorialSection>

        {/* ============================================================ */}
        {/* 05 / ENGINEERING DISCIPLINE & HOW I WORK                     */}
        {/* ============================================================ */}
        <EditorialSection labelledBy="discipline-heading">
          <SectionIndex
            id="discipline-heading"
            number="05"
            title="HOW I WORK · ENGINEERING PRINCIPLES"
            icon={<BookOpen className="w-3.5 h-3.5" />}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
            {aboutData.howIWork?.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666B73] font-semibold">
                  RULE 0{idx + 1}
                </span>
                <h3 className="text-lg font-mono font-bold text-[#F4F1EA]">
                  {item.principle}
                </h3>
                <p className="text-[13px] text-[#9A9DA3] leading-relaxed">
                  {item.summary}
                </p>
                <div className="space-y-1 pt-1 text-[12px] text-[#C5C8CE] border-l border-[#242830] pl-4">
                  {item.practices.map((p, pIdx) => (
                    <div key={pIdx}>— {p}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </EditorialSection>
      </div>
    </PageShell>
  );
}
