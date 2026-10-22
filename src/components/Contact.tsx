import { Download, Mail } from "lucide-react";
import { profile } from "@/data/content";
import { Reveal } from "./Reveal";
import { LinkedInIcon } from "./icons";

const btn = "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 py-14 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-black/[.07] bg-neutral-950 px-6 py-14 text-center text-white sm:px-12 sm:py-20 dark:border-white/10">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(560px,100%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/40 blur-[90px]" />
          <h2 id="contact-title" className="relative text-3xl font-semibold tracking-[-.035em] sm:text-5xl">Let&apos;s work together</h2>
          <p className="relative mx-auto mt-5 max-w-lg text-neutral-400">{profile.workPreferences}</p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className={`${btn} bg-white text-neutral-900 hover:bg-neutral-200`}><Mail size={16} aria-hidden="true" />{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/15 hover:bg-white/10`}><LinkedInIcon />LinkedIn</a>
            <a href={profile.cv} download className={`${btn} border border-white/15 hover:bg-white/10`}><Download size={16} aria-hidden="true" />CV</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
