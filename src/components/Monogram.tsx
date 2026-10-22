export function Monogram({ size = "md" }: { size?: "sm" | "md" }) {
  const cls = size === "sm" ? "h-6 w-6 rounded-md text-[8.5px]" : "h-8 w-8 rounded-lg text-[11px] shadow-[0_0_20px_-4px_rgb(139_92_246/.7)]";
  return <span aria-hidden="true" className={`grid place-items-center bg-gradient-to-br from-violet-500 to-blue-500 font-mono font-bold text-white ${cls}`}>MFS</span>;
}
