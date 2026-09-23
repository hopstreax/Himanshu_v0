export type NavQuadrant = "about" | "projects" | "open-source" | "connect";

export interface NavItemConfig {
  id: NavQuadrant;
  label: string;
  subtext: string;
  href: string;
  quadrant: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  ariaLabel: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  year: string;
  tag: string;
  tagline: string;
  summary: string;
  technologies: readonly string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface OSSContribution {
  project: string;
  role: string;
  period: string;
  mergedPRs: number;
  coreAreas: readonly string[];
  summary: string;
  repositoryUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bulletPoints: readonly string[];
  technologies: readonly string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface SocialLinkItem {
  platform: string;
  label: string;
  url: string;
  handle: string;
  isExternal: boolean;
}
