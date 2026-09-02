import { CursorGlow } from "@/components/CursorGlow";
import { MotionSection } from "@/components/MotionSection";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FocusAreas } from "@/components/FocusAreas";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Footer } from "@/components/Footer";

import {
  hero,
  systemStatus,
  focusAreas,
  experience,
  projects,
  skills,
  certifications,
  footer,
} from "@/lib/content";

export default function Page() {
  const safeStatus = systemStatus || {
    label: "SYSTEM STATUS",
    value: "ONLINE",
    detail: "ALL NODES ACTIVE",
  };

  return (
    <main className="relative min-h-screen bg-background selection:bg-cyan selection:text-black">
      <CursorGlow />
      <Navbar status={safeStatus} />
      <Hero hero={hero} />

      <MotionSection id="focus">
        <FocusAreas areas={focusAreas || []} />
      </MotionSection>

      <MotionSection id="experience">
        <Experience items={experience || []} />
      </MotionSection>

      <MotionSection id="projects">
        <Projects projects={projects || []} />
      </MotionSection>

      <MotionSection id="skills">
        <Skills skills={skills || {}} />
      </MotionSection>

      <MotionSection id="certifications">
        <Certifications items={certifications || []} />
      </MotionSection>

      <Footer copyright={footer?.copyright || "Sadeem AlBoqami"} status={safeStatus} />
    </main>
  );
}