import type { PortfolioContent } from "@/lib/content-types";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects({ content }: { content: PortfolioContent }) {
  return <div className="section-shell">
    <SectionHeading title={content.sections.projects} number="03" />
    <div className="grid gap-6 md:grid-cols-2">{Object.values(content.projects).map((project) => <ProjectCard key={project.slug} project={project} ui={content.ui} />)}</div>
  </div>;
}
