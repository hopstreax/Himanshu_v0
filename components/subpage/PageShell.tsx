import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageTransition } from "./PageTransition";

interface PageShellProps {
  children: React.ReactNode;
  activeSection?: "about" | "projects" | "open-source" | "connect";
}

export function PageShell({ children, activeSection }: PageShellProps) {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col justify-between selection:bg-[#273142] selection:text-[#F4F1EA]">
      {/* Editorial Global Navigation */}
      <header
        role="banner"
        className="sticky top-0 z-30 w-full bg-canvas/92 backdrop-blur-md border-b border-border-subtle/80 px-5 sm:px-10 md:px-14 py-3.5 sm:py-4 transition-colors"
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-center justify-between">
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

            {/* Mobile Back shortcut */}
            <Link
              href="/"
              className="sm:hidden inline-flex items-center space-x-1 text-[10px] font-mono uppercase tracking-widest text-ink-subtle hover:text-ink"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>OVERVIEW</span>
            </Link>
          </div>

          {/* Minimal Section Links */}
          <nav
            aria-label="Portfolio Navigation"
            className="flex items-center justify-start sm:justify-end space-x-4 sm:space-x-6 text-[11px] font-mono uppercase tracking-editorial overflow-x-auto pb-1 sm:pb-0"
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
        </div>
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
