export type NavItem = {
  id: string;
  label: string;
};

export type Project = {
  name: string;
  roleOrType: string;
  description: string;
  bullets: string[];
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type OtherWorkItem = {
  name: string;
  description?: string;
  href?: string;
};

export type SkillLogo = {
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const content = {
  owner: {
    name: "Kelvin Nimely",
    fullName: "Kelvin Nimely",
    title: "Software Developer | Systems Builder | EdTech Trainer",
    location: "Liberia",
  },
  favoriteStack: [
    "Next.js",
    "Django",
    "PostgreSQL",
    "AWS",
    "MongoDB",
    "Express.js",
    "React",
    "React Native",
    "Tauri",
  ],
  nav: [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ] satisfies NavItem[],
  hero: {
    headline: "I build systems that power real businesses.",
    subtext:
      "Software Developer based in Liberia. Focused on SaaS, infrastructure, and scalable applications.",
    ctas: {
      primary: { label: "View Work", href: "#work" },
      secondary: { label: "Contact", href: "#contact" },
    },
  },
  about: {
    paragraphs: [
      "I am a Liberian software developer and systems builder focused on creating technology that solves practical, everyday problems for businesses, schools, and communities.",
      "Over the years, I have built products across internet infrastructure, EdTech, SaaS, and streaming. I enjoy turning complex requirements into clear, dependable systems people can trust.",
      "My approach combines strong product thinking with solid engineering fundamentals: reliability, scalability, and clarity. I care about building software that is not only functional, but genuinely useful in real-world environments.",
    ],
  },
  coreAreas: {
    title: "Core Areas",
    items: [
      "SaaS Platforms",
      "Network Systems",
      "EdTech Solutions",
      "Streaming Platforms",
      "API-Driven Applications",
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      {
        title: "Frontend Development",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "Python",
          "React",
          "Next.js",
          "React Native",
          "Vite",
          "Tailwind CSS",
          "ShadCN UI",
          "Material UI",
          "Daisy UI",
          "React Icons",
        ],
      },
      { title: "Backend Development", items: ["Node.js", "Express.js", "Django"] },
      { title: "Databases", items: ["MongoDB", "PostgreSQL", "SQLite", "Supabase"] },
      { title: "Cloud, Hosting & Infra", items: ["Vercel", "Render", "AWS"] },
      { title: "Desktop & Cross-Platform Apps", items: ["Electron", "Tauri"] },
    ],
    logos: [
      { label: "HTML" },
      { label: "CSS" },
      { label: "JavaScript" },
      { label: "TypeScript" },
      { label: "Python" },
      { label: "React" },
      { label: "Next.js" },
      { label: "React Native" },
      { label: "Vite" },
      { label: "Tailwind CSS" },
      { label: "ShadCN UI" },
      { label: "Material UI" },
      { label: "Daisy UI" },
      { label: "React Icons" },
      { label: "Node.js" },
      { label: "Express.js" },
      { label: "Django" },
      { label: "MongoDB" },
      { label: "PostgreSQL" },
      { label: "SQLite" },
      { label: "Supabase" },
      { label: "Vercel" },
      { label: "Render" },
      { label: "AWS" },
      { label: "Electron" },
      { label: "Tauri" },
    ] satisfies SkillLogo[],
  },
  projects: {
    title: "Selected Work",
    featured: [
      {
        name: "PN Gateway",
        roleOrType: "Network Management System",
        description: "Powering internet providers with centralized network control.",
        bullets: [
          "Built for real ISP environments",
          "Handles authentication, access, and user management",
        ],
        href: "https://www.pngateway.com",
        image: {
          src: "/projects/pngateway-dashboard-ui.png",
          alt: "PN Gateway dashboard UI screenshot",
        },
      },
      {
        name: "EdCarry",
        roleOrType: "School Management Platform",
        description: "A structured system for managing school operations.",
        bullets: [
          "Student & teacher management",
          "Attendance & performance tracking",
        ],
        href: "https://www.edcarry.org",
        image: {
          src: "/projects/edcarry-screenshot-ui.png",
          alt: "EdCarry product UI screenshot",
        },
      },
      {
        name: "CodeDator",
        roleOrType: "Learning Platform",
        description: "Structured development learning system.",
        bullets: ["Video-based lessons", "Practical learning approach"],
        href: "https://www.codedator.com",
        image: {
          src: "/projects/codedator-screenshot-ui.png",
          alt: "CodeDator landing page screenshot",
        },
      },
      {
        name: "Dorkeni Tv",
        roleOrType: "Streaming Platform",
        description: "A video streaming platform built for accessible viewing experiences.",
        bullets: ["Content publishing workflows", "Playback-focused UI for web"],
        href: "https://www.dorkenitv.com",
        image: {
          src: "/projects/dorkeni-tv-screenshot-ui.png",
          alt: "Dorkeni Tv landing page screenshot",
        },
      },
      {
        name: "PrimeNova Technology (Company Website)",
        roleOrType: "Company Website",
        description: "A company website for PrimeNova Technology",
        bullets: ["Company website"],
        href: "https://www.pnovatech.com",
        image: {
          src: "/projects/primenovatech-screenshot-ui.png",
          alt: "PrimeNova Technology landing page screenshot",
        },
      },
      {
        name: "The Cool Appliances Company (Website Concept)",
        roleOrType: "Business Website",
        description: "A business website concept for The Cool Appliances Company",
        bullets: ["Business website"],
        href: "https://www.cool-appliances-company-website.vercel.app",
        image: {
          src: "/projects/cool-screenshot-ui.png",
          alt: "Cool Appliances landing page screenshot",
        },
      },
    ] satisfies Project[],
    otherTitle: "Other work",
    other: [
      // { name: "PrimeNova Technology", description: "Company website" },
      // { name: "Cool Appliances", description: "Business website" },
    ] as OtherWorkItem[],
  },
  services: {
    title: "Services",
    items: [
      "Website Development",
      "Web Application Development",
      "SaaS Development",
      "API Design & Integration",
      "Systems Architecture",
      "Internet Infrastructure Setup",
      "Network Design & Deployment",
      "Wi‑Fi & LAN Setup (SMB/Office)",
      "Monitoring, Troubleshooting & Optimization",
      "Mobile App Development",
      "Technical Training (Teams & Individuals)",
      "Ongoing Support & Maintenance",
    ],
  },
  contact: {
    title: "Contact",
    blurb: "For work inquiries or collaborations, reach out.",
    email: "nimely.solutions@gmail.com",
    socials: [
      { label: "Facebook", href: "https://www.facebook.com/iamkelvinnimely" },
      { label: "Instagram", href: "https://www.instagram.com/iamkelvinnimely" },
      { label: "X", href: "https://x.com/iamkelvinnimely" },
      { label: "Reddit", href: "https://www.reddit.com/user/iamkelvinnimely" },
      { label: "GitHub", href: "https://github.com/iamkelvinnimely" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/iamkelvinnimely" },
    ] satisfies SocialLink[],
    formspreeEndpoint: "https://formspree.io/f/mdapaklz",
  },
  footer: {
    items: ["Kelvin Nimely", "nimely.solutions@gmail.com", "LinkedIn"],
  },
} as const;

