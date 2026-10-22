import Image from "next/image";
import {
  ArrowUpRight, ArrowRight, Download, Lock, Mail, MapPin, Quote, LayoutTemplate, Server, Database,
  BrainCircuit, Wrench, GraduationCap, Award, Sparkles,
} from "lucide-react";
import {
  site, heroStats, featuredProjects, testimonial, moreProjects, privateRepoNote, aiProject,
  skills, experience, education, certifications, type Project,
} from "@/data/content";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const card = "rounded-2xl border border-black/[.07] bg-white/70 shadow-[0_1px_2px_rgb(0_0_0/.04)] dark:border-white/[.07] dark:bg-white/[.025] dark:shadow-none";
const muted = "text-neutral-600 dark:text-neutral-400";
const btn = "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500";
const btnPrimary = `${btn} bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200`;
const btnGhost = `${btn} border border-black/10 hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]`;
const skillIcons = { "Front end": LayoutTemplate, "Back end": Server, Databases: Database, "Data & AI": BrainCircuit, Practices: Wrench } as const;

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} style={{ width: size, height: size, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>;
}
function GitHubIcon({ size = 16 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} style={{ width: size, height: size, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z"/></svg>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return <li className="rounded-md border border-black/[.07] bg-black/[.025] px-2 py-0.5 font-mono text-[11.5px] text-neutral-700 dark:border-white/[.08] dark:bg-white/[.04] dark:text-neutral-300">{children}</li>;
}

function Section({ id, index, title, intro, children }: { id: string; index: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-14 sm:py-20">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[.18em] text-violet-600 dark:text-violet-400">
          <span>{index}</span><span className="h-px w-8 bg-current opacity-40" />
        </p>
        <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">{title}</h2>
        {intro && <p className={`mt-4 max-w-2xl text-[15px] leading-relaxed ${muted}`}>{intro}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function PrivateBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/[.08] px-2.5 py-1 text-[11.5px] font-medium text-amber-700 dark:text-amber-300/90">
      <Lock size={11} aria-hidden="true" />{privateRepoNote}
    </span>
  );
}

function BrowserFrame({ p, priority, sizes }: { p: Project; priority?: boolean; sizes: string }) {
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name} (opens in new tab)`}
      className="block overflow-hidden rounded-xl border border-black/10 bg-neutral-100 shadow-[0_20px_50px_-20px_rgb(0_0_0/.35)] dark:border-white/10 dark:bg-neutral-900">
      <div className="flex items-center gap-2 border-b border-black/[.07] bg-white/90 px-3 py-2 dark:border-white/[.07] dark:bg-neutral-900">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-md bg-black/[.04] px-3 py-0.5 font-mono text-[11px] text-neutral-500 dark:bg-white/[.06] dark:text-neutral-400">
          <Lock size={9} aria-hidden="true" />{p.domain}
        </span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <div className="overflow-hidden">
        <Image src={p.image} alt={`Homepage of ${p.name}`} width={1280} height={800} priority={priority} sizes={sizes}
          className="aspect-[16/10] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]" />
      </div>
    </a>
  );
}

function LiveButton({ p }: { p: Project }) {
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-white">
      Visit live site <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function CaseStudy({ p }: { p: Project }) {
  return (
    <article className={`group relative overflow-hidden ${card} p-5 sm:p-8 lg:p-10`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <BrowserFrame p={p} priority sizes="(min-width: 1024px) 600px, 100vw" />
        <div>
          <p className="font-mono text-xs uppercase tracking-[.16em] text-violet-600 dark:text-violet-400">Case study · {p.domain}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-.02em] sm:text-3xl">{p.name}</h3>
          <p className={`mt-3 leading-relaxed ${muted}`}>{p.blurb}</p>
          {p.stats && (
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/[.07] bg-black/[.07] sm:grid-cols-4 dark:border-white/[.08] dark:bg-white/[.08]">
              {p.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse bg-white px-3 py-3 dark:bg-[#0d0e12]">
                  <dt className="text-[11px] text-neutral-500">{s.label}</dt>
                  <dd className="text-xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {p.statsNote && <p className="mt-2 text-xs text-neutral-500">{p.statsNote}</p>}
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"><LiveButton p={p} /><PrivateBadge /></div>
        </div>
      </div>
      <figure className="relative mt-10 border-t border-black/[.07] pt-8 dark:border-white/[.07]">
        <Quote size={22} aria-hidden="true" className="text-violet-500/70" />
        <blockquote className="mt-3 max-w-3xl text-lg leading-relaxed tracking-[-.01em] text-neutral-800 sm:text-xl dark:text-neutral-200">&ldquo;{testimonial.quote}&rdquo;</blockquote>
        <figcaption className="mt-4 flex items-center gap-3 text-sm">
          <span aria-hidden="true" className="grid grid-cols-1 h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 text-xs font-semibold text-neutral-700 dark:from-neutral-700 dark:to-neutral-800 dark:text-neutral-200">DM</span>
          <span><span className="font-medium">{testimonial.author}</span><span className="text-neutral-500">, {testimonial.org}, {testimonial.source}</span></span>
        </figcaption>
      </figure>
    </article>
  );
}

function FeaturedCard({ p, wide }: { p: Project; wide?: boolean }) {
  return (
    <article className={`group flex h-full flex-col ${wide ? "md:grid md:grid-cols-2 md:items-center md:gap-8" : ""} ${card} p-4 transition duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_24px_60px_-28px_rgb(0_0_0/.35)] sm:p-5 dark:hover:border-white/15`}>
      <BrowserFrame p={p} sizes="(min-width: 1024px) 540px, 100vw" />
      <div className={`flex flex-1 flex-col px-1 pt-5 ${wide ? "md:pt-0 md:pr-4" : ""}`}>
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-[-.01em]">{p.name}</h3>
          <span className="font-mono text-xs text-neutral-500">{p.domain}</span>
        </div>
        <p className={`mt-2 text-[14.5px] leading-relaxed ${muted}`}>{p.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6"><LiveButton p={p} /><PrivateBadge /></div>
      </div>
    </article>
  );
}

function SmallCard({ p }: { p: Project }) {
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className={`group flex h-full flex-col overflow-hidden ${card} transition duration-300 hover:-translate-y-1 hover:border-black/15 dark:hover:border-white/15`}>
      <div className="overflow-hidden border-b border-black/[.07] dark:border-white/[.07]">
        <Image src={p.image} alt={`Homepage of ${p.name}`} width={1280} height={800} sizes="(min-width: 1024px) 280px, 50vw" className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="flex items-center justify-between font-medium">{p.name}<ArrowUpRight size={15} aria-hidden="true" className="text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-500" /></h3>
        <p className="mt-0.5 font-mono text-[11px] text-neutral-500">{p.domain}</p>
        <p className={`mt-2.5 text-[13.5px] leading-relaxed ${muted}`}>{p.blurb}</p>
      </div>
    </a>
  );
}

function Terminal() {
  const fe = skills[0].items.slice(0, 3), be = skills[1].items.slice(0, 3);
  const q = (s: string) => <span className="text-emerald-600 dark:text-emerald-300">&quot;{s}&quot;</span>;
  const k = (s: string) => <span className="text-sky-700 dark:text-sky-300">{s}</span>;
  const list = (xs: string[]) => <>[{xs.map((x, i) => <span key={x}>{q(x)}{i < xs.length - 1 && ", "}</span>)}]</>;
  return (
    <div className={`relative overflow-hidden ${card} bg-white/80 font-mono text-[12.5px] leading-[1.8] dark:bg-[#0c0d11]/80`}>
      <div className="flex items-center gap-2 border-b border-black/[.07] px-4 py-2.5 dark:border-white/[.07]">
        <span className="flex gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" /><span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" /><span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" /></span>
        <span className="ml-2 text-[11px] text-neutral-500">fahad.ts</span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 text-neutral-700 dark:text-neutral-300"><code>
<span className="text-violet-600 dark:text-violet-400">const</span> fahad = {"{"}{"\n"}
{"  "}{k("role")}: {q(site.title)},{"\n"}
{"  "}{k("based")}: {q(site.location)},{"\n"}
{"  "}{k("frontend")}: {list(fe)},{"\n"}
{"  "}{k("backend")}: {list(be)},{"\n"}
{"  "}{k("msc")}: {q("Data Science & AI, Distinction")},{"\n"}
{"  "}{k("openToWork")}: <span className="text-amber-600 dark:text-amber-300">true</span>,{"\n"}
{"}"};
      </code></pre>
    </div>
  );
}

export default function Home() {
  const [caseStudy, ...rest] = featuredProjects;
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: site.title,
    url: site.url, email: `mailto:${site.email}`, sameAs: [site.linkedin, site.github],
    address: { "@type": "PostalAddress", addressLocality: "Rotherham", addressCountry: "GB" },
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  };
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-violet-600 focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 noise" />
      <Nav cv={site.cv} />

      <main id="main" className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <section id="top" className="relative pb-4 pt-14 sm:pb-8 sm:pt-24">
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute left-1/2 w-screen -translate-x-1/2 -top-16 bottom-0 -z-10" />
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[min(720px,100vw)] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-500/25 via-blue-500/15 to-emerald-400/10 blur-[100px] dark:from-violet-600/30 dark:via-blue-600/20" />
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[.07] py-1 pl-2.5 pr-3 text-[11px] sm:text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  <span className="relative flex h-2 w-2" aria-hidden="true"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>
                  {site.openTo}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-[4.4rem]">
                  {site.name.split(" ").slice(0, 1)}<br />
                  <span className="text-gradient">{site.name.split(" ").slice(1).join(" ")}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium tracking-tight sm:text-xl">
                  {site.title}
                  <span className="inline-flex items-center gap-1 text-sm font-normal text-neutral-500"><MapPin size={14} aria-hidden="true" />{site.location}</span>
                </p>
                <p className={`mt-4 max-w-xl text-[15.5px] leading-relaxed ${muted}`}>{site.intro}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#projects" className={btnPrimary}>View my work <ArrowRight size={16} aria-hidden="true" /></a>
                  <a href={site.cv} download className={btnGhost}><Download size={16} aria-hidden="true" />Download CV</a>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={`${btnGhost} w-11 px-0`} aria-label="LinkedIn (opens in new tab)"><LinkedInIcon /></a>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className={`${btnGhost} w-11 px-0`} aria-label="GitHub (opens in new tab)"><GitHubIcon /></a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="hidden lg:block"><Terminal /></Reveal>
          </div>
          <Reveal delay={0.25}>
            <dl className="mt-16 grid grid-cols-1 divide-y divide-black/[.07] rounded-2xl border border-black/[.07] bg-white/50 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-white/[.07] dark:border-white/[.07] dark:bg-white/[.02]">
              {heroStats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-1 px-6 py-5">
                  <dt className="text-sm text-neutral-500">{s.label}</dt>
                  <dd className="text-3xl font-semibold tracking-[-.03em]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <Section id="projects" index="01 / Work" title="Selected client work" intro="Custom-coded with React / Next.js, TypeScript and Tailwind for freelance clients. All sites are live, click through to explore them.">
          <Reveal><CaseStudy p={caseStudy} /></Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.08} className={`h-full ${rest.length % 2 === 1 && i === rest.length - 1 ? "md:col-span-2" : ""}`}>
                <FeaturedCard p={p} wide={rest.length % 2 === 1 && i === rest.length - 1} />
              </Reveal>
            ))}
          </div>
          <Reveal><h3 className="mt-20 text-lg font-semibold tracking-tight">More client work</h3></Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {moreProjects.map((p, i) => <Reveal key={p.name} delay={i * 0.05} className="h-full"><SmallCard p={p} /></Reveal>)}
          </div>
        </Section>

        <Section id="ai" index="02 / MSc project" title="AI & data">
          <Reveal>
            <article className={`relative overflow-hidden ${card} p-6 sm:p-10`}>
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
                <div>
                  <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.16em] text-violet-600 dark:text-violet-400"><Sparkles size={13} aria-hidden="true" />{aiProject.context}</p>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-[-.02em] sm:text-[1.7rem]">{aiProject.name}</h3>
                  <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">{aiProject.tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
                </div>
                <ol className="space-y-5">
                  {aiProject.points.map((pt, i) => (
                    <li key={pt} className="flex gap-4">
                      <span className="mt-0.5 font-mono text-xs text-neutral-400">0{i + 1}</span>
                      <span className="leading-relaxed text-neutral-700 dark:text-neutral-300">{pt}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          </Reveal>
        </Section>

        <Section id="skills" index="03 / Toolkit" title="Skills">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {skills.map((s, i) => {
              const Icon = skillIcons[s.group as keyof typeof skillIcons] ?? Wrench;
              return (
                <Reveal key={s.group} delay={i * 0.05} className={`h-full ${skills.length === 5 ? (i < 3 ? "lg:col-span-2" : "lg:col-span-3") : "lg:col-span-2"} ${skills.length % 2 === 1 && i === skills.length - 1 ? "sm:col-span-2" : ""}`}>
                  <div className={`h-full ${card} p-6`}>
                    <div className="flex items-center gap-3">
                      <span className="grid grid-cols-1 h-9 w-9 place-items-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-300"><Icon size={17} aria-hidden="true" /></span>
                      <h3 className="font-medium">{s.group}</h3>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-1.5">{s.items.map((it) => <Tag key={it}>{it}</Tag>)}</ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>

        <Section id="experience" index="04 / Career" title="Experience">
          <ol className="relative ml-1.5 border-l border-black/10 dark:border-white/10">
            {experience.map((e, i) => (
              <li key={e.role} className="relative pb-14 pl-8 last:pb-0 sm:pl-10">
                <span aria-hidden="true" className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--bg)] ${i === 0 ? "bg-violet-500 shadow-[0_0_0_4px_rgb(139_92_246/.2)]" : "bg-neutral-400 dark:bg-neutral-600"}`} />
                <Reveal>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
                    <p className="font-mono text-xs leading-6 text-neutral-500">{e.period}</p>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-.01em]">{e.role}</h3>
                      <p className="text-sm text-neutral-500">{e.org}</p>
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

        <Section id="education" index="05 / Study" title="Education & certifications">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.06} className="h-full">
                <div className={`h-full ${card} p-6`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid grid-cols-1 h-9 w-9 shrink-0 place-items-center rounded-lg border border-black/[.07] dark:border-white/10"><GraduationCap size={17} aria-hidden="true" /></span>
                    <p className="text-right font-mono text-xs leading-6 text-neutral-500">{e.period}</p>
                  </div>
                  <h3 className="mt-5 font-semibold tracking-[-.01em]">{e.degree}</h3>
                  <p className="text-sm text-neutral-500">{e.school}</p>
                  {e.note && <p className={`mt-3 text-sm leading-relaxed ${muted}`}>{e.note}</p>}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((c) => (
                <li key={c} className={`flex items-center gap-3 ${card} px-4 py-3.5 text-sm`}>
                  <Award size={16} aria-hidden="true" className="shrink-0 text-violet-500" />{c}
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 py-14 sm:py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-black/[.07] bg-neutral-950 px-6 py-14 text-center text-white sm:px-12 sm:py-20 dark:border-white/10">
              <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60 [--grid:rgb(255_255_255/.05)]" />
              <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-64 w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/40 blur-[90px]" />
              <p className="relative font-mono text-xs uppercase tracking-[.18em] text-violet-300">06 / Contact</p>
              <h2 id="contact-title" className="relative mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">Let&apos;s work together</h2>
              <p className="relative mx-auto mt-5 max-w-xl text-neutral-400">I&apos;m open to full-time junior and graduate roles in Yorkshire, Manchester, or remote/hybrid across the UK. The quickest way to reach me is email or LinkedIn.</p>
              <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${site.email}`} className={`${btn} bg-white text-neutral-900 hover:bg-neutral-200`}><Mail size={16} aria-hidden="true" />{site.email}</a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/15 hover:bg-white/10`}><LinkedInIcon />LinkedIn</a>
                <a href={site.cv} download className={`${btn} border border-white/15 hover:bg-white/10`}><Download size={16} aria-hidden="true" />Download CV</a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-black/[.07] dark:border-white/[.07]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-neutral-500 sm:flex-row sm:px-8">
          <p className="flex items-center gap-2.5">
            <span className="grid grid-cols-1 h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-violet-500 to-blue-500 font-mono text-[8.5px] font-bold text-white">MFS</span>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
          <div className="flex items-center gap-5">
            <a href={site.sourceRepo} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white">Built with Next.js · Source</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-neutral-900 dark:hover:text-white"><LinkedInIcon /></a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-neutral-900 dark:hover:text-white"><GitHubIcon /></a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-neutral-900 dark:hover:text-white"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
