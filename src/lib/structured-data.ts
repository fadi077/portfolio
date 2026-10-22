import { siteUrl } from "@/lib/site";
import {
  profile, clientStack, featuredProjects, moreProjects, researchProject, skills, experience, education, certifications, languages, testimonial,
} from "@/data/content";

const allProjects = [...featuredProjects, ...moreProjects];

/** schema.org Person for JSON-LD. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin, profile.github],
    address: { "@type": "PostalAddress", addressLocality: profile.location.city, addressCountry: profile.location.countryCode },
    knowsLanguage: languages.map((l) => l.language),
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    knowsAbout: skills.flatMap((s) => s.items),
  };
}

/** JSON Resume v1.0.0 (https://jsonresume.org/schema). */
export function jsonResume() {
  return {
    $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: profile.name,
      label: profile.role,
      email: profile.email,
      url: siteUrl,
      summary: profile.summary,
      location: { city: profile.location.city, region: profile.location.region, countryCode: profile.location.countryCode },
      profiles: [
        { network: "LinkedIn", url: profile.linkedin },
        { network: "GitHub", username: "fadi077", url: profile.github },
      ],
    },
    work: experience.map((r) => ({
      name: r.org, position: r.role, location: r.location, startDate: r.start, endDate: r.end, highlights: r.points,
    })),
    education: education.map((e) => ({
      institution: e.school, area: e.area, studyType: e.degree.split(" ")[0], startDate: e.start, endDate: e.end,
      ...(e.grade ? { score: e.grade } : {}),
    })),
    certificates: certifications.map((name) => ({ name })),
    languages: languages.map((l) => ({ language: l.language, fluency: l.fluency })),
    skills: skills.map((s) => ({ name: s.group, keywords: s.items })),
    projects: [
      ...allProjects.map((p) => ({
        name: p.name, url: p.url, description: p.description, entity: "Freelance client",
        ...(p.metrics ? { highlights: [...p.metrics.stats.map((s) => `${s.value} ${s.label}`), ...(p.metrics.trend ? [p.metrics.trend] : []), `Source: ${p.metrics.source}`] } : {}),
      })),
      { name: researchProject.name, entity: researchProject.institution, highlights: researchProject.points, keywords: researchProject.tech },
    ],
    references: [{ name: `${testimonial.author}, ${testimonial.org} (${testimonial.relation.toLowerCase()})`, reference: testimonial.quote }],
    meta: { canonical: `${siteUrl}/resume.json`, lastModified: "2026-10-22" },
  };
}

/** Plain-text summary for /llms.txt (https://llmstxt.org). */
export function llmsTxt() {
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.role}, ${profile.location.label}. ${profile.summary}`,
    "",
    `- Availability: ${profile.availability}. ${profile.workPreferences}`,
    `- Email: ${profile.email}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- GitHub: ${profile.github}`,
    "",
    "## Machine-readable",
    `- [Resume (JSON Resume)](${siteUrl}/resume.json)`,
    `- [CV (PDF)](${siteUrl}${profile.cv})`,
    "",
    "## Client work",
    `Built with ${clientStack.join(", ")}. Repos are private.`,
    ...allProjects.map((p) => {
      const m = p.metrics ? ` Results: ${p.metrics.stats.map((s) => `${s.value} ${s.label}`).join(", ")} (${p.metrics.source}).${p.metrics.trend ? " " + p.metrics.trend : ""}` : "";
      return `- [${p.name}](${p.url}): ${p.description}${m}`;
    }),
    "",
    "## Testimonial",
    `"${testimonial.quote}" (${testimonial.author}, ${testimonial.org}, ${testimonial.source}, ${testimonial.date})`,
    "",
    "## MSc project",
    `- ${researchProject.name} (${researchProject.institution}): ${researchProject.points.join(" ")} Tech: ${researchProject.tech.join(", ")}.`,
    "",
    "## Skills",
    ...skills.map((s) => `- ${s.group}: ${s.items.join(", ")}`),
    "",
    "## Experience",
    ...experience.map((r) => `- ${r.role}, ${r.org}, ${r.location} (${r.period}): ${r.points.join(" ")}`),
    "",
    "## Education",
    ...education.map((e) => `- ${e.degree}, ${e.school}, ${e.country} (${e.period})${e.grade ? `, ${e.grade}` : ""}`),
    "",
    "## Certifications",
    ...certifications.map((c) => `- ${c}`),
    "",
    "## Languages",
    ...languages.map((l) => `- ${l.language} (${l.fluency.toLowerCase()})`),
    "",
  ];
  return lines.join("\n");
}
