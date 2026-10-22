import { researchProject } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { TagList, card } from "./ui";

export function Research() {
  const r = researchProject;
  return (
    <Section id="ai" title="AI & data">
      <Reveal>
        <article className={`relative overflow-hidden ${card} p-6 sm:p-10`}>
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold leading-snug tracking-[-.02em] sm:text-[1.7rem]">{r.name}</h3>
              <TagList items={r.tech} />
            </div>
            <ul className="space-y-4">
              {r.points.map((pt) => (
                <li key={pt} className="flex gap-3 leading-relaxed text-neutral-700 dark:text-neutral-300">
                  <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />{pt}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
