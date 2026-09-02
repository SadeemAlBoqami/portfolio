import raw from "@/data/portfolio-content.json";

/**
 * This is the single point of contact between the JSON content file and
 * the React components. Components never import the JSON directly —
 * they import typed helpers from here. If the content schema changes,
 * update the types below and this file only.
 */

export interface HeroContent {
  name: string;
  title: string;
  tagline: string;
  location: string;
  resumeUrl: string;
  badges: string[];
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface SystemStatus {
  label: string;
  value: string;
  detail: string;
}

export interface TelemetryStat {
  label: string;
  value: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  status: string;
  problem: string;
  tags: string[];
  metrics: ProjectMetric[];
  links: {
    github?: string;
    demo?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  date?: string;
}

export interface PortfolioContent {
  site: { title: string; description: string };
  hero: HeroContent;
  systemStatus: SystemStatus;
  telemetry: TelemetryStat[];
  focusAreas: FocusArea[];
  projects: Project[];
  skills: Record<string, string[]>;
  certifications: Certification[];
  footer: { copyright: string; status: string };
}

const content = raw as PortfolioContent;

export const siteMeta = content.site;
export const hero = content.hero;
export const systemStatus = content.systemStatus;
export const telemetry = content.telemetry;
export const focusAreas = content.focusAreas;
export const projects = content.projects;
export const skills = content.skills;
export const certifications = content.certifications;
export const footer = content.footer;
export const experience: ExperienceItem[] = content.experience;
