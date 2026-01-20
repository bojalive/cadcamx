"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { SEOPageData } from "@/lib/seo-pages-data";
import {
  FaRocket,
  FaCheck,
  FaCheckCircle,
  FaTimes,
  FaStar,
  FaQuoteLeft,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaCube,
  FaClock,
  FaShieldAlt,
  FaCertificate,
  FaCogs,
  FaCode,
  FaFileAlt,
  FaIndustry,
  FaChartLine,
  FaUsers,
  FaDollarSign,
  FaPlane,
  FaCar,
  FaHeartbeat,
  FaMicrochip,
  FaTools,
  FaLayerGroup,
  FaDrawPolygon,
  FaProjectDiagram,
  FaClipboardCheck,
  FaLanguage,
  FaGlobe,
  FaLock,
  FaSearchDollar,
  FaTachometerAlt,
  FaHandshake,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

// Icon mapping for features
const iconMap: Record<string, React.ElementType> = {
  scale: FaChartLine,
  software: FaCube,
  clock: FaClock,
  certificate: FaCertificate,
  security: FaShieldAlt,
  pricing: FaDollarSign,
  language: FaLanguage,
  timezone: FaGlobe,
  quality: FaCheckCircle,
  tracking: FaClipboardCheck,
  manufacturing: FaIndustry,
  tolerance: FaDrawPolygon,
  process: FaCogs,
  assembly: FaProjectDiagram,
  drawing: FaFileAlt,
  organize: FaLayerGroup,
  speed: FaTachometerAlt,
  axis: FaCube,
  simulation: FaMicrochip,
  code: FaCode,
  document: FaFileAlt,
  tools: FaTools,
  catia: FaCube,
  standards: FaClipboardCheck,
  vehicle: FaCar,
  compliance: FaCertificate,
  plm: FaProjectDiagram,
  surface: FaDrawPolygon,
  aircraft: FaPlane,
  systems: FaCogs,
  mbd: FaFileAlt,
  certification: FaCertificate,
  controls: FaClipboardCheck,
  materials: FaCube,
  documentation: FaFileAlt,
  regulatory: FaCertificate,
  integration: FaProjectDiagram,
  file: FaFileAlt,
  cube: FaCube,
};

interface SEOLandingPageProps {
  data: SEOPageData;
}

export function SEOLandingPage({ data }: SEOLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-blue-900/50 to-primary-dark"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-animation absolute top-20 left-20 w-32 h-32 bg-accent-gold/5 rounded-full blur-xl"></div>
          <div className="floating-animation absolute bottom-20 right-20 w-48 h-48 bg-accent-orange/5 rounded-full blur-xl" style={{ animationDelay: "-3s" }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Badge className="inline-flex items-center bg-accent-gold/10 border border-accent-gold/20 text-accent-gold mb-6">
            <FaStar className="mr-2" />
            {data.context}
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {data.h1.split(/(\d+%|\$\d+)/g).map((part, i) =>
              /\d+%|\$\d+/.test(part) ? (
                <span key={i} className="gradient-text">{part}</span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            {data.heroIntro}
          </p>

          <ul className="space-y-3 mb-10">
            {data.heroBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-200">
                <FaCheckCircle className="text-accent-gold mt-1 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark px-8 py-6 text-lg font-bold hover:shadow-lg hover:shadow-accent-gold/25 hover-scale">
                <FaRocket className="mr-2" />
                {data.ctaText}
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-accent-gold/30 text-accent-gold hover:bg-accent-gold/10 px-8 py-6 text-lg">
                View Pricing <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Starting from <span className="text-accent-gold font-bold">{data.pricingStart}</span> | {data.pricingNote}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {data.problemTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {data.problemDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.painPoints.map((pain, index) => (
              <Card key={index} className="bg-red-950/20 border-red-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <FaTimes className="text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{pain}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-500/10 border-green-500/20 text-green-400 mb-4">
                The Solution
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {data.solutionTitle}
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {data.solutionDescription}
              </p>
              <ul className="space-y-4">
                {data.solutionHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Hours Delivered", value: "2M+" },
                { label: "Client Retention", value: "98%" },
                { label: "Accuracy Rate", value: "99.9%" },
                { label: "Countries Served", value: "50+" },
              ].map((stat, index) => (
                <Card key={index} className="bg-white/5 border-white/10">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Features & Benefits
            </h2>
            <p className="text-xl text-gray-300">
              Why leading companies choose CADCAMX
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || FaCube;
              return (
                <Card key={index} className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-accent-gold text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {data.useCaseTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {data.useCaseDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.useCaseScenarios.map((scenario, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <FaCheckCircle className="text-accent-gold flex-shrink-0" />
                <span className="text-gray-200">{scenario}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {data.comparisonTitle}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Aspect</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Traditional</th>
                  <th className="text-center py-4 px-4 text-accent-gold font-medium">CADCAMX</th>
                </tr>
              </thead>
              <tbody>
                {data.comparisonItems.map((item, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 px-4 text-gray-200 font-medium">{item.aspect}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{item.traditional}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-400 font-semibold">{item.cadcamx}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-gradient-to-br from-accent-gold/10 to-accent-orange/5 border-accent-gold/20">
            <CardContent className="p-8 lg:p-12">
              <FaQuoteLeft className="text-accent-gold text-4xl mb-6 opacity-50" />
              <blockquote className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                &ldquo;{data.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center">
                  <FaUsers className="text-accent-gold" />
                </div>
                <div>
                  <p className="font-semibold">{data.testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{data.testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about {data.primaryKeyword}
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <Card
                key={index}
                className={`bg-white/5 border-white/10 cursor-pointer transition-all duration-300 ${
                  openFaq === index ? "border-accent-gold/30" : ""
                }`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <FaChevronUp className="text-accent-gold flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                  {openFaq === index && (
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started with{" "}
            <span className="gradient-text">{data.primaryKeyword.split(" ").slice(0, 3).join(" ")}</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ companies that trust CADCAMX for their engineering needs. Get a free quote in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark px-10 py-6 text-lg font-bold hover:shadow-lg hover:shadow-accent-gold/25 hover-scale">
                <FaRocket className="mr-2" />
                {data.ctaText}
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-accent-gold/30 text-accent-gold hover:bg-accent-gold/10 px-10 py-6 text-lg">
                View All Pricing
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-gray-400">
            <FaHandshake className="inline mr-2" />
            30-day satisfaction guarantee | No long-term contracts required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
