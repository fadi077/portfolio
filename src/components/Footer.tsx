import { Mail } from "lucide-react";
import { profile } from "@/data/content";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Monogram } from "./Monogram";

const link = "transition hover:text-neutral-900 dark:hover:text-white";

export function Footer() {
  return (
    <footer className="border-t border-black/[.07] dark:border-white/[.07]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-neutral-500 sm:flex-row sm:px-8">
        <p className="flex items-center gap-2.5"><Monogram size="sm" />© {new Date().getFullYear()} {profile.name}</p>
        <nav aria-label="Elsewhere" className="flex items-center gap-5">
          <a href={profile.sourceRepo} target="_blank" rel="noopener noreferrer" className={link}>Source</a>
          <a href="/resume.json" className={link}>resume.json</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={link}><LinkedInIcon /></a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={link}><GitHubIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className={link}><Mail size={16} aria-hidden="true" /></a>
        </nav>
      </div>
    </footer>
  );
}
