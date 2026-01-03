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
  title: "BiODAVis - Omics Data Analysis and Visualization | Animal Science Bioinformatics",
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
  ],
  authors: [{ name: "BiODAVis" }],
  openGraph: {
    title: "BiODAVis - Omics Data Analysis and Visualization",
    description:
      "See Your Science. Interactive multi-omics analysis for animal science researchers. Custom interactive dashboards for livestock, poultry, companion animals, rodents and human genomics.",
    type: "website",
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
