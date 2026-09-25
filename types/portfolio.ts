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
  repositoryUrl?: string;
  liveUrl?: string;
  notionUrl?: string;
  featured: boolean;
}

export interface OSSMetric {
  label: string;
  value: string;
}

export interface OpenSourceRepository {
  name: string;
  organization: string;
  url: string;
  description: string;
  focusAreas: readonly string[];
  isPrimary?: boolean;
}

export interface GitHubDayContribution {
  date: string;
  level: number;
  count: number;
  weekday?: number;
}

export interface GitHubActivity {
  username: string;
  totalContributions: number;
  updatedAt: string;
  source?: string;
  generatedAt?: string;
  range: {
    from: string;
    to: string;
  };
  days: readonly GitHubDayContribution[];
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
  repositories?: readonly OpenSourceRepository[];
  activity?: GitHubActivity;
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

export type SocialPlatform = "GitHub" | "LinkedIn" | "X" | "Email" | "Instagram" | "Notion";

export interface SocialLinkItem {
  platform: SocialPlatform;
  label: string;
  url: string;
  handle: string;
  isExternal: boolean;
  isPrimary?: boolean;
  actionText?: string;
}

export interface ConnectData {
  heading: string;
  tagline: string;
  actionPrompt: string;
  links: readonly SocialLinkItem[];
  secondaryLinks?: readonly SocialLinkItem[];
}
