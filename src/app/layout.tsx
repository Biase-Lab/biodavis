import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

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
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: "BiODAVis", url: SITE_URL }],
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
    url: SITE_URL,
    siteName: "BiODAVis",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },
  verification: {
    google: '99OrSEpsiIOfU4TB8pONn7ELMVrYaHYfg9mpZ2Qaz3s',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      {/* Browser extensions (e.g. Grammarly) add attributes to <body>; ignore that mismatch. */}
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
