import Image from "next/image";
import {
  site, featuredProjects, moreProjects, privateRepoNote, aiProject,
  skills, experience, education, certifications, type Project,
} from "@/data/content";

const nav = [
  ["Work", "#projects"], ["AI project", "#ai"], ["Skills", "#skills"],
  ["Experience", "#experience"], ["Contact", "#contact"],
];

const btn = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";
const btnPrimary = `${btn} bg-indigo-600 text-white hover:bg-indigo-500`;
const btnGhost = `${btn} border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800`;

function Tag({ children }: { children: React.ReactNode }) {
  return <li className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">{children}</li>;
}

function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-16 sm:py-20">
      {kicker && <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400">{kicker}</p>}
      <h2 id={`${id}-title`} className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function PrivateBadge() {
  return (
    <p className="inline-flex items-center gap-1.5 rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300">
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M10 2a4 4 0 0 0-4 4v2H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V6a4 4 0 0 0-4-4Zm-2 6V6a2 2 0 1 1 4 0v2H8Z"/></svg>
      {privateRepoNote}
    </p>
  );
}

function FeaturedCard({ p, priority }: { p: Project; priority?: boolean }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
      <a href={p.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden border-b border-slate-200 dark:border-slate-800" aria-label={`Visit ${p.name} (opens in new tab)`}>
        <Image src={p.image} alt={`Homepage of ${p.name}`} width={1280} height={800} priority={priority}
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
      </a>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">{p.domain} →</a>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.blurb}</p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
        <div className="mt-auto pt-2"><PrivateBadge /></div>
      </div>
    </article>
  );
}

function SmallCard({ p }: { p: Project }) {
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 transition hover:shadow-md dark:border-slate-800">
      <Image src={p.image} alt={`Homepage of ${p.name}`} width={1280} height={800} sizes="(min-width: 1024px) 240px, 50vw" className="aspect-[16/10] w-full object-cover object-top" />
      <div className="p-4">
        <h3 className="font-semibold">{p.name} <span aria-hidden="true" className="text-indigo-600 dark:text-indigo-400">→</span></h3>
        <p className="mt-1 text-xs text-slate-500">{p.domain}</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.blurb}</p>
      </div>
    </a>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: site.title,
    url: site.url, email: `mailto:${site.email}`, sameAs: [site.linkedin],
    address: { "@type": "PostalAddress", addressLocality: "Rotherham", addressCountry: "GB" },
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  };
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-[#0b0f19]/80">
        <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-bold tracking-tight">{site.name}</a>
          <ul className="hidden gap-6 text-sm text-slate-600 sm:flex dark:text-slate-400">
            {nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-slate-900 dark:hover:text-white">{l}</a></li>)}
          </ul>
          <a href={site.cv} download className="rounded-full bg-slate-900 px-4 py-1.5 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">CV</a>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-5xl px-5">
        <section id="top" className="relative pb-12 pt-16 sm:pt-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-72 bg-gradient-to-b from-indigo-200/50 to-transparent blur-3xl dark:from-indigo-600/20" />
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />{site.openTo}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">{site.name}</h1>
          <p className="mt-3 text-xl font-semibold text-indigo-600 sm:text-2xl dark:text-indigo-400">{site.title}</p>
          <p className="mt-1 font-mono text-sm text-slate-500">{site.tagline} · {site.location}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{site.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={btnPrimary}>View work</a>
            <a href={site.cv} download className={btnGhost}>Download CV</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost}>LinkedIn →</a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
            {[["10", "live client sites"], ["2022–25", "freelance"], ["MSc", "Data Science & AI"]].map(([v, l]) => (
              <div key={l}><dt className="sr-only">{l}</dt><dd className="text-2xl font-bold">{v}</dd><dd className="text-xs text-slate-500">{l}</dd></div>
            ))}
          </dl>
        </section>

        <Section id="projects" kicker="Client work" title="Featured projects">
          <p className="-mt-4 mb-8 max-w-2xl text-slate-600 dark:text-slate-400">Custom-coded with React / Next.js, TypeScript and Tailwind for freelance clients. All sites are live, click through to explore them.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((p, i) => <FeaturedCard key={p.name} p={p} priority={i < 2} />)}
          </div>
          <h3 className="mt-14 text-xl font-bold">More client work</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {moreProjects.map((p) => <SmallCard key={p.name} p={p} />)}
          </div>
        </Section>

        <Section id="ai" kicker="MSc project" title="AI & data">
          <article className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8 dark:border-indigo-500/30 dark:from-indigo-500/10 dark:to-transparent">
            <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{aiProject.context}</p>
            <h3 className="mt-2 text-xl font-bold sm:text-2xl">{aiProject.name}</h3>
            <ul className="mt-5 space-y-3">
              {aiProject.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-slate-700 dark:text-slate-300"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />{pt}</li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">{aiProject.tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
          </article>
        </Section>

        <Section id="skills" kicker="Toolkit" title="Skills">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
                <h3 className="font-semibold">{s.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" kicker="Career" title="Experience">
          <ol className="relative space-y-10 border-l border-slate-200 pl-6 dark:border-slate-800">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-indigo-500 dark:border-[#0b0f19]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <p className="font-mono text-sm text-slate-500">{e.period}</p>
                </div>
                <p className="text-sm text-slate-500">{e.org}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-600 dark:text-slate-400">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" kicker="Study" title="Education">
          <div className="grid gap-5 sm:grid-cols-2">
            {education.map((e) => (
              <div key={e.degree} className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
                <p className="font-mono text-sm text-slate-500">{e.period}</p>
                <h3 className="mt-1 font-semibold">{e.degree}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{e.school}</p>
                {e.note && <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{e.note}</p>}
              </div>
            ))}
          </div>
          <h3 className="mt-8 font-semibold">Certifications</h3>
          <ul className="mt-2 flex flex-wrap gap-2">{certifications.map((c) => <Tag key={c}>{c}</Tag>)}</ul>
        </Section>

        <Section id="contact" kicker="Say hello" title="Let's work together">
          <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-10 dark:bg-slate-800/60">
            <p className="max-w-xl text-lg text-slate-300">I&apos;m open to full-time junior and graduate roles in Yorkshire, Manchester, or remote/hybrid across the UK. The quickest way to reach me is email or LinkedIn.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className={`${btn} bg-white text-slate-900 hover:bg-slate-200`}>{site.email}</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border border-slate-600 hover:bg-slate-800`}>LinkedIn →</a>
              <a href={site.cv} download className={`${btn} border border-slate-600 hover:bg-slate-800`}>Download CV</a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} {site.name} · {site.location}
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
