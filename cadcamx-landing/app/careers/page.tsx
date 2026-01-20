import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaRocket,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Careers | Join Our CAD/CAM Engineering Team | CADCAMX",
  description: "Join CADCAMX and work on exciting CAD/CAM projects for global clients. We're hiring CAD designers, CAM programmers, and engineering professionals.",
  openGraph: {
    title: "Careers | Join CADCAMX Engineering Team",
    description: "Join our team of CAD/CAM professionals working on exciting engineering projects.",
    type: "website",
    url: "https://cadcamx.com/careers",
  },
};

const openPositions = [
  {
    title: "Senior CAD Designer",
    location: "Remote / Coimbatore",
    type: "Full-time",
    department: "Design",
    description: "Create detailed 3D models and technical drawings for automotive and aerospace clients.",
  },
  {
    title: "CAM Programmer",
    location: "Remote / Coimbatore",
    type: "Full-time",
    department: "Manufacturing",
    description: "Develop CNC programs and optimize toolpaths for complex machined components.",
  },
  {
    title: "FEA Analyst",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "Perform structural and thermal simulations using ANSYS and SolidWorks Simulation.",
  },
  {
    title: "Project Manager",
    location: "Remote / Delaware",
    type: "Full-time",
    department: "Operations",
    description: "Lead engineering projects and coordinate between global teams and clients.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Careers" }]} />

          {/* Hero */}
          <div className="mb-16 text-center">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaBriefcase className="mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Build Your Career at CADCAMX
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a team of passionate engineers working on challenging CAD/CAM
              projects for clients worldwide. We offer competitive compensation,
              remote work flexibility, and continuous learning opportunities.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Join CADCAMX?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaRocket className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Career Growth</h3>
                  <p className="text-gray-400 text-sm">
                    Clear career paths and opportunities for advancement
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaGraduationCap className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Learning & Development</h3>
                  <p className="text-gray-400 text-sm">
                    Training programs and software certifications
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaUsers className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Great Team</h3>
                  <p className="text-gray-400 text-sm">
                    Collaborative environment with talented engineers
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <FaHeart className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                  <p className="text-gray-400 text-sm">
                    Flexible hours and remote work options
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((job, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <p className="text-gray-400 mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-400">
                            <FaMapMarkerAlt className="mr-1" />
                            {job.location}
                          </Badge>
                          <Badge className="bg-green-500/10 border-green-500/20 text-green-400">
                            <FaClock className="mr-1" />
                            {job.type}
                          </Badge>
                          <Badge className="bg-purple-500/10 border-purple-500/20 text-purple-400">
                            {job.department}
                          </Badge>
                        </div>
                      </div>
                      <Link href="/contact">
                        <Button className="bg-accent-gold text-primary-dark hover:bg-accent-orange whitespace-nowrap">
                          Apply Now <FaArrowRight className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent-gold/20 to-accent-orange/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Don&apos;t See a Fit?</h2>
            <p className="text-gray-300 mb-6">
              We&apos;re always looking for talented engineers. Send us your resume and
              we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link href="/contact">
              <Button className="bg-accent-gold text-primary-dark hover:bg-accent-orange">
                Submit Your Resume <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
