import { SEOPageData } from "./seo-pages-data";

// Software platforms
const software = [
  { name: "SolidWorks", slug: "solidworks", type: "3D CAD" },
  { name: "AutoCAD", slug: "autocad", type: "2D/3D CAD" },
  { name: "CATIA", slug: "catia", type: "3D CAD" },
  { name: "Siemens NX", slug: "siemens-nx", type: "3D CAD" },
  { name: "Creo", slug: "creo", type: "3D CAD" },
  { name: "Inventor", slug: "inventor", type: "3D CAD" },
  { name: "Fusion 360", slug: "fusion-360", type: "Cloud CAD" },
  { name: "Mastercam", slug: "mastercam", type: "CAM" },
  { name: "SOLIDWORKS Simulation", slug: "solidworks-simulation", type: "FEA" },
  { name: "ANSYS", slug: "ansys", type: "FEA" },
];

// Industries
const industries = [
  { name: "Automotive", slug: "automotive" },
  { name: "Aerospace", slug: "aerospace" },
  { name: "Medical Devices", slug: "medical" },
  { name: "Industrial", slug: "industrial" },
  { name: "Consumer Products", slug: "consumer" },
  { name: "Electronics", slug: "electronics" },
  { name: "Defense", slug: "defense" },
  { name: "Oil & Gas", slug: "oil-gas" },
];

// Cities for software + city combos
const cities = [
  { city: "Detroit", abbr: "MI" },
  { city: "Houston", abbr: "TX" },
  { city: "Los Angeles", abbr: "CA" },
  { city: "Chicago", abbr: "IL" },
  { city: "Seattle", abbr: "WA" },
  { city: "Phoenix", abbr: "AZ" },
  { city: "Boston", abbr: "MA" },
  { city: "Atlanta", abbr: "GA" },
  { city: "Dallas", abbr: "TX" },
  { city: "Denver", abbr: "CO" },
  { city: "San Diego", abbr: "CA" },
  { city: "Cleveland", abbr: "OH" },
  { city: "Minneapolis", abbr: "MN" },
  { city: "Charlotte", abbr: "NC" },
  { city: "Pittsburgh", abbr: "PA" },
];

function generateSoftwareIndustryPage(
  softwareName: string,
  softwareSlug: string,
  softwareType: string,
  industryName: string,
  industrySlug: string
): SEOPageData {
  const slug = `${softwareSlug}-${industrySlug}-services`;

  return {
    slug,
    primaryKeyword: `${softwareName} ${industryName} Services`,
    secondaryKeywords: [
      `${softwareName} for ${industryName.toLowerCase()}`,
      `${industryName.toLowerCase()} ${softwareName} outsourcing`,
      `${softwareName} ${industryName.toLowerCase()} design`,
      `outsource ${softwareName} ${industryName.toLowerCase()}`,
      `${industryName.toLowerCase()} ${softwareType} services`,
    ],
    context: `${softwareName} services for ${industryName}`,
    targetAudience: `${industryName} engineers using ${softwareName}`,
    industry: industryName,
    software: [softwareName],
    metaTitle: `${softwareName} Services for ${industryName} | Expert ${softwareType} | $12/hr`,
    metaDescription: `Professional ${softwareName} services for ${industryName.toLowerCase()} companies. Certified engineers, industry expertise. 3D modeling, drafting, analysis. From $12/hr.`,
    h1: `${softwareName} Services for ${industryName} Industry`,
    heroIntro: `Get expert ${softwareName} support tailored for ${industryName.toLowerCase()} applications. Our certified ${softwareName} engineers understand ${industryName.toLowerCase()} requirements and deliver designs that meet industry standards.`,
    heroBenefits: [
      `Certified ${softwareName} experts`,
      `${industryName} industry experience`,
      "Native file delivery",
      "From $12/hr",
    ],
    ctaText: `Get ${softwareName} Quote`,
    problemTitle: `${softwareName} Expertise Gap in ${industryName}`,
    problemDescription: `Finding ${softwareName} experts with ${industryName.toLowerCase()} experience is challenging. Generic CAD users lack the industry-specific knowledge needed for efficient, compliant designs.`,
    painPoints: [
      `Limited ${softwareName} + ${industryName.toLowerCase()} expertise`,
      "High cost of certified professionals",
      "Platform-specific features underutilized",
      "Industry standards learning curve",
      "Software version compatibility issues",
    ],
    solutionTitle: `${industryName}-Specialized ${softwareName} Team`,
    solutionDescription: `CADCAMX provides certified ${softwareName} engineers with deep ${industryName.toLowerCase()} experience. We leverage platform-specific capabilities for optimal ${industryName.toLowerCase()} designs.`,
    solutionHighlights: [
      `${softwareName} certified engineers`,
      `${industryName} standards expertise`,
      "Advanced feature utilization",
      "Version compatibility handled",
    ],
    features: [
      { title: "3D Modeling", description: `${industryName}-optimized models using ${softwareName}'s advanced features.`, icon: "FaCube" },
      { title: "Technical Drawings", description: `Production drawings meeting ${industryName.toLowerCase()} documentation standards.`, icon: "FaDraftingCompass" },
      { title: "Design Automation", description: `${softwareName} configurations and design tables for ${industryName.toLowerCase()} variants.`, icon: "FaCogs" },
      { title: "Data Management", description: `PDM integration and ${industryName.toLowerCase()} file management best practices.`, icon: "FaDatabase" },
    ],
    useCaseTitle: `${softwareName} for ${industryName} Applications`,
    useCaseDescription: `How ${industryName.toLowerCase()} companies leverage our ${softwareName} expertise.`,
    useCaseScenarios: [
      `${industryName} product development in ${softwareName}`,
      `Legacy data migration to ${softwareName}`,
      `${softwareName} template and library creation`,
      `${industryName}-specific configurations`,
    ],
    comparisonTitle: `${softwareName} Service Options`,
    comparisonItems: [
      { aspect: "Platform Expertise", traditional: "Generalist users", cadcamx: `${softwareName} certified` },
      { aspect: "Industry Knowledge", traditional: "Learning required", cadcamx: `${industryName} experienced` },
      { aspect: "Hourly Rate", traditional: "$75-120/hr", cadcamx: "$12-25/hr" },
      { aspect: "Feature Usage", traditional: "Basic", cadcamx: "Advanced optimization" },
    ],
    testimonial: {
      quote: `CADCAMX's ${softwareName} team understands ${industryName.toLowerCase()} like no one else. They use advanced features we didn't even know existed.`,
      role: "CAD Manager",
      company: `${industryName} Company`,
    },
    faqs: [
      {
        question: `Are your engineers certified in ${softwareName}?`,
        answer: `Yes, our ${softwareName} team includes certified professionals with demonstrated proficiency. We verify certifications and match projects with appropriately skilled engineers.`,
      },
      {
        question: `Do you have ${industryName.toLowerCase()} experience?`,
        answer: `Absolutely. Our ${softwareName} engineers have worked on numerous ${industryName.toLowerCase()} projects and understand industry-specific standards, materials, and requirements.`,
      },
      {
        question: `What ${softwareName} version do you use?`,
        answer: `We maintain current and recent ${softwareName} versions to ensure compatibility with your systems. We can deliver files in your specific version.`,
      },
      {
        question: `Can you work with our existing ${softwareName} data?`,
        answer: `Yes, we integrate with your existing models, templates, libraries, and PDM systems. We follow your standards and naming conventions.`,
      },
    ],
    pricingStart: "$12/hr",
    pricingNote: `${softwareName} specialists with ${industryName.toLowerCase()} expertise`,
  };
}

function generateSoftwareCityPage(
  softwareName: string,
  softwareSlug: string,
  softwareType: string,
  city: string,
  abbr: string
): SEOPageData {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const slug = `${softwareSlug}-services-${citySlug}-${abbr.toLowerCase()}`;

  return {
    slug,
    primaryKeyword: `${softwareName} Services ${city}, ${abbr}`,
    secondaryKeywords: [
      `${softwareName} outsourcing ${city}`,
      `${city} ${softwareName} experts`,
      `${softwareName} design ${abbr}`,
      `${softwareName} modeling ${city}`,
      `outsource ${softwareName} ${abbr}`,
    ],
    context: `${softwareName} services for ${city}, ${abbr}`,
    targetAudience: `Engineers and companies in ${city} using ${softwareName}`,
    software: [softwareName],
    metaTitle: `${softwareName} Services ${city}, ${abbr} | Certified Experts | $12/hr`,
    metaDescription: `Professional ${softwareName} services for ${city} companies. Certified engineers, fast turnaround. 3D modeling, drafting, assemblies. From $12/hr.`,
    h1: `${softwareName} Services for ${city}, ${abbr}`,
    heroIntro: `CADCAMX provides expert ${softwareName} services to companies in ${city} and throughout ${abbr}. Our certified ${softwareName} engineers deliver quality work at a fraction of local rates.`,
    heroBenefits: [
      `Serving ${city} businesses`,
      `Certified ${softwareName} engineers`,
      "US time zone support",
      "From $12/hr",
    ],
    ctaText: `Get ${city} Quote`,
    problemTitle: `${softwareName} Talent Challenges in ${city}`,
    problemDescription: `${city} companies struggle to find skilled ${softwareName} professionals. Local talent commands premium rates, and demand often exceeds supply.`,
    painPoints: [
      `${softwareName} experts expensive in ${city}`,
      "Limited local availability",
      "Hiring delays",
      "Freelancer reliability issues",
      "Software licensing costs",
    ],
    solutionTitle: `Your ${city} ${softwareName} Partner`,
    solutionDescription: `CADCAMX provides ${city} companies with certified ${softwareName} engineers at offshore rates. Get the expertise you need without the local cost premium.`,
    solutionHighlights: [
      `${softwareName} certified team`,
      `Supporting ${city} businesses`,
      "Immediate availability",
      "All licenses included",
    ],
    features: [
      { title: "Part Modeling", description: `Professional ${softwareName} part modeling for ${city} manufacturers.`, icon: "FaCube" },
      { title: "Assembly Design", description: `Complex assemblies with full constraint management.`, icon: "FaLayerGroup" },
      { title: "Technical Drawings", description: `Production-ready drawings with GD&T.`, icon: "FaDraftingCompass" },
      { title: "Design Automation", description: `Configurations and design tables for product variants.`, icon: "FaCogs" },
    ],
    useCaseTitle: `${softwareName} Services for ${city}`,
    useCaseDescription: `How ${city} companies use our ${softwareName} services.`,
    useCaseScenarios: [
      `${city} startup product development`,
      `${abbr} manufacturer drawing production`,
      `${softwareName} model conversion and cleanup`,
      `Design automation for ${city} OEM`,
    ],
    comparisonTitle: `${city} ${softwareName} Costs`,
    comparisonItems: [
      { aspect: "Hourly Rate", traditional: `$65-100/hr in ${city}`, cadcamx: "$12-20/hr" },
      { aspect: "Availability", traditional: "Limited", cadcamx: "Immediate" },
      { aspect: "Certification", traditional: "Varies", cadcamx: "Verified certified" },
      { aspect: "Software", traditional: "Your license", cadcamx: "Included" },
    ],
    testimonial: {
      quote: `Finding ${softwareName} talent in ${city} was a nightmare. CADCAMX solved that problem completely with their certified remote team.`,
      role: "Engineering Manager",
      company: `Manufacturing Company, ${city}`,
    },
    faqs: [
      {
        question: `Do you work with ${city} companies?`,
        answer: `Yes, we serve many ${city} and ${abbr} companies remotely. Our team maintains overlap with ${abbr} business hours for real-time collaboration.`,
      },
      {
        question: `Are your ${softwareName} engineers certified?`,
        answer: `Yes, our ${softwareName} team includes certified professionals. We verify all certifications and can provide documentation upon request.`,
      },
      {
        question: "How fast can you start?",
        answer: `We can typically begin ${softwareName} projects within 48 hours. For urgent needs, same-day starts may be available.`,
      },
      {
        question: "What file formats do you deliver?",
        answer: `Native ${softwareName} files plus any neutral formats you need (STEP, IGES, Parasolid, etc.). We match your version requirements.`,
      },
    ],
    pricingStart: "$12/hr",
    pricingNote: `${softwareName} experts serving ${city}`,
  };
}

// Generate software + industry combinations (10 software × 8 industries = 80 pages)
export const softwareIndustryPages: SEOPageData[] = software.flatMap((sw) =>
  industries.map((ind) =>
    generateSoftwareIndustryPage(sw.name, sw.slug, sw.type, ind.name, ind.slug)
  )
);

// Generate software + city combinations (10 software × 15 cities = 150 pages)
export const softwareCityPages: SEOPageData[] = software.flatMap((sw) =>
  cities.map((c) =>
    generateSoftwareCityPage(sw.name, sw.slug, sw.type, c.city, c.abbr)
  )
);
