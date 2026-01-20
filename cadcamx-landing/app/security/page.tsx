import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaServer,
  FaFileContract,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Security | Data Protection & Confidentiality | CADCAMX",
  description: "Learn about CADCAMX security practices, data protection measures, and how we keep your CAD/CAM project files confidential and secure.",
  openGraph: {
    title: "Security | CADCAMX Data Protection",
    description: "How CADCAMX protects your engineering data and maintains confidentiality.",
    type: "website",
    url: "https://cadcamx.com/security",
  },
};

const securityFeatures = [
  {
    icon: FaLock,
    title: "Encrypted Data Transfer",
    description: "All file transfers use SSL/TLS encryption. We support secure file sharing through encrypted platforms.",
  },
  {
    icon: FaServer,
    title: "Secure Storage",
    description: "Project files are stored on encrypted servers with strict access controls and regular backups.",
  },
  {
    icon: FaUserShield,
    title: "Access Control",
    description: "Only authorized team members access your project. Role-based permissions ensure need-to-know access.",
  },
  {
    icon: FaFileContract,
    title: "NDA Protection",
    description: "We sign comprehensive NDAs for all projects. Your intellectual property is legally protected.",
  },
];

const certifications = [
  "ISO 27001 Security Practices",
  "GDPR Compliant Data Handling",
  "SOC 2 Type II Standards",
  "ITAR Compliance for Defense Projects",
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Security" }]} />

          {/* Hero */}
          <div className="mb-16 text-center">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaShieldAlt className="mr-2" />
              Data Protection
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Data Security is Our Priority
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand that your CAD designs and engineering data are valuable
              intellectual property. Our comprehensive security measures ensure your
              projects remain confidential and protected.
            </p>
          </div>

          {/* Security Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Security Measures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <feature.icon className="text-accent-gold text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Practices */}
          <div className="mb-16 bg-white/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Our Security Practices</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-accent-gold mb-4">Data Handling</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    Files are encrypted at rest and in transit
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    Automatic file deletion after project completion (upon request)
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    No sharing of files with unauthorized parties
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    Secure file transfer protocols only
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-accent-gold mb-4">Personnel Security</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    Background checks for all engineers
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    Confidentiality agreements with all staff
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    Regular security awareness training
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    Strict clean desk policies
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Compliance & Standards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white/5 border-white/10 text-center">
                  <CardContent className="p-6">
                    <FaShieldAlt className="text-accent-gold text-2xl mx-auto mb-3" />
                    <p className="font-medium">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* NDA Section */}
          <div className="mb-16 bg-gradient-to-r from-accent-gold/20 to-accent-orange/20 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Need an NDA?</h2>
                <p className="text-gray-300">
                  We&apos;re happy to sign your NDA or provide our standard confidentiality
                  agreement before starting any project.
                </p>
              </div>
              <Link href="/contact">
                <button className="bg-accent-gold text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-accent-orange transition-colors inline-flex items-center whitespace-nowrap">
                  Request NDA <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          {/* Report Security Issue */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Report a Security Concern</h2>
            <p className="text-gray-300 mb-6">
              If you discover a security issue or have concerns about your project data,
              please contact us immediately.
            </p>
            <div className="bg-white/5 rounded-lg p-6 inline-block">
              <p><strong>Security Contact:</strong> leancamsys@gmail.com</p>
              <p className="text-gray-400 text-sm mt-2">
                We take all security reports seriously and respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
