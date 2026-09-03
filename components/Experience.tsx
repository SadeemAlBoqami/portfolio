import type { ExperienceItem } from "@/lib/content";
import { Badge } from "./Badge";

export function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="border-b border-cyan/15 px-6 py-16">
      <div className="mx-auto w-full max-w-content">
        {/* Section Header */}
        <div className="mb-12 flex items-center justify-between">
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

        {/* Vertical Pipeline Timeline */}
        <div className="relative ml-2 sm:ml-4 border-l-2 border-cyan/20 space-y-12 pb-4">
          {items.map((item, idx) => {
            const isCurrent = item.period.toLowerCase().includes("present");

            return (
              <div key={item.id} className="group relative pl-8 sm:pl-10">
                {/* Timeline Node Dot */}
                <div
                  className={`absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-background transition-all duration-300 ${
                    isCurrent
                      ? "border-cyan shadow-[0_0_12px_rgba(0,240,255,0.8)]"
                      : "border-cyan/40 group-hover:border-cyan group-hover:shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                  }`}
                >
                  {isCurrent ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan/40 group-hover:bg-cyan" />
                  )}
                </div>

                {/* Subtitle / Deployment Code */}
                <div className="flex items-center gap-2 font-mono text-xs text-cyan/75">
                  <span className="font-semibold">DEPLOY_0{idx + 1}</span>
                  <span>•</span>
                  <span className="text-muted">{item.location}</span>
                </div>

                {/* Role & Period Header */}
                <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-heading transition-colors group-hover:text-cyan">
                    {item.role}
                  </h3>

                  <div className="inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3 py-0.5 text-xs font-mono font-semibold text-cyan self-start sm:self-auto">
                    {item.period}
                  </div>
                </div>

                {/* Organization */}
                <p className="mt-0.5 font-medium text-cyan text-base">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="mt-3.5 text-base leading-relaxed text-body max-w-3xl">
                  {item.description}
                </p>

                {/* Skills Badges */}
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {item.skills.map((skill, i) => (
                    <li key={skill}>
                      <Badge tone={["cyan", "emerald", "violet"][i % 3] as "cyan" | "emerald" | "violet"}>
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}