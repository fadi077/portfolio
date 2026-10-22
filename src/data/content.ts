/**
 * Single source of truth for every fact on the site, /llms.txt, /resume.json,
 * JSON-LD and the OG image. Edit facts here only, and never add claims that
 * Fahad has not confirmed.
 */

export type Link = { label: string; url: string };
export type Stat = { value: string; label: string };

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  location: { city: string; region: string; countryCode: string; label: string };
  /** One-line pitch shown in the hero. */
  pitch: string;
  /** Longer summary used for metadata, llms.txt and resume.json. */
  summary: string;
  keywords: string[];
  availability: string;
  workPreferences: string;
  email: string;
  linkedin: string;
  github: string;
  sourceRepo: string;
  cv: string;
};

export type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  image: string;
  description: string;
  /** Technologies beyond the shared client stack. */
  highlights: string[];
  metrics?: { stats: Stat[]; source: string; trend?: string };
};

export type Testimonial = { quote: string; author: string; org: string; relation: string; source: string; date: string };
export type ResearchProject = { name: string; institution: string; points: string[]; tech: string[] };
export type SkillGroup = { group: "Front end" | "Back end" | "Databases" | "Data & AI" | "Practices"; items: string[] };
export type Role = { role: string; org: string; location: string; start: string; end: string; period: string; points: string[] };
export type Degree = { degree: string; area: string; school: string; country: string; start: string; end: string; period: string; grade?: string; note?: string };

export const profile: Profile = {
  name: "Muhammad Fahad Saeed",
  shortName: "Fahad",
  role: "Full-Stack Developer",
  location: { city: "Rotherham", region: "South Yorkshire", countryCode: "GB", label: "Rotherham, UK" },
  pitch: "I build fast, custom websites and web apps with React, Next.js, TypeScript and Tailwind, backed by Node.js and Express.",
  summary:
    "Full-stack developer building fast, custom websites and web apps with React, Next.js, TypeScript and Tailwind, backed by Node.js and Express. Recently graduated with an MSc in Data Science & AI (Distinction) from Sheffield Hallam University; looking for a full-time junior or graduate full-stack or data/AI role in the UK.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Junior Developer", "Data Science", "Sheffield", "Rotherham", "UK"],
  availability: "Open to work",
  workPreferences: "Full-time junior and graduate roles in Yorkshire, Manchester, or remote/hybrid across the UK.",
  email: "imfahadsaeed077@gmail.com",
  linkedin: "https://www.linkedin.com/in/fahad-saeed-261755251",
  github: "https://github.com/fadi077",
  sourceRepo: "https://github.com/fadi077/portfolio",
  cv: "/Muhammad_Fahad_Saeed_CV.pdf",
};

/** Stack shared by every client site; shown once, not on each card. */
export const clientStack = ["React", "Next.js", "TypeScript", "Tailwind"] as const;

export const privateRepoNote = "Client repos are private; code walkthrough on request.";

export const featuredProjects: Project[] = [
  {
    slug: "offshorecv",
    name: "Offshore CV",
    url: "https://offshorecv.com/",
    domain: "offshorecv.com",
    image: "/shots/offshorecv.com.jpg",
    description:
      "A 25-page CV-writing platform for offshore and energy workers, featuring a CV score tool, an ATS checker, service packages and SEO landing pages.",
    highlights: ["SEO"],
    metrics: {
      stats: [
        { value: "8.6K", label: "Google clicks" },
        { value: "239K", label: "Impressions" },
        { value: "3.6%", label: "Avg. CTR" },
        { value: "5", label: "Avg. position" },
      ],
      source: "Google Search Console, Jul–Oct 2026 (3 months)",
      trend: "Daily clicks grew from near zero to ~250.",
    },
  },
  {
    slug: "vouchara",
    name: "Vouchara",
    url: "https://getvouchara.com/",
    domain: "getvouchara.com",
    image: "/shots/getvouchara.com.jpg",
    description:
      "A SaaS product that helps local service businesses turn finished jobs into customer follow-ups and five-star reviews, with sign-up and sign-in.",
    highlights: ["SaaS", "Auth"],
  },
  {
    slug: "jacks-shack",
    name: "Jack's Shack",
    url: "https://jackshacktci.com/",
    domain: "jackshacktci.com",
    image: "/shots/jackshacktci.com.jpg",
    description:
      "Site for a Grand Turk beach bar with a cruise schedule, menu, a shop for rentals and merch, group-event pages, and an Express server.",
    highlights: ["Express", "E-commerce"],
  },
  {
    slug: "celtic-angel",
    name: "Celtic Angel Boutique",
    url: "https://celtic-angel-boutique.com/",
    domain: "celtic-angel-boutique.com",
    image: "/shots/celtic-angel-boutique.com.jpg",
    description: "Booking site for online readings, with reading types, a booking form and PayPal payments.",
    highlights: ["PayPal", "Bookings"],
  },
  {
    slug: "mhdam",
    name: "MHD Asset Surveying",
    url: "https://mhdam.co.uk/",
    domain: "mhdam.co.uk",
    image: "/shots/mhdam.co.uk.jpg",
    description: "Website for a Birmingham M&E surveying practice, with case studies and a contact form that accepts file uploads.",
    highlights: ["File uploads"],
  },
  {
    slug: "iha",
    name: "IHA Property Consultancy",
    url: "https://iha-consultancy.co.uk/",
    domain: "iha-consultancy.co.uk",
    image: "/shots/iha-consultancy.co.uk.jpg",
    description: "Building and asset consultancy website with seven service pages and dedicated sector pages.",
    highlights: ["B2B"],
  },
];

export const moreProjects: Project[] = [
  { slug: "kstyle", name: "K.Style", url: "https://kstyledonegal.com/", domain: "kstyledonegal.com", image: "/shots/kstyledonegal.com.jpg", description: "Multi-page interiors showroom site with WhatsApp enquiries.", highlights: [] },
  { slug: "donegal-removals", name: "Donegal Removals", url: "https://www.donegalremovals.com/", domain: "donegalremovals.com", image: "/shots/donegalremovals.com.jpg", description: "Removals site built around a detailed quote form.", highlights: [] },
  { slug: "abroad-mantra", name: "Abroad Mantra", url: "https://www.abroadmantra.com/", domain: "abroadmantra.com", image: "/shots/abroadmantra.com.jpg", description: "Study-abroad consultancy with 11 country guides and live chat.", highlights: [] },
  { slug: "island-express", name: "Island Express Movers", url: "https://www.islandexpressmovers.com/", domain: "islandexpressmovers.com", image: "/shots/islandexpressmovers.com.jpg", description: "Columbus, Ohio movers with service-area pages and estimate requests.", highlights: [] },
];

export const testimonial: Testimonial = {
  quote:
    "…turned them into a professional, modern website that exceeded our expectations. … I would highly recommend Fahad to anyone looking for a skilled, reliable, and professional website developer.",
  author: "David Matthews",
  org: "OffshoreCV",
  relation: "Client",
  source: "LinkedIn recommendation",
  date: "2026-08",
};

export const researchProject: ResearchProject = {
  name: "Explainable AI Application for Automated Credit Decisions",
  institution: "MSc Data Science & AI, Sheffield Hallam University",
  points: [
    "Built a machine-learning application that predicts credit decisions with XGBoost.",
    "Explains each prediction with SHAP and LIME, and generates counterfactual insights with DiCE, prioritising interpretable, actionable outputs.",
    "Served the model through FastAPI backend services and a Next.js interface, making technical outputs accessible to end users.",
  ],
  tech: ["Python", "XGBoost", "SHAP", "LIME", "DiCE", "FastAPI", "Next.js"],
};

export const skills: SkillGroup[] = [
  { group: "Front end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive design"] },
  { group: "Back end", items: ["Node.js", "Express.js", "REST APIs", "FastAPI", "MERN stack"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
  { group: "Data & AI", items: ["Python", "Machine learning", "XGBoost", "SHAP", "LIME", "DiCE"] },
  { group: "Practices", items: ["Git", "Testing", "Deployment", "Performance optimisation", "SEO"] },
];

export const experience: Role[] = [
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-employed",
    location: "Remote",
    start: "2022",
    end: "2025",
    period: "2022 – 2025",
    points: [
      "Built and deployed custom websites and web apps for international clients with React, Next.js, TypeScript, Tailwind, Node.js and Express.",
      "Owned projects end to end: requirements, implementation, testing, deployment, optimisation and ongoing support.",
      "Delivered booking, payment, enquiry and file-upload features, optimised for performance and SEO.",
    ],
  },
  {
    role: "Front-End Web Developer Intern",
    org: "Power Soft 19",
    location: "Lahore, Pakistan",
    start: "2022-06",
    end: "2022-09",
    period: "Jun 2022 – Sep 2022",
    points: [
      "Developed responsive user interfaces for corporate web projects alongside designers and senior developers.",
      "Debugged front-end issues across company web projects.",
    ],
  },
];

export const education: Degree[] = [
  {
    degree: "MSc Data Science and Artificial Intelligence",
    area: "Data Science and Artificial Intelligence",
    school: "Sheffield Hallam University",
    country: "UK",
    start: "2025-09",
    end: "2026-09",
    period: "Sep 2025 – Sep 2026",
    grade: "Distinction",
    note: "Applied Python, machine learning, explainable AI and FastAPI in practical work.",
  },
  {
    degree: "BS Computer Science",
    area: "Computer Science",
    school: "University of Sahiwal",
    country: "Pakistan",
    start: "2020",
    end: "2024",
    period: "2020 – 2024",
  },
];

export const certifications: string[] = [
  "IBM React Developer Certification",
  "Meta Professional Front-End Web Development",
  "Meta Full-Stack Developer",
  "Meta Next.js",
];

/** Headline numbers for the hero; each restates a fact above. */
export const heroStats: Stat[] = [
  { value: "10", label: "Live client sites" },
  { value: "8.6K", label: "Google clicks in 3 months, Offshore CV" },
  { value: "MSc", label: "Data Science & AI, Distinction" },
];
