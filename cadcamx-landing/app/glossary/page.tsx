import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { glossaryTerms, glossaryCategories } from "@/lib/glossary-data";
import { FaBook, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "CAD/CAM Glossary | Engineering Terms & Definitions | CADCAMX",
  description: "Comprehensive glossary of CAD, CAM, and engineering terms. Learn definitions for 3D modeling, GD&T, CNC machining, FEA, and more.",
  openGraph: {
    title: "CAD/CAM Glossary | Engineering Terms & Definitions | CADCAMX",
    description: "Comprehensive glossary of CAD, CAM, and engineering terms.",
    type: "website",
    url: "https://cadcamx.com/glossary",
  },
};

export default function GlossaryPage() {
  // Group terms by first letter
  const termsByLetter: Record<string, typeof glossaryTerms> = {};
  glossaryTerms.forEach((term) => {
    const letter = term.term[0].toUpperCase();
    if (!termsByLetter[letter]) {
      termsByLetter[letter] = [];
    }
    termsByLetter[letter].push(term);
  });

  const alphabet = Object.keys(termsByLetter).sort();

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Glossary" }]} />

          <div className="mb-12">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaBook className="mr-2" />
              {glossaryTerms.length}+ Terms
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              CAD/CAM Glossary
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Comprehensive definitions for CAD, CAM, engineering, and manufacturing terms.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              {glossaryCategories.map((category) => (
                <Badge
                  key={category}
                  className="bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Alphabet Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {alphabet.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-accent-gold/20 hover:text-accent-gold transition-colors font-semibold"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Terms by Letter */}
          <div className="space-y-12">
            {alphabet.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <h2 className="text-3xl font-bold mb-6 text-accent-gold">
                  {letter}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {termsByLetter[letter].map((term) => (
                    <Link key={term.slug} href={`/glossary/${term.slug}`}>
                      <Card className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all h-full">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-white mb-1">
                                {term.term}
                              </h3>
                              <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-400 text-xs">
                                {term.category}
                              </Badge>
                            </div>
                            <FaArrowRight className="text-accent-gold mt-1" />
                          </div>
                          <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                            {term.definition}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
