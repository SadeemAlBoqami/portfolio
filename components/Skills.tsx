import type { SkillsContent } from "@/lib/content-types";
import { Badge } from "./Badge";
import { SectionHeading } from "./SectionHeading";

export function Skills({ skills, title }: { skills: SkillsContent; title: string }) {
  return <div className="section-shell">
    <SectionHeading title={title} number="04" />
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map((group) => <div key={group.title} className="panel p-6">
        <h3 className="mb-4 font-display text-lg font-medium text-heading">{group.title}</h3>
        <ul className="flex flex-wrap gap-2">{group.items.map((skill) => <li key={skill}><Badge><bdi>{skill}</bdi></Badge></li>)}</ul>
      </div>)}
    </div>
  </div>;
}
