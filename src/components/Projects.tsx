import Image from "next/image";
import { ArrowUpRight, Lock, Quote } from "lucide-react";
import { featuredProjects, moreProjects, privateRepoNote, testimonial, type Project } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { TagList, card, muted } from "./ui";

function DomainLink({ p }: { p: Project }) {
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-mono text-xs text-neutral-500 transition hover:text-neutral-900 dark:hover:text-white">
      {p.domain}<ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only">(opens in new tab)</span>
    </a>
  );
}

function BrowserFrame({ p, priority, sizes }: { p: Project; priority?: boolean; sizes: string }) {
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true"
      className="block overflow-hidden rounded-xl border border-black/10 bg-neutral-100 shadow-[0_20px_50px_-20px_rgb(0_0_0/.35)] dark:border-white/10 dark:bg-neutral-900">
      <div className="flex items-center gap-2 border-b border-black/[.07] bg-white/90 px-3 py-2 dark:border-white/[.07] dark:bg-neutral-900">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-md bg-black/[.04] px-3 py-0.5 font-mono text-[11px] text-neutral-500 dark:bg-white/[.06] dark:text-neutral-400">{p.domain}</span>
        <span className="w-[42px]" />
      </div>
      <Image src={p.image} alt="" width={1280} height={800} priority={priority} sizes={sizes}
        className="aspect-[16/10] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]" />
    </a>
  );
}

function Metrics({ m }: { m: NonNullable<Project["metrics"]> }) {
  return (
    <figure>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/[.07] bg-black/[.07] sm:grid-cols-4 dark:border-white/[.08] dark:bg-white/[.08]">
        {m.stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse bg-white px-3 py-3 dark:bg-[#0d0e12]">
            <dt className="text-[11px] text-neutral-500">{s.label}</dt>
            <dd className="text-xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">{s.value}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="mt-2 text-[11px] text-neutral-500" title={m.trend}>{m.source}</figcaption>
    </figure>
  );
}

function CaseStudy({ p }: { p: Project }) {
  return (
    <article aria-labelledby={`${p.slug}-title`} className={`group relative overflow-hidden ${card} p-5 sm:p-8 lg:p-10`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
        <BrowserFrame p={p} priority sizes="(min-width: 1024px) 600px, 100vw" />
        <div className="flex flex-col gap-5">
          <div>
            <h3 id={`${p.slug}-title`} className="text-2xl font-semibold tracking-[-.02em] sm:text-3xl">{p.name}</h3>
            <div className="mt-1"><DomainLink p={p} /></div>
          </div>
          <p className={`leading-relaxed ${muted}`}>{p.description}</p>
          {p.metrics && <Metrics m={p.metrics} />}
        </div>
      </div>
      <figure className="relative mt-8 border-t border-black/[.07] pt-8 sm:mt-10 dark:border-white/[.07]">
        <Quote size={22} aria-hidden="true" className="text-violet-500/70" />
        <blockquote className="mt-3 max-w-3xl text-lg leading-relaxed tracking-[-.01em] text-neutral-800 sm:text-xl dark:text-neutral-200">&ldquo;{testimonial.quote}&rdquo;</blockquote>
        <figcaption className="mt-4 text-sm">
          <span className="font-medium">{testimonial.author}</span>
          <span className="text-neutral-500">, {testimonial.org} · via LinkedIn</span>
        </figcaption>
      </figure>
    </article>
  );
}

function ProjectCard({ p, wide }: { p: Project; wide?: boolean }) {
  return (
    <article aria-labelledby={`${p.slug}-title`}
      className={`group flex h-full flex-col ${wide ? "md:grid md:grid-cols-2 md:items-center md:gap-8" : ""} ${card} p-4 transition duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_24px_60px_-28px_rgb(0_0_0/.35)] sm:p-5 dark:hover:border-white/15`}>
      <BrowserFrame p={p} sizes="(min-width: 1024px) 540px, 100vw" />
      <div className={`flex flex-1 flex-col gap-3 px-1 pt-5 ${wide ? "md:pr-4 md:pt-0" : ""}`}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 id={`${p.slug}-title`} className="text-lg font-semibold tracking-[-.01em]">{p.name}</h3>
          <DomainLink p={p} />
        </div>
        <p className={`text-[14.5px] leading-relaxed ${muted}`}>{p.description}</p>
        <TagList items={p.highlights} label="Features" />
      </div>
    </article>
  );
}

function CompactCard({ p }: { p: Project }) {
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer"
      className={`group flex h-full flex-col overflow-hidden ${card} transition duration-300 hover:-translate-y-1 hover:border-black/15 dark:hover:border-white/15`}>
      <div className="overflow-hidden border-b border-black/[.07] dark:border-white/[.07]">
        <Image src={p.image} alt="" width={1280} height={800} sizes="(min-width: 1024px) 280px, 50vw"
          className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="flex items-center justify-between font-medium">
          {p.name}
          <ArrowUpRight size={15} aria-hidden="true" className="text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-500" />
        </h3>
        <p className={`mt-2 text-[13.5px] leading-relaxed ${muted}`}>{p.description}</p>
        <span className="sr-only">{p.domain} (opens in new tab)</span>
      </div>
    </a>
  );
}

export function Projects() {
  const [lead, ...rest] = featuredProjects;
  const oddLast = rest.length % 2 === 1;
  return (
    <Section id="work" title="Work">
      <Reveal><CaseStudy p={lead} /></Reveal>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {rest.map((p, i) => {
          const wide = oddLast && i === rest.length - 1;
          return (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className={`h-full ${wide ? "md:col-span-2" : ""}`}>
              <ProjectCard p={p} wide={wide} />
            </Reveal>
          );
        })}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {moreProjects.map((p, i) => <Reveal key={p.slug} delay={i * 0.05} className="h-full"><CompactCard p={p} /></Reveal>)}
      </div>
      <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-neutral-500"><Lock size={12} aria-hidden="true" />{privateRepoNote}</p>
    </Section>
  );
}
