export function SectionHeading({ title, number }: { title: string; number?: string }) {
  return <div className="mb-8 flex items-baseline gap-4">
    {number && <span aria-hidden="true" className="font-mono text-xs text-cyan">{number}</span>}
    <h2 className="font-display text-3xl font-semibold tracking-tight text-heading sm:text-4xl">{title}</h2>
    <span aria-hidden="true" className="hidden h-px flex-1 bg-cyan/15 sm:block" />
  </div>;
}
