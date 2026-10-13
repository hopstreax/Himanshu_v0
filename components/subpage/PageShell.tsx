"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { PageTransition } from "./PageTransition";

interface PageShellProps {
  children: React.ReactNode;
  activeSection?: "about" | "projects" | "open-source" | "connect";
}

export function PageShell({ children, activeSection }: PageShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-ink flex flex-col justify-between selection:bg-[#273142] selection:text-[#F4F1EA]">
      {/* Editorial Global Navigation */}
      <header
        role="banner"
        className="sticky top-0 z-30 w-full bg-[#08090B]/85 backdrop-blur-md border-b border-[#242830]/80 px-5 sm:px-10 md:px-14 py-3.5 sm:py-4 transition-colors"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-baseline space-x-2 text-ink hover:text-ink-muted transition-colors select-none"
            aria-label="Return to portfolio overview"
          >
            <span className="text-[13px] sm:text-[14px] font-semibold tracking-editorial uppercase">
              HIMANSHU PATRO
            </span>
            <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest hidden md:inline">
              / JOURNAL
            </span>
          </Link>

          {/* Desktop Section Links */}
          <nav
            aria-label="Portfolio Navigation"
            className="hidden sm:flex items-center space-x-6 text-[11px] font-mono uppercase tracking-editorial"
          >
            <Link
              href="/about"
              aria-current={activeSection === "about" ? "page" : undefined}
              className={`transition-colors py-0.5 relative whitespace-nowrap ${
                activeSection === "about"
                  ? "text-ink font-semibold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              ABOUT
              {activeSection === "about" && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ink" />
              )}
            </Link>

            <Link
              href="/projects"
              aria-current={activeSection === "projects" ? "page" : undefined}
              className={`transition-colors py-0.5 relative whitespace-nowrap ${
                activeSection === "projects"
                  ? "text-ink font-semibold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              PROJECTS
              {activeSection === "projects" && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ink" />
              )}
            </Link>

            <Link
              href="/open-source"
              aria-current={activeSection === "open-source" ? "page" : undefined}
              className={`transition-colors py-0.5 relative whitespace-nowrap ${
                activeSection === "open-source"
                  ? "text-ink font-semibold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              OPEN SOURCE
              {activeSection === "open-source" && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ink" />
              )}
            </Link>

            <Link
              href="/connect"
              aria-current={activeSection === "connect" ? "page" : undefined}
              className={`transition-colors py-0.5 relative whitespace-nowrap ${
                activeSection === "connect"
                  ? "text-ink font-semibold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              CONNECT
              {activeSection === "connect" && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ink" />
              )}
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="sm:hidden p-1.5 -mr-1.5 text-ink-muted hover:text-ink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9B7BFF]"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-ink" />
            ) : (
              <Menu className="w-5 h-5 text-ink" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="sm:hidden max-w-5xl mx-auto pt-4 pb-2 border-t border-[#242830] mt-3 space-y-2 font-mono text-[12px] uppercase tracking-widest">
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2.5 px-2 rounded hover:bg-[#12161D] transition-colors ${
                activeSection === "about"
                  ? "text-[#E2C08D] font-bold bg-[#12161D]/60"
                  : "text-[#C5C8CE] hover:text-[#E2C08D]"
              }`}
            >
              <span>01 / ABOUT</span>
              <span className="text-[10px] text-[#666B73]">DOSSIER</span>
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2.5 px-2 rounded hover:bg-[#12161D] transition-colors ${
                activeSection === "projects"
                  ? "text-[#5CA8FF] font-bold bg-[#12161D]/60"
                  : "text-[#C5C8CE] hover:text-[#5CA8FF]"
              }`}
            >
              <span>02 / PROJECTS</span>
              <span className="text-[10px] text-[#666B73]">SYSTEMS</span>
            </Link>
            <Link
              href="/open-source"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2.5 px-2 rounded hover:bg-[#12161D] transition-colors ${
                activeSection === "open-source"
                  ? "text-[#45D6A0] font-bold bg-[#12161D]/60"
                  : "text-[#C5C8CE] hover:text-[#45D6A0]"
              }`}
            >
              <span>03 / OPEN SOURCE</span>
              <span className="text-[10px] text-[#666B73]">60+ PRS</span>
            </Link>
            <Link
              href="/connect"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2.5 px-2 rounded hover:bg-[#12161D] transition-colors ${
                activeSection === "connect"
                  ? "text-[#FF718C] font-bold bg-[#12161D]/60"
                  : "text-[#C5C8CE] hover:text-[#FF718C]"
              }`}
            >
              <span>04 / CONNECT</span>
              <span className="text-[10px] text-[#666B73]">SIGNALS</span>
            </Link>
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-1.5 py-2 px-2 text-[10px] text-ink-subtle hover:text-ink pt-2 border-t border-[#242830]/60"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>RETURN TO OVERVIEW</span>
            </Link>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-5xl mx-auto px-5 sm:px-10 md:px-14 py-10 sm:py-16 md:py-20 flex-1">
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Editorial Footer (Closing Page of Portfolio) */}
      <footer
        role="contentinfo"
        className="w-full border-t border-border-subtle/80 px-5 sm:px-10 md:px-14 pt-12 pb-14 text-ink-muted select-none"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Identity & Closing Statement */}
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

          {/* Quick Links & Year */}
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
