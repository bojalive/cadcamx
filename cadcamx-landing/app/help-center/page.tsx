import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaComments,
  FaBook,
  FaFileAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Help Center | Customer Support | CADCAMX",
  description: "Get help with CADCAMX services. Find answers to common questions, contact support, and access resources for CAD/CAM project assistance.",
  openGraph: {
    title: "Help Center | CADCAMX Support",
    description: "Get help and support for CADCAMX CAD/CAM services.",
    type: "website",
    url: "https://cadcamx.com/help-center",
  },
};

const faqs = [
  {
    question: "How do I get started with CADCAMX?",
    answer: "Simply contact us through our contact form or email with your project requirements. We'll provide a free consultation and quote within 24 hours.",
  },
  {
    question: "What file formats do you support?",
    answer: "We support all major CAD formats including STEP, IGES, SolidWorks, CATIA, Inventor, AutoCAD DWG/DXF, Fusion 360, and more.",
  },
  {
    question: "How is project confidentiality handled?",
    answer: "We sign NDAs for all projects and use secure file transfer methods. Our data handling follows ISO 27001 security standards.",
  },
  {
    question: "What are your typical turnaround times?",
    answer: "Turnaround varies by project complexity. Simple drawings: 1-2 days, 3D models: 3-5 days, complex assemblies: 1-2 weeks. Rush services available.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, we include up to 2 rounds of revisions in our standard pricing. Additional revisions can be arranged as needed.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept wire transfers, PayPal, and major credit cards. For ongoing projects, we offer monthly billing arrangements.",
  },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Help Center" }]} />

          {/* Hero */}
          <div className="mb-16 text-center">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaQuestionCircle className="mr-2" />
              Support
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions or get in touch with our support team.
              We&apos;re here to help with any questions about our CAD/CAM services.
            </p>
          </div>

          {/* Contact Options */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10 text-center hover:border-accent-gold/30 transition-all">
                <CardContent className="p-6">
                  <FaEnvelope className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Send us an email and we&apos;ll respond within 24 hours
                  </p>
                  <a href="mailto:leancamsys@gmail.com" className="text-accent-gold hover:underline">
                    leancamsys@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center hover:border-accent-gold/30 transition-all">
                <CardContent className="p-6">
                  <FaPhone className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Call us during business hours (EST)
                  </p>
                  <a href="tel:+17155013103" className="text-accent-gold hover:underline">
                    +1 (715) 501-3103
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center hover:border-accent-gold/30 transition-all">
                <CardContent className="p-6">
                  <FaComments className="text-accent-gold text-3xl mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Contact Form</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Fill out our form for project inquiries
                  </p>
                  <Link href="/contact" className="text-accent-gold hover:underline">
                    Go to Contact Form
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Quick Links</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/documentation">
                <Card className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all cursor-pointer">
                  <CardContent className="p-4 flex items-center">
                    <FaBook className="text-accent-gold mr-3" />
                    <span>Documentation</span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services">
                <Card className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all cursor-pointer">
                  <CardContent className="p-4 flex items-center">
                    <FaFileAlt className="text-accent-gold mr-3" />
                    <span>Our Services</span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/glossary">
                <Card className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all cursor-pointer">
                  <CardContent className="p-4 flex items-center">
                    <FaBook className="text-accent-gold mr-3" />
                    <span>CAD/CAM Glossary</span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog">
                <Card className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all cursor-pointer">
                  <CardContent className="p-4 flex items-center">
                    <FaFileAlt className="text-accent-gold mr-3" />
                    <span>Blog & Articles</span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-accent-gold">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-gradient-to-r from-accent-gold/20 to-accent-orange/20 rounded-xl p-8 text-center">
            <FaClock className="text-accent-gold text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Expected Response Times</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-accent-gold">24 hrs</p>
                <p className="text-gray-300">Email Response</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-gold">Same Day</p>
                <p className="text-gray-300">Phone Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-gold">48 hrs</p>
                <p className="text-gray-300">Quote Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
