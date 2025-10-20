"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCube,
  FaDraftingCompass,
  FaCogs,
  FaClock,
  FaDollarSign,
  FaAward,
  FaCheck,
  FaCalculator,
  FaPrint,
  FaProjectDiagram,
  FaCar,
  FaPlane,
  FaHeartbeat,
  FaIndustry,
  FaMicrochip,
  FaOilCan,
  FaCertificate,
  FaShieldAlt,
  FaStar,
  FaSync,
  FaUsers,
  FaTools,
  FaPaintBrush,
  FaChartLine,
  FaLayerGroup,
  FaEye,
  FaShoppingCart,
  FaHome,
  FaGamepad,
  FaHammer,
  FaBuilding,
  FaBolt,
  FaChevronDown,
} from "react-icons/fa";

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-dark to-[#000066] min-h-[600px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-accent-gold/30 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-accent-gold/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent-gold/10 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="gradient-text">CAD/CAM</span>
              <br />
              Engineering Services
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive design and manufacturing support solutions delivered by expert engineers.
              From concept to production, we transform your ideas into reality with precision and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark px-8 py-6 text-lg font-semibold hover:shadow-lg hover:shadow-accent-gold/25">
                Explore Our Services
              </Button>
              <Button
                variant="outline"
                className="border-2 border-accent-gold text-accent-gold px-8 py-6 text-lg font-semibold hover:bg-accent-gold hover:text-primary-dark"
              >
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-accent-gold text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-white/70">Round-the-clock engineering support for your projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDollarSign className="text-accent-gold text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">From $8/Hour</h3>
              <p className="text-white/70">Competitive offshore rates without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-accent-gold text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-white/70">Certified professionals with 10+ years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Engineering Services</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive CAD/CAM solutions tailored to meet diverse industry requirements.
              Each service is delivered with precision, quality, and attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#000066]/30 border-accent-gold/20 hover:border-accent-gold/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mb-6">
                  <FaCube className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">3D Modeling</h3>
                <p className="text-white/80 mb-6">
                  Precision 3D models for manufacturing, visualization, and prototyping needs.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center">
                    <FaCheck className="text-accent-gold mr-2" /> Parametric Design
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-accent-gold mr-2" /> Assembly Modeling
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-accent-gold mr-2" /> Surface Modeling
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/30 border-accent-gold/20 hover:border-accent-gold/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mb-6">
                  <FaDraftingCompass className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Technical Drafting</h3>
                <p className="text-white/80 mb-6">
                  Detailed 2D drawings and documentation for manufacturing processes.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center">
                    <FaCheck className="text-accent-gold mr-2" /> Engineering Drawings
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-accent-gold mr-2" /> Assembly Drawings
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-accent-gold mr-2" /> Detail Drawings
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/30 border-accent-gold/20 hover:border-accent-gold/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mb-6">
                  <FaCogs className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">CAM Programming</h3>
                <p className="text-white/80 mb-6">
                  CNC programming and toolpath generation for efficient manufacturing.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center">
                    <FaCheck className="text-accent-gold mr-2" /> CNC Programming
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-accent-gold mr-2" /> Toolpath Optimization
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-accent-gold mr-2" /> Post Processing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-[#000066]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Service Portfolio</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Explore our complete range of engineering services. Click on any service to discover detailed information,
              deliverables, industry applications, and software expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1: 3D Modeling & Rendering */}
            <Card
              className="bg-[#000066]/20 border-accent-gold/20 overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-300"
              onClick={() => toggleService(1)}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center">
                      <FaCube className="text-accent-gold text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">3D Modeling & Rendering</h3>
                      <p className="text-accent-gold">Advanced 3D Design Solutions</p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-accent-gold text-xl transition-transform ${
                      expandedService === 1 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/019f2b6b63-070eec666245bd5858cd.png"
                    alt="3D CAD model rendering"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white/80 mb-6">
                  Realistic, manufacturable 3D models tailored to precision standards. Our expert team creates detailed parametric models
                  that serve as the foundation for manufacturing, prototyping, and visualization across multiple industries.
                </p>
                {expandedService === 1 && (
                  <div className="space-y-6">
                    <div className="bg-primary-dark/50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-4 text-accent-gold">Deliverables</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Parametric Models
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Exploded Views
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Rendering Animations
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Assembly Models
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Technical Renderings
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> CAD Files (Native)
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Typical Industries</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaCar className="text-accent-gold mr-2" /> Automotive
                          </li>
                          <li className="flex items-center">
                            <FaShoppingCart className="text-accent-gold mr-2" /> Consumer Products
                          </li>
                          <li className="flex items-center">
                            <FaIndustry className="text-accent-gold mr-2" /> Industrial Equipment
                          </li>
                          <li className="flex items-center">
                            <FaPlane className="text-accent-gold mr-2" /> Aerospace
                          </li>
                        </ul>
                      </div>
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Software Used</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> SolidWorks
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> CATIA
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Fusion 360
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Inventor
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-semibold hover:shadow-lg hover:shadow-accent-gold/25">
                      Request Sample Work
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Service 2: Technical Drafting */}
            <Card
              className="bg-[#000066]/20 border-accent-gold/20 overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-300"
              onClick={() => toggleService(2)}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center">
                      <FaDraftingCompass className="text-accent-gold text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Technical Drafting & Documentation</h3>
                      <p className="text-accent-gold">Precision Engineering Drawings</p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-accent-gold text-xl transition-transform ${
                      expandedService === 2 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5a63b8bba6-bc1546696ac8d107151b.png"
                    alt="Technical engineering drawing"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white/80 mb-6">
                  Comprehensive 2D technical drawings and documentation that meet international standards. Our drafting services ensure
                  clear communication between design and manufacturing teams with detailed specifications and annotations.
                </p>
                {expandedService === 2 && (
                  <div className="space-y-6">
                    <div className="bg-primary-dark/50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-4 text-accent-gold">Deliverables</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Engineering Drawings
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Assembly Drawings
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Detail Drawings
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Fabrication Drawings
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Bill of Materials
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Technical Specifications
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Typical Industries</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaBuilding className="text-accent-gold mr-2" /> Architecture
                          </li>
                          <li className="flex items-center">
                            <FaHammer className="text-accent-gold mr-2" /> Construction
                          </li>
                          <li className="flex items-center">
                            <FaIndustry className="text-accent-gold mr-2" /> Manufacturing
                          </li>
                          <li className="flex items-center">
                            <FaBolt className="text-accent-gold mr-2" /> Electrical
                          </li>
                        </ul>
                      </div>
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Software Used</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> AutoCAD
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> SolidWorks Drawings
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Inventor Drawings
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> DraftSight
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-semibold hover:shadow-lg hover:shadow-accent-gold/25">
                      Request Sample Work
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Service 3: CNC Programming */}
            <Card
              className="bg-[#000066]/20 border-accent-gold/20 overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-300"
              onClick={() => toggleService(3)}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center">
                      <FaCogs className="text-accent-gold text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">CNC Programming & CAM</h3>
                      <p className="text-accent-gold">Manufacturing Automation Solutions</p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-accent-gold text-xl transition-transform ${
                      expandedService === 3 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/cffe66e3f5-00608fe9d99d67cabf06.png"
                    alt="CNC programming interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white/80 mb-6">
                  Advanced CNC programming and computer-aided manufacturing solutions that optimize production efficiency.
                  Our CAM services bridge the gap between design and manufacturing with precision toolpath generation.
                </p>
                {expandedService === 3 && (
                  <div className="space-y-6">
                    <div className="bg-primary-dark/50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-4 text-accent-gold">Deliverables</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> CNC Programs (G-Code)
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Toolpath Optimization
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Setup Sheets
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Tool Lists
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Simulation Reports
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Post-Processed Files
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Typical Industries</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaPlane className="text-accent-gold mr-2" /> Aerospace
                          </li>
                          <li className="flex items-center">
                            <FaCar className="text-accent-gold mr-2" /> Automotive
                          </li>
                          <li className="flex items-center">
                            <FaHeartbeat className="text-accent-gold mr-2" /> Medical Devices
                          </li>
                          <li className="flex items-center">
                            <FaMicrochip className="text-accent-gold mr-2" /> Electronics
                          </li>
                        </ul>
                      </div>
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Software Used</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Mastercam
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Fusion 360 CAM
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> HSMWorks
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> PowerMill
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-semibold hover:shadow-lg hover:shadow-accent-gold/25">
                      Request Sample Work
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Service 4: FEA */}
            <Card
              className="bg-[#000066]/20 border-accent-gold/20 overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-300"
              onClick={() => toggleService(4)}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center">
                      <FaCalculator className="text-accent-gold text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Finite Element Analysis</h3>
                      <p className="text-accent-gold">Structural & Thermal Simulation</p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-accent-gold text-xl transition-transform ${
                      expandedService === 4 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d103a161ae-97417fe07851b45f91a9.png"
                    alt="FEA simulation"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white/80 mb-6">
                  Comprehensive structural and thermal analysis using advanced FEA techniques. Our simulation services help validate
                  designs, optimize performance, and ensure safety standards before manufacturing begins.
                </p>
                {expandedService === 4 && (
                  <div className="space-y-6">
                    <div className="bg-primary-dark/50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-4 text-accent-gold">Deliverables</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Stress Analysis Reports
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Thermal Analysis
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Modal Analysis
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Fatigue Analysis
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Optimization Studies
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Simulation Videos
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Typical Industries</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaBuilding className="text-accent-gold mr-2" /> Civil Engineering
                          </li>
                          <li className="flex items-center">
                            <FaPlane className="text-accent-gold mr-2" /> Aerospace
                          </li>
                          <li className="flex items-center">
                            <FaCar className="text-accent-gold mr-2" /> Automotive
                          </li>
                          <li className="flex items-center">
                            <FaOilCan className="text-accent-gold mr-2" /> Oil & Gas
                          </li>
                        </ul>
                      </div>
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Software Used</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> ANSYS
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> SolidWorks Simulation
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Abaqus
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Nastran
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-semibold hover:shadow-lg hover:shadow-accent-gold/25">
                      Request Sample Work
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Service 5: Reverse Engineering */}
            <Card
              className="bg-[#000066]/20 border-accent-gold/20 overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-300"
              onClick={() => toggleService(5)}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center">
                      <FaPrint className="text-accent-gold text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Reverse Engineering</h3>
                      <p className="text-accent-gold">3D Scanning & Reconstruction</p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-accent-gold text-xl transition-transform ${
                      expandedService === 5 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f1a0bc5d02-e7dbec5d447f8a23b6d4.png"
                    alt="3D scanning and reverse engineering"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white/80 mb-6">
                  Transform physical parts into precise digital models through advanced 3D scanning and reverse engineering techniques.
                  Perfect for legacy parts, design improvements, and quality inspection applications.
                </p>
                {expandedService === 5 && (
                  <div className="space-y-6">
                    <div className="bg-primary-dark/50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-4 text-accent-gold">Deliverables</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> 3D Scan Data
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> CAD Models
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Surface Models
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Parametric Features
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Dimension Reports
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Manufacturing Drawings
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Typical Industries</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaCar className="text-accent-gold mr-2" /> Automotive
                          </li>
                          <li className="flex items-center">
                            <FaPlane className="text-accent-gold mr-2" /> Aerospace
                          </li>
                          <li className="flex items-center">
                            <FaHeartbeat className="text-accent-gold mr-2" /> Medical
                          </li>
                          <li className="flex items-center">
                            <FaShoppingCart className="text-accent-gold mr-2" /> Consumer Products
                          </li>
                        </ul>
                      </div>
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Software Used</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Geomagic Design X
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> SolidWorks
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> PolyWorks
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Fusion 360
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-semibold hover:shadow-lg hover:shadow-accent-gold/25">
                      Request Sample Work
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Service 6: Product Development */}
            <Card
              className="bg-[#000066]/20 border-accent-gold/20 overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-300"
              onClick={() => toggleService(6)}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center">
                      <FaProjectDiagram className="text-accent-gold text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Product Development</h3>
                      <p className="text-accent-gold">Concept to Manufacturing</p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-accent-gold text-xl transition-transform ${
                      expandedService === 6 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1f868a12c2-bd1bd27def98a42e85c4.png"
                    alt="Product development lifecycle"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white/80 mb-6">
                  Complete product development lifecycle management from initial concept through manufacturing.
                  Our comprehensive approach ensures your product meets market requirements and manufacturing constraints.
                </p>
                {expandedService === 6 && (
                  <div className="space-y-6">
                    <div className="bg-primary-dark/50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-4 text-accent-gold">Deliverables</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Concept Designs
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Prototypes
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Design Validation
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Manufacturing Plans
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Cost Analysis
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-accent-gold mr-2" /> Production Files
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Typical Industries</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaShoppingCart className="text-accent-gold mr-2" /> Consumer Electronics
                          </li>
                          <li className="flex items-center">
                            <FaHome className="text-accent-gold mr-2" /> Home Appliances
                          </li>
                          <li className="flex items-center">
                            <FaGamepad className="text-accent-gold mr-2" /> Toys & Games
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Industrial Tools
                          </li>
                        </ul>
                      </div>
                      <div className="bg-primary-dark/50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold mb-4 text-accent-gold">Software Used</h4>
                        <ul className="space-y-2 text-white/80">
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> SolidWorks
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Fusion 360
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> KeyShot
                          </li>
                          <li className="flex items-center">
                            <FaTools className="text-accent-gold mr-2" /> Creo
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-semibold hover:shadow-lg hover:shadow-accent-gold/25">
                      Request Sample Work
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Engineering Process</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              A systematic approach to delivering exceptional engineering solutions. Our proven methodology ensures
              quality, efficiency, and client satisfaction at every stage of the project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-accent-gold/30">
                <span className="text-2xl font-bold text-accent-gold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Requirements Analysis</h3>
              <p className="text-white/70">Comprehensive understanding of project specifications, constraints, and objectives.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-accent-gold/30">
                <span className="text-2xl font-bold text-accent-gold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Concept Development</h3>
              <p className="text-white/70">Initial design concepts and feasibility studies with multiple solution approaches.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-accent-gold/30">
                <span className="text-2xl font-bold text-accent-gold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Design & Validation</h3>
              <p className="text-white/70">Detailed design development with simulation, testing, and iterative refinement.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-accent-gold/30">
                <span className="text-2xl font-bold text-accent-gold">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Delivery & Support</h3>
              <p className="text-white/70">Final deliverables with comprehensive documentation and ongoing technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise - Part 1 due to file size */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-[#000066]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Expertise</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Specialized knowledge across diverse industries with deep understanding of sector-specific requirements,
              standards, and manufacturing processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FaCar className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Automotive</h3>
                <p className="text-white/80 mb-4">Engine components, chassis design, interior systems, and safety features with IATF 16949 compliance.</p>
                <ul className="text-white/70 space-y-2">
                  <li>• Powertrain Components</li>
                  <li>• Body & Chassis Design</li>
                  <li>• Safety Systems</li>
                  <li>• Interior/Exterior Parts</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FaPlane className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Aerospace</h3>
                <p className="text-white/80 mb-4">Aircraft structures, propulsion systems, and avionics with AS9100 quality standards.</p>
                <ul className="text-white/70 space-y-2">
                  <li>• Aircraft Structures</li>
                  <li>• Engine Components</li>
                  <li>• Avionics Housing</li>
                  <li>• Landing Gear Systems</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FaHeartbeat className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Medical Devices</h3>
                <p className="text-white/80 mb-4">Surgical instruments, diagnostic equipment, and implants with FDA compliance and biocompatibility.</p>
                <ul className="text-white/70 space-y-2">
                  <li>• Surgical Instruments</li>
                  <li>• Diagnostic Equipment</li>
                  <li>• Implants & Prosthetics</li>
                  <li>• Laboratory Devices</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FaIndustry className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Industrial Equipment</h3>
                <p className="text-white/80 mb-4">Heavy machinery, automation systems, and manufacturing equipment with industrial standards.</p>
                <ul className="text-white/70 space-y-2">
                  <li>• Manufacturing Equipment</li>
                  <li>• Automation Systems</li>
                  <li>• Heavy Machinery</li>
                  <li>• Process Equipment</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FaMicrochip className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Electronics</h3>
                <p className="text-white/80 mb-4">Consumer electronics, telecommunications, and semiconductor packaging with precision requirements.</p>
                <ul className="text-white/70 space-y-2">
                  <li>• Consumer Electronics</li>
                  <li>• Telecommunications</li>
                  <li>• Semiconductor Packaging</li>
                  <li>• PCB Design</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FaOilCan className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Oil & Gas</h3>
                <p className="text-white/80 mb-4">Drilling equipment, pipeline systems, and refinery components with API standards compliance.</p>
                <ul className="text-white/70 space-y-2">
                  <li>• Drilling Equipment</li>
                  <li>• Pipeline Systems</li>
                  <li>• Refinery Components</li>
                  <li>• Offshore Structures</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Quality Standards & Certifications</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Our commitment to excellence is demonstrated through adherence to international quality standards
              and continuous improvement in our engineering processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaCertificate className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
                <p className="text-white/70">Quality Management System certification ensuring consistent service delivery.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">AS9100D</h3>
                <p className="text-white/70">Aerospace quality standard for critical applications and safety requirements.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaCar className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">IATF 16949</h3>
                <p className="text-white/70">Automotive quality management standard for supply chain excellence.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaHeartbeat className="text-accent-gold text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">ISO 13485</h3>
                <p className="text-white/70">Medical device quality management for regulatory compliance.</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-[#000066]/20 border-accent-gold/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Quality Commitment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-accent-gold" />
                  </div>
                  <h4 className="font-semibold mb-2">Design Reviews</h4>
                  <p className="text-white/70 text-sm">Multi-stage review process with senior engineers</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSync className="text-accent-gold" />
                  </div>
                  <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                  <p className="text-white/70 text-sm">Regular process optimization and skill development</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-accent-gold" />
                  </div>
                  <h4 className="font-semibold mb-2">Client Satisfaction</h4>
                  <p className="text-white/70 text-sm">98% client satisfaction rate with repeat business</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-[#000066]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technology Stack</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Cutting-edge software tools and technologies that enable us to deliver world-class engineering solutions
              with precision, efficiency, and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-[#000066]/20 border-accent-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent-gold">CAD Software</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["SolidWorks", "CATIA", "Fusion 360", "Inventor", "Creo", "NX"].map((software) => (
                    <div key={software} className="flex items-center space-x-3 p-3 bg-primary-dark/50 rounded-lg">
                      <FaCube className="text-accent-gold" />
                      <span className="font-medium">{software}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent-gold">CAM Software</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Mastercam", "HSMWorks", "PowerMill", "CAMWorks", "EdgeCAM", "Fusion CAM"].map((software) => (
                    <div key={software} className="flex items-center space-x-3 p-3 bg-primary-dark/50 rounded-lg">
                      <FaCogs className="text-accent-gold" />
                      <span className="font-medium">{software}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent-gold">Simulation & Analysis</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["ANSYS", "Abaqus", "Nastran", "SolidWorks Simulation", "COMSOL", "LS-DYNA"].map((software) => (
                    <div key={software} className="flex items-center space-x-3 p-3 bg-primary-dark/50 rounded-lg">
                      <FaCalculator className="text-accent-gold" />
                      <span className="font-medium">{software}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent-gold">Specialized Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "KeyShot", icon: FaPaintBrush },
                    { name: "AutoCAD", icon: FaDraftingCompass },
                    { name: "Geomagic", icon: FaPrint },
                    { name: "MATLAB", icon: FaChartLine },
                    { name: "PolyWorks", icon: FaLayerGroup },
                    { name: "3ds Max", icon: FaEye },
                  ].map((software) => (
                    <div key={software.name} className="flex items-center space-x-3 p-3 bg-primary-dark/50 rounded-lg">
                      <software.icon className="text-accent-gold" />
                      <span className="font-medium">{software.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Client Success Stories</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Discover how our engineering services have helped clients across various industries achieve
              their design and manufacturing goals with precision and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#000066]/20 border-accent-gold/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden">
                    <Image
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                      alt="Client Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Johnson</h4>
                    <p className="text-white/70 text-sm">Engineering Director, AutoTech Industries</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-accent-gold" />
                  ))}
                </div>
                <p className="text-white/80 italic">
                  "CADCAMX delivered exceptional 3D modeling services for our new engine component line.
                  Their attention to detail and manufacturing expertise saved us months of development time."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden">
                    <Image
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                      alt="Client Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Chen</h4>
                    <p className="text-white/70 text-sm">Product Manager, MedDevice Corp</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-accent-gold" />
                  ))}
                </div>
                <p className="text-white/80 italic">
                  "Outstanding FEA analysis for our medical device project. The simulation results were
                  accurate and helped us optimize the design for FDA approval. Highly recommended!"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#000066]/20 border-accent-gold/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden">
                    <Image
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                      alt="Client Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">David Rodriguez</h4>
                    <p className="text-white/70 text-sm">Manufacturing Engineer, AeroSpace Solutions</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-accent-gold" />
                  ))}
                </div>
                <p className="text-white/80 italic">
                  "Their CAM programming expertise is unmatched. Complex aerospace parts were programmed
                  efficiently with optimized toolpaths that reduced machining time by 30%."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-[#000066]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Request Sample Work</h2>
            <p className="text-xl text-white/80">
              Interested in seeing our capabilities? Fill out the form below to request sample work
              for your specific service requirements.
            </p>
          </div>
          <Card className="bg-[#000066]/20 border-accent-gold/20">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">Full Name *</label>
                    <Input
                      type="text"
                      className="w-full bg-primary-dark/50 border-accent-gold/30 text-white focus:border-accent-gold"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">Company *</label>
                    <Input
                      type="text"
                      className="w-full bg-primary-dark/50 border-accent-gold/30 text-white focus:border-accent-gold"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">Email Address *</label>
                    <Input
                      type="email"
                      className="w-full bg-primary-dark/50 border-accent-gold/30 text-white focus:border-accent-gold"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">Phone Number</label>
                    <Input
                      type="tel"
                      className="w-full bg-primary-dark/50 border-accent-gold/30 text-white focus:border-accent-gold"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Service of Interest *</label>
                  <Select>
                    <SelectTrigger className="w-full bg-primary-dark/50 border-accent-gold/30 text-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3d-modeling">3D Modeling & Rendering</SelectItem>
                      <SelectItem value="technical-drafting">Technical Drafting & Documentation</SelectItem>
                      <SelectItem value="cnc-programming">CNC Programming & CAM</SelectItem>
                      <SelectItem value="fea">Finite Element Analysis</SelectItem>
                      <SelectItem value="reverse-engineering">Reverse Engineering</SelectItem>
                      <SelectItem value="product-development">Product Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Industry</label>
                  <Select>
                    <SelectTrigger className="w-full bg-primary-dark/50 border-accent-gold/30 text-white">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="aerospace">Aerospace</SelectItem>
                      <SelectItem value="medical">Medical Devices</SelectItem>
                      <SelectItem value="industrial">Industrial Equipment</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Project Details</label>
                  <Textarea
                    rows={4}
                    className="w-full bg-primary-dark/50 border-accent-gold/30 text-white focus:border-accent-gold"
                    placeholder="Please describe your project requirements, timeline, and any specific sample work you'd like to see..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark py-6 text-lg font-semibold hover:shadow-lg hover:shadow-accent-gold/25"
                >
                  Request Sample Work
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
