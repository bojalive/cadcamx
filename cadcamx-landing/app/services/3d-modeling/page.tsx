import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  FaCube,
  FaCheck,
  FaArrowRight,
  FaCar,
  FaPlane,
  FaIndustry,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "3D Modeling Services | CAD Design & Rendering | CADCAMX",
  description: "Professional 3D CAD modeling services including parametric design, surface modeling, assembly modeling, and photorealistic rendering. SolidWorks, CATIA, Fusion 360 expertise.",
  openGraph: {
    title: "3D Modeling Services | CAD Design | CADCAMX",
    description: "Professional 3D CAD modeling services for product design and manufacturing.",
    type: "website",
    url: "https://cadcamx.com/services/3d-modeling",
  },
};

export default function ThreeDModelingPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "3D Modeling" },
            ]}
          />

          {/* Hero */}
          <div className="mb-16">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaCube className="mr-2" />
              3D Design Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              3D Modeling Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Realistic, manufacturable 3D models tailored to precision standards.
              Our expert team creates detailed parametric models that serve as the
              foundation for manufacturing, prototyping, and visualization across
              multiple industries.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Parametric 3D Models",
                "Surface Modeling",
                "Assembly Modeling",
                "Sheet Metal Design",
                "Weldment Structures",
                "Mold & Die Design",
                "Photorealistic Rendering",
                "Animation & Visualization",
                "Design for Manufacturing (DFM)",
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
                  <FaCar className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Automotive</h3>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaPlane className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Aerospace</h3>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaIndustry className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Industrial</h3>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaShoppingCart className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Consumer Products</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Software */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Software Expertise</h2>
            <div className="flex flex-wrap gap-4">
              {["SolidWorks", "CATIA", "Fusion 360", "Inventor", "Creo", "NX", "Rhino", "KeyShot"].map((sw) => (
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
              Contact us for a free quote on your 3D modeling project.
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
