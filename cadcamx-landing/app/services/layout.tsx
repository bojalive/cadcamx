import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - CADCAMX | Professional CAD/CAM Engineering Solutions",
  description:
    "Comprehensive CAD/CAM engineering services including 3D modeling, technical drafting, CNC programming, FEA analysis, reverse engineering, and product development. Expert solutions for aerospace, automotive, medical devices, and industrial equipment.",
  keywords: [
    "CAD services",
    "CAM services",
    "3D modeling",
    "technical drafting",
    "CNC programming",
    "FEA analysis",
    "finite element analysis",
    "reverse engineering",
    "product development",
    "engineering services",
    "SolidWorks services",
    "CATIA services",
    "Mastercam programming",
  ],
  openGraph: {
    title: "CADCAMX Services - Professional CAD/CAM Engineering Solutions",
    description:
      "Expert CAD/CAM engineering services for diverse industries. From 3D modeling to manufacturing support, we deliver precision and innovation.",
    url: "https://cadcamx.com/services",
    siteName: "CADCAMX",
    images: [
      {
        url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/019f2b6b63-070eec666245bd5858cd.png",
        width: 1200,
        height: 630,
        alt: "CADCAMX Professional Engineering Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CADCAMX Services - Professional CAD/CAM Engineering Solutions",
    description:
      "Expert engineering services: 3D modeling, CAM programming, FEA analysis, and more. Starting at $8/hour.",
    images: [
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/019f2b6b63-070eec666245bd5858cd.png",
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
