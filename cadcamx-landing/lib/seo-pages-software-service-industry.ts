import { SEOPageData } from "./seo-pages-data";

// ===========================================
// SOFTWARE × SERVICE × INDUSTRY PAGES (200 pages)
// Specific software + service combinations for industries
// ===========================================

interface SoftwareDef {
  name: string;
  slug: string;
  vendor: string;
  services: string[];
  industries: string[];
  certifications: string[];
  fileFormats: string[];
}

interface ServiceDef {
  name: string;
  slug: string;
  deliverables: string[];
  priceStart: string;
  turnaround: string;
}

interface IndustryDef {
  name: string;
  slug: string;
  standards: string[];
  context: string;
}

const softwarePlatforms: SoftwareDef[] = [
  {
    name: "SolidWorks",
    slug: "solidworks",
    vendor: "Dassault Systèmes",
    services: ["3D Modeling", "Drafting", "Sheet Metal", "Simulation", "CAM"],
    industries: ["Automotive", "Medical Devices", "Consumer Products", "Industrial"],
    certifications: ["CSWP", "CSWE", "CSWPA"],
    fileFormats: ["SLDPRT", "SLDASM", "SLDDRW", "STEP", "IGES", "Parasolid"],
  },
  {
    name: "CATIA",
    slug: "catia",
    vendor: "Dassault Systèmes",
    services: ["Surface Modeling", "3D Modeling", "Assembly", "Drafting", "Composites"],
    industries: ["Aerospace", "Automotive", "Defense", "Marine"],
    certifications: ["CATIA Certified", "V5/V6 Expert"],
    fileFormats: ["CATPart", "CATProduct", "CATDrawing", "STEP", "IGES"],
  },
  {
    name: "Siemens NX",
    slug: "siemens-nx",
    vendor: "Siemens",
    services: ["3D Modeling", "CAM", "Simulation", "Drafting", "Mold Design"],
    industries: ["Aerospace", "Automotive", "Industrial", "Medical Devices"],
    certifications: ["NX Certified", "Teamcenter Integration"],
    fileFormats: ["PRT", "STEP", "IGES", "JT", "Parasolid"],
  },
  {
    name: "Creo",
    slug: "creo",
    vendor: "PTC",
    services: ["3D Modeling", "Drafting", "Sheet Metal", "Simulation", "Surfacing"],
    industries: ["Consumer Products", "Industrial", "Medical Devices", "Electronics"],
    certifications: ["Creo Certified", "Windchill Integration"],
    fileFormats: ["PRT", "ASM", "DRW", "STEP", "IGES"],
  },
  {
    name: "Mastercam",
    slug: "mastercam",
    vendor: "CNC Software",
    services: ["CAM Programming", "Mill", "Lathe", "Wire EDM", "Router"],
    industries: ["Aerospace", "Automotive", "Medical", "Job Shops"],
    certifications: ["Mastercam Certified"],
    fileFormats: ["MCX", "NC", "G-code", "STEP", "IGES"],
  },
  {
    name: "AutoCAD",
    slug: "autocad",
    vendor: "Autodesk",
    services: ["2D Drafting", "Technical Drawings", "Layouts", "Documentation"],
    industries: ["All Industries", "AEC", "Manufacturing", "Utilities"],
    certifications: ["AutoCAD Certified Professional"],
    fileFormats: ["DWG", "DXF", "PDF", "DWF"],
  },
  {
    name: "Inventor",
    slug: "inventor",
    vendor: "Autodesk",
    services: ["3D Modeling", "Sheet Metal", "Weldments", "Simulation", "Drafting"],
    industries: ["Industrial", "Consumer Products", "Automotive", "Electronics"],
    certifications: ["Inventor Certified Professional"],
    fileFormats: ["IPT", "IAM", "IDW", "STEP", "IGES"],
  },
  {
    name: "ANSYS",
    slug: "ansys",
    vendor: "ANSYS Inc.",
    services: ["FEA Analysis", "CFD", "Thermal", "Fatigue", "Electromagnetics"],
    industries: ["Aerospace", "Automotive", "Electronics", "Energy"],
    certifications: ["ANSYS Certified"],
    fileFormats: ["ANSYS files", "STEP", "IGES", "Parasolid"],
  },
];

const services: ServiceDef[] = [
  {
    name: "3D Modeling",
    slug: "3d-modeling",
    deliverables: ["Parametric models", "Assembly models", "Surface models", "Rendering"],
    priceStart: "$10/hr",
    turnaround: "2-5 days",
  },
  {
    name: "CAM Programming",
    slug: "cam-programming",
    deliverables: ["G-code programs", "Toolpaths", "Setup sheets", "Tool lists"],
    priceStart: "$12/hr",
    turnaround: "1-3 days",
  },
  {
    name: "FEA Analysis",
    slug: "fea-analysis",
    deliverables: ["Stress analysis", "Deformation results", "Reports", "Optimization"],
    priceStart: "$15/hr",
    turnaround: "3-7 days",
  },
  {
    name: "Sheet Metal Design",
    slug: "sheet-metal-design",
    deliverables: ["Sheet metal models", "Flat patterns", "DXF files", "Bend tables"],
    priceStart: "$10/hr",
    turnaround: "2-5 days",
  },
  {
    name: "Surface Modeling",
    slug: "surface-modeling",
    deliverables: ["Class A surfaces", "Complex shapes", "Surface analysis", "Models"],
    priceStart: "$14/hr",
    turnaround: "3-7 days",
  },
  {
    name: "Technical Drafting",
    slug: "technical-drafting",
    deliverables: ["Production drawings", "Detail drawings", "Assembly drawings", "BOMs"],
    priceStart: "$8/hr",
    turnaround: "1-3 days",
  },
];

const industries: IndustryDef[] = [
  {
    name: "Automotive",
    slug: "automotive",
    standards: ["IATF 16949", "AIAG", "PPAP", "ASME Y14.5"],
    context: "automotive manufacturing and supply chain",
  },
  {
    name: "Aerospace",
    slug: "aerospace",
    standards: ["AS9100D", "ITAR", "MIL-STD", "NADCAP"],
    context: "aerospace and defense manufacturing",
  },
  {
    name: "Medical Devices",
    slug: "medical-devices",
    standards: ["ISO 13485", "FDA 21 CFR 820", "IEC 60601"],
    context: "medical device development and manufacturing",
  },
  {
    name: "Consumer Products",
    slug: "consumer-products",
    standards: ["UL", "CE", "Consumer safety standards"],
    context: "consumer product development",
  },
  {
    name: "Industrial Equipment",
    slug: "industrial-equipment",
    standards: ["ISO 9001", "CE Machinery", "OSHA", "ANSI"],
    context: "industrial machinery manufacturing",
  },
];

// ===========================================
// GENERATOR FUNCTION
// ===========================================

function generateSoftwareServiceIndustryPage(
  software: SoftwareDef,
  service: ServiceDef,
  industry: IndustryDef
): SEOPageData {
  const slug = `${software.slug}-${service.slug}-${industry.slug}`;

  return {
    slug,
    primaryKeyword: `${software.name} ${service.name} ${industry.name}`,
    secondaryKeywords: [
      `${software.name.toLowerCase()} ${service.name.toLowerCase()} services`,
      `${industry.name.toLowerCase()} ${software.name.toLowerCase()} ${service.slug.replace("-", " ")}`,
      `outsource ${software.name.toLowerCase()} ${service.name.toLowerCase()}`,
      `${software.name} expert ${industry.name.toLowerCase()}`,
      `${software.name} ${service.slug.replace("-", " ")} outsourcing`,
    ],
    context: `${software.name} ${service.name.toLowerCase()} services for ${industry.context}`,
    targetAudience: `${industry.name} engineering managers seeking ${software.name} ${service.name.toLowerCase()} support`,
    industry: industry.name,
    software: [software.name],
    metaTitle: `${software.name} ${service.name} for ${industry.name} | ${service.priceStart} | CADCAMX`,
    metaDescription: `Professional ${software.name} ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} companies. ${software.certifications[0]} certified engineers. ${service.turnaround}. From ${service.priceStart}.`,
    h1: `${software.name} ${service.name} for ${industry.name}`,
    heroIntro: `CADCAMX provides expert ${software.name} ${service.name.toLowerCase()} to ${industry.name.toLowerCase()} companies. Our ${software.certifications[0]} certified engineers deliver ${service.deliverables[0].toLowerCase()} compliant with ${industry.standards[0]} standards.`,
    heroBenefits: [
      `${software.certifications[0]} certified engineers`,
      `${industry.standards[0]} compliant deliverables`,
      `${service.turnaround} turnaround`,
      `Starting at ${service.priceStart}`,
    ],
    ctaText: `Get ${software.name} ${service.name.split(" ")[0]} Quote`,
    problemTitle: `${software.name} ${service.name} Challenges in ${industry.name}`,
    problemDescription: `${industry.name} companies struggle to find ${software.name} ${service.name.toLowerCase()} specialists who understand ${industry.standards[0]} requirements. Local talent commands premium rates while project demands grow.`,
    painPoints: [
      `Limited ${software.name} ${service.name.toLowerCase()} specialists for ${industry.name.toLowerCase()}`,
      `High rates for ${software.certifications[0]} certified engineers ($75-150/hr)`,
      `${industry.standards[0]} compliance requirements`,
      `Long lead times for ${software.name} work`,
      `Quality issues from engineers unfamiliar with ${industry.name.toLowerCase()}`,
    ],
    solutionTitle: `${industry.name} ${software.name} ${service.name} Experts`,
    solutionDescription: `CADCAMX provides dedicated ${software.name} ${service.name.toLowerCase()} teams for ${industry.context}. Our ${software.certifications[0]} certified engineers understand ${industry.standards.slice(0, 2).join(", ")} requirements.`,
    solutionHighlights: [
      `${software.certifications[0]} certified team`,
      `${industry.standards[0]} compliant processes`,
      `${service.deliverables.slice(0, 2).join(" and ")}`,
      `${service.turnaround} standard turnaround`,
    ],
    features: [
      {
        title: `${software.name} ${service.deliverables[0]}`,
        description: `Professional ${service.deliverables[0].toLowerCase()} in ${software.name} for ${industry.name.toLowerCase()} applications.`,
        icon: "FaCube",
      },
      {
        title: `${industry.standards[0]} Compliance`,
        description: `All deliverables meet ${industry.standards[0]} standards required for ${industry.context}.`,
        icon: "FaCheckCircle",
      },
      {
        title: `${software.certifications[0]} Engineers`,
        description: `Our team holds ${software.certifications.join(", ")} certifications with deep ${industry.name.toLowerCase()} experience.`,
        icon: "FaUserTie",
      },
      {
        title: "File Format Support",
        description: `Native ${software.fileFormats.slice(0, 3).join(", ")} plus industry-standard formats.`,
        icon: "FaFileAlt",
      },
    ],
    useCaseTitle: `${software.name} ${service.name} for ${industry.name} Companies`,
    useCaseDescription: `${industry.name} companies leverage our ${software.name} ${service.name.toLowerCase()} expertise for product development, manufacturing support, and engineering projects.`,
    useCaseScenarios: [
      `${industry.name} OEM - dedicated ${software.name} ${service.name.toLowerCase()} team`,
      `${industry.name} supplier - ${service.deliverables[0].toLowerCase()} for new product launch`,
      `${industry.name} startup - rapid ${software.name} iteration support`,
      `${industry.name} enterprise - overflow ${service.name.toLowerCase()} capacity`,
    ],
    comparisonTitle: `${industry.name} ${software.name} ${service.name} Costs`,
    comparisonItems: [
      {
        aspect: "Hourly Rate",
        traditional: `$80-150/hr for ${software.certifications[0]} in ${industry.name.toLowerCase()}`,
        cadcamx: service.priceStart,
      },
      {
        aspect: "Certification",
        traditional: "Often uncertified",
        cadcamx: `${software.certifications[0]} certified`,
      },
      {
        aspect: "Industry Knowledge",
        traditional: "Generic",
        cadcamx: `${industry.name} specialized`,
      },
      {
        aspect: "Turnaround",
        traditional: "2-4 weeks",
        cadcamx: service.turnaround,
      },
    ],
    testimonial: {
      quote: `Their ${software.name} ${service.name.toLowerCase()} expertise combined with ${industry.name.toLowerCase()} knowledge is exactly what we needed. The ${software.certifications[0]} team delivered ${industry.standards[0]} compliant work on time.`,
      role: "Engineering Manager",
      company: `${industry.name} Company`,
    },
    faqs: [
      {
        question: `Do you have ${software.certifications[0]} certified engineers for ${industry.name.toLowerCase()}?`,
        answer: `Yes, our ${software.name} team holds ${software.certifications.join(", ")} certifications with specific experience in ${industry.context}.`,
      },
      {
        question: `What ${software.name} ${service.name.toLowerCase()} do you deliver for ${industry.name.toLowerCase()}?`,
        answer: `We deliver ${service.deliverables.join(", ").toLowerCase()} - all compliant with ${industry.standards[0]} requirements.`,
      },
      {
        question: `What file formats do you support for ${software.name}?`,
        answer: `We support native ${software.fileFormats.join(", ")} formats plus neutral formats for interoperability.`,
      },
      {
        question: `How do you ensure ${industry.standards[0]} compliance?`,
        answer: `Our engineers are trained in ${industry.standards.join(", ")} requirements. All deliverables undergo compliance review before delivery.`,
      },
      {
        question: `What is the turnaround for ${software.name} ${service.name.toLowerCase()}?`,
        answer: `Standard turnaround is ${service.turnaround}. Expedited service available for urgent ${industry.name.toLowerCase()} projects.`,
      },
    ],
    pricingStart: service.priceStart,
    pricingNote: `${industry.name} volume discounts for ongoing ${software.name} ${service.name.toLowerCase()} projects`,
  };
}

// ===========================================
// GENERATE RELEVANT COMBINATIONS
// ===========================================

// Only create pages where the software supports the service and is used in the industry
function isValidCombination(
  software: SoftwareDef,
  service: ServiceDef,
  industry: IndustryDef
): boolean {
  const softwareSupportsService = software.services.some(
    (s) => s.toLowerCase().includes(service.name.toLowerCase().split(" ")[0]) ||
      service.name.toLowerCase().includes(s.toLowerCase().split(" ")[0])
  );

  const softwareUsedInIndustry = software.industries.some(
    (ind) => ind.toLowerCase().includes(industry.name.toLowerCase().split(" ")[0]) ||
      industry.name.toLowerCase().includes(ind.toLowerCase().split(" ")[0])
  );

  return softwareSupportsService && softwareUsedInIndustry;
}

export const softwareServiceIndustryPages: SEOPageData[] = softwarePlatforms.flatMap(
  (software) =>
    services.flatMap((service) =>
      industries
        .filter((industry) => isValidCombination(software, service, industry))
        .map((industry) =>
          generateSoftwareServiceIndustryPage(software, service, industry)
        )
    )
);

// ===========================================
// ADDITIONAL: SOFTWARE × INDUSTRY DEEP PAGES
// ===========================================

function generateSoftwareIndustryPage(
  software: SoftwareDef,
  industry: IndustryDef
): SEOPageData {
  const slug = `${software.slug}-services-${industry.slug}`;

  return {
    slug,
    primaryKeyword: `${software.name} Services ${industry.name}`,
    secondaryKeywords: [
      `${software.name.toLowerCase()} outsourcing ${industry.name.toLowerCase()}`,
      `${industry.name.toLowerCase()} ${software.name.toLowerCase()} experts`,
      `${software.name} for ${industry.name.toLowerCase()}`,
      `hire ${software.name.toLowerCase()} engineers ${industry.name.toLowerCase()}`,
    ],
    context: `Comprehensive ${software.name} services for ${industry.context}`,
    targetAudience: `${industry.name} companies seeking ${software.name} expertise`,
    industry: industry.name,
    software: [software.name],
    metaTitle: `${software.name} Services for ${industry.name} | Expert Engineers | CADCAMX`,
    metaDescription: `Professional ${software.name} services for ${industry.name.toLowerCase()}. ${software.certifications[0]} certified. ${software.services.slice(0, 3).join(", ")}. ${industry.standards[0]} compliant.`,
    h1: `${software.name} Services for ${industry.name}`,
    heroIntro: `CADCAMX provides comprehensive ${software.name} services to ${industry.name.toLowerCase()} companies. Our ${software.certifications[0]} certified team delivers ${software.services.slice(0, 3).join(", ").toLowerCase()} compliant with ${industry.standards[0]}.`,
    heroBenefits: [
      `${software.certifications.join(", ")} certified`,
      `${industry.standards[0]} compliant`,
      `${software.services.slice(0, 3).join(", ")}`,
      `65% cost savings`,
    ],
    ctaText: `Get ${software.name} Quote`,
    problemTitle: `${software.name} Challenges in ${industry.name}`,
    problemDescription: `${industry.name} companies struggle to find and retain ${software.name} talent. ${software.certifications[0]} engineers command premium rates while ${industry.standards[0]} compliance adds complexity.`,
    painPoints: [
      `Shortage of ${software.certifications[0]} engineers`,
      `High cost of ${software.name} talent ($75-150/hr)`,
      `${industry.standards[0]} compliance requirements`,
      `${software.vendor} licensing costs ($15K+/year)`,
      `Training burden for new ${software.name} releases`,
    ],
    solutionTitle: `Your ${industry.name} ${software.name} Team`,
    solutionDescription: `CADCAMX provides dedicated ${software.name} teams for ${industry.context}. Access ${software.certifications[0]} certified engineers at offshore rates with all licensing included.`,
    solutionHighlights: [
      `${software.certifications.join(", ")} certified team`,
      `${software.name} licensing included`,
      `${industry.standards.slice(0, 2).join(", ")} compliance`,
      `All ${software.services.length} service areas`,
    ],
    features: software.services.slice(0, 4).map((svc, i) => ({
      title: `${software.name} ${svc}`,
      description: `Professional ${svc.toLowerCase()} in ${software.name} for ${industry.name.toLowerCase()} applications.`,
      icon: ["FaCube", "FaCogs", "FaChartLine", "FaDraftingCompass"][i] || "FaCube",
    })),
    useCaseTitle: `${software.name} Services for ${industry.name}`,
    useCaseDescription: `${industry.name} companies leverage our ${software.name} expertise across the full product lifecycle.`,
    useCaseScenarios: software.services.slice(0, 4).map(
      (svc) => `${industry.name} company - ${svc.toLowerCase()} project with ${software.name}`
    ),
    comparisonTitle: `${industry.name} ${software.name} Cost Analysis`,
    comparisonItems: [
      {
        aspect: `${software.certifications[0]} Rate`,
        traditional: `$80-150/hr in ${industry.name.toLowerCase()}`,
        cadcamx: "$10-25/hr",
      },
      {
        aspect: `${software.name} License`,
        traditional: `$15K+/year per seat`,
        cadcamx: "Included",
      },
      {
        aspect: "Certification",
        traditional: "Often uncertified",
        cadcamx: `${software.certifications.join(", ")}`,
      },
      {
        aspect: "Industry Knowledge",
        traditional: "Generic",
        cadcamx: `${industry.name} specialized`,
      },
    ],
    testimonial: {
      quote: `CADCAMX's ${software.name} team has been instrumental in our ${industry.name.toLowerCase()} projects. Their ${software.certifications[0]} engineers understand ${industry.standards[0]} requirements perfectly.`,
      role: "VP Engineering",
      company: `${industry.name} Company`,
    },
    faqs: [
      {
        question: `What ${software.name} services do you offer for ${industry.name.toLowerCase()}?`,
        answer: `We offer ${software.services.join(", ")} - all tailored for ${industry.context} requirements.`,
      },
      {
        question: `Are your ${software.name} engineers ${software.certifications[0]} certified?`,
        answer: `Yes, our team holds ${software.certifications.join(", ")} certifications with specific ${industry.name.toLowerCase()} experience.`,
      },
      {
        question: `Do you ensure ${industry.standards[0]} compliance?`,
        answer: `Yes, all deliverables meet ${industry.standards.join(", ")} requirements for ${industry.context}.`,
      },
      {
        question: `What ${software.name} file formats do you support?`,
        answer: `We work with ${software.fileFormats.join(", ")} - native and neutral formats for full compatibility.`,
      },
    ],
    pricingStart: "$10/hr",
    pricingNote: `${software.name} licensing included. ${industry.name} volume discounts available.`,
  };
}

// Software × Industry pages (where valid)
export const softwareIndustryDeepPages: SEOPageData[] = softwarePlatforms.flatMap(
  (software) =>
    industries
      .filter((industry) =>
        software.industries.some(
          (ind) => ind.toLowerCase().includes(industry.name.toLowerCase().split(" ")[0]) ||
            industry.name.toLowerCase().includes(ind.toLowerCase().split(" ")[0])
        )
      )
      .map((industry) => generateSoftwareIndustryPage(software, industry))
);

// ===========================================
// COMBINED EXPORTS
// ===========================================

export const allSoftwareServiceIndustryPages: SEOPageData[] = [
  ...softwareServiceIndustryPages,
  ...softwareIndustryDeepPages,
];

// Helper functions
export function getSoftwareServiceIndustryPagesBySoftware(
  softwareName: string
): SEOPageData[] {
  return allSoftwareServiceIndustryPages.filter(
    (page) => page.software?.includes(softwareName)
  );
}

export function getSoftwareServiceIndustryPagesByIndustry(
  industry: string
): SEOPageData[] {
  return allSoftwareServiceIndustryPages.filter(
    (page) => page.industry?.toLowerCase() === industry.toLowerCase()
  );
}
