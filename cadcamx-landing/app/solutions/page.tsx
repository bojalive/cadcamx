import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  allSEOPages,
  serviceIndustryPages,
  industryPages,
  softwarePages,
  moreIndustryPages,
  useCasePages,
  comparisonPages,
  statePages,
  cityPages,
  detailedServicePages,
  problemPages,
  alternativePages
} from "@/lib/seo-pages-data";
import {
  FaArrowRight,
  FaCube,
  FaIndustry,
  FaCar,
  FaPlane,
  FaHeartbeat,
  FaCogs,
  FaRocket,
  FaMicrochip,
  FaOilCan,
  FaLaptopCode,
  FaChartLine,
  FaBalanceScale,
  FaLightbulb,
  FaMapMarkerAlt,
  FaBuilding,
  FaTools,
  FaExclamationTriangle,
  FaExchangeAlt,
  FaFlag,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "CAD/CAM Solutions by Industry, Service & Location | CADCAMX",
  description:
    "Explore CADCAMX solutions tailored to your industry, service needs, and location. Automotive, aerospace, medical device CAD services across USA. Starting from $8/hr.",
  openGraph: {
    title: "CAD/CAM Solutions by Industry, Service & Location | CADCAMX",
    description:
      "Explore CADCAMX solutions tailored to your industry, service needs, and location.",
    type: "website",
    url: "https://cadcamx.com/solutions",
  },
};

const industryIcons: Record<string, React.ElementType> = {
  Automotive: FaCar,
  Aerospace: FaPlane,
  "Medical Devices": FaHeartbeat,
  Manufacturing: FaIndustry,
  Electronics: FaMicrochip,
  "Oil & Gas": FaOilCan,
  "Industrial Equipment": FaCogs,
};

export default function SolutionsPage() {
  // Get unique states for display (first 12)
  const displayedStates = statePages.slice(0, 12);
  // Get unique cities for display (first 18)
  const displayedCities = cityPages.slice(0, 18);

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-blue-900/50 to-primary-dark"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-6">
            <FaCube className="mr-2" />
            {allSEOPages.length}+ CAD/CAM Solutions
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Find the Right{" "}
            <span className="gradient-text">CAD/CAM Solution</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our specialized services tailored to your industry,
            engineering needs, and location. From offshore CAD drafting to
            industry-specific design services across the USA.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark px-8 py-6 text-lg font-bold hover:shadow-lg hover:shadow-accent-gold/25">
                <FaRocket className="mr-2" />
                Get Custom Quote
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                variant="outline"
                className="border-accent-gold/30 text-accent-gold hover:bg-accent-gold/10 px-8 py-6 text-lg"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service-Based Solutions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-400 mb-4">
              <FaCogs className="mr-2" />
              Core Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              CAD Outsourcing Services
            </h2>
            <p className="text-xl text-gray-300">
              Our core CAD/CAM services for engineering teams worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceIndustryPages.map((page) => (
              <Link key={page.slug} href={`/solutions/${page.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold text-xs">
                        {page.pricingStart}
                      </Badge>
                      {page.industry && (
                        <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-400 text-xs">
                          {page.industry}
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold mb-2 capitalize">
                      {page.primaryKeyword}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {page.metaDescription}
                    </p>

                    <div className="flex items-center text-accent-gold text-sm font-medium">
                      Learn More <FaArrowRight className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Pages */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-indigo-500/10 border-indigo-500/20 text-indigo-400 mb-4">
              <FaTools className="mr-2" />
              Specialized Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Specialized Engineering Services
            </h2>
            <p className="text-xl text-gray-300">
              Deep expertise in mechanical drafting, sheet metal, CNC, FEA, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServicePages.map((page) => (
              <Link key={page.slug} href={`/solutions/${page.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold text-xs">
                        {page.pricingStart}
                      </Badge>
                      <Badge className="bg-indigo-500/10 border-indigo-500/20 text-indigo-400 text-xs">
                        {page.industry}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 capitalize">
                      {page.primaryKeyword}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {page.metaDescription}
                    </p>

                    <div className="flex items-center text-indigo-400 text-sm font-medium">
                      Learn More <FaArrowRight className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-green-500/10 border-green-500/20 text-green-400 mb-4">
              <FaIndustry className="mr-2" />
              By Industry
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Tailored expertise for automotive, aerospace, medical devices, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...industryPages, ...moreIndustryPages].map((page) => {
              const IndustryIcon =
                industryIcons[page.industry || ""] || FaIndustry;
              return (
                <Link key={page.slug} href={`/solutions/${page.slug}`}>
                  <Card className="bg-white/5 border-white/10 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                        <IndustryIcon className="text-green-400 text-xl" />
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold text-xs">
                          {page.pricingStart}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold mb-2 capitalize">
                        {page.primaryKeyword}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {page.metaDescription}
                      </p>

                      <div className="flex items-center text-green-400 text-sm font-medium">
                        Explore Solution <FaArrowRight className="ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software-Specific Solutions */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-purple-500/10 border-purple-500/20 text-purple-400 mb-4">
              <FaLaptopCode className="mr-2" />
              By Software Platform
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Software-Specific Expertise
            </h2>
            <p className="text-xl text-gray-300">
              Certified experts in SolidWorks, AutoCAD, CATIA, NX, Creo, Mastercam, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwarePages.map((page) => (
              <Link key={page.slug} href={`/solutions/${page.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold text-xs">
                        {page.pricingStart}
                      </Badge>
                      <Badge className="bg-purple-500/10 border-purple-500/20 text-purple-400 text-xs">
                        Software
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 capitalize">
                      {page.primaryKeyword}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {page.metaDescription}
                    </p>

                    <div className="flex items-center text-purple-400 text-sm font-medium">
                      Learn More <FaArrowRight className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USA State Pages */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-red-500/10 border-red-500/20 text-red-400 mb-4">
              <FaFlag className="mr-2" />
              USA Coverage
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              CAD Services by State
            </h2>
            <p className="text-xl text-gray-300">
              Serving engineering teams across all 50 states with local expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedStates.map((page) => (
              <Link key={page.slug} href={`/solutions/${page.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FaMapMarkerAlt className="text-red-400" />
                      <h3 className="text-sm font-semibold capitalize">
                        {page.primaryKeyword}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-xs">{page.industry}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {statePages.length > 12 && (
            <div className="mt-6 text-center">
              <p className="text-gray-400 mb-4">
                + {statePages.length - 12} more states available
              </p>
            </div>
          )}
        </div>
      </section>

      {/* USA City Pages */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-orange-500/10 border-orange-500/20 text-orange-400 mb-4">
              <FaBuilding className="mr-2" />
              Major Cities
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              CAD Services by City
            </h2>
            <p className="text-xl text-gray-300">
              Local CAD expertise for major manufacturing hubs across the USA
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
            {displayedCities.map((page) => (
              <Link key={page.slug} href={`/solutions/${page.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-3 text-center">
                    <FaMapMarkerAlt className="text-orange-400 mx-auto mb-1" />
                    <h3 className="text-xs font-semibold line-clamp-1">
                      {page.primaryKeyword.replace("CAD Services ", "")}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {cityPages.length > 18 && (
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                + {cityPages.length - 18} more cities available
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Problem/Solution Pages */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-yellow-500/10 border-yellow-500/20 text-yellow-400 mb-4">
              <FaExclamationTriangle className="mr-2" />
              Solve Your Challenges
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Common Engineering Challenges
            </h2>
            <p className="text-xl text-gray-300">
              Solutions for backlogs, talent shortages, startups, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemPages.map((page) => (
              <Link key={page.slug} href={`/solutions/${page.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                      <FaExclamationTriangle className="text-yellow-400 text-xl" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 capitalize">
                      {page.primaryKeyword}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {page.metaDescription}
                    </p>

                    <div className="flex items-center text-yellow-400 text-sm font-medium">
                      Find Solution <FaArrowRight className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Solutions */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-amber-500/10 border-amber-500/20 text-amber-400 mb-4">
              <FaLightbulb className="mr-2" />
              By Use Case
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Solution by Challenge
            </h2>
            <p className="text-xl text-gray-300">
              Reduce costs, scale your team, convert legacy data, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCasePages.map((page) => (
              <Link key={page.slug} href={`/solutions/${page.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold text-xs">
                        {page.pricingStart}
                      </Badge>
                      <Badge className="bg-amber-500/10 border-amber-500/20 text-amber-400 text-xs">
                        {page.context}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 capitalize">
                      {page.primaryKeyword}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {page.heroIntro}
                    </p>

                    <div className="flex items-center text-amber-400 text-sm font-medium">
                      Learn How <FaArrowRight className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative/Comparison Pages */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-rose-500/10 border-rose-500/20 text-rose-400 mb-4">
              <FaBalanceScale className="mr-2" />
              Comparisons & Alternatives
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Make Informed Decisions
            </h2>
            <p className="text-xl text-gray-300">
              Compare approaches, platforms, and alternatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...comparisonPages, ...alternativePages].map((page) => (
              <Link key={page.slug} href={`/solutions/${page.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:border-rose-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center mb-4">
                      <FaExchangeAlt className="text-rose-400 text-xl" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 capitalize">
                      {page.primaryKeyword}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {page.metaDescription}
                    </p>

                    <div className="flex items-center text-rose-400 text-sm font-medium">
                      Read Comparison <FaArrowRight className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { value: `${allSEOPages.length}+`, label: "Solution Pages" },
              { value: `${statePages.length}`, label: "US States" },
              { value: `${cityPages.length}+`, label: "US Cities" },
              { value: "$8", label: "Starting Rate" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Not Sure Which Solution Is Right for You?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team will analyze your requirements and recommend the best
            approach for your project. Get a free consultation today.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark px-10 py-6 text-lg font-bold hover:shadow-lg hover:shadow-accent-gold/25">
              <FaRocket className="mr-2" />
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
