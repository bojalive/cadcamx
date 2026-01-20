import { SEOPageData } from "./seo-pages-data";

// Industries
const industries = [
  { name: "Automotive", slug: "automotive", context: "automotive manufacturing" },
  { name: "Aerospace", slug: "aerospace", context: "aerospace and aviation" },
  { name: "Medical Devices", slug: "medical-device", context: "medical technology" },
  { name: "Industrial Equipment", slug: "industrial-equipment", context: "industrial machinery" },
  { name: "Electronics", slug: "electronics", context: "electronics manufacturing" },
  { name: "Oil & Gas", slug: "oil-gas", context: "energy sector" },
  { name: "Consumer Products", slug: "consumer-products", context: "consumer goods" },
  { name: "Defense", slug: "defense", context: "defense contractors" },
  { name: "Heavy Equipment", slug: "heavy-equipment", context: "construction equipment" },
  { name: "Robotics", slug: "robotics", context: "automation and robotics" },
  { name: "Marine", slug: "marine", context: "shipbuilding and marine" },
  { name: "Agricultural", slug: "agricultural", context: "agricultural equipment" },
];

// All US states
const states = [
  { name: "Alabama", abbr: "AL", cities: ["Huntsville", "Birmingham", "Mobile"] },
  { name: "Alaska", abbr: "AK", cities: ["Anchorage", "Fairbanks"] },
  { name: "Arizona", abbr: "AZ", cities: ["Phoenix", "Tucson", "Mesa"] },
  { name: "Arkansas", abbr: "AR", cities: ["Little Rock", "Fort Smith"] },
  { name: "California", abbr: "CA", cities: ["Los Angeles", "San Diego", "San Jose"] },
  { name: "Colorado", abbr: "CO", cities: ["Denver", "Colorado Springs", "Boulder"] },
  { name: "Connecticut", abbr: "CT", cities: ["Hartford", "New Haven", "Stamford"] },
  { name: "Delaware", abbr: "DE", cities: ["Wilmington", "Dover"] },
  { name: "Florida", abbr: "FL", cities: ["Miami", "Orlando", "Tampa"] },
  { name: "Georgia", abbr: "GA", cities: ["Atlanta", "Savannah", "Augusta"] },
  { name: "Hawaii", abbr: "HI", cities: ["Honolulu", "Pearl City"] },
  { name: "Idaho", abbr: "ID", cities: ["Boise", "Nampa"] },
  { name: "Illinois", abbr: "IL", cities: ["Chicago", "Rockford", "Peoria"] },
  { name: "Indiana", abbr: "IN", cities: ["Indianapolis", "Fort Wayne", "South Bend"] },
  { name: "Iowa", abbr: "IA", cities: ["Des Moines", "Cedar Rapids", "Davenport"] },
  { name: "Kansas", abbr: "KS", cities: ["Wichita", "Kansas City", "Topeka"] },
  { name: "Kentucky", abbr: "KY", cities: ["Louisville", "Lexington", "Bowling Green"] },
  { name: "Louisiana", abbr: "LA", cities: ["New Orleans", "Baton Rouge", "Shreveport"] },
  { name: "Maine", abbr: "ME", cities: ["Portland", "Bangor"] },
  { name: "Maryland", abbr: "MD", cities: ["Baltimore", "Bethesda", "Rockville"] },
  { name: "Massachusetts", abbr: "MA", cities: ["Boston", "Worcester", "Cambridge"] },
  { name: "Michigan", abbr: "MI", cities: ["Detroit", "Grand Rapids", "Ann Arbor"] },
  { name: "Minnesota", abbr: "MN", cities: ["Minneapolis", "St Paul", "Rochester"] },
  { name: "Mississippi", abbr: "MS", cities: ["Jackson", "Gulfport"] },
  { name: "Missouri", abbr: "MO", cities: ["St Louis", "Kansas City", "Springfield"] },
  { name: "Montana", abbr: "MT", cities: ["Billings", "Missoula"] },
  { name: "Nebraska", abbr: "NE", cities: ["Omaha", "Lincoln"] },
  { name: "Nevada", abbr: "NV", cities: ["Las Vegas", "Reno", "Henderson"] },
  { name: "New Hampshire", abbr: "NH", cities: ["Manchester", "Nashua"] },
  { name: "New Jersey", abbr: "NJ", cities: ["Newark", "Jersey City", "Trenton"] },
  { name: "New Mexico", abbr: "NM", cities: ["Albuquerque", "Santa Fe", "Las Cruces"] },
  { name: "New York", abbr: "NY", cities: ["New York City", "Buffalo", "Rochester"] },
  { name: "North Carolina", abbr: "NC", cities: ["Charlotte", "Raleigh", "Greensboro"] },
  { name: "North Dakota", abbr: "ND", cities: ["Fargo", "Bismarck"] },
  { name: "Ohio", abbr: "OH", cities: ["Cleveland", "Cincinnati", "Columbus"] },
  { name: "Oklahoma", abbr: "OK", cities: ["Oklahoma City", "Tulsa", "Norman"] },
  { name: "Oregon", abbr: "OR", cities: ["Portland", "Eugene", "Salem"] },
  { name: "Pennsylvania", abbr: "PA", cities: ["Philadelphia", "Pittsburgh", "Allentown"] },
  { name: "Rhode Island", abbr: "RI", cities: ["Providence", "Warwick"] },
  { name: "South Carolina", abbr: "SC", cities: ["Charleston", "Greenville", "Columbia"] },
  { name: "South Dakota", abbr: "SD", cities: ["Sioux Falls", "Rapid City"] },
  { name: "Tennessee", abbr: "TN", cities: ["Nashville", "Memphis", "Chattanooga"] },
  { name: "Texas", abbr: "TX", cities: ["Houston", "Dallas", "Austin", "San Antonio"] },
  { name: "Utah", abbr: "UT", cities: ["Salt Lake City", "Provo", "Ogden"] },
  { name: "Vermont", abbr: "VT", cities: ["Burlington", "Montpelier"] },
  { name: "Virginia", abbr: "VA", cities: ["Virginia Beach", "Norfolk", "Richmond"] },
  { name: "Washington", abbr: "WA", cities: ["Seattle", "Spokane", "Tacoma"] },
  { name: "West Virginia", abbr: "WV", cities: ["Charleston", "Huntington"] },
  { name: "Wisconsin", abbr: "WI", cities: ["Milwaukee", "Madison", "Green Bay"] },
  { name: "Wyoming", abbr: "WY", cities: ["Cheyenne", "Casper"] },
];

function generateStateIndustryPage(
  stateName: string,
  abbr: string,
  cities: string[],
  industry: string,
  industrySlug: string,
  industryContext: string
): SEOPageData {
  const stateSlug = stateName.toLowerCase().replace(/\s+/g, "-");
  const slug = `${industrySlug}-cad-services-${stateSlug}`;

  return {
    slug,
    primaryKeyword: `${industry} CAD Services ${stateName}`,
    secondaryKeywords: [
      `${industry.toLowerCase()} CAD ${abbr}`,
      `${industry.toLowerCase()} engineering services ${stateName}`,
      `${abbr} ${industry.toLowerCase()} design outsourcing`,
      `${stateName} ${industry.toLowerCase()} CAD companies`,
      `outsource ${industry.toLowerCase()} CAD ${abbr}`,
    ],
    context: `${industry} CAD services for ${stateName}`,
    targetAudience: `${industry} manufacturers and engineers in ${stateName}`,
    industry: industry,
    software: ["SolidWorks", "AutoCAD", "CATIA", "Creo", "NX", "Mastercam"],
    metaTitle: `${industry} CAD Services ${stateName} | ${abbr} Engineering | $8/hr`,
    metaDescription: `Expert ${industry.toLowerCase()} CAD services for ${stateName} companies. Serving ${cities.slice(0, 3).join(", ")}. 3D modeling, drafting, CAM. From $8/hr.`,
    h1: `${industry} CAD Services for ${stateName} Companies`,
    heroIntro: `CADCAMX delivers specialized ${industry.toLowerCase()} CAD services to manufacturers across ${stateName}. From ${cities[0]} to ${cities[cities.length - 1]}, we help ${abbr} ${industry.toLowerCase()} companies reduce costs and accelerate projects.`,
    heroBenefits: [
      `Serving all of ${stateName}`,
      `${industry} specialists`,
      "US time zone overlap",
      "From $8/hr",
    ],
    ctaText: `Get ${abbr} Quote`,
    problemTitle: `${industry} Engineering Challenges in ${stateName}`,
    problemDescription: `${stateName}'s ${industry.toLowerCase()} sector faces intense competition. Companies need to deliver faster while controlling costs, but finding qualified CAD talent remains challenging.`,
    painPoints: [
      `${industry} CAD talent shortage in ${abbr}`,
      "Rising engineering labor costs",
      "Project backlog delays",
      "Difficulty scaling for demand peaks",
      "Training and retention issues",
    ],
    solutionTitle: `Your ${stateName} ${industry} CAD Team`,
    solutionDescription: `CADCAMX provides ${stateName} ${industry.toLowerCase()} companies with instant access to experienced CAD engineers who understand your industry's unique requirements.`,
    solutionHighlights: [
      `Deep ${industry.toLowerCase()} experience`,
      `Serving ${cities.join(", ")} and beyond`,
      "Industry standards compliance",
      "Flexible scaling",
    ],
    features: [
      { title: "Product Design", description: `${industry}-specific product development and 3D modeling.`, icon: "FaCube" },
      { title: "Production Drawings", description: `Manufacturing documentation meeting ${industry.toLowerCase()} standards.`, icon: "FaDraftingCompass" },
      { title: "CAM Services", description: `CNC programming optimized for ${industry.toLowerCase()} production.`, icon: "FaCogs" },
      { title: "Engineering Analysis", description: `FEA, CFD, and tolerance studies for ${industry.toLowerCase()}.`, icon: "FaChartLine" },
    ],
    useCaseTitle: `${stateName} ${industry} Success Stories`,
    useCaseDescription: `How ${abbr} ${industry.toLowerCase()} companies leverage CADCAMX for competitive advantage.`,
    useCaseScenarios: [
      `${cities[0]} ${industry.toLowerCase()} OEM reduced CAD costs 60%`,
      `${abbr} supplier cleared 4-month backlog`,
      `${stateName} startup launched product 3 months faster`,
      `${industry} tooling project completed under budget`,
    ],
    comparisonTitle: `${stateName} ${industry} CAD Options`,
    comparisonItems: [
      { aspect: "Engineer Cost", traditional: `$80-130/hr in ${abbr}`, cadcamx: "$8-25/hr" },
      { aspect: "Hiring Time", traditional: "3-6 months", cadcamx: "48 hours" },
      { aspect: "Industry Expertise", traditional: "Limited availability", cadcamx: `${industry} specialists` },
      { aspect: "Capacity", traditional: "Fixed headcount", cadcamx: "Scale on demand" },
    ],
    testimonial: {
      quote: `CADCAMX has become our go-to CAD partner for ${industry.toLowerCase()} projects. They understand our industry and deliver quality work consistently.`,
      role: "VP Engineering",
      company: `${industry} Manufacturer, ${cities[0]}`,
    },
    faqs: [
      {
        question: `Do you serve all of ${stateName}?`,
        answer: `Yes, we work with ${industry.toLowerCase()} companies throughout ${stateName}, including ${cities.join(", ")} and surrounding areas. Our remote model means location within ${abbr} doesn't matter.`,
      },
      {
        question: `What ${industry.toLowerCase()} experience do you have?`,
        answer: `Our team includes engineers with extensive ${industry.toLowerCase()} backgrounds, familiar with industry-specific standards, materials, tolerances, and manufacturing processes.`,
      },
      {
        question: "How do you handle communication?",
        answer: `We maintain significant overlap with ${abbr} business hours. Your dedicated project manager ensures clear communication, and we use video calls, screen sharing, and your preferred collaboration tools.`,
      },
      {
        question: "What's the typical turnaround?",
        answer: `Standard ${industry.toLowerCase()} projects are delivered within 48-72 hours. Complex assemblies and larger projects receive detailed timelines during scoping.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: `Volume rates for ${abbr} companies with ongoing needs`,
  };
}

// Generate all state + industry combination pages
export const stateIndustryPages: SEOPageData[] = states.flatMap((stateInfo) =>
  industries.map((industry) =>
    generateStateIndustryPage(
      stateInfo.name,
      stateInfo.abbr,
      stateInfo.cities,
      industry.name,
      industry.slug,
      industry.context
    )
  )
);
