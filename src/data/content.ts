// All site content lives here. Edit this file to update the portfolio.

export const site = {
  url: "https://fahadsaeed.vercel.app", // TODO: replace with your real domain once deployed
  name: "Muhammad Fahad Saeed",
  title: "Full-Stack Developer",
  tagline: "React · Next.js · TypeScript · Node.js · MSc Data Science & AI",
  location: "Rotherham, UK",
  intro:
    "I build fast, custom websites and web apps with React, Next.js, TypeScript and Tailwind, backed by Node.js and Express. I recently graduated with an MSc in Data Science & AI (Distinction) from Sheffield Hallam University, and I'm looking for a full-time junior or graduate full-stack or data/AI role in the UK.",
  email: "imfahadsaeed077@gmail.com",
  linkedin: "https://www.linkedin.com/in/fahad-saeed-261755251",
  cv: "/Muhammad_Fahad_Saeed_CV.pdf",
  openTo: "Open to full-time junior / graduate full-stack and data/AI roles",
};

export type Project = {
  name: string;
  url: string;
  domain: string;
  image: string;
  blurb: string;
  tags: string[];
};

const stack = ["React", "Next.js", "TypeScript", "Tailwind"];

export const featuredProjects: Project[] = [
  {
    name: "Offshore CV",
    url: "https://offshorecv.com/",
    domain: "offshorecv.com",
    image: "/shots/offshorecv.com.jpg",
    blurb:
      "A 25-page CV-writing platform for offshore and energy workers, featuring a CV score tool, an ATS checker, service packages and SEO landing pages.",
    tags: [...stack, "SEO"],
  },
  {
    name: "Vouchara",
    url: "https://getvouchara.com/",
    domain: "getvouchara.com",
    image: "/shots/getvouchara.com.jpg",
    blurb:
      "A SaaS product that helps local service businesses turn finished jobs into customer follow-ups and five-star reviews, with sign-up and sign-in.",
    tags: [...stack, "SaaS", "Auth"],
  },
  {
    name: "Jack's Shack",
    url: "https://jackshacktci.com/",
    domain: "jackshacktci.com",
    image: "/shots/jackshacktci.com.jpg",
    blurb:
      "Site for a Grand Turk beach bar with a cruise schedule, menu, a shop for rentals and merch, group-event pages, and an Express server.",
    tags: [...stack, "Express", "E-commerce"],
  },
  {
    name: "Celtic Angel Boutique",
    url: "https://celtic-angel-boutique.com/",
    domain: "celtic-angel-boutique.com",
    image: "/shots/celtic-angel-boutique.com.jpg",
    blurb:
      "Booking site for online readings, with reading types, a booking form and PayPal payments.",
    tags: [...stack, "PayPal", "Bookings"],
  },
  {
    name: "MHD Asset Surveying",
    url: "https://mhdam.co.uk/",
    domain: "mhdam.co.uk",
    image: "/shots/mhdam.co.uk.jpg",
    blurb:
      "Website for a Birmingham M&E surveying practice, with case studies and a contact form that accepts file uploads.",
    tags: [...stack, "File uploads"],
  },
  {
    name: "IHA Property Consultancy",
    url: "https://iha-consultancy.co.uk/",
    domain: "iha-consultancy.co.uk",
    image: "/shots/iha-consultancy.co.uk.jpg",
    blurb:
      "Building and asset consultancy website with seven service pages and dedicated sector pages.",
    tags: [...stack, "B2B"],
  },
];

export const moreProjects: Project[] = [
  {
    name: "K.Style",
    url: "https://kstyledonegal.com/",
    domain: "kstyledonegal.com",
    image: "/shots/kstyledonegal.com.jpg",
    blurb: "Multi-page interiors showroom site with WhatsApp enquiries.",
    tags: stack,
  },
  {
    name: "Donegal Removals",
    url: "https://www.donegalremovals.com/",
    domain: "donegalremovals.com",
    image: "/shots/donegalremovals.com.jpg",
    blurb: "Removals site built around a detailed quote form.",
    tags: stack,
  },
  {
    name: "Abroad Mantra",
    url: "https://www.abroadmantra.com/",
    domain: "abroadmantra.com",
    image: "/shots/abroadmantra.com.jpg",
    blurb: "Study-abroad consultancy with 11 country guides and live chat.",
    tags: stack,
  },
  {
    name: "Island Express Movers",
    url: "https://www.islandexpressmovers.com/",
    domain: "islandexpressmovers.com",
    image: "/shots/islandexpressmovers.com.jpg",
    blurb: "Columbus, Ohio movers with service-area pages and estimate requests.",
    tags: stack,
  },
];

export const privateRepoNote = "Private client repo, code walkthrough on request";

export const aiProject = {
  name: "Explainable AI Application for Automated Credit Decisions",
  context: "MSc Data Science & AI, Sheffield Hallam University",
  points: [
    "Built a machine-learning application that predicts credit decisions with XGBoost.",
    "Explains each prediction with SHAP and LIME, and generates counterfactual insights with DiCE, prioritising interpretable, actionable outputs.",
    "Served the model through FastAPI backend services and a Next.js interface, making technical outputs accessible to end users.",
  ],
  tags: ["Python", "XGBoost", "SHAP", "LIME", "DiCE", "FastAPI", "Next.js"],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Front end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive design"] },
  { group: "Back end", items: ["Node.js", "Express.js", "REST APIs", "FastAPI", "MERN stack"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
  { group: "Data & AI", items: ["Python", "Machine learning", "XGBoost", "SHAP", "LIME", "DiCE"] },
  { group: "Practices", items: ["Git", "Testing", "Deployment", "Performance optimisation", "SEO"] },
];

export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-employed · Remote",
    period: "2022 – 2025",
    points: [
      "Built and deployed custom websites and web apps for international clients with React, Next.js, TypeScript, Tailwind, Node.js and Express.",
      "Owned projects end to end: requirements, implementation, testing, deployment, optimisation and ongoing support.",
      "Delivered booking, payment, enquiry and file-upload features, optimised for performance and SEO.",
    ],
  },
  {
    role: "Front-End Web Developer Intern",
    org: "Power Soft 19 · Lahore, Pakistan",
    period: "Jun 2022 – Sep 2022",
    points: [
      "Developed responsive user interfaces for corporate web projects alongside designers and senior developers.",
      "Debugged front-end issues across company web projects.",
    ],
  },
];

export const education = [
  {
    degree: "MSc Data Science and Artificial Intelligence",
    school: "Sheffield Hallam University, UK",
    period: "Sep 2025 – Sep 2026 · Distinction",
    note: "Applied Python, machine learning, explainable AI and FastAPI in practical work.",
  },
  {
    degree: "BS Computer Science",
    school: "University of Sahiwal, Pakistan",
    period: "2020 – 2024",
    note: "",
  },
];

export const certifications = ["IBM React Developer Certification", "Meta Professional Front-End Web Development", "Meta Full-Stack Developer", "Meta Next.js"];
