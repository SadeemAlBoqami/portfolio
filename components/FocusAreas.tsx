import type { FocusArea } from "@/lib/content-types";
import { Cpu, Eye, Bot, Activity } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GlowCard } from "./GlowCard";

const icons = [Cpu, Eye, Bot, Activity];
export function FocusAreas({ areas, title }: { areas: FocusArea[]; title: string }) {
  return <div className="section-shell">
    <SectionHeading title={title} number="01" />
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {areas.map((area, index) => {
        const Icon = icons[index % icons.length];
        return <GlowCard key={area.id} className="rounded-xl p-6">
          <Icon aria-hidden="true" size={23} className="mb-6 text-cyan" strokeWidth={1.5} />
          <h3 className="font-display text-xl font-medium leading-snug text-heading">{area.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-body">{area.description}</p>
        </GlowCard>;
      })}
    </div>
  </div>;
}
