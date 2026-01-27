import { SEOPageData } from "./seo-pages-data";

// ===========================================
// USE CASE PAGES (200 pages)
// Specific engineering use cases × locations/industries
// ===========================================

interface UseCaseDef {
  name: string;
  slug: string;
  category: "manufacturing" | "product-dev" | "documentation" | "analysis";
  description: string;
  industries: string[];
  deliverables: string[];
  software: string[];
  priceStart: string;
  turnaround: string;
  keywords: string[];
}

const useCases: UseCaseDef[] = [
  // Manufacturing Use Cases
  {
    name: "Die & Mold Design Services",
    slug: "die-mold-design-services",
    category: "manufacturing",
    description: "Injection mold, die casting, and stamping die design for manufacturing",
    industries: ["Automotive", "Consumer Products", "Medical Devices", "Electronics"],
    deliverables: ["Mold designs", "Die layouts", "Cooling analysis", "Ejector systems", "Tool drawings"],
    software: ["NX Mold Wizard", "SolidWorks", "Cimatron", "Moldflow", "CATIA"],
    priceStart: "$12/hr",
    turnaround: "5-10 days typical",
    keywords: ["die design", "mold design", "injection mold CAD", "stamping die"],
  },
  {
    name: "Stamping Tool Design",
    slug: "stamping-tool-design",
    category: "manufacturing",
    description: "Progressive dies, transfer dies, and stamping tooling for sheet metal",
    industries: ["Automotive", "Aerospace", "Appliances", "Electronics"],
    deliverables: ["Progressive die designs", "Strip layouts", "Die simulations", "Tool drawings"],
    software: ["AutoForm", "CATIA", "NX", "SolidWorks", "DYNAFORM"],
    priceStart: "$12/hr",
    turnaround: "5-10 days typical",
    keywords: ["stamping tool design", "progressive die", "transfer die", "sheet metal tooling"],
  },
  {
    name: "Weldment Design Services",
    slug: "weldment-design-services",
    category: "manufacturing",
    description: "Welded structures, frames, and fabricated assemblies design",
    industries: ["Heavy Equipment", "Industrial", "Agricultural", "Construction"],
    deliverables: ["Weldment models", "Cut lists", "Weld symbols", "Fabrication drawings"],
    software: ["SolidWorks Weldments", "Inventor", "AutoCAD", "Tekla"],
    priceStart: "$10/hr",
    turnaround: "3-7 days typical",
    keywords: ["weldment design", "welded structure CAD", "fabrication design"],
  },
  {
    name: "Machine Design Services",
    slug: "machine-design-services",
    category: "manufacturing",
    description: "Custom machinery, automation equipment, and special purpose machines",
    industries: ["Manufacturing", "Packaging", "Food Processing", "Automotive"],
    deliverables: ["Machine layouts", "Assembly models", "Motion studies", "BOM generation"],
    software: ["SolidWorks", "Inventor", "Creo", "AutoCAD"],
    priceStart: "$12/hr",
    turnaround: "1-3 weeks typical",
    keywords: ["machine design", "custom machinery CAD", "automation equipment design"],
  },
  {
    name: "Conveyor System Design",
    slug: "conveyor-system-design",
    category: "manufacturing",
    description: "Material handling, conveyor layouts, and automation systems",
    industries: ["Manufacturing", "Warehousing", "Food Processing", "Mining"],
    deliverables: ["Conveyor layouts", "Drive calculations", "Support structures", "Installation drawings"],
    software: ["SolidWorks", "Inventor", "AutoCAD", "Plant 3D"],
    priceStart: "$10/hr",
    turnaround: "5-10 days typical",
    keywords: ["conveyor design", "material handling CAD", "automation system design"],
  },
  {
    name: "Packaging Equipment Design",
    slug: "packaging-equipment-design",
    category: "manufacturing",
    description: "Packaging machinery, filling systems, and cartoning equipment",
    industries: ["Food & Beverage", "Pharmaceutical", "Consumer Products", "Cosmetics"],
    deliverables: ["Equipment designs", "Sanitary designs", "FDA compliance", "Assembly drawings"],
    software: ["SolidWorks", "Inventor", "Creo", "AutoCAD"],
    priceStart: "$12/hr",
    turnaround: "1-2 weeks typical",
    keywords: ["packaging equipment", "filling machine design", "cartoner CAD"],
  },
  {
    name: "Fixture & Jig Design",
    slug: "fixture-jig-design",
    category: "manufacturing",
    description: "Work holding fixtures, assembly jigs, and inspection gauges",
    industries: ["Automotive", "Aerospace", "Manufacturing", "Medical"],
    deliverables: ["Fixture designs", "Jig layouts", "Gauge designs", "GD&T analysis"],
    software: ["SolidWorks", "CATIA", "NX", "Inventor"],
    priceStart: "$10/hr",
    turnaround: "3-7 days typical",
    keywords: ["fixture design", "jig design", "work holding CAD", "inspection gauge"],
  },
  {
    name: "Tool & Die Engineering",
    slug: "tool-die-engineering",
    category: "manufacturing",
    description: "Comprehensive tooling engineering for stamping, forming, and molding",
    industries: ["Automotive", "Aerospace", "Consumer Products", "Electronics"],
    deliverables: ["Tool designs", "Die engineering", "Process simulation", "Tryout support"],
    software: ["CATIA", "NX", "AutoForm", "Cimatron", "SolidWorks"],
    priceStart: "$14/hr",
    turnaround: "1-3 weeks typical",
    keywords: ["tool engineering", "die engineering", "tooling CAD services"],
  },

  // Product Development Use Cases
  {
    name: "Concept to Production Design",
    slug: "concept-to-production-design",
    category: "product-dev",
    description: "Full product development from initial concept through production-ready designs",
    industries: ["Consumer Products", "Medical Devices", "Electronics", "Industrial"],
    deliverables: ["Concept models", "Detailed designs", "Production drawings", "DFM analysis"],
    software: ["SolidWorks", "Creo", "Fusion 360", "KeyShot"],
    priceStart: "$12/hr",
    turnaround: "2-6 weeks typical",
    keywords: ["product development", "concept design", "production design services"],
  },
  {
    name: "Design for Assembly (DFA)",
    slug: "design-for-assembly",
    category: "product-dev",
    description: "Optimizing product designs for efficient assembly and reduced costs",
    industries: ["Consumer Products", "Electronics", "Automotive", "Medical"],
    deliverables: ["DFA analysis", "Redesign recommendations", "Assembly sequences", "Cost reduction"],
    software: ["SolidWorks", "Creo", "Teamcenter", "DFA software"],
    priceStart: "$14/hr",
    turnaround: "1-2 weeks typical",
    keywords: ["design for assembly", "DFA services", "assembly optimization"],
  },
  {
    name: "Design for Manufacturing (DFM)",
    slug: "design-for-manufacturing",
    category: "product-dev",
    description: "Optimizing designs for manufacturability, cost, and quality",
    industries: ["All Manufacturing", "Consumer Products", "Medical", "Aerospace"],
    deliverables: ["DFM reports", "Design modifications", "Process recommendations", "Cost analysis"],
    software: ["SolidWorks", "Creo", "NX", "Moldflow"],
    priceStart: "$14/hr",
    turnaround: "1-2 weeks typical",
    keywords: ["design for manufacturing", "DFM analysis", "manufacturability review"],
  },
  {
    name: "Cost Reduction Engineering",
    slug: "cost-reduction-engineering",
    category: "product-dev",
    description: "Value engineering and redesign for manufacturing cost reduction",
    industries: ["Automotive", "Consumer Products", "Industrial", "Electronics"],
    deliverables: ["Cost analysis", "Alternative designs", "Material optimization", "Process changes"],
    software: ["SolidWorks", "Creo", "aPriori", "Excel"],
    priceStart: "$14/hr",
    turnaround: "1-3 weeks typical",
    keywords: ["cost reduction", "value engineering", "VAVE services"],
  },
  {
    name: "Value Engineering Services",
    slug: "value-engineering-services",
    category: "product-dev",
    description: "VAVE (Value Analysis/Value Engineering) for product optimization",
    industries: ["Automotive", "Aerospace", "Consumer Products", "Industrial"],
    deliverables: ["Value analysis", "Function analysis", "Cost breakdowns", "Improvement proposals"],
    software: ["SolidWorks", "Creo", "Excel", "aPriori"],
    priceStart: "$15/hr",
    turnaround: "2-4 weeks typical",
    keywords: ["value engineering", "VAVE", "value analysis services"],
  },
  {
    name: "Plastic Part Design",
    slug: "plastic-part-design",
    category: "product-dev",
    description: "Injection molded plastic part design with DFM optimization",
    industries: ["Consumer Products", "Automotive", "Medical", "Electronics"],
    deliverables: ["Part designs", "Draft analysis", "Wall thickness optimization", "Gate locations"],
    software: ["SolidWorks", "Creo", "NX", "Moldflow"],
    priceStart: "$10/hr",
    turnaround: "3-7 days typical",
    keywords: ["plastic part design", "injection molding design", "plastic CAD"],
  },
  {
    name: "Sheet Metal Product Design",
    slug: "sheet-metal-product-design",
    category: "product-dev",
    description: "Sheet metal enclosures, brackets, and fabricated products",
    industries: ["Electronics", "Industrial", "HVAC", "Automotive"],
    deliverables: ["Sheet metal models", "Flat patterns", "DXF files", "Bend tables"],
    software: ["SolidWorks", "Inventor", "AutoCAD", "Radan"],
    priceStart: "$10/hr",
    turnaround: "2-5 days typical",
    keywords: ["sheet metal design", "enclosure design", "bracket CAD"],
  },
  {
    name: "Consumer Electronics Design",
    slug: "consumer-electronics-design",
    category: "product-dev",
    description: "Electronic product enclosures, housings, and mechanical design",
    industries: ["Consumer Electronics", "IoT", "Wearables", "Audio"],
    deliverables: ["Enclosure designs", "Thermal management", "Button mechanisms", "Assembly models"],
    software: ["SolidWorks", "Creo", "Fusion 360", "KeyShot"],
    priceStart: "$12/hr",
    turnaround: "1-2 weeks typical",
    keywords: ["electronics enclosure", "product housing design", "consumer electronics CAD"],
  },

  // Documentation Use Cases
  {
    name: "Technical Manual Creation",
    slug: "technical-manual-creation",
    category: "documentation",
    description: "Technical documentation, user manuals, and service guides",
    industries: ["All Industries", "Aerospace", "Medical", "Industrial"],
    deliverables: ["Technical manuals", "User guides", "Service manuals", "Illustrations"],
    software: ["SolidWorks Composer", "Adobe Illustrator", "Arbortext", "Framemaker"],
    priceStart: "$10/hr",
    turnaround: "1-3 weeks typical",
    keywords: ["technical manual", "user manual creation", "technical documentation"],
  },
  {
    name: "Assembly Instructions Design",
    slug: "assembly-instructions-design",
    category: "documentation",
    description: "Step-by-step assembly instructions and visual work instructions",
    industries: ["Consumer Products", "Furniture", "Electronics", "Industrial"],
    deliverables: ["Assembly guides", "Exploded views", "Step sequences", "Visual instructions"],
    software: ["SolidWorks Composer", "Adobe Illustrator", "Creo Illustrate", "KeyShot"],
    priceStart: "$10/hr",
    turnaround: "3-7 days typical",
    keywords: ["assembly instructions", "work instructions", "visual assembly guide"],
  },
  {
    name: "Maintenance Documentation",
    slug: "maintenance-documentation",
    category: "documentation",
    description: "Maintenance manuals, service procedures, and repair guides",
    industries: ["Aerospace", "Automotive", "Industrial Equipment", "Marine"],
    deliverables: ["Maintenance manuals", "Service procedures", "Parts catalogs", "Troubleshooting guides"],
    software: ["SolidWorks Composer", "Arbortext", "S1000D tools", "Framemaker"],
    priceStart: "$12/hr",
    turnaround: "1-4 weeks typical",
    keywords: ["maintenance manual", "service documentation", "repair guide"],
  },
  {
    name: "Training Material Development",
    slug: "training-material-development",
    category: "documentation",
    description: "Training guides, visual aids, and educational materials",
    industries: ["Manufacturing", "Aerospace", "Medical", "Industrial"],
    deliverables: ["Training guides", "Visual aids", "Procedure documentation", "Assessment materials"],
    software: ["SolidWorks Composer", "Adobe Suite", "PowerPoint", "Articulate"],
    priceStart: "$12/hr",
    turnaround: "1-3 weeks typical",
    keywords: ["training materials", "training documentation", "visual training aids"],
  },
  {
    name: "Patent Drawing Services",
    slug: "patent-drawing-services",
    category: "documentation",
    description: "USPTO and international patent application drawings",
    industries: ["All Industries", "Medical", "Consumer Products", "Technology"],
    deliverables: ["Patent drawings", "Design patents", "Utility patents", "Multiple views"],
    software: ["SolidWorks", "AutoCAD", "Adobe Illustrator", "Visio"],
    priceStart: "$15/hr",
    turnaround: "3-7 days typical",
    keywords: ["patent drawings", "USPTO drawings", "patent illustration"],
  },
  {
    name: "Parts Catalog Creation",
    slug: "parts-catalog-creation",
    category: "documentation",
    description: "Interactive parts catalogs and illustrated parts lists",
    industries: ["Automotive", "Aerospace", "Industrial Equipment", "Marine"],
    deliverables: ["Parts catalogs", "IPL/IPC", "Exploded views", "Part numbering"],
    software: ["SolidWorks Composer", "Arbortext", "PTC Windchill", "3DVIA"],
    priceStart: "$10/hr",
    turnaround: "1-3 weeks typical",
    keywords: ["parts catalog", "IPC", "illustrated parts list"],
  },

  // Analysis Use Cases
  {
    name: "Structural FEA Services",
    slug: "structural-fea-services",
    category: "analysis",
    description: "Linear and nonlinear structural analysis for product validation",
    industries: ["Automotive", "Aerospace", "Industrial", "Consumer Products"],
    deliverables: ["Stress analysis", "Deformation results", "Safety factors", "Optimization"],
    software: ["ANSYS", "SolidWorks Simulation", "Abaqus", "NX Nastran"],
    priceStart: "$18/hr",
    turnaround: "3-10 days typical",
    keywords: ["structural FEA", "stress analysis", "structural simulation"],
  },
  {
    name: "Thermal Analysis Services",
    slug: "thermal-analysis-services",
    category: "analysis",
    description: "Heat transfer, thermal management, and cooling system analysis",
    industries: ["Electronics", "Automotive", "Aerospace", "Industrial"],
    deliverables: ["Thermal maps", "Heat dissipation", "Cooling optimization", "Transient analysis"],
    software: ["ANSYS", "SolidWorks Flow", "FloTHERM", "Icepak"],
    priceStart: "$18/hr",
    turnaround: "3-10 days typical",
    keywords: ["thermal analysis", "heat transfer simulation", "thermal management"],
  },
  {
    name: "CFD Analysis Services",
    slug: "cfd-analysis-services",
    category: "analysis",
    description: "Computational fluid dynamics for flow and aerodynamics",
    industries: ["Automotive", "Aerospace", "HVAC", "Process Equipment"],
    deliverables: ["Flow analysis", "Pressure drops", "Aerodynamic optimization", "Visualization"],
    software: ["ANSYS Fluent", "SolidWorks Flow", "Star-CCM+", "OpenFOAM"],
    priceStart: "$20/hr",
    turnaround: "5-14 days typical",
    keywords: ["CFD analysis", "flow simulation", "aerodynamics analysis"],
  },
  {
    name: "Fatigue Analysis Services",
    slug: "fatigue-analysis-services",
    category: "analysis",
    description: "Fatigue life prediction and durability analysis",
    industries: ["Automotive", "Aerospace", "Heavy Equipment", "Industrial"],
    deliverables: ["Fatigue life", "Damage accumulation", "S-N curves", "Durability reports"],
    software: ["ANSYS nCode", "fe-safe", "SolidWorks Simulation", "FEMFAT"],
    priceStart: "$20/hr",
    turnaround: "5-14 days typical",
    keywords: ["fatigue analysis", "durability simulation", "fatigue life prediction"],
  },
  {
    name: "Tolerance Stack-Up Analysis",
    slug: "tolerance-stack-up-analysis",
    category: "analysis",
    description: "GD&T tolerance analysis and stack-up calculations",
    industries: ["Automotive", "Aerospace", "Medical", "Precision Manufacturing"],
    deliverables: ["Stack-up reports", "Tolerance allocation", "Statistical analysis", "GD&T review"],
    software: ["3DCS", "CETOL", "VSA", "Excel"],
    priceStart: "$15/hr",
    turnaround: "3-7 days typical",
    keywords: ["tolerance analysis", "stack-up analysis", "GD&T analysis"],
  },
  {
    name: "Moldflow Analysis Services",
    slug: "moldflow-analysis-services",
    category: "analysis",
    description: "Injection molding simulation for plastic part optimization",
    industries: ["Consumer Products", "Automotive", "Medical", "Electronics"],
    deliverables: ["Fill analysis", "Cooling analysis", "Warpage prediction", "Gate optimization"],
    software: ["Moldflow", "Moldex3D", "SolidWorks Plastics", "Sigmasoft"],
    priceStart: "$18/hr",
    turnaround: "3-7 days typical",
    keywords: ["moldflow analysis", "injection molding simulation", "plastic flow analysis"],
  },
];

// Industries for use case combinations
const targetIndustries = [
  { name: "Automotive", slug: "automotive", context: "automotive manufacturing" },
  { name: "Aerospace", slug: "aerospace", context: "aerospace and defense" },
  { name: "Medical Devices", slug: "medical-devices", context: "medical device manufacturing" },
  { name: "Consumer Products", slug: "consumer-products", context: "consumer product development" },
  { name: "Industrial Equipment", slug: "industrial-equipment", context: "industrial machinery" },
  { name: "Electronics", slug: "electronics", context: "electronics manufacturing" },
  { name: "Heavy Equipment", slug: "heavy-equipment", context: "heavy equipment manufacturing" },
];

// ===========================================
// GENERATOR FUNCTION
// ===========================================

function generateUseCasePage(useCase: UseCaseDef): SEOPageData {
  const primaryIndustry = useCase.industries[0];

  return {
    slug: useCase.slug,
    primaryKeyword: useCase.name,
    secondaryKeywords: [
      ...useCase.keywords,
      `outsource ${useCase.name.toLowerCase()}`,
      `${useCase.name.toLowerCase()} company`,
      `professional ${useCase.name.toLowerCase()}`,
    ],
    context: useCase.description,
    targetAudience: `Engineering managers and product teams in ${useCase.industries.join(", ")} seeking ${useCase.name.toLowerCase()}`,
    industry: primaryIndustry,
    software: useCase.software,
    metaTitle: `${useCase.name} | ${useCase.priceStart} | CADCAMX`,
    metaDescription: `Professional ${useCase.name.toLowerCase()} for ${useCase.industries.slice(0, 3).join(", ")}. ${useCase.software.slice(0, 3).join(", ")} experts. ${useCase.turnaround}. Starting at ${useCase.priceStart}.`,
    h1: `${useCase.name} - Professional Engineering Support`,
    heroIntro: `CADCAMX provides expert ${useCase.name.toLowerCase()} for ${useCase.industries.join(", ")} companies. Our certified engineers deliver ${useCase.deliverables[0].toLowerCase()} and ${useCase.deliverables[1].toLowerCase()} using ${useCase.software.slice(0, 3).join(", ")}.`,
    heroBenefits: [
      `${useCase.turnaround}`,
      `${useCase.software[0]} & ${useCase.software[1]} certified`,
      `${useCase.industries.slice(0, 2).join(" & ")} expertise`,
      `Starting at ${useCase.priceStart}`,
    ],
    ctaText: `Get ${useCase.name.split(" ").slice(0, 2).join(" ")} Quote`,
    problemTitle: `${useCase.name} Challenges`,
    problemDescription: `Companies across ${useCase.industries.slice(0, 3).join(", ")} face challenges finding qualified ${useCase.name.toLowerCase()} specialists. Local talent is expensive and scarce, while project demands require ${useCase.software[0]} expertise.`,
    painPoints: [
      `Limited ${useCase.name.toLowerCase()} specialists available`,
      `High local rates ($75-150/hr) for ${useCase.software[0]} experts`,
      `Long turnaround times from traditional vendors`,
      `Difficulty scaling for large ${useCase.category} projects`,
      `Quality inconsistency with freelancers`,
    ],
    solutionTitle: `Professional ${useCase.name}`,
    solutionDescription: `CADCAMX provides dedicated ${useCase.name.toLowerCase()} teams with ${useCase.software[0]} and ${useCase.software[1]} expertise. We deliver ${useCase.deliverables.slice(0, 3).join(", ").toLowerCase()} with ${useCase.turnaround}.`,
    solutionHighlights: [
      `Certified ${useCase.software.slice(0, 2).join(" and ")} engineers`,
      `${useCase.deliverables.slice(0, 2).join(" and ")}`,
      `${useCase.turnaround}`,
      `Quality guarantee with revisions`,
    ],
    features: useCase.deliverables.slice(0, 4).map((deliverable, i) => ({
      title: deliverable,
      description: `Professional ${deliverable.toLowerCase()} for ${useCase.industries[0].toLowerCase()} and ${useCase.industries[1]?.toLowerCase() || "manufacturing"} applications.`,
      icon: ["FaCube", "FaFileAlt", "FaCheckCircle", "FaCogs"][i] || "FaCube",
    })),
    useCaseTitle: `${useCase.name} Applications`,
    useCaseDescription: `From prototypes to production, companies leverage our ${useCase.name.toLowerCase()} across multiple industries.`,
    useCaseScenarios: [
      `${useCase.industries[0]} company - ${useCase.deliverables[0].toLowerCase()} for new product launch`,
      `${useCase.industries[1] || "Manufacturing"} OEM - dedicated ${useCase.name.toLowerCase()} team`,
      `Startup - rapid ${useCase.deliverables[1]?.toLowerCase() || "design"} iteration support`,
      `Enterprise - overflow ${useCase.name.toLowerCase()} capacity`,
    ],
    comparisonTitle: `${useCase.name} Cost Comparison`,
    comparisonItems: [
      {
        aspect: "Hourly Rate",
        traditional: "$75-150/hr typical",
        cadcamx: useCase.priceStart,
      },
      {
        aspect: "Turnaround",
        traditional: "2-4 weeks typical",
        cadcamx: useCase.turnaround,
      },
      {
        aspect: "Software",
        traditional: `$15K+/year for ${useCase.software[0]}`,
        cadcamx: "Included - all platforms",
      },
      {
        aspect: "Scalability",
        traditional: "Limited capacity",
        cadcamx: "Scale in 48 hours",
      },
    ],
    testimonial: {
      quote: `CADCAMX's ${useCase.name.toLowerCase()} team delivered exactly what we needed. Their ${useCase.software[0]} expertise and understanding of ${useCase.industries[0].toLowerCase()} requirements exceeded expectations.`,
      role: "Engineering Manager",
      company: `${useCase.industries[0]} Company`,
    },
    faqs: [
      {
        question: `What software do you use for ${useCase.name.toLowerCase()}?`,
        answer: `We support ${useCase.software.join(", ")}. Our engineers are certified in the platforms your team uses.`,
      },
      {
        question: `How fast can you deliver ${useCase.name.toLowerCase()}?`,
        answer: `Typical turnaround is ${useCase.turnaround}. We offer expedited service for urgent projects.`,
      },
      {
        question: `What ${useCase.name.toLowerCase()} deliverables do you provide?`,
        answer: `We deliver ${useCase.deliverables.join(", ").toLowerCase()}. All files in your preferred formats.`,
      },
      {
        question: `Which industries do you support for ${useCase.name.toLowerCase()}?`,
        answer: `We specialize in ${useCase.industries.join(", ")}. Our engineers understand industry-specific requirements.`,
      },
      {
        question: `What is the cost for ${useCase.name.toLowerCase()}?`,
        answer: `Rates start at ${useCase.priceStart}. Volume discounts available for ongoing projects.`,
      },
    ],
    pricingStart: useCase.priceStart,
    pricingNote: `Volume discounts for ongoing ${useCase.name.toLowerCase()} projects`,
  };
}

function generateUseCaseIndustryPage(
  useCase: UseCaseDef,
  industry: { name: string; slug: string; context: string }
): SEOPageData {
  const slug = `${useCase.slug}-${industry.slug}`;

  return {
    slug,
    primaryKeyword: `${useCase.name} ${industry.name}`,
    secondaryKeywords: [
      `${industry.name.toLowerCase()} ${useCase.keywords[0]}`,
      `${useCase.name.toLowerCase()} for ${industry.name.toLowerCase()}`,
      `${industry.slug} ${useCase.slug.split("-").slice(0, 2).join(" ")}`,
      `outsource ${useCase.name.toLowerCase()} ${industry.name.toLowerCase()}`,
    ],
    context: `${useCase.description} for ${industry.context}`,
    targetAudience: `${industry.name} engineering managers seeking ${useCase.name.toLowerCase()}`,
    industry: industry.name,
    software: useCase.software,
    metaTitle: `${useCase.name} for ${industry.name} | ${useCase.priceStart} | CADCAMX`,
    metaDescription: `Professional ${useCase.name.toLowerCase()} for ${industry.name.toLowerCase()} companies. ${useCase.software.slice(0, 2).join(", ")} experts. ${useCase.turnaround}. From ${useCase.priceStart}.`,
    h1: `${useCase.name} for ${industry.name}`,
    heroIntro: `CADCAMX provides specialized ${useCase.name.toLowerCase()} for ${industry.context}. Our engineers understand ${industry.name.toLowerCase()} requirements and deliver ${useCase.deliverables[0].toLowerCase()} using ${useCase.software.slice(0, 2).join(" and ")}.`,
    heroBenefits: [
      `${industry.name} industry expertise`,
      `${useCase.software[0]} certified engineers`,
      `${useCase.turnaround}`,
      `Starting at ${useCase.priceStart}`,
    ],
    ctaText: `Get ${industry.name} Quote`,
    problemTitle: `${useCase.name} Challenges in ${industry.name}`,
    problemDescription: `${industry.name} companies face unique ${useCase.name.toLowerCase()} challenges. Finding specialists who understand ${industry.context} requirements is difficult and expensive.`,
    painPoints: [
      `Limited ${useCase.name.toLowerCase()} specialists for ${industry.name.toLowerCase()}`,
      `High rates for ${industry.name.toLowerCase()}-experienced engineers`,
      `${industry.name} compliance requirements`,
      `Long lead times from generalist vendors`,
      `Quality issues from engineers unfamiliar with ${industry.name.toLowerCase()}`,
    ],
    solutionTitle: `${industry.name} ${useCase.name} Specialists`,
    solutionDescription: `CADCAMX provides ${industry.name.toLowerCase()}-focused ${useCase.name.toLowerCase()} teams. Our engineers have deep experience in ${industry.context} and deliver compliant ${useCase.deliverables[0].toLowerCase()}.`,
    solutionHighlights: [
      `${industry.name} industry experience`,
      `${useCase.software[0]} and ${useCase.software[1]} certified`,
      `Industry-compliant deliverables`,
      `${useCase.turnaround}`,
    ],
    features: useCase.deliverables.slice(0, 4).map((deliverable, i) => ({
      title: `${industry.name} ${deliverable}`,
      description: `${deliverable} optimized for ${industry.context} requirements and standards.`,
      icon: ["FaCube", "FaFileAlt", "FaCheckCircle", "FaCogs"][i] || "FaCube",
    })),
    useCaseTitle: `${useCase.name} for ${industry.name} Companies`,
    useCaseDescription: `${industry.name} companies leverage our ${useCase.name.toLowerCase()} for product development, manufacturing, and documentation needs.`,
    useCaseScenarios: [
      `${industry.name} OEM - ${useCase.deliverables[0].toLowerCase()} for new product`,
      `${industry.name} supplier - dedicated ${useCase.name.toLowerCase()} team`,
      `${industry.name} startup - rapid iteration support`,
      `${industry.name} enterprise - overflow capacity`,
    ],
    comparisonTitle: `${industry.name} ${useCase.name} Costs`,
    comparisonItems: [
      {
        aspect: "Hourly Rate",
        traditional: `$80-150/hr for ${industry.name.toLowerCase()} specialists`,
        cadcamx: useCase.priceStart,
      },
      {
        aspect: "Industry Knowledge",
        traditional: "Often lacking",
        cadcamx: `Deep ${industry.name.toLowerCase()} expertise`,
      },
      {
        aspect: "Turnaround",
        traditional: "2-4 weeks",
        cadcamx: useCase.turnaround,
      },
      {
        aspect: "Compliance",
        traditional: "Variable",
        cadcamx: `${industry.name} standards compliant`,
      },
    ],
    testimonial: {
      quote: `Their understanding of ${industry.name.toLowerCase()} requirements made all the difference. The ${useCase.name.toLowerCase()} team delivered exactly what we needed for our ${industry.context} project.`,
      role: "VP Engineering",
      company: `${industry.name} Company`,
    },
    faqs: [
      {
        question: `Do you have ${industry.name.toLowerCase()} ${useCase.name.toLowerCase()} experience?`,
        answer: `Yes, we have extensive experience in ${industry.context}. Our engineers understand ${industry.name.toLowerCase()} standards and requirements.`,
      },
      {
        question: `What ${industry.name.toLowerCase()} standards do you follow?`,
        answer: `We follow all relevant ${industry.name.toLowerCase()} standards and can adapt to your specific requirements.`,
      },
      {
        question: `How is ${useCase.name.toLowerCase()} different for ${industry.name.toLowerCase()}?`,
        answer: `${industry.name} requires specific attention to ${industry.context} requirements. Our specialized team ensures compliance.`,
      },
      {
        question: `What software do you use for ${industry.name.toLowerCase()} ${useCase.name.toLowerCase()}?`,
        answer: `We use ${useCase.software.join(", ")} - the platforms most common in ${industry.name.toLowerCase()}.`,
      },
    ],
    pricingStart: useCase.priceStart,
    pricingNote: `${industry.name} volume discounts available`,
  };
}

// ===========================================
// GENERATE ALL USE CASE PAGES
// ===========================================

// Base use case pages (28 pages)
export const baseUseCasePages: SEOPageData[] = useCases.map((useCase) =>
  generateUseCasePage(useCase)
);

// Use case × Industry combinations (28 use cases × 7 industries = 196 pages, but we'll select relevant combinations)
// Filter to only create pages where the use case is relevant to the industry
function isRelevantCombination(useCase: UseCaseDef, industryName: string): boolean {
  return useCase.industries.some(
    (ind) => ind.toLowerCase().includes(industryName.toLowerCase()) ||
      industryName.toLowerCase().includes(ind.toLowerCase().split(" ")[0])
  );
}

export const useCaseIndustryPages: SEOPageData[] = useCases.flatMap((useCase) =>
  targetIndustries
    .filter((industry) => isRelevantCombination(useCase, industry.name))
    .map((industry) => generateUseCaseIndustryPage(useCase, industry))
);

// Combined export
export const allUseCasePages: SEOPageData[] = [
  ...baseUseCasePages,
  ...useCaseIndustryPages,
];

// Helper functions
export function getUseCasePagesByCategory(category: string): SEOPageData[] {
  return baseUseCasePages.filter((page) =>
    useCases.find((uc) => uc.slug === page.slug && uc.category === category)
  );
}

export function getUseCasePagesByIndustry(industry: string): SEOPageData[] {
  return allUseCasePages.filter(
    (page) => page.industry?.toLowerCase() === industry.toLowerCase()
  );
}
