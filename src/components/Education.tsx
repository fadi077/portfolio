import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { card } from "./ui";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.06} className="h-full">
            <div className={`flex h-full gap-4 ${card} p-6`}>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-black/[.07] dark:border-white/10"><GraduationCap size={17} aria-hidden="true" /></span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold tracking-[-.01em]">{e.degree}</h3>
                  {e.grade && <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">{e.grade}</span>}
                </div>
                <p className="mt-0.5 text-sm text-neutral-500">{e.school}, {e.country}</p>
                <p className="mt-1 font-mono text-xs text-neutral-500">{e.period}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <h3 className="sr-only">Certifications</h3>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <li key={c} className={`flex items-center gap-3 ${card} px-4 py-3.5 text-sm`}>
              <Award size={16} aria-label="Certification" className="shrink-0 text-violet-500" />{c}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
