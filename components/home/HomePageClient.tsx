"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { EvidenceStrip } from "@/components/home/EvidenceStrip";
import { OrganicNetwork } from "@/components/home/OrganicNetwork";
import { SelectedWork } from "@/components/home/SelectedWork";
import { OpenSourcePreview } from "@/components/home/OpenSourcePreview";
import { PersonalCraft } from "@/components/home/PersonalCraft";

export function HomePageClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-transparent text-[#F4F1EA] flex flex-col justify-between selection:bg-[#273142] selection:text-[#F4F1EA] overflow-x-hidden relative">

      {/* 1. Integrated Editorial Header (Matching Reference Image) */}
      <header
        role="banner"
        className="sticky top-0 z-50 w-full bg-[#08090B]/85 backdrop-blur-md border-b border-[#242830]/80 px-5 sm:px-10 md:px-14 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2.5 text-[#F4F1EA] hover:text-[#9B7BFF] transition-colors group"
            aria-label="Himanshu Patro Home"
          >
            <span className="text-[17px] font-mono font-bold tracking-tight text-[#F4F1EA] group-hover:text-[#9B7BFF] transition-colors">
              HP
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#666B73] hidden sm:inline">
              / HIMANSHU PATRO
            </span>
          </Link>

          <nav
            aria-label="Primary Navigation"
            className="flex items-center space-x-6 sm:space-x-8 text-[11px] font-mono uppercase tracking-widest"
          >
            <Link
              href="/about"
              className="text-[#9A9DA3] hover:text-[#E2C08D] transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className="text-[#9A9DA3] hover:text-[#5CA8FF] transition-colors"
            >
              PROJECTS
            </Link>
            <Link
              href="/open-source"
              className="text-[#9A9DA3] hover:text-[#45D6A0] transition-colors"
            >
              OPEN SOURCE
            </Link>
            <Link
              href="/connect"
              className="text-[#9A9DA3] hover:text-[#FF718C] transition-colors"
            >
              CONNECT
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Stream */}
      <main className="w-full flex-1 relative z-10">
        {/* ============================================================ */}
        {/* 1. TWO-PART HERO COMPOSITION (Left: 38% / Right: 62%)         */}
        {/* ============================================================ */}
        <section
          aria-label="Engineering Positioning and Knowledge Ecosystem"
          className="w-full min-h-[calc(100vh-65px)] flex flex-col justify-center py-12 lg:py-16 px-5 sm:px-10 md:px-14 border-b border-[#242830] relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            {/* LEFT COLUMN: Editorial Typography & Positioning (38-40%) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6 z-10"
            >
              {/* Small Status Metadata */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10.5px] font-mono uppercase tracking-widest text-[#666B73]">
                <span className="flex items-center space-x-2 text-[#9A9DA3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#45D6A0] animate-pulse" />
                  <span>JAMSHEDPUR, INDIA</span>
                </span>
                <span className="text-[#343943]">·</span>
                <span className="text-[#9A9DA3]">CSIT 2026</span>
                <span className="text-[#343943]">·</span>
                <span className="text-[#45D6A0] font-semibold">
                  AVAILABLE FOR ROLES
                </span>
              </div>

              {/* Large Editorial Headline (Clean 3-Line Composition) */}
              <h1 className="text-[clamp(2.35rem,3.8vw,3.75rem)] font-sans font-bold tracking-tight text-[#F4F1EA] leading-[1.08]">
                Software engineer<br />
                building systems around<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B7BFF] via-[#5CA8FF] to-[#45D6A0]">
                  code, AI
                </span>{" "}
                and{" "}
                <span className="font-serif italic font-normal text-[#FFB86B]">
                  intelligence.
                </span>
              </h1>

              {/* Concise Supporting Description */}
              <p className="text-[clamp(1.05rem,1.5vw,1.25rem)] text-[#C5C8CE] font-sans font-light leading-relaxed max-w-lg">
                I’m Himanshu — building reliable systems around code intelligence, autonomous AI agents, developer tooling, and maintainer-reviewed open source.
              </p>

              {/* Action Buttons & Secondary Link */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#selected-work"
                  className="group inline-flex items-center space-x-2.5 px-6 py-3 rounded-full border border-[#343943] bg-[#0E1217]/90 text-[#F4F1EA] text-[13px] font-mono uppercase tracking-wider hover:border-[#9B7BFF] hover:bg-[#141920] hover:shadow-[0_0_24px_rgba(155,123,255,0.22)] transition-all duration-300"
                >
                  <span>Explore Systems</span>
                  <ArrowRight className="w-4 h-4 text-[#9B7BFF] group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/about"
                  className="inline-flex items-center space-x-1.5 px-4 py-3 text-[12px] font-mono uppercase tracking-wider text-[#9A9DA3] hover:text-[#F4F1EA] transition-colors"
                >
                  <span>Read Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#666B73]" />
                </Link>
              </div>

              {/* Factual Output Quick Strip */}
              <div className="pt-6 border-t border-[#242830] flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono text-[#666B73]">
                <span className="text-[#45D6A0]">50+ MERGED/CLOSED PRS</span>
                <span className="text-[#343943]">·</span>
                <span className="text-[#5CA8FF]">30+ GRAPHIFY PRS</span>
                <span className="text-[#343943]">·</span>
                <span className="text-[#FFB86B]">4 SYSTEMS</span>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Large Interactive Organic Network Visualization (60-65%) */}
            <div className="lg:col-span-7 relative z-10 w-full lg:-ml-6">
              <OrganicNetwork />
            </div>
          </div>
        </section>

        {/* 2. EVIDENCE (Large Typographic Numbers Separated by Hairline Rules) */}
        <section aria-label="Verified Contribution Signals">
          <EvidenceStrip />
        </section>

        {/* 3. SELECTED WORK (Vertical Editorial Sequence, 3 Distinct Compositions) */}
        <section
          id="selected-work"
          className="w-full py-20 sm:py-28 px-5 sm:px-10 md:px-14 border-b border-[#242830]"
        >
          <div className="max-w-6xl mx-auto">
            <SelectedWork />
          </div>
        </section>

        {/* 4. OPEN SOURCE (Engineering Contribution Map & Repository Tree) */}
        <section
          id="open-source-preview"
          className="w-full py-20 sm:py-28 px-5 sm:px-10 md:px-14 border-b border-[#242830]"
        >
          <div className="max-w-6xl mx-auto">
            <OpenSourcePreview />
          </div>
        </section>

        {/* 5. PERSONAL SECTION (BEYOND CODE Typography & Abstract Representations) */}
        <section
          id="personal-craft"
          className="w-full py-20 sm:py-28 px-5 sm:px-10 md:px-14 border-b border-[#242830]"
        >
          <div className="max-w-6xl mx-auto">
            <PersonalCraft />
          </div>
        </section>

        {/* 6. FINAL CTA (Large Typography, Generous Whitespace, Zero Cards) */}
        <section
          aria-label="Direct Engagement and Channels"
          className="w-full py-24 sm:py-36 px-5 sm:px-10 md:px-14"
        >
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
                COLLABORATION & ENGINEERING /
              </div>
              <h2 className="text-[clamp(3rem,6.5vw,5.5rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] leading-[0.95]">
                LET&apos;S<br />
                BUILD<br />
                SOMETHING<br />
                USEFUL.
              </h2>
            </div>

            {/* Large Interactive Typographic Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#242830]">
              {[
                {
                  label: "GITHUB",
                  url: "https://github.com/hopstreax",
                  accent: "#5CA8FF",
                  desc: "Source code & repositories",
                },
                {
                  label: "LINKEDIN",
                  url: "https://www.linkedin.com/in/himanshupatro/",
                  accent: "#9B7BFF",
                  desc: "Professional history",
                },
                {
                  label: "EMAIL",
                  url: "mailto:himanshupatro4@gmail.com",
                  accent: "#45D6A0",
                  desc: "himanshupatro4@gmail.com",
                },
                {
                  label: "X",
                  url: "https://x.com/hopstreax",
                  accent: "#FF718C",
                  desc: "Technical observations",
                },
              ].map((channel) => (
                <a
                  key={channel.label}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block space-y-2 py-4 border-b border-[#242830] transition-colors"
                >
                  <div className="flex items-center justify-between text-2xl sm:text-3xl font-mono font-bold uppercase text-[#F4F1EA] group-hover:text-[#9B7BFF] transition-colors">
                    <span>{channel.label}</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div className="text-[11px] font-mono text-[#666B73]">
                    {channel.desc}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Editorial Footer with Hairline Rule */}
      <footer
        role="contentinfo"
        className="w-full border-t border-[#242830] py-10 px-5 sm:px-10 md:px-14 bg-[#08090B] text-[#666B73] text-[11px] font-mono uppercase tracking-widest select-none"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-baseline justify-between gap-4">
          <div>
            <span>HIMANSHU PATRO</span> · <span>JAMSHEDPUR, INDIA</span>
          </div>
          <div>
            <span>© 2026</span> · <span>ALL SYSTEMS ARCHIVAL RECORD</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
