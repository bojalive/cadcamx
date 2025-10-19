import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CADCAMX - Offshore CAD & CAM Services Starting from $8/hour",
  description:
    "Professional offshore CAD/CAM services delivering excellence at affordable rates. 2D Drafting, 3D Modeling, CAM Programming, Reverse Engineering & more. 98% client retention rate.",
  keywords: [
    "CAD services",
    "CAM services",
    "offshore CAD",
    "3D modeling",
    "2D drafting",
    "CAM programming",
    "reverse engineering",
    "AutoCAD",
    "SolidWorks",
    "affordable CAD services",
  ],
  authors: [{ name: "CADCAMX" }],
  openGraph: {
    title: "CADCAMX - Offshore CAD & CAM Excellence",
    description:
      "Accelerate Design. Reduce Cost. Scale Smart with CADCAMX. Professional CAD/CAM services starting from $8/hour.",
    url: "https://cadcamx.com",
    siteName: "CADCAMX",
    images: [
      {
        url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c82c692e61-2280bf58801ab36da1fa.png",
        width: 1200,
        height: 630,
        alt: "CADCAMX - Professional CAD/CAM Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CADCAMX - Offshore CAD & CAM Excellence",
    description:
      "Professional CAD/CAM services starting from $8/hour. 2M+ drawing hours completed.",
    images: [
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/c82c692e61-2280bf58801ab36da1fa.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
