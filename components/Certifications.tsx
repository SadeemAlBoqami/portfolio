import type { PortfolioContent } from "@/lib/content-types";
import { SectionHeading } from "./SectionHeading";

export function Certifications({ content }: { content: PortfolioContent }) {
  const { credentials, sections, ui } = content;
  return <div className="section-shell">
    <SectionHeading title={sections.credentials} number="05" />
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h3 className="font-display text-xl font-medium text-heading">{ui.professionalCertifications}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{ui.preparationNote}</p>
        <ul className="mt-5 space-y-3">{credentials.preparation.map((item) => <li key={item.id} className="rounded-xl border border-violet/30 bg-violet/5 p-5">
          <span className="inline-flex rounded-full border border-violet/30 px-2.5 py-1 text-xs text-violet">{ui.status["in-preparation"]}</span>
          <h4 dir="auto" className="mt-3 font-display text-base font-medium text-heading">{item.title}</h4>
          <p className="mt-2 text-sm text-muted">{item.issuer}</p>
        </li>)}</ul>
      </div>
      <div>
        <h3 className="font-display text-xl font-medium text-heading">{ui.training}</h3>
        <ul className="mt-5 space-y-3">{credentials.training.map((item) => <li key={item.id} className="panel p-5">
          <div className="flex items-center justify-between gap-3 text-xs text-muted"><span>{ui.trainingLabel}</span>{item.date && <span>{item.date}</span>}</div>
          <h4 className="mt-3 font-display text-base font-medium text-heading">{item.title}</h4>
          <p className="mt-2 text-sm text-muted">{item.issuer}</p>
        </li>)}</ul>
      </div>
    </div>
  </div>;
}
