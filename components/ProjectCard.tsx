import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { PortfolioContent, Project } from "@/lib/content-types";
import { Badge } from "./Badge";
import { ProjectCover } from "./ProjectCover";
import { ProjectMetrics } from "./ProjectMetrics";

export function ProjectCard({ project, ui }: { project: Project; ui: PortfolioContent["ui"] }) {
  return <article className="panel flex min-w-0 flex-col overflow-hidden transition-[border-color,box-shadow] hover:border-cyan/50 hover:shadow-glow-cyan">
    <ProjectCover image={project.media?.cover} compact />
    <div className="flex flex-1 flex-col p-5 sm:p-7">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        {project.secondaryName && <bdi className="font-mono text-xs text-muted">{project.secondaryName}</bdi>}
        <span className="ms-auto rounded-full border border-emerald/20 bg-emerald/5 px-2.5 py-1 text-xs text-emerald">{ui.status[project.status]}</span>
      </div>
      <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-heading sm:text-2xl">
        <Link href={`/projects/${project.slug}/`} className="hover:text-cyan">{project.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-body">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">{project.tags.slice(0, 5).map((tag) => <li key={tag}><Badge><bdi>{tag}</bdi></Badge></li>)}</ul>
      {!!project.cardMetrics?.length && <div className="mt-6 border-t border-cyan/15 pt-5"><ProjectMetrics metrics={project.cardMetrics} /></div>}
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
        <Link href={`/projects/${project.slug}/`} className="inline-flex min-h-11 items-center gap-2 rounded border border-cyan/40 bg-cyan/5 px-4 py-2 text-sm font-medium text-cyan transition-colors hover:bg-cyan/15">{ui.viewProject}<ArrowUpRight size={16} aria-hidden="true" className="rtl:-rotate-90" /></Link>
        {project.links?.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-muted hover:text-heading"><Github size={16} aria-hidden="true" />{ui.viewCode}</a>}
      </div>
    </div>
  </article>;
}
