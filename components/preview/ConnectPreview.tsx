import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { connectData } from "@/data/social";

export function ConnectPreview() {
  return (
    <div className="flex flex-col space-y-4">
      {/* Section metadata badge */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80">
          04 / CONNECT
        </span>
        <span className="text-[11px] font-mono text-ink-subtle">
          DIRECTORY
        </span>
      </div>

      {/* Title & Tagline */}
      <div>
        <h2 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-ink">
          {connectData.heading}
        </h2>
        <p className="text-[12px] text-ink-muted mt-0.5 leading-normal">
          {connectData.tagline}
        </p>
      </div>

      {/* Directory of verified social links */}
      <div className="pt-2 border-t border-border-subtle/60 flex flex-col space-y-1.5">
        {connectData.links.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between p-1.5 -mx-1.5 rounded hover:bg-surface/80 transition-colors group/link"
          >
            <span className="text-[13px] font-medium text-ink">
              {link.label}
            </span>
            <span className="text-[11px] font-mono text-ink-muted group-hover/link:text-ink transition-colors flex items-center space-x-1">
              <span>{link.handle}</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/link:opacity-100 transition-opacity" />
            </span>
          </a>
        ))}
      </div>

      {/* Action Link */}
      <div className="pt-1 border-t border-border-subtle/60">
        <Link
          href="/connect"
          className="inline-flex items-center space-x-1.5 text-[11px] font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors group"
        >
          <span>{connectData.actionPrompt}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
