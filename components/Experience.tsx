import type { ExperienceItem } from "@/lib/content";
import { Badge } from "./Badge";

export function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="border-b border-cyan/15 px-6 py-16">
      <div className="mx-auto w-full max-w-content">
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              Professional Experience
            </h2>
            <p className="mt-1 font-mono text-sm text-muted">
              CAREER_DEPLOYMENTS // FIELD_OPERATIONS
            </p>
          </div>
          <span className="hidden font-mono text-xs text-muted sm:inline-block">
            {String(items.length).padStart(2, "0")} TRACKED POSITIONS
          </span>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-xl border border-cyan/20 bg-background-alt/60 p-7 backdrop-blur-md transition-all duration-300 hover:border-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1"
            >
              {/* Header Bar */}
              <div className="mb-4 flex flex-col gap-2 border-b border-cyan/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan/75">
                    <span>DEPLOY_0{idx + 1}</span>
                    <span>•</span>
                    <span className="text-muted">{item.location}</span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-heading transition-colors group-hover:text-cyan">
                    {item.role}
                  </h3>
                  <p className="font-medium text-cyan text-base">
                    {item.organization}
                  </p>
                </div>

                <div className="inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono font-semibold text-cyan self-start sm:self-auto">
                  {item.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-body">
                {item.description}
              </p>

              {/* Skills Badges */}
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {item.skills.map((skill, i) => (
                  <li key={skill}>
                    <Badge tone={["cyan", "emerald", "violet"][i % 3] as "cyan" | "emerald" | "violet"}>
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}