import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - CADCAMX | Expert CAD/CAM Engineering Team",
  description:
    "Meet the expert team behind CADCAMX. Learn about our mission, approach, and commitment to delivering world-class CAD/CAM services with precision and affordability.",
  keywords: [
    "about CADCAMX",
    "CAD/CAM team",
    "engineering experts",
    "our mission",
    "company values",
    "expert engineers",
    "CAD specialists",
    "offshore engineering team",
  ],
  openGraph: {
    title: "About CADCAMX - Expert CAD/CAM Engineering Team",
    description:
      "Discover our team of expert engineers, our mission to democratize CAD/CAM services, and our commitment to excellence.",
    url: "https://cadcamx.com/about",
    siteName: "CADCAMX",
    images: [
      {
        url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6d91ee5874-6dfa63c1accb72859500.png",
        width: 1200,
        height: 630,
        alt: "CADCAMX Expert Engineering Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About CADCAMX - Expert CAD/CAM Engineering Team",
    description:
      "Meet our team of 50+ expert engineers delivering world-class CAD/CAM services.",
    images: [
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/6d91ee5874-6dfa63c1accb72859500.png",
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
