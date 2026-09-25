import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "./PageTransition";

interface PageShellProps {
  children: React.ReactNode;
  activeSection?: "about" | "projects" | "open-source" | "connect";
}

export function PageShell({ children, activeSection }: PageShellProps) {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col justify-between selection:bg-[#E8E5DC] selection:text-ink">
      {/* Top Header Navigation */}
      <header
        role="banner"
        className="sticky top-0 z-30 w-full bg-canvas/90 backdrop-blur-sm border-b border-border-subtle/80 px-4 sm:px-10 md:px-14 py-3.5 sm:py-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center space-x-2 text-[12px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>OVERVIEW</span>
          </Link>

          {/* Minimal Section Links */}
          <nav
            aria-label="Subpage Navigation"
            className="flex items-center space-x-3 sm:space-x-6 text-[11px] font-mono uppercase tracking-editorial"
          >
            <Link
              href="/about"
              aria-current={activeSection === "about" ? "page" : undefined}
              className={`transition-colors py-1 ${
                activeSection === "about"
                  ? "text-ink font-semibold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              aria-current={activeSection === "projects" ? "page" : undefined}
              className={`transition-colors py-1 ${
                activeSection === "projects"
                  ? "text-ink font-semibold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              PROJECTS
            </Link>
            <Link
              href="/open-source"
              aria-current={activeSection === "open-source" ? "page" : undefined}
              className={`transition-colors py-1 ${
                activeSection === "open-source"
                  ? "text-ink font-semibold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              OSS
            </Link>
            <Link
              href="/connect"
              aria-current={activeSection === "connect" ? "page" : undefined}
              className={`transition-colors py-1 ${
                activeSection === "connect"
                  ? "text-ink font-semibold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              CONNECT
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-10 md:px-14 py-10 sm:py-16 md:py-20 flex-1">
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Footer */}
      <footer
        role="contentinfo"
        className="w-full border-t border-border-subtle/80 px-4 sm:px-10 md:px-14 py-8 text-center sm:text-right"
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-ink-subtle space-y-2 sm:space-y-0">
          <span>Himanshu Patro · AI / Software / Open Source</span>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-ink transition-colors">
              Return to Center Stage
            </Link>
            <span>·</span>
            <span>2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
