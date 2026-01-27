import { SEOPageData } from "./seo-pages-data";

// ===========================================
// CERTIFICATION & COMPLIANCE PAGES (~50 pages)
// Industry certifications and compliance-focused CAD services
// ===========================================

interface CertificationDef {
  name: string;
  slug: string;
  fullName: string;
  industry: string;
  description: string;
  requirements: string[];
  deliverables: string[];
  keywords: string[];
}

const certifications: CertificationDef[] = [
  // Automotive
  {
    name: "IATF 16949",
    slug: "iatf-16949",
    fullName: "IATF 16949:2016 Automotive Quality Management",
    industry: "Automotive",
    description: "Quality management system for automotive production and service parts",
    requirements: [
      "APQP (Advanced Product Quality Planning)",
      "PPAP (Production Part Approval Process)",
      "FMEA (Failure Mode Effects Analysis)",
      "MSA (Measurement System Analysis)",
      "SPC (Statistical Process Control)",
    ],
    deliverables: ["PPAP packages", "Control plans", "DFMEA documentation", "Process flow diagrams"],
    keywords: ["IATF 16949 CAD", "automotive quality CAD", "PPAP documentation"],
  },
  {
    name: "AIAG Standards",
    slug: "aiag-standards",
    fullName: "Automotive Industry Action Group Standards",
    industry: "Automotive",
    description: "Industry standards for automotive supplier quality and documentation",
    requirements: [
      "APQP requirements",
      "PPAP submission levels",
      "Core tool compliance",
      "Supplier quality requirements",
    ],
    deliverables: ["APQP deliverables", "PPAP Level 1-5 packages", "PSW documentation", "Dimensional reports"],
    keywords: ["AIAG compliant CAD", "automotive supplier CAD", "APQP services"],
  },

  // Aerospace
  {
    name: "AS9100D",
    slug: "as9100d",
    fullName: "AS9100D Aerospace Quality Management System",
    industry: "Aerospace",
    description: "Quality management system for aerospace manufacturing and MRO",
    requirements: [
      "Configuration management",
      "First Article Inspection (FAI)",
      "Risk management",
      "Product safety",
      "Counterfeit part prevention",
    ],
    deliverables: ["AS9102 FAI reports", "Configuration documentation", "Risk assessments", "Traceability records"],
    keywords: ["AS9100D CAD services", "aerospace quality CAD", "FAI documentation"],
  },
  {
    name: "ITAR Compliance",
    slug: "itar-compliance",
    fullName: "International Traffic in Arms Regulations",
    industry: "Defense",
    description: "Export control for defense articles and services",
    requirements: [
      "US person handling",
      "Controlled technical data",
      "Export license compliance",
      "Secure data handling",
      "Access control",
    ],
    deliverables: ["ITAR compliant drawings", "Controlled documentation", "Secure file transfer", "Access logs"],
    keywords: ["ITAR compliant CAD", "defense CAD services", "controlled technical data"],
  },
  {
    name: "NADCAP",
    slug: "nadcap",
    fullName: "National Aerospace and Defense Contractors Accreditation Program",
    industry: "Aerospace",
    description: "Special process accreditation for aerospace suppliers",
    requirements: [
      "Process capability",
      "Personnel qualification",
      "Equipment calibration",
      "Quality system integration",
    ],
    deliverables: ["Process documentation", "Qualification records", "Capability studies", "Audit support"],
    keywords: ["NADCAP CAD support", "aerospace special process", "process documentation"],
  },
  {
    name: "MIL-STD",
    slug: "mil-std",
    fullName: "Military Standards",
    industry: "Defense",
    description: "US Department of Defense standards for military equipment",
    requirements: [
      "MIL-STD-31000 Technical Data Packages",
      "MIL-STD-130 Identification Marking",
      "MIL-STD-973 Configuration Management",
      "Drawing format compliance",
    ],
    deliverables: ["TDP packages", "MIL-STD drawings", "Marking requirements", "CM documentation"],
    keywords: ["MIL-STD CAD", "military drawing standards", "defense technical data"],
  },

  // Medical
  {
    name: "ISO 13485",
    slug: "iso-13485",
    fullName: "ISO 13485:2016 Medical Device Quality Management",
    industry: "Medical Devices",
    description: "Quality management system for medical device manufacturing",
    requirements: [
      "Design controls",
      "Risk management (ISO 14971)",
      "Document control",
      "Traceability",
      "Validation requirements",
    ],
    deliverables: ["Design History File (DHF)", "Risk analysis", "Design verification", "Validation protocols"],
    keywords: ["ISO 13485 CAD", "medical device CAD", "design controls"],
  },
  {
    name: "FDA 21 CFR 820",
    slug: "fda-21-cfr-820",
    fullName: "FDA Quality System Regulation",
    industry: "Medical Devices",
    description: "FDA requirements for medical device design and manufacturing",
    requirements: [
      "Design controls (820.30)",
      "Document controls",
      "Design review",
      "Design transfer",
      "Design validation",
    ],
    deliverables: ["Design control documentation", "DHF support", "Design review records", "Validation reports"],
    keywords: ["FDA compliant CAD", "21 CFR 820 design", "medical device compliance"],
  },
  {
    name: "IEC 60601",
    slug: "iec-60601",
    fullName: "IEC 60601 Medical Electrical Equipment Safety",
    industry: "Medical Devices",
    description: "Safety standards for medical electrical equipment",
    requirements: [
      "Basic safety requirements",
      "Essential performance",
      "Risk management integration",
      "EMC compliance",
    ],
    deliverables: ["Compliance documentation", "Safety analysis", "Test specifications", "Design files"],
    keywords: ["IEC 60601 design", "medical electrical CAD", "equipment safety"],
  },

  // General Manufacturing
  {
    name: "ISO 9001",
    slug: "iso-9001",
    fullName: "ISO 9001:2015 Quality Management System",
    industry: "Manufacturing",
    description: "International quality management standard for all industries",
    requirements: [
      "Document control",
      "Design and development",
      "Process control",
      "Continual improvement",
    ],
    deliverables: ["Controlled drawings", "Design documentation", "Process records", "Quality records"],
    keywords: ["ISO 9001 CAD", "quality management CAD", "controlled documentation"],
  },
  {
    name: "CE Marking",
    slug: "ce-marking",
    fullName: "CE Marking European Conformity",
    industry: "Manufacturing",
    description: "European product safety compliance marking",
    requirements: [
      "Essential requirements compliance",
      "Technical file creation",
      "Risk assessment",
      "Declaration of conformity",
    ],
    deliverables: ["Technical file support", "Risk assessment", "Design documentation", "Test specifications"],
    keywords: ["CE marking CAD", "European compliance", "technical file"],
  },
  {
    name: "UL Certification",
    slug: "ul-certification",
    fullName: "UL Product Safety Certification",
    industry: "Electronics",
    description: "Product safety testing and certification for North America",
    requirements: [
      "Safety testing requirements",
      "Material compliance",
      "Construction requirements",
      "Marking requirements",
    ],
    deliverables: ["UL file documentation", "Material specifications", "Construction drawings", "Test support"],
    keywords: ["UL certified design", "product safety CAD", "UL compliance"],
  },

  // Oil & Gas
  {
    name: "API Standards",
    slug: "api-standards",
    fullName: "American Petroleum Institute Standards",
    industry: "Oil & Gas",
    description: "Standards for petroleum and natural gas equipment",
    requirements: [
      "API specification compliance",
      "Material requirements",
      "Testing requirements",
      "Documentation standards",
    ],
    deliverables: ["API compliant drawings", "Material certifications", "Test documentation", "Data books"],
    keywords: ["API standard CAD", "oil gas CAD", "petroleum equipment design"],
  },
  {
    name: "ASME BPVC",
    slug: "asme-bpvc",
    fullName: "ASME Boiler and Pressure Vessel Code",
    industry: "Industrial",
    description: "Standards for pressure equipment design and fabrication",
    requirements: [
      "Design by rule/analysis",
      "Material selection",
      "Fabrication requirements",
      "Inspection and testing",
    ],
    deliverables: ["ASME drawings", "Stress analysis", "U-stamp documentation", "MDR support"],
    keywords: ["ASME BPVC CAD", "pressure vessel design", "ASME code design"],
  },
];

const certificationServices = [
  { name: "CAD Design", slug: "cad-design" },
  { name: "Documentation", slug: "documentation" },
  { name: "Drafting", slug: "drafting" },
];

// ===========================================
// GENERATOR FUNCTIONS
// ===========================================

function generateCertificationPage(cert: CertificationDef): SEOPageData {
  const slug = `${cert.slug}-cad-services`;

  return {
    slug,
    primaryKeyword: `${cert.name} CAD Services`,
    secondaryKeywords: [
      ...cert.keywords,
      `${cert.name.toLowerCase()} compliant design`,
      `${cert.name.toLowerCase()} documentation services`,
      `${cert.industry.toLowerCase()} ${cert.name.toLowerCase()}`,
    ],
    context: cert.description,
    targetAudience: `${cert.industry} companies requiring ${cert.name} compliance`,
    industry: cert.industry,
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX"],
    metaTitle: `${cert.name} CAD Services | ${cert.industry} Compliant Design | CADCAMX`,
    metaDescription: `Professional ${cert.name} compliant CAD services for ${cert.industry.toLowerCase()}. ${cert.deliverables.slice(0, 2).join(", ")}. Certified engineers from $10/hr.`,
    h1: `${cert.name} Compliant CAD Services`,
    heroIntro: `CADCAMX provides ${cert.name} compliant CAD services for ${cert.industry.toLowerCase()} companies. Our engineers understand ${cert.fullName} requirements and deliver ${cert.deliverables[0].toLowerCase()} that meet certification standards.`,
    heroBenefits: [
      `${cert.name} trained engineers`,
      `${cert.deliverables[0]} included`,
      `${cert.industry} industry expertise`,
      "Starting at $10/hr",
    ],
    ctaText: `Get ${cert.name} Quote`,
    problemTitle: `${cert.name} Compliance Challenges`,
    problemDescription: `${cert.industry} companies face strict ${cert.name} requirements. Finding CAD engineers who understand ${cert.fullName} standards is difficult and expensive.`,
    painPoints: [
      `${cert.name} knowledge required for all deliverables`,
      `High cost of compliance-trained engineers`,
      ...cert.requirements.slice(0, 3).map((req) => `${req} documentation needs`),
    ],
    solutionTitle: `${cert.name} Compliant Engineering`,
    solutionDescription: `CADCAMX engineers are trained in ${cert.name} requirements. We deliver ${cert.deliverables.slice(0, 3).join(", ").toLowerCase()} that meet your certification needs.`,
    solutionHighlights: [
      `${cert.name} trained team`,
      ...cert.deliverables.slice(0, 3),
      "Compliance documentation included",
    ],
    features: cert.requirements.slice(0, 4).map((req, i) => ({
      title: req,
      description: `Full support for ${req.toLowerCase()} requirements under ${cert.name}.`,
      icon: ["FaCheckCircle", "FaFileAlt", "FaShieldAlt", "FaCogs"][i] || "FaCheckCircle",
    })),
    useCaseTitle: `${cert.name} CAD Service Applications`,
    useCaseDescription: `${cert.industry} companies leverage our ${cert.name} expertise across design and documentation needs.`,
    useCaseScenarios: [
      `${cert.industry} OEM - ${cert.deliverables[0].toLowerCase()} for new product`,
      `${cert.industry} supplier - ${cert.name} audit preparation support`,
      `${cert.industry} company - certification gap analysis and remediation`,
      `${cert.industry} startup - establishing ${cert.name} compliant processes`,
    ],
    comparisonTitle: `${cert.name} CAD Service Comparison`,
    comparisonItems: [
      {
        aspect: `${cert.name} Knowledge`,
        traditional: "Often lacking",
        cadcamx: "Trained team",
      },
      {
        aspect: "Documentation",
        traditional: "Extra cost",
        cadcamx: "Included",
      },
      {
        aspect: "Hourly Rate",
        traditional: `$80-150/hr for ${cert.industry.toLowerCase()} specialists`,
        cadcamx: "$10-20/hr",
      },
      {
        aspect: "Audit Support",
        traditional: "Not available",
        cadcamx: "Available",
      },
    ],
    testimonial: {
      quote: `CADCAMX understood our ${cert.name} requirements from day one. Their ${cert.deliverables[0].toLowerCase()} passed audit without issues. Huge time saver.`,
      role: "Quality Manager",
      company: `${cert.industry} Company`,
    },
    faqs: [
      {
        question: `Do you understand ${cert.name} requirements?`,
        answer: `Yes. Our engineers are trained in ${cert.fullName} standards and deliver compliant ${cert.deliverables[0].toLowerCase()}.`,
      },
      {
        question: `What ${cert.name} deliverables do you provide?`,
        answer: `We provide ${cert.deliverables.join(", ").toLowerCase()}. All documentation meets ${cert.name} requirements.`,
      },
      {
        question: `Can you support ${cert.name} audits?`,
        answer: `Yes. We can assist with audit preparation, gap analysis, and documentation remediation for ${cert.name} compliance.`,
      },
      {
        question: `What are the ${cert.name} requirements you support?`,
        answer: `We support ${cert.requirements.join(", ")}. Our team understands all aspects of ${cert.name} compliance.`,
      },
    ],
    pricingStart: "$10/hr",
    pricingNote: `${cert.name} compliance documentation included`,
  };
}

function generateCertificationServicePage(
  cert: CertificationDef,
  service: { name: string; slug: string }
): SEOPageData {
  const slug = `${cert.slug}-${service.slug}`;

  return {
    slug,
    primaryKeyword: `${cert.name} ${service.name}`,
    secondaryKeywords: [
      `${cert.name.toLowerCase()} ${service.name.toLowerCase()} services`,
      `${cert.industry.toLowerCase()} ${service.name.toLowerCase()}`,
      `${cert.name.toLowerCase()} compliant ${service.name.toLowerCase()}`,
    ],
    context: `${service.name} services compliant with ${cert.name}`,
    targetAudience: `${cert.industry} companies needing ${cert.name} compliant ${service.name.toLowerCase()}`,
    industry: cert.industry,
    software: ["SolidWorks", "CATIA", "AutoCAD", "Creo", "NX"],
    metaTitle: `${cert.name} ${service.name} | Compliant Services | CADCAMX`,
    metaDescription: `Professional ${cert.name} compliant ${service.name.toLowerCase()} for ${cert.industry.toLowerCase()}. Trained engineers. From $10/hr.`,
    h1: `${cert.name} Compliant ${service.name}`,
    heroIntro: `CADCAMX provides ${cert.name} compliant ${service.name.toLowerCase()} for ${cert.industry.toLowerCase()} companies. Our engineers deliver ${service.name.toLowerCase()} meeting ${cert.fullName} standards.`,
    heroBenefits: [
      `${cert.name} compliant output`,
      `${cert.industry} expertise`,
      "Trained engineers",
      "From $10/hr",
    ],
    ctaText: `Get ${service.name} Quote`,
    problemTitle: `${cert.name} ${service.name} Challenges`,
    problemDescription: `${cert.industry} companies need ${service.name.toLowerCase()} that meets ${cert.name} requirements. Generic services often miss compliance needs.`,
    painPoints: [
      `${service.name} must meet ${cert.name} standards`,
      `Generic providers lack ${cert.industry.toLowerCase()} knowledge`,
      `Compliance rework is expensive`,
      `Audit findings from non-compliant ${service.name.toLowerCase()}`,
    ],
    solutionTitle: `${cert.name} ${service.name} Experts`,
    solutionDescription: `CADCAMX delivers ${service.name.toLowerCase()} that meets ${cert.name} requirements. No compliance rework needed.`,
    solutionHighlights: [
      `${cert.name} trained team`,
      `${cert.industry} expertise`,
      "First-time compliance",
      "Documentation included",
    ],
    features: [
      {
        title: `${cert.name} Compliant`,
        description: `All ${service.name.toLowerCase()} meets ${cert.fullName} requirements.`,
        icon: "FaCheckCircle",
      },
      {
        title: `${cert.industry} Expertise`,
        description: `Engineers understand ${cert.industry.toLowerCase()} standards and practices.`,
        icon: "FaIndustry",
      },
      {
        title: "Documentation",
        description: `Supporting documentation for ${cert.name} compliance included.`,
        icon: "FaFileAlt",
      },
      {
        title: "Audit Ready",
        description: `Deliverables ready for ${cert.name} audit review.`,
        icon: "FaShieldAlt",
      },
    ],
    useCaseTitle: `${cert.name} ${service.name} Applications`,
    useCaseDescription: `${cert.industry} companies use our ${cert.name} compliant ${service.name.toLowerCase()}.`,
    useCaseScenarios: [
      `${cert.industry} OEM - ${service.name.toLowerCase()} for new product`,
      `${cert.industry} supplier - ${cert.name} compliant deliverables`,
      `${cert.industry} company - audit preparation`,
      `${cert.industry} startup - establishing compliant processes`,
    ],
    comparisonTitle: `${cert.name} ${service.name} Comparison`,
    comparisonItems: [
      {
        aspect: "Compliance",
        traditional: "Variable",
        cadcamx: `${cert.name} compliant`,
      },
      {
        aspect: "Rework",
        traditional: "Often needed",
        cadcamx: "First-time right",
      },
      {
        aspect: "Documentation",
        traditional: "Extra cost",
        cadcamx: "Included",
      },
      {
        aspect: "Cost",
        traditional: "$75-150/hr",
        cadcamx: "From $10/hr",
      },
    ],
    testimonial: {
      quote: `Their ${cert.name} compliant ${service.name.toLowerCase()} saved us audit rework. Worth every penny.`,
      role: "Engineering Manager",
      company: `${cert.industry} Company`,
    },
    faqs: [
      {
        question: `Is your ${service.name.toLowerCase()} ${cert.name} compliant?`,
        answer: `Yes. All our ${service.name.toLowerCase()} for ${cert.industry.toLowerCase()} meets ${cert.name} requirements.`,
      },
      {
        question: `Do you include ${cert.name} documentation?`,
        answer: `Yes. Supporting documentation for ${cert.name} compliance is included with all deliverables.`,
      },
      {
        question: `How do you ensure ${cert.name} compliance?`,
        answer: `Our engineers are trained in ${cert.name} requirements. We follow compliant processes and verify all deliverables.`,
      },
    ],
    pricingStart: "$10/hr",
    pricingNote: `${cert.name} compliance included`,
  };
}

// ===========================================
// GENERATE ALL CERTIFICATION PAGES
// ===========================================

// Base certification pages (14 pages)
export const baseCertificationPages: SEOPageData[] = certifications.map((cert) =>
  generateCertificationPage(cert)
);

// Certification × Service pages (14 certs × 3 services = 42 pages, but filter relevant)
export const certificationServicePages: SEOPageData[] = certifications.flatMap((cert) =>
  certificationServices.map((service) => generateCertificationServicePage(cert, service))
);

// Combined export (~56 pages)
export const allCertificationPages: SEOPageData[] = [
  ...baseCertificationPages,
  ...certificationServicePages,
];

// Helper functions
export function getCertificationPagesByIndustry(industry: string): SEOPageData[] {
  return allCertificationPages.filter(
    (page) => page.industry?.toLowerCase() === industry.toLowerCase()
  );
}

export function getCertificationPagesByCert(certSlug: string): SEOPageData[] {
  return allCertificationPages.filter((page) => page.slug.includes(certSlug));
}
