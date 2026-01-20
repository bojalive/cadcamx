import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  FaDraftingCompass,
  FaCheck,
  FaArrowRight,
  FaBuilding,
  FaHammer,
  FaIndustry,
  FaBolt,
  FaTools,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "2D Drafting Services | Technical Drawing & Documentation | CADCAMX",
  description: "Professional 2D CAD drafting services including engineering drawings, shop drawings, fabrication drawings, and technical documentation. AutoCAD, SolidWorks Drawings expertise.",
  openGraph: {
    title: "2D Drafting Services | Technical Drawing | CADCAMX",
    description: "Professional 2D CAD drafting services for engineering and manufacturing documentation.",
    type: "website",
    url: "https://cadcamx.com/services/2d-drafting",
  },
};

export default function TwoDDraftingPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "2D Drafting" },
            ]}
          />

          {/* Hero */}
          <div className="mb-16">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaDraftingCompass className="mr-2" />
              Technical Drafting
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              2D Drafting Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Comprehensive 2D technical drawings and documentation that meet international
              standards. Our drafting services ensure clear communication between design
              and manufacturing teams with detailed specifications and annotations.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Engineering Drawings",
                "Assembly Drawings",
                "Detail Drawings",
                "Fabrication Drawings",
                "Shop Drawings",
                "Bill of Materials (BOM)",
                "Technical Specifications",
                "Weldment Drawings",
                "Electrical Schematics",
              ].map((item) => (
                <Card key={item} className="bg-white/5 border-white/10">
                  <CardContent className="p-4 flex items-center">
                    <FaCheck className="text-accent-gold mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaBuilding className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Architecture</h3>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaHammer className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Construction</h3>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaIndustry className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Manufacturing</h3>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaBolt className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Electrical</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Software */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Software Expertise</h2>
            <div className="flex flex-wrap gap-4">
              {["AutoCAD", "SolidWorks Drawings", "Inventor Drawings", "DraftSight", "Creo Drawing", "NX Drafting"].map((sw) => (
                <Badge key={sw} className="bg-blue-500/10 border-blue-500/20 text-blue-400 px-4 py-2">
                  <FaTools className="mr-2" />
                  {sw}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent-gold/20 to-accent-orange/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Contact us for a free quote on your 2D drafting project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-accent-gold text-primary-dark hover:bg-accent-orange">
                  Get a Quote <FaArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white/30 hover:bg-white/10">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
