export type NavQuadrant = "about" | "projects" | "open-source" | "connect";

export interface NavItemConfig {
  id: NavQuadrant;
  label: string;
  subtext: string;
  href: string;
  quadrant: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  ariaLabel: string;
  promptText: string;
}

export type ProjectTier = "flagship" | "secondary" | "archived";

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live" | "demo";
}

export interface ProjectItem {
  slug: string;
  title: string;
  year: string;
  tier: ProjectTier;
  category: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  technologies: readonly string[];
  highlights: readonly string[];
  links?: readonly ProjectLink[];
  featured: boolean;
}

export interface OSSMetric {
  label: string;
  value: string;
}

export interface OSSContribution {
  slug: string;
  project: string;
  role: string;
  period: string;
  metrics: readonly OSSMetric[];
  tagline: string;
  summary: string;
  longDescription: string;
  coreAreas: readonly string[];
  notableWork: readonly string[];
  technologies: readonly string[];
  repositoryUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "internship" | "full-time" | "contract";
  bulletPoints: readonly string[];
  technologies: readonly string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights?: readonly string[];
}

export interface AboutData {
  name: string;
  title: string;
  shortBio: string;
  longBio: readonly string[];
  currentFocus: string;
  location: string;
  technicalFocusAreas: readonly string[];
  education: EducationItem;
  experiences: readonly ExperienceItem[];
  coreSkills: readonly string[];
}

export interface SocialLinkItem {
  platform: "GitHub" | "LinkedIn" | "X" | "Email";
  label: string;
  url: string;
  handle: string;
  isExternal: boolean;
  actionText?: string;
}

export interface ConnectData {
  heading: string;
  tagline: string;
  actionPrompt: string;
  links: readonly SocialLinkItem[];
}
