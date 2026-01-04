"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";
import Image from "next/image";

const iconMap = {
  "rna-seq": (
    <div className="relative w-12 h-12">
      <Image
        src="/RNA-sequencing.png"
        alt="RNA Sequencing"
        fill
        className="object-contain"
      />
    </div>
  ),
  "single-cell": (
    <div className="relative w-12 h-12">
      <Image
        src="/single_cell_rna_seq.png"
        alt="Single Cell RNA-seq"
        fill
        className="object-contain"
      />
    </div>
  ),
  microbiome: (
    <div className="relative w-12 h-12">
      <Image
        src="/metagenome.png"
        alt="Microbiome Analysis"
        fill
        className="object-contain"
      />
    </div>
  ),
  nanopore: (
    <div className="relative w-12 h-12">
      <Image
        src="/DNA_sequencing_nanomore.png"
        alt="Nanopore Sequencing"
        fill
        className="object-contain"
      />
    </div>
  ),
  "wgs-snp": (
    <div className="relative w-12 h-12">
      <Image
        src="/WGS.png"
        alt="Whole Genome Sequencing"
        fill
        className="object-contain"
      />
    </div>
  ),
  "small-rna": (
    <div className="relative w-12 h-12">
      <Image
        src="/RNA-sequencing.png"
        alt="Small RNA Sequencing"
        fill
        className="object-contain"
      />
    </div>
  ),
  metabolomics: (
    <div className="relative w-12 h-12">
      <Image
        src="/metabolome.png"
        alt="Metabolomics"
        fill
        className="object-contain"
      />
    </div>
  ),
  proteomics: (
    <div className="relative w-12 h-12">
      <Image
        src="/proteome.png"
        alt="Proteomics"
        fill
        className="object-contain"
      />
    </div>
  ),
};

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 font-heading">
              Comprehensive Bioinformatics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert analysis across all major omics platforms, tailored to your
              research needs
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-3">
              Every analysis follows validated protocols grounded in peer-reviewed
              literature and industry-leading best practices
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={0.1 * index}>
              <ServiceCard
                icon={iconMap[service.id as keyof typeof iconMap]}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg">
              Don&apos;t see what you need?{" "}
              <a
                href="#contact"
                className="text-primary-700 font-semibold hover:text-accent-500 transition-colors"
              >
                Contact us
              </a>{" "}
              for custom analysis solutions.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
