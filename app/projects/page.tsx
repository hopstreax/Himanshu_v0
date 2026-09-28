import React from "react";
import { Metadata } from "next";
import { ProjectsView } from "@/components/projects/ProjectsView";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies and software systems built by Himanshu Patro: TraceKit (autonomous AI testing), AI Interviewer (GenAI speech simulation), Campus Lost & Found, and e-PMSSS.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — Himanshu Patro",
    description:
      "Engineering case studies and software systems built by Himanshu Patro: TraceKit (autonomous AI testing), AI Interviewer (GenAI speech simulation), Campus Lost & Found, and e-PMSSS.",
    url: "https://himanshupatro.dev/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Himanshu Patro",
    description:
      "Engineering case studies and software systems built by Himanshu Patro: TraceKit (autonomous AI testing), AI Interviewer (GenAI speech simulation), Campus Lost & Found, and e-PMSSS.",
    creator: "@hopstreax",
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
