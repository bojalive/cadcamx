import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  FaBook,
  FaFileAlt,
  FaDownload,
  FaCube,
  FaDraftingCompass,
  FaCogs,
  FaCalculator,
  FaArrowRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Documentation | CAD/CAM Resources & Guides | CADCAMX",
  description: "Access CADCAMX documentation, file format guides, project requirements templates, and best practices for CAD/CAM outsourcing projects.",
  openGraph: {
    title: "Documentation | CADCAMX Resources",
    description: "CAD/CAM documentation, guides, and resources for engineering projects.",
    type: "website",
    url: "https://cadcamx.com/documentation",
  },
};

const documentCategories = [
  {
    title: "Getting Started",
    icon: FaBook,
    docs: [
      { name: "Project Submission Guide", description: "How to submit your CAD/CAM project" },
      { name: "File Format Requirements", description: "Supported file formats and best practices" },
      { name: "Communication Guidelines", description: "How we communicate during projects" },
    ],
  },
  {
    title: "3D Modeling",
    icon: FaCube,
    docs: [
      { name: "3D Model Specifications", description: "Requirements for 3D modeling projects" },
      { name: "Assembly Guidelines", description: "Best practices for assembly models" },
      { name: "Rendering Requirements", description: "Specifications for photorealistic renders" },
    ],
  },
  {
    title: "2D Drafting",
    icon: FaDraftingCompass,
    docs: [
      { name: "Drawing Standards", description: "ASME Y14.5 and ISO standards compliance" },
      { name: "GD&T Requirements", description: "Geometric dimensioning and tolerancing guide" },
      { name: "Title Block Templates", description: "Standard title block configurations" },
    ],
  },
  {
    title: "CAM Programming",
    icon: FaCogs,
    docs: [
      { name: "Machine Specifications", description: "How to share machine details with us" },
      { name: "Post Processor Setup", description: "Custom post processor requirements" },
      { name: "Tooling Information", description: "Tool library and cutting parameter needs" },
    ],
  },
  {
    title: "Simulation & FEA",
    icon: FaCalculator,
    docs: [
      { name: "Analysis Request Form", description: "Information needed for FEA projects" },
      { name: "Material Properties", description: "How to specify material data" },
      { name: "Report Templates", description: "Standard FEA report formats" },
    ],
  },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Documentation" }]} />

          {/* Hero */}
          <div className="mb-16">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaBook className="mr-2" />
              Resources
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Guides, templates, and resources to help you get the most out of our
              CAD/CAM services. Find everything you need to submit projects and
              communicate requirements effectively.
            </p>
          </div>

          {/* Document Categories */}
          <div className="space-y-12">
            {documentCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-6">
                  <category.icon className="text-accent-gold text-2xl mr-3" />
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.docs.map((doc, docIndex) => (
                    <Card key={docIndex} className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all cursor-pointer">
                      <CardContent className="p-6">
                        <FaFileAlt className="text-accent-gold text-xl mb-3" />
                        <h3 className="font-semibold mb-2">{doc.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{doc.description}</p>
                        <div className="flex items-center text-accent-gold text-sm">
                          <FaDownload className="mr-2" />
                          Download PDF
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Supported File Formats */}
          <div className="mt-16 bg-white/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Supported File Formats</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-accent-gold mb-3">CAD Native Formats</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• SolidWorks (.sldprt, .sldasm)</li>
                  <li>• CATIA (.catpart, .catproduct)</li>
                  <li>• Inventor (.ipt, .iam)</li>
                  <li>• Creo/Pro-E (.prt, .asm)</li>
                  <li>• NX (.prt)</li>
                  <li>• Fusion 360 (.f3d)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-accent-gold mb-3">Neutral Formats</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• STEP (.stp, .step)</li>
                  <li>• IGES (.igs, .iges)</li>
                  <li>• Parasolid (.x_t, .x_b)</li>
                  <li>• ACIS (.sat)</li>
                  <li>• STL (.stl)</li>
                  <li>• OBJ (.obj)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-accent-gold mb-3">2D Formats</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• AutoCAD (.dwg, .dxf)</li>
                  <li>• PDF (.pdf)</li>
                  <li>• TIFF (.tif)</li>
                  <li>• PNG (.png)</li>
                  <li>• JPEG (.jpg)</li>
                  <li>• SVG (.svg)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-accent-gold/20 to-accent-orange/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Custom Documentation?</h2>
            <p className="text-gray-300 mb-6">
              Contact us if you need specific templates or documentation for your project requirements.
            </p>
            <Link href="/contact">
              <button className="bg-accent-gold text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-accent-orange transition-colors inline-flex items-center">
                Contact Us <FaArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
