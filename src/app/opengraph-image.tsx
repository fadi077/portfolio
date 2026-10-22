import { ImageResponse } from "next/og";
import { site, heroStats } from "@/data/content";
export const alt = `${site.name} | ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#08090c", color: "#ededed", backgroundImage: "radial-gradient(circle at 20% 0%, rgba(139,92,246,.35), transparent 50%), radial-gradient(circle at 90% 100%, rgba(59,130,246,.25), transparent 45%)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", width: 72, height: 72, borderRadius: 16, alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#8b5cf6,#3b82f6)", fontSize: 26, fontWeight: 800, color: "white" }}>MFS</div>
        <div style={{ fontSize: 26, color: "#a3a3a3" }}>{site.location}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3 }}>{site.name}</div>
        <div style={{ fontSize: 38, marginTop: 8, color: "#a78bfa" }}>{site.title}</div>
        <div style={{ fontSize: 26, marginTop: 18, color: "#a3a3a3" }}>{site.tagline}</div>
      </div>
      <div style={{ display: "flex", gap: 48 }}>
        {heroStats.map((s) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 700 }}>{s.value}</div>
            <div style={{ fontSize: 20, color: "#a3a3a3" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
