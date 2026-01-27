import { SEOPageData } from "./seo-pages-data";

// ===========================================
// PROBLEM-SOLUTION PAGES (300 pages)
// 6 core problems × 50 locations
// ===========================================

// Problem definitions with comprehensive solution content
interface ProblemDef {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  symptoms: string[];
  causes: string[];
  solution: string;
  benefits: string[];
  deliverables: string[];
  timeframe: string;
  savings: string;
  priceStart: string;
  keywords: string[];
}

const problems: ProblemDef[] = [
  {
    name: "Legacy CAD Drawing Conversion",
    slug: "legacy-cad-conversion",
    shortName: "Legacy Conversion",
    description: "Converting paper drawings, outdated CAD files, and legacy formats to modern 3D CAD",
    symptoms: [
      "Thousands of paper drawings in filing cabinets",
      "Old CAD files in obsolete formats (DWG R14, IGES, Pro/E Wildfire)",
      "Critical part data locked in retired engineers' knowledge",
      "No 3D models for legacy products still in production",
      "Revision control nightmare with multiple file versions",
    ],
    causes: [
      "Decades of accumulated paper documentation",
      "Multiple CAD system transitions over the years",
      "Retired engineers taking tribal knowledge",
      "M&A activity bringing incompatible file formats",
      "Lack of resources to digitize during normal operations",
    ],
    solution: "CADCAMX provides dedicated legacy conversion teams that systematically convert paper and obsolete CAD files into modern parametric 3D models with proper revision control",
    benefits: [
      "Searchable digital archive of all legacy designs",
      "Modern 3D models for manufacturing and analysis",
      "Preserved engineering intent and design history",
      "Reduced time searching for part information",
    ],
    deliverables: ["3D parametric models", "2D production drawings", "PDM/PLM integration", "Conversion validation reports"],
    timeframe: "100-500 drawings/month typical throughput",
    savings: "70% faster than in-house conversion",
    priceStart: "$8/hr",
    keywords: ["legacy CAD conversion", "paper to CAD", "drawing digitization", "CAD migration"],
  },
  {
    name: "CAD Backlog Reduction",
    slug: "cad-backlog-reduction",
    shortName: "Backlog Reduction",
    description: "Clearing accumulated engineering backlogs and catching up on deferred CAD work",
    symptoms: [
      "Engineering change orders piling up",
      "New product development delayed by drawing queue",
      "Shop waiting on updated drawings",
      "Customer requests sitting in queue for weeks",
      "Engineers overwhelmed with daily firefighting",
    ],
    causes: [
      "Understaffed CAD departments",
      "Sudden increase in project volume",
      "Key engineers leaving or retiring",
      "Difficulty hiring qualified CAD talent",
      "Budget constraints limiting headcount",
    ],
    solution: "CADCAMX provides surge capacity with pre-qualified CAD engineers who integrate with your team to rapidly clear backlogs while maintaining quality standards",
    benefits: [
      "Clear months of backlog in weeks",
      "Get products to market faster",
      "Reduce shop floor delays",
      "Free up senior engineers for high-value work",
    ],
    deliverables: ["Production drawings", "ECO processing", "Design updates", "Documentation cleanup"],
    timeframe: "Clear 3-6 month backlog in 4-8 weeks",
    savings: "65% cost savings vs local temp staff",
    priceStart: "$8/hr",
    keywords: ["CAD backlog", "engineering backlog", "drawing queue", "ECO backlog"],
  },
  {
    name: "Engineering Talent Shortage Solutions",
    slug: "engineering-talent-shortage",
    shortName: "Talent Shortage",
    description: "Solving chronic engineering staffing challenges with dedicated offshore teams",
    symptoms: [
      "Open CAD positions unfilled for 6+ months",
      "Losing candidates to higher bidders",
      "Existing engineers burned out from overwork",
      "Projects delayed due to lack of resources",
      "Quality suffering from rushing to meet deadlines",
    ],
    causes: [
      "Nationwide shortage of skilled CAD engineers",
      "Competition from Big Tech for engineering talent",
      "Experienced engineers retiring faster than replacements",
      "Geographic limitations in manufacturing regions",
      "Salary expectations exceeding budgets",
    ],
    solution: "CADCAMX provides long-term dedicated engineering teams that function as an extension of your department, eliminating recruitment challenges",
    benefits: [
      "Immediate access to qualified engineers",
      "No recruiting fees or hiring delays",
      "Flexible team scaling as needs change",
      "Retain institutional knowledge with low turnover",
    ],
    deliverables: ["Dedicated team members", "Seamless integration", "Knowledge transfer", "Continuous improvement"],
    timeframe: "Team operational within 2 weeks",
    savings: "50-70% cost savings on engineering labor",
    priceStart: "$10/hr",
    keywords: ["engineering talent shortage", "CAD staffing", "engineering recruitment", "technical talent gap"],
  },
  {
    name: "Design-to-Manufacturing Bottlenecks",
    slug: "design-manufacturing-bottlenecks",
    shortName: "Manufacturing Bottlenecks",
    description: "Eliminating delays between design completion and manufacturing readiness",
    symptoms: [
      "Designs thrown over the wall without DFM review",
      "Manufacturing rejecting designs for producibility issues",
      "Multiple design iterations delaying production",
      "High scrap rates from design issues",
      "Suppliers requesting design clarifications",
    ],
    causes: [
      "Designers lacking manufacturing knowledge",
      "Time pressure skipping DFM reviews",
      "Poor communication between design and manufacturing",
      "Designs not optimized for target processes",
      "Missing tolerance analysis and GD&T",
    ],
    solution: "CADCAMX engineers with manufacturing experience review and optimize designs for producibility, creating manufacturing-ready documentation",
    benefits: [
      "First-time-right designs for manufacturing",
      "Reduced prototype iterations",
      "Lower scrap and rework costs",
      "Faster time to production",
    ],
    deliverables: ["DFM analysis reports", "Optimized designs", "Manufacturing drawings", "Tolerance stack-ups"],
    timeframe: "DFM review in 2-5 days",
    savings: "Reduce prototype iterations by 50%",
    priceStart: "$12/hr",
    keywords: ["DFM services", "design for manufacturing", "producibility", "manufacturing engineering"],
  },
  {
    name: "Prototype Development Delays",
    slug: "prototype-development-delays",
    shortName: "Prototype Delays",
    description: "Accelerating prototype design and development to speed time to market",
    symptoms: [
      "Prototype designs taking months instead of weeks",
      "Market windows closing before product ready",
      "Competitors launching while still prototyping",
      "Investor demos delayed by engineering",
      "Trade show deadlines missed",
    ],
    causes: [
      "Limited CAD resources allocated to new products",
      "Existing products consuming all engineering time",
      "Iterative design process too slow",
      "Waiting on analysis results to proceed",
      "Design reviews creating bottlenecks",
    ],
    solution: "CADCAMX provides rapid prototyping design teams that work around the clock to accelerate your product development cycle",
    benefits: [
      "Compress months of design into weeks",
      "Meet critical market windows",
      "Iterate faster with overnight turnarounds",
      "Parallel development of multiple concepts",
    ],
    deliverables: ["Prototype 3D models", "Rapid iterations", "3D printing files", "Functional prototypes"],
    timeframe: "Initial prototype designs in 1-2 weeks",
    savings: "Cut prototype cycle time by 60%",
    priceStart: "$12/hr",
    keywords: ["prototype design", "rapid prototyping", "product development", "accelerated engineering"],
  },
  {
    name: "Engineering Cost Reduction",
    slug: "engineering-cost-reduction",
    shortName: "Cost Reduction",
    description: "Reducing engineering overhead while maintaining or improving output quality",
    symptoms: [
      "Engineering labor costs consuming margins",
      "Software licensing eating into budgets",
      "Overtime becoming standard practice",
      "Outsourcing to expensive local contractors",
      "Project bids losing on engineering overhead",
    ],
    causes: [
      "High fully-loaded cost of US engineers ($150K+)",
      "Expensive CAD software subscriptions",
      "Recruiting and training costs",
      "Benefits and overhead burden",
      "Inefficient resource utilization",
    ],
    solution: "CADCAMX provides enterprise-quality engineering at offshore rates, with software included, reducing total engineering costs by 50-70%",
    benefits: [
      "Reduce engineering labor costs by 65%",
      "Eliminate software licensing overhead",
      "Convert fixed costs to variable",
      "Improve project profitability",
    ],
    deliverables: ["Full engineering services", "All software included", "Flexible scaling", "Quality guarantee"],
    timeframe: "Start saving within first month",
    savings: "65% average cost reduction",
    priceStart: "$8/hr",
    keywords: ["engineering cost reduction", "reduce CAD costs", "offshore engineering", "engineering ROI"],
  },
];

// Location data for problem pages
interface LocationInfo {
  location: string;
  locationType: "city" | "state" | "region";
  state?: string;
  industries: string[];
  context: string;
}

const locations: LocationInfo[] = [
  // Major Manufacturing Cities
  { location: "Detroit", locationType: "city", state: "MI", industries: ["Automotive", "Manufacturing"], context: "automotive capital" },
  { location: "Grand Rapids", locationType: "city", state: "MI", industries: ["Automotive", "Furniture"], context: "manufacturing hub" },
  { location: "Cleveland", locationType: "city", state: "OH", industries: ["Manufacturing", "Industrial"], context: "industrial center" },
  { location: "Cincinnati", locationType: "city", state: "OH", industries: ["Manufacturing", "Aerospace"], context: "machine tool center" },
  { location: "Indianapolis", locationType: "city", state: "IN", industries: ["Automotive", "Manufacturing"], context: "motorsports hub" },
  { location: "Chicago", locationType: "city", state: "IL", industries: ["Industrial", "Manufacturing"], context: "industrial heartland" },
  { location: "Milwaukee", locationType: "city", state: "WI", industries: ["Manufacturing", "Industrial"], context: "manufacturing center" },

  // Texas
  { location: "Houston", locationType: "city", state: "TX", industries: ["Oil & Gas", "Aerospace"], context: "energy capital" },
  { location: "Dallas", locationType: "city", state: "TX", industries: ["Aerospace", "Technology"], context: "aerospace hub" },
  { location: "Austin", locationType: "city", state: "TX", industries: ["Technology", "Manufacturing"], context: "tech center" },
  { location: "San Antonio", locationType: "city", state: "TX", industries: ["Aerospace", "Military"], context: "military city" },

  // California
  { location: "Los Angeles", locationType: "city", state: "CA", industries: ["Aerospace", "Entertainment"], context: "aerospace hub" },
  { location: "San Diego", locationType: "city", state: "CA", industries: ["Defense", "Biotech"], context: "defense center" },
  { location: "San Jose", locationType: "city", state: "CA", industries: ["Technology", "Electronics"], context: "silicon valley" },
  { location: "Irvine", locationType: "city", state: "CA", industries: ["Medical Devices", "Technology"], context: "medical tech hub" },

  // Aerospace Centers
  { location: "Seattle", locationType: "city", state: "WA", industries: ["Aerospace", "Technology"], context: "aerospace capital" },
  { location: "Wichita", locationType: "city", state: "KS", industries: ["Aviation", "Aerospace"], context: "air capital" },
  { location: "Huntsville", locationType: "city", state: "AL", industries: ["Aerospace", "Defense"], context: "rocket city" },
  { location: "Phoenix", locationType: "city", state: "AZ", industries: ["Aerospace", "Semiconductor"], context: "aerospace center" },
  { location: "Denver", locationType: "city", state: "CO", industries: ["Aerospace", "Defense"], context: "aerospace hub" },

  // Medical Device Hubs
  { location: "Minneapolis", locationType: "city", state: "MN", industries: ["Medical Devices", "Manufacturing"], context: "medical device capital" },
  { location: "Boston", locationType: "city", state: "MA", industries: ["Medical Devices", "Biotech"], context: "biotech hub" },
  { location: "Rochester", locationType: "city", state: "MN", industries: ["Medical", "Healthcare"], context: "medical center" },

  // Other Major Cities
  { location: "Atlanta", locationType: "city", state: "GA", industries: ["Aerospace", "Manufacturing"], context: "southeast hub" },
  { location: "Charlotte", locationType: "city", state: "NC", industries: ["Aerospace", "Automotive"], context: "manufacturing center" },
  { location: "Philadelphia", locationType: "city", state: "PA", industries: ["Manufacturing", "Pharma"], context: "industrial city" },
  { location: "Pittsburgh", locationType: "city", state: "PA", industries: ["Manufacturing", "Robotics"], context: "steel city" },
  { location: "Nashville", locationType: "city", state: "TN", industries: ["Automotive", "Healthcare"], context: "automotive supplier hub" },
  { location: "St Louis", locationType: "city", state: "MO", industries: ["Aerospace", "Manufacturing"], context: "aerospace center" },
  { location: "Hartford", locationType: "city", state: "CT", industries: ["Aerospace", "Defense"], context: "jet engine capital" },

  // States
  { location: "Michigan", locationType: "state", industries: ["Automotive", "Manufacturing", "Defense"], context: "automotive state" },
  { location: "Ohio", locationType: "state", industries: ["Manufacturing", "Aerospace", "Automotive"], context: "manufacturing state" },
  { location: "Texas", locationType: "state", industries: ["Oil & Gas", "Aerospace", "Technology"], context: "energy state" },
  { location: "California", locationType: "state", industries: ["Aerospace", "Technology", "Medical"], context: "innovation state" },
  { location: "Indiana", locationType: "state", industries: ["Automotive", "Manufacturing"], context: "crossroads of america" },
  { location: "Illinois", locationType: "state", industries: ["Industrial", "Manufacturing"], context: "industrial state" },
  { location: "Wisconsin", locationType: "state", industries: ["Manufacturing", "Medical Devices"], context: "manufacturing state" },
  { location: "Minnesota", locationType: "state", industries: ["Medical Devices", "Manufacturing"], context: "medical device state" },
  { location: "Washington", locationType: "state", industries: ["Aerospace", "Technology"], context: "aerospace state" },
  { location: "Arizona", locationType: "state", industries: ["Aerospace", "Semiconductor"], context: "aerospace state" },
  { location: "Colorado", locationType: "state", industries: ["Aerospace", "Defense"], context: "aerospace state" },
  { location: "Georgia", locationType: "state", industries: ["Aerospace", "Automotive"], context: "manufacturing state" },
  { location: "North Carolina", locationType: "state", industries: ["Aerospace", "Automotive"], context: "manufacturing state" },
  { location: "Tennessee", locationType: "state", industries: ["Automotive", "Manufacturing"], context: "automotive state" },
  { location: "Alabama", locationType: "state", industries: ["Aerospace", "Automotive"], context: "aerospace state" },
  { location: "Pennsylvania", locationType: "state", industries: ["Manufacturing", "Pharma"], context: "industrial state" },
  { location: "Florida", locationType: "state", industries: ["Aerospace", "Defense"], context: "space coast state" },
  { location: "Massachusetts", locationType: "state", industries: ["Medical Devices", "Defense"], context: "innovation state" },
  { location: "Connecticut", locationType: "state", industries: ["Aerospace", "Defense"], context: "precision state" },
  { location: "Kansas", locationType: "state", industries: ["Aviation", "Manufacturing"], context: "aviation state" },
];

// ===========================================
// GENERATOR FUNCTION
// ===========================================

function generateProblemPage(
  problem: ProblemDef,
  locationInfo: LocationInfo
): SEOPageData {
  const { location, locationType, state, industries, context } = locationInfo;
  const locationFull = locationType === "city" ? `${location}, ${state}` : location;
  const primaryIndustry = industries[0];
  const slug = `${problem.slug}-${location.toLowerCase().replace(/\s+/g, "-")}${state ? `-${state.toLowerCase()}` : ""}`;

  return {
    slug,
    primaryKeyword: `${problem.name} ${locationFull}`,
    secondaryKeywords: [
      ...problem.keywords.map((kw) => `${kw} ${location}`),
      `${problem.shortName.toLowerCase()} ${primaryIndustry.toLowerCase()} ${location}`,
      `${problem.shortName.toLowerCase()} solutions ${state || location}`,
    ],
    context: `${problem.description} for ${context}`,
    targetAudience: `Engineering managers and operations leaders in ${locationFull} facing ${problem.shortName.toLowerCase()} challenges`,
    industry: primaryIndustry,
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX"],
    metaTitle: `${problem.name} ${location} | ${problem.savings} | CADCAMX`,
    metaDescription: `${problem.description} in ${locationFull}. ${problem.savings}. ${problem.timeframe}. Starting at ${problem.priceStart}. Get free assessment.`,
    h1: `${problem.name} Solutions for ${locationFull}`,
    heroIntro: `${primaryIndustry} companies in ${location} struggle with ${problem.shortName.toLowerCase()}. CADCAMX helps ${context} businesses ${problem.solution.toLowerCase().replace("cadcamx ", "")}`,
    heroBenefits: problem.benefits,
    ctaText: `Get ${problem.shortName} Assessment`,
    problemTitle: `${problem.shortName} Challenges in ${location}`,
    problemDescription: `${primaryIndustry} companies across ${locationFull} face critical ${problem.shortName.toLowerCase()} challenges. ${problem.symptoms[0]}. ${problem.symptoms[1]}.`,
    painPoints: problem.symptoms,
    solutionTitle: `${problem.shortName} Solutions for ${location} Companies`,
    solutionDescription: problem.solution + `. Our dedicated teams help ${locationFull} ${primaryIndustry.toLowerCase()} companies achieve ${problem.savings}.`,
    solutionHighlights: [
      `${problem.timeframe}`,
      `${problem.savings}`,
      `Starting at ${problem.priceStart}`,
      `Dedicated team for ${location} projects`,
    ],
    features: problem.deliverables.map((deliverable, i) => ({
      title: deliverable,
      description: `Professional ${deliverable.toLowerCase()} for ${location} ${primaryIndustry.toLowerCase()} companies.`,
      icon: ["FaCube", "FaFileAlt", "FaCheckCircle", "FaCogs"][i] || "FaCube",
    })),
    useCaseTitle: `${problem.shortName} Success Stories in ${location}`,
    useCaseDescription: `${primaryIndustry} companies across ${locationFull} have overcome ${problem.shortName.toLowerCase()} challenges with CADCAMX support.`,
    useCaseScenarios: [
      `${location} ${primaryIndustry.toLowerCase()} company - ${problem.deliverables[0].toLowerCase()} project completed ahead of schedule`,
      `${state || location} manufacturer achieved ${problem.savings} in first quarter`,
      `OEM cleared years of ${problem.shortName.toLowerCase()} in ${problem.timeframe.split(" ").slice(-2).join(" ")}`,
      `Startup in ${location} accelerated product launch with dedicated team`,
    ],
    comparisonTitle: `${problem.shortName} Approach: Traditional vs CADCAMX`,
    comparisonItems: [
      {
        aspect: "Cost",
        traditional: `$75-150/hr in ${location}`,
        cadcamx: problem.priceStart,
      },
      {
        aspect: "Timeline",
        traditional: "Months of internal effort",
        cadcamx: problem.timeframe,
      },
      {
        aspect: "Resources",
        traditional: "Diverts core team",
        cadcamx: "Dedicated external team",
      },
      {
        aspect: "Results",
        traditional: "Variable quality",
        cadcamx: problem.savings,
      },
    ],
    testimonial: {
      quote: `We had years of ${problem.shortName.toLowerCase()} issues. CADCAMX helped us ${problem.solution.toLowerCase().replace("cadcamx ", "").slice(0, 80)}... The results exceeded our expectations.`,
      role: "VP Engineering",
      company: `${primaryIndustry} Company, ${state || location}`,
    },
    faqs: [
      {
        question: `How quickly can you address ${problem.shortName.toLowerCase()} for ${location} companies?`,
        answer: `We typically achieve ${problem.timeframe}. Our dedicated teams can start within 48 hours of engagement.`,
      },
      {
        question: `What causes ${problem.shortName.toLowerCase()} challenges in ${primaryIndustry.toLowerCase()}?`,
        answer: `Common causes include ${problem.causes.slice(0, 3).join(", ").toLowerCase()}. We address all of these systematically.`,
      },
      {
        question: `How much can ${location} companies save on ${problem.shortName.toLowerCase()}?`,
        answer: `Typical results show ${problem.savings}. Starting rates of ${problem.priceStart} compare to $75-150/hr locally.`,
      },
      {
        question: `What ${problem.shortName.toLowerCase()} deliverables do you provide?`,
        answer: `We deliver ${problem.deliverables.join(", ").toLowerCase()}. All work follows your ${primaryIndustry.toLowerCase()} quality standards.`,
      },
      {
        question: `Do you work with ${primaryIndustry.toLowerCase()} companies in ${location}?`,
        answer: `Yes, we have extensive experience with ${primaryIndustry.toLowerCase()} companies throughout ${locationFull}. Our engineers understand industry-specific requirements.`,
      },
    ],
    pricingStart: problem.priceStart,
    pricingNote: `Free ${problem.shortName.toLowerCase()} assessment for ${location} companies`,
  };
}

// ===========================================
// GENERATE ALL PROBLEM-SOLUTION PAGES
// ===========================================

export const problemSolutionPages: SEOPageData[] = problems.flatMap((problem) =>
  locations.map((locationInfo) => generateProblemPage(problem, locationInfo))
);

// Helper functions
export function getProblemPagesByProblem(problemSlug: string): SEOPageData[] {
  return problemSolutionPages.filter((page) => page.slug.startsWith(problemSlug));
}

export function getProblemPagesByLocation(location: string): SEOPageData[] {
  const lowerLocation = location.toLowerCase().replace(/\s+/g, "-");
  return problemSolutionPages.filter((page) => page.slug.includes(lowerLocation));
}

export function getProblemPagesByIndustry(industry: string): SEOPageData[] {
  return problemSolutionPages.filter(
    (page) => page.industry?.toLowerCase() === industry.toLowerCase()
  );
}
