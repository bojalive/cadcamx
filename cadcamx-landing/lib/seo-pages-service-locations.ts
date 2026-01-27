import { SEOPageData } from "./seo-pages-data";

// ===========================================
// SERVICE × LOCATION PAGES (600 pages)
// 6 services × (50 cities + 50 states)
// ===========================================

// Service definitions with unique content angles
interface ServiceDefinition {
  name: string;
  slug: string;
  shortName: string;
  priceRange: string;
  priceStart: string;
  software: string[];
  icon: string;
  deliverables: string[];
  standards: string[];
  turnaround: string;
}

const services: ServiceDefinition[] = [
  {
    name: "3D Modeling Services",
    slug: "3d-modeling",
    shortName: "3D Modeling",
    priceRange: "$10-20/hr",
    priceStart: "$10/hr",
    software: ["SolidWorks", "CATIA", "Creo", "NX", "Inventor", "Fusion 360"],
    icon: "FaCube",
    deliverables: ["Parametric 3D models", "Assembly models", "Surface models", "Rendering files"],
    standards: ["ASME Y14.5", "ISO GPS", "GD&T"],
    turnaround: "2-5 days typical",
  },
  {
    name: "CAM Programming Services",
    slug: "cam-programming",
    shortName: "CAM Programming",
    priceRange: "$12-25/hr",
    priceStart: "$12/hr",
    software: ["Mastercam", "PowerMill", "HSMWorks", "Fusion 360 CAM", "EdgeCAM", "hyperMILL"],
    icon: "FaCogs",
    deliverables: ["G-code programs", "Toolpath files", "Setup sheets", "Tool lists"],
    standards: ["FANUC", "Siemens", "Haas", "Mazak"],
    turnaround: "1-3 days typical",
  },
  {
    name: "Mechanical Drafting Services",
    slug: "mechanical-drafting",
    shortName: "Mechanical Drafting",
    priceRange: "$8-15/hr",
    priceStart: "$8/hr",
    software: ["AutoCAD", "SolidWorks", "Inventor", "Creo", "DraftSight"],
    icon: "FaDraftingCompass",
    deliverables: ["Production drawings", "Assembly drawings", "Detail drawings", "BOMs"],
    standards: ["ASME Y14.5", "ISO 128", "ANSI"],
    turnaround: "1-3 days typical",
  },
  {
    name: "Sheet Metal Design Services",
    slug: "sheet-metal-design",
    shortName: "Sheet Metal Design",
    priceRange: "$10-20/hr",
    priceStart: "$10/hr",
    software: ["SolidWorks Sheet Metal", "Inventor Sheet Metal", "AutoCAD", "Radan"],
    icon: "FaLayerGroup",
    deliverables: ["3D sheet metal models", "Flat patterns", "DXF files for laser/plasma", "Bend tables"],
    standards: ["K-factor calculations", "Bend allowance", "DIN standards"],
    turnaround: "2-4 days typical",
  },
  {
    name: "FEA Analysis Services",
    slug: "fea-analysis",
    shortName: "FEA Analysis",
    priceRange: "$15-35/hr",
    priceStart: "$15/hr",
    software: ["ANSYS", "SolidWorks Simulation", "Abaqus", "NX Nastran", "COMSOL"],
    icon: "FaChartLine",
    deliverables: ["Stress analysis reports", "Deformation analysis", "Fatigue analysis", "Thermal analysis"],
    standards: ["ASME BPVC", "FEA best practices", "Convergence studies"],
    turnaround: "3-7 days typical",
  },
  {
    name: "Reverse Engineering Services",
    slug: "reverse-engineering",
    shortName: "Reverse Engineering",
    priceRange: "$12-25/hr",
    priceStart: "$12/hr",
    software: ["Geomagic", "PolyWorks", "SolidWorks", "CATIA", "SpaceClaim"],
    icon: "FaSearchPlus",
    deliverables: ["Scan-to-CAD models", "Legacy part recreation", "Point cloud processing", "Parametric models"],
    standards: ["Accuracy verification", "Deviation analysis", "Surface quality"],
    turnaround: "3-7 days typical",
  },
];

// Cities with their state info and primary industry
interface CityInfo {
  city: string;
  state: string;
  abbr: string;
  industry: string;
  industryContext: string;
}

const cities: CityInfo[] = [
  // Manufacturing Belt
  { city: "Detroit", state: "Michigan", abbr: "MI", industry: "Automotive", industryContext: "automotive manufacturing hub" },
  { city: "Grand Rapids", state: "Michigan", abbr: "MI", industry: "Manufacturing", industryContext: "furniture and automotive supplier" },
  { city: "Ann Arbor", state: "Michigan", abbr: "MI", industry: "Automotive R&D", industryContext: "automotive research center" },
  { city: "Cleveland", state: "Ohio", abbr: "OH", industry: "Manufacturing", industryContext: "industrial manufacturing center" },
  { city: "Cincinnati", state: "Ohio", abbr: "OH", industry: "Manufacturing", industryContext: "machine tool hub" },
  { city: "Columbus", state: "Ohio", abbr: "OH", industry: "Manufacturing", industryContext: "diverse manufacturing" },
  { city: "Dayton", state: "Ohio", abbr: "OH", industry: "Aerospace", industryContext: "aerospace and defense" },
  { city: "Indianapolis", state: "Indiana", abbr: "IN", industry: "Automotive", industryContext: "motorsports and automotive" },
  { city: "Fort Wayne", state: "Indiana", abbr: "IN", industry: "Manufacturing", industryContext: "defense and automotive" },
  { city: "Chicago", state: "Illinois", abbr: "IL", industry: "Industrial", industryContext: "industrial equipment" },
  { city: "Rockford", state: "Illinois", abbr: "IL", industry: "Aerospace", industryContext: "aerospace fasteners" },
  { city: "Milwaukee", state: "Wisconsin", abbr: "WI", industry: "Manufacturing", industryContext: "industrial equipment" },

  // Texas Triangle
  { city: "Houston", state: "Texas", abbr: "TX", industry: "Oil & Gas", industryContext: "energy sector hub" },
  { city: "Dallas", state: "Texas", abbr: "TX", industry: "Aerospace", industryContext: "defense and aerospace" },
  { city: "Austin", state: "Texas", abbr: "TX", industry: "Technology", industryContext: "tech manufacturing" },
  { city: "San Antonio", state: "Texas", abbr: "TX", industry: "Aerospace", industryContext: "military and aerospace" },
  { city: "Fort Worth", state: "Texas", abbr: "TX", industry: "Aerospace", industryContext: "defense manufacturing" },

  // West Coast
  { city: "Los Angeles", state: "California", abbr: "CA", industry: "Aerospace", industryContext: "aerospace and entertainment" },
  { city: "San Diego", state: "California", abbr: "CA", industry: "Defense", industryContext: "defense and biotech" },
  { city: "San Jose", state: "California", abbr: "CA", industry: "Technology", industryContext: "silicon valley tech" },
  { city: "San Francisco", state: "California", abbr: "CA", industry: "Technology", industryContext: "tech startups" },
  { city: "Irvine", state: "California", abbr: "CA", industry: "Medical Devices", industryContext: "medical technology" },
  { city: "Seattle", state: "Washington", abbr: "WA", industry: "Aerospace", industryContext: "commercial aerospace" },
  { city: "Portland", state: "Oregon", abbr: "OR", industry: "Technology", industryContext: "tech and manufacturing" },

  // Aerospace Hubs
  { city: "Phoenix", state: "Arizona", abbr: "AZ", industry: "Aerospace", industryContext: "aerospace and semiconductor" },
  { city: "Tucson", state: "Arizona", abbr: "AZ", industry: "Aerospace", industryContext: "defense and optics" },
  { city: "Wichita", state: "Kansas", abbr: "KS", industry: "Aviation", industryContext: "general aviation" },
  { city: "Huntsville", state: "Alabama", abbr: "AL", industry: "Aerospace", industryContext: "space and defense" },
  { city: "Denver", state: "Colorado", abbr: "CO", industry: "Aerospace", industryContext: "aerospace and defense" },

  // Medical Device Hubs
  { city: "Boston", state: "Massachusetts", abbr: "MA", industry: "Medical Devices", industryContext: "biotech and medical" },
  { city: "Minneapolis", state: "Minnesota", abbr: "MN", industry: "Medical Devices", industryContext: "medical device hub" },
  { city: "Rochester", state: "Minnesota", abbr: "MN", industry: "Medical", industryContext: "healthcare technology" },

  // Additional Major Cities
  { city: "Atlanta", state: "Georgia", abbr: "GA", industry: "Aerospace", industryContext: "aerospace and automotive" },
  { city: "Charlotte", state: "North Carolina", abbr: "NC", industry: "Aerospace", industryContext: "aerospace and automotive" },
  { city: "Raleigh", state: "North Carolina", abbr: "NC", industry: "Technology", industryContext: "research triangle" },
  { city: "Philadelphia", state: "Pennsylvania", abbr: "PA", industry: "Manufacturing", industryContext: "pharmaceuticals and manufacturing" },
  { city: "Pittsburgh", state: "Pennsylvania", abbr: "PA", industry: "Manufacturing", industryContext: "steel and robotics" },
  { city: "Miami", state: "Florida", abbr: "FL", industry: "Aerospace", industryContext: "aviation MRO" },
  { city: "Orlando", state: "Florida", abbr: "FL", industry: "Aerospace", industryContext: "simulation and defense" },
  { city: "Tampa", state: "Florida", abbr: "FL", industry: "Manufacturing", industryContext: "defense and medical" },
  { city: "Nashville", state: "Tennessee", abbr: "TN", industry: "Automotive", industryContext: "automotive suppliers" },
  { city: "St Louis", state: "Missouri", abbr: "MO", industry: "Aerospace", industryContext: "defense and aerospace" },
  { city: "Kansas City", state: "Missouri", abbr: "MO", industry: "Manufacturing", industryContext: "automotive and aerospace" },
  { city: "Hartford", state: "Connecticut", abbr: "CT", industry: "Aerospace", industryContext: "jet engines" },
  { city: "Salt Lake City", state: "Utah", abbr: "UT", industry: "Aerospace", industryContext: "aerospace and defense" },
  { city: "Las Vegas", state: "Nevada", abbr: "NV", industry: "Manufacturing", industryContext: "gaming and aerospace" },
  { city: "Albuquerque", state: "New Mexico", abbr: "NM", industry: "Aerospace", industryContext: "defense labs" },
  { city: "Louisville", state: "Kentucky", abbr: "KY", industry: "Automotive", industryContext: "automotive and appliances" },
  { city: "Oklahoma City", state: "Oklahoma", abbr: "OK", industry: "Aerospace", industryContext: "aviation MRO" },
];

// States with their info
interface StateInfo {
  state: string;
  abbr: string;
  industries: string[];
  majorCities: string[];
}

const states: StateInfo[] = [
  { state: "Michigan", abbr: "MI", industries: ["Automotive", "Manufacturing", "Defense"], majorCities: ["Detroit", "Grand Rapids", "Ann Arbor"] },
  { state: "Ohio", abbr: "OH", industries: ["Manufacturing", "Aerospace", "Automotive"], majorCities: ["Cleveland", "Cincinnati", "Columbus"] },
  { state: "Indiana", abbr: "IN", industries: ["Automotive", "Manufacturing", "Defense"], majorCities: ["Indianapolis", "Fort Wayne", "South Bend"] },
  { state: "Illinois", abbr: "IL", industries: ["Industrial Equipment", "Aerospace", "Manufacturing"], majorCities: ["Chicago", "Rockford", "Peoria"] },
  { state: "Wisconsin", abbr: "WI", industries: ["Manufacturing", "Medical Devices", "Industrial"], majorCities: ["Milwaukee", "Madison", "Green Bay"] },
  { state: "Texas", abbr: "TX", industries: ["Oil & Gas", "Aerospace", "Technology"], majorCities: ["Houston", "Dallas", "Austin"] },
  { state: "California", abbr: "CA", industries: ["Aerospace", "Technology", "Medical Devices"], majorCities: ["Los Angeles", "San Diego", "San Jose"] },
  { state: "Washington", abbr: "WA", industries: ["Aerospace", "Technology", "Manufacturing"], majorCities: ["Seattle", "Everett", "Tacoma"] },
  { state: "Oregon", abbr: "OR", industries: ["Technology", "Manufacturing", "Aerospace"], majorCities: ["Portland", "Eugene", "Salem"] },
  { state: "Arizona", abbr: "AZ", industries: ["Aerospace", "Semiconductor", "Defense"], majorCities: ["Phoenix", "Tucson", "Mesa"] },
  { state: "Colorado", abbr: "CO", industries: ["Aerospace", "Defense", "Technology"], majorCities: ["Denver", "Colorado Springs", "Boulder"] },
  { state: "Kansas", abbr: "KS", industries: ["Aviation", "Manufacturing", "Aerospace"], majorCities: ["Wichita", "Kansas City", "Topeka"] },
  { state: "Alabama", abbr: "AL", industries: ["Aerospace", "Automotive", "Defense"], majorCities: ["Huntsville", "Birmingham", "Mobile"] },
  { state: "Massachusetts", abbr: "MA", industries: ["Medical Devices", "Biotechnology", "Defense"], majorCities: ["Boston", "Worcester", "Cambridge"] },
  { state: "Minnesota", abbr: "MN", industries: ["Medical Devices", "Manufacturing", "Aerospace"], majorCities: ["Minneapolis", "Rochester", "St Paul"] },
  { state: "Georgia", abbr: "GA", industries: ["Aerospace", "Automotive", "Manufacturing"], majorCities: ["Atlanta", "Savannah", "Augusta"] },
  { state: "North Carolina", abbr: "NC", industries: ["Aerospace", "Automotive", "Technology"], majorCities: ["Charlotte", "Raleigh", "Greensboro"] },
  { state: "South Carolina", abbr: "SC", industries: ["Automotive", "Aerospace", "Manufacturing"], majorCities: ["Charleston", "Greenville", "Columbia"] },
  { state: "Tennessee", abbr: "TN", industries: ["Automotive", "Manufacturing", "Healthcare"], majorCities: ["Nashville", "Memphis", "Chattanooga"] },
  { state: "Pennsylvania", abbr: "PA", industries: ["Manufacturing", "Pharmaceuticals", "Robotics"], majorCities: ["Philadelphia", "Pittsburgh", "Allentown"] },
  { state: "New York", abbr: "NY", industries: ["Manufacturing", "Aerospace", "Technology"], majorCities: ["New York City", "Buffalo", "Rochester"] },
  { state: "Florida", abbr: "FL", industries: ["Aerospace", "Defense", "Medical Devices"], majorCities: ["Miami", "Orlando", "Tampa"] },
  { state: "Missouri", abbr: "MO", industries: ["Aerospace", "Automotive", "Manufacturing"], majorCities: ["St Louis", "Kansas City", "Springfield"] },
  { state: "Connecticut", abbr: "CT", industries: ["Aerospace", "Defense", "Manufacturing"], majorCities: ["Hartford", "New Haven", "Stamford"] },
  { state: "Utah", abbr: "UT", industries: ["Aerospace", "Technology", "Manufacturing"], majorCities: ["Salt Lake City", "Provo", "Ogden"] },
  { state: "Nevada", abbr: "NV", industries: ["Manufacturing", "Gaming", "Aerospace"], majorCities: ["Las Vegas", "Reno", "Henderson"] },
  { state: "New Mexico", abbr: "NM", industries: ["Aerospace", "Defense", "Research"], majorCities: ["Albuquerque", "Santa Fe", "Las Cruces"] },
  { state: "Kentucky", abbr: "KY", industries: ["Automotive", "Aerospace", "Manufacturing"], majorCities: ["Louisville", "Lexington", "Bowling Green"] },
  { state: "Oklahoma", abbr: "OK", industries: ["Aerospace", "Oil & Gas", "Manufacturing"], majorCities: ["Oklahoma City", "Tulsa", "Norman"] },
  { state: "New Jersey", abbr: "NJ", industries: ["Pharmaceuticals", "Manufacturing", "Defense"], majorCities: ["Newark", "Jersey City", "Trenton"] },
  // Additional states for 50 total
  { state: "Virginia", abbr: "VA", industries: ["Defense", "Aerospace", "Technology"], majorCities: ["Norfolk", "Richmond", "Arlington"] },
  { state: "Maryland", abbr: "MD", industries: ["Defense", "Biotechnology", "Aerospace"], majorCities: ["Baltimore", "Bethesda", "Rockville"] },
  { state: "Iowa", abbr: "IA", industries: ["Manufacturing", "Agriculture", "Aerospace"], majorCities: ["Des Moines", "Cedar Rapids", "Davenport"] },
  { state: "Nebraska", abbr: "NE", industries: ["Manufacturing", "Agriculture", "Defense"], majorCities: ["Omaha", "Lincoln", "Bellevue"] },
  { state: "Arkansas", abbr: "AR", industries: ["Manufacturing", "Aerospace", "Consumer Products"], majorCities: ["Little Rock", "Fayetteville", "Fort Smith"] },
  { state: "Louisiana", abbr: "LA", industries: ["Oil & Gas", "Manufacturing", "Petrochemical"], majorCities: ["New Orleans", "Baton Rouge", "Shreveport"] },
  { state: "Mississippi", abbr: "MS", industries: ["Manufacturing", "Aerospace", "Automotive"], majorCities: ["Jackson", "Gulfport", "Biloxi"] },
  { state: "West Virginia", abbr: "WV", industries: ["Manufacturing", "Energy", "Aerospace"], majorCities: ["Charleston", "Huntington", "Morgantown"] },
  { state: "New Hampshire", abbr: "NH", industries: ["Manufacturing", "Defense", "Technology"], majorCities: ["Manchester", "Nashua", "Concord"] },
  { state: "Maine", abbr: "ME", industries: ["Manufacturing", "Defense", "Shipbuilding"], majorCities: ["Portland", "Lewiston", "Bangor"] },
  { state: "Vermont", abbr: "VT", industries: ["Manufacturing", "Technology", "Aerospace"], majorCities: ["Burlington", "South Burlington", "Rutland"] },
  { state: "Rhode Island", abbr: "RI", industries: ["Manufacturing", "Defense", "Marine"], majorCities: ["Providence", "Warwick", "Cranston"] },
  { state: "Delaware", abbr: "DE", industries: ["Pharmaceuticals", "Manufacturing", "Chemical"], majorCities: ["Wilmington", "Dover", "Newark"] },
  { state: "Montana", abbr: "MT", industries: ["Manufacturing", "Aerospace", "Mining"], majorCities: ["Billings", "Missoula", "Great Falls"] },
  { state: "Idaho", abbr: "ID", industries: ["Technology", "Manufacturing", "Aerospace"], majorCities: ["Boise", "Meridian", "Nampa"] },
  { state: "Wyoming", abbr: "WY", industries: ["Energy", "Manufacturing", "Mining"], majorCities: ["Cheyenne", "Casper", "Laramie"] },
  { state: "South Dakota", abbr: "SD", industries: ["Manufacturing", "Agriculture", "Technology"], majorCities: ["Sioux Falls", "Rapid City", "Aberdeen"] },
  { state: "North Dakota", abbr: "ND", industries: ["Energy", "Manufacturing", "Agriculture"], majorCities: ["Fargo", "Bismarck", "Grand Forks"] },
  { state: "Hawaii", abbr: "HI", industries: ["Defense", "Aerospace", "Marine"], majorCities: ["Honolulu", "Pearl City", "Hilo"] },
  { state: "Alaska", abbr: "AK", industries: ["Oil & Gas", "Defense", "Mining"], majorCities: ["Anchorage", "Fairbanks", "Juneau"] },
];

// ===========================================
// GENERATOR FUNCTIONS
// ===========================================

function generateServiceCityPage(
  service: ServiceDefinition,
  cityInfo: CityInfo
): SEOPageData {
  const { city, state, abbr, industry, industryContext } = cityInfo;
  const locationFull = `${city}, ${abbr}`;
  const slug = `${service.slug}-${city.toLowerCase().replace(/\s+/g, "-")}-${abbr.toLowerCase()}`;

  return {
    slug,
    primaryKeyword: `${service.name} ${locationFull}`,
    secondaryKeywords: [
      `${service.shortName} ${city}`,
      `${service.shortName} near me ${abbr}`,
      `${industry.toLowerCase()} ${service.shortName.toLowerCase()} ${city}`,
      `outsource ${service.shortName.toLowerCase()} ${state}`,
      `professional ${service.shortName.toLowerCase()} ${locationFull}`,
      `${service.software[0]} ${service.shortName.toLowerCase()} ${city}`,
    ],
    context: `${service.name} for ${industryContext} in ${locationFull}`,
    targetAudience: `Engineering managers, manufacturers, and product teams in ${locationFull} seeking ${service.shortName.toLowerCase()} support`,
    industry: industry,
    software: service.software,
    metaTitle: `${service.name} ${locationFull} | ${service.priceRange} | CADCAMX`,
    metaDescription: `Professional ${service.shortName.toLowerCase()} for ${city} ${industry.toLowerCase()} companies. Expert ${service.software.slice(0, 3).join(", ")} support from ${service.priceStart}. ${service.turnaround}. Get a free quote.`,
    h1: `${service.name} for ${locationFull} Businesses`,
    heroIntro: `CADCAMX provides expert ${service.shortName.toLowerCase()} to ${industry.toLowerCase()} companies in ${city} and throughout ${state}. Our certified engineers deliver high-quality ${service.deliverables[0].toLowerCase()} using ${service.software.slice(0, 3).join(", ")} at rates starting from ${service.priceStart}.`,
    heroBenefits: [
      `${service.turnaround} for ${city} projects`,
      `${service.software[0]} & ${service.software[1]} certified engineers`,
      `${industry} industry expertise`,
      `Starting at ${service.priceStart} - 65% cost savings`,
    ],
    ctaText: `Get ${service.shortName} Quote for ${city}`,
    problemTitle: `${service.shortName} Challenges in ${city}`,
    problemDescription: `${industry} companies in ${locationFull} face significant challenges finding qualified ${service.shortName.toLowerCase()} professionals. Local talent commands premium rates while project demands continue to grow.`,
    painPoints: [
      `High cost of local ${service.shortName.toLowerCase()} talent in ${city} ($75-150/hr)`,
      `Limited ${service.software[0]} experts in ${state}`,
      `Long turnaround times from local vendors`,
      `Difficulty scaling for large ${industry.toLowerCase()} projects`,
      `Software licensing costs for ${service.software.slice(0, 2).join(" and ")}`,
    ],
    solutionTitle: `Your ${city} ${service.shortName} Partner`,
    solutionDescription: `CADCAMX serves as your dedicated ${service.shortName.toLowerCase()} team, providing ${city} businesses with instant access to certified engineers who understand ${industry.toLowerCase()} requirements and deliver ${service.standards.join(", ")} compliant work.`,
    solutionHighlights: [
      `Certified ${service.software[0]} and ${service.software[1]} engineers`,
      `${service.standards[0]} compliant deliverables`,
      `US business hours support for ${state}`,
      `${service.turnaround} turnaround`,
    ],
    features: [
      {
        title: service.deliverables[0],
        description: `Professional ${service.deliverables[0].toLowerCase()} for ${city} ${industry.toLowerCase()} projects using ${service.software[0]}.`,
        icon: service.icon,
      },
      {
        title: service.deliverables[1],
        description: `Expert ${service.deliverables[1].toLowerCase()} meeting ${service.standards[0]} standards for ${state} manufacturers.`,
        icon: "FaCheckCircle",
      },
      {
        title: service.deliverables[2],
        description: `Complete ${service.deliverables[2].toLowerCase()} packages for ${industry.toLowerCase()} applications.`,
        icon: "FaFileAlt",
      },
      {
        title: "Quality Assurance",
        description: `Multi-level QC process ensuring accuracy for ${locationFull} clients. 99.9% accuracy guarantee.`,
        icon: "FaShieldAlt",
      },
    ],
    useCaseTitle: `How ${city} Companies Use Our ${service.shortName}`,
    useCaseDescription: `From startups to established ${industry.toLowerCase()} manufacturers, businesses across ${state} leverage our ${service.shortName.toLowerCase()} to accelerate their engineering workflows.`,
    useCaseScenarios: [
      `${city} ${industry.toLowerCase()} company needed ${service.deliverables[0].toLowerCase()} for 100+ parts - delivered in 2 weeks`,
      `${state} manufacturer reduced ${service.shortName.toLowerCase()} costs by 65% with dedicated team`,
      `${industry} startup cleared project backlog with overnight ${service.shortName.toLowerCase()} support`,
      `Legacy ${service.deliverables[3] || "documentation"} conversion for ${city} OEM`,
    ],
    comparisonTitle: `${city} ${service.shortName} Cost Comparison`,
    comparisonItems: [
      {
        aspect: "Hourly Rate",
        traditional: `$75-150/hr in ${city}`,
        cadcamx: service.priceRange,
      },
      {
        aspect: "Turnaround",
        traditional: "1-2 weeks typical",
        cadcamx: service.turnaround,
      },
      {
        aspect: "Software",
        traditional: `$15K+/year per ${service.software[0]} seat`,
        cadcamx: "Included - all major platforms",
      },
      {
        aspect: "Scaling",
        traditional: "Months to add capacity",
        cadcamx: "Add engineers in 48 hours",
      },
    ],
    testimonial: {
      quote: `CADCAMX's ${service.shortName.toLowerCase()} team has been instrumental in helping us meet tight deadlines. Their ${service.software[0]} expertise and understanding of ${industry.toLowerCase()} requirements is outstanding.`,
      role: "Engineering Manager",
      company: `${industry} Company, ${state}`,
    },
    faqs: [
      {
        question: `What ${service.shortName.toLowerCase()} software do you support for ${city} clients?`,
        answer: `We support all major platforms including ${service.software.join(", ")}. Our engineers are certified and experienced in the tools your ${city} team uses.`,
      },
      {
        question: `How fast can you deliver ${service.shortName.toLowerCase()} for ${state} projects?`,
        answer: `Typical turnaround is ${service.turnaround}. For urgent ${city} projects, we offer expedited service with dedicated engineers working extended hours.`,
      },
      {
        question: `Do you follow ${industry} standards for ${service.shortName.toLowerCase()}?`,
        answer: `Yes, all deliverables meet ${service.standards.join(", ")} standards. We understand the specific requirements for ${industry.toLowerCase()} applications.`,
      },
      {
        question: `How do you handle communication with ${city} teams?`,
        answer: `We maintain overlap with US business hours for real-time collaboration. Project managers are available during ${state} working hours via video call, email, or your preferred tools.`,
      },
      {
        question: `What ${service.shortName.toLowerCase()} deliverables do you provide?`,
        answer: `We deliver ${service.deliverables.join(", ").toLowerCase()}. All files are provided in your preferred formats with full revision control.`,
      },
    ],
    pricingStart: service.priceStart,
    pricingNote: `Volume discounts available for ${city} companies with ongoing ${service.shortName.toLowerCase()} needs`,
  };
}

function generateServiceStatePage(
  service: ServiceDefinition,
  stateInfo: StateInfo
): SEOPageData {
  const { state, abbr, industries, majorCities } = stateInfo;
  const primaryIndustry = industries[0];
  const slug = `${service.slug}-${state.toLowerCase().replace(/\s+/g, "-")}`;

  return {
    slug,
    primaryKeyword: `${service.name} ${state}`,
    secondaryKeywords: [
      `${service.shortName} ${abbr}`,
      `${service.shortName} companies ${state}`,
      `outsource ${service.shortName.toLowerCase()} ${abbr}`,
      `${primaryIndustry.toLowerCase()} ${service.shortName.toLowerCase()} ${state}`,
      `professional ${service.shortName.toLowerCase()} ${abbr}`,
      `${service.software[0]} services ${state}`,
    ],
    context: `${service.name} for ${state}'s ${industries.join(", ")} sectors`,
    targetAudience: `Engineering managers and manufacturers throughout ${state} seeking ${service.shortName.toLowerCase()} support`,
    industry: primaryIndustry,
    software: service.software,
    metaTitle: `${service.name} ${state} | ${abbr} Engineering | ${service.priceRange}`,
    metaDescription: `Professional ${service.shortName.toLowerCase()} for ${state} businesses. Serving ${industries.join(", ")} industries. ${service.software.slice(0, 3).join(", ")} experts from ${service.priceStart}. Free quote.`,
    h1: `${service.name} for ${state} Businesses`,
    heroIntro: `CADCAMX delivers expert ${service.shortName.toLowerCase()} to companies across ${state}. From ${majorCities[0]} to ${majorCities[majorCities.length - 1]}, we help ${abbr} ${industries.join(", ").toLowerCase()} businesses reduce engineering costs while accelerating project timelines.`,
    heroBenefits: [
      `Serving all ${abbr} cities - ${majorCities.slice(0, 3).join(", ")}`,
      `${industries.slice(0, 2).join(" & ")} industry expertise`,
      `${service.software[0]} certified engineers`,
      `From ${service.priceStart} - 70% cost savings`,
    ],
    ctaText: `Get ${service.shortName} Quote for ${abbr}`,
    problemTitle: `${service.shortName} Challenges Across ${state}`,
    problemDescription: `${state}'s ${primaryIndustry.toLowerCase()} sector faces mounting pressure from skilled labor shortages. Finding qualified ${service.shortName.toLowerCase()} professionals with ${service.software[0]} expertise is increasingly difficult while project demands grow.`,
    painPoints: [
      `${service.shortName} engineer shortage across ${abbr}`,
      `Local ${service.shortName.toLowerCase()} rates of $75-150/hour`,
      `Limited ${service.software[0]} expertise in ${state}`,
      `Long turnaround from regional vendors`,
      `High software licensing costs`,
    ],
    solutionTitle: `Your ${state} ${service.shortName} Extension`,
    solutionDescription: `Partner with CADCAMX to access a dedicated ${service.shortName.toLowerCase()} team that understands ${state}'s key industries. We become an extension of your ${abbr} operation, delivering quality ${service.deliverables[0].toLowerCase()} at offshore rates.`,
    solutionHighlights: [
      `Deep experience in ${industries.join(", ")}`,
      `Certified ${service.software.slice(0, 3).join(", ")} engineers`,
      `${service.standards[0]} compliant deliverables`,
      `${service.turnaround} standard turnaround`,
    ],
    features: [
      {
        title: service.deliverables[0],
        description: `Professional ${service.deliverables[0].toLowerCase()} for ${state} ${primaryIndustry.toLowerCase()} applications.`,
        icon: service.icon,
      },
      {
        title: service.deliverables[1],
        description: `Expert ${service.deliverables[1].toLowerCase()} meeting ${abbr} industry standards.`,
        icon: "FaCheckCircle",
      },
      {
        title: "Multi-Platform Support",
        description: `${service.software.join(", ")} - whatever your ${state} team uses.`,
        icon: "FaLaptopCode",
      },
      {
        title: "Quality Guarantee",
        description: `99.9% accuracy with multi-level QC for all ${abbr} deliverables.`,
        icon: "FaShieldAlt",
      },
    ],
    useCaseTitle: `Serving ${state}'s Key Industries`,
    useCaseDescription: `From ${majorCities[0]}'s ${industries[0].toLowerCase()} sector to ${majorCities[1]}'s manufacturers, CADCAMX supports diverse ${service.shortName.toLowerCase()} needs across ${abbr}.`,
    useCaseScenarios: [
      `${majorCities[0]} ${industries[0].toLowerCase()} company - ${service.shortName.toLowerCase()} for 200+ parts/month`,
      `${majorCities[1]} manufacturer - dedicated ${service.shortName.toLowerCase()} team`,
      `${abbr} startup - prototype to production ${service.shortName.toLowerCase()} support`,
      `${state} job shop - overflow ${service.shortName.toLowerCase()} capacity`,
    ],
    comparisonTitle: `${state} ${service.shortName} Cost Analysis`,
    comparisonItems: [
      {
        aspect: `${service.shortName} Cost`,
        traditional: `$80-140/hr in ${abbr}`,
        cadcamx: service.priceRange,
      },
      {
        aspect: "Turnaround",
        traditional: "1-2 weeks",
        cadcamx: service.turnaround,
      },
      {
        aspect: "Team Scaling",
        traditional: "Months per engineer",
        cadcamx: "Days to add capacity",
      },
      {
        aspect: "Annual Savings",
        traditional: "$0",
        cadcamx: "$100K+ typical",
      },
    ],
    testimonial: {
      quote: `As a ${state} manufacturer, finding reliable ${service.shortName.toLowerCase()} support was always a challenge. CADCAMX solved that problem completely. Their ${service.software[0]} team delivers consistent quality.`,
      role: "VP Engineering",
      company: `${primaryIndustry} Company, ${majorCities[0]}`,
    },
    faqs: [
      {
        question: `Do you serve ${service.shortName.toLowerCase()} clients throughout ${state}?`,
        answer: `Yes, we serve businesses across all of ${state}, from major metros like ${majorCities.join(", ")} to smaller manufacturing towns. Our remote model means location within ${abbr} doesn't matter.`,
      },
      {
        question: `What ${state} industries do you specialize in for ${service.shortName.toLowerCase()}?`,
        answer: `We have deep ${service.shortName.toLowerCase()} experience in ${state}'s key sectors including ${industries.join(", ")}. Our engineers understand the specific standards and requirements of these industries.`,
      },
      {
        question: `What ${service.shortName.toLowerCase()} software do you support?`,
        answer: `We support ${service.software.join(", ")}. Our certified engineers work with whatever platforms your ${abbr} team uses.`,
      },
      {
        question: `How fast is ${service.shortName.toLowerCase()} turnaround for ${state} projects?`,
        answer: `Standard turnaround is ${service.turnaround}. We also offer expedited service for urgent ${abbr} projects with dedicated engineer allocation.`,
      },
      {
        question: `What ${service.shortName.toLowerCase()} standards do you follow?`,
        answer: `All deliverables meet ${service.standards.join(", ")} standards. We ensure compliance with ${state} industry requirements.`,
      },
    ],
    pricingStart: service.priceStart,
    pricingNote: `Volume discounts available for ${abbr} companies with ongoing ${service.shortName.toLowerCase()} needs`,
  };
}

// ===========================================
// GENERATE ALL PAGES
// ===========================================

// Service × City combinations (300 pages)
export const serviceCityPages: SEOPageData[] = services.flatMap((service) =>
  cities.map((cityInfo) => generateServiceCityPage(service, cityInfo))
);

// Service × State combinations (300 pages)
export const serviceStatePages: SEOPageData[] = services.flatMap((service) =>
  states.map((stateInfo) => generateServiceStatePage(service, stateInfo))
);

// Combined export (600 pages total)
export const serviceLocationPages: SEOPageData[] = [
  ...serviceCityPages,
  ...serviceStatePages,
];

// Helper to get pages by service
export function getServiceLocationPagesByService(serviceSlug: string): SEOPageData[] {
  return serviceLocationPages.filter((page) => page.slug.startsWith(serviceSlug));
}

// Helper to get pages by location
export function getServiceLocationPagesByLocation(location: string): SEOPageData[] {
  const lowerLocation = location.toLowerCase();
  return serviceLocationPages.filter(
    (page) =>
      page.slug.includes(lowerLocation) ||
      page.primaryKeyword.toLowerCase().includes(lowerLocation)
  );
}
