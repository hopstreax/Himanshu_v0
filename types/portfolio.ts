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

export interface CaseStudyImplementationSection {
  title: string;
  description: string;
  points?: readonly string[];
}

export interface CaseStudyDecision {
  decision: string;
  rationale: string;
  outcome?: string;
}

export interface CaseStudyChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  motivation?: string;
  whyBuilt?: string;
  solution?: string;
  whatSystemDoes?: readonly string[];
  technicalApproach?: readonly string[];
  architectureFlow?: readonly string[];
  keyFeatures?: readonly string[];
  technicalImplementation?: readonly CaseStudyImplementationSection[];
  engineeringDecisions?: readonly CaseStudyDecision[];
  challengesAndSolutions?: readonly CaseStudyChallenge[];
  currentState?: string;
  whatILearned?: readonly string[];
  futureDirection?: readonly string[];
  links?: readonly ProjectLink[];
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
  caseStudy?: ProjectCaseStudy;
}

export interface InvestigationStory {
  title: string;
  scope: string;
  prReference?: string;
  problem: string;
  investigation: string;
  change: string;
  validation: string;
  result: string;
  technologies: readonly string[];
}

export interface EcosystemContribution {
  repoName: string;
  organization: string;
  repoUrl: string;
  description?: string;
  summary: string;
  whyInteresting?: string;
  role: string;
  contributionAreas: readonly string[];
  technicalAreasTouched?: readonly string[];
  technicalWork: string;
  whatILearned: string;
  technologies: readonly string[];
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
  investigations?: readonly InvestigationStory[];
  ecosystemContributions?: readonly EcosystemContribution[];
  journeyEssay?: readonly string[];
}

export interface EngineeringInterestItem {
  title: string;
  category: string;
  description: string;
  competencies: readonly string[];
}

export interface WorkPrincipleItem {
  principle: string;
  summary: string;
  practices: readonly string[];
}

export interface CurrentWorkItem {
  title: string;
  detail: string;
  status: string;
  linkUrl?: string;
  linkLabel?: string;
}

export interface OutsideEngineeringItem {
  title: string;
  category: string;
  description: string;
}

export interface WhatIBuildItem {
  domain: string;
  headline: string;
  description: string;
  competencies: readonly string[];
}

export interface OpenSourceJourneySection {
  summary: string;
  stages: readonly {
    phase: string;
    focus: string;
    description: string;
  }[];
}

export interface AboutData {
  name: string;
  title: string;
  shortBio: string;
  longBio: readonly string[];
  currentFocus: string;
  location: string;
  baseLocation?: string;
  technicalFocusAreas: readonly string[];
  education: EducationItem;
  experiences: readonly ExperienceItem[];
  coreSkills: readonly string[];
  whatIBuild?: readonly WhatIBuildItem[];
  engineeringInterests?: readonly EngineeringInterestItem[];
  openSourceJourney?: OpenSourceJourneySection;
  howIWork?: readonly WorkPrincipleItem[];
  currentWork?: readonly CurrentWorkItem[];
  outsideEngineering?: readonly OutsideEngineeringItem[];
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
