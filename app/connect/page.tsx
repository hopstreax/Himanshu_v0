import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { connectData } from "@/data/social";
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

export default function ConnectPage() {
  const primaryChannels = [
    {
      name: "GITHUB",
      href: "https://github.com/hopstreax",
      handle: "@hopstreax",
      scope: "Repositories, AST parsers & verified pull requests",
      accent: "#5CA8FF",
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/in/himanshupatro/",
      handle: "in/himanshupatro",
      scope: "Professional background, internships & engineering network",
      accent: "#9B7BFF",
    },
    {
      name: "EMAIL",
      href: "mailto:himanshupatro4@gmail.com",
      handle: "himanshupatro4@gmail.com",
      scope: "Direct inbox for engineering roles, inquiries & systems discussion",
      accent: "#45D6A0",
    },
    {
      name: "X / TWITTER",
      href: "https://x.com/hopstreax",
      handle: "@hopstreax",
      scope: "Observations on developer tools, AI agents & code intelligence",
      accent: "#FF718C",
    },
  ];

  return (
    <PageShell activeSection="connect">
      {/* Editorial Opening / Hero Statement */}
      <header className="pb-12 mb-16 border-b border-[#242830] space-y-8">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF718C]" />
            <span className="text-[#F4F1EA] font-semibold">CONNECT / 01</span>
            <span>·</span>
            <span>COMMUNICATION DIRECTORY</span>
          </div>
          <span className="text-[#45D6A0] font-semibold hidden sm:inline-block">
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Controlled Editorial Typography: LET'S TALK. */}
        <div className="space-y-4 max-w-5xl">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] leading-[0.95] select-none">
            LET&apos;S<br />
            <span className="text-[#9A9DA3]">TALK.</span>
          </h1>

          <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-[#C5C8CE] font-sans font-light leading-relaxed max-w-3xl pt-4">
            I’m open to conversations about software engineering, developer tools, AI systems, and interesting engineering problems.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-[#666B73] border-t border-[#242830]">
          <span className="flex items-center space-x-1.5 text-[#F4F1EA]">
            <MapPin className="w-3.5 h-3.5 text-[#FFB86B]" />
            <span>BASE: JAMSHEDPUR, JHARKHAND, INDIA</span>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>SEEKING: FULL-TIME SDE / AI SYSTEMS ROLES</span>
          <span className="hidden sm:inline">·</span>
          <span>CLASS OF 2026</span>
        </div>
      </header>

      {/* Large Interactive Links Directory (Zero Cards, Editorial Rows) */}
      <div className="space-y-16">
        <div className="divide-y divide-[#242830] border-t-2 border-[#F4F1EA] border-b border-[#242830]">
          {primaryChannels.map((channel, idx) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-10 sm:py-14 transition-transform duration-300 hover:translate-x-2"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-[11px] font-mono">
                    <span className="text-[#666B73]">0{idx + 1}</span>
                    <span className="text-[#343943]">/</span>
                    <span className="text-[#666B73] uppercase tracking-widest">
                      {channel.handle}
                    </span>
                  </div>

                  <h2
                    className="text-[clamp(2rem,4vw,3.5rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] transition-colors duration-200"
                    style={{
                      // Custom hover via CSS class handled or inline
                    }}
                  >
                    {channel.name}
                  </h2>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="text-[13px] text-[#9A9DA3] font-sans max-w-sm hidden sm:block">
                    {channel.scope}
                  </p>
                  <ArrowUpRight
                    className="w-8 h-8 text-[#666B73] group-hover:text-[#F4F1EA] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: channel.accent }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Secondary Channels & Identity Summary */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 text-[12px] font-mono text-[#666B73]">
          <div>
            <span>LOCATION: JAMSHEDPUR, JHARKHAND, INDIA</span>
            <span className="mx-2">·</span>
            <span>TIMEZONE: IST (UTC+5:30)</span>
          </div>

          <div className="flex items-center space-x-6">
            {connectData.secondaryLinks?.map((sec) => (
              <a
                key={sec.label}
                href={sec.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F4F1EA] transition-colors inline-flex items-center space-x-1"
              >
                <span>{sec.label.toUpperCase()}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
