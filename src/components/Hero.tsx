import { Download, Mail, MapPin } from "lucide-react";
import { profile, heroStats } from "@/data/content";
import { Reveal } from "./Reveal";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { btnIcon, btnPrimary, muted } from "./ui";

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <section id="top" aria-labelledby="hero-title" className="relative pb-4 pt-14 sm:pb-8 sm:pt-24">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute left-1/2 -top-16 bottom-0 -z-10 w-screen -translate-x-1/2" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[min(720px,100vw)] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-500/25 via-blue-500/15 to-emerald-400/10 blur-[100px] dark:from-violet-600/30 dark:via-blue-600/20" />
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-12">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[.07] py-1 pl-2.5 pr-3 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 id="hero-title" className="mt-7 text-[2.75rem] font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-[5rem]">
              {first}<br /><span className="text-gradient">{rest.join(" ")}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium tracking-tight sm:text-xl">
              {profile.role}
              <span className="inline-flex items-center gap-1 text-sm font-normal text-neutral-500">
                <MapPin size={14} aria-hidden="true" />{profile.location.label}
              </span>
            </p>
            <p className={`mt-4 max-w-xl text-base leading-relaxed sm:text-[17px] ${muted}`}>{profile.pitch}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center gap-2.5 sm:gap-3">
              <a href={profile.cv} download className={btnPrimary}><Download size={16} aria-hidden="true" />Download CV</a>
              <a href={`mailto:${profile.email}`} className={btnIcon} aria-label={`Email ${profile.email}`}><Mail size={16} aria-hidden="true" /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={btnIcon} aria-label="LinkedIn (opens in new tab)"><LinkedInIcon /></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={btnIcon} aria-label="GitHub (opens in new tab)"><GitHubIcon /></a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <dl className="mt-12 grid grid-cols-3 divide-x divide-black/[.07] rounded-2xl border border-black/[.07] bg-white/50 backdrop-blur sm:mt-16 lg:mt-0 lg:grid-cols-1 lg:divide-x-0 lg:divide-y dark:divide-white/[.07] dark:border-white/[.07] dark:bg-white/[.02]">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end gap-1 px-3 py-4 sm:px-6 sm:py-5">
                <dt className="text-[11px] leading-snug text-neutral-500 sm:text-sm">{s.label}</dt>
                <dd className="text-2xl font-semibold tracking-[-.03em] sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
