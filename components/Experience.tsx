import type { ExperienceItem } from "@/lib/content-types";
import { Badge } from "./Badge";
import { SectionHeading } from "./SectionHeading";

export function Experience({ items, title }: { items: ExperienceItem[]; title: string }) {
  return <div className="section-shell">
    <SectionHeading title={title} number="02" />
    <div className="ms-2 space-y-10 border-s border-cyan/25">
      {items.map((item) => <article key={item.id} className="relative ps-6 sm:ps-9">
        <span aria-hidden="true" className="absolute -start-1.5 top-2 h-3 w-3 rounded-full border border-cyan bg-background" />
        <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-baseline">
          <h3 className="font-display text-xl font-semibold text-heading sm:text-2xl">{item.role}</h3>
          <p className="shrink-0 text-sm text-muted">{item.period}</p>
        </div>
        <p className="mt-2 text-sm font-medium text-cyan">{item.organization}</p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 ps-5 text-sm leading-relaxed marker:text-cyan/60">
          {item.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2">{item.skills.map((skill) => <li key={skill}><Badge><bdi>{skill}</bdi></Badge></li>)}</ul>
      </article>)}
    </div>
  </div>;
}
