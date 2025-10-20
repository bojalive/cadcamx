"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  FaHeadset,
  FaClock,
  FaShieldAlt,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaChevronDown,
  FaChevronUp,
  FaCloudUploadAlt,
  FaDraftingCompass,
  FaCogs,
  FaCube,
  FaRulerCombined,
  FaSearch,
  FaUsersCog,
  FaMapMarkerAlt,
  FaGlobe,
  FaVideo,
  FaWhatsapp,
  FaCalendarAlt,
  FaLock,
  FaFileContract,
  FaServer,
  FaTrash,
  FaStar,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>("faq-1");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          budget: "",
          timeline: "",
          projectDetails: "",
        });
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSubmitError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Failed to submit form. Please try again or contact us directly at leancamsys@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      {/* Success Message Banner */}
      {submitSuccess && (
        <div className="bg-green-600 text-white py-4 px-8 fixed top-20 left-0 right-0 z-50 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Thank You! Your Request Has Been Submitted Successfully</h3>
                <p className="text-sm">
                  Our engineering team will review your requirements and get back to you within 24 hours at {formData.email || "your email"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Error Message Banner */}
      {submitError && (
        <div className="bg-red-600 text-white py-4 px-8 fixed top-20 left-0 right-0 z-50 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p>{submitError}</p>
            </div>
            <button
              onClick={() => setSubmitError("")}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ccf4b61dd3-f6c0fff3a4c42fe80a83.png"
            alt="Futuristic CAD engineering workspace"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary-dark bg-opacity-80"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center">
                <FaHeadset className="text-primary-dark text-2xl" />
              </div>
              <div className="h-12 w-1 bg-accent-gold"></div>
              <span className="text-accent-gold text-lg font-medium">24/7 Support Available</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Get In Touch With Our
              <span className="text-accent-gold block mt-2">Engineering Experts</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Ready to transform your ideas into reality? Connect with our world-class CAD/CAM engineering team.
              We provide premium design and manufacturing support services starting at just $8 per hour.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-3">
                <FaClock className="text-accent-gold text-xl" />
                <span className="text-gray-300">24-hour response time guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaShieldAlt className="text-accent-gold text-xl" />
                <span className="text-gray-300">NDA protected conversations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Overview */}
      <section className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-accent-gold text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-primary-dark text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Phone Support</h3>
                <p className="text-gray-300 mb-4">Speak directly with our engineering consultants</p>
                <p className="text-accent-gold font-semibold text-lg">+1 7155013103</p>
                <p className="text-sm text-gray-400 mt-2">Available 24/5 (Mon-Fri)</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-accent-gold text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-primary-dark text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
                <p className="text-gray-300 mb-4">Send detailed project requirements</p>
                <p className="text-accent-gold font-semibold text-lg">contact@cadcamx.com</p>
                <p className="text-sm text-gray-400 mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-accent-gold text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaComments className="text-primary-dark text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                <p className="text-gray-300 mb-4">Instant support for quick questions</p>
                <Button className="bg-accent-gold text-primary-dark hover:bg-accent-orange font-semibold">
                  Start Chat
                </Button>
                <p className="text-sm text-gray-400 mt-2">Available 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Start Your Project Today</h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below with your project details. Our engineering team will review your requirements
                  and get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">First Name *</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-accent-gold text-white placeholder-gray-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Last Name *</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-accent-gold text-white placeholder-gray-500"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Work Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900 border-accent-gold text-white placeholder-gray-500"
                    placeholder="john.smith@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Company Name *</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900 border-accent-gold text-white placeholder-gray-500"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-900 border-accent-gold text-white placeholder-gray-500"
                    placeholder="+1 7155013103"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Project Type *</label>
                  <Select value={formData.projectType} onValueChange={(value) => handleSelectChange("projectType", value)}>
                    <SelectTrigger className="bg-gray-900 border-accent-gold text-white">
                      <SelectValue placeholder="Select Project Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-accent-gold">
                      <SelectItem value="cad-design" className="text-white">
                        CAD Design Services
                      </SelectItem>
                      <SelectItem value="cam-programming" className="text-white">
                        CAM Programming
                      </SelectItem>
                      <SelectItem value="3d-modeling" className="text-white">
                        3D Modeling & Rendering
                      </SelectItem>
                      <SelectItem value="technical-drawings" className="text-white">
                        Technical Drawings
                      </SelectItem>
                      <SelectItem value="reverse-engineering" className="text-white">
                        Reverse Engineering
                      </SelectItem>
                      <SelectItem value="consulting" className="text-white">
                        Engineering Consulting
                      </SelectItem>
                      <SelectItem value="other" className="text-white">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Estimated Budget</label>
                  <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                    <SelectTrigger className="bg-gray-900 border-accent-gold text-white">
                      <SelectValue placeholder="Select Budget Range" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-accent-gold">
                      <SelectItem value="under-1k" className="text-white">
                        Under $1,000
                      </SelectItem>
                      <SelectItem value="1k-5k" className="text-white">
                        $1,000 - $5,000
                      </SelectItem>
                      <SelectItem value="5k-10k" className="text-white">
                        $5,000 - $10,000
                      </SelectItem>
                      <SelectItem value="10k-25k" className="text-white">
                        $10,000 - $25,000
                      </SelectItem>
                      <SelectItem value="25k-50k" className="text-white">
                        $25,000 - $50,000
                      </SelectItem>
                      <SelectItem value="over-50k" className="text-white">
                        Over $50,000
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Project Timeline</label>
                  <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                    <SelectTrigger className="bg-gray-900 border-accent-gold text-white">
                      <SelectValue placeholder="Select Timeline" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-accent-gold">
                      <SelectItem value="rush" className="text-white">
                        Rush (1-2 weeks)
                      </SelectItem>
                      <SelectItem value="standard" className="text-white">
                        Standard (2-4 weeks)
                      </SelectItem>
                      <SelectItem value="flexible" className="text-white">
                        Flexible (1-2 months)
                      </SelectItem>
                      <SelectItem value="ongoing" className="text-white">
                        Ongoing Project
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Project Details *</label>
                  <Textarea
                    rows={6}
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900 border-accent-gold text-white placeholder-gray-500 resize-none"
                    placeholder="Please describe your project requirements in detail. Include specifications, deliverables, and any special requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Upload Files (Optional)</label>
                  <div className="w-full px-4 py-8 bg-gray-900 border-2 border-dashed border-accent-gold rounded-lg text-center cursor-pointer hover:bg-gray-800 transition duration-300">
                    <FaCloudUploadAlt className="text-accent-gold text-3xl mb-3 mx-auto" />
                    <p className="text-gray-300 mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">
                      Supported formats: PDF, DWG, STEP, IGES, JPG, PNG, ZIP (Max 50MB)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded" />
                  <label className="text-sm text-gray-300 leading-relaxed">
                    I agree to the{" "}
                    <span className="text-accent-gold hover:underline cursor-pointer">
                      Non-Disclosure Agreement (NDA)
                    </span>{" "}
                    and understand that all shared files are protected under strict confidentiality and encrypted
                    storage protocols.
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded" />
                  <label className="text-sm text-gray-300 leading-relaxed">
                    I agree to the{" "}
                    <span className="text-accent-gold hover:underline cursor-pointer">Terms of Service</span> and{" "}
                    <span className="text-accent-gold hover:underline cursor-pointer">Privacy Policy</span>.
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-gold text-primary-dark py-4 px-8 rounded-lg font-bold text-lg hover:bg-accent-orange shadow-lg shadow-accent-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-dark inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Project Request
                      <span className="ml-2">→</span>
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Right Side - Visual Container */}
            <div className="space-y-8">
              {/* Workspace Video */}
              <Card className="bg-gray-900 border-accent-gold overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-2">Our Engineering Workspace</h3>
                  <p className="text-gray-300">Take a virtual tour of our state-of-the-art CAD/CAM facilities</p>
                </div>
                <div className="relative h-80">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c21b0bf1f0-2ee5806d1df105c48271.png"
                    alt="Modern CAD engineering workspace"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center hover:bg-accent-orange transition duration-300">
                      <FaPlay className="text-primary-dark text-2xl ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-3 py-2 rounded">
                    <span className="text-white text-sm flex items-center">
                      <FaClock className="mr-1" />
                      2:45 min
                    </span>
                  </div>
                </div>
              </Card>

              {/* Interactive Location Map */}
              <Card className="bg-gray-900 border-accent-gold overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-2">Global Engineering Centers</h3>
                  <p className="text-gray-300">Our distributed team provides 24/7 coverage across time zones</p>
                </div>
                <div className="relative h-96">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1ebd33bbbb-136776a6ec4e5e51f2cf.png"
                    alt="World map showing global engineering centers"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent"></div>

                  {/* Location Markers */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent-gold rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-accent-gold rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-accent-gold rounded-full animate-pulse"></div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-80 p-4 rounded">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-accent-gold font-bold text-lg">24/7</div>
                        <div className="text-xs text-gray-400">Support Coverage</div>
                      </div>
                      <div>
                        <div className="text-accent-gold font-bold text-lg">15+</div>
                        <div className="text-xs text-gray-400">Global Offices</div>
                      </div>
                      <div>
                        <div className="text-accent-gold font-bold text-lg">500+</div>
                        <div className="text-xs text-gray-400">Engineers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-gray-900 border-accent-gold">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <FaMapMarkerAlt className="text-accent-gold text-xl" />
                      <h4 className="font-semibold text-white">Headquarters</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      8th Green Street
                      <br />
                      Delaware
                      <br />
                      United States
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-accent-gold">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <FaGlobe className="text-accent-gold text-xl" />
                      <h4 className="font-semibold text-white">Time Zones</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      UTC-8 to UTC+8
                      <br />
                      24/5 Business Support
                      <br />
                      Emergency: 24/7
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about our CAD/CAM engineering services, project timelines, and
              collaboration process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                id: "faq-1",
                question: "What file formats do you accept for projects?",
                answer:
                  "We accept all major CAD file formats including DWG, STEP, IGES, Solidworks (.sldprt, .sldasm), Inventor (.ipt, .iam), Fusion 360, AutoCAD, and many others. We can also work from sketches, PDFs, or even hand-drawn concepts.",
              },
              {
                id: "faq-2",
                question: "How quickly can you start working on my project?",
                answer:
                  "Most projects can begin within 24-48 hours of receiving complete requirements and signed NDA. Rush projects can often start the same day with our express service.",
              },
              {
                id: "faq-3",
                question: "What is your pricing structure?",
                answer:
                  "Our competitive rates start at $8/hour for offshore engineering services. We offer flexible pricing including hourly, fixed-project, and retainer models to suit your specific needs and budget.",
              },
              {
                id: "faq-4",
                question: "How do you ensure project confidentiality?",
                answer:
                  "All projects are protected under strict NDAs with encrypted file storage and transfer. Our team follows ISO 27001 security protocols and all data is stored in secure, geographically distributed servers.",
              },
              {
                id: "faq-5",
                question: "Do you provide revisions and support after delivery?",
                answer:
                  "Yes, we include up to 3 rounds of revisions in all project quotes. Extended support and maintenance packages are available for ongoing projects and long-term partnerships.",
              },
            ].map((faq) => (
              <Card key={faq.id} className="bg-gray-900 border-gray-700 overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition duration-300"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className="font-semibold text-lg text-white">{faq.question}</span>
                  {openFAQ === faq.id ? (
                    <FaChevronUp className="text-accent-gold" />
                  ) : (
                    <FaChevronDown className="text-accent-gold" />
                  )}
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

      {/* Service Capabilities */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Engineering Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive CAD/CAM services backed by cutting-edge technology and decades of engineering expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaDraftingCompass,
                title: "3D CAD Design",
                description:
                  "Complete product design from concept to manufacturing-ready models using industry-leading software.",
                features: ["Solidworks & Inventor", "Fusion 360 & AutoCAD", "Parametric Modeling", "Assembly Design"],
              },
              {
                icon: FaCogs,
                title: "CAM Programming",
                description:
                  "CNC machining programs and toolpath optimization for efficient manufacturing processes.",
                features: [
                  "Multi-axis Machining",
                  "Toolpath Optimization",
                  "Post-processor Setup",
                  "Simulation & Verification",
                ],
              },
              {
                icon: FaCube,
                title: "3D Rendering",
                description: "Photorealistic visualizations and animations for marketing and presentation purposes.",
                features: [
                  "Product Visualization",
                  "Marketing Renderings",
                  "Animation & Walkthroughs",
                  "VR/AR Ready Models",
                ],
              },
              {
                icon: FaRulerCombined,
                title: "Technical Drawings",
                description:
                  "Detailed 2D drawings with complete dimensioning and tolerancing for manufacturing.",
                features: [
                  "GD&T Implementation",
                  "Manufacturing Drawings",
                  "Assembly Instructions",
                  "Standards Compliance",
                ],
              },
              {
                icon: FaSearch,
                title: "Reverse Engineering",
                description:
                  "Convert physical parts to CAD models using advanced scanning and measurement techniques.",
                features: [
                  "3D Scanning Services",
                  "Legacy Part Recreation",
                  "Improvement Design",
                  "Quality Analysis",
                ],
              },
              {
                icon: FaUsersCog,
                title: "Engineering Consulting",
                description:
                  "Expert consultation on design optimization, manufacturability, and cost reduction strategies.",
                features: [
                  "Design for Manufacturing",
                  "Cost Optimization",
                  "Material Selection",
                  "Process Improvement",
                ],
              },
            ].map((service, idx) => (
              <Card key={idx} className="bg-primary-dark border-accent-gold hover:shadow-lg hover:shadow-accent-gold/30 transition duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent-gold rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-primary-dark text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Project Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined 6-step process that ensures quality delivery and client satisfaction from start to finish
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description:
                    "We review your requirements, discuss project scope, and provide a detailed quote within 24 hours.",
                },
                {
                  step: "2",
                  title: "NDA & Contract",
                  description:
                    "Secure your project with our comprehensive NDA and finalize project terms and timeline.",
                },
                {
                  step: "3",
                  title: "Team Assignment",
                  description:
                    "Your dedicated engineering team is assigned based on project requirements and expertise needed.",
                },
                {
                  step: "4",
                  title: "Design Development",
                  description:
                    "Regular progress updates and milestone reviews ensure the project stays on track and meets your vision.",
                },
                {
                  step: "5",
                  title: "Quality Review",
                  description:
                    "Comprehensive quality checks and client review process with revision cycles as needed.",
                },
                {
                  step: "6",
                  title: "Final Delivery",
                  description:
                    "Complete project files delivered securely with documentation and ongoing support options.",
                },
              ].map((process, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary-dark font-bold text-2xl">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by hundreds of companies worldwide for exceptional engineering services and reliable project
              delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Chen",
                title: "CTO, TechManufacturing Corp",
                avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
                quote:
                  "CADCAMX delivered exceptional CAD designs that exceeded our expectations. Their attention to detail and quick turnaround times have made them our go-to engineering partner.",
              },
              {
                name: "Sarah Williams",
                title: "Product Manager, Innovation Labs",
                avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
                quote:
                  "The quality of work and professionalism is outstanding. They handle complex projects with ease and maintain excellent communication throughout the entire process.",
              },
              {
                name: "David Rodriguez",
                title: "Engineering Director, AutoParts Inc",
                avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
                quote:
                  "Cost-effective solutions without compromising quality. Their $8/hour rate combined with premium service quality makes them unbeatable in the market.",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-primary-dark border-accent-gold">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full mr-4 overflow-hidden">
                      <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="flex text-accent-gold mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Support Details */}
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">24/7 Engineering Support</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-primary-dark text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Response Time Guarantee</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We guarantee a response within 24 hours for all project inquiries. Emergency support is
                        available 24/7 for critical projects with our premium support package.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaHeadset className="text-primary-dark text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Office Hours Coverage</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our global engineering team provides 24/5 business support across all major time zones. Weekend
                        emergency support available for urgent project requirements.
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-accent-gold font-semibold">Americas</div>
                          <div className="text-gray-400">6 AM - 10 PM EST</div>
                        </div>
                        <div>
                          <div className="text-accent-gold font-semibold">Asia-Pacific</div>
                          <div className="text-gray-400">8 AM - 8 PM JST</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-primary-dark text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Data Security & NDA Protection</h3>
                      <p className="text-gray-300 leading-relaxed">
                        All client communications and project files are protected under strict NDA agreements. We use
                        enterprise-grade encryption and secure file transfer protocols for all project data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <Card className="bg-gray-900 border-accent-gold">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-8">Quick Contact Options</h3>

                  <div className="space-y-6">
                    {[
                      { icon: FaPhone, title: "Phone Support", description: "Direct line to engineering team" },
                      { icon: FaEnvelope, title: "Email Support", description: "Detailed project discussions" },
                      { icon: FaVideo, title: "Video Consultation", description: "Screen sharing and live demos" },
                      { icon: FaWhatsapp, title: "WhatsApp Business", description: "Quick questions and updates" },
                    ].map((option, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-primary-dark rounded-lg border border-gray-700"
                      >
                        <div className="flex items-center space-x-4">
                          <option.icon className="text-accent-gold text-xl" />
                          <div>
                            <div className="font-semibold text-white">{option.title}</div>
                            <div className="text-sm text-gray-400">{option.description}</div>
                          </div>
                        </div>
                        <Button className="bg-accent-gold text-primary-dark px-4 py-2 hover:bg-accent-orange font-semibold">
                          {idx === 0 ? "Call Now" : idx === 1 ? "Send Email" : idx === 2 ? "Schedule" : "Message"}
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-primary-dark rounded-lg border border-gray-700">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <FaCalendarAlt className="text-accent-gold mr-2" />
                      Schedule a Free Consultation
                    </h4>
                    <p className="text-sm text-gray-300 mb-4">
                      Book a 30-minute consultation to discuss your project requirements with our senior engineers.
                    </p>
                    <Button className="w-full bg-accent-gold text-primary-dark py-3 hover:bg-accent-orange font-semibold">
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Notice */}
      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center">
                <FaLock className="text-primary-dark text-2xl" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Your Data Security is Our Priority</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              All shared files and project information are protected under strict Non-Disclosure Agreements (NDA) and
              stored using enterprise-grade encrypted storage systems. Our security protocols comply with international
              standards including ISO 27001 and SOC 2 Type II.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaFileContract className="text-primary-dark" />
                </div>
                <h3 className="font-semibold text-white mb-2">NDA Protection</h3>
                <p className="text-sm text-gray-300">Legally binding confidentiality agreements for all projects</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaServer className="text-primary-dark" />
                </div>
                <h3 className="font-semibold text-white mb-2">Encrypted Storage</h3>
                <p className="text-sm text-gray-300">AES-256 encryption for all files and communications</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTrash className="text-primary-dark" />
                </div>
                <h3 className="font-semibold text-white mb-2">Secure Deletion</h3>
                <p className="text-sm text-gray-300">Complete data removal after project completion (upon request)</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 italic">
              "All shared files are protected under strict NDA and encrypted storage protocols. Your intellectual
              property remains completely confidential throughout our collaboration."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
