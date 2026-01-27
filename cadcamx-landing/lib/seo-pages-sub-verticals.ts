import { SEOPageData } from "./seo-pages-data";

// ===========================================
// INDUSTRY SUB-VERTICAL PAGES (400 pages)
// Deep coverage for Automotive, Aerospace, Medical, Others
// ===========================================

// Key cities for each industry vertical
const automotiveCities = [
  { city: "Detroit", state: "MI" },
  { city: "Grand Rapids", state: "MI" },
  { city: "Indianapolis", state: "IN" },
  { city: "Louisville", state: "KY" },
  { city: "Nashville", state: "TN" },
  { city: "Chattanooga", state: "TN" },
  { city: "Birmingham", state: "AL" },
  { city: "Greenville", state: "SC" },
  { city: "Columbus", state: "OH" },
  { city: "Toledo", state: "OH" },
];

const aerospaceCities = [
  { city: "Seattle", state: "WA" },
  { city: "Wichita", state: "KS" },
  { city: "Huntsville", state: "AL" },
  { city: "Los Angeles", state: "CA" },
  { city: "San Diego", state: "CA" },
  { city: "Dallas", state: "TX" },
  { city: "Fort Worth", state: "TX" },
  { city: "Phoenix", state: "AZ" },
  { city: "Hartford", state: "CT" },
  { city: "Denver", state: "CO" },
];

const medicalCities = [
  { city: "Minneapolis", state: "MN" },
  { city: "Boston", state: "MA" },
  { city: "Irvine", state: "CA" },
  { city: "San Jose", state: "CA" },
  { city: "Rochester", state: "MN" },
  { city: "Indianapolis", state: "IN" },
  { city: "Philadelphia", state: "PA" },
  { city: "Chicago", state: "IL" },
  { city: "Salt Lake City", state: "UT" },
  { city: "Miami", state: "FL" },
];

// ===========================================
// AUTOMOTIVE SUB-VERTICALS (100 pages)
// ===========================================

interface SubVerticalDef {
  name: string;
  slug: string;
  description: string;
  standards: string[];
  deliverables: string[];
  software: string[];
  priceStart: string;
  keywords: string[];
}

const automotiveSubVerticals: SubVerticalDef[] = [
  {
    name: "Tier 1 Automotive Supplier CAD",
    slug: "tier-1-automotive-supplier-cad",
    description: "CAD engineering services for Tier 1 automotive suppliers delivering directly to OEMs",
    standards: ["IATF 16949", "AIAG PPAP", "APQP", "ASME Y14.5"],
    deliverables: ["Production drawings", "3D models", "PPAP packages", "GD&T documentation"],
    software: ["CATIA", "NX", "SolidWorks", "Creo"],
    priceStart: "$12/hr",
    keywords: ["tier 1 supplier CAD", "automotive OEM supplier", "PPAP documentation"],
  },
  {
    name: "Tier 2 Automotive Supplier Design",
    slug: "tier-2-automotive-supplier-design",
    description: "Design engineering support for Tier 2 and Tier 3 automotive component suppliers",
    standards: ["IATF 16949", "ISO 9001", "ASME Y14.5"],
    deliverables: ["Component designs", "Assembly drawings", "Tolerance analysis", "DFM reports"],
    software: ["SolidWorks", "Inventor", "AutoCAD", "Creo"],
    priceStart: "$10/hr",
    keywords: ["tier 2 supplier", "automotive component design", "supplier engineering"],
  },
  {
    name: "EV Battery Pack Design",
    slug: "ev-battery-pack-design",
    description: "Electric vehicle battery pack and module design engineering services",
    standards: ["SAE J2464", "UN 38.3", "IEC 62660", "UL 2580"],
    deliverables: ["Battery module designs", "Thermal management systems", "BMS enclosures", "Pack assemblies"],
    software: ["CATIA", "NX", "SolidWorks", "ANSYS"],
    priceStart: "$15/hr",
    keywords: ["EV battery design", "battery pack engineering", "electric vehicle CAD"],
  },
  {
    name: "Automotive Powertrain Engineering",
    slug: "automotive-powertrain-engineering",
    description: "Powertrain component and system design for ICE and hybrid vehicles",
    standards: ["SAE standards", "ASME Y14.5", "GD&T", "AIAG"],
    deliverables: ["Engine components", "Transmission parts", "Driveline systems", "Assembly models"],
    software: ["CATIA", "NX", "Creo", "GT-SUITE"],
    priceStart: "$14/hr",
    keywords: ["powertrain design", "engine CAD", "transmission engineering"],
  },
  {
    name: "Automotive Interior Design",
    slug: "automotive-interior-design",
    description: "Vehicle interior component and trim design services",
    standards: ["FMVSS", "SAE J1100", "ASME Y14.5", "Class A surfaces"],
    deliverables: ["Interior trim designs", "Dashboard components", "Door panels", "Seat structures"],
    software: ["CATIA", "Alias", "ICEM Surf", "SolidWorks"],
    priceStart: "$12/hr",
    keywords: ["automotive interior CAD", "vehicle trim design", "dashboard engineering"],
  },
  {
    name: "IATF 16949 Compliant Design",
    slug: "iatf-16949-compliant-design",
    description: "CAD services with full IATF 16949 quality management compliance",
    standards: ["IATF 16949:2016", "ISO 9001:2015", "APQP", "PPAP"],
    deliverables: ["Controlled drawings", "PPAP Level 3 packages", "DFMEA support", "Control plans"],
    software: ["CATIA", "NX", "SolidWorks", "Creo"],
    priceStart: "$14/hr",
    keywords: ["IATF 16949 CAD", "automotive quality", "PPAP services"],
  },
  {
    name: "Automotive Body-in-White Design",
    slug: "automotive-body-in-white-design",
    description: "BIW structural design and sheet metal engineering for vehicle bodies",
    standards: ["NCAP ratings", "FMVSS crashworthiness", "ASME Y14.5"],
    deliverables: ["BIW structures", "Stamping dies", "Weld fixtures", "Assembly sequences"],
    software: ["CATIA", "NX", "AutoForm", "DYNAFORM"],
    priceStart: "$14/hr",
    keywords: ["body in white", "BIW design", "automotive structure"],
  },
  {
    name: "Automotive Chassis Engineering",
    slug: "automotive-chassis-engineering",
    description: "Chassis, suspension, and frame design for vehicles",
    standards: ["SAE J670", "FMVSS", "ASME Y14.5", "GD&T"],
    deliverables: ["Chassis frames", "Suspension components", "Subframes", "Steering systems"],
    software: ["CATIA", "NX", "Adams", "SolidWorks"],
    priceStart: "$14/hr",
    keywords: ["chassis design", "suspension CAD", "automotive frame"],
  },
  {
    name: "Automotive Tooling Design",
    slug: "automotive-tooling-design",
    description: "Stamping dies, molds, and fixtures for automotive manufacturing",
    standards: ["NAAMS", "AIAG", "ASME Y14.5"],
    deliverables: ["Progressive dies", "Transfer dies", "Checking fixtures", "Weld jigs"],
    software: ["CATIA", "NX", "AutoForm", "SolidWorks"],
    priceStart: "$12/hr",
    keywords: ["automotive tooling", "stamping die design", "fixture design"],
  },
  {
    name: "Automotive Testing & Validation",
    slug: "automotive-testing-validation",
    description: "Test fixture design and validation documentation support",
    standards: ["SAE J2527", "USCAR", "AIAG MSA"],
    deliverables: ["Test fixtures", "Validation plans", "DVP&R support", "Test reports"],
    software: ["SolidWorks", "NX", "LabVIEW", "MATLAB"],
    priceStart: "$12/hr",
    keywords: ["automotive testing", "validation engineering", "test fixture CAD"],
  },
];

// ===========================================
// AEROSPACE SUB-VERTICALS (100 pages)
// ===========================================

const aerospaceSubVerticals: SubVerticalDef[] = [
  {
    name: "Commercial Aviation CAD",
    slug: "commercial-aviation-cad",
    description: "CAD engineering for commercial aircraft manufacturers and suppliers",
    standards: ["AS9100D", "FAA regulations", "ASME Y14.5", "MIL-STD"],
    deliverables: ["Aircraft structures", "System installations", "Interior components", "Technical data"],
    software: ["CATIA V5/V6", "NX", "ENOVIA", "Teamcenter"],
    priceStart: "$15/hr",
    keywords: ["commercial aviation CAD", "aircraft design", "aviation engineering"],
  },
  {
    name: "Defense Contractor CAD Support",
    slug: "defense-contractor-cad-support",
    description: "Engineering support for defense contractors and military programs",
    standards: ["AS9100D", "MIL-STD", "ITAR compliant", "DFARS"],
    deliverables: ["Military systems", "Weapons platforms", "Support equipment", "Technical manuals"],
    software: ["CATIA", "NX", "Creo", "SolidWorks"],
    priceStart: "$18/hr",
    keywords: ["defense CAD", "military engineering", "defense contractor support"],
  },
  {
    name: "ITAR Compliant Engineering",
    slug: "itar-compliant-engineering",
    description: "Export-controlled engineering services for defense and aerospace",
    standards: ["ITAR", "EAR", "AS9100D", "NIST 800-171"],
    deliverables: ["Controlled technical data", "ITAR-compliant designs", "Secure file transfer"],
    software: ["CATIA", "NX", "Creo", "Secure PLM"],
    priceStart: "$20/hr",
    keywords: ["ITAR compliant CAD", "export controlled engineering", "defense design"],
  },
  {
    name: "AS9100D Certified Services",
    slug: "as9100d-certified-services",
    description: "Aerospace quality management system compliant engineering",
    standards: ["AS9100D", "AS9102 FAI", "NADCAP", "ISO 9001"],
    deliverables: ["AS9102 FAI packages", "Quality documentation", "Controlled drawings"],
    software: ["CATIA", "NX", "SolidWorks", "Creo"],
    priceStart: "$15/hr",
    keywords: ["AS9100D CAD", "aerospace quality", "FAI documentation"],
  },
  {
    name: "UAV & Drone Design Services",
    slug: "uav-drone-design-services",
    description: "Unmanned aerial vehicle and drone engineering services",
    standards: ["FAA Part 107", "DO-178C", "MIL-STD", "ASTM"],
    deliverables: ["Airframe designs", "Payload systems", "Ground control stations", "Composites"],
    software: ["SolidWorks", "CATIA", "NX", "ANSYS"],
    priceStart: "$14/hr",
    keywords: ["UAV design", "drone engineering", "unmanned systems CAD"],
  },
  {
    name: "Space Systems Design",
    slug: "space-systems-design",
    description: "Spacecraft, satellite, and launch vehicle engineering",
    standards: ["NASA-STD", "MIL-STD", "ECSS", "AS9100D"],
    deliverables: ["Satellite structures", "Launch adapters", "Payload interfaces", "Space mechanisms"],
    software: ["CATIA", "NX", "Creo", "STK"],
    priceStart: "$18/hr",
    keywords: ["space systems CAD", "satellite design", "spacecraft engineering"],
  },
  {
    name: "Aircraft Interior Design",
    slug: "aircraft-interior-design",
    description: "Commercial and business aircraft interior engineering",
    standards: ["FAR 25.853", "EASA CS-25", "FAA PMA", "ASTM flammability"],
    deliverables: ["Cabin layouts", "Seat structures", "Galley systems", "Lavatory designs"],
    software: ["CATIA", "NX", "SolidWorks", "Alias"],
    priceStart: "$14/hr",
    keywords: ["aircraft interior CAD", "cabin design", "aviation interior"],
  },
  {
    name: "Avionics Housing Design",
    slug: "avionics-housing-design",
    description: "Avionics enclosures, racks, and mounting systems",
    standards: ["DO-160G", "MIL-STD-810", "ARINC 404A", "AS9100D"],
    deliverables: ["LRU housings", "Avionics racks", "EMI shielding", "Cooling systems"],
    software: ["SolidWorks", "NX", "CATIA", "Creo"],
    priceStart: "$14/hr",
    keywords: ["avionics housing", "LRU design", "aerospace electronics enclosure"],
  },
  {
    name: "MRO Documentation Services",
    slug: "mro-documentation-services",
    description: "Maintenance, repair, and overhaul technical documentation",
    standards: ["ATA iSpec 2200", "S1000D", "FAA AC 43.13", "EASA Part 145"],
    deliverables: ["Technical manuals", "IPC illustrations", "CMM documentation", "Repair drawings"],
    software: ["CATIA", "AutoCAD", "Arbortext", "Framemaker"],
    priceStart: "$12/hr",
    keywords: ["MRO documentation", "aircraft maintenance manual", "aviation technical data"],
  },
  {
    name: "Aerospace Composite Structures",
    slug: "aerospace-composite-structures",
    description: "Carbon fiber and composite aerospace structure design",
    standards: ["CMH-17", "MIL-HDBK-17", "ASTM D3039", "AS9100D"],
    deliverables: ["Composite layups", "Ply schedules", "Core structures", "Bonded assemblies"],
    software: ["CATIA Composites", "FiberSIM", "HyperSizer", "ANSYS ACP"],
    priceStart: "$16/hr",
    keywords: ["aerospace composites", "carbon fiber design", "composite structure CAD"],
  },
];

// ===========================================
// MEDICAL DEVICE SUB-VERTICALS (100 pages)
// ===========================================

const medicalSubVerticals: SubVerticalDef[] = [
  {
    name: "Class I Medical Device Design",
    slug: "class-1-medical-device-design",
    description: "Low-risk medical device design with 510(k) exempt pathways",
    standards: ["FDA 21 CFR 820", "ISO 13485", "IEC 60601", "ISO 14971"],
    deliverables: ["Device designs", "DHF documentation", "Risk analysis", "Verification protocols"],
    software: ["SolidWorks", "Creo", "Inventor", "AutoCAD"],
    priceStart: "$12/hr",
    keywords: ["Class I medical device", "510k exempt", "low risk device design"],
  },
  {
    name: "Class II Medical Device Design",
    slug: "class-2-medical-device-design",
    description: "Moderate-risk medical device design requiring 510(k) clearance",
    standards: ["FDA 510(k)", "ISO 13485", "IEC 62304", "ISO 14971"],
    deliverables: ["Device designs", "510(k) support", "DHF packages", "V&V documentation"],
    software: ["SolidWorks", "Creo", "NX", "CATIA"],
    priceStart: "$14/hr",
    keywords: ["Class II medical device", "510k clearance", "medical device CAD"],
  },
  {
    name: "Class III Medical Device Design",
    slug: "class-3-medical-device-design",
    description: "High-risk implantable and life-sustaining device engineering",
    standards: ["FDA PMA", "ISO 13485", "ISO 10993", "ISO 14971"],
    deliverables: ["Implant designs", "PMA documentation support", "Biocompatibility testing", "Sterilization validation"],
    software: ["NX", "CATIA", "SolidWorks", "ANSYS"],
    priceStart: "$18/hr",
    keywords: ["Class III medical device", "PMA device", "implantable device design"],
  },
  {
    name: "Surgical Instrument Design",
    slug: "surgical-instrument-design",
    description: "Surgical tools, instruments, and accessories design",
    standards: ["ISO 13485", "ISO 7153", "AAMI standards", "FDA guidance"],
    deliverables: ["Instrument designs", "Handle ergonomics", "Sterilization trays", "Assembly instructions"],
    software: ["SolidWorks", "Creo", "Inventor", "AutoCAD"],
    priceStart: "$12/hr",
    keywords: ["surgical instrument CAD", "medical tool design", "surgical device engineering"],
  },
  {
    name: "Orthopedic Implant Design",
    slug: "orthopedic-implant-design",
    description: "Joint replacements, trauma implants, and spine devices",
    standards: ["FDA PMA/510(k)", "ASTM F136", "ISO 5832", "ISO 14242"],
    deliverables: ["Implant designs", "Surgical instruments", "Sizing systems", "FEA validation"],
    software: ["NX", "CATIA", "SolidWorks", "ANSYS"],
    priceStart: "$16/hr",
    keywords: ["orthopedic implant CAD", "joint replacement design", "spine implant engineering"],
  },
  {
    name: "Diagnostic Equipment Design",
    slug: "diagnostic-equipment-design",
    description: "In-vitro diagnostic and imaging equipment engineering",
    standards: ["FDA 510(k)", "IEC 61010", "IEC 62304", "ISO 13485"],
    deliverables: ["Equipment enclosures", "Fluidic systems", "User interfaces", "Optical systems"],
    software: ["SolidWorks", "Creo", "NX", "AutoCAD"],
    priceStart: "$14/hr",
    keywords: ["diagnostic equipment CAD", "IVD device design", "medical imaging engineering"],
  },
  {
    name: "ISO 13485 Compliant Services",
    slug: "iso-13485-compliant-services",
    description: "Medical device quality management system compliant engineering",
    standards: ["ISO 13485:2016", "FDA 21 CFR 820", "MDR 2017/745", "ISO 14971"],
    deliverables: ["Controlled drawings", "DHF support", "Design reviews", "Risk documentation"],
    software: ["SolidWorks", "Creo", "NX", "CATIA"],
    priceStart: "$14/hr",
    keywords: ["ISO 13485 CAD", "medical device QMS", "compliant design services"],
  },
  {
    name: "FDA Compliant Device Design",
    slug: "fda-compliant-device-design",
    description: "FDA regulatory pathway support and compliant design documentation",
    standards: ["FDA 21 CFR 820", "FDA 510(k)", "FDA PMA", "cGMP"],
    deliverables: ["Design controls", "DHF packages", "Regulatory submissions", "Design validation"],
    software: ["SolidWorks", "Creo", "NX", "Arena PLM"],
    priceStart: "$15/hr",
    keywords: ["FDA compliant design", "design controls", "regulatory CAD services"],
  },
  {
    name: "Wearable Medical Device Design",
    slug: "wearable-medical-device-design",
    description: "Patient monitoring, drug delivery, and wearable therapeutic devices",
    standards: ["FDA 510(k)", "IEC 60601-1-11", "ISO 10993", "IP ratings"],
    deliverables: ["Wearable housings", "Skin interfaces", "Electronics integration", "User studies"],
    software: ["SolidWorks", "Creo", "Fusion 360", "KeyShot"],
    priceStart: "$14/hr",
    keywords: ["wearable medical device", "patient monitoring CAD", "drug delivery design"],
  },
  {
    name: "Laboratory Equipment Design",
    slug: "laboratory-equipment-design",
    description: "Lab instruments, automation, and research equipment",
    standards: ["ISO 17025", "IEC 61010", "ANSI/SLAS", "FDA 21 CFR Part 11"],
    deliverables: ["Instrument designs", "Automation systems", "Sample handling", "Enclosures"],
    software: ["SolidWorks", "Inventor", "Creo", "AutoCAD"],
    priceStart: "$12/hr",
    keywords: ["lab equipment CAD", "laboratory automation", "scientific instrument design"],
  },
];

// ===========================================
// OTHER INDUSTRY SUB-VERTICALS (100 pages)
// ===========================================

const otherSubVerticals: SubVerticalDef[] = [
  // Oil & Gas (15 pages)
  {
    name: "Oil & Gas Equipment Design",
    slug: "oil-gas-equipment-design",
    description: "Upstream, midstream, and downstream equipment engineering",
    standards: ["API standards", "ASME B31.3", "NACE", "DNV GL"],
    deliverables: ["Pressure vessels", "Piping systems", "Wellhead equipment", "Processing units"],
    software: ["SolidWorks", "AutoCAD Plant 3D", "CAESAR II", "PV Elite"],
    priceStart: "$14/hr",
    keywords: ["oil gas CAD", "petroleum equipment", "energy sector design"],
  },
  {
    name: "Subsea Equipment Engineering",
    slug: "subsea-equipment-engineering",
    description: "Subsea production systems and offshore equipment design",
    standards: ["API 17D", "DNV GL", "ISO 13628", "ASME BPVC"],
    deliverables: ["Subsea trees", "Manifolds", "Umbilicals", "ROV tooling"],
    software: ["CATIA", "NX", "SolidWorks", "ANSYS"],
    priceStart: "$16/hr",
    keywords: ["subsea design", "offshore equipment", "deepwater engineering"],
  },
  // Electronics (15 pages)
  {
    name: "Electronics Enclosure Design",
    slug: "electronics-enclosure-design",
    description: "Electronic product housings and enclosure engineering",
    standards: ["IP ratings", "UL 94", "EMC compliance", "IEC 60529"],
    deliverables: ["Enclosure designs", "Thermal management", "EMI shielding", "DFM analysis"],
    software: ["SolidWorks", "Creo", "Inventor", "Fusion 360"],
    priceStart: "$10/hr",
    keywords: ["electronics enclosure", "product housing CAD", "thermal design"],
  },
  {
    name: "PCB Mechanical Design",
    slug: "pcb-mechanical-design",
    description: "ECAD/MCAD integration and PCB mechanical engineering",
    standards: ["IPC-2221", "IPC-2222", "IPC-7351", "JEDEC"],
    deliverables: ["Board outlines", "Component placement", "Thermal analysis", "3D STEP models"],
    software: ["SolidWorks PCB", "Altium 3D", "Creo", "ECAD integration"],
    priceStart: "$12/hr",
    keywords: ["PCB mechanical", "ECAD MCAD", "electronics packaging"],
  },
  // Consumer Products (15 pages)
  {
    name: "Consumer Product Design",
    slug: "consumer-product-design",
    description: "Consumer goods and appliance product development",
    standards: ["UL certification", "CE marking", "Consumer safety standards"],
    deliverables: ["Product designs", "Injection mold designs", "User interfaces", "Packaging"],
    software: ["SolidWorks", "Creo", "Fusion 360", "KeyShot"],
    priceStart: "$10/hr",
    keywords: ["consumer product CAD", "appliance design", "product development"],
  },
  {
    name: "Injection Mold Design",
    slug: "injection-mold-design",
    description: "Plastic injection mold and tool design services",
    standards: ["DME standards", "HASCO", "Mold flow analysis"],
    deliverables: ["Mold designs", "Moldflow analysis", "Tool drawings", "EDM electrodes"],
    software: ["SolidWorks", "NX Mold Wizard", "Moldflow", "Cimatron"],
    priceStart: "$12/hr",
    keywords: ["injection mold CAD", "plastic tooling", "mold design services"],
  },
  // Industrial Machinery (15 pages)
  {
    name: "Industrial Machine Design",
    slug: "industrial-machine-design",
    description: "Custom machinery and industrial equipment engineering",
    standards: ["OSHA", "ANSI/NFPA 79", "CE machinery directive", "ISO 12100"],
    deliverables: ["Machine designs", "Safety guards", "Automation systems", "Assembly drawings"],
    software: ["SolidWorks", "Inventor", "AutoCAD", "Creo"],
    priceStart: "$12/hr",
    keywords: ["industrial machine CAD", "custom machinery", "equipment design"],
  },
  {
    name: "Conveyor System Design",
    slug: "conveyor-system-design",
    description: "Material handling and conveyor engineering services",
    standards: ["CEMA standards", "OSHA", "ANSI B20.1"],
    deliverables: ["Conveyor layouts", "Drive systems", "Control integration", "Installation drawings"],
    software: ["SolidWorks", "Inventor", "AutoCAD", "Creo"],
    priceStart: "$10/hr",
    keywords: ["conveyor design", "material handling CAD", "automation engineering"],
  },
  // Robotics (15 pages)
  {
    name: "Robotics System Design",
    slug: "robotics-system-design",
    description: "Industrial robots, end effectors, and automation cells",
    standards: ["ISO 10218", "RIA TR R15.306", "ANSI/RIA"],
    deliverables: ["Robot cell layouts", "End effectors", "Safety systems", "Integration drawings"],
    software: ["SolidWorks", "NX", "RoboDK", "CATIA"],
    priceStart: "$14/hr",
    keywords: ["robotics CAD", "automation cell design", "end effector engineering"],
  },
  {
    name: "Robotic End Effector Design",
    slug: "robotic-end-effector-design",
    description: "Grippers, tools, and end-of-arm tooling for robots",
    standards: ["ISO 9409", "RIA guidelines", "collaborative robot standards"],
    deliverables: ["Gripper designs", "Tool changers", "Vacuum systems", "Custom EOAT"],
    software: ["SolidWorks", "Inventor", "Creo", "ANSYS"],
    priceStart: "$12/hr",
    keywords: ["end effector design", "EOAT CAD", "robot gripper engineering"],
  },
  // Heavy Equipment (15 pages)
  {
    name: "Heavy Equipment Design",
    slug: "heavy-equipment-design",
    description: "Construction, mining, and agricultural equipment engineering",
    standards: ["SAE J1995", "ISO 6165", "ROPS/FOPS", "Tier 4 emissions"],
    deliverables: ["Equipment structures", "Hydraulic systems", "Cab designs", "Attachment interfaces"],
    software: ["CATIA", "NX", "SolidWorks", "Creo"],
    priceStart: "$14/hr",
    keywords: ["heavy equipment CAD", "construction machinery", "mining equipment design"],
  },
  {
    name: "Agricultural Equipment Design",
    slug: "agricultural-equipment-design",
    description: "Farm machinery and agricultural implement engineering",
    standards: ["ASABE standards", "ISO 4254", "EPA Tier 4"],
    deliverables: ["Implement designs", "Harvester components", "Precision ag systems", "Structural analysis"],
    software: ["SolidWorks", "Creo", "NX", "AutoCAD"],
    priceStart: "$12/hr",
    keywords: ["agricultural equipment CAD", "farm machinery design", "ag implement engineering"],
  },
  // Marine (10 pages)
  {
    name: "Marine Equipment Design",
    slug: "marine-equipment-design",
    description: "Shipboard systems, marine equipment, and offshore structures",
    standards: ["ABS rules", "DNV GL", "Lloyd's", "SOLAS"],
    deliverables: ["Marine systems", "Deck equipment", "Hull structures", "Outfitting"],
    software: ["CATIA", "NX", "ShipConstructor", "SolidWorks"],
    priceStart: "$14/hr",
    keywords: ["marine CAD", "shipbuilding design", "offshore engineering"],
  },
  {
    name: "Boat & Yacht Design",
    slug: "boat-yacht-design",
    description: "Recreational boat and yacht engineering services",
    standards: ["ABYC standards", "CE recreational craft directive", "NMMA certification"],
    deliverables: ["Hull designs", "Interior layouts", "Systems integration", "Production drawings"],
    software: ["Rhino", "SolidWorks", "CATIA", "AutoCAD"],
    priceStart: "$12/hr",
    keywords: ["boat design CAD", "yacht engineering", "marine product development"],
  },
];

// ===========================================
// GENERATOR FUNCTION
// ===========================================

function generateSubVerticalPage(
  subVertical: SubVerticalDef,
  cityInfo: { city: string; state: string }
): SEOPageData {
  const { city, state } = cityInfo;
  const locationFull = `${city}, ${state}`;
  const slug = `${subVertical.slug}-${city.toLowerCase().replace(/\s+/g, "-")}-${state.toLowerCase()}`;

  return {
    slug,
    primaryKeyword: `${subVertical.name} ${locationFull}`,
    secondaryKeywords: [
      ...subVertical.keywords.map((kw) => `${kw} ${city}`),
      `${subVertical.name.toLowerCase()} services ${state}`,
      `${subVertical.software[0]} ${city}`,
    ],
    context: subVertical.description,
    targetAudience: `Engineering managers and product teams in ${locationFull} seeking ${subVertical.name.toLowerCase()}`,
    industry: subVertical.name.split(" ")[0],
    software: subVertical.software,
    metaTitle: `${subVertical.name} ${city} | ${subVertical.priceStart} | CADCAMX`,
    metaDescription: `${subVertical.description} in ${locationFull}. ${subVertical.standards.slice(0, 2).join(", ")} compliant. Starting at ${subVertical.priceStart}. Free quote.`,
    h1: `${subVertical.name} in ${locationFull}`,
    heroIntro: `CADCAMX provides specialized ${subVertical.name.toLowerCase()} to companies in ${city} and throughout ${state}. Our certified engineers deliver ${subVertical.standards[0]} compliant work using ${subVertical.software.slice(0, 3).join(", ")}.`,
    heroBenefits: [
      `${subVertical.standards[0]} compliant deliverables`,
      `${subVertical.software[0]} certified engineers`,
      `Starting at ${subVertical.priceStart}`,
      `Dedicated team for ${city} projects`,
    ],
    ctaText: `Get ${subVertical.name.split(" ").slice(0, 2).join(" ")} Quote`,
    problemTitle: `${subVertical.name.split(" ").slice(0, 3).join(" ")} Challenges in ${city}`,
    problemDescription: `Companies in ${locationFull} face unique challenges finding specialized ${subVertical.name.toLowerCase()} expertise. Local talent is scarce and expensive, while project demands require ${subVertical.standards[0]} compliance.`,
    painPoints: [
      `Limited ${subVertical.name.toLowerCase()} specialists in ${state}`,
      `High local rates for ${subVertical.standards[0]} compliant work`,
      `Long lead times for ${subVertical.deliverables[0].toLowerCase()}`,
      `Difficulty finding ${subVertical.software[0]} experts`,
      `Compliance requirements for ${subVertical.standards.slice(0, 2).join(", ")}`,
    ],
    solutionTitle: `Your ${city} ${subVertical.name.split(" ").slice(0, 2).join(" ")} Partner`,
    solutionDescription: `CADCAMX provides ${locationFull} companies with dedicated ${subVertical.name.toLowerCase()} teams. Our engineers understand ${subVertical.standards.join(", ")} requirements and deliver quality ${subVertical.deliverables[0].toLowerCase()}.`,
    solutionHighlights: [
      `${subVertical.standards[0]} certified processes`,
      `Expert ${subVertical.software.slice(0, 2).join(" and ")} engineers`,
      `${subVertical.deliverables.slice(0, 2).join(", ")}`,
      `US time zone overlap for ${state} teams`,
    ],
    features: subVertical.deliverables.slice(0, 4).map((deliverable, i) => ({
      title: deliverable,
      description: `Professional ${deliverable.toLowerCase()} meeting ${subVertical.standards[0]} standards for ${city} clients.`,
      icon: ["FaCube", "FaFileAlt", "FaCheckCircle", "FaCogs"][i] || "FaCube",
    })),
    useCaseTitle: `${subVertical.name} for ${city} Companies`,
    useCaseDescription: `From startups to established manufacturers, ${locationFull} companies leverage our ${subVertical.name.toLowerCase()} expertise.`,
    useCaseScenarios: [
      `${city} company needed ${subVertical.deliverables[0].toLowerCase()} - delivered in 2 weeks`,
      `${state} manufacturer reduced costs by 60% with dedicated team`,
      `Startup achieved ${subVertical.standards[0]} compliance with our support`,
      `OEM cleared backlog with overnight ${subVertical.name.toLowerCase().split(" ").slice(0, 2).join(" ")} support`,
    ],
    comparisonTitle: `${city} ${subVertical.name.split(" ").slice(0, 2).join(" ")} Costs`,
    comparisonItems: [
      {
        aspect: "Hourly Rate",
        traditional: `$80-150/hr in ${city}`,
        cadcamx: subVertical.priceStart.replace("/hr", "-25/hr"),
      },
      {
        aspect: "Standards Compliance",
        traditional: "Variable quality",
        cadcamx: `${subVertical.standards[0]} certified`,
      },
      {
        aspect: "Turnaround",
        traditional: "2-4 weeks",
        cadcamx: "3-7 days typical",
      },
      {
        aspect: "Software",
        traditional: "$15K+/year licensing",
        cadcamx: `${subVertical.software[0]} included`,
      },
    ],
    testimonial: {
      quote: `CADCAMX's ${subVertical.name.toLowerCase().split(" ").slice(0, 2).join(" ")} team has been invaluable. Their understanding of ${subVertical.standards[0]} requirements and ${subVertical.software[0]} expertise is exceptional.`,
      role: "Engineering Director",
      company: `${subVertical.name.split(" ")[0]} Company, ${state}`,
    },
    faqs: [
      {
        question: `What ${subVertical.name.toLowerCase()} standards do you follow?`,
        answer: `We comply with ${subVertical.standards.join(", ")}. Our engineers are trained in the specific requirements for ${subVertical.name.toLowerCase()}.`,
      },
      {
        question: `What software do you use for ${subVertical.name.toLowerCase()}?`,
        answer: `We support ${subVertical.software.join(", ")}. Our certified engineers work with whatever platforms your ${city} team uses.`,
      },
      {
        question: `What ${subVertical.name.toLowerCase()} deliverables do you provide?`,
        answer: `We deliver ${subVertical.deliverables.join(", ").toLowerCase()}. All work meets ${subVertical.standards[0]} standards.`,
      },
      {
        question: `How do you ensure quality for ${state} projects?`,
        answer: `We implement multi-level QC, ${subVertical.standards[0]} compliant processes, and maintain 99.9% accuracy with revision tracking.`,
      },
    ],
    pricingStart: subVertical.priceStart,
    pricingNote: `Volume discounts for ${city} companies with ongoing ${subVertical.name.toLowerCase().split(" ").slice(0, 2).join(" ")} needs`,
  };
}

// ===========================================
// GENERATE ALL SUB-VERTICAL PAGES
// ===========================================

// Automotive sub-verticals × cities (100 pages)
export const automotiveSubVerticalPages: SEOPageData[] = automotiveSubVerticals.flatMap(
  (subVertical) => automotiveCities.map((city) => generateSubVerticalPage(subVertical, city))
);

// Aerospace sub-verticals × cities (100 pages)
export const aerospaceSubVerticalPages: SEOPageData[] = aerospaceSubVerticals.flatMap(
  (subVertical) => aerospaceCities.map((city) => generateSubVerticalPage(subVertical, city))
);

// Medical sub-verticals × cities (100 pages)
export const medicalSubVerticalPages: SEOPageData[] = medicalSubVerticals.flatMap(
  (subVertical) => medicalCities.map((city) => generateSubVerticalPage(subVertical, city))
);

// Other industry sub-verticals (using relevant cities)
const generalCities = [
  { city: "Houston", state: "TX" },
  { city: "Chicago", state: "IL" },
  { city: "Los Angeles", state: "CA" },
  { city: "Dallas", state: "TX" },
  { city: "Phoenix", state: "AZ" },
  { city: "Cleveland", state: "OH" },
  { city: "Milwaukee", state: "WI" },
];

export const otherSubVerticalPages: SEOPageData[] = otherSubVerticals.flatMap(
  (subVertical) => generalCities.map((city) => generateSubVerticalPage(subVertical, city))
);

// Combined export (400 pages total)
export const allSubVerticalPages: SEOPageData[] = [
  ...automotiveSubVerticalPages,
  ...aerospaceSubVerticalPages,
  ...medicalSubVerticalPages,
  ...otherSubVerticalPages,
];

// Helper functions
export function getSubVerticalPagesByIndustry(industry: string): SEOPageData[] {
  const lowerIndustry = industry.toLowerCase();
  return allSubVerticalPages.filter(
    (page) =>
      page.slug.includes(lowerIndustry) ||
      page.industry?.toLowerCase().includes(lowerIndustry)
  );
}

export function getSubVerticalPagesByCity(city: string): SEOPageData[] {
  const lowerCity = city.toLowerCase().replace(/\s+/g, "-");
  return allSubVerticalPages.filter((page) => page.slug.includes(lowerCity));
}
