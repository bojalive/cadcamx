"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaStar,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCube,
  FaCogs,
  FaMicroscope,
  FaChartLine,
  FaCar,
  FaPlane,
  FaHeartbeat,
  FaIndustry,
} from "react-icons/fa";
import { caseStudiesData } from "@/lib/case-studies-data";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Get unique industries and categories
  const industries = ["all", ...Array.from(new Set(caseStudiesData.map((cs) => cs.industry)))];
  const categories = [
    "all",
    "Precision Tooling",
    "Cost Reduction",
    "Quality Improvement",
    "Time Optimization",
    "Lightweight Design",
    "FDA Compliance",
  ];

  // Filter case studies
  const filteredCaseStudies = caseStudiesData.filter((cs) => {
    const industryMatch = selectedIndustry === "all" || cs.industry === selectedIndustry;
    const categoryMatch = selectedCategory === "all"; // You can add category logic here
    return industryMatch && categoryMatch;
  });

  // Get featured case studies (first 2)
  const featuredCaseStudies = filteredCaseStudies.slice(0, 2);

  // Get remaining case studies for grid
  const gridCaseStudies = filteredCaseStudies.slice(2);

  const clearFilters = () => {
    setSelectedIndustry("all");
    setSelectedCategory("all");
  };

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#000066] to-primary-dark"></div>
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Proven Engineering Excellence
              <span className="text-accent-gold block mt-4">Case Studies & Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover how our offshore CAD/CAM engineering services have delivered quantifiable results for manufacturers worldwide.
              From precision mold making to complex assemblies, see the impact of our $8/hour premium engineering solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <Card className="bg-white/10 backdrop-blur-sm border-accent-gold/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">150+</div>
                  <div className="text-white font-medium">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-accent-gold/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">38%</div>
                  <div className="text-white font-medium">Average Time Reduction</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-accent-gold/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">$2M+</div>
                  <div className="text-white font-medium">Client Savings Generated</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-accent-gold/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">98%</div>
                  <div className="text-white font-medium">Client Satisfaction Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 px-8 bg-gradient-to-b from-primary-dark to-[#000066]">
        <div className="container mx-auto max-w-7xl">
          <Card className="bg-white/5 backdrop-blur-sm border-accent-gold/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Filter Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="text-white font-medium mb-2 block">Industry</label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select Industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-dark border-accent-gold/20">
                      {industries.map((industry) => (
                        <SelectItem
                          key={industry}
                          value={industry}
                          className="text-white hover:bg-accent-gold/20 focus:bg-accent-gold/20"
                        >
                          {industry === "all" ? "All Industries" : industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-dark border-accent-gold/20">
                      {categories.map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          className="text-white hover:bg-accent-gold/20 focus:bg-accent-gold/20"
                        >
                          {category === "all" ? "All Categories" : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="w-full border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark font-medium"
                  >
                    Clear All Filters
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {selectedIndustry !== "all" && (
                  <Badge className="bg-accent-gold/20 text-accent-gold px-4 py-2 border border-accent-gold/30 hover:bg-accent-gold/30">
                    Industry: {selectedIndustry}
                    <button
                      className="ml-2 hover:text-white transition-colors"
                      onClick={() => setSelectedIndustry("all")}
                    >
                      <FaTimes />
                    </button>
                  </Badge>
                )}
                {selectedCategory !== "all" && (
                  <Badge className="bg-accent-gold/20 text-accent-gold px-4 py-2 border border-accent-gold/30 hover:bg-accent-gold/30">
                    Category: {selectedCategory}
                    <button
                      className="ml-2 hover:text-white transition-colors"
                      onClick={() => setSelectedCategory("all")}
                    >
                      <FaTimes />
                    </button>
                  </Badge>
                )}
                <div className="text-gray-400 px-4 py-2">
                  Showing {filteredCaseStudies.length} of {caseStudiesData.length} case studies
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Success Stories */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-20 px-8">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredCaseStudies.map((caseStudy) => (
                <Card
                  key={caseStudy.slug}
                  className="bg-white/5 backdrop-blur-sm border-accent-gold/20 overflow-hidden hover:border-accent-gold/40 transition-all group"
                >
                  <div className="relative overflow-hidden h-80">
                    <Image
                      src={caseStudy.featuredImage}
                      alt={caseStudy.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent-gold text-primary-dark font-bold">Featured</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white">{caseStudy.industry}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                    <p className="text-gray-300 mb-6">{caseStudy.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-accent-gold mb-1">{metric.value}</div>
                          <div className="text-sm text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-bold hover:shadow-lg"
                    >
                      <a href={`/case-studies/${caseStudy.slug}`}>View Full Case Study</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      {gridCaseStudies.length > 0 && (
        <section className="py-20 px-8 bg-gradient-to-b from-primary-dark to-[#000066]">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Complete Project Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridCaseStudies.map((caseStudy) => (
                <Card
                  key={caseStudy.slug}
                  className="bg-white/5 backdrop-blur-sm border-accent-gold/20 overflow-hidden hover:border-accent-gold/40 transition-all group"
                >
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={caseStudy.heroImage}
                      alt={caseStudy.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white text-xs">{caseStudy.industry}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{caseStudy.title}</h3>
                    <div className="text-sm text-gray-400 mb-4">PROJECT DURATION: {caseStudy.duration}</div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{caseStudy.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      {caseStudy.metrics.slice(0, 3).map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-accent-gold">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-accent-gold/20 text-accent-gold border-accent-gold/30 hover:bg-accent-gold hover:text-primary-dark"
                    >
                      <a href={`/case-studies/${caseStudy.slug}`}>Read Case Study</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonials */}
      <section className="py-20 px-8 bg-gradient-to-b from-primary-dark to-[#000066]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
                name: "Sarah Chen",
                title: "VP Engineering, TechMold Inc.",
                quote:
                  "The level of expertise and attention to detail from CADCAMX is unmatched. They transformed our entire manufacturing process and delivered results that exceeded our most optimistic projections.",
              },
              {
                avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
                name: "David Rodriguez",
                title: "Operations Manager, Precision Parts Co.",
                quote:
                  "Working with CADCAMX at $8/hour was the best investment we've made. The quality of work rivals firms charging 10x more, and their turnaround time is incredible.",
              },
              {
                avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
                name: "Emily Watson",
                title: "Chief Technology Officer, AeroTech",
                quote:
                  "The aerospace components they designed for us met every specification perfectly. Their attention to detail and understanding of complex manufacturing requirements is outstanding.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-accent-gold/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full mr-4 overflow-hidden">
                      <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}</div>
                      <div className="flex text-accent-gold mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Metrics */}
      <section className="py-20 px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Industry Impact Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-white/5 backdrop-blur-sm border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-accent-gold mb-4">150+</div>
                <div className="text-xl font-bold text-white mb-2">Projects Completed</div>
                <div className="text-gray-400">Across 12+ industries worldwide</div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-accent-gold mb-4">$2.4M</div>
                <div className="text-xl font-bold text-white mb-2">Total Client Savings</div>
                <div className="text-gray-400">Documented cost reductions</div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-accent-gold mb-4">98.7%</div>
                <div className="text-xl font-bold text-white mb-2">Client Satisfaction</div>
                <div className="text-gray-400">Based on project completion surveys</div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-accent-gold mb-4">35%</div>
                <div className="text-xl font-bold text-white mb-2">Average Efficiency Gain</div>
                <div className="text-gray-400">Across all manufacturing processes</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-accent-gold/20">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white text-center mb-12">Success Metrics by Industry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: FaCar,
                    name: "Automotive",
                    metrics: [
                      { label: "Time Reduction:", value: "42%" },
                      { label: "Cost Savings:", value: "$680K" },
                      { label: "Projects:", value: "45" },
                    ],
                  },
                  {
                    icon: FaPlane,
                    name: "Aerospace",
                    metrics: [
                      { label: "Precision Gain:", value: "99.8%" },
                      { label: "Cost Savings:", value: "$890K" },
                      { label: "Projects:", value: "28" },
                    ],
                  },
                  {
                    icon: FaHeartbeat,
                    name: "Medical Devices",
                    metrics: [
                      { label: "Quality Improvement:", value: "99.9%" },
                      { label: "Cost Savings:", value: "$420K" },
                      { label: "Projects:", value: "32" },
                    ],
                  },
                ].map((industry, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-accent-gold/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                      <industry.icon className="text-accent-gold text-3xl" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">{industry.name}</h4>
                    <div className="space-y-2">
                      {industry.metrics.map((metric, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span className="text-gray-400">{metric.label}</span>
                          <span className="text-accent-gold font-bold">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-8 bg-gradient-to-b from-primary-dark to-[#000066]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Advanced Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: FaCube,
                title: "CAD Software",
                items: ["SolidWorks Premium", "Autodesk Inventor", "CATIA V5/V6", "NX Siemens", "Fusion 360"],
              },
              {
                icon: FaCogs,
                title: "CAM Software",
                items: ["Mastercam X7", "PowerMill", "HSMWorks", "GibbsCAM", "EdgeCAM"],
              },
              {
                icon: FaMicroscope,
                title: "Analysis Tools",
                items: ["ANSYS Simulation", "Vericut CNC", "GD&T Analysis", "Flow Simulation", "FEA Analysis"],
              },
              {
                icon: FaChartLine,
                title: "Quality Control",
                items: ["CMM Programming", "Statistical Analysis", "Process Control", "Metrology Planning", "Quality Reporting"],
              },
            ].map((tech, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-accent-gold/20 text-center hover:border-accent-gold/40 transition-all"
              >
                <CardContent className="p-8">
                  <div className="bg-accent-gold/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <tech.icon className="text-accent-gold text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    {tech.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 border-accent-gold/30">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-accent-gold mb-6">Cutting-Edge Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">5-Axis</div>
                  <div className="text-lg text-accent-gold font-medium mb-2">Machining Expertise</div>
                  <div className="text-gray-300 text-sm">Complex geometries and simultaneous 5-axis strategies</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">±0.0001"</div>
                  <div className="text-lg text-accent-gold font-medium mb-2">Precision Tolerance</div>
                  <div className="text-gray-300 text-sm">Micro-precision manufacturing capabilities</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-lg text-accent-gold font-medium mb-2">Support Coverage</div>
                  <div className="text-gray-300 text-sm">Round-the-clock engineering support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto text-center max-w-7xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your Manufacturing?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join 150+ satisfied clients who have revolutionized their manufacturing processes with our $8/hour premium engineering
            services. Start your success story today.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Button
              onClick={() => window.location.href = '/contact'}
              className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-bold px-8 py-6 text-lg hover:shadow-lg"
            >
              Start Your Project Today
            </Button>
            <Button
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="border-white/20 text-white px-8 py-6 text-lg hover:bg-white/20"
            >
              Download Case Studies PDF
            </Button>
            <Button
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="border-accent-gold text-accent-gold px-8 py-6 text-lg hover:bg-accent-gold/10"
            >
              Schedule Free Consultation
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <FaPhone className="text-accent-gold text-2xl mr-4" />
              <div className="text-left">
                <div className="text-white font-bold">Call Us</div>
                <div className="text-gray-300">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FaEnvelope className="text-accent-gold text-2xl mr-4" />
              <div className="text-left">
                <div className="text-white font-bold">Email Us</div>
                <div className="text-gray-300">hello@cadcamx.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FaClock className="text-accent-gold text-2xl mr-4" />
              <div className="text-left">
                <div className="text-white font-bold">Response Time</div>
                <div className="text-gray-300">Within 2 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
