import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEOLandingPage } from "@/components/seo-landing-page";
import { getSEOPageBySlug, getAllSEOPageSlugs } from "@/lib/seo-pages-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all SEO pages
export async function generateStaticParams() {
  const slugs = getAllSEOPageSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getSEOPageBySlug(slug);

  if (!pageData) {
    return {
      title: "Page Not Found | CADCAMX",
    };
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageData.primaryKeyword,
    description: pageData.metaDescription,
    provider: {
      "@type": "Organization",
      name: "CADCAMX",
      url: "https://cadcamx.com",
    },
    serviceType: pageData.primaryKeyword,
    areaServed: "Worldwide",
    priceRange: pageData.pricingStart + "+",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    keywords: [pageData.primaryKeyword, ...pageData.secondaryKeywords].join(", "),
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      type: "website",
      url: `https://cadcamx.com/solutions/${slug}`,
      siteName: "CADCAMX",
      images: [
        {
          url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/cadcamx/og-image.jpg",
          width: 1200,
          height: 630,
          alt: pageData.primaryKeyword,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.metaTitle,
      description: pageData.metaDescription,
    },
    alternates: {
      canonical: `https://cadcamx.com/solutions/${slug}`,
    },
    other: {
      "script:ld+json": JSON.stringify([structuredData, faqStructuredData]),
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getSEOPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  return <SEOLandingPage data={pageData} />;
}
