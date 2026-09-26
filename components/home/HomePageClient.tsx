"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Code, MapPin, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { EvidenceStrip } from "@/components/home/EvidenceStrip";
import { SystemConstellation } from "@/components/home/SystemConstellation";
import { SelectedWork } from "@/components/home/SelectedWork";
import { OpenSourcePreview } from "@/components/home/OpenSourcePreview";
import { PersonalCraft } from "@/components/home/PersonalCraft";

export function HomePageClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col justify-between selection:bg-[#E8E5DC] selection:text-ink overflow-x-hidden">
      {/* 1. Global Navigation Bar */}
      <header
        role="banner"
        className="sticky top-0 z-40 w-full bg-canvas/92 backdrop-blur-md border-b border-border-subtle/80 px-5 sm:px-10 md:px-14 py-3.5 sm:py-4 transition-colors"
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group flex items-baseline space-x-2 text-ink hover:text-ink-muted transition-colors select-none"
              aria-label="Himanshu Patro Home"
            >
              <span className="text-[13px] sm:text-[14px] font-semibold tracking-editorial uppercase font-mono">
                HIMANSHU PATRO
              </span>
              <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest hidden md:inline">
                / SYSTEMS & CODE INTELLIGENCE
              </span>
            </Link>

            <div className="sm:hidden flex items-center space-x-1.5 text-[10px] font-mono text-ink-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="flex items-center justify-start sm:justify-end space-x-5 sm:space-x-6 text-[11px] font-mono uppercase tracking-editorial overflow-x-auto pb-0.5 sm:pb-0"
          >
            <Link
              href="/about"
              className="text-ink-muted hover:text-ink transition-colors py-0.5 whitespace-nowrap"
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className="text-ink-muted hover:text-ink transition-colors py-0.5 whitespace-nowrap"
            >
              PROJECTS
            </Link>
            <Link
              href="/open-source"
              className="text-ink-muted hover:text-ink transition-colors py-0.5 whitespace-nowrap"
            >
              OPEN SOURCE
            </Link>
            <Link
              href="/connect"
              className="text-ink-muted hover:text-ink transition-colors py-0.5 whitespace-nowrap"
            >
              CONNECT
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Stream */}
      <main className="w-full flex-1">
        {/* 2. Dominant Hero Section */}
        <section
          aria-label="Engineering Positioning and Identity"
          className="w-full pt-14 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-5 sm:px-10 md:px-14"
        >
          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                <span className="px-2 py-0.5 rounded bg-canvas-subtle border border-border-subtle text-ink font-medium">
                  FULL-STACK SYSTEMS
                </span>
                <span>·</span>
                <span className="px-2 py-0.5 rounded bg-canvas-subtle border border-border-subtle text-ink font-medium">
                  AI / AGENTS
                </span>
                <span>·</span>
                <span className="px-2 py-0.5 rounded bg-canvas-subtle border border-border-subtle text-ink font-medium">
                  DEVELOPER TOOLING
                </span>
                <span>·</span>
                <span className="px-2 py-0.5 rounded bg-canvas-subtle border border-border-subtle text-ink font-medium">
                  CODE INTELLIGENCE
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-mono font-bold text-ink uppercase tracking-tight leading-[1.05]">
                HIMANSHU PATRO
              </h1>

              <p className="text-[17px] sm:text-[20px] md:text-[22px] text-ink leading-relaxed font-sans max-w-3xl font-normal">
                Software engineer building reliable systems around code, AI
                agents, developer tooling, and open-source code intelligence.
              </p>
            </motion.div>

            {/* Identity and Location Brief */}
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-[12px] font-mono text-ink-muted">
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-ink shrink-0" />
                  <span>Jamshedpur, Jharkhand, India</span>
                </div>
                <div className="hidden sm:inline text-border-subtle">|</div>
                <div className="flex items-center space-x-1.5">
                  <Code className="w-3.5 h-3.5 text-ink shrink-0" />
                  <span>B.Tech CSIT · Class of 2026</span>
                </div>
                <div className="hidden sm:inline text-border-subtle">|</div>
                <div className="text-[11px] text-ink-subtle">
                  ITER, Siksha &apos;O&apos; Anusandhan (SOA) University
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 md:pt-0">
                <a
                  href="#system-constellation"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-ink text-canvas hover:bg-ink-muted transition-colors text-[11px] font-mono uppercase tracking-editorial"
                >
                  <span>SYSTEM MAP</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#selected-work"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg border border-border-subtle hover:border-ink transition-colors text-[11px] font-mono uppercase tracking-editorial text-ink"
                >
                  <span>SELECTED WORK</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/connect"
                  className="inline-flex items-center space-x-1 px-4 py-2 rounded-lg border border-border-subtle hover:border-ink transition-colors text-[11px] font-mono uppercase tracking-editorial text-ink"
                >
                  <span>CONTACT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Evidence Strip (50+ / 30+ / 2026) */}
        <section aria-label="Verified Contribution Signals">
          <EvidenceStrip />
        </section>

        {/* 4. Interactive Visual Centerpiece: System Constellation */}
        <section
          id="system-constellation"
          className="w-full py-16 sm:py-24 px-5 sm:px-10 md:px-14 border-b border-border-subtle/80"
        >
          <div className="max-w-5xl mx-auto">
            <SystemConstellation />
          </div>
        </section>

        {/* 5. Substantial Selected Work Section */}
        <section
          id="selected-work"
          className="w-full py-16 sm:py-24 px-5 sm:px-10 md:px-14 border-b border-border-subtle/80"
        >
          <div className="max-w-5xl mx-auto">
            <SelectedWork />
          </div>
        </section>

        {/* 6. Open Source Ecosystem Section */}
        <section
          id="open-source-preview"
          className="w-full py-16 sm:py-24 px-5 sm:px-10 md:px-14 border-b border-border-subtle/80"
        >
          <div className="max-w-5xl mx-auto">
            <OpenSourcePreview />
          </div>
        </section>

        {/* 7. Personal Section: Discipline Beyond Code */}
        <section
          id="personal-craft"
          className="w-full py-16 sm:py-24 px-5 sm:px-10 md:px-14"
        >
          <div className="max-w-5xl mx-auto">
            <PersonalCraft />
          </div>
        </section>
      </main>

      {/* 8. Editorial Footer */}
      <footer
        role="contentinfo"
        className="w-full border-t border-border-subtle/80 px-5 sm:px-10 md:px-14 pt-12 pb-14 text-ink-muted select-none bg-canvas-subtle/30"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2 max-w-md">
            <div className="text-[13px] font-semibold text-ink uppercase tracking-editorial font-mono">
              HIMANSHU PATRO
            </div>
            <p className="text-[13px] text-ink-muted leading-relaxed font-sans">
              Building systems. Learning in public.
              <br />
              Based in Jamshedpur, Jharkhand, India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center md:items-end gap-4 sm:gap-6 text-[11px] font-mono text-ink-subtle">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/hopstreax"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors inline-flex items-center space-x-0.5"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/himanshupatro/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors inline-flex items-center space-x-0.5"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span>·</span>
              <a
                href="mailto:himanshupatro4@gmail.com"
                className="hover:text-ink transition-colors inline-flex items-center space-x-0.5"
              >
                <span>EMAIL</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span>·</span>
              <a
                href="https://x.com/hopstreax"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors inline-flex items-center space-x-0.5"
              >
                <span>X / TWITTER</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="text-ink-subtle">
              <span>© 2026 HIMANSHU PATRO</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
