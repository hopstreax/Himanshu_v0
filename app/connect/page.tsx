import React from "react";
import { PageShell } from "@/components/subpage/PageShell";
import { ConnectInterface } from "@/components/connect/ConnectInterface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Direct communication terminal and open signal directory for Himanshu Patro: open to conversations about software engineering, developer tools, AI systems, and full-time engineering roles.",
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    title: "Connect — Himanshu Patro",
    description:
      "Direct communication terminal and open signal directory for Himanshu Patro: open to conversations about software engineering, developer tools, AI systems, and full-time engineering roles.",
    url: "https://himanshupatro.dev/connect",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect — Himanshu Patro",
    description:
      "Direct communication terminal and open signal directory for Himanshu Patro: open to conversations about software engineering, developer tools, AI systems, and full-time engineering roles.",
  },
};

export default function ConnectPage() {
  return (
    <PageShell activeSection="connect">
      <ConnectInterface />
    </PageShell>
  );
}
