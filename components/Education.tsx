import type { PortfolioContent } from "@/lib/content-types";
import { GraduationCap } from "lucide-react";

export function Education({ content }: { content: PortfolioContent }) {
  const { education, sections, ui } = content;
  return <section aria-labelledby="education-heading" className="border-b border-cyan/15">
    <div className="section-shell !py-10">
      <div className="panel flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <GraduationCap aria-hidden="true" className="mt-1 shrink-0 text-violet" size={26} />
          <div>
            <h2 id="education-heading" className="mb-2 text-sm font-medium text-violet">{sections.education}</h2>
            <h3 className="font-display text-xl font-semibold text-heading">{education.degree}</h3>
            <p className="mt-1 text-sm">{education.institution} · {education.period}</p>
            <p className="mt-3 text-sm text-muted">{education.distinction}</p>
          </div>
        </div>
        <p className="shrink-0 border-s-2 border-violet/40 ps-4 text-sm text-muted">{ui.gpa}<br /><bdi dir="ltr" className="mt-1 inline-block font-mono text-xl text-heading">{education.gpa}</bdi></p>
      </div>
    </div>
  </section>;
}
