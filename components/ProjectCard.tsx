"use client";

import { cardVariants } from "@/lib/motion";
import type { Project } from "@/lib/content";
import { GlowCard } from "./GlowCard";
import { Badge } from "./Badge";
import { CyberButton } from "./CyberButton";

const statusTone: Record<string, "cyan" | "emerald" | "violet"> = {
  Completed: "emerald",
  "In Progress": "cyan",
};

export function ProjectCard({ project }: { project: Project }) {
  const tone = statusTone[project.status] ?? "violet";

  return (
    <GlowCard as="article" variants={cardVariants} whileHover={{ y: -4 }} className="flex flex-col">
      {/* Terminal-style title bar */}
      <div className="flex items-center justify-between border-b border-cyan/15 bg-background-alt px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan/70" />
          <span className="h-2 w-2 rounded-full bg-emerald/70" />
          <span className="h-2 w-2 rounded-full bg-violet/70" />
          <span className="ml-2 font-mono text-[0.65rem] text-muted">~/projects/{project.id}.log</span>
        </div>
        <Badge tone={tone}>{project.status}</Badge>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-heading">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge tone="cyan">{tag}</Badge>
            </li>
          ))}
        </ul>

        {project.metrics.length > 0 && (
          <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-cyan/10 pt-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-mono text-[0.6rem] tracking-wider text-muted">
                  {metric.label.toUpperCase()}
                </dt>
                <dd className="text-glow-cyan font-mono text-sm text-cyan">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
          {project.links.github && (
            <CyberButton href={project.links.github} variant="ghost">
              VIEW CODE
            </CyberButton>
          )}
          {project.links.demo && (
            <CyberButton href={project.links.demo} variant="primary">
              LIVE DEMO
            </CyberButton>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
