import React from "react";
import { ArrowUpRight, Mail, Github, Linkedin, Twitter, MessageSquare, Compass, Send } from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { EditorialHeader } from "@/components/subpage/EditorialHeader";
import { connectData } from "@/data/social";
import { aboutData } from "@/data/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Direct communication directory and channels for Himanshu Patro — Open for full-time software engineering roles & open-source collaboration.",
  openGraph: {
    title: "Connect — Himanshu Patro",
    description:
      "Direct communication directory and channels for Himanshu Patro — Open for full-time software engineering roles & open-source collaboration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect — Himanshu Patro",
    description:
      "Direct communication directory and channels for Himanshu Patro — Open for full-time software engineering roles & open-source collaboration.",
  },
};

const platformIcons: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-4 h-4 text-ink" />,
  LinkedIn: <Linkedin className="w-4 h-4 text-ink" />,
  X: <Twitter className="w-4 h-4 text-ink" />,
  Email: <Mail className="w-4 h-4 text-ink" />,
};

export default function ConnectPage() {
  return (
    <PageShell activeSection="connect">
      <EditorialHeader
        sectionNumber="04 / CONNECT"
        title="Connect & Directory"
        subtitle={connectData.tagline}
        badge="OPEN TO WORK"
      />

      <div className="flex flex-col space-y-14">
        {/* Main Direct Channels */}
        <section aria-labelledby="channels-heading">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-ink" />
            <h2 id="channels-heading">VERIFIED CHANNELS & PROFILES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {connectData.links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="group p-5 rounded-xl border border-border-subtle bg-canvas-subtle/50 hover:bg-surface hover:border-border-muted transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-md bg-canvas border border-border-subtle/80 text-ink">
                      {platformIcons[link.platform] || <Compass className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-ink group-hover:text-ink transition-colors">
                        {link.label}
                      </div>
                      <div className="text-[12px] font-mono text-ink-muted">
                        {link.handle}
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-ink-subtle group-hover:text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-ink-subtle group-hover:text-ink-muted pt-2 border-t border-border-subtle/40">
                  {link.actionText}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Status / Availability Brief */}
        <section aria-labelledby="status-heading" className="pt-8 border-t border-border-subtle/80">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-6">
            <Send className="w-3.5 h-3.5 text-ink" />
            <h2 id="status-heading">AVAILABILITY & FOCUS</h2>
          </div>

          <div className="p-6 rounded-xl border border-border-subtle bg-canvas-subtle/30 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px]">
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-ink-subtle mb-1">
                  CURRENT BASE
                </span>
                <span className="font-medium text-ink">{aboutData.location}</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-ink-subtle mb-1">
                  SEEKING
                </span>
                <span className="font-medium text-ink">
                  Full-time SDE / AI Systems / Full-Stack
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-ink-subtle mb-1">
                  PRIMARY FOCUS
                </span>
                <span className="font-medium text-ink">
                  Autonomous Testing & AST Tooling
                </span>
              </div>
            </div>

            <p className="text-[14px] text-ink-muted leading-relaxed pt-3 border-t border-border-subtle/60">
              Whether you are discussing engineering opportunities, interested in AI test automation, or collaborating on AST and code intelligence tools like Graphify, feel free to reach out directly via email or LinkedIn.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
