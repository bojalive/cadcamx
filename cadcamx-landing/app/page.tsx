"use client";

import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaStar,
  FaRocket,
  FaEye,
  FaCube,
  FaCog,
  FaMicrochip,
  FaIndustry,
  FaDraftingCompass,
  FaAtom,
  FaClock,
  FaUsers,
  FaShieldAlt,
  FaArrowRight,
  FaSearch,
  FaChartLine,
  FaLightbulb,
  FaChartBar,
  FaUsersCog,
  FaCertificate,
  FaCheck,
  FaCalculator,
  FaPhone,
  FaUserSecret,
  FaShippingFast,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBolt,
  FaPaperPlane,
  FaPlane,
  FaCar,
  FaHeartbeat,
  FaImages,
  FaFileAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-dark text-white scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-[900px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-blue-900 to-primary-dark"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-animation absolute top-20 left-20 w-32 h-32 bg-accent-gold/5 rounded-full blur-xl"></div>
          <div
            className="floating-animation absolute bottom-20 right-20 w-48 h-48 bg-accent-orange/5 rounded-full blur-xl"
            style={{ animationDelay: "-3s" }}
          ></div>
          <div
            className="floating-animation absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"
            style={{ animationDelay: "-1.5s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="inline-flex items-center bg-accent-gold/10 border border-accent-gold/20 text-accent-gold mb-6">
              <FaStar className="mr-2" />
              Premium CAD/CAM Services
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Offshore CAD & CAM Excellence—
              <span className="gradient-text">Starting from $8/hour</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Accelerate Design. Reduce Cost. Scale Smart with CADCAMX.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark px-8 py-6 text-lg font-bold hover:shadow-lg hover:shadow-accent-gold/25 hover-scale">
                <FaRocket className="mr-2" />
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white px-8 py-6 text-lg font-medium hover:bg-white hover:text-primary-dark"
              >
                <FaEye className="mr-2" />
                View Work Samples
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-accent-gold">2M+</div>
                <div className="text-sm text-gray-400">Drawing Hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-gold">98%</div>
                <div className="text-sm text-gray-400">Client Retention</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-gold">24/7</div>
                <div className="text-sm text-gray-400">Secure Access</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c82c692e61-2280bf58801ab36da1fa.png"
                alt="3D CAD engineering design workspace"
                width={800}
                height={600}
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Trust & Capability Highlights */}
      <section id="trust-section" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-400 text-lg">
              Professional-grade software and proven expertise
            </p>
          </div>

          {/* Software Badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {[
              { icon: FaCube, name: "AutoCAD" },
              { icon: FaCog, name: "SolidWorks" },
              { icon: FaMicrochip, name: "CATIA" },
              { icon: FaIndustry, name: "Siemens NX" },
              { icon: FaDraftingCompass, name: "Creo" },
              { icon: FaAtom, name: "Fusion 360" },
            ].map((software) => (
              <Card
                key={software.name}
                className="flex flex-col items-center p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all hover-scale cursor-pointer"
              >
                <software.icon className="text-accent-gold text-3xl mb-3" />
                <span className="font-medium text-white">{software.name}</span>
              </Card>
            ))}
          </div>

          {/* Metrics Banner */}
          <div className="bg-gradient-to-r from-accent-gold/10 to-accent-orange/10 border border-accent-gold/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-4">
                <FaClock className="text-accent-gold text-2xl" />
                <div>
                  <div className="text-2xl font-bold">2M+ Drawing Hours</div>
                  <div className="text-gray-400">Completed Successfully</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <FaUsers className="text-accent-gold text-2xl" />
                <div>
                  <div className="text-2xl font-bold">98% Client Retention</div>
                  <div className="text-gray-400">Satisfaction Rate</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <FaShieldAlt className="text-accent-gold text-2xl" />
                <div>
                  <div className="text-2xl font-bold">24/7 Secure Access</div>
                  <div className="text-gray-400">Protected Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Snapshot */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-400">
              Comprehensive CAD/CAM solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaDraftingCompass,
                title: "2D Drafting & Detailing",
                description:
                  "Precision technical drawings and detailed blueprints for manufacturing excellence.",
              },
              {
                icon: FaCube,
                title: "3D Modeling & Rendering",
                description:
                  "Photorealistic 3D models and stunning visualizations for design validation.",
              },
              {
                icon: FaCog,
                title: "CAM Programming",
                description:
                  "CNC, Milling, and Turning programs for optimal manufacturing efficiency.",
              },
              {
                icon: FaSearch,
                title: "Reverse Engineering",
                description:
                  "Transform physical parts into precise digital models and documentation.",
              },
              {
                icon: FaChartLine,
                title: "Simulation & Optimization",
                description:
                  "Advanced analysis and optimization for performance and cost efficiency.",
              },
              {
                icon: FaLightbulb,
                title: "Product Design & Development",
                description:
                  "End-to-end product development from concept to manufacturing-ready design.",
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="group bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all hover-scale cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-gold to-accent-orange rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-primary-dark text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="flex items-center text-accent-gold font-medium group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Strip */}
      <section id="showcase" className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work in Action</h2>
            <p className="text-xl text-gray-400">
              Explore our portfolio of successful projects
            </p>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 w-max">
              {[
                {
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/5a4a39a6f6-cacea9ed7933bf2443ad.png",
                  title: "Aerospace Component",
                  subtitle: "Precision Engineering",
                },
                {
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/85fcb7c5bb-930b3f868d65c526ab98.png",
                  title: "Automotive Parts",
                  subtitle: "Engine Components",
                },
                {
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/c5c42155b8-850c2f0f7fa7d7c9c124.png",
                  title: "Industrial Machinery",
                  subtitle: "Manufacturing Equipment",
                },
                {
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/fdb9eb9667-329ae3ae8dc4dfa13401.png",
                  title: "Medical Devices",
                  subtitle: "Precision Instruments",
                },
                {
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/f3941898c2-3b7c59eb5efa670e12ea.png",
                  title: "Consumer Electronics",
                  subtitle: "Product Development",
                },
                {
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/8a2e90f3c6-0cf2335435c773afba36.png",
                  title: "Architectural Design",
                  subtitle: "Structural Engineering",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="group relative w-80 h-60 rounded-2xl overflow-hidden hover-scale cursor-pointer"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.title}
                    width={320}
                    height={240}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold mb-1 text-white">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-300">{project.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark"
            >
              <FaImages className="mr-2" />
              See Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Security & Workflow Section */}
      <section id="security-workflow" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Secure & Streamlined Workflow
            </h2>
            <p className="text-xl text-gray-400">
              Enterprise-grade security with seamless collaboration
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Portal Screenshot */}
            <Card className="bg-white/5 border-white/10 p-8">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">CADCAMX Portal</div>
                </div>

                {/* Portal Interface Mock */}
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-white">
                        Project Dashboard
                      </span>
                      <span className="text-accent-gold text-sm">Live</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-accent-gold/20 rounded p-3 text-center">
                        <div className="text-lg font-bold text-white">12</div>
                        <div className="text-xs text-gray-400">Active</div>
                      </div>
                      <div className="bg-green-500/20 rounded p-3 text-center">
                        <div className="text-lg font-bold text-white">8</div>
                        <div className="text-xs text-gray-400">Completed</div>
                      </div>
                      <div className="bg-blue-500/20 rounded p-3 text-center">
                        <div className="text-lg font-bold text-white">3</div>
                        <div className="text-xs text-gray-400">Review</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-white">
                        Recent Files
                      </span>
                      <FaShieldAlt className="text-accent-gold" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-2 hover:bg-white/5 rounded">
                        <FaFileAlt className="text-accent-gold" />
                        <span className="text-sm text-white">
                          Engine_Block_v3.dwg
                        </span>
                        <span className="ml-auto text-xs text-gray-400">
                          2 min ago
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 hover:bg-white/5 rounded">
                        <FaCube className="text-accent-gold" />
                        <span className="text-sm text-white">
                          Assembly_Final.sldprt
                        </span>
                        <span className="ml-auto text-xs text-gray-400">
                          15 min ago
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 hover:bg-white/5 rounded">
                        <FaImages className="text-accent-gold" />
                        <span className="text-sm text-white">
                          Render_Output.jpg
                        </span>
                        <span className="ml-auto text-xs text-gray-400">
                          1 hour ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right: Security Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-accent-gold text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Encrypted File Access & Version Control
                  </h3>
                  <p className="text-gray-400">
                    Military-grade encryption ensures your intellectual property
                    remains secure throughout the entire project lifecycle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaChartBar className="text-accent-gold text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Full Review History & Performance Analytics
                  </h3>
                  <p className="text-gray-400">
                    Comprehensive tracking of all project milestones, revisions,
                    and performance metrics for complete transparency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUsersCog className="text-accent-gold text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Controlled Collaboration and Audit Logs
                  </h3>
                  <p className="text-gray-400">
                    Role-based access control with detailed audit trails ensuring
                    accountability and seamless team collaboration.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent-gold/10 to-accent-orange/10 border border-accent-gold/20 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <FaCertificate className="text-accent-gold text-xl" />
                  <span className="font-bold text-white">
                    ISO 27001 Certified
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Our security protocols meet international standards for
                  information security management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Confidence Section */}
      <section id="testimonials" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by Global Leaders
            </h2>
            <p className="text-xl text-gray-400">
              What our clients say about our services
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah Mitchell",
                role: "Engineering Director, AeroTech",
                content:
                  "CADCAMX delivered exceptional quality on our aerospace components. Their attention to detail and quick turnaround saved us months of development time.",
              },
              {
                name: "David Chen",
                role: "CTO, AutoMotive Solutions",
                content:
                  "The cost savings are incredible. We reduced our design costs by 60% while maintaining the highest quality standards. Highly recommended!",
              },
              {
                name: "Maria Rodriguez",
                role: "Head of Design, MedTech Innovations",
                content:
                  "Their expertise in medical device design is unmatched. The secure portal and real-time collaboration made our project seamless.",
              },
            ].map((testimonial) => (
              <Card
                key={testimonial.name}
                className="bg-white/5 border-white/10 p-8"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-accent-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-300">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Industry Logos */}
          <div className="text-center">
            <p className="text-gray-400 mb-8">Trusted across industries</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {[
                { icon: FaPlane, name: "Aerospace" },
                { icon: FaCar, name: "Automotive" },
                { icon: FaHeartbeat, name: "Medical" },
                { icon: FaIndustry, name: "Manufacturing" },
              ].map((industry) => (
                <div
                  key={industry.name}
                  className="flex items-center justify-center p-4"
                >
                  <industry.icon className="text-4xl text-white" />
                  <span className="ml-3 font-medium text-white">
                    {industry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-400">
              Choose the plan that fits your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="bg-white/5 border-white/10 p-8">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Starter
                  </h3>
                  <div className="text-4xl font-bold text-accent-gold mb-2">
                    $8<span className="text-lg text-gray-400">/hour</span>
                  </div>
                  <p className="text-gray-400">Perfect for small projects</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "2D Drafting & Detailing",
                    "Basic 3D Modeling",
                    "Email Support",
                    "48-hour Turnaround",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-white">
                      <FaCheck className="text-accent-gold mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-gradient-to-b from-accent-gold/20 to-accent-orange/20 border-2 border-accent-gold p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent-gold text-primary-dark px-4 py-1 font-bold">
                  Most Popular
                </Badge>
              </div>

              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Professional
                  </h3>
                  <div className="text-4xl font-bold text-accent-gold mb-2">
                    $12<span className="text-lg text-gray-400">/hour</span>
                  </div>
                  <p className="text-gray-400">Ideal for complex projects</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "All Starter features",
                    "Advanced 3D Modeling",
                    "CAM Programming",
                    "Priority Support",
                    "24-hour Turnaround",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-white">
                      <FaCheck className="text-accent-gold mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-accent-gold text-primary-dark hover:shadow-lg hover:shadow-accent-gold/25 font-bold">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white/5 border-white/10 p-8">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Enterprise
                  </h3>
                  <div className="text-4xl font-bold text-accent-gold mb-2">
                    Custom
                  </div>
                  <p className="text-gray-400">For large-scale operations</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "All Professional features",
                    "Dedicated Team",
                    "Custom Integrations",
                    "24/7 Phone Support",
                    "SLA Guarantee",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-white">
                      <FaCheck className="text-accent-gold mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-400">
              From concept to completion in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Project Brief",
                description:
                  "Share your requirements, specifications, and timeline through our secure portal.",
              },
              {
                number: "2",
                title: "Team Assignment",
                description:
                  "We assign the perfect team of specialists based on your project requirements.",
              },
              {
                number: "3",
                title: "Development",
                description:
                  "Real-time collaboration and regular updates as we bring your vision to life.",
              },
              {
                number: "4",
                title: "Delivery",
                description:
                  "Quality-checked deliverables with full documentation and ongoing support.",
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-gold to-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-dark">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        id="cta-banner"
        className="py-20 bg-gradient-to-r from-primary-dark via-blue-900 to-primary-dark"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Experience CAD & CAM the Smart Way
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get Your Custom Quote Within 24 Hours
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark px-8 py-6 text-lg font-bold hover:shadow-lg hover:shadow-accent-gold/25 hover-scale">
              <FaCalculator className="mr-2" />
              Request Quote
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white px-8 py-6 text-lg font-medium hover:bg-white hover:text-primary-dark"
            >
              <FaPhone className="mr-2" />
              Schedule Call
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <FaShieldAlt className="text-accent-gold text-xl" />
              <span className="font-medium text-white">Secure Data</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaUserSecret className="text-accent-gold text-xl" />
              <span className="font-medium text-white">
                Confidential Projects
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaShippingFast className="text-accent-gold text-xl" />
              <span className="font-medium text-white">Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-400">
              Ready to start your next project? Let&apos;s discuss your
              requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white/5 border-white/10 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Send us a message
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        First Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Company
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Company"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Service Needed
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2d-drafting">
                          2D Drafting & Detailing
                        </SelectItem>
                        <SelectItem value="3d-modeling">
                          3D Modeling & Rendering
                        </SelectItem>
                        <SelectItem value="cam-programming">
                          CAM Programming
                        </SelectItem>
                        <SelectItem value="reverse-engineering">
                          Reverse Engineering
                        </SelectItem>
                        <SelectItem value="simulation">
                          Simulation & Optimization
                        </SelectItem>
                        <SelectItem value="product-design">
                          Product Design & Development
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Project Details
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark py-6 font-bold hover:shadow-lg hover:shadow-accent-gold/25">
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-accent-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Email Us</h4>
                      <p className="text-gray-400">hello@cadcamx.com</p>
                      <p className="text-gray-400">support@cadcamx.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-accent-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Call Us</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-accent-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">
                        Business Hours
                      </h4>
                      <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-400">24/7 Support Available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-accent-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">
                        Global Presence
                      </h4>
                      <p className="text-gray-400">
                        North America, Europe, Asia
                      </p>
                      <p className="text-gray-400">Remote-first operations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-gradient-to-r from-accent-gold/10 to-accent-orange/10 border border-accent-gold/20 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <FaBolt className="text-accent-gold text-xl" />
                  <span className="font-bold text-white">
                    Quick Response Guarantee
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  We respond to all inquiries within 2 hours during business
                  hours, and provide project quotes within 24 hours.
                </p>

                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent-gold">
                      2 hrs
                    </div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent-gold">
                      24 hrs
                    </div>
                    <div className="text-xs text-gray-400">Quote Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent-gold">
                      100%
                    </div>
                    <div className="text-xs text-gray-400">Confidential</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
