"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { EvidenceStrip } from "@/components/home/EvidenceStrip";
import { SystemConstellation } from "@/components/home/SystemConstellation";
import { SelectedWork } from "@/components/home/SelectedWork";
import { OpenSourcePreview } from "@/components/home/OpenSourcePreview";
import { PersonalCraft } from "@/components/home/PersonalCraft";

export function HomePageClient() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F1EA] flex flex-col justify-between selection:bg-[#273142] selection:text-[#F4F1EA] overflow-x-hidden relative">
      {/* Ambient background technical coordinate grid & cursor glow */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F4F1EA 1px, transparent 1px), linear-gradient(to bottom, #F4F1EA 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Subtle cursor-reactive glow */}
      <div
        className="fixed pointer-events-none w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 transition-transform duration-700 ease-out z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(155, 123, 255, 0.25) 0%, rgba(92, 168, 255, 0.15) 40%, transparent 70%)",
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      {/* 1. Minimal Editorial Navigation Header */}
      <header
        role="banner"
        className="sticky top-0 z-50 w-full bg-[#08090B]/90 backdrop-blur-md border-b border-[#242830] px-5 sm:px-10 md:px-14 py-4"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-[#F4F1EA] hover:text-[#9B7BFF] transition-colors"
            aria-label="Himanshu Patro Home"
          >
            <span className="text-[13px] sm:text-[14px] font-mono font-bold uppercase tracking-wider">
              HIMANSHU PATRO
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#666B73] hidden sm:inline">
              / ROOT_00
            </span>
          </Link>

          <nav
            aria-label="Primary Navigation"
            className="flex items-center space-x-6 sm:space-x-8 text-[11px] font-mono uppercase tracking-widest"
          >
            <Link
              href="/about"
              className="text-[#9A9DA3] hover:text-[#F4F1EA] transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className="text-[#9A9DA3] hover:text-[#FFB86B] transition-colors"
            >
              WORK
            </Link>
            <Link
              href="/open-source"
              className="text-[#9A9DA3] hover:text-[#45D6A0] transition-colors"
            >
              OSS
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
        {/* 1. IMMERSIVE HERO */}
        <section
          aria-label="Engineering Positioning and Identity"
          className="w-full pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 px-5 sm:px-10 md:px-14 border-b border-[#242830] relative"
        >
          <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
            {/* Small Technical Metadata */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
              <span className="flex items-center space-x-2 text-[#9A9DA3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#45D6A0] animate-pulse" />
                <span>JAMSHEDPUR / INDIA</span>
              </span>
              <span>·</span>
              <span className="text-[#9A9DA3]">CSIT / 2026</span>
              <span>·</span>
              <span className="text-[#45D6A0] font-semibold">
                AVAILABLE FOR ENGINEERING WORK
              </span>
            </div>

            {/* Enormous Typography Display */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h1 className="text-[clamp(4.5rem,10vw,9rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] leading-[0.92] select-none">
                <div>HIMANSHU</div>
                <div className="text-[#9A9DA3]">PATRO</div>
              </h1>

              <div className="pt-4 max-w-3xl">
                <p className="text-[clamp(1.25rem,2vw,2rem)] text-[#F4F1EA] font-sans font-light leading-relaxed">
                  Software engineer building reliable systems around code, AI agents, developer tooling and open-source code intelligence.
                </p>
              </div>
            </motion.div>

            {/* Restrained Domain Signals & Scroll Target */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#242830]">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-wider text-[#666B73]">
                <span className="text-[#9B7BFF]">AI / AGENTS</span>
                <span>·</span>
                <span className="text-[#5CA8FF]">CODE INTELLIGENCE</span>
                <span>·</span>
                <span className="text-[#45D6A0]">OPEN SOURCE</span>
                <span>·</span>
                <span className="text-[#FFB86B]">SYSTEMS ARCHITECTURE</span>
                <span>·</span>
                <span className="text-[#FF718C]">HUMAN CRAFT</span>
              </div>

              <a
                href="#system-constellation"
                className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#9A9DA3] hover:text-[#F4F1EA] transition-colors"
              >
                <span>EXPLORE SYSTEM MAP</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 2. EVIDENCE (Large Typographic Numbers Separated by Hairline Rules) */}
        <section aria-label="Verified Contribution Signals">
          <EvidenceStrip />
        </section>

        {/* 3. SYSTEM CONSTELLATION (Architecture Diagram Network) */}
        <section
          id="system-constellation"
          className="w-full py-20 sm:py-28 px-5 sm:px-10 md:px-14 border-b border-[#242830]"
        >
          <div className="max-w-6xl mx-auto">
            <SystemConstellation />
          </div>
        </section>

        {/* 4. SELECTED WORK (Vertical Editorial Sequence, 3 Distinct Compositions) */}
        <section
          id="selected-work"
          className="w-full py-20 sm:py-28 px-5 sm:px-10 md:px-14 border-b border-[#242830]"
        >
          <div className="max-w-6xl mx-auto">
            <SelectedWork />
          </div>
        </section>

        {/* 5. OPEN SOURCE (Engineering Contribution Map & Repository Tree) */}
        <section
          id="open-source-preview"
          className="w-full py-20 sm:py-28 px-5 sm:px-10 md:px-14 border-b border-[#242830]"
        >
          <div className="max-w-6xl mx-auto">
            <OpenSourcePreview />
          </div>
        </section>

        {/* 6. PERSONAL SECTION (BEYOND CODE Typography & Abstract Representations) */}
        <section
          id="personal-craft"
          className="w-full py-20 sm:py-28 px-5 sm:px-10 md:px-14 border-b border-[#242830]"
        >
          <div className="max-w-6xl mx-auto">
            <PersonalCraft />
          </div>
        </section>

        {/* 7. FINAL CTA (Large Typography, Generous Whitespace, Zero Cards) */}
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
