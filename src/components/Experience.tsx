import { experience } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { muted } from "./ui";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-1.5 border-l border-black/10 dark:border-white/10">
        {experience.map((e, i) => (
          <li key={e.role} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span aria-hidden="true" className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--bg)] ${i === 0 ? "bg-violet-500 shadow-[0_0_0_4px_rgb(139_92_246/.2)]" : "bg-neutral-400 dark:bg-neutral-600"}`} />
            <Reveal>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[170px_1fr] sm:gap-8">
                <p className="font-mono text-xs leading-7 text-neutral-500">{e.period}</p>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-.01em]">{e.role}</h3>
                  <p className="text-sm text-neutral-500">{e.org} · {e.location}</p>
                  <ul className={`mt-4 space-y-2.5 text-[15px] leading-relaxed ${muted}`}>
                    {e.points.map((p) => <li key={p} className="flex gap-3"><span aria-hidden="true" className="mt-[11px] h-px w-3 shrink-0 bg-neutral-400" />{p}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
