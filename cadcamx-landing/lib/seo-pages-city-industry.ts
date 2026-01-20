import { SEOPageData } from "./seo-pages-data";

// Industries with their specific context
const industries = [
  { name: "Automotive", slug: "automotive", context: "automotive manufacturing and suppliers" },
  { name: "Aerospace", slug: "aerospace", context: "aerospace and defense" },
  { name: "Medical Devices", slug: "medical-device", context: "medical device manufacturing" },
  { name: "Industrial Equipment", slug: "industrial", context: "industrial equipment and machinery" },
  { name: "Electronics", slug: "electronics", context: "electronics and PCB design" },
  { name: "Oil & Gas", slug: "oil-gas", context: "oil and gas equipment" },
  { name: "Consumer Products", slug: "consumer-products", context: "consumer product development" },
  { name: "Defense", slug: "defense", context: "defense and military" },
  { name: "Heavy Equipment", slug: "heavy-equipment", context: "heavy equipment and construction" },
  { name: "Robotics", slug: "robotics", context: "robotics and automation" },
];

// Major US cities with state info
const cities = [
  { city: "Detroit", state: "Michigan", abbr: "MI" },
  { city: "Grand Rapids", state: "Michigan", abbr: "MI" },
  { city: "Houston", state: "Texas", abbr: "TX" },
  { city: "Dallas", state: "Texas", abbr: "TX" },
  { city: "Austin", state: "Texas", abbr: "TX" },
  { city: "San Antonio", state: "Texas", abbr: "TX" },
  { city: "Fort Worth", state: "Texas", abbr: "TX" },
  { city: "Los Angeles", state: "California", abbr: "CA" },
  { city: "San Diego", state: "California", abbr: "CA" },
  { city: "San Jose", state: "California", abbr: "CA" },
  { city: "San Francisco", state: "California", abbr: "CA" },
  { city: "Irvine", state: "California", abbr: "CA" },
  { city: "Cleveland", state: "Ohio", abbr: "OH" },
  { city: "Cincinnati", state: "Ohio", abbr: "OH" },
  { city: "Columbus", state: "Ohio", abbr: "OH" },
  { city: "Dayton", state: "Ohio", abbr: "OH" },
  { city: "Seattle", state: "Washington", abbr: "WA" },
  { city: "Chicago", state: "Illinois", abbr: "IL" },
  { city: "Rockford", state: "Illinois", abbr: "IL" },
  { city: "Philadelphia", state: "Pennsylvania", abbr: "PA" },
  { city: "Pittsburgh", state: "Pennsylvania", abbr: "PA" },
  { city: "Indianapolis", state: "Indiana", abbr: "IN" },
  { city: "Charlotte", state: "North Carolina", abbr: "NC" },
  { city: "Raleigh", state: "North Carolina", abbr: "NC" },
  { city: "Atlanta", state: "Georgia", abbr: "GA" },
  { city: "Phoenix", state: "Arizona", abbr: "AZ" },
  { city: "Tucson", state: "Arizona", abbr: "AZ" },
  { city: "Miami", state: "Florida", abbr: "FL" },
  { city: "Orlando", state: "Florida", abbr: "FL" },
  { city: "Tampa", state: "Florida", abbr: "FL" },
  { city: "Boston", state: "Massachusetts", abbr: "MA" },
  { city: "Milwaukee", state: "Wisconsin", abbr: "WI" },
  { city: "Minneapolis", state: "Minnesota", abbr: "MN" },
  { city: "Hartford", state: "Connecticut", abbr: "CT" },
  { city: "Wichita", state: "Kansas", abbr: "KS" },
  { city: "Huntsville", state: "Alabama", abbr: "AL" },
  { city: "Birmingham", state: "Alabama", abbr: "AL" },
  { city: "Charleston", state: "South Carolina", abbr: "SC" },
  { city: "Greenville", state: "South Carolina", abbr: "SC" },
  { city: "Nashville", state: "Tennessee", abbr: "TN" },
  { city: "New York City", state: "New York", abbr: "NY" },
  { city: "Buffalo", state: "New York", abbr: "NY" },
  { city: "Rochester", state: "New York", abbr: "NY" },
  { city: "St Louis", state: "Missouri", abbr: "MO" },
  { city: "Kansas City", state: "Missouri", abbr: "MO" },
  { city: "Denver", state: "Colorado", abbr: "CO" },
  { city: "Portland", state: "Oregon", abbr: "OR" },
  { city: "Las Vegas", state: "Nevada", abbr: "NV" },
  { city: "Salt Lake City", state: "Utah", abbr: "UT" },
  { city: "Albuquerque", state: "New Mexico", abbr: "NM" },
];

function generateCityIndustryPage(
  city: string,
  state: string,
  abbr: string,
  industry: string,
  industrySlug: string,
  industryContext: string
): SEOPageData {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const slug = `${industrySlug}-cad-services-${citySlug}-${abbr.toLowerCase()}`;
  const location = `${city}, ${abbr}`;

  return {
    slug,
    primaryKeyword: `${industry} CAD Services ${location}`,
    secondaryKeywords: [
      `${industry.toLowerCase()} CAD ${city}`,
      `${industry.toLowerCase()} engineering ${abbr}`,
      `CAD outsourcing ${city} ${industry.toLowerCase()}`,
      `${city} ${industry.toLowerCase()} design services`,
      `${abbr} ${industry.toLowerCase()} CAD`,
    ],
    context: `${industry} CAD services for ${location}`,
    targetAudience: `${industry} companies and engineers in ${location}`,
    industry: industry,
    software: ["SolidWorks", "AutoCAD", "CATIA", "Creo", "NX"],
    metaTitle: `${industry} CAD Services ${location} | Engineering from $8/hr`,
    metaDescription: `Professional ${industry.toLowerCase()} CAD services for ${city} companies. 3D modeling, drafting, CAM programming for ${industryContext}. From $8/hr.`,
    h1: `${industry} CAD Services for ${location}`,
    heroIntro: `CADCAMX provides specialized ${industry.toLowerCase()} CAD services to companies in ${city} and throughout ${state}. Our engineers understand the unique requirements of ${industryContext}, delivering designs that meet industry standards.`,
    heroBenefits: [
      `${industry}-specialized engineers`,
      `Serving ${city} businesses`,
      "Industry standards compliance",
      "From $8/hr",
    ],
    ctaText: `Get ${industry} Quote`,
    problemTitle: `${industry} CAD Challenges in ${city}`,
    problemDescription: `${industry} companies in ${location} face pressure to deliver quality designs faster while managing costs. Finding local CAD talent with ${industry.toLowerCase()} experience is increasingly difficult.`,
    painPoints: [
      `Limited ${industry.toLowerCase()} CAD talent in ${city}`,
      "High local engineering rates",
      "Industry-specific standards requirements",
      "Tight project deadlines",
      "Fluctuating workloads",
    ],
    solutionTitle: `Your ${city} ${industry} CAD Partner`,
    solutionDescription: `CADCAMX provides ${city} ${industry.toLowerCase()} companies with experienced CAD engineers who understand your industry's requirements, standards, and workflows.`,
    solutionHighlights: [
      `${industry} industry experience`,
      "US time zone support",
      "Quality standards compliance",
      "Scalable capacity",
    ],
    features: [
      { title: "3D Modeling", description: `${industry}-specific 3D modeling in your preferred CAD platform.`, icon: "FaCube" },
      { title: "2D Drafting", description: `Production drawings meeting ${industry.toLowerCase()} documentation standards.`, icon: "FaDraftingCompass" },
      { title: "CAM Programming", description: `CNC programming optimized for ${industry.toLowerCase()} manufacturing.`, icon: "FaCogs" },
      { title: "Design Analysis", description: `FEA and tolerance analysis for ${industry.toLowerCase()} applications.`, icon: "FaChartLine" },
    ],
    useCaseTitle: `${industry} Applications in ${city}`,
    useCaseDescription: `We support ${industry.toLowerCase()} companies across ${state} with specialized CAD services.`,
    useCaseScenarios: [
      `${city} ${industry.toLowerCase()} OEM product development`,
      `${abbr} supplier component design`,
      `${industry} tooling and fixture design`,
      "Production documentation packages",
    ],
    comparisonTitle: `${city} ${industry} CAD Costs`,
    comparisonItems: [
      { aspect: "Hourly Rate", traditional: `$75-120/hr in ${city}`, cadcamx: "$8-25/hr" },
      { aspect: "Industry Experience", traditional: "Varies", cadcamx: `${industry} specialists` },
      { aspect: "Availability", traditional: "Limited local talent", cadcamx: "Immediate capacity" },
      { aspect: "Scalability", traditional: "Hiring delays", cadcamx: "Scale in days" },
    ],
    testimonial: {
      quote: `CADCAMX understands ${industry.toLowerCase()} requirements. Their team integrated seamlessly with our ${city} engineering group.`,
      role: "Engineering Manager",
      company: `${industry} Company, ${state}`,
    },
    faqs: [
      {
        question: `Do you have ${industry.toLowerCase()} experience?`,
        answer: `Yes, our team includes engineers with extensive ${industry.toLowerCase()} experience, familiar with industry standards, materials, and manufacturing processes specific to ${industryContext}.`,
      },
      {
        question: `How do you work with ${city} companies?`,
        answer: `We maintain overlap with ${abbr} business hours for real-time collaboration. Your dedicated project manager ensures smooth communication and timely delivery.`,
      },
      {
        question: `What CAD platforms do you use for ${industry.toLowerCase()}?`,
        answer: `We're proficient in all major platforms used in ${industry.toLowerCase()}: SolidWorks, CATIA, NX, Creo, AutoCAD, and others. We work in your preferred system.`,
      },
      {
        question: "How fast can you start?",
        answer: `We can typically begin ${industry.toLowerCase()} projects within 48-72 hours of kickoff, with dedicated resources assigned to your ${city} team.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: `${industry} specialists available`,
  };
}

// Generate all city + industry combination pages
export const cityIndustryPages: SEOPageData[] = cities.flatMap((cityInfo) =>
  industries.map((industry) =>
    generateCityIndustryPage(
      cityInfo.city,
      cityInfo.state,
      cityInfo.abbr,
      industry.name,
      industry.slug,
      industry.context
    )
  )
);
