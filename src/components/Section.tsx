import { Reveal } from "./Reveal";

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-14 sm:py-20">
      <Reveal>
        <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-[-.03em] sm:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}
