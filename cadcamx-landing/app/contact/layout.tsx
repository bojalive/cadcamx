import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - CADCAMX | Get In Touch With Our Engineering Experts",
  description:
    "Contact CADCAMX for premium CAD/CAM engineering services starting at $8/hour. 24/7 support available. Get free consultation and NDA-protected project discussions.",
  keywords: [
    "contact CAD services",
    "engineering support",
    "CAD CAM consultation",
    "offshore engineering contact",
    "technical support",
    "project quote",
    "engineering consultation",
    "CAD design inquiry",
  ],
  openGraph: {
    title: "Contact CADCAMX - 24/7 Engineering Support Available",
    description:
      "Connect with our world-class CAD/CAM engineering team. Premium design and manufacturing support services starting at $8/hour. Free consultation available.",
    url: "https://cadcamx.com/contact",
    siteName: "CADCAMX",
    images: [
      {
        url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ccf4b61dd3-f6c0fff3a4c42fe80a83.png",
        width: 1200,
        height: 630,
        alt: "CADCAMX Contact - Engineering Experts Available 24/7",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CADCAMX - Engineering Support 24/7",
    description:
      "Get in touch with our CAD/CAM experts. Premium offshore engineering services starting at $8/hour. Free consultation and NDA protection.",
    images: [
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/ccf4b61dd3-f6c0fff3a4c42fe80a83.png",
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
