"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaClock,
  FaProjectDiagram,
  FaUsers,
  FaCheck,
  FaDraftingCompass,
  FaCube,
  FaCogs,
  FaTools,
  FaIndustry,
  FaBuilding,
  FaCar,
  FaShieldAlt,
  FaRocket,
  FaUsersCog,
  FaMicrochip,
  FaStar,
  FaChevronDown,
  FaCloudUploadAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      {/* Top Banner */}
      <section className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark py-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-center space-x-4">
            <FaStar className="text-lg" />
            <p className="text-lg font-bold text-center">
              Flexible Offshore CAD/CAM Pricing—Starting at $8/hour
            </p>
            <FaStar className="text-lg" />
          </div>
        </div>
      </section>

      {/* Hero Pricing Section */}
      <section className="relative py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              Transparent <span className="gradient-text">Pricing</span> for Every Project
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose from flexible pricing models designed to fit your budget and project requirements.
              Save up to 60% compared to in-house operations while maintaining premium quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <FaClock className="text-accent-gold text-3xl mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-white mb-2">Hourly Rates</h3>
                <p className="text-gray-300">Starting at $8/hour</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <FaProjectDiagram className="text-accent-gold text-3xl mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-white mb-2">Project-Based</h3>
                <p className="text-gray-300">Fixed quotes available</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <FaUsers className="text-accent-gold text-3xl mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-white mb-2">Dedicated Teams</h3>
                <p className="text-gray-300">Full-time allocation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Models */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your <span className="gradient-text">Pricing Model</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible options to match your workflow and budget requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Hourly Model */}
            <Card className="bg-primary-dark border-gray-700 hover:transform hover:-translate-y-1 transition-all">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaClock className="text-primary-dark text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Hourly Rates</h3>
                  <p className="text-gray-300 mb-6">Perfect for ad-hoc or ongoing work</p>
                  <div className="text-4xl font-bold text-accent-gold mb-2">$8-25</div>
                  <p className="text-gray-300">per hour</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "CAD Drafting: $8-12/hour",
                    "3D Modeling: $12-18/hour",
                    "CAM Programming: $15-20/hour",
                    "Design Engineering: $18-25/hour",
                    "No minimum hours required",
                    "Weekly billing cycles",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <FaCheck className="text-accent-gold flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-accent-gold text-primary-dark hover:bg-accent-orange font-bold">
                  Start Hourly Project
                </Button>
              </CardContent>
            </Card>

            {/* Project-Based Model */}
            <Card className="bg-primary-dark border-2 border-accent-gold hover:transform hover:-translate-y-1 transition-all relative shadow-lg shadow-accent-gold/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent-gold text-primary-dark px-4 py-2 text-sm font-bold">
                  MOST POPULAR
                </Badge>
              </div>

              <CardContent className="p-8 mt-4">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaProjectDiagram className="text-primary-dark text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Project-Based</h3>
                  <p className="text-gray-300 mb-6">Fixed quote with clear scope</p>
                  <div className="text-4xl font-bold text-accent-gold mb-2">Custom</div>
                  <p className="text-gray-300">fixed pricing</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Detailed project scope definition",
                    "Fixed pricing with no surprises",
                    "Milestone-based payments",
                    "Dedicated project manager",
                    "Quality assurance included",
                    "Free revisions (up to 3)",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <FaCheck className="text-accent-gold flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-accent-gold text-primary-dark hover:bg-accent-orange font-bold">
                  Get Project Quote
                </Button>
              </CardContent>
            </Card>

            {/* Dedicated Team Model */}
            <Card className="bg-primary-dark border-gray-700 hover:transform hover:-translate-y-1 transition-all">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-primary-dark text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dedicated Team</h3>
                  <p className="text-gray-300 mb-6">Full-time resource allocation</p>
                  <div className="text-4xl font-bold text-accent-gold mb-2">$2,500+</div>
                  <p className="text-gray-300">per month</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "1-10 dedicated engineers",
                    "Your timezone availability",
                    "Direct communication channels",
                    "Monthly progress reports",
                    "Scalable team size",
                    "Priority support",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <FaCheck className="text-accent-gold flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-accent-gold text-primary-dark hover:bg-accent-orange font-bold">
                  Build Your Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Save Up to <span className="gradient-text">60%</span> vs In-House
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare the real costs and see how CADCAMX delivers exceptional value
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* In-House Costs */}
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">In-House Team Costs</h3>

                <div className="space-y-6">
                  {[
                    { label: "Senior CAD Engineer Salary", value: "$75,000/year" },
                    { label: "Benefits & Insurance", value: "$22,500/year" },
                    { label: "Software Licenses", value: "$8,000/year" },
                    { label: "Hardware & Equipment", value: "$5,000/year" },
                    { label: "Office Space & Utilities", value: "$6,000/year" },
                    { label: "Training & Development", value: "$3,500/year" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-gray-700 pb-4">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="font-bold text-red-400">{item.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-xl font-bold text-white">Total Annual Cost</span>
                    <span className="text-2xl font-bold text-red-400">$120,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CADCAMX Costs */}
            <Card className="bg-gray-900 border-2 border-accent-gold shadow-lg shadow-accent-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-accent-gold">
                  CADCAMX Offshore Costs
                </h3>

                <div className="space-y-6">
                  {[
                    { label: "Senior CAD Engineer (40hrs/week)", value: "$41,600/year" },
                    { label: "Project Management", value: "Included" },
                    { label: "Software Licenses", value: "Included" },
                    { label: "Hardware & Infrastructure", value: "Included" },
                    { label: "Quality Assurance", value: "Included" },
                    { label: "Support & Maintenance", value: "Included" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-gray-700 pb-4">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="font-bold text-accent-gold">{item.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-xl font-bold text-white">Total Annual Cost</span>
                    <span className="text-2xl font-bold text-accent-gold">$41,600</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-accent-gold text-primary-dark inline-block">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-2">You Save: $78,400/year</h3>
                <p className="text-xl font-semibold">That's 65% Cost Reduction!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Service-Specific <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for each service category to help you plan your budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaDraftingCompass,
                title: "CAD Drafting",
                price: "$8-12",
                items: ["2D Technical Drawings", "AutoCAD Conversion", "Blueprint Digitization", "As-Built Drawings"],
              },
              {
                icon: FaCube,
                title: "3D Modeling",
                price: "$12-18",
                items: ["SolidWorks Modeling", "Parametric Design", "Assembly Design", "Surface Modeling"],
              },
              {
                icon: FaCogs,
                title: "CAM Programming",
                price: "$15-20",
                items: ["CNC Programming", "Toolpath Optimization", "Multi-axis Machining", "Post-processor Setup"],
              },
              {
                icon: FaTools,
                title: "Design Engineering",
                price: "$18-25",
                items: ["Product Development", "FEA Analysis", "Design Optimization", "Technical Documentation"],
              },
            ].map((service, idx) => (
              <Card key={idx} className="bg-primary-dark border-gray-700">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <service.icon className="text-accent-gold text-3xl mb-4 mx-auto" />
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-accent-gold">{service.price}</div>
                    <p className="text-gray-300">per hour</p>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <FaCheck className="text-accent-gold text-xs flex-shrink-0" />
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Pricing */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored pricing packages for different industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaIndustry,
                title: "Manufacturing",
                description: "Complete manufacturing support",
                price: "$15,000",
                features: [
                  "Product design & development",
                  "Manufacturing drawings",
                  "CNC programming",
                  "Quality control documentation",
                ],
              },
              {
                icon: FaBuilding,
                title: "Architecture",
                description: "Architectural design services",
                price: "$8,000",
                features: [
                  "Architectural drawings",
                  "3D visualizations",
                  "Construction documentation",
                  "Building information modeling",
                ],
              },
              {
                icon: FaCar,
                title: "Automotive",
                description: "Automotive engineering solutions",
                price: "$20,000",
                features: [
                  "Component design",
                  "Assembly modeling",
                  "Simulation & testing",
                  "Production tooling",
                ],
              },
            ].map((industry, idx) => (
              <Card key={idx} className="bg-gray-900 border-gray-700">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <industry.icon className="text-accent-gold text-3xl mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                    <p className="text-gray-300">{industry.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-accent-gold mb-2">{industry.price}</div>
                    <p className="text-gray-300">per project (avg)</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {industry.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <FaCheck className="text-accent-gold flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-accent-gold text-primary-dark hover:bg-accent-orange font-bold">
                    Get {industry.title} Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">CADCAMX</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond competitive pricing, we deliver unmatched value and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: FaShieldAlt,
                title: "Quality Assurance",
                description: "Multi-level quality checks ensure 99.9% accuracy on all deliverables",
              },
              {
                icon: FaRocket,
                title: "Fast Turnaround",
                description: "24-hour turnaround for urgent projects with global team coverage",
              },
              {
                icon: FaUsersCog,
                title: "Expert Team",
                description: "150+ certified engineers with 5+ years average experience",
              },
              {
                icon: FaMicrochip,
                title: "Latest Software",
                description: "Access to premium CAD/CAM software without licensing costs",
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-dark text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>

          <Card className="bg-primary-dark border border-accent-gold">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Ready to Save 60% on Your Next Project?</h3>
                  <div className="space-y-4">
                    {[
                      "Free project consultation",
                      "No setup fees or hidden costs",
                      "Risk-free trial period",
                      "Money-back guarantee",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <FaCheck className="text-accent-gold" />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
                    <Image
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6361ca2ef8-a091f63e9bb71b6b8257.png"
                      alt="Professional engineers working on CAD designs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button className="bg-accent-gold text-primary-dark px-8 py-4 text-lg font-bold hover:bg-accent-orange">
                    Start Your Project Today
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Custom Estimate Form Section */}
      <section id="estimate-form" className="py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Your <span className="gradient-text">Custom Estimate</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your project and receive a detailed quote within 24 hours
            </p>
          </div>

          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-8">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Full Name *</label>
                    <Input
                      type="text"
                      className="bg-primary-dark border-gray-600 text-white focus:border-accent-gold"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Email Address *</label>
                    <Input
                      type="email"
                      className="bg-primary-dark border-gray-600 text-white focus:border-accent-gold"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Company Name</label>
                    <Input
                      type="text"
                      className="bg-primary-dark border-gray-600 text-white focus:border-accent-gold"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Phone Number</label>
                    <Input
                      type="tel"
                      className="bg-primary-dark border-gray-600 text-white focus:border-accent-gold"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Project Type *</label>
                  <Select>
                    <SelectTrigger className="bg-primary-dark border-gray-600 text-white">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-dark border-gray-600">
                      <SelectItem value="cad-drafting" className="text-white">
                        CAD Drafting
                      </SelectItem>
                      <SelectItem value="3d-modeling" className="text-white">
                        3D Modeling
                      </SelectItem>
                      <SelectItem value="cam-programming" className="text-white">
                        CAM Programming
                      </SelectItem>
                      <SelectItem value="design-engineering" className="text-white">
                        Design Engineering
                      </SelectItem>
                      <SelectItem value="product-development" className="text-white">
                        Product Development
                      </SelectItem>
                      <SelectItem value="manufacturing-support" className="text-white">
                        Manufacturing Support
                      </SelectItem>
                      <SelectItem value="other" className="text-white">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Preferred Pricing Model</label>
                    <Select>
                      <SelectTrigger className="bg-primary-dark border-gray-600 text-white">
                        <SelectValue placeholder="Select pricing model" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-dark border-gray-600">
                        <SelectItem value="hourly" className="text-white">
                          Hourly Rate
                        </SelectItem>
                        <SelectItem value="project" className="text-white">
                          Project-Based
                        </SelectItem>
                        <SelectItem value="dedicated" className="text-white">
                          Dedicated Team
                        </SelectItem>
                        <SelectItem value="unsure" className="text-white">
                          Not Sure
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Timeline</label>
                    <Select>
                      <SelectTrigger className="bg-primary-dark border-gray-600 text-white">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-dark border-gray-600">
                        <SelectItem value="urgent" className="text-white">
                          Urgent (1-3 days)
                        </SelectItem>
                        <SelectItem value="week" className="text-white">
                          1 Week
                        </SelectItem>
                        <SelectItem value="month" className="text-white">
                          1 Month
                        </SelectItem>
                        <SelectItem value="quarter" className="text-white">
                          3 Months
                        </SelectItem>
                        <SelectItem value="flexible" className="text-white">
                          Flexible
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Budget Range</label>
                    <Select>
                      <SelectTrigger className="bg-primary-dark border-gray-600 text-white">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-dark border-gray-600">
                        <SelectItem value="under-1k" className="text-white">
                          Under $1,000
                        </SelectItem>
                        <SelectItem value="1k-5k" className="text-white">
                          $1,000 - $5,000
                        </SelectItem>
                        <SelectItem value="5k-15k" className="text-white">
                          $5,000 - $15,000
                        </SelectItem>
                        <SelectItem value="15k-50k" className="text-white">
                          $15,000 - $50,000
                        </SelectItem>
                        <SelectItem value="over-50k" className="text-white">
                          Over $50,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Project Description *</label>
                  <Textarea
                    rows={6}
                    className="bg-primary-dark border-gray-600 text-white focus:border-accent-gold"
                    placeholder="Please describe your project requirements, deliverables needed, and any specific software or standards required..."
                    required
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-accent-gold text-primary-dark px-12 py-4 text-lg font-bold hover:bg-accent-orange shadow-lg shadow-accent-gold/20"
                  >
                    Get Custom Estimate
                  </Button>
                  <p className="text-sm text-gray-400 mt-4">
                    You'll receive a detailed quote within 24 hours. No spam, guaranteed.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">Get answers to common questions about our pricing and services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                id: "faq-1",
                question: "How do you ensure quality at such competitive rates?",
                answer:
                  "Our competitive rates are possible due to our offshore model and operational efficiency, not compromised quality. We maintain rigorous quality standards through multi-level reviews, certified engineers, and advanced quality management systems. Every project undergoes thorough quality checks before delivery.",
              },
              {
                id: "faq-2",
                question: "What's included in your project-based pricing?",
                answer:
                  "Project-based pricing includes complete project scope definition, dedicated project management, regular progress updates, quality assurance, up to 3 free revisions, and final deliverables in your preferred format. No hidden costs or surprise charges.",
              },
              {
                id: "faq-3",
                question: "Can I scale my dedicated team up or down?",
                answer:
                  "Absolutely! Our dedicated team model is designed for flexibility. You can scale your team size up or down with 30 days' notice. This allows you to adapt to changing project demands without long-term commitments.",
              },
              {
                id: "faq-4",
                question: "What payment terms do you offer?",
                answer:
                  "We offer flexible payment terms: hourly billing weekly, project-based with milestone payments (typically 50% upfront, 50% on completion), and monthly billing for dedicated teams. We accept all major payment methods and can accommodate NET 30 terms for established clients.",
              },
              {
                id: "faq-5",
                question: "Do you provide support after project completion?",
                answer:
                  "Yes, we provide 30 days of free post-delivery support for all projects. This includes minor revisions, file format conversions, and technical support. Extended support packages are available for ongoing projects or complex deliverables.",
              },
            ].map((faq) => (
              <Card key={faq.id} className="bg-primary-dark border-gray-700 overflow-hidden">
                <button
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                    <FaChevronDown
                      className={`text-accent-gold transition-transform duration-300 ${
                        openFAQ === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Save <span className="gradient-text">60%</span> on Your Next Project?
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join 500+ companies that trust CADCAMX for their offshore CAD/CAM needs. Get started today with a free
              consultation and custom quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-gold mb-2">24hrs</div>
              <p className="text-gray-300">Quote Turnaround</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-gold mb-2">60%</div>
              <p className="text-gray-300">Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-gold mb-2">99.9%</div>
              <p className="text-gray-300">Accuracy Rate</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-accent-gold text-primary-dark px-12 py-4 text-xl font-bold hover:bg-accent-orange shadow-lg shadow-accent-gold/20">
              Get Custom Estimate
            </Button>
            <Button
              variant="outline"
              className="border-2 border-accent-gold text-accent-gold px-12 py-4 text-xl font-bold hover:bg-accent-gold hover:text-primary-dark"
            >
              Schedule Consultation
            </Button>
          </div>

          <p className="text-sm text-gray-300 mt-8">
            No commitment required • Free consultation • 30-day money-back guarantee
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
