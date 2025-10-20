import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - CADCAMX | Proven Engineering Excellence & Success Stories",
  description:
    "Discover how CADCAMX offshore CAD/CAM engineering services delivered quantifiable results for manufacturers worldwide. 150+ projects, $2M+ client savings, 98% satisfaction rate. From precision mold making to complex assemblies at $8/hour.",
  keywords: [
    "CAD CAM case studies",
    "engineering success stories",
    "manufacturing optimization",
    "precision mold making",
    "aerospace engineering",
    "automotive CAD services",
    "medical device design",
    "cost reduction case studies",
    "engineering efficiency",
    "CAM programming results",
    "offshore engineering success",
  ],
  openGraph: {
    title: "CADCAMX Case Studies - Proven Engineering Excellence",
    description:
      "150+ successful projects, $2.4M in client savings, 98.7% satisfaction rate. See how our $8/hour engineering services transform manufacturing.",
    url: "https://cadcamx.com/case-studies",
    siteName: "CADCAMX",
    images: [
      {
        url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/976c829ed8-d193a47cdfb7a450972c.png",
        width: 1200,
        height: 630,
        alt: "CADCAMX Case Studies - Engineering Success Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CADCAMX Case Studies - Engineering Excellence",
    description:
      "150+ projects completed. $2.4M in savings. 98.7% satisfaction. See proven results from our engineering services.",
    images: [
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/976c829ed8-d193a47cdfb7a450972c.png",
    ],
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
