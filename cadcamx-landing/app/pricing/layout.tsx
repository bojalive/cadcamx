import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - CADCAMX | Transparent Offshore CAD/CAM Rates Starting at $8/hour",
  description:
    "Flexible offshore CAD/CAM pricing models: Hourly rates ($8-25/hr), Project-based quotes, or Dedicated teams. Save up to 60% vs in-house with transparent pricing and no hidden fees.",
  keywords: [
    "CAD CAM pricing",
    "offshore engineering rates",
    "CAD drafting cost",
    "3D modeling pricing",
    "CAM programming rates",
    "dedicated engineering team",
    "project-based pricing",
    "hourly CAD rates",
    "engineering cost comparison",
    "affordable CAD services",
  ],
  openGraph: {
    title: "CADCAMX Pricing - Transparent Offshore Engineering Rates",
    description:
      "Choose from flexible pricing models: $8-25/hr hourly rates, fixed project quotes, or dedicated teams starting at $2,500/month. Save 60% vs in-house costs.",
    url: "https://cadcamx.com/pricing",
    siteName: "CADCAMX",
    images: [
      {
        url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/976c829ed8-d193a47cdfb7a450972c.png",
        width: 1200,
        height: 630,
        alt: "CADCAMX Pricing - Affordable Offshore CAD/CAM Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CADCAMX Pricing - Starting at $8/hour",
    description:
      "Transparent offshore CAD/CAM pricing. Hourly, project-based, or dedicated team options. Save up to 60% vs in-house costs.",
    images: [
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/976c829ed8-d193a47cdfb7a450972c.png",
    ],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
