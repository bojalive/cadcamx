"use client";

import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaShieldAlt,
  FaUsers,
  FaPlay,
  FaBullseye,
  FaAward,
  FaCompass,
  FaCrosshairs,
  FaRocket,
  FaHandshake,
  FaCheck,
  FaArrowRight,
  FaGraduationCap,
  FaCertificate,
  FaGlobe,
  FaClock,
  FaServer,
  FaLock,
  FaDesktop,
  FaVideo,
  FaFingerprint,
  FaLeaf,
  FaSolarPanel,
  FaRecycle,
  FaTrophy,
  FaStar,
  FaMedal,
  FaHistory,
  FaBrain,
  FaCalendarAlt,
  FaPhone,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-blue-900/50 to-primary-dark"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold mb-8 px-6 py-3">
              <FaShieldAlt />
              <span className="font-medium">Trusted by 500+ Global Companies</span>
            </Badge>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              About <span className="gradient-text">CADCAMX</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Pioneering the future of offshore CAD/CAM engineering services with
              world-class precision, unmatched expertise, and revolutionary
              affordability starting at just $8 per hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="px-8 py-6 bg-accent-gold text-primary-dark font-bold hover:shadow-lg hover:shadow-accent-gold/50 transition-all hover-scale">
                <FaUsers className="mr-2" />
                Meet Our Team
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark"
              >
                <FaPlay className="mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-dark to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold px-4 py-2">
                <FaBullseye className="text-sm" />
                <span className="font-medium text-sm">Our Mission</span>
              </Badge>
              <h2 className="text-5xl font-bold leading-tight">
                Making World-Class{" "}
                <span className="gradient-text">Design Support</span> Accessible
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                To make world-class design support accessible, secure, and
                affordable for businesses of all sizes, democratizing advanced
                CAD/CAM capabilities across the global engineering landscape.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">
                    500+
                  </div>
                  <div className="text-white/70 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">
                    50+
                  </div>
                  <div className="text-white/70 text-sm">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">
                    98%
                  </div>
                  <div className="text-white/70 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-accent-gold/20 to-secondary-gold/10 rounded-2xl p-8 border border-accent-gold/30 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <Image
                  className="w-full h-80 rounded-xl object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6d91ee5874-6dfa63c1accb72859500.png"
                  alt="Futuristic CAD workstation"
                  width={600}
                  height={400}
                />
                <div className="absolute -bottom-6 -right-6 bg-accent-gold text-primary-dark p-4 rounded-xl font-bold">
                  <FaAward className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-900/20 to-primary-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold px-4 py-2 mb-6">
              <FaCompass className="text-sm" />
              <span className="font-medium text-sm">Our Approach</span>
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Built on Three <span className="gradient-text">Core Pillars</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our methodology is founded on three fundamental principles that drive
              excellence in every project we undertake.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FaCrosshairs,
                title: "Precision",
                description:
                  "Every design element is crafted with meticulous attention to detail, ensuring accuracy down to the smallest specification through advanced quality control systems.",
                features: [
                  "99.9% Accuracy Rate",
                  "Multi-stage Validation",
                  "ISO Standards Compliance",
                ],
              },
              {
                icon: FaRocket,
                title: "Performance",
                description:
                  "Lightning-fast delivery without compromising quality, powered by cutting-edge technology and streamlined workflows that maximize efficiency.",
                features: [
                  "24-Hour Turnaround",
                  "Real-time Progress Tracking",
                  "Automated Workflows",
                ],
              },
              {
                icon: FaHandshake,
                title: "Partnership",
                description:
                  "We don't just provide services; we build lasting relationships through transparent communication, collaborative planning, and dedicated support.",
                features: [
                  "Dedicated Account Manager",
                  "24/7 Communication",
                  "Long-term Relationships",
                ],
              },
            ].map((pillar) => (
              <Card
                key={pillar.title}
                className="bg-gradient-to-br from-accent-gold/10 to-transparent border-accent-gold/30 p-8 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all group"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gold/30 transition-all">
                    <pillar.icon className="text-accent-gold text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    {pillar.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2 text-white/70">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <FaCheck className="text-accent-gold mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-bold hover:shadow-lg hover:shadow-accent-gold/50">
              <FaArrowRight className="mr-2" />
              See Our Approach in Action
            </Button>
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold px-4 py-2 mb-6">
              <FaUsers className="text-sm" />
              <span className="font-medium text-sm">Our Team</span>
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Expert Engineers</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our team consists of highly skilled professionals with decades of
              combined experience in CAD/CAM engineering, manufacturing, and design
              optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "Dr. Michael Chen",
                role: "Lead CAD Engineer",
                experience: "15+ Years Experience",
                skills: ["AutoCAD Expert", "SolidWorks"],
                bio: "PhD in Mechanical Engineering, specialized in precision manufacturing and 3D modeling.",
                image:
                  "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
              },
              {
                name: "Sarah Rodriguez",
                role: "CAM Specialist",
                experience: "12+ Years Experience",
                skills: ["Mastercam", "CNC Programming"],
                bio: "Master's in Manufacturing Engineering with expertise in CNC machining and toolpath optimization.",
                image:
                  "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
              },
              {
                name: "James Kumar",
                role: "3D Design Lead",
                experience: "10+ Years Experience",
                skills: ["Fusion 360", "Inventor"],
                bio: "Certified professional in parametric design and product development lifecycle management.",
                image:
                  "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
              },
              {
                name: "Lisa Thompson",
                role: "Quality Assurance Director",
                experience: "14+ Years Experience",
                skills: ["ISO 9001", "Six Sigma"],
                bio: "Black Belt in Six Sigma with extensive experience in quality management systems.",
                image:
                  "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
              },
            ].map((member) => (
              <Card
                key={member.name}
                className="bg-gradient-to-br from-accent-gold/10 to-transparent border-accent-gold/30 p-6 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all text-center"
              >
                <CardContent className="p-0">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-accent-gold">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-accent-gold font-medium mb-2">{member.role}</p>
                  <p className="text-white/70 text-sm mb-4">{member.experience}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="px-2 py-1 bg-accent-gold/20 text-accent-gold text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-white/60 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-accent-gold/10 via-accent-gold/5 to-accent-gold/10 border border-accent-gold/30 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Collective Expertise
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Our team brings together over 150 years of combined experience
                  across various engineering disciplines, ensuring comprehensive
                  coverage of all your CAD/CAM needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FaGraduationCap, text: "Advanced Degrees" },
                    { icon: FaCertificate, text: "Industry Certifications" },
                    { icon: FaGlobe, text: "Global Experience" },
                    { icon: FaClock, text: "24/7 Availability" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center space-x-3">
                      <item.icon className="text-accent-gold" />
                      <span className="text-white/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  className="w-full h-64 rounded-xl object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e1cacde5f6-abc837fac44e233a2f16.png"
                  alt="Team collaboration"
                  width={600}
                  height={256}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Security Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-900/20 to-primary-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold px-4 py-2 mb-6">
              <FaShieldAlt className="text-sm" />
              <span className="font-medium text-sm">
                Infrastructure & Security
              </span>
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Enterprise-Grade{" "}
              <span className="gradient-text">Security Infrastructure</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your data and intellectual property are protected by military-grade
              security protocols and state-of-the-art infrastructure designed for
              maximum reliability and confidentiality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              {[
                {
                  icon: FaServer,
                  title: "Dedicated Servers",
                  description:
                    "High-performance dedicated servers with 99.9% uptime guarantee and redundant backup systems.",
                },
                {
                  icon: FaLock,
                  title: "Encrypted VPNs",
                  description:
                    "Military-grade AES-256 encryption for all data transmission and secure VPN tunnels.",
                },
                {
                  icon: FaAward,
                  title: "ISO-Grade Controls",
                  description:
                    "ISO 27001 certified security management system with comprehensive audit trails.",
                },
              ].map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-gradient-to-br from-accent-gold/10 to-transparent border-accent-gold/30 p-6"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="text-accent-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {feature.title}
                        </h3>
                        <p className="text-white/80">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent-gold/20 to-secondary-gold/10 rounded-2xl p-8 border border-accent-gold/30 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <Image
                  className="w-full h-80 rounded-xl object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7457c92ae5-e0e0fa8be07ac1a04741.png"
                  alt="Secure data center"
                  width={600}
                  height={400}
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <FaCheck className="inline mr-1" />
                  99.9% Uptime
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent-gold/10 via-accent-gold/5 to-accent-gold/10 border border-accent-gold/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">
              Secure Workstation Pods
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaDesktop,
                  title: "Isolated Workstations",
                  description:
                    "Each engineer works on dedicated, air-gapped systems with no external internet access during project work.",
                },
                {
                  icon: FaVideo,
                  title: "24/7 Monitoring",
                  description:
                    "Continuous surveillance and monitoring systems ensure complete security and accountability.",
                },
                {
                  icon: FaFingerprint,
                  title: "Biometric Access",
                  description:
                    "Multi-factor authentication including biometric verification for all system access.",
                },
              ].map((pod) => (
                <div key={pod.title} className="text-center">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <pod.icon className="text-accent-gold text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    {pod.title}
                  </h4>
                  <p className="text-white/70">{pod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Ethics Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold px-4 py-2 mb-6">
                <FaLeaf className="text-sm" />
                <span className="font-medium text-sm">
                  Sustainability & Ethics
                </span>
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Responsible Design</span> & Data
                Governance
              </h2>
            </div>

            <Card className="bg-gradient-to-br from-accent-gold/10 to-transparent border-accent-gold/30 p-8 mb-12">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-white/90 leading-relaxed mb-6">
                      At CADCAMX, we believe that exceptional engineering services
                      must be delivered with unwavering commitment to environmental
                      responsibility and ethical business practices. Our sustainable
                      approach encompasses every aspect of our operations, from
                      energy-efficient data centers powered by renewable sources to
                      paperless workflows that minimize our carbon footprint.
                    </p>
                    <p className="text-lg text-white/90 leading-relaxed">
                      We maintain the highest standards of data governance, ensuring
                      complete transparency in our processes while protecting client
                      confidentiality through robust privacy frameworks that exceed
                      international compliance requirements.
                    </p>
                  </div>
                  <div className="relative">
                    <Image
                      className="w-full h-64 rounded-xl object-cover"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d7d7aab4ea-6ef7e7a40cb94d64d7fb.png"
                      alt="Sustainable office"
                      width={600}
                      height={256}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: FaSolarPanel,
                  title: "Carbon Neutral",
                  description: "100% renewable energy powered infrastructure",
                  color: "green",
                },
                {
                  icon: FaShieldAlt,
                  title: "GDPR Compliant",
                  description: "Strict data protection and privacy standards",
                  color: "blue",
                },
                {
                  icon: FaRecycle,
                  title: "Zero Waste",
                  description: "Completely paperless and digital workflows",
                  color: "purple",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className={`bg-gradient-to-br from-${item.color}-500/10 to-transparent border-${item.color}-500/30 p-6 text-center`}
                >
                  <CardContent className="p-0">
                    <div
                      className={`w-12 h-12 bg-${item.color}-500/20 rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <item.icon
                        className={`text-${item.color}-400`}
                      />
                    </div>
                    <h3
                      className={`text-lg font-semibold mb-2 text-${item.color}-400`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-900/20 to-primary-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold px-4 py-2 mb-6">
              <FaTrophy className="text-sm" />
              <span className="font-medium text-sm">Awards & Recognition</span>
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Industry <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading industry
              organizations and prestigious award bodies worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              {
                icon: FaAward,
                title: "Excellence Award 2023",
                org: "Global Engineering Services",
              },
              {
                icon: FaStar,
                title: "Top Rated Provider",
                org: "CAD/CAM Industry Awards",
              },
              {
                icon: FaMedal,
                title: "Innovation Leader",
                org: "Manufacturing Technology",
              },
              {
                icon: FaCertificate,
                title: "Quality Certification",
                org: "ISO 9001:2015 Certified",
              },
            ].map((award) => (
              <Card
                key={award.title}
                className="bg-gradient-to-br from-accent-gold/10 to-transparent border-accent-gold/30 p-6 text-center hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <award.icon className="text-accent-gold text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {award.title}
                  </h3>
                  <p className="text-white/70 text-sm">{award.org}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold px-4 py-2 mb-6">
              <FaHistory className="text-sm" />
              <span className="font-medium text-sm">Our Journey</span>
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Evolution</span> of Excellence
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From humble beginnings to global leadership, our journey reflects
              continuous innovation and unwavering commitment to client success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-gold via-accent-gold/50 to-accent-gold"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2018 - Foundation",
                  description:
                    "Started with a vision to democratize CAD/CAM services with a team of 5 engineers.",
                  icon: FaRocket,
                  align: "left",
                },
                {
                  year: "2020 - Expansion",
                  description:
                    "Grew to 25+ engineers and established partnerships with Fortune 500 companies.",
                  icon: FaUsers,
                  align: "right",
                },
                {
                  year: "2022 - Innovation",
                  description:
                    "Launched AI-powered design optimization and automated quality assurance systems.",
                  icon: FaBrain,
                  align: "left",
                },
                {
                  year: "2024 - Global Leadership",
                  description:
                    "Serving 500+ clients across 50+ countries with 50+ expert engineers.",
                  icon: FaGlobe,
                  align: "right",
                },
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex items-center">
                  {milestone.align === "left" ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <Card className="bg-gradient-to-br from-accent-gold/10 to-transparent border-accent-gold/30 p-6">
                          <CardContent className="p-0">
                            <h3 className="text-xl font-bold mb-2 text-white">
                              {milestone.year}
                            </h3>
                            <p className="text-white/80">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="w-8 h-8 bg-accent-gold rounded-full border-4 border-primary-dark flex items-center justify-center z-10">
                        <milestone.icon className="text-primary-dark text-sm" />
                      </div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="w-8 h-8 bg-accent-gold rounded-full border-4 border-primary-dark flex items-center justify-center z-10">
                        <milestone.icon className="text-primary-dark text-sm" />
                      </div>
                      <div className="w-1/2 pl-8">
                        <Card className="bg-gradient-to-br from-accent-gold/10 to-transparent border-accent-gold/30 p-6">
                          <CardContent className="p-0">
                            <h3 className="text-xl font-bold mb-2 text-white">
                              {milestone.year}
                            </h3>
                            <p className="text-white/80">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-accent-gold/20 to-secondary-gold/10">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Ready to Meet <span className="gradient-text">Our Team</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Discover how our expert engineers can transform your design
              challenges into innovative solutions. Schedule a consultation with
              our team leads and experience the CADCAMX difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button className="px-8 py-4 bg-accent-gold text-primary-dark font-bold hover:shadow-lg hover:shadow-accent-gold/50">
                <FaCalendarAlt className="mr-2" />
                Schedule Team Meeting
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark"
              >
                <FaPhone className="mr-2" />
                Call Us Now
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { value: "24/7", label: "Expert Support" },
                { value: "$8/hr", label: "Starting Rate" },
                { value: "48hr", label: "Quick Turnaround" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="text-2xl font-bold text-accent-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
