import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  getGlossaryTermBySlug,
  getAllGlossaryTermSlugs,
  glossaryTerms,
  getGlossaryTermsByCategory,
} from "@/lib/glossary-data";
import { FaArrowLeft, FaArrowRight, FaBook } from "react-icons/fa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllGlossaryTermSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  if (!term) {
    return { title: "Term Not Found | CADCAMX" };
  }

  return {
    title: `${term.term} - Definition | CAD/CAM Glossary | CADCAMX`,
    description: term.definition,
    openGraph: {
      title: `${term.term} - Definition | CAD/CAM Glossary`,
      description: term.definition,
      type: "article",
      url: `https://cadcamx.com/glossary/${slug}`,
    },
  };
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  if (!term) {
    notFound();
  }

  // Get related terms from same category
  const relatedTerms = getGlossaryTermsByCategory(term.category)
    .filter((t) => t.slug !== term.slug)
    .slice(0, 6);

  // Get terms mentioned in relatedTerms field
  const linkedTerms = term.relatedTerms
    ?.map((t) => glossaryTerms.find((gt) => gt.term === t))
    .filter(Boolean);

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "CADCAMX CAD/CAM Glossary",
      url: "https://cadcamx.com/glossary",
    },
  };

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Glossary", href: "/glossary" },
              { label: term.term },
            ]}
          />

          {/* Term Header */}
          <header className="mb-12">
            <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-400 mb-4">
              {term.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {term.term}
            </h1>
          </header>

          {/* Definition */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12">
            <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-4">
              Definition
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              {term.definition}
            </p>
          </div>

          {/* Related Terms (from relatedTerms field) */}
          {linkedTerms && linkedTerms.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4">Related Terms</h2>
              <div className="flex flex-wrap gap-3">
                {linkedTerms.map((linkedTerm) => (
                  <Link
                    key={linkedTerm!.slug}
                    href={`/glossary/${linkedTerm!.slug}`}
                  >
                    <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold hover:bg-accent-gold/20 cursor-pointer">
                      {linkedTerm!.term}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Glossary */}
          <div className="mb-16">
            <Link href="/glossary">
              <Button
                variant="outline"
                className="border-accent-gold/30 text-accent-gold hover:bg-accent-gold/10"
              >
                <FaArrowLeft className="mr-2" />
                Back to Glossary
              </Button>
            </Link>
          </div>

          {/* More Terms in Category */}
          {relatedTerms.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                More {term.category} Terms
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedTerms.map((relatedTerm) => (
                  <Link
                    key={relatedTerm.slug}
                    href={`/glossary/${relatedTerm.slug}`}
                  >
                    <Card className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all h-full">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-white">
                            {relatedTerm.term}
                          </h3>
                          <FaArrowRight className="text-accent-gold" />
                        </div>
                        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                          {relatedTerm.definition}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
