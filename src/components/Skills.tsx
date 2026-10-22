import { BrainCircuit, Database, LayoutTemplate, Server, Wrench, type LucideIcon } from "lucide-react";
import { skills, type SkillGroup } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { TagList, card } from "./ui";

const icons: Record<SkillGroup["group"], LucideIcon> = {
  "Front end": LayoutTemplate, "Back end": Server, Databases: Database, "Data & AI": BrainCircuit, Practices: Wrench,
};

/** 3 + 2 layout on large screens so five groups fill the grid evenly. */
const span = (i: number, n: number) =>
  [n === 5 ? (i < 3 ? "lg:col-span-2" : "lg:col-span-3") : "lg:col-span-2", n % 2 === 1 && i === n - 1 ? "sm:col-span-2" : ""].join(" ");

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {skills.map((s, i) => {
          const Icon = icons[s.group];
          return (
            <Reveal key={s.group} delay={i * 0.05} className={`h-full ${span(i, skills.length)}`}>
              <div className={`h-full ${card} p-6`}>
                <h3 className="flex items-center gap-3 font-medium">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-300"><Icon size={17} aria-hidden="true" /></span>
                  {s.group}
                </h3>
                <div className="mt-5"><TagList items={s.items} label={s.group} /></div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
