"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { profile } from "@/data/content";
import { Monogram } from "./Monogram";

const links = [
  ["Work", "work"], ["AI", "ai"], ["Skills", "skills"], ["Experience", "experience"], ["Contact", "contact"],
] as const;

export function Nav() {
  const cv = profile.cv;
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", ...links.map((l) => l[1]), "education"].forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const toggle = () => {
    const next = !dark; setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  const current = active === "education" ? "experience" : active;

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${scrolled ? "border-b border-black/5 bg-[var(--bg)]/75 backdrop-blur-xl dark:border-white/[.06]" : "border-b border-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5 font-semibold tracking-tight" aria-label={`${profile.name}, back to top`}>
          <Monogram />
          <span className="hidden text-sm sm:inline">{profile.name}</span>
        </a>
        <ul className="hidden items-center gap-1 rounded-full border border-black/[.06] bg-white/60 p-1 text-sm md:flex dark:border-white/[.08] dark:bg-white/[.03]">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={current === id ? "true" : undefined}
                className={`block rounded-full px-3.5 py-1.5 transition-colors ${current === id ? "bg-black/[.06] text-neutral-900 dark:bg-white/10 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="grid h-9 w-9 place-items-center rounded-full border border-black/[.08] text-neutral-600 transition hover:bg-black/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={cv} download className="hidden h-9 items-center rounded-full bg-neutral-900 px-4 text-sm font-medium text-white transition hover:bg-neutral-700 sm:inline-flex dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">Download CV</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-black/[.08] md:hidden dark:border-white/10">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-nav" className="border-t border-black/5 bg-[var(--bg)]/95 px-5 py-3 backdrop-blur-xl md:hidden dark:border-white/[.06]">
          {links.map(([label, id]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2.5 text-neutral-700 dark:text-neutral-300">{label}</a></li>
          ))}
          <li><a href={cv} download className="block py-2.5 font-medium">Download CV</a></li>
        </ul>
      )}
    </header>
  );
}
