export type Locale = "en" | "ar";
export type SectionId = "focus" | "experience" | "projects" | "skills" | "credentials" | "contact";
export type ProjectSlug = "image-generation-infrastructure" | "saudi-labor-rag" | "precrash-ai" | "smart-restaurant";
export type ProjectStatus = "completed" | "in-preparation";
export interface ProjectImage { src: string; alt: string; width: number; height: number; caption?: string }
export interface ProjectMedia {
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  architectureImage?: ProjectImage;
  demoVideo?: { kind: "youtube" | "file"; src: string; title: string; caption?: string };
  demoVideos?: { kind: "youtube" | "file"; src: string; title: string; caption?: string }[];
  presentation?: string;
  report?: string;
}
export interface ProjectMetric { label: string; value: string }
export interface Project {
  slug: ProjectSlug;
  title: string;
  secondaryName?: string;
  descriptor: string;
  period?: string;
  status: ProjectStatus;
  summary: string;
  tags: string[];
  cardMetrics?: ProjectMetric[];
  overview: string;
  built: string[];
  architecture?: { steps: string[]; note?: string };
  results?: { summary?: string; metrics?: ProjectMetric[] };
  media?: ProjectMedia;
  links?: { github?: string; demo?: string };
}
export interface HeroContent { name: string; title: string; tagline: string; location: string; availability: string; resumeUrl: string; badges: string[] }
export interface FocusArea { id: string; title: string; description: string }
export interface ExperienceItem { id: string; role: string; organization: string; period: string; highlights: string[]; skills: string[] }
export type SkillsContent = { title: string; items: string[] }[];
export interface Credential { id: string; title: string; issuer: string; date?: string }
export interface PortfolioContent {
  site: { title: string; description: string };
  hero: HeroContent;
  navigation: { id: SectionId; label: string }[];
  sections: { focus: string; experience: string; education: string; projects: string; skills: string; credentials: string; contact: string };
  ui: {
    viewProjects: string; downloadCV: string; viewProject: string; viewCode: string;
    liveDemo: string; presentation: string; report: string; back: string;
    overview: string; built: string; architecture: string; results: string; media: string; links: string;
    status: Record<ProjectStatus, string>;
    menu: string; closeMenu: string; lightTheme: string; darkTheme: string; skip: string; switchLanguage: string;
    professionalCertifications: string; training: string; trainingLabel: string; preparationNote: string; gpa: string;
    copy: string; copied: string; copyFailed: string; copyEmail: string; copyPhone: string;
    email: string; phone: string; location: string; contactHeading: string; contactDescription: string;
  };
  focusAreas: FocusArea[];
  experience: ExperienceItem[];
  education: { degree: string; institution: string; period: string; gpa: string; distinction: string };
  projects: Record<ProjectSlug, Project>;
  skills: SkillsContent;
  credentials: { preparation: Credential[]; training: Credential[] };
  contact: { email: string; phoneDisplay: string; phoneCanonical: string; github: string; linkedin: string; location: string };
  footer: { copyright: string; status: string };
}
