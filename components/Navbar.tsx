import Link from "next/link";
import type { SystemStatus } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";
import { StatusIndicator } from "./StatusIndicator";

const sections = [
  { href: "#focus", label: "Focus Areas" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
];

export function Navbar({ status }: { status: SystemStatus }) {
  return (
    <header className="sticky top-0 z-40 border-b border-cyan/20 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-4">
        {/* Name / Brand */}
        <Link 
          href="#top" 
          className="text-base sm:text-lg font-bold tracking-wider text-heading hover:text-cyan transition-colors"
        >
          SADEEM<span className="text-cyan">.ALBOQAMI</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 text-sm font-semibold sm:flex">
          {sections.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="text-muted tracking-wide transition-colors duration-200 hover:text-cyan"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Status & Toggle */}
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <StatusIndicator label={status.label} value={status.value} tone="emerald" />
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
