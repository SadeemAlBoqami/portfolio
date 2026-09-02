import type { Certification } from "@/lib/content";

// توسيع النوع محلياً لضمان التوافق سواء كانت الخاصية date أو year
type SafeCertification = Certification & {
  year?: string;
  date?: string;
};

export function Certifications({ items }: { items: Certification[] }) {
  const safeItems = items as SafeCertification[];

  return (
    <section id="certifications" className="border-b border-cyan/15 px-6 py-16">
      <div className="mx-auto w-full max-w-content">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            Certifications & Honors
          </h2>
          <span className="font-mono text-xs text-muted">
            {String(items.length).padStart(2, "0")} VERIFIED CREDENTIALS
          </span>
        </div>

        <div className="space-y-4">
          {safeItems.map((item, idx) => {
            const dateValue = item.date || item.year || "";

            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between gap-4 rounded-xl border border-cyan/20 bg-background-alt/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan/70 transition-all group-hover:bg-cyan group-hover:shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                  <span className="font-mono text-xs text-muted">
                    LOG_0{idx + 1}
                  </span>
                  <span className="font-display text-lg font-bold text-heading transition-colors group-hover:text-cyan">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-6 pl-6 font-mono text-sm text-muted sm:pl-0">
                  <span className="font-medium text-body">{item.issuer}</span>
                  {dateValue && (
                    <span className="font-bold text-cyan">{dateValue}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}