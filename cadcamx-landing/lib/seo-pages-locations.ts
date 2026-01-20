import { SEOPageData } from "./seo-pages-data";

// Helper function to generate location-based pages
function generateLocationPage(
  city: string,
  state: string,
  stateAbbr: string,
  industry: string,
  industryContext: string
): SEOPageData {
  const slug = `cad-services-${city.toLowerCase().replace(/\s+/g, "-")}-${stateAbbr.toLowerCase()}`;
  const locationFull = `${city}, ${stateAbbr}`;

  return {
    slug,
    primaryKeyword: `CAD Services ${locationFull}`,
    secondaryKeywords: [
      `CAD outsourcing ${city}`,
      `engineering services ${locationFull}`,
      `${industry} CAD ${city}`,
      `drafting services ${stateAbbr}`,
      `3D modeling ${city}`,
      `CAM programming ${locationFull}`,
    ],
    context: `Location-targeted page for ${locationFull} ${industry} market`,
    targetAudience: `Engineering managers and business owners in ${locationFull} area`,
    industry: industry,
    software: ["SolidWorks", "AutoCAD", "CATIA", "Creo", "NX"],
    metaTitle: `CAD Services ${locationFull} | Engineering Outsourcing from $8/hr`,
    metaDescription: `Professional CAD drafting, 3D modeling & CAM programming for ${city} businesses. Serving ${industry} companies in ${state}. 98% client retention. Start from $8/hr.`,
    h1: `CAD & Engineering Services for ${locationFull}`,
    heroIntro: `CADCAMX provides professional CAD outsourcing services to ${industry} companies in ${city} and throughout ${state}. Get expert engineering support at a fraction of local costs while maintaining the quality your projects demand.`,
    heroBenefits: [
      `Dedicated team for ${city}-based projects`,
      "Same-day turnaround available",
      `${industry} industry expertise`,
      "US business hours support",
    ],
    ctaText: `Get Started in ${city}`,
    problemTitle: `Engineering Challenges Facing ${city} Businesses`,
    problemDescription: `${industry} companies in ${locationFull} face unique challenges with rising labor costs and talent shortages. Local CAD engineers command premium rates, project backlogs grow, and deadlines slip.`,
    painPoints: [
      `High cost of local CAD talent in ${city} ($75-150/hr)`,
      `Limited ${industry}-specialized engineers in ${state}`,
      "Long hiring cycles (3-6 months)",
      "Difficulty scaling for project peaks",
      "Training and software licensing overhead",
    ],
    solutionTitle: `Your ${city} Engineering Partner`,
    solutionDescription: `CADCAMX serves as your dedicated offshore engineering team, providing ${city} businesses with instant access to skilled CAD professionals who understand ${industry} requirements and US standards.`,
    solutionHighlights: [
      "Overlap with US Eastern/Central/Pacific time zones",
      `Experience with ${industry} projects`,
      "ITAR-compliant workflows available",
      "Direct communication - no middlemen",
    ],
    features: [
      {
        title: "2D Drafting",
        description: `Production drawings, shop drawings, and technical documentation for ${city} manufacturers.`,
        icon: "FaDraftingCompass",
      },
      {
        title: "3D Modeling",
        description: `Parametric and surface modeling in SolidWorks, CATIA, and Creo for ${industry} applications.`,
        icon: "FaCube",
      },
      {
        title: "CAM Programming",
        description: `CNC programming and toolpath optimization for ${state} machine shops.`,
        icon: "FaCogs",
      },
      {
        title: "FEA Analysis",
        description: `Structural and thermal analysis to validate designs before manufacturing.`,
        icon: "FaChartLine",
      },
    ],
    useCaseTitle: `How ${city} Companies Use CADCAMX`,
    useCaseDescription: `From startups to established manufacturers, ${industry} businesses across ${state} leverage our services to accelerate their engineering workflows.`,
    useCaseScenarios: [
      `${city} startup needed 50 production drawings in 2 weeks - delivered on time`,
      `${state} manufacturer reduced CAD costs by 65% with dedicated team`,
      `${industry} company cleared 6-month backlog in 8 weeks`,
      "Legacy drawing conversion from paper to CAD",
    ],
    comparisonTitle: `Local vs Offshore: ${city} Cost Analysis`,
    comparisonItems: [
      {
        aspect: "Hourly Rate",
        traditional: `$75-150/hr in ${city}`,
        cadcamx: "$8-25/hr",
      },
      {
        aspect: "Hiring Time",
        traditional: "3-6 months",
        cadcamx: "Start in 48 hours",
      },
      {
        aspect: "Scaling",
        traditional: "Months to add staff",
        cadcamx: "Add engineers in days",
      },
      {
        aspect: "Software Costs",
        traditional: "$15K+/year per seat",
        cadcamx: "Included",
      },
    ],
    testimonial: {
      quote: `CADCAMX has been instrumental in helping us meet tight deadlines. Their team understands ${industry} requirements and delivers quality work consistently.`,
      role: "Engineering Director",
      company: `${industry} Company, ${state}`,
    },
    faqs: [
      {
        question: `How do you handle time zone differences with ${city}?`,
        answer: `Our team maintains significant overlap with US business hours. We have engineers available during ${city} working hours for real-time collaboration, with additional coverage for urgent requests.`,
      },
      {
        question: `Do you have experience with ${industry} projects?`,
        answer: `Yes, we have extensive experience in ${industry} applications including specific standards, tolerances, and documentation requirements common in this sector.`,
      },
      {
        question: `Can you work with our existing ${city}-based team?`,
        answer: `Absolutely. We integrate seamlessly with your in-house engineers, using your preferred file formats, CAD systems, and communication tools.`,
      },
      {
        question: "How do you ensure quality for US projects?",
        answer:
          "We follow US engineering standards (ASME, ANSI), implement multi-level QC reviews, and maintain detailed revision tracking. Our 98% client retention speaks to our quality commitment.",
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: `Special rates available for ${city} businesses with ongoing projects`,
  };
}

// Generate state-level pages
function generateStatePage(
  state: string,
  stateAbbr: string,
  industries: string[],
  majorCities: string[]
): SEOPageData {
  const slug = `cad-services-${state.toLowerCase().replace(/\s+/g, "-")}`;
  const primaryIndustry = industries[0];

  return {
    slug,
    primaryKeyword: `CAD Services ${state}`,
    secondaryKeywords: [
      `CAD outsourcing ${stateAbbr}`,
      `engineering services ${state}`,
      ...industries.map((i) => `${i} CAD ${stateAbbr}`),
      `3D modeling ${state}`,
    ],
    context: `State-level page for ${state} market`,
    targetAudience: `Engineering managers and business owners throughout ${state}`,
    industry: primaryIndustry,
    software: ["SolidWorks", "AutoCAD", "CATIA", "Creo", "NX", "Mastercam"],
    metaTitle: `CAD Services ${state} | Engineering Outsourcing ${stateAbbr} | From $8/hr`,
    metaDescription: `Professional CAD drafting & 3D modeling for ${state} businesses. Serving ${industries.join(", ")} industries. 98% retention rate. Starting at $8/hr.`,
    h1: `Professional CAD Services for ${state} Businesses`,
    heroIntro: `CADCAMX delivers expert CAD outsourcing services to companies across ${state}. From ${majorCities[0]} to ${majorCities[majorCities.length - 1]}, we help ${stateAbbr} businesses reduce engineering costs while accelerating project timelines.`,
    heroBenefits: [
      `Serving all major ${stateAbbr} cities`,
      `${industries.join(", ")} expertise`,
      "US time zone overlap",
      "From $8/hr - 70% cost savings",
    ],
    ctaText: `Get Started in ${stateAbbr}`,
    problemTitle: `Engineering Challenges in ${state}`,
    problemDescription: `${state}'s ${primaryIndustry} sector faces mounting pressure from skilled labor shortages and rising costs. Companies struggle to find qualified CAD engineers while project demands continue to grow.`,
    painPoints: [
      `CAD engineer shortage across ${stateAbbr}`,
      "Local rates of $75-150/hour",
      "6+ month hiring cycles",
      "High turnover in engineering roles",
      "Software licensing burden",
    ],
    solutionTitle: `Your ${state} Engineering Extension`,
    solutionDescription: `Partner with CADCAMX to access a dedicated engineering team that understands ${state}'s key industries. We become an extension of your ${stateAbbr} operation, delivering quality work at offshore rates.`,
    solutionHighlights: [
      `Deep experience in ${industries.join(", ")}`,
      "Immediate capacity - no hiring delays",
      "Flexible scaling for project peaks",
      "US engineering standards compliance",
    ],
    features: [
      {
        title: "2D Technical Drafting",
        description: `Production-ready drawings meeting ${primaryIndustry} standards for ${stateAbbr} manufacturers.`,
        icon: "FaDraftingCompass",
      },
      {
        title: "3D CAD Modeling",
        description: `Parametric modeling in all major platforms for ${state} product development teams.`,
        icon: "FaCube",
      },
      {
        title: "CAM & CNC Programming",
        description: `Toolpath development and G-code generation for ${stateAbbr} machine shops.`,
        icon: "FaCogs",
      },
      {
        title: "Engineering Analysis",
        description: `FEA, CFD, and tolerance analysis supporting ${state} engineering projects.`,
        icon: "FaChartLine",
      },
    ],
    useCaseTitle: `Serving ${state}'s Key Industries`,
    useCaseDescription: `From ${majorCities[0]}'s ${industries[0]} sector to ${majorCities[1]}'s manufacturers, CADCAMX supports diverse engineering needs across ${stateAbbr}.`,
    useCaseScenarios: [
      `${majorCities[0]} ${industries[0]} company - 200+ drawings/month`,
      `${majorCities[1]} manufacturer - dedicated 5-person team`,
      `${stateAbbr} startup - prototype to production support`,
      `${state} job shop - overflow CAM programming`,
    ],
    comparisonTitle: `${state} Cost Comparison`,
    comparisonItems: [
      {
        aspect: "Engineer Cost",
        traditional: `$80-140/hr in ${stateAbbr}`,
        cadcamx: "$8-25/hr",
      },
      {
        aspect: "Ramp-up Time",
        traditional: "4-6 months to hire",
        cadcamx: "48-hour start",
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
      quote: `As a ${state} manufacturer, finding reliable CAD support was always a challenge. CADCAMX solved that problem completely. Their team delivers consistent quality at a fraction of local costs.`,
      role: "VP Engineering",
      company: `Manufacturing Company, ${majorCities[0]}`,
    },
    faqs: [
      {
        question: `Do you work with companies throughout ${state}?`,
        answer: `Yes, we serve businesses across all of ${state}, from major metros like ${majorCities.join(", ")} to smaller manufacturing towns. Our remote model means location within ${stateAbbr} doesn't matter.`,
      },
      {
        question: `What ${state} industries do you specialize in?`,
        answer: `We have deep experience in ${state}'s key sectors including ${industries.join(", ")}. Our engineers understand the specific standards and requirements of these industries.`,
      },
      {
        question: "How do you handle communication across time zones?",
        answer: `We maintain 4-6 hours of overlap with ${stateAbbr} business hours daily. Project managers are available during your working hours, and we offer extended coverage for urgent needs.`,
      },
      {
        question: `Can you visit our ${state} facility?`,
        answer:
          "While we primarily work remotely, we can arrange periodic on-site visits for large engagements. Most clients find our video conferencing and screen-sharing tools provide effective collaboration without travel.",
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: `Volume discounts available for ${stateAbbr} companies with ongoing needs`,
  };
}

// Major US Cities with their primary industries
export const cityPages: SEOPageData[] = [
  // Michigan - Automotive Hub
  generateLocationPage("Detroit", "Michigan", "MI", "Automotive", "automotive manufacturing"),
  generateLocationPage("Grand Rapids", "Michigan", "MI", "Manufacturing", "furniture and automotive"),
  generateLocationPage("Ann Arbor", "Michigan", "MI", "Automotive R&D", "automotive research"),

  // Texas - Energy & Aerospace
  generateLocationPage("Houston", "Texas", "TX", "Oil & Gas", "energy sector"),
  generateLocationPage("Dallas", "Texas", "TX", "Aerospace", "defense and aerospace"),
  generateLocationPage("Austin", "Texas", "TX", "Technology", "tech manufacturing"),
  generateLocationPage("San Antonio", "Texas", "TX", "Aerospace", "military and aerospace"),
  generateLocationPage("Fort Worth", "Texas", "TX", "Aerospace", "defense manufacturing"),

  // California - Tech & Aerospace
  generateLocationPage("Los Angeles", "California", "CA", "Aerospace", "aerospace and entertainment"),
  generateLocationPage("San Diego", "California", "CA", "Defense", "defense and biotech"),
  generateLocationPage("San Jose", "California", "CA", "Technology", "silicon valley tech"),
  generateLocationPage("San Francisco", "California", "CA", "Technology", "tech startups"),
  generateLocationPage("Irvine", "California", "CA", "Medical Devices", "medical technology"),
  generateLocationPage("Long Beach", "California", "CA", "Aerospace", "aerospace manufacturing"),

  // Ohio - Manufacturing Belt
  generateLocationPage("Cleveland", "Ohio", "OH", "Manufacturing", "industrial manufacturing"),
  generateLocationPage("Cincinnati", "Ohio", "OH", "Manufacturing", "machine tools and aerospace"),
  generateLocationPage("Columbus", "Ohio", "OH", "Manufacturing", "diverse manufacturing"),
  generateLocationPage("Dayton", "Ohio", "OH", "Aerospace", "aerospace and defense"),

  // Washington - Aerospace
  generateLocationPage("Seattle", "Washington", "WA", "Aerospace", "commercial aerospace"),
  generateLocationPage("Everett", "Washington", "WA", "Aerospace", "aircraft manufacturing"),
  generateLocationPage("Tacoma", "Washington", "WA", "Manufacturing", "industrial equipment"),

  // Illinois - Industrial
  generateLocationPage("Chicago", "Illinois", "IL", "Industrial", "diverse industrial"),
  generateLocationPage("Rockford", "Illinois", "IL", "Aerospace", "aerospace fasteners"),
  generateLocationPage("Peoria", "Illinois", "IL", "Heavy Equipment", "construction equipment"),

  // Pennsylvania - Manufacturing
  generateLocationPage("Philadelphia", "Pennsylvania", "PA", "Manufacturing", "pharmaceuticals and manufacturing"),
  generateLocationPage("Pittsburgh", "Pennsylvania", "PA", "Manufacturing", "steel and robotics"),

  // Indiana - Automotive
  generateLocationPage("Indianapolis", "Indiana", "IN", "Automotive", "motorsports and automotive"),
  generateLocationPage("Fort Wayne", "Indiana", "IN", "Manufacturing", "defense and automotive"),

  // North Carolina - Aerospace & Automotive
  generateLocationPage("Charlotte", "North Carolina", "NC", "Aerospace", "aerospace and automotive"),
  generateLocationPage("Raleigh", "North Carolina", "NC", "Technology", "research triangle"),
  generateLocationPage("Greensboro", "North Carolina", "NC", "Aerospace", "aviation"),

  // Georgia
  generateLocationPage("Atlanta", "Georgia", "GA", "Aerospace", "aerospace and automotive"),
  generateLocationPage("Savannah", "Georgia", "GA", "Aerospace", "aircraft manufacturing"),

  // Arizona - Aerospace
  generateLocationPage("Phoenix", "Arizona", "AZ", "Aerospace", "aerospace and semiconductor"),
  generateLocationPage("Tucson", "Arizona", "AZ", "Aerospace", "defense and optics"),
  generateLocationPage("Mesa", "Arizona", "AZ", "Aerospace", "aircraft and defense"),

  // Florida - Aerospace
  generateLocationPage("Miami", "Florida", "FL", "Aerospace", "aviation MRO"),
  generateLocationPage("Orlando", "Florida", "FL", "Aerospace", "simulation and defense"),
  generateLocationPage("Tampa", "Florida", "FL", "Manufacturing", "defense and medical"),
  generateLocationPage("Melbourne", "Florida", "FL", "Aerospace", "space coast"),

  // Massachusetts - Medical & Tech
  generateLocationPage("Boston", "Massachusetts", "MA", "Medical Devices", "biotech and medical"),
  generateLocationPage("Worcester", "Massachusetts", "MA", "Manufacturing", "precision manufacturing"),
  generateLocationPage("Cambridge", "Massachusetts", "MA", "Biotechnology", "biotech research"),

  // Wisconsin - Manufacturing
  generateLocationPage("Milwaukee", "Wisconsin", "WI", "Manufacturing", "industrial equipment"),
  generateLocationPage("Madison", "Wisconsin", "WI", "Medical Devices", "medical technology"),

  // Minnesota - Medical
  generateLocationPage("Minneapolis", "Minnesota", "MN", "Medical Devices", "medical device hub"),
  generateLocationPage("Rochester", "Minnesota", "MN", "Medical", "healthcare technology"),

  // Connecticut - Aerospace
  generateLocationPage("Hartford", "Connecticut", "CT", "Aerospace", "jet engines and aerospace"),
  generateLocationPage("New Haven", "Connecticut", "CT", "Manufacturing", "precision manufacturing"),

  // Kansas - Aviation
  generateLocationPage("Wichita", "Kansas", "KS", "Aviation", "general aviation manufacturing"),

  // Alabama - Aerospace & Automotive
  generateLocationPage("Huntsville", "Alabama", "AL", "Aerospace", "space and defense"),
  generateLocationPage("Birmingham", "Alabama", "AL", "Automotive", "automotive suppliers"),

  // South Carolina - Automotive & Aerospace
  generateLocationPage("Charleston", "South Carolina", "SC", "Aerospace", "aircraft manufacturing"),
  generateLocationPage("Greenville", "South Carolina", "SC", "Automotive", "automotive and aerospace"),

  // Tennessee - Automotive
  generateLocationPage("Nashville", "Tennessee", "TN", "Automotive", "automotive suppliers"),
  generateLocationPage("Chattanooga", "Tennessee", "TN", "Automotive", "automotive manufacturing"),

  // New York
  generateLocationPage("New York City", "New York", "NY", "Manufacturing", "diverse industries"),
  generateLocationPage("Buffalo", "New York", "NY", "Manufacturing", "aerospace and automotive"),
  generateLocationPage("Rochester", "New York", "NY", "Optics", "precision optics"),

  // Missouri
  generateLocationPage("St Louis", "Missouri", "MO", "Aerospace", "defense and aerospace"),
  generateLocationPage("Kansas City", "Missouri", "MO", "Manufacturing", "automotive and aerospace"),

  // Colorado
  generateLocationPage("Denver", "Colorado", "CO", "Aerospace", "aerospace and defense"),
  generateLocationPage("Colorado Springs", "Colorado", "CO", "Defense", "military and space"),

  // Oregon
  generateLocationPage("Portland", "Oregon", "OR", "Technology", "tech and manufacturing"),

  // Nevada
  generateLocationPage("Las Vegas", "Nevada", "NV", "Manufacturing", "gaming and aerospace"),
  generateLocationPage("Reno", "Nevada", "NV", "Manufacturing", "distribution and tech"),

  // Utah
  generateLocationPage("Salt Lake City", "Utah", "UT", "Aerospace", "aerospace and defense"),

  // New Mexico
  generateLocationPage("Albuquerque", "New Mexico", "NM", "Aerospace", "defense and labs"),

  // Kentucky
  generateLocationPage("Louisville", "Kentucky", "KY", "Automotive", "automotive and appliances"),

  // Oklahoma
  generateLocationPage("Oklahoma City", "Oklahoma", "OK", "Aerospace", "aviation MRO"),
  generateLocationPage("Tulsa", "Oklahoma", "OK", "Aerospace", "aerospace manufacturing"),
];

// US State Pages
export const statePages: SEOPageData[] = [
  generateStatePage("Michigan", "MI", ["Automotive", "Manufacturing", "Defense"], ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing"]),
  generateStatePage("Texas", "TX", ["Oil & Gas", "Aerospace", "Technology"], ["Houston", "Dallas", "Austin", "San Antonio"]),
  generateStatePage("California", "CA", ["Aerospace", "Technology", "Medical Devices"], ["Los Angeles", "San Diego", "San Jose", "San Francisco"]),
  generateStatePage("Ohio", "OH", ["Manufacturing", "Aerospace", "Automotive"], ["Cleveland", "Cincinnati", "Columbus", "Dayton"]),
  generateStatePage("Washington", "WA", ["Aerospace", "Technology", "Manufacturing"], ["Seattle", "Everett", "Tacoma", "Spokane"]),
  generateStatePage("Illinois", "IL", ["Industrial Equipment", "Aerospace", "Manufacturing"], ["Chicago", "Rockford", "Peoria", "Aurora"]),
  generateStatePage("Pennsylvania", "PA", ["Manufacturing", "Pharmaceuticals", "Robotics"], ["Philadelphia", "Pittsburgh", "Allentown", "Erie"]),
  generateStatePage("Indiana", "IN", ["Automotive", "Manufacturing", "Defense"], ["Indianapolis", "Fort Wayne", "South Bend", "Evansville"]),
  generateStatePage("North Carolina", "NC", ["Aerospace", "Automotive", "Technology"], ["Charlotte", "Raleigh", "Greensboro", "Durham"]),
  generateStatePage("Georgia", "GA", ["Aerospace", "Automotive", "Manufacturing"], ["Atlanta", "Savannah", "Augusta", "Macon"]),
  generateStatePage("Arizona", "AZ", ["Aerospace", "Semiconductor", "Defense"], ["Phoenix", "Tucson", "Mesa", "Chandler"]),
  generateStatePage("Florida", "FL", ["Aerospace", "Defense", "Medical Devices"], ["Miami", "Orlando", "Tampa", "Melbourne"]),
  generateStatePage("Massachusetts", "MA", ["Medical Devices", "Biotechnology", "Defense"], ["Boston", "Worcester", "Cambridge", "Springfield"]),
  generateStatePage("Wisconsin", "WI", ["Manufacturing", "Medical Devices", "Industrial"], ["Milwaukee", "Madison", "Green Bay", "Racine"]),
  generateStatePage("Minnesota", "MN", ["Medical Devices", "Manufacturing", "Aerospace"], ["Minneapolis", "Rochester", "St Paul", "Duluth"]),
  generateStatePage("Connecticut", "CT", ["Aerospace", "Defense", "Manufacturing"], ["Hartford", "New Haven", "Stamford", "Bridgeport"]),
  generateStatePage("Kansas", "KS", ["Aviation", "Manufacturing", "Aerospace"], ["Wichita", "Kansas City", "Topeka", "Overland Park"]),
  generateStatePage("Alabama", "AL", ["Aerospace", "Automotive", "Defense"], ["Huntsville", "Birmingham", "Mobile", "Montgomery"]),
  generateStatePage("South Carolina", "SC", ["Automotive", "Aerospace", "Manufacturing"], ["Charleston", "Greenville", "Columbia", "Spartanburg"]),
  generateStatePage("Tennessee", "TN", ["Automotive", "Manufacturing", "Healthcare"], ["Nashville", "Memphis", "Chattanooga", "Knoxville"]),
  generateStatePage("New York", "NY", ["Manufacturing", "Aerospace", "Technology"], ["New York City", "Buffalo", "Rochester", "Albany"]),
  generateStatePage("Missouri", "MO", ["Aerospace", "Automotive", "Manufacturing"], ["St Louis", "Kansas City", "Springfield", "Columbia"]),
  generateStatePage("Colorado", "CO", ["Aerospace", "Defense", "Technology"], ["Denver", "Colorado Springs", "Boulder", "Fort Collins"]),
  generateStatePage("Oregon", "OR", ["Technology", "Manufacturing", "Aerospace"], ["Portland", "Eugene", "Salem", "Hillsboro"]),
  generateStatePage("Nevada", "NV", ["Manufacturing", "Gaming", "Aerospace"], ["Las Vegas", "Reno", "Henderson", "Sparks"]),
  generateStatePage("Utah", "UT", ["Aerospace", "Technology", "Manufacturing"], ["Salt Lake City", "Provo", "Ogden", "St George"]),
  generateStatePage("New Mexico", "NM", ["Aerospace", "Defense", "Research"], ["Albuquerque", "Santa Fe", "Las Cruces", "Rio Rancho"]),
  generateStatePage("Kentucky", "KY", ["Automotive", "Aerospace", "Manufacturing"], ["Louisville", "Lexington", "Bowling Green", "Covington"]),
  generateStatePage("Oklahoma", "OK", ["Aerospace", "Oil & Gas", "Manufacturing"], ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"]),
  generateStatePage("New Jersey", "NJ", ["Pharmaceuticals", "Manufacturing", "Defense"], ["Newark", "Jersey City", "Paterson", "Trenton"]),
];

// Export all location pages combined
export const locationPages: SEOPageData[] = [...statePages, ...cityPages];
