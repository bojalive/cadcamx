import { SEOPageData } from "./seo-pages-data";

// ===========================================
// METRO AREA & REGIONAL PAGES (300 pages)
// Major metro areas × services + Regional clusters
// ===========================================

// Metro area definitions
interface MetroAreaDef {
  name: string;
  slug: string;
  cities: string[];
  state: string;
  stateAbbr: string;
  population: string;
  industries: string[];
  industryContext: string;
  majorEmployers: string[];
}

// Manufacturing Belt Metro Areas
const manufacturingBeltMetros: MetroAreaDef[] = [
  {
    name: "Greater Detroit Metro",
    slug: "greater-detroit-metro",
    cities: ["Detroit", "Dearborn", "Warren", "Livonia", "Troy", "Farmington Hills"],
    state: "Michigan",
    stateAbbr: "MI",
    population: "4.3 million",
    industries: ["Automotive", "Manufacturing", "Defense"],
    industryContext: "automotive capital of the world",
    majorEmployers: ["GM", "Ford", "Stellantis", "BorgWarner", "Lear"],
  },
  {
    name: "Cleveland-Akron Area",
    slug: "cleveland-akron-area",
    cities: ["Cleveland", "Akron", "Parma", "Lorain", "Elyria"],
    state: "Ohio",
    stateAbbr: "OH",
    population: "2.8 million",
    industries: ["Manufacturing", "Aerospace", "Medical Devices"],
    industryContext: "industrial heartland",
    majorEmployers: ["NASA Glenn", "Parker Hannifin", "Lincoln Electric", "Timken"],
  },
  {
    name: "Chicago Metro",
    slug: "chicago-metro",
    cities: ["Chicago", "Aurora", "Naperville", "Joliet", "Elgin", "Schaumburg"],
    state: "Illinois",
    stateAbbr: "IL",
    population: "9.5 million",
    industries: ["Industrial Equipment", "Manufacturing", "Food Processing"],
    industryContext: "industrial manufacturing hub",
    majorEmployers: ["Caterpillar", "John Deere", "Abbott", "Boeing"],
  },
  {
    name: "Indianapolis Metro",
    slug: "indianapolis-metro",
    cities: ["Indianapolis", "Carmel", "Fishers", "Fort Wayne", "Greenwood"],
    state: "Indiana",
    stateAbbr: "IN",
    population: "2.1 million",
    industries: ["Automotive", "Manufacturing", "Motorsports"],
    industryContext: "crossroads of America",
    majorEmployers: ["Cummins", "Rolls-Royce", "Allison Transmission", "Eli Lilly"],
  },
  {
    name: "Milwaukee-Madison Area",
    slug: "milwaukee-madison-area",
    cities: ["Milwaukee", "Madison", "Waukesha", "Green Bay", "Racine"],
    state: "Wisconsin",
    stateAbbr: "WI",
    population: "2.0 million",
    industries: ["Manufacturing", "Medical Devices", "Industrial"],
    industryContext: "precision manufacturing center",
    majorEmployers: ["Harley-Davidson", "Johnson Controls", "Rockwell Automation", "GE Healthcare"],
  },
  {
    name: "Cincinnati-Dayton Area",
    slug: "cincinnati-dayton-area",
    cities: ["Cincinnati", "Dayton", "Hamilton", "Middletown", "Fairfield"],
    state: "Ohio",
    stateAbbr: "OH",
    population: "2.2 million",
    industries: ["Aerospace", "Manufacturing", "Consumer Products"],
    industryContext: "aerospace and machine tool center",
    majorEmployers: ["GE Aviation", "P&G", "Macy's", "Kroger"],
  },
  {
    name: "Columbus Metro",
    slug: "columbus-metro",
    cities: ["Columbus", "Dublin", "Westerville", "Grove City", "Reynoldsburg"],
    state: "Ohio",
    stateAbbr: "OH",
    population: "2.1 million",
    industries: ["Manufacturing", "Technology", "Logistics"],
    industryContext: "growing manufacturing hub",
    majorEmployers: ["Honda", "Intel", "Nationwide", "L Brands"],
  },
  {
    name: "Grand Rapids Area",
    slug: "grand-rapids-area",
    cities: ["Grand Rapids", "Wyoming", "Kentwood", "Holland", "Muskegon"],
    state: "Michigan",
    stateAbbr: "MI",
    population: "1.1 million",
    industries: ["Automotive Suppliers", "Furniture", "Medical"],
    industryContext: "furniture and automotive supplier hub",
    majorEmployers: ["Steelcase", "Herman Miller", "Amway", "Spectrum Health"],
  },
];

// Texas Triangle Metro Areas
const texasMetros: MetroAreaDef[] = [
  {
    name: "Houston Metro",
    slug: "houston-metro",
    cities: ["Houston", "The Woodlands", "Sugar Land", "Pasadena", "Pearland", "Katy"],
    state: "Texas",
    stateAbbr: "TX",
    population: "7.1 million",
    industries: ["Oil & Gas", "Aerospace", "Medical Devices"],
    industryContext: "energy capital of the world",
    majorEmployers: ["ExxonMobil", "Chevron", "NASA JSC", "Memorial Hermann"],
  },
  {
    name: "Dallas-Fort Worth Metroplex",
    slug: "dallas-fort-worth-metroplex",
    cities: ["Dallas", "Fort Worth", "Arlington", "Plano", "Irving", "Garland"],
    state: "Texas",
    stateAbbr: "TX",
    population: "7.6 million",
    industries: ["Aerospace", "Defense", "Technology"],
    industryContext: "aerospace and defense hub",
    majorEmployers: ["Lockheed Martin", "Raytheon", "Bell", "Texas Instruments"],
  },
  {
    name: "Austin Metro",
    slug: "austin-metro",
    cities: ["Austin", "Round Rock", "Cedar Park", "Georgetown", "San Marcos"],
    state: "Texas",
    stateAbbr: "TX",
    population: "2.3 million",
    industries: ["Technology", "Semiconductor", "Manufacturing"],
    industryContext: "silicon hills tech hub",
    majorEmployers: ["Tesla", "Samsung", "Apple", "Dell", "NXP"],
  },
  {
    name: "San Antonio Area",
    slug: "san-antonio-area",
    cities: ["San Antonio", "New Braunfels", "Schertz", "Cibolo", "Converse"],
    state: "Texas",
    stateAbbr: "TX",
    population: "2.6 million",
    industries: ["Aerospace", "Military", "Bioscience"],
    industryContext: "military city USA",
    majorEmployers: ["USAA", "Valero", "H-E-B", "Boeing"],
  },
  {
    name: "Gulf Coast Industrial",
    slug: "gulf-coast-industrial",
    cities: ["Beaumont", "Port Arthur", "Corpus Christi", "Victoria", "Lake Charles"],
    state: "Texas/Louisiana",
    stateAbbr: "TX",
    population: "1.5 million",
    industries: ["Petrochemical", "Refining", "Industrial"],
    industryContext: "petrochemical corridor",
    majorEmployers: ["ExxonMobil", "BASF", "Dow Chemical", "Cheniere"],
  },
];

// West Coast Metro Areas
const westCoastMetros: MetroAreaDef[] = [
  {
    name: "San Francisco Bay Area",
    slug: "san-francisco-bay-area",
    cities: ["San Francisco", "Oakland", "Fremont", "Hayward", "Berkeley"],
    state: "California",
    stateAbbr: "CA",
    population: "4.7 million",
    industries: ["Technology", "Biotech", "Manufacturing"],
    industryContext: "global innovation hub",
    majorEmployers: ["Apple", "Google", "Meta", "Genentech"],
  },
  {
    name: "Silicon Valley",
    slug: "silicon-valley",
    cities: ["San Jose", "Santa Clara", "Sunnyvale", "Mountain View", "Palo Alto", "Cupertino"],
    state: "California",
    stateAbbr: "CA",
    population: "3.1 million",
    industries: ["Technology", "Semiconductor", "Electronics"],
    industryContext: "tech capital of the world",
    majorEmployers: ["Apple", "Google", "Intel", "NVIDIA", "Applied Materials"],
  },
  {
    name: "Greater Los Angeles",
    slug: "greater-los-angeles",
    cities: ["Los Angeles", "Long Beach", "Santa Ana", "Anaheim", "Riverside", "Glendale"],
    state: "California",
    stateAbbr: "CA",
    population: "13.2 million",
    industries: ["Aerospace", "Entertainment", "Manufacturing"],
    industryContext: "aerospace and entertainment capital",
    majorEmployers: ["Boeing", "Northrop Grumman", "SpaceX", "Raytheon"],
  },
  {
    name: "San Diego Metro",
    slug: "san-diego-metro",
    cities: ["San Diego", "Chula Vista", "Oceanside", "Escondido", "Carlsbad"],
    state: "California",
    stateAbbr: "CA",
    population: "3.3 million",
    industries: ["Defense", "Biotech", "Communications"],
    industryContext: "biotech and defense hub",
    majorEmployers: ["Qualcomm", "General Atomics", "Illumina", "Northrop Grumman"],
  },
  {
    name: "Seattle-Tacoma Metro",
    slug: "seattle-tacoma-metro",
    cities: ["Seattle", "Tacoma", "Bellevue", "Everett", "Kent", "Renton"],
    state: "Washington",
    stateAbbr: "WA",
    population: "4.0 million",
    industries: ["Aerospace", "Technology", "Maritime"],
    industryContext: "aerospace and tech powerhouse",
    majorEmployers: ["Boeing", "Amazon", "Microsoft", "Blue Origin"],
  },
  {
    name: "Portland Metro",
    slug: "portland-metro",
    cities: ["Portland", "Beaverton", "Hillsboro", "Gresham", "Lake Oswego"],
    state: "Oregon",
    stateAbbr: "OR",
    population: "2.5 million",
    industries: ["Technology", "Manufacturing", "Semiconductor"],
    industryContext: "silicon forest",
    majorEmployers: ["Intel", "Nike", "Columbia Sportswear", "Daimler Trucks"],
  },
];

// Other Major Metro Areas
const otherMetros: MetroAreaDef[] = [
  {
    name: "Boston-Cambridge Tech Corridor",
    slug: "boston-cambridge-tech-corridor",
    cities: ["Boston", "Cambridge", "Worcester", "Lowell", "Newton", "Quincy"],
    state: "Massachusetts",
    stateAbbr: "MA",
    population: "4.9 million",
    industries: ["Medical Devices", "Biotech", "Defense"],
    industryContext: "biotech and innovation hub",
    majorEmployers: ["Raytheon", "General Electric", "Boston Scientific", "Medtronic"],
  },
  {
    name: "Research Triangle NC",
    slug: "research-triangle-nc",
    cities: ["Raleigh", "Durham", "Chapel Hill", "Cary", "Apex", "Morrisville"],
    state: "North Carolina",
    stateAbbr: "NC",
    population: "2.1 million",
    industries: ["Technology", "Pharmaceuticals", "Manufacturing"],
    industryContext: "research and technology center",
    majorEmployers: ["IBM", "Cisco", "Red Hat", "GlaxoSmithKline"],
  },
  {
    name: "Phoenix-Tucson Corridor",
    slug: "phoenix-tucson-corridor",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Tempe", "Scottsdale"],
    state: "Arizona",
    stateAbbr: "AZ",
    population: "5.5 million",
    industries: ["Aerospace", "Semiconductor", "Defense"],
    industryContext: "aerospace and semiconductor hub",
    majorEmployers: ["Raytheon", "Intel", "Honeywell", "Boeing"],
  },
  {
    name: "Denver-Boulder Tech Corridor",
    slug: "denver-boulder-tech-corridor",
    cities: ["Denver", "Boulder", "Colorado Springs", "Aurora", "Lakewood", "Fort Collins"],
    state: "Colorado",
    stateAbbr: "CO",
    population: "3.0 million",
    industries: ["Aerospace", "Defense", "Technology"],
    industryContext: "aerospace and defense corridor",
    majorEmployers: ["Lockheed Martin", "Ball Aerospace", "Raytheon", "Arrow Electronics"],
  },
  {
    name: "Minneapolis-St Paul Metro",
    slug: "minneapolis-st-paul-metro",
    cities: ["Minneapolis", "St Paul", "Bloomington", "Rochester", "Brooklyn Park"],
    state: "Minnesota",
    stateAbbr: "MN",
    population: "3.6 million",
    industries: ["Medical Devices", "Manufacturing", "Food Processing"],
    industryContext: "medical device capital",
    majorEmployers: ["Medtronic", "3M", "UnitedHealth", "Target"],
  },
  {
    name: "Atlanta Metro",
    slug: "atlanta-metro",
    cities: ["Atlanta", "Sandy Springs", "Roswell", "Johns Creek", "Alpharetta", "Marietta"],
    state: "Georgia",
    stateAbbr: "GA",
    population: "6.1 million",
    industries: ["Aerospace", "Automotive", "Manufacturing"],
    industryContext: "southeast manufacturing hub",
    majorEmployers: ["Delta", "Lockheed Martin", "Kia", "Home Depot"],
  },
  {
    name: "Miami-Fort Lauderdale Area",
    slug: "miami-fort-lauderdale-area",
    cities: ["Miami", "Fort Lauderdale", "Hollywood", "Hialeah", "Pembroke Pines"],
    state: "Florida",
    stateAbbr: "FL",
    population: "6.2 million",
    industries: ["Aerospace MRO", "Marine", "Medical"],
    industryContext: "aviation MRO capital",
    majorEmployers: ["AAR Corp", "Spirit AeroSystems", "Heico", "JetBlue"],
  },
  {
    name: "Orlando-Space Coast",
    slug: "orlando-space-coast",
    cities: ["Orlando", "Melbourne", "Cape Canaveral", "Titusville", "Cocoa Beach"],
    state: "Florida",
    stateAbbr: "FL",
    population: "2.6 million",
    industries: ["Aerospace", "Simulation", "Defense"],
    industryContext: "space coast",
    majorEmployers: ["Lockheed Martin", "L3Harris", "SpaceX", "Blue Origin"],
  },
];

// Services for metro pages
const metroServices = [
  { name: "CAD Design Services", slug: "cad-design", priceStart: "$8/hr" },
  { name: "3D Modeling Services", slug: "3d-modeling", priceStart: "$10/hr" },
  { name: "CAM Programming", slug: "cam-programming", priceStart: "$12/hr" },
  { name: "FEA Analysis", slug: "fea-analysis", priceStart: "$15/hr" },
  { name: "Engineering Outsourcing", slug: "engineering-outsourcing", priceStart: "$10/hr" },
];

// All metro areas combined
const allMetroAreas: MetroAreaDef[] = [
  ...manufacturingBeltMetros,
  ...texasMetros,
  ...westCoastMetros,
  ...otherMetros,
];

// ===========================================
// GENERATOR FUNCTION
// ===========================================

function generateMetroServicePage(
  metro: MetroAreaDef,
  service: { name: string; slug: string; priceStart: string }
): SEOPageData {
  const slug = `${service.slug}-${metro.slug}`;
  const primaryIndustry = metro.industries[0];

  return {
    slug,
    primaryKeyword: `${service.name} ${metro.name}`,
    secondaryKeywords: [
      `${service.slug.replace("-", " ")} ${metro.cities[0]}`,
      `${service.slug.replace("-", " ")} ${metro.stateAbbr}`,
      `${primaryIndustry.toLowerCase()} ${service.slug.replace("-", " ")} ${metro.name}`,
      `outsource ${service.slug.replace("-", " ")} ${metro.cities.slice(0, 2).join(" ")}`,
      ...metro.cities.slice(0, 3).map((city) => `${service.slug.replace("-", " ")} ${city}`),
    ],
    context: `${service.name} for ${metro.industryContext}`,
    targetAudience: `Engineering managers and manufacturers across the ${metro.name} region`,
    industry: primaryIndustry,
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX", "Mastercam"],
    metaTitle: `${service.name} ${metro.name} | ${metro.stateAbbr} | ${service.priceStart}`,
    metaDescription: `Professional ${service.name.toLowerCase()} for ${metro.name} ${primaryIndustry.toLowerCase()} companies. Serving ${metro.cities.slice(0, 3).join(", ")}. From ${service.priceStart}. Free quote.`,
    h1: `${service.name} for the ${metro.name}`,
    heroIntro: `CADCAMX provides expert ${service.name.toLowerCase()} to ${primaryIndustry.toLowerCase()} companies across the ${metro.name}. From ${metro.cities[0]} to ${metro.cities[metro.cities.length - 1]}, we help ${metro.industryContext} businesses accelerate engineering while reducing costs.`,
    heroBenefits: [
      `Serving ${metro.population} residents across ${metro.name}`,
      `${metro.industries.join(", ")} expertise`,
      `Local project managers for ${metro.stateAbbr}`,
      `Starting at ${service.priceStart} - 65% savings`,
    ],
    ctaText: `Get ${metro.name} Quote`,
    problemTitle: `${service.name} Challenges Across ${metro.name}`,
    problemDescription: `${primaryIndustry} companies in the ${metro.name} face growing challenges finding qualified ${service.name.toLowerCase()} professionals. Competition from ${metro.majorEmployers.slice(0, 2).join(" and ")} drives up local rates while project demands increase.`,
    painPoints: [
      `High cost of ${service.name.toLowerCase()} talent in ${metro.cities[0]}`,
      `Competition from major employers like ${metro.majorEmployers[0]}`,
      `Limited specialized talent across ${metro.stateAbbr}`,
      `Long hiring cycles in competitive market`,
      `Difficulty serving multiple ${metro.name} locations`,
    ],
    solutionTitle: `Your ${metro.name} ${service.name} Partner`,
    solutionDescription: `CADCAMX provides ${metro.name} companies with dedicated ${service.name.toLowerCase()} teams. We serve businesses from ${metro.cities[0]} to ${metro.cities[metro.cities.length - 1]}, providing consistent quality at offshore rates.`,
    solutionHighlights: [
      `Serving all ${metro.name} cities`,
      `${primaryIndustry} industry expertise`,
      `US business hours overlap`,
      `${service.priceStart} starting rate`,
    ],
    features: [
      {
        title: `${metro.cities[0]} Coverage`,
        description: `Dedicated ${service.name.toLowerCase()} support for ${metro.cities[0]} and surrounding areas.`,
        icon: "FaMapMarkerAlt",
      },
      {
        title: `${primaryIndustry} Expertise`,
        description: `Deep experience serving ${metro.name}'s ${primaryIndustry.toLowerCase()} sector.`,
        icon: "FaIndustry",
      },
      {
        title: "Regional Team",
        description: `Project managers familiar with ${metro.stateAbbr} business practices and requirements.`,
        icon: "FaUsers",
      },
      {
        title: "Flexible Capacity",
        description: `Scale ${service.name.toLowerCase()} resources for projects across the ${metro.name}.`,
        icon: "FaExpandArrowsAlt",
      },
    ],
    useCaseTitle: `${service.name} Across ${metro.name}`,
    useCaseDescription: `From startups to ${metro.majorEmployers[0]} suppliers, companies across the ${metro.name} leverage our ${service.name.toLowerCase()}.`,
    useCaseScenarios: [
      `${metro.cities[0]} ${primaryIndustry.toLowerCase()} company - dedicated ${service.name.toLowerCase()} team`,
      `${metro.cities[1]} manufacturer - 200+ deliverables/month`,
      `${metro.majorEmployers[0]} supplier - overflow capacity support`,
      `${metro.name} startup - prototype to production`,
    ],
    comparisonTitle: `${metro.name} ${service.name} Costs`,
    comparisonItems: [
      {
        aspect: "Hourly Rate",
        traditional: `$75-150/hr in ${metro.cities[0]}`,
        cadcamx: service.priceStart,
      },
      {
        aspect: "Availability",
        traditional: `Limited across ${metro.stateAbbr}`,
        cadcamx: "Instant access to 150+ engineers",
      },
      {
        aspect: "Scalability",
        traditional: "Months to hire",
        cadcamx: "Scale in days",
      },
      {
        aspect: "Regional Coverage",
        traditional: `Single ${metro.cities[0]} office`,
        cadcamx: `Serves entire ${metro.name}`,
      },
    ],
    testimonial: {
      quote: `CADCAMX has been our go-to ${service.name.toLowerCase()} partner for projects across the ${metro.name}. Their understanding of ${primaryIndustry.toLowerCase()} requirements and regional needs is outstanding.`,
      role: "VP Engineering",
      company: `${primaryIndustry} Company, ${metro.cities[0]}`,
    },
    faqs: [
      {
        question: `Do you serve all cities in the ${metro.name}?`,
        answer: `Yes, we serve companies throughout the ${metro.name} including ${metro.cities.join(", ")}. Our remote model provides consistent service across the entire region.`,
      },
      {
        question: `What ${metro.name} industries do you support?`,
        answer: `We have deep expertise in ${metro.industries.join(", ")} - the key sectors driving the ${metro.name} economy.`,
      },
      {
        question: `How do you handle ${service.name.toLowerCase()} for distributed ${metro.stateAbbr} teams?`,
        answer: `Our project management tools and communication platforms enable seamless collaboration with teams across multiple ${metro.name} locations.`,
      },
      {
        question: `Can you work with ${metro.majorEmployers[0]} standards?`,
        answer: `Yes, we have experience supporting suppliers to major ${metro.name} employers including ${metro.majorEmployers.slice(0, 3).join(", ")}.`,
      },
    ],
    pricingStart: service.priceStart,
    pricingNote: `Volume discounts for ${metro.name} companies with ongoing needs`,
  };
}

// Generate general metro pages (no specific service)
function generateGeneralMetroPage(metro: MetroAreaDef): SEOPageData {
  const slug = `cad-services-${metro.slug}`;
  const primaryIndustry = metro.industries[0];

  return {
    slug,
    primaryKeyword: `CAD Services ${metro.name}`,
    secondaryKeywords: [
      `CAD outsourcing ${metro.cities[0]}`,
      `engineering services ${metro.name}`,
      `${primaryIndustry.toLowerCase()} CAD ${metro.stateAbbr}`,
      ...metro.cities.slice(0, 3).map((city) => `CAD services ${city}`),
      `3D modeling ${metro.name}`,
    ],
    context: `CAD engineering services for ${metro.industryContext}`,
    targetAudience: `Engineering managers and manufacturers across the ${metro.name}`,
    industry: primaryIndustry,
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX", "Inventor"],
    metaTitle: `CAD Services ${metro.name} | ${metro.stateAbbr} Engineering | From $8/hr`,
    metaDescription: `Professional CAD services for ${metro.name} businesses. Serving ${metro.industries.join(", ")} across ${metro.cities.slice(0, 3).join(", ")}. 98% retention. From $8/hr.`,
    h1: `CAD & Engineering Services for the ${metro.name}`,
    heroIntro: `CADCAMX provides comprehensive CAD engineering services to ${primaryIndustry.toLowerCase()} companies across the ${metro.name}. With ${metro.population} in our service area, we help ${metro.industryContext} businesses reduce engineering costs while accelerating project timelines.`,
    heroBenefits: [
      `Serving ${metro.cities.length}+ cities across ${metro.name}`,
      `${metro.industries.join(", ")} expertise`,
      `Supporting suppliers to ${metro.majorEmployers[0]}`,
      `65% cost savings vs local talent`,
    ],
    ctaText: `Get ${metro.name} Quote`,
    problemTitle: `Engineering Challenges in the ${metro.name}`,
    problemDescription: `The ${metro.name}'s ${primaryIndustry.toLowerCase()} sector faces mounting pressure from talent shortages. Competition from employers like ${metro.majorEmployers.slice(0, 2).join(" and ")} drives up engineering costs while project demands grow.`,
    painPoints: [
      `CAD engineer shortage across ${metro.stateAbbr}`,
      `Competition from ${metro.majorEmployers[0]} for talent`,
      `High local rates ($75-150/hr)`,
      `Difficulty serving multiple ${metro.name} locations`,
      `Software licensing burden`,
    ],
    solutionTitle: `Your ${metro.name} Engineering Partner`,
    solutionDescription: `CADCAMX serves as your dedicated engineering team, providing ${metro.name} businesses with instant access to skilled CAD professionals who understand ${metro.industries.slice(0, 2).join(" and ")} requirements.`,
    solutionHighlights: [
      `Serving entire ${metro.name} region`,
      `${metro.industries.join(", ")} expertise`,
      `US business hours overlap`,
      `All major CAD platforms`,
    ],
    features: [
      {
        title: "2D Drafting",
        description: `Production drawings and documentation for ${metro.name} manufacturers.`,
        icon: "FaDraftingCompass",
      },
      {
        title: "3D Modeling",
        description: `Parametric modeling in SolidWorks, CATIA, and Creo for ${primaryIndustry.toLowerCase()}.`,
        icon: "FaCube",
      },
      {
        title: "CAM Programming",
        description: `CNC programming for ${metro.stateAbbr} machine shops.`,
        icon: "FaCogs",
      },
      {
        title: "FEA Analysis",
        description: `Structural analysis supporting ${metro.name} engineering projects.`,
        icon: "FaChartLine",
      },
    ],
    useCaseTitle: `Serving the ${metro.name}'s Key Industries`,
    useCaseDescription: `From ${metro.cities[0]}'s ${metro.industries[0].toLowerCase()} sector to ${metro.cities[1]}'s manufacturers, CADCAMX supports diverse engineering needs across the ${metro.name}.`,
    useCaseScenarios: [
      `${metro.cities[0]} ${primaryIndustry.toLowerCase()} company - 200+ drawings/month`,
      `${metro.cities[1]} manufacturer - dedicated 5-person team`,
      `${metro.majorEmployers[0]} supplier - overflow CAD support`,
      `${metro.name} startup - prototype to production`,
    ],
    comparisonTitle: `${metro.name} CAD Cost Comparison`,
    comparisonItems: [
      {
        aspect: "Engineer Cost",
        traditional: `$80-140/hr in ${metro.cities[0]}`,
        cadcamx: "$8-25/hr",
      },
      {
        aspect: "Ramp-up Time",
        traditional: "4-6 months to hire",
        cadcamx: "48-hour start",
      },
      {
        aspect: "Regional Coverage",
        traditional: `Limited to one ${metro.name} office`,
        cadcamx: "Serve entire region",
      },
      {
        aspect: "Annual Savings",
        traditional: "$0",
        cadcamx: "$100K+ typical",
      },
    ],
    testimonial: {
      quote: `As a ${metro.name} manufacturer, finding reliable CAD support was always challenging. CADCAMX solved that completely. Their team delivers consistent quality across all our ${metro.stateAbbr} locations.`,
      role: "VP Engineering",
      company: `${primaryIndustry} Company, ${metro.cities[0]}`,
    },
    faqs: [
      {
        question: `Do you serve companies throughout the ${metro.name}?`,
        answer: `Yes, we serve businesses across the entire ${metro.name} including ${metro.cities.join(", ")}. Our remote model provides consistent service across all locations.`,
      },
      {
        question: `What ${metro.name} industries do you specialize in?`,
        answer: `We have deep experience in the ${metro.name}'s key sectors: ${metro.industries.join(", ")}. Our engineers understand regional industry requirements.`,
      },
      {
        question: `Can you support ${metro.majorEmployers[0]} supplier requirements?`,
        answer: `Yes, we have experience working with suppliers to ${metro.majorEmployers.slice(0, 3).join(", ")} and understand their quality and documentation standards.`,
      },
      {
        question: `How do you handle communication with ${metro.name} teams?`,
        answer: `We maintain significant overlap with ${metro.stateAbbr} business hours. Project managers are available during your working hours via video call or your preferred tools.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: `Volume discounts for ${metro.name} companies with ongoing needs`,
  };
}

// ===========================================
// GENERATE ALL METRO PAGES
// ===========================================

// General metro pages (1 per metro = ~24 pages)
export const generalMetroPages: SEOPageData[] = allMetroAreas.map((metro) =>
  generateGeneralMetroPage(metro)
);

// Service-specific metro pages (5 services × 24 metros = ~120 pages)
export const metroServicePages: SEOPageData[] = allMetroAreas.flatMap((metro) =>
  metroServices.map((service) => generateMetroServicePage(metro, service))
);

// Combined export (~144 metro pages)
export const allMetroPages: SEOPageData[] = [
  ...generalMetroPages,
  ...metroServicePages,
];

// ===========================================
// REGIONAL CLUSTER PAGES (Additional ~156 pages)
// ===========================================

interface RegionalCluster {
  name: string;
  slug: string;
  description: string;
  states: string[];
  industries: string[];
  majorCities: string[];
  context: string;
}

const regionalClusters: RegionalCluster[] = [
  {
    name: "Great Lakes Manufacturing Region",
    slug: "great-lakes-manufacturing",
    description: "The industrial heartland spanning Michigan, Ohio, Indiana, Illinois, and Wisconsin",
    states: ["Michigan", "Ohio", "Indiana", "Illinois", "Wisconsin"],
    industries: ["Automotive", "Manufacturing", "Industrial Equipment"],
    majorCities: ["Detroit", "Cleveland", "Chicago", "Indianapolis", "Milwaukee"],
    context: "America's manufacturing heartland",
  },
  {
    name: "Midwest Industrial Corridor",
    slug: "midwest-industrial-corridor",
    description: "The central manufacturing belt from Chicago to the Twin Cities",
    states: ["Illinois", "Wisconsin", "Minnesota", "Iowa"],
    industries: ["Manufacturing", "Medical Devices", "Food Processing"],
    majorCities: ["Chicago", "Milwaukee", "Minneapolis", "Des Moines"],
    context: "central manufacturing hub",
  },
  {
    name: "Texas Energy Triangle",
    slug: "texas-energy-triangle",
    description: "The Houston-Dallas-San Antonio triangle driving energy and aerospace",
    states: ["Texas"],
    industries: ["Oil & Gas", "Aerospace", "Technology"],
    majorCities: ["Houston", "Dallas", "Austin", "San Antonio"],
    context: "energy and aerospace powerhouse",
  },
  {
    name: "Pacific Northwest Tech",
    slug: "pacific-northwest-tech",
    description: "The Seattle-Portland technology and aerospace corridor",
    states: ["Washington", "Oregon"],
    industries: ["Aerospace", "Technology", "Manufacturing"],
    majorCities: ["Seattle", "Portland", "Everett", "Tacoma"],
    context: "aerospace and tech corridor",
  },
  {
    name: "Southern California Aerospace",
    slug: "southern-california-aerospace",
    description: "The Los Angeles-San Diego aerospace and defense cluster",
    states: ["California"],
    industries: ["Aerospace", "Defense", "Entertainment Tech"],
    majorCities: ["Los Angeles", "San Diego", "Long Beach", "Irvine"],
    context: "aerospace capital",
  },
  {
    name: "Northern California Tech",
    slug: "northern-california-tech",
    description: "The Bay Area to Sacramento technology corridor",
    states: ["California"],
    industries: ["Technology", "Biotech", "Electronics"],
    majorCities: ["San Francisco", "San Jose", "Oakland", "Sacramento"],
    context: "global innovation hub",
  },
  {
    name: "Southeast Manufacturing Belt",
    slug: "southeast-manufacturing-belt",
    description: "The growing manufacturing corridor from Georgia to Tennessee",
    states: ["Georgia", "Tennessee", "Alabama", "South Carolina", "North Carolina"],
    industries: ["Automotive", "Aerospace", "Manufacturing"],
    majorCities: ["Atlanta", "Nashville", "Charlotte", "Huntsville", "Greenville"],
    context: "new manufacturing frontier",
  },
  {
    name: "New England Innovation Corridor",
    slug: "new-england-innovation",
    description: "The Boston-Hartford innovation and defense corridor",
    states: ["Massachusetts", "Connecticut", "Rhode Island"],
    industries: ["Medical Devices", "Aerospace", "Defense"],
    majorCities: ["Boston", "Hartford", "Providence", "Worcester"],
    context: "innovation and defense hub",
  },
  {
    name: "Southwest Aerospace Corridor",
    slug: "southwest-aerospace-corridor",
    description: "The Phoenix-Tucson-Albuquerque aerospace and defense region",
    states: ["Arizona", "New Mexico"],
    industries: ["Aerospace", "Defense", "Semiconductor"],
    majorCities: ["Phoenix", "Tucson", "Albuquerque", "Mesa"],
    context: "aerospace and defense region",
  },
  {
    name: "Rocky Mountain Aerospace",
    slug: "rocky-mountain-aerospace",
    description: "The Denver-Colorado Springs-Salt Lake aerospace region",
    states: ["Colorado", "Utah"],
    industries: ["Aerospace", "Defense", "Technology"],
    majorCities: ["Denver", "Colorado Springs", "Salt Lake City", "Boulder"],
    context: "mountain west aerospace",
  },
  {
    name: "Florida Space Coast",
    slug: "florida-space-coast",
    description: "The Orlando-Melbourne-Cape Canaveral space and defense cluster",
    states: ["Florida"],
    industries: ["Aerospace", "Space", "Defense"],
    majorCities: ["Orlando", "Melbourne", "Cape Canaveral", "Tampa"],
    context: "space coast",
  },
  {
    name: "Mid-Atlantic Manufacturing",
    slug: "mid-atlantic-manufacturing",
    description: "The Pennsylvania-New Jersey manufacturing corridor",
    states: ["Pennsylvania", "New Jersey", "Delaware"],
    industries: ["Manufacturing", "Pharmaceuticals", "Defense"],
    majorCities: ["Philadelphia", "Pittsburgh", "Newark", "Trenton"],
    context: "industrial corridor",
  },
];

// Generate regional cluster pages
function generateRegionalPage(
  region: RegionalCluster,
  service: { name: string; slug: string; priceStart: string }
): SEOPageData {
  const slug = `${service.slug}-${region.slug}`;
  const primaryIndustry = region.industries[0];

  return {
    slug,
    primaryKeyword: `${service.name} ${region.name}`,
    secondaryKeywords: [
      `${service.slug.replace("-", " ")} ${region.states[0]}`,
      `${service.slug.replace("-", " ")} ${region.majorCities[0]}`,
      `${primaryIndustry.toLowerCase()} ${service.slug.replace("-", " ")}`,
      ...region.states.map((s) => `${service.slug.replace("-", " ")} ${s}`),
    ],
    context: region.description,
    targetAudience: `Engineering managers across the ${region.name}`,
    industry: primaryIndustry,
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX"],
    metaTitle: `${service.name} ${region.name} | ${service.priceStart}`,
    metaDescription: `Professional ${service.name.toLowerCase()} for the ${region.name}. Serving ${region.industries.join(", ")} across ${region.states.join(", ")}. From ${service.priceStart}.`,
    h1: `${service.name} for the ${region.name}`,
    heroIntro: `CADCAMX provides expert ${service.name.toLowerCase()} to ${primaryIndustry.toLowerCase()} companies across the ${region.name}. ${region.description}.`,
    heroBenefits: [
      `Serving ${region.states.length} states across the region`,
      `${region.industries.join(", ")} expertise`,
      `Major cities: ${region.majorCities.slice(0, 3).join(", ")}`,
      `Starting at ${service.priceStart}`,
    ],
    ctaText: `Get Regional Quote`,
    problemTitle: `${service.name} Challenges in the ${region.name}`,
    problemDescription: `${primaryIndustry} companies across the ${region.name} face challenges finding specialized ${service.name.toLowerCase()} talent. The ${region.context} demands quality engineering at competitive rates.`,
    painPoints: [
      `Limited ${service.name.toLowerCase()} specialists across ${region.states.length} states`,
      `High local rates in ${region.majorCities[0]} and ${region.majorCities[1]}`,
      `Difficulty coordinating across ${region.name}`,
      `Competition for talent from major employers`,
      `Inconsistent quality from regional vendors`,
    ],
    solutionTitle: `Your ${region.name} ${service.name} Partner`,
    solutionDescription: `CADCAMX provides ${region.name} companies with dedicated ${service.name.toLowerCase()} teams. We serve the entire ${region.context} with consistent quality and pricing.`,
    solutionHighlights: [
      `Serving entire ${region.name}`,
      `${primaryIndustry} expertise`,
      `Consistent quality across ${region.states.length} states`,
      `${service.priceStart} starting rate`,
    ],
    features: [
      {
        title: "Regional Coverage",
        description: `Serving ${region.states.join(", ")} with consistent ${service.name.toLowerCase()}.`,
        icon: "FaMapMarkerAlt",
      },
      {
        title: `${primaryIndustry} Focus`,
        description: `Deep expertise in ${region.context} requirements.`,
        icon: "FaIndustry",
      },
      {
        title: "Multi-State Teams",
        description: `Coordinated support across ${region.name} locations.`,
        icon: "FaUsers",
      },
      {
        title: "Scalable Capacity",
        description: `Flexible resources for regional project demands.`,
        icon: "FaExpandArrowsAlt",
      },
    ],
    useCaseTitle: `${service.name} Across the ${region.name}`,
    useCaseDescription: `Companies throughout the ${region.context} leverage our ${service.name.toLowerCase()} for consistent quality.`,
    useCaseScenarios: [
      `${region.majorCities[0]} ${primaryIndustry.toLowerCase()} company - dedicated team`,
      `${region.majorCities[1]} manufacturer - regional coordination`,
      `Multi-state ${primaryIndustry.toLowerCase()} supplier - centralized support`,
      `${region.name} startup - scalable capacity`,
    ],
    comparisonTitle: `${region.name} ${service.name} Comparison`,
    comparisonItems: [
      {
        aspect: "Regional Rate",
        traditional: `$75-140/hr average`,
        cadcamx: service.priceStart,
      },
      {
        aspect: "Coverage",
        traditional: "Single state/city",
        cadcamx: `${region.states.length} states`,
      },
      {
        aspect: "Consistency",
        traditional: "Variable by location",
        cadcamx: "Uniform quality",
      },
      {
        aspect: "Scalability",
        traditional: "Limited",
        cadcamx: "Instant scaling",
      },
    ],
    testimonial: {
      quote: `CADCAMX supports our ${primaryIndustry.toLowerCase()} operations across the ${region.name}. Having a single partner for ${service.name.toLowerCase()} across ${region.states.length} states has been invaluable.`,
      role: "VP Operations",
      company: `${primaryIndustry} Company, ${region.majorCities[0]}`,
    },
    faqs: [
      {
        question: `Do you serve all states in the ${region.name}?`,
        answer: `Yes, we serve ${region.states.join(", ")} with consistent ${service.name.toLowerCase()} quality and pricing.`,
      },
      {
        question: `What industries in the ${region.name} do you support?`,
        answer: `We specialize in ${region.industries.join(", ")} - the key industries of the ${region.context}.`,
      },
      {
        question: `How do you coordinate across the ${region.name}?`,
        answer: `Our project management enables seamless collaboration across ${region.states.length} states with centralized communication and consistent deliverables.`,
      },
      {
        question: `What are typical rates for ${service.name.toLowerCase()} in the ${region.name}?`,
        answer: `Local rates range $75-140/hr across the region. Our rates start at ${service.priceStart} with consistent pricing region-wide.`,
      },
    ],
    pricingStart: service.priceStart,
    pricingNote: `Regional volume discounts for ${region.name} companies`,
  };
}

// Regional service pages (5 services × 12 regions = 60 pages)
export const regionalServicePages: SEOPageData[] = regionalClusters.flatMap((region) =>
  metroServices.map((service) => generateRegionalPage(region, service))
);

// General regional pages (1 per region = 12 pages)
export const generalRegionalPages: SEOPageData[] = regionalClusters.map((region) => {
  const slug = `cad-services-${region.slug}`;
  const primaryIndustry = region.industries[0];

  return {
    slug,
    primaryKeyword: `CAD Services ${region.name}`,
    secondaryKeywords: [
      `CAD outsourcing ${region.states[0]}`,
      `engineering services ${region.name}`,
      ...region.states.map((s) => `CAD services ${s}`),
    ],
    context: region.description,
    targetAudience: `Engineering managers across the ${region.name}`,
    industry: primaryIndustry,
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX"],
    metaTitle: `CAD Services ${region.name} | Regional Engineering | From $8/hr`,
    metaDescription: `Professional CAD services for the ${region.name}. Serving ${region.industries.join(", ")} across ${region.states.join(", ")}. 98% retention. From $8/hr.`,
    h1: `CAD & Engineering Services for the ${region.name}`,
    heroIntro: `CADCAMX provides comprehensive CAD engineering services across the ${region.name}. ${region.description}. We help ${region.context} businesses reduce costs while accelerating timelines.`,
    heroBenefits: [
      `Serving ${region.states.length} states`,
      `${region.industries.join(", ")} expertise`,
      `Major cities: ${region.majorCities.slice(0, 3).join(", ")}`,
      `65% cost savings`,
    ],
    ctaText: `Get Regional Quote`,
    problemTitle: `Engineering Challenges Across the ${region.name}`,
    problemDescription: `The ${region.name}'s ${primaryIndustry.toLowerCase()} sector faces talent shortages and rising costs. Finding qualified CAD engineers across ${region.states.length} states is increasingly difficult.`,
    painPoints: [
      `CAD engineer shortage across ${region.states.length} states`,
      `High local rates ($75-150/hr)`,
      `Inconsistent quality by location`,
      `Difficulty coordinating multi-state projects`,
      `Competition for regional talent`,
    ],
    solutionTitle: `Your ${region.name} Engineering Partner`,
    solutionDescription: `CADCAMX serves as your dedicated engineering team across the ${region.name}, providing consistent quality from ${region.majorCities[0]} to ${region.majorCities[region.majorCities.length - 1]}.`,
    solutionHighlights: [
      `Serving entire ${region.name}`,
      `${region.industries.join(", ")} expertise`,
      `Uniform quality standards`,
      `Single point of contact`,
    ],
    features: [
      {
        title: "2D Drafting",
        description: `Production drawings for ${region.name} manufacturers.`,
        icon: "FaDraftingCompass",
      },
      {
        title: "3D Modeling",
        description: `Parametric modeling for ${primaryIndustry.toLowerCase()} applications.`,
        icon: "FaCube",
      },
      {
        title: "CAM Programming",
        description: `CNC programming for regional machine shops.`,
        icon: "FaCogs",
      },
      {
        title: "FEA Analysis",
        description: `Structural analysis for ${region.name} engineering projects.`,
        icon: "FaChartLine",
      },
    ],
    useCaseTitle: `Serving the ${region.name}'s Industries`,
    useCaseDescription: `From ${region.majorCities[0]}'s ${region.industries[0].toLowerCase()} sector to ${region.majorCities[1]}'s manufacturers, CADCAMX supports diverse needs across the ${region.name}.`,
    useCaseScenarios: [
      `${region.majorCities[0]} ${primaryIndustry.toLowerCase()} company - 200+ drawings/month`,
      `${region.majorCities[1]} manufacturer - dedicated 5-person team`,
      `Multi-state supplier - regional coordination`,
      `${region.name} startup - prototype to production`,
    ],
    comparisonTitle: `${region.name} Cost Comparison`,
    comparisonItems: [
      {
        aspect: "Engineer Cost",
        traditional: `$75-140/hr regional average`,
        cadcamx: "$8-25/hr",
      },
      {
        aspect: "Coverage",
        traditional: "Single location",
        cadcamx: `${region.states.length} states`,
      },
      {
        aspect: "Ramp-up",
        traditional: "4-6 months",
        cadcamx: "48-hour start",
      },
      {
        aspect: "Annual Savings",
        traditional: "$0",
        cadcamx: "$100K+ typical",
      },
    ],
    testimonial: {
      quote: `CADCAMX provides consistent CAD support across our ${region.name} operations. Having one partner for ${region.states.length} states simplified everything.`,
      role: "VP Engineering",
      company: `${primaryIndustry} Company, ${region.majorCities[0]}`,
    },
    faqs: [
      {
        question: `Do you serve companies throughout the ${region.name}?`,
        answer: `Yes, we serve businesses across ${region.states.join(", ")} with consistent quality and pricing.`,
      },
      {
        question: `What industries in the ${region.name} do you specialize in?`,
        answer: `We have deep expertise in ${region.industries.join(", ")} - the key sectors of the ${region.context}.`,
      },
      {
        question: `How do you ensure consistency across ${region.states.length} states?`,
        answer: `We use standardized processes, centralized project management, and quality assurance that ensures identical deliverables regardless of which ${region.name} location you're in.`,
      },
      {
        question: `Can you coordinate projects across multiple ${region.name} locations?`,
        answer: `Yes, our project management tools enable seamless collaboration across the entire ${region.name} with centralized communication.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: `Regional volume discounts for ${region.name} companies`,
  };
});

// ===========================================
// COMBINED EXPORTS
// ===========================================

// All metro and regional pages (~300 total)
export const allMetroRegionalPages: SEOPageData[] = [
  ...allMetroPages,           // ~144 pages
  ...regionalServicePages,     // ~60 pages
  ...generalRegionalPages,     // ~12 pages
];

// Helper functions
export function getMetroRegionalPagesByState(state: string): SEOPageData[] {
  const lowerState = state.toLowerCase();
  return allMetroRegionalPages.filter(
    (page) =>
      page.slug.includes(lowerState) ||
      page.primaryKeyword.toLowerCase().includes(lowerState)
  );
}

export function getMetroRegionalPagesByIndustry(industry: string): SEOPageData[] {
  return allMetroRegionalPages.filter(
    (page) => page.industry?.toLowerCase() === industry.toLowerCase()
  );
}
