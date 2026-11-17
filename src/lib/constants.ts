export const SITE_NAME = "BiODAVis";
// The address the site is actually served from (biodavis.com redirects here).
export const SITE_URL = "https://www.biodavis.com";
export const SITE_TAGLINE = "Omics Data Analysis and Visualization";
export const SITE_SLOGAN = "See Your Science";
export const SITE_DESCRIPTION =
  "Interactive multi-omics analysis for animal science researchers—delivered through custom interactive dashboards, not file dumps. Faculty-led expertise for livestock, poultry, companion animals, rodents and human genomics.";

export const CONTACT_EMAIL = "fbiase@vt.edu";

// Public publication record, so visitors can verify the credentials shown on the site.
export const SCHOLAR_URL =
  "https://scholar.google.com/citations?user=iG8M1p8AAAAJ&hl=en";

// The point-and-click app where clients configure an analysis.
export const PIPELINE_URL = "https://biaselb.shinyapps.io/biodavis-pipeline/";

export type ServiceCategory =
  | "Transcriptomics"
  | "Genomics"
  | "Microbiome"
  | "Mass spectrometry";

export interface Service {
  id: string;
  /** Short name for tags and tight spaces. */
  shortTitle: string;
  title: string;
  category: ServiceCategory;
  icon: string;
  /** Academic rate. */
  price: string;
  priceUnit: string;
  /** One sentence shown on the card. */
  summary: string;
  /** Typical uses, shown when the card is opened. */
  applications?: string;
  features: readonly string[];
}

// Listed in the order the cards appear on the page.
export const SERVICES: readonly Service[] = [
  {
    id: "rna-seq",
    shortTitle: "RNA-seq",
    title: "RNA-Sequencing Analysis",
    category: "Transcriptomics",
    icon: "/icons/rna-seq.png",
    price: "$175",
    priceUnit: "per sample",
    summary:
      "Comprehensive differential expression analysis, pathway enrichment, and publication-ready visualizations for bulk RNA-Seq data.",
    applications:
      "Applications include livestock production traits (feed efficiency, milk quality), disease resistance studies, and nutritional intervention responses in cattle, poultry, swine, and companion animals.",
    features: [
      "Quality control reports",
      "Differential expression",
      "Gene set enrichment analysis",
      "Gene enrichment analysis",
      "Pathway analysis and visualization",
      "ML-powered biomarker discovery and classification",
    ],
  },
  {
    id: "small-rna",
    shortTitle: "Small RNA-seq",
    title: "Small RNA Sequencing",
    category: "Transcriptomics",
    icon: "/icons/rna-seq.png",
    price: "$175",
    priceUnit: "per sample",
    summary:
      "Comprehensive analysis of small non-coding RNAs including miRNA, siRNA, and piRNA profiling.",
    applications:
      "Applications in regulatory mechanism discovery, biomarker identification, and understanding post-transcriptional gene regulation in livestock development, disease response, and reproduction.",
    features: [
      "miRNA differential expression analysis",
      "Novel miRNA discovery and annotation",
      "Target gene prediction and validation",
      "Pathway enrichment of miRNA targets",
    ],
  },
  {
    id: "single-cell",
    shortTitle: "Single-cell RNA-seq",
    title: "Single Cell RNA-Sequencing",
    category: "Transcriptomics",
    icon: "/icons/single-cell.png",
    price: "$2,000",
    priceUnit: "for up to 4 samples",
    summary:
      "Advanced single-cell analysis including cell type identification, trajectory analysis, and multi-sample integration.",
    applications:
      "Ideal for immune cell profiling in livestock, tissue development studies, and understanding cell-type-specific responses in companion animals.",
    features: [
      "Quality control reports",
      "Cell type clustering and annotation",
      "Marker gene identification",
      "Trajectory and pseudotime analysis",
      "Multi-sample integration",
      "Cell-cell communication analysis",
      "Pseudobulk differential expression",
    ],
  },
  {
    id: "microbiome",
    shortTitle: "Microbiome",
    title: "Microbiome Analysis",
    category: "Microbiome",
    icon: "/icons/microbiome.png",
    price: "$150",
    priceUnit: "per sample",
    summary:
      "Targeted 16S rRNA and shotgun metagenomic analysis with comprehensive diversity and differential abundance testing.",
    applications:
      "Specialized in rumen microbiome studies, gut health research in companion animals, and probiotic efficacy testing.",
    features: [
      "16S rRNA amplicon analysis (QIIME2)",
      "Shotgun metagenomics profiling",
      "Alpha and beta diversity analysis",
      "Differential abundance testing",
    ],
  },
  {
    id: "wgs-snp",
    shortTitle: "Whole-genome sequencing",
    title: "Whole Genome Sequencing",
    category: "Genomics",
    icon: "/icons/wgs.png",
    price: "$200",
    priceUnit: "per sample",
    summary:
      "Complete WGS pipeline for SNP analysis, variant calling, and population genetics studies.",
    applications:
      "Support for genomic selection programs, QTL mapping, and breed characterization in livestock and companion animal populations.",
    features: [
      "Variant calling",
      "SNP annotation and filtering",
      "Population genetics analysis",
      "VCF processing and interpretation",
    ],
  },
  {
    id: "nanopore",
    shortTitle: "Nanopore long reads",
    title: "Nanopore Long-Read Processing",
    category: "Genomics",
    icon: "/icons/nanopore.png",
    price: "$400",
    priceUnit: "per run",
    summary:
      "Expert processing of Oxford Nanopore long-read sequencing data from basecalling to variant detection.",
    features: [
      "Basecalling and quality filtering",
      "De novo assembly (Flye, Canu)",
      "Structural variant detection",
      "Downstream analysis and annotation",
    ],
  },
  {
    id: "metabolomics",
    shortTitle: "Metabolomics",
    title: "Metabolomics Analysis",
    category: "Mass spectrometry",
    icon: "/icons/metabolomics.png",
    price: "$600",
    priceUnit: "per analysis",
    summary:
      "Untargeted and targeted metabolomics data analysis from LC-MS and GC-MS platforms.",
    applications:
      "Ideal for understanding metabolic responses to nutrition interventions, environmental stress, and disease states in animal production systems and biomedical research.",
    features: [
      "Data Normalization",
      "Robust Statistical Analysis",
      "Metabolic pathway mapping (KEGG, MetaCyc)",
      "ML-powered biomarker discovery and classification",
      "Integration with transcriptomics data",
    ],
  },
  {
    id: "proteomics",
    shortTitle: "Proteomics",
    title: "Proteomics Analysis",
    category: "Mass spectrometry",
    icon: "/icons/proteomics.png",
    price: "$600",
    priceUnit: "per analysis",
    summary:
      "Label-free and labeled quantitative proteomics analysis from mass spectrometry data.",
    applications:
      "Support for discovery proteomics, targeted protein quantification, and post-translational modification studies in animal tissue, serum, and milk samples.",
    features: [
      "Data Normalization",
      "Robust Statistical Analysis",
      "Differential abundance analysis",
      "Gene ontology and pathway enrichment",
      "ML-powered biomarker discovery and classification",
      "Multi-omics integration workflows",
    ],
  },
];

// Included with every analysis at the listed rates.
export const INCLUDED_WITH_EVERY_ANALYSIS = [
  "Customized pipelines for processing sequence data",
  "Comprehensive results report",
  "Dynamic visualization dashboard",
  "Download processed files",
  "Download result files",
  "2-week delivery",
] as const;

// Offered for enterprise and ongoing research partnerships.
export const ENTERPRISE_FEATURES = [
  "Fully customized pipelines",
  "Dynamic visualization dashboard",
  "Custom visualization development",
  "Download processed files",
  "Download result files",
  "Dedicated support channel",
  "Flexible delivery schedule",
] as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services & Pricing" },
  { href: "#contact", label: "Contact" },
] as const;
