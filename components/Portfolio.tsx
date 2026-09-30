"use client";

import { usePortfolio } from "./LanguageProvider";
import { Hero } from "./Hero";
import { FocusAreas } from "./FocusAreas";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Certifications } from "./Certifications";
import { MotionSection } from "./MotionSection";

export function Portfolio() {
  const { content } = usePortfolio();
  return <>
    <Hero />
    <MotionSection id="focus"><FocusAreas areas={content.focusAreas} title={content.sections.focus} /></MotionSection>
    <MotionSection id="experience"><Experience items={content.experience} title={content.sections.experience} /></MotionSection>
    <Education content={content} />
    <MotionSection id="projects"><Projects content={content} /></MotionSection>
    <MotionSection id="skills"><Skills skills={content.skills} title={content.sections.skills} /></MotionSection>
    <MotionSection id="credentials"><Certifications content={content} /></MotionSection>
  </>;
}
