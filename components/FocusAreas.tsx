import type { FocusArea } from "@/lib/content";

export function FocusAreas({ areas }: { areas: FocusArea[] }) {
  return (
    <section id="focus" className="border-b border-cyan/15 px-6 py-16">
      <div className="mx-auto w-full max-w-content">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            Focus Areas
          </h2>
          <span className="font-mono text-xs text-muted">
            04 NODES REGISTERED
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className="group relative flex flex-col justify-between rounded-xl border border-cyan/20 bg-background-alt/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1"
            >
              <div>
                <div className="mb-4 flex items-center justify-between font-mono text-xs text-cyan/70">
                  <span>NODE 0{i + 1}</span>
                  <span className="flex items-center gap-1.5 text-emerald font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                    ONLINE
                  </span>
                </div>

                {/* Card Title: Larger & prominent */}
                <h3 className="font-display text-xl font-bold tracking-tight text-heading transition-colors group-hover:text-cyan">
                  {area.title}
                </h3>

                {/* Description: Enlarged text with relaxed leading */}
                <p className="mt-3 text-base leading-relaxed text-body">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}