import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://biodavis.com'),
  title: {
    default: "BiODAVis - Omics Data Analysis and Visualization | Animal Science Bioinformatics",
    template: "%s | BiODAVis"
  },
  description:
    "Interactive multi-omics analysis for animal science researchers—delivered through custom interactive dashboards, not file dumps. Faculty-led expertise for livestock, poultry, companion animals, rodents and human genomics.",
  keywords: [
    "animal science bioinformatics",
    "livestock genomics",
    "companion animal RNA-seq",
    "veterinary genomics",
    "agricultural bioinformatics",
    "interactive dashboard",
    "interactive omics visualization",
    "livestock transcriptomics",
    "rumen microbiome",
    "dairy cattle genomics",
    "poultry genomics",
    "multi-omics integration",
    "RNA-seq analysis",
    "single cell RNA-seq",
    "microbiome analysis",
    "metabolomics",
    "proteomics",
    "nanopore sequencing",
  ],
  authors: [{ name: "BiODAVis", url: "https://biodavis.com" }],
  creator: "BiODAVis",
  publisher: "BiODAVis",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "BiODAVis - Omics Data Analysis and Visualization",
    description:
      "See Your Science. Interactive multi-omics analysis for animal science researchers. Custom interactive dashboards for livestock, poultry, companion animals, rodents and human genomics.",
    url: "https://biodavis.com",
    siteName: "BiODAVis",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/biodavis-logo.png",
        width: 1200,
        height: 630,
        alt: "BiODAVis - Omics Data Analysis and Visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BiODAVis - Omics Data Analysis and Visualization",
    description: "See Your Science. Interactive multi-omics analysis for animal science researchers.",
    images: ["/biodavis-logo.png"],
  },
  verification: {
    google: '99OrSEpsiIOfU4TB8pONn7ELMVrYaHYfg9mpZ2Qaz3s',
  },
  alternates: {
    canonical: "https://biodavis.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
