import type { SkillsContent } from "@/lib/content";

export function Skills({ skills }: { skills: SkillsContent }) {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="border-b border-cyan/15 px-6 py-16">
      <div className="mx-auto w-full max-w-content">
        {/* Section Title */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-1 text-sm font-mono text-muted">
              CORE_ENGINEERING_COMPETENCIES
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {entries.map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-cyan/20 bg-background-alt/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1"
            >
              {/* Box Title - Large & Prominent */}
              <div className="mb-4 flex items-center justify-between border-b border-cyan/10 pb-3">
                <h3 className="font-display text-lg font-bold tracking-wide text-heading">
                  {category}
                </h3>
                <span className="font-mono text-[11px] text-cyan/70">
                  {items.length} TECHNOLOGIES
                </span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-cyan/30 bg-cyan/5 px-3 py-1.5 font-mono text-xs font-medium text-cyan hover:border-cyan hover:bg-cyan/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}