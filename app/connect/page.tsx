import React from "react";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  FileText,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialSection, SectionIndex, MetadataRow } from "@/components/primitives/Editorial";
import { connectData } from "@/data/social";
import { aboutData } from "@/data/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Direct communication directory for Himanshu Patro: open to conversations about software engineering, developer tools, AI systems, and full-time engineering roles.",
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    title: "Connect — Himanshu Patro",
    description:
      "Direct communication directory for Himanshu Patro: open to conversations about software engineering, developer tools, AI systems, and full-time engineering roles.",
    url: "https://himanshupatro.dev/connect",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect — Himanshu Patro",
    description:
      "Direct communication directory for Himanshu Patro: open to conversations about software engineering, developer tools, AI systems, and full-time engineering roles.",
  },
};

const allLinks = [
  ...connectData.links,
  ...(connectData.secondaryLinks || []),
];

export default function ConnectPage() {
  return (
    <PageShell activeSection="connect">
      {/* Editorial Opening / Hero Statement */}
      <header className="pb-10 mb-14 border-b border-border-subtle/80 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2.5 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80 font-medium">
              CONNECT / 01
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
              DIRECT CHANNELS
            </span>
          </div>
          <span className="text-[11px] font-mono text-ink-subtle hidden sm:inline-block">
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-[34px] sm:text-[46px] md:text-[54px] font-semibold tracking-tight text-ink leading-[1.12]">
            I’m open to conversations about software engineering, developer tools, AI systems, and interesting problems.
          </h1>

          <p className="text-[16px] sm:text-[18px] text-ink-muted leading-relaxed font-sans max-w-3xl">
            Whether you are discussing engineering roles, exploring autonomous browser testing with TraceKit, or collaborating on AST and code intelligence tools like Graphify, my inbox and channels are always open.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-ink-subtle border-t border-border-subtle/50">
          <span className="flex items-center space-x-1.5 text-ink font-medium">
            <MapPin className="w-3 h-3 text-ink-muted" />
            <span>BASE: JAMSHEDPUR, JHARKHAND, INDIA</span>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>SEEKING: FULL-TIME SDE / AI SYSTEMS</span>
          <span className="hidden sm:inline">·</span>
          <span>CLASS OF 2026</span>
        </div>
      </header>

      <div className="flex flex-col space-y-16">
        {/* Large Typographic Communication Directory (List Pattern, No Box Cards) */}
        <section aria-labelledby="directory-heading" className="space-y-6">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-3.5 h-3.5 text-ink" />
              <h2 id="directory-heading">DIRECT COMMUNICATION DIRECTORY</h2>
            </div>
            <span>6 VERIFIED CHANNELS</span>
          </div>

          <div className="divide-y divide-border-subtle border-t-2 border-ink border-b border-border-subtle">
            {allLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="group block py-6 sm:py-7 px-2 -mx-2 hover:bg-canvas-subtle/30 rounded-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                        {link.platform}
                      </span>
                      <span className="text-[12px] font-mono text-ink-muted">
                        {link.handle}
                      </span>
                    </div>

                    <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-semibold text-ink tracking-tight group-hover:translate-x-1.5 transition-transform duration-200">
                      {link.label}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2 text-[12px] font-mono font-semibold uppercase tracking-wider text-ink shrink-0 pt-2 sm:pt-0">
                    <span className="group-hover:underline underline-offset-4 decoration-border-strong">
                      {link.actionText || "OPEN CHANNEL"}
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Editorial Availability & Focus Brief */}
        <EditorialSection labelledBy="availability-heading">
          <SectionIndex
            id="availability-heading"
            number="02"
            title="CURRENT AVAILABILITY & PROFESSIONAL SCOPE"
            icon={<Send className="w-3.5 h-3.5" />}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle border-t border-b border-border-subtle py-6">
            <div className="sm:px-4 first:sm:pl-0 space-y-1.5 py-3 sm:py-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                LOCATION & RELOCATION
              </span>
              <div className="text-[14px] font-medium text-ink">
                {aboutData.location}
              </div>
              <p className="text-[12px] text-ink-muted">
                Open to in-person and remote roles across India and globally.
              </p>
            </div>

            <div className="sm:px-4 space-y-1.5 py-3 sm:py-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                TARGET OPPORTUNITIES
              </span>
              <div className="text-[14px] font-medium text-ink">
                Full-Time SDE / AI Systems
              </div>
              <p className="text-[12px] text-ink-muted">
                Software development, compiler/AST tooling, and agent runtimes.
              </p>
            </div>

            <div className="sm:px-4 last:sm:pr-0 space-y-1.5 py-3 sm:py-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle font-semibold">
                PRIMARY FOCUS
              </span>
              <div className="text-[14px] font-medium text-ink">
                Autonomous Testing & ASTs
              </div>
              <p className="text-[12px] text-ink-muted">
                Lead developer on TraceKit and core contributor to Graphify.
              </p>
            </div>
          </div>

          <p className="text-[14px] text-ink-muted leading-relaxed max-w-2xl pt-2">
            Graduating in 2026 with a Bachelor of Technology in Computer Science and Information Technology from ITER, SOA University. Open to full-time roles starting 2026 and immediate internship/contract engineering engagements.
          </p>
        </EditorialSection>
      </div>
    </PageShell>
  );
}
