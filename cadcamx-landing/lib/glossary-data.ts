export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // CAD Terms
  { slug: "cad", term: "CAD", definition: "Computer-Aided Design - Software used to create, modify, and optimize designs digitally. CAD systems are used across engineering, architecture, and manufacturing to create precise 2D drawings and 3D models.", category: "General", relatedTerms: ["CAM", "CAE", "3D Modeling"] },
  { slug: "cam", term: "CAM", definition: "Computer-Aided Manufacturing - Software that uses CAD models to generate toolpaths and instructions for CNC machines. CAM bridges the gap between design and manufacturing.", category: "General", relatedTerms: ["CAD", "CNC", "G-Code"] },
  { slug: "cae", term: "CAE", definition: "Computer-Aided Engineering - Software tools for engineering analysis including FEA, CFD, and motion simulation. CAE helps validate designs before physical prototyping.", category: "General", relatedTerms: ["FEA", "CFD", "Simulation"] },
  { slug: "plm", term: "PLM", definition: "Product Lifecycle Management - Systems that manage product data and processes from concept through disposal. PLM integrates CAD data with enterprise systems.", category: "General", relatedTerms: ["PDM", "CAD", "BOM"] },
  { slug: "pdm", term: "PDM", definition: "Product Data Management - Systems that manage CAD files, revisions, and associated data. PDM provides version control and access management for engineering documents.", category: "General", relatedTerms: ["PLM", "Revision Control", "Vault"] },

  // 3D Modeling Terms
  { slug: "parametric-modeling", term: "Parametric Modeling", definition: "A modeling approach where features are defined by parameters and relationships. Changing a parameter automatically updates related geometry, enabling design iteration.", category: "3D Modeling", relatedTerms: ["Feature-Based", "History Tree", "Constraints"] },
  { slug: "direct-modeling", term: "Direct Modeling", definition: "A modeling approach that manipulates geometry directly without parametric history. Useful for editing imported geometry or quick design exploration.", category: "3D Modeling", relatedTerms: ["Parametric Modeling", "Push-Pull", "Synchronous"] },
  { slug: "surface-modeling", term: "Surface Modeling", definition: "Creating 3D geometry using surfaces rather than solid features. Essential for complex shapes like automotive exteriors and consumer product styling.", category: "3D Modeling", relatedTerms: ["NURBS", "Class A", "Solid Modeling"] },
  { slug: "solid-modeling", term: "Solid Modeling", definition: "Creating 3D geometry as enclosed solid volumes with defined mass properties. The standard approach for mechanical design and manufacturing.", category: "3D Modeling", relatedTerms: ["Parametric Modeling", "Boolean Operations", "Feature-Based"] },
  { slug: "nurbs", term: "NURBS", definition: "Non-Uniform Rational B-Splines - Mathematical representation used to create smooth curves and surfaces in CAD. NURBS provide precise control over complex shapes.", category: "3D Modeling", relatedTerms: ["Surface Modeling", "Spline", "Control Points"] },
  { slug: "boolean-operations", term: "Boolean Operations", definition: "Operations that combine or subtract solid bodies: Union (add), Subtract (cut), and Intersect (common volume). Fundamental to solid modeling workflows.", category: "3D Modeling", relatedTerms: ["Solid Modeling", "Union", "Subtract"] },
  { slug: "feature-tree", term: "Feature Tree", definition: "The history of modeling operations in parametric CAD, showing how the model was built. Also called History Tree or Model Tree.", category: "3D Modeling", relatedTerms: ["Parametric Modeling", "Parent-Child", "Rollback"] },
  { slug: "assembly-modeling", term: "Assembly Modeling", definition: "Creating CAD models that combine multiple parts with defined relationships (mates/constraints). Assemblies verify fit and enable motion simulation.", category: "3D Modeling", relatedTerms: ["Mates", "Constraints", "BOM"] },
  { slug: "mates-constraints", term: "Mates/Constraints", definition: "Relationships between parts in an assembly that control relative position and motion. Common types include coincident, parallel, concentric, and distance.", category: "3D Modeling", relatedTerms: ["Assembly", "Degrees of Freedom", "Motion"] },

  // Drafting Terms
  { slug: "orthographic-projection", term: "Orthographic Projection", definition: "A method of representing 3D objects using 2D views (front, top, side). Standard approach for engineering drawings showing exact dimensions.", category: "Drafting", relatedTerms: ["First Angle", "Third Angle", "Multi-View"] },
  { slug: "isometric-view", term: "Isometric View", definition: "A 3D pictorial view where all three axes are equally foreshortened at 30° angles. Provides depth perception while maintaining measurable dimensions.", category: "Drafting", relatedTerms: ["Orthographic", "Pictorial", "Trimetric"] },
  { slug: "section-view", term: "Section View", definition: "A drawing view showing internal features as if the part were cut by a plane. Reveals hidden geometry and simplifies complex internal details.", category: "Drafting", relatedTerms: ["Cross-Section", "Cutting Plane", "Hatching"] },
  { slug: "detail-view", term: "Detail View", definition: "An enlarged view of a specific area of a drawing to show small features or complex geometry more clearly. Typically shown at increased scale.", category: "Drafting", relatedTerms: ["Scale", "Section View", "Auxiliary View"] },
  { slug: "auxiliary-view", term: "Auxiliary View", definition: "A view projected perpendicular to an angled surface to show its true shape. Used when principal views don't adequately represent angled features.", category: "Drafting", relatedTerms: ["True Shape", "Projection", "Orthographic"] },
  { slug: "title-block", term: "Title Block", definition: "A bordered area on a drawing containing identification information: part name/number, material, scale, tolerances, revision level, and approvals.", category: "Drafting", relatedTerms: ["Drawing Template", "Revision Block", "BOM"] },
  { slug: "revision-block", term: "Revision Block", definition: "An area on drawings tracking changes: revision letter/number, description, date, and approval. Essential for configuration management.", category: "Drafting", relatedTerms: ["ECO", "Title Block", "Change Control"] },

  // GD&T Terms
  { slug: "gdt", term: "GD&T", definition: "Geometric Dimensioning and Tolerancing - A symbolic language per ASME Y14.5 for specifying allowable variation in part geometry. More precise than traditional tolerancing.", category: "GD&T", relatedTerms: ["Datum", "Feature Control Frame", "Tolerance Zone"] },
  { slug: "datum", term: "Datum", definition: "A theoretically perfect reference feature from which measurements are made. Datums establish the coordinate system for GD&T specifications.", category: "GD&T", relatedTerms: ["Datum Reference Frame", "GD&T", "Primary Datum"] },
  { slug: "feature-control-frame", term: "Feature Control Frame", definition: "The GD&T symbol that specifies geometric tolerance requirements. Contains the characteristic symbol, tolerance value, modifiers, and datum references.", category: "GD&T", relatedTerms: ["GD&T", "Tolerance", "Datum"] },
  { slug: "mmc", term: "MMC", definition: "Maximum Material Condition - The condition where a feature contains the maximum amount of material (largest shaft, smallest hole). Used with bonus tolerance.", category: "GD&T", relatedTerms: ["LMC", "Bonus Tolerance", "Virtual Condition"] },
  { slug: "lmc", term: "LMC", definition: "Least Material Condition - The condition where a feature contains the minimum amount of material (smallest shaft, largest hole). Opposite of MMC.", category: "GD&T", relatedTerms: ["MMC", "Bonus Tolerance", "GD&T"] },
  { slug: "flatness", term: "Flatness", definition: "A GD&T form control specifying that a surface must lie within a tolerance zone between two parallel planes. No datum required.", category: "GD&T", relatedTerms: ["Form Control", "GD&T", "Surface"] },
  { slug: "perpendicularity", term: "Perpendicularity", definition: "A GD&T orientation control specifying that a surface or axis must be perpendicular to a datum within a tolerance zone.", category: "GD&T", relatedTerms: ["Orientation Control", "Datum", "GD&T"] },
  { slug: "position-tolerance", term: "Position Tolerance", definition: "A GD&T location control specifying the allowable deviation of a feature's location from its true position relative to datums.", category: "GD&T", relatedTerms: ["True Position", "Datum", "Pattern"] },
  { slug: "runout", term: "Runout", definition: "A GD&T control measuring surface variation relative to a datum axis during rotation. Controls both form and location.", category: "GD&T", relatedTerms: ["Circular Runout", "Total Runout", "Datum Axis"] },
  { slug: "profile-tolerance", term: "Profile Tolerance", definition: "A GD&T control specifying allowable variation from a true profile. Can control form, orientation, and location depending on datum references.", category: "GD&T", relatedTerms: ["Profile of a Line", "Profile of a Surface", "Complex Shapes"] },

  // Manufacturing Terms
  { slug: "cnc", term: "CNC", definition: "Computer Numerical Control - Machine tools controlled by computer programs (G-code). CNC enables automated, precise manufacturing of complex parts.", category: "Manufacturing", relatedTerms: ["G-Code", "CAM", "Machining Center"] },
  { slug: "g-code", term: "G-Code", definition: "The programming language that controls CNC machines. G-codes command motion and operations; M-codes control auxiliary functions.", category: "Manufacturing", relatedTerms: ["CNC", "CAM", "Post Processor"] },
  { slug: "post-processor", term: "Post Processor", definition: "Software that converts CAM toolpaths into machine-specific G-code. Each CNC machine type requires its own post processor.", category: "Manufacturing", relatedTerms: ["CAM", "G-Code", "Controller"] },
  { slug: "toolpath", term: "Toolpath", definition: "The path a cutting tool follows during machining. CAM software generates toolpaths to efficiently remove material while achieving required quality.", category: "Manufacturing", relatedTerms: ["CAM", "Cutting Strategy", "G-Code"] },
  { slug: "roughing", term: "Roughing", definition: "Initial machining operations that quickly remove bulk material, leaving stock for finishing. Prioritizes material removal rate over surface quality.", category: "Manufacturing", relatedTerms: ["Finishing", "Toolpath", "Stock"] },
  { slug: "finishing", term: "Finishing", definition: "Final machining operations that achieve required surface finish and dimensional accuracy. Uses lighter cuts and finer feeds than roughing.", category: "Manufacturing", relatedTerms: ["Roughing", "Surface Finish", "Tolerance"] },
  { slug: "feeds-and-speeds", term: "Feeds and Speeds", definition: "Cutting parameters: spindle speed (RPM), feed rate (distance/time), and depth of cut. Critical for tool life, surface finish, and cycle time.", category: "Manufacturing", relatedTerms: ["SFM", "IPM", "Chip Load"] },
  { slug: "workholding", term: "Workholding", definition: "Devices that secure workpieces during machining: vises, clamps, fixtures, chucks. Proper workholding ensures accuracy and safety.", category: "Manufacturing", relatedTerms: ["Fixture", "Chuck", "Clamping"] },
  { slug: "fixture", term: "Fixture", definition: "A custom workholding device designed to locate and hold specific parts for machining, assembly, or inspection. Improves repeatability and efficiency.", category: "Manufacturing", relatedTerms: ["Workholding", "Jig", "Locator"] },

  // Material Terms
  { slug: "alloy", term: "Alloy", definition: "A metal combined with other elements to improve properties. Common examples: steel (iron+carbon), brass (copper+zinc), aluminum alloys.", category: "Materials", relatedTerms: ["Steel", "Aluminum", "Heat Treatment"] },
  { slug: "heat-treatment", term: "Heat Treatment", definition: "Controlled heating and cooling of metals to change properties: hardening, annealing, tempering. Critical for achieving required mechanical properties.", category: "Materials", relatedTerms: ["Hardening", "Annealing", "Quenching"] },
  { slug: "surface-finish", term: "Surface Finish", definition: "The texture of a machined surface, measured in Ra (roughness average) or RMS. Specified in microinches or micrometers.", category: "Materials", relatedTerms: ["Ra", "RMS", "Machining"] },
  { slug: "hardness", term: "Hardness", definition: "Resistance to indentation, measured by scales like Rockwell (HRC), Brinell (HB), or Vickers (HV). Affects machinability and wear resistance.", category: "Materials", relatedTerms: ["Rockwell", "Heat Treatment", "Machinability"] },

  // FEA/Simulation Terms
  { slug: "fea", term: "FEA", definition: "Finite Element Analysis - Computational method that divides geometry into small elements to simulate structural, thermal, or other physical behavior.", category: "Simulation", relatedTerms: ["Mesh", "Stress Analysis", "CAE"] },
  { slug: "mesh", term: "Mesh", definition: "The network of elements created to represent geometry in FEA. Mesh quality significantly affects analysis accuracy and computation time.", category: "Simulation", relatedTerms: ["FEA", "Element", "Node"] },
  { slug: "stress-analysis", term: "Stress Analysis", definition: "FEA study calculating internal forces (stress) and deformation (strain) under applied loads. Used to verify structural adequacy.", category: "Simulation", relatedTerms: ["FEA", "Von Mises", "Factor of Safety"] },
  { slug: "cfd", term: "CFD", definition: "Computational Fluid Dynamics - Simulation of fluid flow, heat transfer, and related phenomena. Used for aerodynamics, cooling, and flow optimization.", category: "Simulation", relatedTerms: ["FEA", "Flow Simulation", "Thermal Analysis"] },
  { slug: "modal-analysis", term: "Modal Analysis", definition: "FEA study determining natural frequencies and mode shapes of a structure. Critical for avoiding resonance and vibration problems.", category: "Simulation", relatedTerms: ["FEA", "Natural Frequency", "Vibration"] },
  { slug: "factor-of-safety", term: "Factor of Safety", definition: "Ratio of material strength to applied stress. FOS > 1 indicates the design can handle more than expected loads. Typical values: 1.5-4 depending on application.", category: "Simulation", relatedTerms: ["Stress Analysis", "Yield Strength", "FEA"] },

  // File Format Terms
  { slug: "step-file", term: "STEP File", definition: "Standard for the Exchange of Product Data - A neutral CAD format (.stp/.step) for exchanging 3D models between different CAD systems.", category: "File Formats", relatedTerms: ["IGES", "Parasolid", "Neutral Format"] },
  { slug: "iges-file", term: "IGES File", definition: "Initial Graphics Exchange Specification - An older neutral CAD format (.igs/.iges) for 2D/3D data exchange. Being replaced by STEP.", category: "File Formats", relatedTerms: ["STEP", "Neutral Format", "Data Exchange"] },
  { slug: "parasolid", term: "Parasolid", definition: "A geometric modeling kernel and file format (.x_t/.x_b) used by many CAD systems including SolidWorks, NX, and Solid Edge.", category: "File Formats", relatedTerms: ["STEP", "Kernel", "SolidWorks"] },
  { slug: "stl-file", term: "STL File", definition: "Stereolithography file format representing 3D surfaces as triangular facets. Standard format for 3D printing and rapid prototyping.", category: "File Formats", relatedTerms: ["3D Printing", "Mesh", "Additive Manufacturing"] },
  { slug: "dwg-file", term: "DWG File", definition: "AutoCAD's native file format for 2D and 3D CAD data. Widely used for 2D drafting and as an exchange format.", category: "File Formats", relatedTerms: ["DXF", "AutoCAD", "2D Drafting"] },
  { slug: "dxf-file", term: "DXF File", definition: "Drawing Exchange Format - An open CAD format for 2D drawing exchange. Commonly used for CNC cutting machines and legacy systems.", category: "File Formats", relatedTerms: ["DWG", "AutoCAD", "Laser Cutting"] },

  // Software Terms
  { slug: "solidworks", term: "SolidWorks", definition: "A parametric 3D CAD software by Dassault Systèmes, popular for mechanical design, especially in SMB manufacturing and consumer products.", category: "Software", relatedTerms: ["Parametric", "Dassault", "3D CAD"] },
  { slug: "catia", term: "CATIA", definition: "Computer-Aided Three-dimensional Interactive Application - Enterprise CAD/PLM software by Dassault Systèmes, standard in automotive and aerospace.", category: "Software", relatedTerms: ["Dassault", "Aerospace", "Automotive"] },
  { slug: "siemens-nx", term: "Siemens NX", definition: "High-end CAD/CAM/CAE software by Siemens, used in automotive, aerospace, and complex mechanical design.", category: "Software", relatedTerms: ["Siemens", "CAM", "Aerospace"] },
  { slug: "creo", term: "Creo", definition: "PTC's parametric 3D CAD software, formerly Pro/ENGINEER. Strong in complex mechanical assemblies and manufacturing integration.", category: "Software", relatedTerms: ["PTC", "Pro/E", "Parametric"] },
  { slug: "inventor", term: "Inventor", definition: "Autodesk's 3D mechanical CAD software for product design and engineering. Competes with SolidWorks in the mid-market.", category: "Software", relatedTerms: ["Autodesk", "3D CAD", "Mechanical Design"] },
  { slug: "autocad", term: "AutoCAD", definition: "Autodesk's flagship CAD software, originally for 2D drafting but now includes 3D capabilities. Industry standard for 2D documentation.", category: "Software", relatedTerms: ["Autodesk", "DWG", "2D Drafting"] },
  { slug: "mastercam", term: "Mastercam", definition: "Leading CAM software for CNC programming, supporting milling, turning, wire EDM, and other processes.", category: "Software", relatedTerms: ["CAM", "CNC", "Toolpath"] },
  { slug: "fusion-360", term: "Fusion 360", definition: "Autodesk's cloud-based CAD/CAM/CAE platform combining design, simulation, and manufacturing in one tool. Popular with startups and makers.", category: "Software", relatedTerms: ["Autodesk", "Cloud CAD", "CAM"] },
  { slug: "ansys", term: "ANSYS", definition: "Leading simulation software for FEA, CFD, and multiphysics analysis. Industry standard for engineering simulation.", category: "Software", relatedTerms: ["FEA", "CFD", "Simulation"] },

  // Process Terms
  { slug: "injection-molding", term: "Injection Molding", definition: "Manufacturing process that injects molten plastic into a mold to create parts. Used for high-volume plastic component production.", category: "Processes", relatedTerms: ["Mold", "Plastic", "Gate"] },
  { slug: "die-casting", term: "Die Casting", definition: "Manufacturing process forcing molten metal under pressure into a mold cavity. Used for high-volume metal parts with good surface finish.", category: "Processes", relatedTerms: ["Casting", "Aluminum", "Mold"] },
  { slug: "sheet-metal-fabrication", term: "Sheet Metal Fabrication", definition: "Manufacturing processes for forming sheet metal: cutting, bending, punching, welding. Used for enclosures, brackets, and structural parts.", category: "Processes", relatedTerms: ["Bend Radius", "K-Factor", "Flat Pattern"] },
  { slug: "additive-manufacturing", term: "Additive Manufacturing", definition: "Building parts layer by layer from digital models. Includes 3D printing, SLS, DMLS, and other technologies. Opposite of subtractive manufacturing.", category: "Processes", relatedTerms: ["3D Printing", "SLS", "Rapid Prototyping"] },
  { slug: "edm", term: "EDM", definition: "Electrical Discharge Machining - Process using electrical sparks to erode material. Used for hard metals and complex shapes. Types: wire EDM, sinker EDM.", category: "Processes", relatedTerms: ["Wire EDM", "Sinker EDM", "Hard Machining"] },
  { slug: "reverse-engineering", term: "Reverse Engineering", definition: "Creating CAD models from existing physical parts, often using 3D scanning. Used for legacy parts, competitive analysis, and documentation.", category: "Processes", relatedTerms: ["3D Scanning", "Point Cloud", "Legacy Parts"] },

  // Additional Terms
  { slug: "bom", term: "BOM", definition: "Bill of Materials - A comprehensive list of parts, components, and materials needed to manufacture a product. Includes quantities, part numbers, and descriptions.", category: "General", relatedTerms: ["Assembly", "PLM", "Manufacturing"] },
  { slug: "eco", term: "ECO", definition: "Engineering Change Order - A formal document authorizing changes to a design or manufacturing process. Part of change control procedures.", category: "General", relatedTerms: ["Revision", "Change Control", "Configuration Management"] },
  { slug: "dfm", term: "DFM", definition: "Design for Manufacturing - The practice of designing products for ease of manufacturing. Reduces costs and improves quality by considering production early.", category: "General", relatedTerms: ["DFA", "Manufacturability", "Cost Reduction"] },
  { slug: "dfa", term: "DFA", definition: "Design for Assembly - The practice of designing products for ease of assembly. Reduces assembly time, errors, and costs.", category: "General", relatedTerms: ["DFM", "Assembly", "Cost Reduction"] },
  { slug: "tolerance-stack", term: "Tolerance Stack", definition: "The cumulative effect of individual tolerances in an assembly. Stack analysis ensures assembled dimensions remain within acceptable limits.", category: "General", relatedTerms: ["GD&T", "Analysis", "Assembly"] },
  { slug: "first-article-inspection", term: "First Article Inspection", definition: "Detailed inspection of the first production parts to verify they meet all specifications. Required before full production begins.", category: "General", relatedTerms: ["Quality", "Inspection", "PPAP"] },
  { slug: "ppap", term: "PPAP", definition: "Production Part Approval Process - A standardized process (from AIAG) for approving new or revised parts in automotive. Ensures supplier capability.", category: "General", relatedTerms: ["Automotive", "Quality", "First Article"] },
];

export const glossaryCategories = [
  "General",
  "3D Modeling",
  "Drafting",
  "GD&T",
  "Manufacturing",
  "Materials",
  "Simulation",
  "File Formats",
  "Software",
  "Processes",
];

export function getAllGlossaryTermSlugs(): string[] {
  return glossaryTerms.map((term) => term.slug);
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter((term) => term.category === category);
}

export function searchGlossaryTerms(query: string): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.definition.toLowerCase().includes(lowerQuery)
  );
}
