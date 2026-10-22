/** Shared class tokens and tiny presentational primitives. */
export const card =
  "rounded-2xl border border-black/[.07] bg-white/70 shadow-[0_1px_2px_rgb(0_0_0/.04)] dark:border-white/[.07] dark:bg-white/[.025] dark:shadow-none";
export const muted = "text-neutral-600 dark:text-neutral-400";
const btnBase =
  "inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500";
export const btnPrimary = `${btnBase} px-5 bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200`;
export const btnGhost = `${btnBase} px-5 border border-black/10 hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]`;
export const btnIcon = `${btnBase} w-11 border border-black/10 hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]`;

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-md border border-black/[.07] bg-black/[.025] px-2 py-0.5 font-mono text-[11.5px] text-neutral-700 dark:border-white/[.08] dark:bg-white/[.04] dark:text-neutral-300">
      {children}
    </li>
  );
}

export function TagList({ items, label = "Technologies" }: { items: readonly string[]; label?: string }) {
  if (!items.length) return null;
  return <ul className="flex flex-wrap gap-1.5" aria-label={label}>{items.map((t) => <Tag key={t}>{t}</Tag>)}</ul>;
}
