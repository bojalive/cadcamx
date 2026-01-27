import { SEOPageData } from "./seo-pages-data";

// ===========================================
// SOFTWARE MIGRATION PAGES (~80 pages)
// CAD file conversion and software migration services
// ===========================================

interface SoftwarePlatform {
  name: string;
  slug: string;
  formats: string[];
  vendor: string;
}

const platforms: SoftwarePlatform[] = [
  { name: "SolidWorks", slug: "solidworks", formats: ["SLDPRT", "SLDASM", "SLDDRW"], vendor: "Dassault" },
  { name: "CATIA", slug: "catia", formats: ["CATPart", "CATProduct", "CATDrawing"], vendor: "Dassault" },
  { name: "Siemens NX", slug: "siemens-nx", formats: ["PRT"], vendor: "Siemens" },
  { name: "Creo", slug: "creo", formats: ["PRT", "ASM", "DRW"], vendor: "PTC" },
  { name: "AutoCAD", slug: "autocad", formats: ["DWG", "DXF"], vendor: "Autodesk" },
  { name: "Inventor", slug: "inventor", formats: ["IPT", "IAM", "IDW"], vendor: "Autodesk" },
  { name: "Fusion 360", slug: "fusion-360", formats: ["F3D", "F3Z"], vendor: "Autodesk" },
  { name: "Pro/ENGINEER", slug: "pro-engineer", formats: ["PRT", "ASM"], vendor: "PTC (Legacy)" },
];

// File format conversions
interface FileFormat {
  name: string;
  slug: string;
  extension: string;
  type: "native" | "neutral" | "legacy";
}

const fileFormats: FileFormat[] = [
  { name: "STEP", slug: "step", extension: ".stp/.step", type: "neutral" },
  { name: "IGES", slug: "iges", extension: ".igs/.iges", type: "neutral" },
  { name: "Parasolid", slug: "parasolid", extension: ".x_t/.x_b", type: "neutral" },
  { name: "DWG", slug: "dwg", extension: ".dwg", type: "native" },
  { name: "DXF", slug: "dxf", extension: ".dxf", type: "neutral" },
  { name: "STL", slug: "stl", extension: ".stl", type: "neutral" },
  { name: "PDF", slug: "pdf", extension: ".pdf", type: "neutral" },
  { name: "JT", slug: "jt", extension: ".jt", type: "neutral" },
];

// ===========================================
// GENERATOR FUNCTIONS
// ===========================================

function generateMigrationPage(
  fromPlatform: SoftwarePlatform,
  toPlatform: SoftwarePlatform
): SEOPageData {
  const slug = `convert-${fromPlatform.slug}-to-${toPlatform.slug}`;

  return {
    slug,
    primaryKeyword: `Convert ${fromPlatform.name} to ${toPlatform.name}`,
    secondaryKeywords: [
      `${fromPlatform.name.toLowerCase()} to ${toPlatform.name.toLowerCase()} conversion`,
      `migrate ${fromPlatform.name.toLowerCase()} to ${toPlatform.name.toLowerCase()}`,
      `${fromPlatform.formats[0]} to ${toPlatform.formats[0]} conversion`,
      `${fromPlatform.name.toLowerCase()} migration services`,
      `${toPlatform.name.toLowerCase()} conversion services`,
    ],
    context: `CAD migration from ${fromPlatform.name} to ${toPlatform.name}`,
    targetAudience: `Engineers migrating from ${fromPlatform.name} to ${toPlatform.name}`,
    industry: "Manufacturing",
    software: [fromPlatform.name, toPlatform.name],
    metaTitle: `Convert ${fromPlatform.name} to ${toPlatform.name} | Migration Services | CADCAMX`,
    metaDescription: `Professional ${fromPlatform.name} to ${toPlatform.name} conversion services. Migrate ${fromPlatform.formats[0]} files to ${toPlatform.formats[0]}. Preserve features & history. From $8/hr.`,
    h1: `${fromPlatform.name} to ${toPlatform.name} Conversion Services`,
    heroIntro: `CADCAMX provides expert ${fromPlatform.name} to ${toPlatform.name} migration services. Our certified engineers convert ${fromPlatform.formats.join(", ")} files to native ${toPlatform.name} format while preserving design intent, features, and parametric history where possible.`,
    heroBenefits: [
      `${fromPlatform.name} & ${toPlatform.name} certified engineers`,
      "Feature and parameter preservation",
      "Quality validation included",
      "Starting at $8/hr",
    ],
    ctaText: "Get Migration Quote",
    problemTitle: `${fromPlatform.name} to ${toPlatform.name} Migration Challenges`,
    problemDescription: `Migrating from ${fromPlatform.name} to ${toPlatform.name} involves more than simple file conversion. Design intent, parametric features, and drawing associations must be carefully preserved.`,
    painPoints: [
      `Loss of parametric features in direct conversion`,
      `Drawing association breaks between platforms`,
      `Material and appearance data loss`,
      `Assembly constraints translation issues`,
      `Geometry errors from tolerance differences`,
    ],
    solutionTitle: `Professional ${fromPlatform.name} to ${toPlatform.name} Migration`,
    solutionDescription: `CADCAMX engineers are certified in both ${fromPlatform.name} and ${toPlatform.name}. We rebuild models natively when needed to preserve full parametric functionality, not just dumb solids.`,
    solutionHighlights: [
      `Dual ${fromPlatform.name}/${toPlatform.name} certified team`,
      "Parametric feature preservation",
      "Drawing association maintenance",
      "Quality validation report included",
    ],
    features: [
      {
        title: "Native Rebuild Option",
        description: `Full parametric rebuild in ${toPlatform.name} preserving design intent and edit history.`,
        icon: "FaCube",
      },
      {
        title: "Feature Translation",
        description: `Intelligent mapping of ${fromPlatform.name} features to ${toPlatform.name} equivalents.`,
        icon: "FaExchangeAlt",
      },
      {
        title: "Drawing Migration",
        description: `Convert ${fromPlatform.formats[2] || "drawings"} to ${toPlatform.formats[2] || "native drawings"} with view associations.`,
        icon: "FaDraftingCompass",
      },
      {
        title: "Validation Report",
        description: "Geometry comparison and feature verification documentation.",
        icon: "FaCheckCircle",
      },
    ],
    useCaseTitle: `${fromPlatform.name} to ${toPlatform.name} Migration Scenarios`,
    useCaseDescription: `Companies migrate between CAD platforms for various business reasons. CADCAMX supports all migration scenarios.`,
    useCaseScenarios: [
      `Company switching from ${fromPlatform.name} to ${toPlatform.name} - full library migration`,
      `Supplier requirement to deliver ${toPlatform.name} native files`,
      `M&A integration - consolidating on ${toPlatform.name}`,
      `Legacy ${fromPlatform.name} files need updating in ${toPlatform.name}`,
    ],
    comparisonTitle: "Migration Approach Comparison",
    comparisonItems: [
      {
        aspect: "Direct STEP Export",
        traditional: "Loses all features",
        cadcamx: "Native rebuild available",
      },
      {
        aspect: "Drawings",
        traditional: "Manual recreation",
        cadcamx: "Associative migration",
      },
      {
        aspect: "Assemblies",
        traditional: "Constraint loss",
        cadcamx: "Constraint translation",
      },
      {
        aspect: "Validation",
        traditional: "None",
        cadcamx: "Full comparison report",
      },
    ],
    testimonial: {
      quote: `We migrated 5,000+ parts from ${fromPlatform.name} to ${toPlatform.name} with CADCAMX. Their team preserved parametric features we thought we'd lose. Saved months of manual work.`,
      role: "CAD Manager",
      company: "Manufacturing Company",
    },
    faqs: [
      {
        question: `Can you preserve parametric features when converting ${fromPlatform.name} to ${toPlatform.name}?`,
        answer: `Yes. Our engineers can rebuild models natively in ${toPlatform.name} to preserve parametric history, or translate features where possible. We discuss the best approach for your needs.`,
      },
      {
        question: `How do you handle ${fromPlatform.name} drawings in the migration?`,
        answer: `We can convert drawings with model associations intact, or recreate them in ${toPlatform.name} linked to the migrated models. Views, dimensions, and annotations are preserved.`,
      },
      {
        question: `What about assemblies with many components?`,
        answer: `Large assemblies are migrated with constraint relationships translated to ${toPlatform.name} mates. We validate assembly motion and interference after conversion.`,
      },
      {
        question: `How long does ${fromPlatform.name} to ${toPlatform.name} migration take?`,
        answer: `Depends on complexity and volume. Simple parts: same day. Complex assemblies: 1-2 weeks. Large libraries: we provide a detailed timeline after assessment.`,
      },
      {
        question: `What validation do you provide?`,
        answer: `Every migration includes geometry comparison, mass property verification, and visual inspection. We provide a detailed report documenting the conversion quality.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: "Volume discounts for large migration projects",
  };
}

function generateFileFormatPage(
  fromFormat: FileFormat,
  toFormat: FileFormat
): SEOPageData {
  const slug = `${fromFormat.slug}-to-${toFormat.slug}-conversion`;

  return {
    slug,
    primaryKeyword: `${fromFormat.name} to ${toFormat.name} Conversion`,
    secondaryKeywords: [
      `convert ${fromFormat.extension} to ${toFormat.extension}`,
      `${fromFormat.name.toLowerCase()} to ${toFormat.name.toLowerCase()} converter`,
      `${fromFormat.extension} conversion services`,
      `${toFormat.extension} conversion`,
    ],
    context: `CAD file format conversion from ${fromFormat.name} to ${toFormat.name}`,
    targetAudience: `Engineers needing ${fromFormat.name} to ${toFormat.name} conversion`,
    industry: "Manufacturing",
    software: ["SolidWorks", "CATIA", "NX", "Creo", "AutoCAD"],
    metaTitle: `${fromFormat.name} to ${toFormat.name} Conversion | ${fromFormat.extension} to ${toFormat.extension} | CADCAMX`,
    metaDescription: `Professional ${fromFormat.name} to ${toFormat.name} conversion services. Convert ${fromFormat.extension} files to ${toFormat.extension}. Quality validation included. From $8/hr.`,
    h1: `${fromFormat.name} to ${toFormat.name} Conversion Services`,
    heroIntro: `CADCAMX provides professional ${fromFormat.name} (${fromFormat.extension}) to ${toFormat.name} (${toFormat.extension}) conversion services. Our engineers ensure geometry accuracy, surface quality, and data integrity in every conversion.`,
    heroBenefits: [
      "Geometry accuracy validation",
      "Surface quality preservation",
      "Batch conversion available",
      "Starting at $8/hr",
    ],
    ctaText: "Get Conversion Quote",
    problemTitle: `${fromFormat.name} to ${toFormat.name} Conversion Challenges`,
    problemDescription: `Converting between ${fromFormat.name} and ${toFormat.name} formats can introduce geometry errors, surface gaps, or data loss without proper handling.`,
    painPoints: [
      "Geometry errors from tolerance mismatches",
      "Surface gaps and discontinuities",
      "Data loss in translation",
      "Color and material property loss",
      "Assembly structure issues",
    ],
    solutionTitle: `Professional ${fromFormat.name} to ${toFormat.name} Conversion`,
    solutionDescription: `CADCAMX engineers handle ${fromFormat.name} to ${toFormat.name} conversions with proper healing, validation, and quality assurance. Every file is checked for integrity.`,
    solutionHighlights: [
      "Geometry healing and repair",
      "Surface continuity validation",
      "Assembly structure preservation",
      "Quality report included",
    ],
    features: [
      {
        title: "Geometry Validation",
        description: `Every ${fromFormat.name} to ${toFormat.name} conversion is validated for accuracy.`,
        icon: "FaCheckCircle",
      },
      {
        title: "Healing & Repair",
        description: "Automatic and manual repair of geometry issues during conversion.",
        icon: "FaWrench",
      },
      {
        title: "Batch Processing",
        description: "High-volume conversion with consistent quality across all files.",
        icon: "FaLayerGroup",
      },
      {
        title: "Format Options",
        description: "Multiple output versions and options available.",
        icon: "FaFileAlt",
      },
    ],
    useCaseTitle: `${fromFormat.name} to ${toFormat.name} Use Cases`,
    useCaseDescription: "Common scenarios requiring file format conversion services.",
    useCaseScenarios: [
      `Supplier data exchange - ${fromFormat.name} to ${toFormat.name} for customer`,
      `Legacy file modernization - old ${fromFormat.name} files to ${toFormat.name}`,
      `Cross-platform collaboration - ${fromFormat.name} source to ${toFormat.name} for team`,
      `Manufacturing prep - ${fromFormat.name} design to ${toFormat.name} for production`,
    ],
    comparisonTitle: "Conversion Quality Comparison",
    comparisonItems: [
      {
        aspect: "Free Online Tools",
        traditional: "Geometry errors common",
        cadcamx: "Validated accuracy",
      },
      {
        aspect: "DIY Export",
        traditional: "Settings trial and error",
        cadcamx: "Optimized parameters",
      },
      {
        aspect: "Healing",
        traditional: "None",
        cadcamx: "Full repair included",
      },
      {
        aspect: "Validation",
        traditional: "Manual checking",
        cadcamx: "Automated + manual QC",
      },
    ],
    testimonial: {
      quote: `We needed thousands of ${fromFormat.name} files converted to ${toFormat.name}. CADCAMX delivered clean, validated files with zero geometry issues. Much better than DIY conversion.`,
      role: "Engineering Manager",
      company: "Manufacturing Company",
    },
    faqs: [
      {
        question: `How accurate is ${fromFormat.name} to ${toFormat.name} conversion?`,
        answer: `We validate every conversion for geometry accuracy. Typical tolerance is 0.001mm or better. Any issues are repaired before delivery.`,
      },
      {
        question: `Can you handle batch ${fromFormat.name} to ${toFormat.name} conversion?`,
        answer: `Yes. We handle high-volume conversions with consistent quality. Provide your files and we'll return converted ${toFormat.name} files with validation reports.`,
      },
      {
        question: `What if the ${fromFormat.name} file has errors?`,
        answer: `We can heal and repair geometry issues during conversion. Our engineers fix gaps, overlaps, and other problems to deliver clean ${toFormat.name} output.`,
      },
      {
        question: `How long does ${fromFormat.name} to ${toFormat.name} conversion take?`,
        answer: `Simple files: same day. Complex models: 1-3 days. Large batches: we provide timeline after assessment.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: "Batch pricing available for high-volume conversions",
  };
}

function generateLegacyMigrationPage(platform: SoftwarePlatform): SEOPageData {
  const slug = `legacy-${platform.slug}-conversion`;

  return {
    slug,
    primaryKeyword: `Legacy ${platform.name} Conversion`,
    secondaryKeywords: [
      `old ${platform.name.toLowerCase()} file conversion`,
      `${platform.name.toLowerCase()} legacy migration`,
      `convert old ${platform.formats[0].toLowerCase()} files`,
      `${platform.name.toLowerCase()} file recovery`,
    ],
    context: `Legacy ${platform.name} file conversion and migration`,
    targetAudience: `Companies with legacy ${platform.name} files needing conversion`,
    industry: "Manufacturing",
    software: [platform.name, "SolidWorks", "CATIA", "NX"],
    metaTitle: `Legacy ${platform.name} Conversion | Old File Migration | CADCAMX`,
    metaDescription: `Convert legacy ${platform.name} files to modern CAD formats. Recover old ${platform.formats[0]} files. Preserve design data. From $8/hr.`,
    h1: `Legacy ${platform.name} File Conversion Services`,
    heroIntro: `CADCAMX specializes in converting legacy ${platform.name} files to modern CAD platforms. Whether you have old ${platform.formats.join(", ")} files or obsolete versions, we can recover and migrate your valuable design data.`,
    heroBenefits: [
      "Convert obsolete file versions",
      "Recover corrupted files",
      "Migrate to modern platforms",
      "Preserve design history",
    ],
    ctaText: "Get Legacy Migration Quote",
    problemTitle: `Legacy ${platform.name} File Challenges`,
    problemDescription: `Old ${platform.name} files become inaccessible as software versions change. Legacy data represents years of engineering work that shouldn't be lost.`,
    painPoints: [
      `Can't open old ${platform.name} file versions`,
      "Legacy software no longer available",
      "Critical design data locked in old files",
      "No internal expertise for legacy formats",
      "Risk of permanent data loss",
    ],
    solutionTitle: `Legacy ${platform.name} Recovery & Migration`,
    solutionDescription: `CADCAMX maintains legacy ${platform.name} versions and expertise to recover your old files. We convert them to modern formats while preserving as much design information as possible.`,
    solutionHighlights: [
      `Access to legacy ${platform.name} versions`,
      "File recovery capabilities",
      "Modern format conversion",
      "Design data preservation",
    ],
    features: [
      {
        title: "Legacy Version Support",
        description: `Access to old ${platform.name} versions to open legacy files.`,
        icon: "FaHistory",
      },
      {
        title: "File Recovery",
        description: "Attempt recovery of corrupted or damaged legacy files.",
        icon: "FaUndo",
      },
      {
        title: "Modern Conversion",
        description: "Convert to current SolidWorks, CATIA, NX, or neutral formats.",
        icon: "FaExchangeAlt",
      },
      {
        title: "Data Preservation",
        description: "Preserve geometry, features, and metadata where possible.",
        icon: "FaDatabase",
      },
    ],
    useCaseTitle: `Legacy ${platform.name} Migration Scenarios`,
    useCaseDescription: "Common situations requiring legacy file conversion.",
    useCaseScenarios: [
      `Acquired company with old ${platform.name} files - need to integrate`,
      `Retired engineer's files - can't open without legacy software`,
      `Old product data for spare parts - need modern CAD access`,
      `Regulatory archive - convert legacy files for compliance`,
    ],
    comparisonTitle: "Legacy Migration Options",
    comparisonItems: [
      {
        aspect: "Buy Legacy Software",
        traditional: "Expensive, hard to find",
        cadcamx: "We have it",
      },
      {
        aspect: "Find Old Hardware",
        traditional: "Unreliable, unsupported",
        cadcamx: "Maintained systems",
      },
      {
        aspect: "Hire Consultant",
        traditional: "$150+/hr specialists",
        cadcamx: "From $8/hr",
      },
      {
        aspect: "DIY Recovery",
        traditional: "Risk of data loss",
        cadcamx: "Expert handling",
      },
    ],
    testimonial: {
      quote: `We had 20 years of ${platform.name} files we couldn't open anymore. CADCAMX recovered everything and converted to SolidWorks. Saved our product history.`,
      role: "Engineering Director",
      company: "Manufacturing Company",
    },
    faqs: [
      {
        question: `Can you open old ${platform.name} file versions?`,
        answer: `Yes. We maintain legacy ${platform.name} installations to access old file versions. Contact us with your file details and we'll confirm compatibility.`,
      },
      {
        question: `What if the legacy ${platform.name} file is corrupted?`,
        answer: `We can often recover data from corrupted files using specialized tools and techniques. Success depends on corruption extent - we assess before quoting.`,
      },
      {
        question: `What modern formats can you convert legacy ${platform.name} to?`,
        answer: `We can convert to SolidWorks, CATIA, NX, Creo, Inventor, or neutral formats (STEP, IGES, Parasolid). You choose the target platform.`,
      },
      {
        question: `How much design data is preserved in legacy conversion?`,
        answer: `Geometry is always preserved. Features and parametric history depend on source/target compatibility. We discuss preservation options before starting.`,
      },
    ],
    pricingStart: "$8/hr",
    pricingNote: "Assessment available before committing to full migration",
  };
}

// ===========================================
// GENERATE ALL MIGRATION PAGES
// ===========================================

// Platform-to-platform migrations (select meaningful combinations)
const platformMigrations: [SoftwarePlatform, SoftwarePlatform][] = [];
for (let i = 0; i < platforms.length; i++) {
  for (let j = 0; j < platforms.length; j++) {
    if (i !== j) {
      // Only create pages for common migration paths
      const from = platforms[i];
      const to = platforms[j];
      const isCommonMigration =
        (from.slug === "autocad" && to.slug !== "pro-engineer") ||
        (from.slug === "solidworks") ||
        (from.slug === "catia") ||
        (from.slug === "pro-engineer" && to.slug === "creo") ||
        (from.slug === "inventor" && to.slug === "solidworks") ||
        (to.slug === "solidworks") ||
        (to.slug === "catia");

      if (isCommonMigration) {
        platformMigrations.push([from, to]);
      }
    }
  }
}

export const platformMigrationPages: SEOPageData[] = platformMigrations.map(
  ([from, to]) => generateMigrationPage(from, to)
);

// File format conversions (select meaningful combinations)
const formatConversions: [FileFormat, FileFormat][] = [
  [fileFormats[0], fileFormats[1]], // STEP to IGES
  [fileFormats[1], fileFormats[0]], // IGES to STEP
  [fileFormats[0], fileFormats[2]], // STEP to Parasolid
  [fileFormats[2], fileFormats[0]], // Parasolid to STEP
  [fileFormats[3], fileFormats[4]], // DWG to DXF
  [fileFormats[4], fileFormats[3]], // DXF to DWG
  [fileFormats[0], fileFormats[5]], // STEP to STL
  [fileFormats[5], fileFormats[0]], // STL to STEP (reverse engineering)
  [fileFormats[6], fileFormats[3]], // PDF to DWG
  [fileFormats[1], fileFormats[2]], // IGES to Parasolid
];

export const fileFormatPages: SEOPageData[] = formatConversions.map(
  ([from, to]) => generateFileFormatPage(from, to)
);

// Legacy migration pages (8 pages)
export const legacyMigrationPages: SEOPageData[] = platforms.map((platform) =>
  generateLegacyMigrationPage(platform)
);

// Combined export (~80 pages)
export const allMigrationPages: SEOPageData[] = [
  ...platformMigrationPages,
  ...fileFormatPages,
  ...legacyMigrationPages,
];

// Helper functions
export function getMigrationPagesByPlatform(platformSlug: string): SEOPageData[] {
  return allMigrationPages.filter((page) => page.slug.includes(platformSlug));
}
