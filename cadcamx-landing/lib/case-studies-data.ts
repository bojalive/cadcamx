import {
  FaCube,
  FaCogs,
  FaMicroscope,
  FaChartLine,
} from "react-icons/fa";

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  duration: string;
  featuredImage: string;
  heroImage: string;
  subtitle: string;
  description: string;
  metrics: Array<{ value: string; label: string }>;
  client: {
    name: string;
    title: string;
    avatar: string;
    quote: string;
  };
  objective: {
    description: string;
    goals: string[];
  };
  approach: {
    phases: Array<{
      title: string;
      description: string;
    }>;
  };
  tools: Array<{
    name: string;
    category: string;
    icon: any;
  }>;
  results: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  technologies?: string[];
  challenges?: string[];
  cadDrawings?: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "precision-mold-manufacturing",
    title: "Reduced Toolpath Time by 38% for Precision Mold Manufacturer",
    industry: "Automotive",
    duration: "12 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop",
    subtitle: "How we transformed a century-old manufacturing process using modern CAD/CAM techniques",
    description: "Revolutionized manufacturing processes for a leading automotive parts supplier through advanced CAM optimization and custom tooling strategies.",
    metrics: [
      { value: "38%", label: "Time Reduction" },
      { value: "$180K", label: "Annual Savings" },
      { value: "45%", label: "Surface Finish Improvement" },
    ],
    client: {
      name: "Michael Thompson",
      title: "Manufacturing Director, AutoParts Inc.",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      quote: "CADCAMX didn't just meet our expectations – they exceeded them by a mile. The 38% reduction in toolpath time has revolutionized our production schedule, and the quality improvements have impressed even our most demanding clients.",
    },
    objective: {
      description: "Our client, a leading automotive parts manufacturer with 50+ years of experience, approached us with a critical challenge: their traditional mold manufacturing processes were becoming increasingly inefficient and costly. With growing competition and tighter margins, they needed a solution that would dramatically reduce production time while maintaining their renowned quality standards.",
      goals: [
        "Reduce toolpath generation time by minimum 30%",
        "Maintain precision tolerance of ±0.0001\"",
        "Improve surface finish quality by 25%",
        "Reduce material waste by 20%",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Analysis & Assessment",
          description: "Comprehensive evaluation of existing workflows, tooling strategies, and manufacturing constraints.",
        },
        {
          title: "Phase 2: CAD Optimization",
          description: "Advanced 3D modeling techniques with parametric design optimization for manufacturability.",
        },
        {
          title: "Phase 3: CAM Strategy Development",
          description: "Custom toolpath strategies using high-speed machining and adaptive clearing techniques.",
        },
        {
          title: "Phase 4: Implementation & Testing",
          description: "Gradual rollout with continuous monitoring and optimization based on real-world performance data.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks Premium", category: "3D CAD Modeling", icon: FaCube },
      { name: "Mastercam X7", category: "CAM Programming", icon: FaCogs },
      { name: "Vericut", category: "CNC Simulation", icon: FaMicroscope },
      { name: "GD&T Analysis", category: "Quality Control", icon: FaChartLine },
    ],
    results: [
      { value: "38%", label: "Toolpath Time Reduction", description: "From 12 hours to 7.4 hours average" },
      { value: "$180K", label: "Annual Cost Savings", description: "Reduced labor and material costs" },
      { value: "45%", label: "Surface Finish Improvement", description: "Ra 0.8μm to Ra 0.4μm average" },
      { value: "23%", label: "Material Waste Reduction", description: "Optimized cutting strategies" },
    ],
  },
  {
    slug: "aerospace-titanium-components",
    title: "Achieved 99.8% Accuracy in Aerospace Component Manufacturing",
    industry: "Aerospace",
    duration: "14 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop",
    subtitle: "Delivering mission-critical precision for aerospace titanium components",
    description: "Delivered mission-critical precision for aerospace titanium components using advanced 5-axis machining strategies and quality optimization.",
    metrics: [
      { value: "99.8%", label: "Accuracy Rate" },
      { value: "45%", label: "Cycle Reduction" },
      { value: "$420K", label: "Annual Savings" },
    ],
    client: {
      name: "Emily Watson",
      title: "Chief Technology Officer, AeroTech",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
      quote: "The aerospace components they designed for us met every specification perfectly. Their attention to detail and understanding of complex manufacturing requirements is outstanding.",
    },
    objective: {
      description: "A leading aerospace manufacturer needed to improve the precision and efficiency of titanium component production for next-generation aircraft. The components required extremely tight tolerances and superior surface finishes to meet stringent aerospace standards.",
      goals: [
        "Achieve 99.8% dimensional accuracy",
        "Reduce cycle time by minimum 40%",
        "Maintain AS9100 compliance",
        "Optimize tool life and reduce costs",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Requirements Analysis",
          description: "Detailed study of aerospace specifications, material properties, and manufacturing constraints.",
        },
        {
          title: "Phase 2: Advanced 5-Axis Strategy",
          description: "Development of optimized 5-axis machining strategies for complex titanium geometries.",
        },
        {
          title: "Phase 3: Simulation & Validation",
          description: "Comprehensive simulation testing to ensure compliance with aerospace quality standards.",
        },
        {
          title: "Phase 4: Production Implementation",
          description: "Controlled rollout with real-time monitoring and continuous process optimization.",
        },
      ],
    },
    tools: [
      { name: "CATIA V6", category: "3D CAD Modeling", icon: FaCube },
      { name: "PowerMill", category: "5-Axis CAM", icon: FaCogs },
      { name: "ANSYS", category: "Simulation", icon: FaMicroscope },
      { name: "CMM Programming", category: "Quality Inspection", icon: FaChartLine },
    ],
    results: [
      { value: "99.8%", label: "Dimensional Accuracy", description: "Exceeding aerospace standards" },
      { value: "45%", label: "Cycle Time Reduction", description: "From 18 hours to 9.9 hours" },
      { value: "$420K", label: "Annual Savings", description: "Reduced tooling and labor costs" },
      { value: "100%", label: "AS9100 Compliance", description: "All parts passed first-time inspection" },
    ],
  },
  {
    slug: "surgical-instrument-optimization",
    title: "Surgical Instrument Design Optimization",
    industry: "Medical",
    duration: "6 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&h=800&fit=crop",
    subtitle: "Enhanced manufacturing efficiency for surgical instruments through advanced CAD modeling",
    description: "Enhanced manufacturing efficiency for surgical instruments through advanced CAD modeling and precision toolpath optimization.",
    metrics: [
      { value: "42%", label: "Cost Reduction" },
      { value: "99.9%", label: "Precision" },
      { value: "3 Weeks", label: "Time Saved" },
    ],
    client: {
      name: "Sarah Chen",
      title: "VP Engineering, MedTech Solutions",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      quote: "The level of expertise and attention to detail from CADCAMX is unmatched. They transformed our entire manufacturing process and delivered results that exceeded our most optimistic projections.",
    },
    objective: {
      description: "A medical device manufacturer needed to optimize their surgical instrument production line to meet increasing demand while maintaining the highest quality standards required for medical applications.",
      goals: [
        "Reduce manufacturing costs by 40%",
        "Achieve 99.9% precision tolerance",
        "Accelerate production timeline by 3 weeks",
        "Maintain FDA compliance and biocompatibility",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Design Review",
          description: "Comprehensive analysis of existing surgical instrument designs and manufacturing processes.",
        },
        {
          title: "Phase 2: CAD Optimization",
          description: "Advanced modeling with focus on manufacturability and quality optimization.",
        },
        {
          title: "Phase 3: Precision Toolpath Development",
          description: "Custom CAM strategies for medical-grade stainless steel and titanium components.",
        },
        {
          title: "Phase 4: Quality Validation",
          description: "Rigorous testing and validation to ensure FDA compliance and biocompatibility.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks Medical", category: "3D CAD Modeling", icon: FaCube },
      { name: "Mastercam", category: "Precision CAM", icon: FaCogs },
      { name: "Quality Analysis", category: "FDA Compliance", icon: FaMicroscope },
      { name: "Statistical Control", category: "Process Monitoring", icon: FaChartLine },
    ],
    results: [
      { value: "42%", label: "Cost Reduction", description: "Optimized manufacturing processes" },
      { value: "99.9%", label: "Precision Achieved", description: "Exceeding medical standards" },
      { value: "3 Weeks", label: "Time Saved", description: "Accelerated production timeline" },
      { value: "100%", label: "FDA Compliance", description: "All instruments approved" },
    ],
  },
  {
    slug: "heavy-machinery-redesign",
    title: "Heavy Machinery Component Redesign",
    industry: "Industrial",
    duration: "8 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&h=800&fit=crop",
    subtitle: "Optimizing mining equipment components for durability and efficiency",
    description: "Redesigned critical components for mining equipment, achieving significant weight reduction while maintaining structural integrity.",
    metrics: [
      { value: "28%", label: "Weight Reduction" },
      { value: "$250K", label: "Annual Savings" },
      { value: "15%", label: "Faster Production" },
    ],
    client: {
      name: "Robert Martinez",
      title: "Engineering Manager, MiningTech Corp",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      quote: "The redesign of our critical mining components has exceeded all expectations. CADCAMX delivered a solution that reduced weight without compromising strength, which directly translated to fuel savings and improved equipment performance.",
    },
    objective: {
      description: "A global mining equipment manufacturer needed to redesign heavy-duty components to reduce weight and improve fuel efficiency while maintaining the structural integrity required for harsh mining environments.",
      goals: [
        "Reduce component weight by 25%",
        "Maintain structural integrity under extreme loads",
        "Accelerate production by 15%",
        "Achieve $200K+ annual cost savings",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Structural Analysis",
          description: "Finite element analysis (FEA) to identify areas for optimization without compromising strength.",
        },
        {
          title: "Phase 2: Design Optimization",
          description: "Topology optimization and generative design techniques to reduce material while maintaining performance.",
        },
        {
          title: "Phase 3: Prototype Development",
          description: "Rapid prototyping and stress testing to validate design improvements.",
        },
        {
          title: "Phase 4: Production Integration",
          description: "Seamless integration into existing manufacturing workflows with optimized toolpaths.",
        },
      ],
    },
    tools: [
      { name: "Autodesk Inventor", category: "3D CAD Modeling", icon: FaCube },
      { name: "ANSYS Structural", category: "FEA Analysis", icon: FaMicroscope },
      { name: "EdgeCAM", category: "CAM Programming", icon: FaCogs },
      { name: "Quality Control", category: "Testing & Validation", icon: FaChartLine },
    ],
    results: [
      { value: "28%", label: "Weight Reduction", description: "From 850kg to 612kg average" },
      { value: "$250K", label: "Annual Savings", description: "Reduced material and fuel costs" },
      { value: "15%", label: "Production Speed", description: "Faster machining times" },
      { value: "100%", label: "Strength Maintained", description: "All stress tests passed" },
    ],
  },
  {
    slug: "consumer-electronics-housing",
    title: "Consumer Electronics Housing Design",
    industry: "Electronics",
    duration: "4 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&h=800&fit=crop",
    subtitle: "Optimizing injection molding for consumer electronics",
    description: "Optimized injection molding processes for consumer electronics, reducing material waste and improving cycle times.",
    metrics: [
      { value: "35%", label: "Material Savings" },
      { value: "22%", label: "Cycle Time Reduction" },
      { value: "$95K", label: "Cost Savings" },
    ],
    client: {
      name: "Jennifer Lee",
      title: "Product Development Lead, TechGadgets Inc.",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      quote: "CADCAMX helped us slash our production costs while improving product quality. The injection mold optimization they delivered has become our competitive advantage in a crowded market.",
    },
    objective: {
      description: "A consumer electronics manufacturer sought to reduce production costs and improve time-to-market for their flagship product line through injection mold optimization.",
      goals: [
        "Reduce material waste by 30%",
        "Decrease cycle time by 20%",
        "Improve part consistency and quality",
        "Lower tooling maintenance costs",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Mold Flow Analysis",
          description: "Advanced simulation to optimize gate locations, cooling channels, and fill patterns.",
        },
        {
          title: "Phase 2: Design for Manufacturing",
          description: "Redesign housing components for optimal moldability and reduced material usage.",
        },
        {
          title: "Phase 3: Tooling Optimization",
          description: "Advanced CAM strategies for mold manufacturing with conformal cooling integration.",
        },
        {
          title: "Phase 4: Production Validation",
          description: "Real-world testing and iterative refinement to achieve target metrics.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks Plastics", category: "Mold Flow Analysis", icon: FaMicroscope },
      { name: "Fusion 360", category: "3D CAD Design", icon: FaCube },
      { name: "HSMWorks", category: "CAM Programming", icon: FaCogs },
      { name: "Quality Metrics", category: "Process Control", icon: FaChartLine },
    ],
    results: [
      { value: "35%", label: "Material Savings", description: "Reduced plastic consumption" },
      { value: "22%", label: "Cycle Time", description: "From 45s to 35s average" },
      { value: "$95K", label: "Annual Savings", description: "Combined material and time savings" },
      { value: "40%", label: "Defect Reduction", description: "Improved part consistency" },
    ],
  },
  {
    slug: "transmission-manufacturing",
    title: "Transmission Component Manufacturing Excellence",
    industry: "Automotive",
    duration: "10 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop",
    subtitle: "Advanced machining for complex transmission systems",
    description: "Developed advanced machining strategies for complex transmission components, achieving superior surface finish and dimensional accuracy.",
    metrics: [
      { value: "50%", label: "Setup Time Reduction" },
      { value: "99.95%", label: "Dimensional Accuracy" },
      { value: "$320K", label: "Annual Savings" },
    ],
    client: {
      name: "David Rodriguez",
      title: "Operations Manager, AutoDrive Systems",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      quote: "Working with CADCAMX at $8/hour was the best investment we've made. The quality of work rivals firms charging 10x more, and their turnaround time is incredible. Our transmission components now exceed OEM specifications.",
    },
    objective: {
      description: "An automotive transmission manufacturer needed to improve manufacturing efficiency for complex gear and housing components while meeting strict automotive quality standards.",
      goals: [
        "Reduce setup time by 45%",
        "Achieve 99.95% dimensional accuracy",
        "Improve surface finish by 30%",
        "Generate $300K+ annual savings",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Process Analysis",
          description: "Detailed study of existing machining operations and identification of bottlenecks.",
        },
        {
          title: "Phase 2: Fixture Design",
          description: "Custom fixture development to reduce setup time and improve repeatability.",
        },
        {
          title: "Phase 3: Advanced Toolpath Strategies",
          description: "Implementation of high-efficiency roughing and precision finishing techniques.",
        },
        {
          title: "Phase 4: Quality Assurance",
          description: "Statistical process control implementation and continuous improvement protocols.",
        },
      ],
    },
    tools: [
      { name: "NX Siemens", category: "CAD/CAM Integration", icon: FaCube },
      { name: "Mastercam Multi-Axis", category: "Advanced Machining", icon: FaCogs },
      { name: "Vericut", category: "Simulation & Verification", icon: FaMicroscope },
      { name: "SPC Software", category: "Quality Control", icon: FaChartLine },
    ],
    results: [
      { value: "50%", label: "Setup Time Reduction", description: "From 4 hours to 2 hours average" },
      { value: "99.95%", label: "Dimensional Accuracy", description: "Within ±0.0002\" tolerance" },
      { value: "$320K", label: "Annual Savings", description: "Labor and scrap reduction" },
      { value: "35%", label: "Surface Finish Improvement", description: "Ra 1.6μm to Ra 1.0μm" },
    ],
  },
  {
    slug: "wind-turbine-optimization",
    title: "Wind Turbine Blade Manufacturing Optimization",
    industry: "Renewable Energy",
    duration: "12 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop",
    subtitle: "Revolutionizing renewable energy manufacturing",
    description: "Optimized wind turbine blade manufacturing processes, improving aerodynamic efficiency and reducing production costs.",
    metrics: [
      { value: "18%", label: "Efficiency Gain" },
      { value: "25%", label: "Cost Reduction" },
      { value: "$450K", label: "Project Value" },
    ],
    client: {
      name: "Dr. Anna Petersen",
      title: "VP Engineering, GreenWind Technologies",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      quote: "CADCAMX's innovative approach to our blade manufacturing transformed our production capabilities. The aerodynamic improvements directly translate to higher energy output for our customers.",
    },
    objective: {
      description: "A renewable energy company needed to optimize their wind turbine blade manufacturing to improve aerodynamic performance and reduce production costs in a highly competitive market.",
      goals: [
        "Improve blade aerodynamic efficiency by 15%",
        "Reduce manufacturing costs by 20%",
        "Decrease production time by 30%",
        "Enhance structural integrity and lifespan",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Aerodynamic Analysis",
          description: "CFD simulation and wind tunnel testing to optimize blade geometry for maximum efficiency.",
        },
        {
          title: "Phase 2: Mold Design",
          description: "Advanced composite mold design with optimized layup strategies and curing processes.",
        },
        {
          title: "Phase 3: Manufacturing Automation",
          description: "Robotic layup programming and CNC trimming optimization for consistent quality.",
        },
        {
          title: "Phase 4: Quality Validation",
          description: "Comprehensive testing protocol including structural analysis and field performance monitoring.",
        },
      ],
    },
    tools: [
      { name: "CATIA Composites", category: "Composite Design", icon: FaCube },
      { name: "ANSYS Fluent", category: "CFD Analysis", icon: FaMicroscope },
      { name: "PowerMill", category: "5-Axis Machining", icon: FaCogs },
      { name: "Quality Systems", category: "Testing & Monitoring", icon: FaChartLine },
    ],
    results: [
      { value: "18%", label: "Efficiency Gain", description: "Improved power coefficient" },
      { value: "25%", label: "Cost Reduction", description: "Material and labor optimization" },
      { value: "$450K", label: "Project Value", description: "Total cost savings delivered" },
      { value: "30%", label: "Faster Production", description: "Reduced cycle time" },
    ],
  },
  {
    slug: "tactical-equipment-design",
    title: "Tactical Equipment Component Design",
    industry: "Defense",
    duration: "14 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=800&fit=crop",
    subtitle: "Meeting stringent military specifications with precision engineering",
    description: "Designed and manufactured precision components for defense applications, meeting stringent military specifications and quality standards.",
    metrics: [
      { value: "100%", label: "Spec Compliance" },
      { value: "30%", label: "Weight Reduction" },
      { value: "6 Months", label: "Ahead of Schedule" },
    ],
    client: {
      name: "Colonel James Harrison (Ret.)",
      title: "Program Director, DefenseTech Solutions",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg",
      quote: "CADCAMX delivered mission-critical components that exceeded MIL-SPEC requirements. Their attention to detail and understanding of defense manufacturing protocols is exceptional.",
    },
    objective: {
      description: "A defense contractor required engineering support for tactical equipment components that must meet strict military specifications while achieving weight reduction goals for improved field performance.",
      goals: [
        "Achieve 100% MIL-SPEC compliance",
        "Reduce component weight by 25%",
        "Maintain durability under extreme conditions",
        "Accelerate delivery by 6 months",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Requirements Definition",
          description: "Comprehensive review of military specifications and performance requirements.",
        },
        {
          title: "Phase 2: Advanced Materials Engineering",
          description: "Selection and optimization of lightweight alloys and composite materials.",
        },
        {
          title: "Phase 3: Precision Manufacturing",
          description: "Multi-axis machining and quality control protocols exceeding MIL-STD standards.",
        },
        {
          title: "Phase 4: Testing & Qualification",
          description: "Rigorous testing including environmental, stress, and field performance validation.",
        },
      ],
    },
    tools: [
      { name: "NX CAD/CAM", category: "Integrated Design", icon: FaCube },
      { name: "Mastercam", category: "Precision Machining", icon: FaCogs },
      { name: "ANSYS Mechanical", category: "Stress Analysis", icon: FaMicroscope },
      { name: "MIL-STD Testing", category: "Quality Assurance", icon: FaChartLine },
    ],
    results: [
      { value: "100%", label: "MIL-SPEC Compliance", description: "All standards exceeded" },
      { value: "30%", label: "Weight Reduction", description: "Improved field mobility" },
      { value: "6 Months", label: "Early Delivery", description: "Ahead of schedule" },
      { value: "Zero", label: "Quality Defects", description: "Perfect first-time quality" },
    ],
  },
  {
    slug: "pump-impeller-redesign",
    title: "Industrial Pump Impeller Redesign",
    industry: "Manufacturing",
    duration: "7 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop",
    subtitle: "Enhancing pump efficiency through advanced impeller design",
    description: "Redesigned industrial pump impellers using CFD analysis and advanced manufacturing, achieving 24% efficiency improvement.",
    metrics: [
      { value: "24%", label: "Efficiency Gain" },
      { value: "$185K", label: "Annual Savings" },
      { value: "40%", label: "Longer Lifespan" },
    ],
    client: {
      name: "Thomas Anderson",
      title: "Chief Engineer, FlowTech Industries",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      quote: "The impeller redesign has transformed our pump performance. We're seeing significant energy savings across our entire product line, and customer satisfaction has never been higher.",
    },
    objective: {
      description: "An industrial pump manufacturer needed to improve impeller efficiency to meet new energy standards while extending component lifespan in demanding applications.",
      goals: [
        "Increase hydraulic efficiency by 20%",
        "Extend impeller lifespan by 35%",
        "Reduce manufacturing costs by 15%",
        "Meet ISO 9906 performance standards",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: CFD Analysis",
          description: "Computational fluid dynamics simulation to optimize blade geometry and flow characteristics.",
        },
        {
          title: "Phase 2: Design Optimization",
          description: "Parametric modeling with multi-objective optimization for efficiency and durability.",
        },
        {
          title: "Phase 3: Advanced Manufacturing",
          description: "5-axis machining strategies for complex blade geometries with tight tolerances.",
        },
        {
          title: "Phase 4: Performance Testing",
          description: "Comprehensive flow testing and field validation across operating conditions.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks Flow Simulation", category: "CFD Analysis", icon: FaMicroscope },
      { name: "NX CAM", category: "Multi-Axis Machining", icon: FaCogs },
      { name: "Fusion 360", category: "Parametric Design", icon: FaCube },
      { name: "ISO Testing", category: "Performance Validation", icon: FaChartLine },
    ],
    results: [
      { value: "24%", label: "Efficiency Improvement", description: "Hydraulic efficiency gain" },
      { value: "$185K", label: "Energy Savings", description: "Annual customer savings" },
      { value: "40%", label: "Extended Lifespan", description: "Improved wear resistance" },
      { value: "18%", label: "Cost Reduction", description: "Manufacturing optimization" },
    ],
  },
  {
    slug: "robotic-arm-joint-design",
    title: "Robotic Arm Joint Optimization",
    industry: "Robotics",
    duration: "9 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop",
    subtitle: "Precision engineering for next-generation industrial robotics",
    description: "Optimized robotic arm joints for industrial automation, achieving 35% weight reduction and improved motion precision.",
    metrics: [
      { value: "35%", label: "Weight Reduction" },
      { value: "50%", label: "Precision Improvement" },
      { value: "$275K", label: "Development Savings" },
    ],
    client: {
      name: "Dr. Maria Santos",
      title: "Robotics Division Head, AutomationPro",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-10.jpg",
      quote: "CADCAMX's engineering expertise accelerated our robotic arm development by months. The joint optimization they delivered provides the precision and reliability our customers demand.",
    },
    objective: {
      description: "A robotics manufacturer sought to redesign industrial robot arm joints to reduce weight, improve precision, and enhance durability for demanding manufacturing environments.",
      goals: [
        "Reduce joint assembly weight by 30%",
        "Improve positioning precision by 45%",
        "Extend service life to 10+ years",
        "Accelerate time-to-market by 3 months",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Kinematic Analysis",
          description: "Motion simulation and load analysis to optimize joint geometry and bearing selection.",
        },
        {
          title: "Phase 2: Lightweight Design",
          description: "Topology optimization and material selection for aluminum and composite components.",
        },
        {
          title: "Phase 3: Precision Manufacturing",
          description: "Advanced CNC strategies for tight-tolerance bearing bores and mating surfaces.",
        },
        {
          title: "Phase 4: Integration Testing",
          description: "Full assembly testing including repeatability, accuracy, and longevity validation.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks Motion", category: "Kinematic Analysis", icon: FaMicroscope },
      { name: "CATIA V6", category: "Assembly Design", icon: FaCube },
      { name: "Mastercam", category: "Precision Machining", icon: FaCogs },
      { name: "CMM Inspection", category: "Quality Control", icon: FaChartLine },
    ],
    results: [
      { value: "35%", label: "Weight Reduction", description: "Improved payload capacity" },
      { value: "50%", label: "Precision Gain", description: "±0.02mm repeatability" },
      { value: "$275K", label: "Development Savings", description: "Reduced prototyping costs" },
      { value: "3 Months", label: "Time Saved", description: "Accelerated launch" },
    ],
  },
  {
    slug: "dental-implant-manufacturing",
    title: "Dental Implant Manufacturing Excellence",
    industry: "Medical",
    duration: "8 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop",
    subtitle: "Precision engineering for biomedical implants",
    description: "Developed advanced manufacturing processes for titanium dental implants, achieving medical-grade precision and FDA compliance.",
    metrics: [
      { value: "99.98%", label: "Quality Rate" },
      { value: "32%", label: "Cost Reduction" },
      { value: "100%", label: "FDA Compliance" },
    ],
    client: {
      name: "Dr. Patricia Williams",
      title: "R&D Director, DentalTech Innovations",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-11.jpg",
      quote: "The precision and quality consistency CADCAMX achieved for our dental implants is remarkable. Their understanding of biomedical manufacturing requirements is world-class.",
    },
    objective: {
      description: "A dental implant manufacturer required engineering support to scale production while maintaining the highest quality standards and achieving FDA 510(k) clearance for new implant designs.",
      goals: [
        "Achieve 99.95%+ first-pass quality rate",
        "Reduce per-unit manufacturing cost by 30%",
        "Obtain FDA 510(k) clearance",
        "Scale production to 50,000 units/year",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Regulatory Compliance",
          description: "Design for FDA requirements including biocompatibility and sterility protocols.",
        },
        {
          title: "Phase 2: Micro-Precision Machining",
          description: "Swiss-type CNC programming for complex thread geometries and surface finishes.",
        },
        {
          title: "Phase 3: Surface Treatment",
          description: "Optimized surface roughness parameters for osseointegration enhancement.",
        },
        {
          title: "Phase 4: Quality Systems",
          description: "Implementation of ISO 13485 quality management and statistical process control.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks Medical", category: "Biomedical CAD", icon: FaCube },
      { name: "Swiss-Type CAM", category: "Micro Machining", icon: FaCogs },
      { name: "Surface Analysis", category: "Quality Control", icon: FaMicroscope },
      { name: "ISO 13485 Systems", category: "Quality Management", icon: FaChartLine },
    ],
    results: [
      { value: "99.98%", label: "Quality Rate", description: "First-pass acceptance" },
      { value: "32%", label: "Cost Reduction", description: "Per-unit manufacturing" },
      { value: "100%", label: "FDA Compliance", description: "510(k) clearance achieved" },
      { value: "65K", label: "Production Capacity", description: "Units per year" },
    ],
  },
  {
    slug: "marine-propeller-optimization",
    title: "Marine Propeller Hydrodynamic Optimization",
    industry: "Marine",
    duration: "10 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
    subtitle: "Optimizing marine propulsion for efficiency and performance",
    description: "Redesigned marine propellers using CFD analysis and 5-axis machining, achieving 16% fuel efficiency improvement.",
    metrics: [
      { value: "16%", label: "Fuel Efficiency" },
      { value: "22%", label: "Thrust Improvement" },
      { value: "$390K", label: "Annual Savings" },
    ],
    client: {
      name: "Captain William Foster",
      title: "Fleet Engineering Manager, OceanTech Marine",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-12.jpg",
      quote: "The propeller optimization has delivered fuel savings that exceeded our projections. CADCAMX's hydrodynamic expertise and manufacturing precision are exceptional.",
    },
    objective: {
      description: "A commercial marine operator needed to improve fuel efficiency and thrust performance across their fleet through propeller redesign and optimization.",
      goals: [
        "Improve fuel efficiency by 12%+",
        "Increase thrust by 18%",
        "Reduce cavitation and noise",
        "Extend propeller service life",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Hydrodynamic Analysis",
          description: "CFD simulation to optimize blade pitch, rake, and skew for maximum efficiency.",
        },
        {
          title: "Phase 2: Blade Design",
          description: "Advanced geometry optimization for cavitation prevention and noise reduction.",
        },
        {
          title: "Phase 3: 5-Axis Manufacturing",
          description: "Precision machining of complex blade surfaces with optimal surface finish.",
        },
        {
          title: "Phase 4: Sea Trials",
          description: "Comprehensive on-water testing and performance validation across conditions.",
        },
      ],
    },
    tools: [
      { name: "CATIA Marine", category: "Propeller Design", icon: FaCube },
      { name: "ANSYS CFX", category: "Hydrodynamic Analysis", icon: FaMicroscope },
      { name: "PowerMill 5-Axis", category: "Blade Machining", icon: FaCogs },
      { name: "Performance Testing", category: "Validation", icon: FaChartLine },
    ],
    results: [
      { value: "16%", label: "Fuel Efficiency", description: "Measured improvement" },
      { value: "22%", label: "Thrust Gain", description: "At design speed" },
      { value: "$390K", label: "Fleet Savings", description: "Annual fuel costs" },
      { value: "45%", label: "Cavitation Reduction", description: "Extended service life" },
    ],
  },
  {
    slug: "semiconductor-tooling",
    title: "Semiconductor Manufacturing Tooling",
    industry: "Electronics",
    duration: "11 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=1200&h=800&fit=crop",
    subtitle: "Ultra-precision tooling for semiconductor production",
    description: "Developed ultra-precision tooling for semiconductor manufacturing equipment, achieving sub-micron tolerances.",
    metrics: [
      { value: "±0.5μm", label: "Tolerance Achieved" },
      { value: "38%", label: "Yield Improvement" },
      { value: "$520K", label: "Value Delivered" },
    ],
    client: {
      name: "Dr. Kevin Zhang",
      title: "Manufacturing Director, ChipTech Solutions",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-13.jpg",
      quote: "CADCAMX delivered sub-micron precision tooling that enabled us to achieve our production yield targets. Their expertise in ultra-precision manufacturing is world-class.",
    },
    objective: {
      description: "A semiconductor equipment manufacturer required ultra-precision tooling components to improve wafer processing yields and meet next-generation technology node requirements.",
      goals: [
        "Achieve ±0.5μm dimensional tolerance",
        "Improve wafer processing yield by 30%",
        "Reduce tooling replacement frequency",
        "Meet cleanroom compatibility standards",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Precision Requirements",
          description: "Detailed analysis of tolerance stack-up and thermal stability requirements.",
        },
        {
          title: "Phase 2: Material Selection",
          description: "Selection of ultra-stable materials with optimal thermal and mechanical properties.",
        },
        {
          title: "Phase 3: Ultra-Precision Machining",
          description: "Diamond turning and micro-machining in controlled environment.",
        },
        {
          title: "Phase 4: Metrology Validation",
          description: "CMM and optical measurement validation to sub-micron levels.",
        },
      ],
    },
    tools: [
      { name: "Precision Design Pro", category: "Ultra-Precision CAD", icon: FaCube },
      { name: "Diamond Turning CAM", category: "Micro Machining", icon: FaCogs },
      { name: "Optical Metrology", category: "Sub-Micron Measurement", icon: FaMicroscope },
      { name: "SPC Systems", category: "Process Control", icon: FaChartLine },
    ],
    results: [
      { value: "±0.5μm", label: "Tolerance Achieved", description: "Sub-micron precision" },
      { value: "38%", label: "Yield Improvement", description: "Wafer processing" },
      { value: "$520K", label: "Value Delivered", description: "Project impact" },
      { value: "3x", label: "Lifespan Extension", description: "Tooling longevity" },
    ],
  },
  {
    slug: "hydraulic-valve-redesign",
    title: "Hydraulic Valve Body Redesign",
    industry: "Industrial",
    duration: "7 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=800&fit=crop",
    subtitle: "Optimizing hydraulic systems for industrial automation",
    description: "Redesigned hydraulic valve bodies for improved flow characteristics and manufacturing efficiency.",
    metrics: [
      { value: "28%", label: "Flow Improvement" },
      { value: "35%", label: "Cost Reduction" },
      { value: "$215K", label: "Annual Savings" },
    ],
    client: {
      name: "Marcus Johnson",
      title: "Product Manager, HydraulicsPro",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-14.jpg",
      quote: "The valve redesign exceeded our expectations in every metric. CADCAMX's fluid dynamics expertise combined with manufacturing optimization delivered exceptional results.",
    },
    objective: {
      description: "A hydraulic systems manufacturer needed to improve valve performance and reduce manufacturing costs while maintaining pressure ratings and reliability.",
      goals: [
        "Improve flow efficiency by 25%",
        "Reduce manufacturing cost by 30%",
        "Maintain 5000 PSI pressure rating",
        "Simplify assembly process",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Flow Analysis",
          description: "CFD simulation to optimize internal passages and minimize pressure drop.",
        },
        {
          title: "Phase 2: DFM Optimization",
          description: "Redesign for manufacturability with reduced machining operations.",
        },
        {
          title: "Phase 3: Advanced Machining",
          description: "Multi-spindle and tombstone strategies for efficient production.",
        },
        {
          title: "Phase 4: Pressure Testing",
          description: "Comprehensive testing to validate performance under operating conditions.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks Flow", category: "CFD Analysis", icon: FaMicroscope },
      { name: "Fusion 360", category: "DFM Design", icon: FaCube },
      { name: "Mastercam Mill-Turn", category: "Multi-Axis CAM", icon: FaCogs },
      { name: "Pressure Testing", category: "Validation", icon: FaChartLine },
    ],
    results: [
      { value: "28%", label: "Flow Improvement", description: "Reduced pressure drop" },
      { value: "35%", label: "Cost Reduction", description: "Manufacturing optimization" },
      { value: "$215K", label: "Annual Savings", description: "Combined benefits" },
      { value: "42%", label: "Faster Assembly", description: "Simplified design" },
    ],
  },
  {
    slug: "orthopedic-implant-design",
    title: "Orthopedic Implant Design & Manufacturing",
    industry: "Medical",
    duration: "13 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop",
    subtitle: "Patient-specific implants with advanced biomechanics",
    description: "Developed patient-specific orthopedic implants using advanced CAD/CAM and additive manufacturing technologies.",
    metrics: [
      { value: "95%", label: "Patient Outcomes" },
      { value: "48%", label: "Surgery Time Reduction" },
      { value: "100%", label: "Regulatory Compliance" },
    ],
    client: {
      name: "Dr. Lisa Martinez",
      title: "Chief of Orthopedic Surgery, MedicalTech Institute",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-15.jpg",
      quote: "The patient-specific implants from CADCAMX have revolutionized our surgical outcomes. The fit and biomechanical performance are exceptional.",
    },
    objective: {
      description: "An orthopedic medical device company sought to develop patient-specific implants that improve surgical outcomes and reduce procedure time.",
      goals: [
        "Improve patient outcomes by 90%+",
        "Reduce surgery time by 40%",
        "Achieve FDA 510(k) clearance",
        "Develop scalable manufacturing process",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Anatomical Analysis",
          description: "CT/MRI data processing and 3D reconstruction for patient-specific modeling.",
        },
        {
          title: "Phase 2: Biomechanical Design",
          description: "FEA analysis and optimization for stress distribution and bone integration.",
        },
        {
          title: "Phase 3: Additive Manufacturing",
          description: "Titanium 3D printing with biocompatible surface treatments.",
        },
        {
          title: "Phase 4: Clinical Validation",
          description: "Surgical trials and long-term patient outcome monitoring.",
        },
      ],
    },
    tools: [
      { name: "3D Slicer Medical", category: "Medical Imaging", icon: FaCube },
      { name: "ANSYS Mechanical", category: "FEA Analysis", icon: FaMicroscope },
      { name: "Additive CAM", category: "3D Printing", icon: FaCogs },
      { name: "Clinical Systems", category: "Outcome Tracking", icon: FaChartLine },
    ],
    results: [
      { value: "95%", label: "Excellent Outcomes", description: "Patient satisfaction" },
      { value: "48%", label: "Time Reduction", description: "Average surgery duration" },
      { value: "100%", label: "FDA Compliance", description: "Regulatory approval" },
      { value: "300+", label: "Successful Cases", description: "Procedures completed" },
    ],
  },
  {
    slug: "turbine-blade-manufacturing",
    title: "Gas Turbine Blade Precision Manufacturing",
    industry: "Aerospace",
    duration: "16 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=1200&h=800&fit=crop",
    subtitle: "Advanced manufacturing for next-generation jet engines",
    description: "Developed advanced manufacturing processes for single-crystal turbine blades with complex cooling geometries.",
    metrics: [
      { value: "99.9%", label: "Quality Rate" },
      { value: "35%", label: "Efficiency Gain" },
      { value: "$680K", label: "Program Value" },
    ],
    client: {
      name: "Brian Thompson",
      title: "VP Manufacturing, JetTech Propulsion",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-16.jpg",
      quote: "CADCAMX's expertise in turbine blade manufacturing has been instrumental in our next-generation engine program. Their precision and quality consistency are unmatched.",
    },
    objective: {
      description: "An aerospace propulsion manufacturer required advanced manufacturing capabilities for single-crystal turbine blades with internal cooling channels.",
      goals: [
        "Achieve 99.9% first-article quality",
        "Reduce manufacturing cycle time by 30%",
        "Meet AS9100 aerospace standards",
        "Develop 5-axis EDM strategies",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Blade Geometry Analysis",
          description: "Complex surface modeling and thermal analysis for cooling channel optimization.",
        },
        {
          title: "Phase 2: Multi-Process Strategy",
          description: "Integrated 5-axis machining and EDM for internal features.",
        },
        {
          title: "Phase 3: Quality Systems",
          description: "CMM programming and statistical process control implementation.",
        },
        {
          title: "Phase 4: Production Scale-up",
          description: "Process validation and production ramp-up with continuous improvement.",
        },
      ],
    },
    tools: [
      { name: "NX CAD/CAM", category: "Aerospace Design", icon: FaCube },
      { name: "Multi-Axis CAM", category: "5-Axis Machining", icon: FaCogs },
      { name: "EDM Programming", category: "Wire & Sinker EDM", icon: FaMicroscope },
      { name: "AS9100 Systems", category: "Aerospace Quality", icon: FaChartLine },
    ],
    results: [
      { value: "99.9%", label: "Quality Achievement", description: "First-article success" },
      { value: "35%", label: "Efficiency Gain", description: "Cycle time reduction" },
      { value: "$680K", label: "Program Value", description: "Total project worth" },
      { value: "100%", label: "AS9100 Compliance", description: "Aerospace standards met" },
    ],
  },
  {
    slug: "automotive-stamping-die",
    title: "Automotive Stamping Die Optimization",
    industry: "Automotive",
    duration: "9 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=1200&h=800&fit=crop",
    subtitle: "Advanced die design for high-volume automotive production",
    description: "Optimized stamping dies for automotive body panels, reducing springback and improving part quality.",
    metrics: [
      { value: "52%", label: "Springback Reduction" },
      { value: "28%", label: "Scrap Rate Decrease" },
      { value: "$340K", label: "Annual Savings" },
    ],
    client: {
      name: "Rachel Kim",
      title: "Stamping Operations Manager, AutoBody Manufacturing",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-17.jpg",
      quote: "The die optimization from CADCAMX has transformed our stamping operations. We've achieved quality levels we never thought possible with our existing equipment.",
    },
    objective: {
      description: "An automotive tier-1 supplier needed to improve stamping die performance to reduce springback defects and meet tighter dimensional requirements for new vehicle platforms.",
      goals: [
        "Reduce springback by 45%",
        "Decrease scrap rate by 25%",
        "Improve dimensional accuracy",
        "Extend die service life",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Forming Simulation",
          description: "Advanced finite element analysis to predict and compensate for springback.",
        },
        {
          title: "Phase 2: Die Surface Optimization",
          description: "Geometry modification and addendum design for optimal metal flow.",
        },
        {
          title: "Phase 3: Precision Machining",
          description: "High-speed 5-axis milling strategies for complex die surfaces.",
        },
        {
          title: "Phase 4: Tryout & Refinement",
          description: "Iterative testing and optimization to achieve target quality.",
        },
      ],
    },
    tools: [
      { name: "AutoForm", category: "Forming Simulation", icon: FaMicroscope },
      { name: "CATIA Die Design", category: "Surface Modeling", icon: FaCube },
      { name: "PowerMill", category: "High-Speed Machining", icon: FaCogs },
      { name: "CMM Analysis", category: "Dimensional Control", icon: FaChartLine },
    ],
    results: [
      { value: "52%", label: "Springback Reduction", description: "Dimensional accuracy improved" },
      { value: "28%", label: "Scrap Reduction", description: "Quality improvement" },
      { value: "$340K", label: "Annual Savings", description: "Reduced scrap and rework" },
      { value: "60%", label: "Die Life Extension", description: "Improved durability" },
    ],
  },
  {
    slug: "optical-lens-mold",
    title: "Precision Optical Lens Mold Manufacturing",
    industry: "Electronics",
    duration: "10 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&h=800&fit=crop",
    subtitle: "Ultra-precision molds for optical components",
    description: "Developed ultra-precision injection molds for optical lenses with nanometer-level surface quality requirements.",
    metrics: [
      { value: "10nm", label: "Surface Finish" },
      { value: "99.7%", label: "Optical Quality" },
      { value: "$295K", label: "Project Value" },
    ],
    client: {
      name: "Dr. James Chen",
      title: "Optical Engineering Director, VisionTech Optics",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-18.jpg",
      quote: "CADCAMX achieved optical-grade surface finishes that we previously thought required traditional glass grinding. Their ultra-precision capabilities are exceptional.",
    },
    objective: {
      description: "An optical components manufacturer required ultra-precision injection molds to produce plastic lenses meeting optical quality standards typically reserved for ground glass.",
      goals: [
        "Achieve 10nm Ra surface finish",
        "Meet optical transmission >99.5%",
        "Reduce mold cycle time by 25%",
        "Achieve $250K cost savings",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Optical Design",
          description: "Precision lens geometry modeling with tolerance analysis.",
        },
        {
          title: "Phase 2: Mold Flow Optimization",
          description: "Advanced simulation for minimal optical distortion and stress.",
        },
        {
          title: "Phase 3: Diamond Turning",
          description: "Single-point diamond turning for optical-grade surface finish.",
        },
        {
          title: "Phase 4: Optical Validation",
          description: "Interferometry and transmission testing to validate optical performance.",
        },
      ],
    },
    tools: [
      { name: "Zemax OpticStudio", category: "Optical Design", icon: FaCube },
      { name: "Diamond Turning CAM", category: "Ultra-Precision", icon: FaCogs },
      { name: "Interferometry", category: "Surface Metrology", icon: FaMicroscope },
      { name: "Optical Testing", category: "Quality Validation", icon: FaChartLine },
    ],
    results: [
      { value: "10nm", label: "Surface Finish Ra", description: "Optical-grade quality" },
      { value: "99.7%", label: "Optical Quality", description: "Transmission achieved" },
      { value: "$295K", label: "Project Value", description: "Total worth" },
      { value: "32%", label: "Cycle Time Reduction", description: "Production optimization" },
    ],
  },
  {
    slug: "aerospace-bracket-lightweighting",
    title: "Aerospace Bracket Lightweighting Program",
    industry: "Aerospace",
    duration: "11 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
    subtitle: "Topology optimization for next-generation aircraft",
    description: "Redesigned aircraft structural brackets using topology optimization and additive manufacturing, achieving 47% weight reduction.",
    metrics: [
      { value: "47%", label: "Weight Reduction" },
      { value: "100%", label: "Structural Integrity" },
      { value: "$580K", label: "Fuel Savings Value" },
    ],
    client: {
      name: "Captain Sarah Johnson",
      title: "Structures Engineering Lead, AeroSpace Dynamics",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-19.jpg",
      quote: "The bracket redesigns have exceeded our weight reduction targets while maintaining full structural integrity. CADCAMX's topology optimization expertise is world-class.",
    },
    objective: {
      description: "An aerospace manufacturer sought to reduce aircraft weight through structural bracket optimization while maintaining safety factors and meeting FAA certification requirements.",
      goals: [
        "Achieve 40%+ weight reduction",
        "Maintain all safety factors >1.5",
        "Qualify for additive manufacturing",
        "Generate $500K+ lifecycle value",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Load Case Analysis",
          description: "Comprehensive structural analysis of all operational load scenarios.",
        },
        {
          title: "Phase 2: Topology Optimization",
          description: "AI-driven generative design for optimal strength-to-weight ratio.",
        },
        {
          title: "Phase 3: Additive Manufacturing",
          description: "Metal 3D printing process development and qualification.",
        },
        {
          title: "Phase 4: FAA Certification",
          description: "Testing and documentation for regulatory approval.",
        },
      ],
    },
    tools: [
      { name: "CATIA Generative Design", category: "Topology Optimization", icon: FaCube },
      { name: "ANSYS Structural", category: "FEA Analysis", icon: FaMicroscope },
      { name: "Additive CAM", category: "Metal 3D Printing", icon: FaCogs },
      { name: "FAA Compliance", category: "Certification", icon: FaChartLine },
    ],
    results: [
      { value: "47%", label: "Weight Reduction", description: "Average across 12 brackets" },
      { value: "100%", label: "Structural Integrity", description: "All safety factors met" },
      { value: "$580K", label: "Lifecycle Value", description: "Fuel savings over 20 years" },
      { value: "FAA", label: "Certified", description: "Full regulatory approval" },
    ],
  },
  {
    slug: "injection-mold-cooling",
    title: "Conformal Cooling Injection Mold Innovation",
    industry: "Manufacturing",
    duration: "8 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1581092583537-20d51876f4ce?w=1200&h=800&fit=crop",
    subtitle: "Revolutionary cooling technology for injection molding",
    description: "Implemented conformal cooling channels in injection molds using additive manufacturing, achieving 40% cycle time reduction.",
    metrics: [
      { value: "40%", label: "Cycle Time Reduction" },
      { value: "65%", label: "Cooling Efficiency" },
      { value: "$425K", label: "Annual Savings" },
    ],
    client: {
      name: "Daniel Park",
      title: "Molding Operations Director, PlasticsPro Manufacturing",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-20.jpg",
      quote: "The conformal cooling solution from CADCAMX has revolutionized our production. We're seeing cycle time reductions we never thought possible with conventional cooling.",
    },
    objective: {
      description: "A high-volume injection molder needed to dramatically reduce cycle times and improve part quality through advanced cooling technology.",
      goals: [
        "Reduce cycle time by 35%",
        "Improve cooling uniformity by 60%",
        "Eliminate warpage defects",
        "Achieve $400K+ annual ROI",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Thermal Analysis",
          description: "Mold flow simulation to identify cooling bottlenecks and opportunities.",
        },
        {
          title: "Phase 2: Conformal Design",
          description: "Design of conformal cooling channels following part geometry.",
        },
        {
          title: "Phase 3: Additive Manufacturing",
          description: "Metal 3D printing of mold inserts with integrated cooling.",
        },
        {
          title: "Phase 4: Production Validation",
          description: "Molding trials and optimization to achieve target metrics.",
        },
      ],
    },
    tools: [
      { name: "Moldflow", category: "Thermal Simulation", icon: FaMicroscope },
      { name: "Fusion 360", category: "Conformal Design", icon: FaCube },
      { name: "Metal AM Systems", category: "Additive Manufacturing", icon: FaCogs },
      { name: "Process Monitoring", category: "Quality Control", icon: FaChartLine },
    ],
    results: [
      { value: "40%", label: "Cycle Time Reduction", description: "From 60s to 36s average" },
      { value: "65%", label: "Cooling Efficiency", description: "Uniform temperature distribution" },
      { value: "$425K", label: "Annual Savings", description: "Productivity gains" },
      { value: "95%", label: "Warpage Reduction", description: "Quality improvement" },
    ],
  },
  {
    slug: "ev-battery-housing",
    title: "Electric Vehicle Battery Housing Design",
    industry: "Automotive",
    duration: "14 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop",
    subtitle: "Lightweight structural design for EV battery systems",
    description: "Designed and optimized aluminum battery housing for electric vehicles, achieving crash safety and thermal management requirements.",
    metrics: [
      { value: "32%", label: "Weight Reduction" },
      { value: "100%", label: "Crash Test Pass" },
      { value: "$380K", label: "Development Savings" },
    ],
    client: {
      name: "Alexandra Rivera",
      title: "EV Platform Director, ElectricMotors Inc.",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-21.jpg",
      quote: "CADCAMX's battery housing design exceeded all our structural and thermal requirements while achieving significant weight savings. Their automotive expertise is exceptional.",
    },
    objective: {
      description: "An electric vehicle manufacturer required an optimized battery housing design that meets crash safety standards while minimizing weight and ensuring thermal management.",
      goals: [
        "Achieve 30% weight reduction vs. baseline",
        "Pass all FMVSS crash tests",
        "Maintain thermal management performance",
        "Accelerate development by 3 months",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Structural Requirements",
          description: "Analysis of crash scenarios and structural load cases.",
        },
        {
          title: "Phase 2: Multi-Material Design",
          description: "Aluminum extrusion and sheet metal optimization for weight and strength.",
        },
        {
          title: "Phase 3: Thermal Management",
          description: "Integration of cooling plates and thermal interface optimization.",
        },
        {
          title: "Phase 4: Crash Testing",
          description: "Physical testing and validation to meet FMVSS standards.",
        },
      ],
    },
    tools: [
      { name: "CATIA V6", category: "Automotive Design", icon: FaCube },
      { name: "LS-DYNA", category: "Crash Simulation", icon: FaMicroscope },
      { name: "Thermal Analysis", category: "CFD Simulation", icon: FaCogs },
      { name: "Test Validation", category: "Physical Testing", icon: FaChartLine },
    ],
    results: [
      { value: "32%", label: "Weight Reduction", description: "From 185kg to 126kg" },
      { value: "100%", label: "FMVSS Compliance", description: "All crash tests passed" },
      { value: "$380K", label: "Development Savings", description: "Accelerated timeline" },
      { value: "15%", label: "Range Improvement", description: "Vehicle efficiency gain" },
    ],
  },
  {
    slug: "pharmaceutical-packaging-mold",
    title: "Pharmaceutical Packaging Mold Development",
    industry: "Medical",
    duration: "7 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=800&fit=crop",
    subtitle: "Precision molds for pharmaceutical packaging",
    description: "Developed high-precision injection molds for pharmaceutical packaging meeting FDA and GMP requirements.",
    metrics: [
      { value: "99.99%", label: "Quality Consistency" },
      { value: "28%", label: "Cycle Time Reduction" },
      { value: "100%", label: "GMP Compliance" },
    ],
    client: {
      name: "Dr. Michelle Roberts",
      title: "Packaging Engineering Manager, PharmaPack Solutions",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-22.jpg",
      quote: "The precision and consistency CADCAMX achieved for our pharmaceutical packaging molds is remarkable. Our reject rates have dropped to near-zero levels.",
    },
    objective: {
      description: "A pharmaceutical packaging manufacturer required ultra-precise injection molds that meet stringent FDA and GMP requirements for drug packaging.",
      goals: [
        "Achieve 99.99% quality consistency",
        "Meet FDA 21 CFR Part 11 compliance",
        "Reduce cycle time by 25%",
        "Eliminate contamination risks",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Regulatory Requirements",
          description: "Comprehensive review of FDA, GMP, and ISO 15378 standards.",
        },
        {
          title: "Phase 2: Cleanroom Design",
          description: "Mold design optimized for cleanroom manufacturing environments.",
        },
        {
          title: "Phase 3: Precision Manufacturing",
          description: "Ultra-precision machining with validated processes and documentation.",
        },
        {
          title: "Phase 4: Validation Protocol",
          description: "IQ/OQ/PQ validation and process capability studies.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks Medical", category: "Medical Device CAD", icon: FaCube },
      { name: "Moldflow Insight", category: "Mold Simulation", icon: FaMicroscope },
      { name: "Precision CAM", category: "Ultra-Precision Machining", icon: FaCogs },
      { name: "21 CFR Part 11", category: "Validation Systems", icon: FaChartLine },
    ],
    results: [
      { value: "99.99%", label: "Quality Rate", description: "Cpk > 2.0 achieved" },
      { value: "28%", label: "Cycle Reduction", description: "Optimized cooling" },
      { value: "100%", label: "GMP Compliance", description: "All standards met" },
      { value: "Zero", label: "Contamination Events", description: "Perfect record" },
    ],
  },
  {
    slug: "racing-engine-components",
    title: "High-Performance Racing Engine Components",
    industry: "Automotive",
    duration: "12 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
    subtitle: "Precision engineering for motorsports excellence",
    description: "Manufactured high-performance engine components for professional racing, achieving extreme precision and reliability.",
    metrics: [
      { value: "±5μm", label: "Tolerance" },
      { value: "15%", label: "Power Increase" },
      { value: "100%", label: "Race Reliability" },
    ],
    client: {
      name: "Tony Richardson",
      title: "Chief Engineer, VelocityRacing Team",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-23.jpg",
      quote: "CADCAMX's precision engine components have given us a competitive edge on the track. The reliability and performance gains speak for themselves – three championship wins and counting.",
    },
    objective: {
      description: "A professional racing team needed ultra-precision engine components that could withstand extreme conditions while delivering maximum performance.",
      goals: [
        "Achieve ±5μm dimensional tolerance",
        "Increase engine power output by 12%",
        "Ensure 100% race-day reliability",
        "Reduce component weight by 20%",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Performance Analysis",
          description: "Engine simulation and thermal analysis to identify optimization opportunities.",
        },
        {
          title: "Phase 2: Advanced Materials",
          description: "Selection of exotic materials including titanium and carbon fiber composites.",
        },
        {
          title: "Phase 3: Micro-Precision Machining",
          description: "Ultra-precision CNC with in-process measurement and compensation.",
        },
        {
          title: "Phase 4: Dyno Testing",
          description: "Comprehensive engine testing and validation under race conditions.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks Simulation", category: "Performance Analysis", icon: FaMicroscope },
      { name: "NX CAM", category: "Micro-Precision Machining", icon: FaCogs },
      { name: "Advanced Metrology", category: "Quality Control", icon: FaChartLine },
      { name: "CAD Design", category: "Engine Components", icon: FaCube },
    ],
    results: [
      { value: "±5μm", label: "Tolerance Achieved", description: "Extreme precision" },
      { value: "15%", label: "Power Gain", description: "Dyno-verified increase" },
      { value: "100%", label: "Reliability", description: "Zero DNF races" },
      { value: "3", label: "Championships", description: "Winning seasons" },
    ],
  },
  {
    slug: "satellite-component-manufacturing",
    title: "Satellite Component Manufacturing",
    industry: "Aerospace",
    duration: "18 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&h=800&fit=crop",
    subtitle: "Precision engineering for space applications",
    description: "Manufactured critical satellite components meeting extreme space environment requirements and NASA standards.",
    metrics: [
      { value: "100%", label: "NASA Standards" },
      { value: "38%", label: "Weight Reduction" },
      { value: "$1.2M", label: "Program Value" },
    ],
    client: {
      name: "Dr. Steven Walsh",
      title: "Satellite Systems Director, OrbitTech Aerospace",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-24.jpg",
      quote: "CADCAMX delivered satellite components that exceeded NASA's stringent requirements. Their expertise in space-grade manufacturing is truly world-class.",
    },
    objective: {
      description: "A satellite manufacturer required precision components that could survive launch vibration, space radiation, and extreme temperature cycling.",
      goals: [
        "Meet all NASA-STD-5001 requirements",
        "Achieve 35% weight reduction",
        "Survive -150°C to +150°C thermal cycling",
        "Ensure 15-year operational life",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Space Environment Analysis",
          description: "Comprehensive analysis of launch loads, thermal cycling, and radiation effects.",
        },
        {
          title: "Phase 2: Material Selection",
          description: "Selection of space-qualified materials with verified outgassing properties.",
        },
        {
          title: "Phase 3: Precision Manufacturing",
          description: "Ultra-clean manufacturing with full traceability and documentation.",
        },
        {
          title: "Phase 4: Environmental Testing",
          description: "Thermal-vacuum, vibration, and radiation testing to NASA standards.",
        },
      ],
    },
    tools: [
      { name: "NX Aerospace", category: "Space-Grade CAD", icon: FaCube },
      { name: "ANSYS Thermal", category: "Thermal Analysis", icon: FaMicroscope },
      { name: "Precision CAM", category: "Clean Manufacturing", icon: FaCogs },
      { name: "NASA Standards", category: "Quality Assurance", icon: FaChartLine },
    ],
    results: [
      { value: "100%", label: "NASA Compliance", description: "All standards exceeded" },
      { value: "38%", label: "Weight Reduction", description: "Launch cost savings" },
      { value: "$1.2M", label: "Program Value", description: "Total contract worth" },
      { value: "15 Years", label: "Design Life", description: "Operational guarantee" },
    ],
  },
  {
    slug: "food-processing-equipment",
    title: "Food Processing Equipment Optimization",
    industry: "Manufacturing",
    duration: "8 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?w=1200&h=800&fit=crop",
    subtitle: "Sanitary design for food safety compliance",
    description: "Redesigned food processing equipment components for improved sanitation and FDA compliance.",
    metrics: [
      { value: "95%", label: "Cleaning Time Reduction" },
      { value: "100%", label: "FDA Compliance" },
      { value: "$265K", label: "Annual Savings" },
    ],
    client: {
      name: "Karen Hughes",
      title: "Plant Engineering Manager, FoodTech Processing",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-25.jpg",
      quote: "The sanitary design improvements from CADCAMX have revolutionized our cleaning processes. We've dramatically reduced downtime while improving food safety compliance.",
    },
    objective: {
      description: "A food processing equipment manufacturer needed to redesign components for easier cleaning and improved FDA compliance while maintaining production efficiency.",
      goals: [
        "Reduce cleaning time by 90%",
        "Achieve 3-A Sanitary Standards compliance",
        "Eliminate contamination risk points",
        "Improve production uptime by 25%",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Sanitary Design Analysis",
          description: "Review of FDA and 3-A standards with identification of design improvements.",
        },
        {
          title: "Phase 2: DFM for Sanitation",
          description: "Elimination of dead spaces, optimization of drainage, and surface finish.",
        },
        {
          title: "Phase 3: Material Selection",
          description: "FDA-approved stainless steel grades and surface treatment specifications.",
        },
        {
          title: "Phase 4: Validation Testing",
          description: "Cleanability testing and microbiological validation.",
        },
      ],
    },
    tools: [
      { name: "SolidWorks", category: "Sanitary Design", icon: FaCube },
      { name: "Surface Analysis", category: "Ra Measurement", icon: FaMicroscope },
      { name: "CNC Programming", category: "Precision Machining", icon: FaCogs },
      { name: "FDA Validation", category: "Compliance Testing", icon: FaChartLine },
    ],
    results: [
      { value: "95%", label: "Cleaning Time Reduction", description: "From 4 hours to 12 minutes" },
      { value: "100%", label: "3-A Compliance", description: "All standards met" },
      { value: "$265K", label: "Annual Savings", description: "Reduced downtime" },
      { value: "Zero", label: "Contamination Events", description: "Perfect safety record" },
    ],
  },
  {
    slug: "drone-frame-optimization",
    title: "Commercial Drone Frame Optimization",
    industry: "Aerospace",
    duration: "10 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&h=800&fit=crop",
    subtitle: "Lightweight carbon fiber structures for UAV applications",
    description: "Designed and manufactured optimized carbon fiber drone frames achieving 42% weight reduction and improved flight time.",
    metrics: [
      { value: "42%", label: "Weight Reduction" },
      { value: "65%", label: "Flight Time Increase" },
      { value: "$195K", label: "Development Value" },
    ],
    client: {
      name: "Chris Anderson",
      title: "CTO, SkyView Drones",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-26.jpg",
      quote: "CADCAMX's drone frame optimization has been a game-changer for our commercial operations. The flight time improvements directly translate to higher customer value.",
    },
    objective: {
      description: "A commercial drone manufacturer needed to optimize their airframe design to increase payload capacity and flight endurance for surveying applications.",
      goals: [
        "Reduce frame weight by 35%",
        "Increase flight time by 50%",
        "Maintain structural strength for crashes",
        "Achieve cost-effective manufacturing",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Structural Analysis",
          description: "FEA simulation of flight loads and crash scenarios.",
        },
        {
          title: "Phase 2: Composite Design",
          description: "Carbon fiber layup optimization for strength-to-weight ratio.",
        },
        {
          title: "Phase 3: Mold Manufacturing",
          description: "Precision molds for consistent composite part production.",
        },
        {
          title: "Phase 4: Flight Testing",
          description: "Comprehensive flight testing and structural validation.",
        },
      ],
    },
    tools: [
      { name: "CATIA Composites", category: "Composite Design", icon: FaCube },
      { name: "ANSYS Composite", category: "FEA Analysis", icon: FaMicroscope },
      { name: "5-Axis Milling", category: "Mold Manufacturing", icon: FaCogs },
      { name: "Flight Testing", category: "Validation", icon: FaChartLine },
    ],
    results: [
      { value: "42%", label: "Weight Reduction", description: "From 2.8kg to 1.6kg" },
      { value: "65%", label: "Flight Time Increase", description: "From 25 to 41 minutes" },
      { value: "$195K", label: "Project Value", description: "Development worth" },
      { value: "5x", label: "Crash Durability", description: "Improved resilience" },
    ],
  },
  {
    slug: "hvac-heat-exchanger",
    title: "HVAC Heat Exchanger Optimization",
    industry: "Manufacturing",
    duration: "9 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1585129777188-94600bc7b4d3?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop",
    subtitle: "Advanced thermal engineering for HVAC systems",
    description: "Optimized heat exchanger design for commercial HVAC systems, achieving 28% efficiency improvement.",
    metrics: [
      { value: "28%", label: "Efficiency Gain" },
      { value: "22%", label: "Cost Reduction" },
      { value: "$310K", label: "Annual Savings" },
    ],
    client: {
      name: "Gregory Thompson",
      title: "VP Engineering, ClimateControl Systems",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-27.jpg",
      quote: "The heat exchanger optimization from CADCAMX has given us a significant competitive advantage. The efficiency gains help our customers meet green building standards.",
    },
    objective: {
      description: "An HVAC manufacturer sought to improve heat exchanger efficiency to meet new energy standards while reducing manufacturing costs.",
      goals: [
        "Increase thermal efficiency by 25%",
        "Reduce manufacturing cost by 20%",
        "Meet ASHRAE 90.1 standards",
        "Improve refrigerant distribution",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Thermal Analysis",
          description: "CFD simulation to optimize fin geometry and refrigerant flow patterns.",
        },
        {
          title: "Phase 2: DFM Optimization",
          description: "Redesign for automated manufacturing and reduced material waste.",
        },
        {
          title: "Phase 3: Tooling Design",
          description: "Progressive die design for high-volume fin production.",
        },
        {
          title: "Phase 4: Performance Testing",
          description: "Calorimeter testing and AHRI certification.",
        },
      ],
    },
    tools: [
      { name: "ANSYS Fluent", category: "CFD Analysis", icon: FaMicroscope },
      { name: "SolidWorks", category: "HVAC Design", icon: FaCube },
      { name: "Progressive Die CAM", category: "Tooling", icon: FaCogs },
      { name: "AHRI Testing", category: "Performance Validation", icon: FaChartLine },
    ],
    results: [
      { value: "28%", label: "Efficiency Improvement", description: "Thermal performance" },
      { value: "22%", label: "Cost Reduction", description: "Manufacturing optimization" },
      { value: "$310K", label: "Customer Savings", description: "Energy costs annually" },
      { value: "AHRI", label: "Certified", description: "Industry standards met" },
    ],
  },
  {
    slug: "prosthetic-joint-design",
    title: "Advanced Prosthetic Joint Design",
    industry: "Medical",
    duration: "15 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
    subtitle: "Patient-specific prosthetics with advanced biomechanics",
    description: "Developed next-generation prosthetic joints with improved range of motion and natural movement patterns.",
    metrics: [
      { value: "45%", label: "ROM Improvement" },
      { value: "92%", label: "Patient Satisfaction" },
      { value: "100%", label: "FDA Approval" },
    ],
    client: {
      name: "Dr. Rebecca Martinez",
      title: "Chief of Prosthetics, RehabTech Medical",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-28.jpg",
      quote: "CADCAMX's prosthetic joint design has transformed patient outcomes. The natural range of motion and comfort levels are unprecedented in our field.",
    },
    objective: {
      description: "A prosthetics manufacturer sought to develop next-generation joints that provide more natural movement and improved patient quality of life.",
      goals: [
        "Improve range of motion by 40%",
        "Achieve 90%+ patient satisfaction",
        "Obtain FDA 510(k) clearance",
        "Reduce manufacturing cost by 25%",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Biomechanical Analysis",
          description: "Motion capture and kinematic analysis of natural human movement.",
        },
        {
          title: "Phase 2: Advanced Design",
          description: "Multi-axis joint design with optimized bearing surfaces and materials.",
        },
        {
          title: "Phase 3: Additive Manufacturing",
          description: "Titanium 3D printing for complex geometries and patient-specific customization.",
        },
        {
          title: "Phase 4: Clinical Trials",
          description: "Patient trials and long-term outcome monitoring.",
        },
      ],
    },
    tools: [
      { name: "Gait Analysis Software", category: "Biomechanics", icon: FaMicroscope },
      { name: "SolidWorks Medical", category: "Prosthetic Design", icon: FaCube },
      { name: "Additive CAM", category: "3D Printing", icon: FaCogs },
      { name: "Clinical Systems", category: "Outcome Tracking", icon: FaChartLine },
    ],
    results: [
      { value: "45%", label: "ROM Improvement", description: "Vs. previous generation" },
      { value: "92%", label: "Patient Satisfaction", description: "Excellent or very good" },
      { value: "100%", label: "FDA Clearance", description: "510(k) approved" },
      { value: "500+", label: "Successful Fittings", description: "Patients helped" },
    ],
  },
  {
    slug: "precision-gearbox-manufacturing",
    title: "Precision Gearbox Manufacturing",
    industry: "Industrial",
    duration: "13 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1565881846854-ba43d2dea6fc?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
    subtitle: "Advanced gear manufacturing for industrial automation",
    description: "Developed advanced manufacturing processes for precision gearboxes achieving exceptional backlash control and efficiency.",
    metrics: [
      { value: "0.002°", label: "Backlash Control" },
      { value: "97%", label: "Transmission Efficiency" },
      { value: "$445K", label: "Program Value" },
    ],
    client: {
      name: "Peter Schmidt",
      title: "Engineering Director, PrecisionDrive Systems",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-29.jpg",
      quote: "The gearbox manufacturing precision from CADCAMX is extraordinary. We're achieving backlash levels that allow us to compete in premium automation markets.",
    },
    objective: {
      description: "An industrial automation company needed ultra-precision gearboxes for robotic applications requiring exceptional positioning accuracy.",
      goals: [
        "Achieve <0.003° backlash",
        "Reach 96%+ transmission efficiency",
        "Extend service life to 100,000 hours",
        "Reduce noise by 50%",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Gear Design Optimization",
          description: "Tooth profile optimization and contact stress analysis.",
        },
        {
          title: "Phase 2: Precision Manufacturing",
          description: "Gear grinding and honing for micro-tolerance tooth profiles.",
        },
        {
          title: "Phase 3: Assembly Process",
          description: "Precision assembly protocols with matched gear sets.",
        },
        {
          title: "Phase 4: Testing & Validation",
          description: "Comprehensive testing including NVH, efficiency, and longevity.",
        },
      ],
    },
    tools: [
      { name: "KISSsoft", category: "Gear Design", icon: FaCube },
      { name: "Gear Grinding CAM", category: "Precision Manufacturing", icon: FaCogs },
      { name: "Coordinate Measuring", category: "Gear Metrology", icon: FaMicroscope },
      { name: "NVH Testing", category: "Quality Validation", icon: FaChartLine },
    ],
    results: [
      { value: "0.002°", label: "Backlash Achieved", description: "Ultra-precision control" },
      { value: "97%", label: "Efficiency", description: "Transmission performance" },
      { value: "$445K", label: "Program Value", description: "Total worth" },
      { value: "60%", label: "Noise Reduction", description: "NVH improvement" },
    ],
  },
  {
    slug: "composite-aircraft-panel",
    title: "Composite Aircraft Interior Panel Manufacturing",
    industry: "Aerospace",
    duration: "11 WEEKS",
    featuredImage: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1520177560704-0739d2ffbc01?w=1200&h=800&fit=crop",
    subtitle: "Lightweight composite panels for aircraft interiors",
    description: "Developed advanced composite manufacturing for aircraft interior panels meeting FAA flammability and smoke requirements.",
    metrics: [
      { value: "35%", label: "Weight Reduction" },
      { value: "100%", label: "FAA Compliance" },
      { value: "$395K", label: "Annual Savings" },
    ],
    client: {
      name: "Linda Morrison",
      title: "Cabin Interior Program Manager, AeroInteriors Inc.",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-30.jpg",
      quote: "CADCAMX's composite panel solution exceeded our weight reduction targets while meeting all FAA requirements. The quality and consistency have been outstanding.",
    },
    objective: {
      description: "An aircraft interior manufacturer needed lightweight composite panels that meet strict FAA flammability standards for commercial aviation.",
      goals: [
        "Achieve 30% weight reduction vs. aluminum",
        "Pass FAR 25.853 flammability tests",
        "Improve surface quality and aesthetics",
        "Reduce production cost by 20%",
      ],
    },
    approach: {
      phases: [
        {
          title: "Phase 1: Material Selection",
          description: "Selection of fire-retardant composite materials meeting FAA standards.",
        },
        {
          title: "Phase 2: Tooling Design",
          description: "Precision molds for consistent panel geometry and surface finish.",
        },
        {
          title: "Phase 3: Process Development",
          description: "Optimized layup, curing, and quality control procedures.",
        },
        {
          title: "Phase 4: FAA Testing",
          description: "Comprehensive flammability and smoke density testing.",
        },
      ],
    },
    tools: [
      { name: "CATIA Composites", category: "Panel Design", icon: FaCube },
      { name: "Composite CAM", category: "Mold Manufacturing", icon: FaCogs },
      { name: "FAA Testing", category: "Flammability Validation", icon: FaMicroscope },
      { name: "Quality Systems", category: "AS9100 Compliance", icon: FaChartLine },
    ],
    results: [
      { value: "35%", label: "Weight Reduction", description: "Vs. aluminum baseline" },
      { value: "100%", label: "FAA Compliance", description: "FAR 25.853 passed" },
      { value: "$395K", label: "Fuel Savings", description: "Lifecycle value" },
      { value: "A+", label: "Surface Quality", description: "Class A finish achieved" },
    ],
  },
];
