import { english } from "@/data/portfolio-content.en";
import { arabic } from "@/data/portfolio-content.ar";
import type { Locale, PortfolioContent } from "./content-types";

export const content: Record<Locale, PortfolioContent> = { en: english, ar: arabic };
export const siteMeta = english.site;
export const projects = Object.values(english.projects);

export function getProject(slug: string, locale: Locale = "en") {
  return Object.values(content[locale].projects).find((project) => project.slug === slug);
}
