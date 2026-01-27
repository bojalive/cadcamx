import { SEOPageData } from "./seo-pages-data";

// ===========================================
// COMPETITOR COMPARISON PAGES (~100 pages)
// CADCAMX vs alternatives by industry/service
// ===========================================

interface CompetitorDef {
  name: string;
  slug: string;
  type: "marketplace" | "agency" | "freelance" | "inhouse";
  weaknesses: string[];
  priceRange: string;
}

const competitors: CompetitorDef[] = [
  {
    name: "Upwork",
    slug: "upwork",
    type: "marketplace",
    weaknesses: [
      "Inconsistent quality from freelancers",
      "High platform fees (20%+)",
      "No guaranteed availability",
      "Limited vetting for CAD skills",
      "Communication challenges with individuals",
    ],
    priceRange: "$15-75/hr",
  },
  {
    name: "Fiverr",
    slug: "fiverr",
    type: "marketplace",
    weaknesses: [
      "Race-to-bottom pricing affects quality",
      "No long-term team relationships",
      "Limited enterprise support",
      "Inconsistent turnaround times",
      "Difficult to scale projects",
    ],
    priceRange: "$10-50/hr",
  },
  {
    name: "Toptal",
    slug: "toptal",
    type: "marketplace",
    weaknesses: [
      "Very high rates ($100-200/hr)",
      "Limited CAD/CAM specialists",
      "Long matching process",
      "Software focused, not manufacturing",
      "Overkill for standard CAD work",
    ],
    priceRange: "$100-200/hr",
  },
  {
    name: "Local CAD Agencies",
    slug: "local-agencies",
    type: "agency",
    weaknesses: [
      "High overhead costs passed to clients",
      "Limited capacity and scalability",
      "Geographic constraints",
      "Premium pricing ($75-150/hr)",
      "Long lead times during busy periods",
    ],
    priceRange: "$75-150/hr",
  },
  {
    name: "Freelance CAD Engineers",
    slug: "freelancers",
    type: "freelance",
    weaknesses: [
      "Single point of failure",
      "Availability gaps and vacations",
      "Limited software licenses",
      "No backup or QC process",
      "Difficult to scale",
    ],
    priceRange: "$40-100/hr",
  },
  {
    name: "In-House CAD Team",
    slug: "in-house",
    type: "inhouse",
    weaknesses: [
      "High fully-loaded cost ($120K+/year)",
      "Recruiting takes 3-6 months",
      "Software licensing overhead",
      "Training and management burden",
      "Fixed costs during slow periods",
    ],
    priceRange: "$60-80/hr effective",
  },
  {
    name: "Offshore Freelancers",
    slug: "offshore-freelancers",
    type: "freelance",
    weaknesses: [
      "Communication barriers",
      "No accountability structure",
      "Quality inconsistency",
      "Time zone challenges",
      "IP security concerns",
    ],
    priceRange: "$5-20/hr",
  },
];

const comparisonIndustries = [
  { name: "Automotive", slug: "automotive", context: "automotive manufacturing" },
  { name: "Aerospace", slug: "aerospace", context: "aerospace and defense" },
  { name: "Medical Devices", slug: "medical-devices", context: "medical device development" },
  { name: "Consumer Products", slug: "consumer-products", context: "consumer product design" },
  { name: "Industrial", slug: "industrial", context: "industrial equipment" },
];

const comparisonServices = [
  { name: "CAD Services", slug: "cad-services" },
  { name: "3D Modeling", slug: "3d-modeling" },
  { name: "CAM Programming", slug: "cam-programming" },
  { name: "Drafting", slug: "drafting" },
];

// ===========================================
// GENERATOR FUNCTIONS
// ===========================================

function generateCompetitorPage(competitor: CompetitorDef): SEOPageData {
  const slug = `cadcamx-vs-${competitor.slug}`;

  return {
    slug,
    primaryKeyword: `CADCAMX vs ${competitor.name}`,
    secondaryKeywords: [
      `${competitor.name.toLowerCase()} alternative`,
      `${competitor.name.toLowerCase()} vs outsourcing`,
      `better than ${competitor.name.toLowerCase()} for CAD`,
      `${competitor.name.toLowerCase()} CAD comparison`,
    ],
    context: `Comparison of CADCAMX vs ${competitor.name} for CAD outsourcing`,
    targetAudience: `Engineers evaluating ${competitor.name} for CAD work`,
    industry: "Manufacturing",
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX"],
    metaTitle: `CADCAMX vs ${competitor.name} | CAD Outsourcing Comparison 2026`,
    metaDescription: `Compare CADCAMX vs ${competitor.name} for CAD services. See pricing, quality, turnaround differences. Why 500+ companies chose CADCAMX.`,
    h1: `CADCAMX vs ${competitor.name}: Which is Better for CAD Outsourcing?`,
    heroIntro: `Considering ${competitor.name} for your CAD needs? This comparison shows why engineering teams choose CADCAMX for professional CAD outsourcing over ${competitor.type === "marketplace" ? "marketplace freelancers" : competitor.type === "agency" ? "traditional agencies" : "alternatives"}.`,
    heroBenefits: [
      "Dedicated engineering teams, not random freelancers",
      "All software licenses included",
      "98% client retention rate",
      "ISO certified quality processes",
    ],
    ctaText: "Try CADCAMX Free",
    problemTitle: `Challenges with ${competitor.name} for CAD Work`,
    problemDescription: `While ${competitor.name} may seem convenient, many engineering teams discover limitations when using it for professional CAD services.`,
    painPoints: competitor.weaknesses,
    solutionTitle: "Why Teams Choose CADCAMX Instead",
    solutionDescription: `CADCAMX provides dedicated CAD engineering teams with enterprise-grade quality, predictable pricing, and guaranteed availability - everything ${competitor.name} struggles to deliver.`,
    solutionHighlights: [
      "Dedicated team assigned to your projects",
      "All CAD software licenses included",
      "Multi-level QC process",
      "US business hours support",
    ],
    features: [
      {
        title: "Dedicated Teams",
        description: `Unlike ${competitor.name}'s rotating freelancers, get a consistent team that knows your projects.`,
        icon: "FaUsers",
      },
      {
        title: "Quality Guarantee",
        description: "ISO certified processes with 99.9% accuracy guarantee and free revisions.",
        icon: "FaShieldAlt",
      },
      {
        title: "Predictable Pricing",
        description: `Transparent rates from $8/hr vs ${competitor.name}'s ${competitor.priceRange} with hidden fees.`,
        icon: "FaDollarSign",
      },
      {
        title: "Enterprise Support",
        description: "Dedicated project managers, not ticket-based support systems.",
        icon: "FaHeadset",
      },
    ],
    useCaseTitle: `Why Companies Switch from ${competitor.name}`,
    useCaseDescription: `Engineering teams frequently migrate to CADCAMX after experiencing ${competitor.name}'s limitations.`,
    useCaseScenarios: [
      `Automotive OEM switched after ${competitor.name} freelancer missed deadline`,
      `Medical device company needed consistent quality ${competitor.name} couldn't provide`,
      `Aerospace supplier required dedicated team unavailable on ${competitor.name}`,
      `Manufacturing company tired of vetting new ${competitor.name} freelancers`,
    ],
    comparisonTitle: `CADCAMX vs ${competitor.name}: Head-to-Head`,
    comparisonItems: [
      {
        aspect: "Pricing",
        traditional: competitor.priceRange,
        cadcamx: "$8-25/hr all-inclusive",
      },
      {
        aspect: "Team Model",
        traditional: competitor.type === "marketplace" ? "Random freelancers" : competitor.type === "inhouse" ? "Fixed headcount" : "Variable contractors",
        cadcamx: "Dedicated assigned team",
      },
      {
        aspect: "Software",
        traditional: "You provide or freelancer has",
        cadcamx: "All licenses included",
      },
      {
        aspect: "Quality Control",
        traditional: "Self-reported by freelancer",
        cadcamx: "Multi-level QC process",
      },
      {
        aspect: "Availability",
        traditional: "Variable, no guarantee",
        cadcamx: "Guaranteed capacity",
      },
    ],
    testimonial: {
      quote: `We tried ${competitor.name} for 6 months before switching to CADCAMX. The difference in consistency and quality is night and day. Wish we'd found them sooner.`,
      role: "Engineering Manager",
      company: "Manufacturing Company",
    },
    faqs: [
      {
        question: `Why is CADCAMX better than ${competitor.name}?`,
        answer: `CADCAMX provides dedicated teams vs ${competitor.name}'s freelancer model, includes all software licenses, has ISO certified QC, and offers predictable pricing without platform fees.`,
      },
      {
        question: `Is CADCAMX cheaper than ${competitor.name}?`,
        answer: `Yes. ${competitor.name} rates are ${competitor.priceRange} plus platform fees. CADCAMX starts at $8/hr all-inclusive with software and QC included.`,
      },
      {
        question: `Can I get better quality than ${competitor.name}?`,
        answer: `Yes. CADCAMX's multi-level QC process and dedicated teams deliver consistent 99.9% accuracy vs variable freelancer quality on ${competitor.name}.`,
      },
      {
        question: `How do I switch from ${competitor.name} to CADCAMX?`,
        answer: `Simple - contact us for a free consultation. We can start within 48 hours and handle any ongoing projects you need to transition.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: `Compare to ${competitor.name}'s ${competitor.priceRange}`,
  };
}

function generateCompetitorIndustryPage(
  competitor: CompetitorDef,
  industry: { name: string; slug: string; context: string }
): SEOPageData {
  const slug = `cadcamx-vs-${competitor.slug}-${industry.slug}`;

  return {
    slug,
    primaryKeyword: `CADCAMX vs ${competitor.name} ${industry.name}`,
    secondaryKeywords: [
      `${competitor.name.toLowerCase()} ${industry.name.toLowerCase()} CAD`,
      `${industry.name.toLowerCase()} CAD outsourcing comparison`,
      `best CAD service ${industry.name.toLowerCase()}`,
    ],
    context: `Comparison for ${industry.context}`,
    targetAudience: `${industry.name} engineers evaluating CAD outsourcing options`,
    industry: industry.name,
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX"],
    metaTitle: `CADCAMX vs ${competitor.name} for ${industry.name} | Comparison`,
    metaDescription: `Compare CADCAMX vs ${competitor.name} for ${industry.name.toLowerCase()} CAD services. See why ${industry.name.toLowerCase()} companies choose dedicated teams over freelancers.`,
    h1: `CADCAMX vs ${competitor.name} for ${industry.name} CAD Services`,
    heroIntro: `${industry.name} companies need specialized CAD support that understands ${industry.context}. Compare why CADCAMX outperforms ${competitor.name} for ${industry.name.toLowerCase()} engineering projects.`,
    heroBenefits: [
      `${industry.name} industry expertise`,
      "Dedicated teams, not random freelancers",
      "Industry compliance knowledge",
      "65% cost savings",
    ],
    ctaText: `Get ${industry.name} Quote`,
    problemTitle: `${competitor.name} Limitations for ${industry.name}`,
    problemDescription: `${industry.name} projects require specialized knowledge that ${competitor.name}'s general freelancer pool often lacks.`,
    painPoints: [
      `${competitor.name} freelancers lack ${industry.name.toLowerCase()} experience`,
      `No understanding of ${industry.context} standards`,
      ...competitor.weaknesses.slice(0, 3),
    ],
    solutionTitle: `Why ${industry.name} Teams Choose CADCAMX`,
    solutionDescription: `CADCAMX provides ${industry.name}-specialized CAD teams who understand ${industry.context} requirements and deliver compliant work.`,
    solutionHighlights: [
      `Deep ${industry.name.toLowerCase()} expertise`,
      "Industry standards compliance",
      "Dedicated specialized team",
      "Quality guarantee",
    ],
    features: [
      {
        title: `${industry.name} Expertise`,
        description: `Engineers with specific ${industry.context} experience, not generalists.`,
        icon: "FaIndustry",
      },
      {
        title: "Standards Compliance",
        description: `Understanding of ${industry.name.toLowerCase()} regulatory and quality requirements.`,
        icon: "FaCheckCircle",
      },
      {
        title: "Dedicated Team",
        description: `Consistent team assigned to your ${industry.name.toLowerCase()} projects.`,
        icon: "FaUsers",
      },
      {
        title: "Quality Assurance",
        description: `Multi-level QC process for ${industry.name.toLowerCase()} deliverables.`,
        icon: "FaShieldAlt",
      },
    ],
    useCaseTitle: `${industry.name} Companies Choosing CADCAMX`,
    useCaseDescription: `${industry.name} engineering teams switch to CADCAMX for reliable, specialized CAD support.`,
    useCaseScenarios: [
      `${industry.name} OEM - dedicated team replaced ${competitor.name} freelancers`,
      `${industry.name} supplier - consistent quality vs ${competitor.name} variability`,
      `${industry.name} startup - scalable support ${competitor.name} couldn't provide`,
      `${industry.name} enterprise - compliance requirements exceeded ${competitor.name} capabilities`,
    ],
    comparisonTitle: `${industry.name} CAD: CADCAMX vs ${competitor.name}`,
    comparisonItems: [
      {
        aspect: `${industry.name} Experience`,
        traditional: "Variable/unknown",
        cadcamx: "Specialized team",
      },
      {
        aspect: "Pricing",
        traditional: competitor.priceRange,
        cadcamx: "$8-25/hr",
      },
      {
        aspect: "Standards Knowledge",
        traditional: "Often lacking",
        cadcamx: "Industry compliant",
      },
      {
        aspect: "Team Consistency",
        traditional: "Different each project",
        cadcamx: "Dedicated team",
      },
    ],
    testimonial: {
      quote: `For ${industry.name.toLowerCase()} work, you need engineers who understand the industry. ${competitor.name} freelancers didn't. CADCAMX's dedicated team does.`,
      role: "VP Engineering",
      company: `${industry.name} Company`,
    },
    faqs: [
      {
        question: `Why is CADCAMX better than ${competitor.name} for ${industry.name.toLowerCase()}?`,
        answer: `CADCAMX provides ${industry.name.toLowerCase()}-specialized engineers who understand ${industry.context} standards. ${competitor.name}'s general freelancers typically lack this expertise.`,
      },
      {
        question: `Do you understand ${industry.name.toLowerCase()} requirements?`,
        answer: `Yes. Our team has extensive ${industry.context} experience and understands industry-specific standards and compliance requirements.`,
      },
      {
        question: `Can you handle ${industry.name.toLowerCase()} compliance?`,
        answer: `Yes. Unlike ${competitor.name} freelancers, our team is trained in ${industry.name.toLowerCase()} regulatory and quality requirements.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: `${industry.name} specialized team included`,
  };
}

function generateCompetitorServicePage(
  competitor: CompetitorDef,
  service: { name: string; slug: string }
): SEOPageData {
  const slug = `cadcamx-vs-${competitor.slug}-${service.slug}`;

  return {
    slug,
    primaryKeyword: `CADCAMX vs ${competitor.name} ${service.name}`,
    secondaryKeywords: [
      `${competitor.name.toLowerCase()} ${service.name.toLowerCase()}`,
      `outsource ${service.name.toLowerCase()} comparison`,
      `best ${service.name.toLowerCase()} service`,
    ],
    context: `Comparison for ${service.name.toLowerCase()} services`,
    targetAudience: `Engineers seeking ${service.name.toLowerCase()} outsourcing`,
    industry: "Manufacturing",
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX"],
    metaTitle: `CADCAMX vs ${competitor.name} for ${service.name} | Comparison`,
    metaDescription: `Compare CADCAMX vs ${competitor.name} for ${service.name.toLowerCase()}. Dedicated teams vs freelancers. See pricing, quality, turnaround differences.`,
    h1: `CADCAMX vs ${competitor.name} for ${service.name}`,
    heroIntro: `Need professional ${service.name.toLowerCase()}? Compare CADCAMX's dedicated engineering teams vs ${competitor.name}'s freelancer model for your ${service.name.toLowerCase()} projects.`,
    heroBenefits: [
      `Dedicated ${service.name.toLowerCase()} team`,
      "All software licenses included",
      "Quality guarantee with revisions",
      "Predictable pricing",
    ],
    ctaText: `Get ${service.name} Quote`,
    problemTitle: `${competitor.name} ${service.name} Challenges`,
    problemDescription: `${service.name} requires specialized skills and consistent quality that ${competitor.name}'s model struggles to deliver.`,
    painPoints: competitor.weaknesses,
    solutionTitle: `Professional ${service.name} with CADCAMX`,
    solutionDescription: `CADCAMX provides dedicated ${service.name.toLowerCase()} teams with certified engineers, included software, and guaranteed quality.`,
    solutionHighlights: [
      `Certified ${service.name.toLowerCase()} engineers`,
      "Software licenses included",
      "Multi-level QC process",
      "Guaranteed availability",
    ],
    features: [
      {
        title: `Expert ${service.name}`,
        description: `Certified engineers dedicated to ${service.name.toLowerCase()}, not generalists.`,
        icon: "FaCube",
      },
      {
        title: "Quality Guarantee",
        description: `99.9% accuracy with free revisions for all ${service.name.toLowerCase()} work.`,
        icon: "FaShieldAlt",
      },
      {
        title: "Software Included",
        description: `All ${service.name.toLowerCase()} software licenses included in pricing.`,
        icon: "FaLaptopCode",
      },
      {
        title: "Fast Turnaround",
        description: `Predictable ${service.name.toLowerCase()} delivery times with rush options.`,
        icon: "FaClock",
      },
    ],
    useCaseTitle: `${service.name} Success Stories`,
    useCaseDescription: `Companies switch from ${competitor.name} to CADCAMX for reliable ${service.name.toLowerCase()}.`,
    useCaseScenarios: [
      `Manufacturer - consistent ${service.name.toLowerCase()} quality vs ${competitor.name} variability`,
      `Startup - scalable ${service.name.toLowerCase()} capacity`,
      `Enterprise - dedicated ${service.name.toLowerCase()} team`,
      `Supplier - compliance requirements`,
    ],
    comparisonTitle: `${service.name}: CADCAMX vs ${competitor.name}`,
    comparisonItems: [
      {
        aspect: "Pricing",
        traditional: competitor.priceRange,
        cadcamx: "$8-25/hr",
      },
      {
        aspect: "Team Model",
        traditional: "Random freelancers",
        cadcamx: `Dedicated ${service.name.toLowerCase()} team`,
      },
      {
        aspect: "Software",
        traditional: "Variable",
        cadcamx: "All platforms included",
      },
      {
        aspect: "Quality",
        traditional: "Inconsistent",
        cadcamx: "99.9% accuracy guarantee",
      },
    ],
    testimonial: {
      quote: `For professional ${service.name.toLowerCase()}, there's no comparison. CADCAMX's dedicated team outperforms ${competitor.name} freelancers every time.`,
      role: "Engineering Manager",
      company: "Manufacturing Company",
    },
    faqs: [
      {
        question: `Is CADCAMX better than ${competitor.name} for ${service.name.toLowerCase()}?`,
        answer: `Yes. CADCAMX provides dedicated ${service.name.toLowerCase()} engineers with consistent quality vs ${competitor.name}'s variable freelancer pool.`,
      },
      {
        question: `What software do you support for ${service.name.toLowerCase()}?`,
        answer: `All major platforms - SolidWorks, CATIA, NX, Creo, AutoCAD, and more. All licenses included.`,
      },
      {
        question: `How fast is ${service.name.toLowerCase()} turnaround?`,
        answer: `Typical turnaround is 2-7 days depending on complexity. Rush options available.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: `All ${service.name.toLowerCase()} software included`,
  };
}

// ===========================================
// GENERATE ALL COMPARISON PAGES
// ===========================================

// Base competitor comparison pages (7 pages)
export const baseCompetitorPages: SEOPageData[] = competitors.map((competitor) =>
  generateCompetitorPage(competitor)
);

// Competitor × Industry pages (7 competitors × 5 industries = 35 pages)
export const competitorIndustryPages: SEOPageData[] = competitors.flatMap((competitor) =>
  comparisonIndustries.map((industry) =>
    generateCompetitorIndustryPage(competitor, industry)
  )
);

// Competitor × Service pages (7 competitors × 4 services = 28 pages)
export const competitorServicePages: SEOPageData[] = competitors.flatMap((competitor) =>
  comparisonServices.map((service) =>
    generateCompetitorServicePage(competitor, service)
  )
);

// Combined export (~70 pages)
export const allComparisonPages: SEOPageData[] = [
  ...baseCompetitorPages,
  ...competitorIndustryPages,
  ...competitorServicePages,
];

// Helper functions
export function getComparisonPagesByCompetitor(competitorSlug: string): SEOPageData[] {
  return allComparisonPages.filter((page) => page.slug.includes(competitorSlug));
}
