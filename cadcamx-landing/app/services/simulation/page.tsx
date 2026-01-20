import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  FaCalculator,
  FaCheck,
  FaArrowRight,
  FaBuilding,
  FaPlane,
  FaCar,
  FaOilCan,
  FaTools,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Simulation & FEA Services | Structural Analysis | CADCAMX",
  description: "Professional FEA and simulation services including stress analysis, thermal simulation, modal analysis, CFD, and design optimization. ANSYS, SolidWorks Simulation expertise.",
  openGraph: {
    title: "Simulation & FEA Services | Engineering Analysis | CADCAMX",
    description: "Professional FEA and simulation services for structural and thermal analysis.",
    type: "website",
    url: "https://cadcamx.com/services/simulation",
  },
};

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Simulation & FEA" },
            ]}
          />

          {/* Hero */}
          <div className="mb-16">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaCalculator className="mr-2" />
              Engineering Simulation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Simulation & FEA Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Comprehensive structural and thermal analysis using advanced FEA techniques.
              Our simulation services help validate designs, optimize performance, and
              ensure safety standards before manufacturing begins.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Static Stress Analysis",
                "Dynamic Analysis",
                "Thermal Simulation",
                "Modal & Vibration Analysis",
                "Fatigue Analysis",
                "CFD (Fluid Dynamics)",
                "Nonlinear Analysis",
                "Topology Optimization",
                "Design Validation Reports",
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
                  <h3 className="font-semibold">Civil Engineering</h3>
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
                  <FaCar className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Automotive</h3>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaOilCan className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Oil & Gas</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Software */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Software Expertise</h2>
            <div className="flex flex-wrap gap-4">
              {["ANSYS", "SolidWorks Simulation", "Abaqus", "Nastran", "COMSOL", "LS-DYNA", "Hypermesh", "SimScale"].map((sw) => (
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
              Contact us for a free quote on your simulation project.
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
