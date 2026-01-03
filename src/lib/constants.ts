export const SITE_NAME = "BiODAVis";
export const SITE_TAGLINE = "Omics Data Analysis and Visualization";
export const SITE_SLOGAN = "See Your Science";
export const SITE_DESCRIPTION =
  "Interactive multi-omics analysis for animal science researchers—delivered through custom interactive dashboards, not file dumps. Faculty-led expertise for livestock, poultry, companion animals, rodents and human genomics.";

export const CONTACT_EMAIL = "contact@biodavis.com";

export const SERVICES = [
  {
    id: "rna-seq",
    title: "RNA-Sequencing Analysis",
    description:
      "Comprehensive differential expression analysis, pathway enrichment, and publication-ready visualizations for bulk RNA-Seq data. Applications include livestock production traits (feed efficiency, milk quality), disease resistance studies, and nutritional intervention responses in cattle, poultry, swine, and companion animals.",
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
    id: "single-cell",
    title: "Single Cell RNA-Sequencing",
    description:
      "Advanced single-cell analysis including cell type identification, trajectory analysis, and multi-sample integration. Ideal for immune cell profiling in livestock, tissue development studies, and understanding cell-type-specific responses in companion animals.",
    features: [
      "Quality control reports",
      "Cell type clustering and annotation",
      "Trajectory and pseudotime analysis",
      "Multi-sample integration",
      "Cell-cell communication analysis",
    ],
  },
  {
    id: "microbiome",
    title: "Microbiome Analysis",
    description:
      "Targeted 16S rRNA and shotgun metagenomic analysis with comprehensive diversity and differential abundance testing. Specialized in rumen microbiome studies, gut health research in companion animals, and probiotic efficacy testing.",
    features: [
      "16S rRNA amplicon analysis (QIIME2)",
      "Shotgun metagenomics profiling",
      "Alpha and beta diversity analysis",
      "Differential abundance testing",
    ],
  },
  {
    id: "nanopore",
    title: "Nanopore Long-Read Processing",
    description:
      "Expert processing of Oxford Nanopore long-read sequencing data from basecalling to variant detection.",
    features: [
      "Basecalling and quality filtering",
      "De novo assembly (Flye, Canu)",
      "Structural variant detection",
      "Downstream analysis and annotation",
    ],
  },
  {
    id: "wgs-snp",
    title: "Whole Genome Sequencing",
    description:
      "Complete WGS pipeline for SNP analysis, variant calling, and population genetics studies. Support for genomic selection programs, QTL mapping, and breed characterization in livestock and companion animal populations.",
    features: [
      "Variant calling",
      "SNP annotation and filtering",
      "Population genetics analysis",
      "VCF processing and interpretation",
    ],
  },
  {
    id: "small-rna",
    title: "Small RNA Sequencing",
    description:
      "Comprehensive analysis of small non-coding RNAs including miRNA, siRNA, and piRNA profiling. Applications in regulatory mechanism discovery, biomarker identification, and understanding post-transcriptional gene regulation in livestock development, disease response, and reproduction.",
    features: [
      "miRNA differential expression analysis",
      "Novel miRNA discovery and annotation",
      "Target gene prediction and validation",
      "Pathway enrichment of miRNA targets",
    ],
  },
  {
    id: "metabolomics",
    title: "Metabolomics Analysis",
    description:
      "Untargeted and targeted metabolomics data analysis from LC-MS and GC-MS platforms. Ideal for understanding metabolic responses to nutrition interventions, environmental stress, and disease states in animal production systems and biomedical research.",
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
    title: "Proteomics Analysis",
    description:
      "Label-free and labeled quantitative proteomics analysis from mass spectrometry data. Support for discovery proteomics, targeted protein quantification, and post-translational modification studies in animal tissue, serum, and milk samples.",
    features: [
      "Data Normalization",
      "Robust Statistical Analysis",
      "Differential abundance analysis",
      "Gene ontology and pathway enrichment",
      "ML-powered biomarker discovery and classification",
      "Multi-omics integration workflows",
    ],
  },
] as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const;
