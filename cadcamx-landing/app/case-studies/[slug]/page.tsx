"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaCheckCircle,
  FaStar,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { caseStudiesData, CaseStudy } from "@/lib/case-studies-data";

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-primary-dark text-white">
        <Header />
        <div className="container mx-auto px-8 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-gray-400 mb-8">
            The case study you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark">
            <a href="/case-studies">Back to Case Studies</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related case studies from the same industry
  const relatedCaseStudies = caseStudiesData
    .filter((cs) => cs.industry === caseStudy.industry && cs.slug !== slug)
    .slice(0, 3);

  // If not enough related case studies from the same industry, add more from other industries
  if (relatedCaseStudies.length < 3) {
    const additionalCaseStudies = caseStudiesData
      .filter((cs) => cs.slug !== slug && !relatedCaseStudies.includes(cs))
      .slice(0, 3 - relatedCaseStudies.length);
    relatedCaseStudies.push(...additionalCaseStudies);
  }

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 relative">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-white/5 backdrop-blur-sm border-accent-gold/20 overflow-hidden">
            <div className="relative h-96">
              <Image
                src={caseStudy.featuredImage}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <Badge className="bg-accent-gold text-primary-dark font-bold mb-4">{caseStudy.industry}</Badge>
                <h1 className="text-4xl font-bold text-white mb-4">{caseStudy.title}</h1>
                <p className="text-xl text-gray-300">{caseStudy.subtitle}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-8">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-white/5 backdrop-blur-sm border-accent-gold/20">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* Project Objective */}
                <div>
                  <h2 className="text-2xl font-bold text-accent-gold mb-6">Project Objective</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{caseStudy.objective.description}</p>
                  <ul className="space-y-3 text-gray-300">
                    {caseStudy.objective.goals.map((goal: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-accent-gold mr-3 mt-1 flex-shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Approach */}
                <div>
                  <h2 className="text-2xl font-bold text-accent-gold mb-6">Our Approach</h2>
                  <div className="space-y-6">
                    {caseStudy.approach.phases.map((phase: any, index: number) => (
                      <Card key={index} className="bg-white/5 border-accent-gold/20">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                          <p className="text-gray-300 text-sm">{phase.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools & Technologies */}
              <Card className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 border-accent-gold/30 mb-12">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-accent-gold mb-6 text-center">Tools & Technologies Used</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {caseStudy.tools.map((tool: any, index: number) => (
                      <div key={index} className="text-center">
                        <div className="bg-white/10 rounded-lg p-4 mb-3">
                          <tool.icon className="text-accent-gold text-2xl mx-auto" />
                        </div>
                        <div className="text-white font-medium">{tool.name}</div>
                        <div className="text-gray-400 text-sm">{tool.category}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-accent-gold mb-6">Quantified Results</h2>
                  <div className="grid grid-cols-2 gap-6">
                    {caseStudy.results.map((result: any, index: number) => (
                      <Card key={index} className="bg-white/5 border-accent-gold/20 text-center">
                        <CardContent className="p-6">
                          <div className="text-4xl font-bold text-accent-gold mb-2">{result.value}</div>
                          <div className="text-white font-medium mb-2">{result.label}</div>
                          <div className="text-gray-400 text-sm">{result.description}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                <div>
                  <h2 className="text-2xl font-bold text-accent-gold mb-6">Client Testimonial</h2>
                  <Card className="bg-white/5 border-accent-gold/20">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden">
                          <Image
                            src={caseStudy.client.avatar}
                            alt={caseStudy.client.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-white font-medium">{caseStudy.client.name}</div>
                          <div className="text-gray-400 text-sm">{caseStudy.client.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 italic mb-4">{caseStudy.client.quote}</p>
                      <div className="flex text-accent-gold">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Project Duration Badge */}
              <div className="mb-8">
                <Card className="bg-accent-gold/10 border-accent-gold/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">Project Duration</h3>
                        <p className="text-gray-300">{caseStudy.duration}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">Industry</h3>
                        <p className="text-gray-300">{caseStudy.industry}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="text-center">
                <Button className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-bold px-8 py-4 mr-4 hover:shadow-lg">
                  Download Full Case Study PDF
                </Button>
                <Button variant="outline" className="border-white/20 text-white px-8 py-4 hover:bg-white/20">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 px-8 bg-gradient-to-b from-primary-dark to-[#000066]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCaseStudies.map((study) => (
              <Card
                key={study.slug}
                className="bg-white/5 backdrop-blur-sm border-accent-gold/20 overflow-hidden hover:border-accent-gold/40 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white text-xs">{study.industry}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{study.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-accent-gold/20 text-accent-gold border-accent-gold/30 hover:bg-accent-gold hover:text-primary-dark"
                  >
                    <a href={`/case-studies/${study.slug}`}>Read Case Study</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto text-center max-w-7xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Contact our team today to discuss how we can help transform your manufacturing processes with our $8/hour premium engineering services.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Button className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark font-bold px-8 py-6 text-lg hover:shadow-lg">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-accent-gold text-accent-gold px-8 py-6 text-lg hover:bg-accent-gold/10">
              Schedule Free Consultation
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
