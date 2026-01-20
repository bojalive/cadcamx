import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  FaCogs,
  FaCheck,
  FaArrowRight,
  FaCar,
  FaPlane,
  FaHeartbeat,
  FaMicrochip,
  FaTools,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "CAM Programming Services | CNC Machining & Toolpath | CADCAMX",
  description: "Professional CAM programming and CNC machining services including G-code generation, toolpath optimization, 5-axis programming, and post-processing. Mastercam, Fusion 360 CAM expertise.",
  openGraph: {
    title: "CAM Programming Services | CNC Machining | CADCAMX",
    description: "Professional CAM programming services for CNC manufacturing and machining.",
    type: "website",
    url: "https://cadcamx.com/services/cam-programming",
  },
};

export default function CAMProgrammingPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "CAM Programming" },
            ]}
          />

          {/* Hero */}
          <div className="mb-16">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaCogs className="mr-2" />
              Manufacturing Automation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              CAM Programming Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Advanced CNC programming and computer-aided manufacturing solutions
              that optimize production efficiency. Our CAM services bridge the gap
              between design and manufacturing with precision toolpath generation.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "CNC Mill Programming",
                "CNC Lathe Programming",
                "5-Axis Machining",
                "Multi-Axis Programming",
                "Toolpath Optimization",
                "G-Code Generation",
                "Post-Processing",
                "Setup Sheets & Tool Lists",
                "Machining Simulation",
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
                  <FaHeartbeat className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Medical Devices</h3>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaMicrochip className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold">Electronics</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Software */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Software Expertise</h2>
            <div className="flex flex-wrap gap-4">
              {["Mastercam", "Fusion 360 CAM", "HSMWorks", "PowerMill", "CAMWorks", "EdgeCAM", "NX CAM", "CATIA CAM"].map((sw) => (
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
              Contact us for a free quote on your CAM programming project.
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
