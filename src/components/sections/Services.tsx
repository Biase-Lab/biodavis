import { ArrowRight, Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { buttonClasses } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import {
  ENTERPRISE_FEATURES,
  INCLUDED_WITH_EVERY_ANALYSIS,
  PIPELINE_URL,
  SERVICES,
} from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      {/* Older links to the former pricing section land here. */}
      <span id="pricing" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">
              Services &amp; Transparent Pricing
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary-900 md:text-4xl lg:text-5xl">
              Comprehensive Bioinformatics Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Expert analysis across all major omics platforms, tailored to
              your research needs.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Every analysis follows validated protocols grounded in
              peer-reviewed literature and industry-leading best practices.
            </p>
          </div>
        </AnimatedSection>

        <ServiceGrid className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={0.05 * (index % 4)}
            />
          ))}
        </ServiceGrid>

        <p className="mt-6 text-sm text-gray-500">
          Starting academic rates.{" "}
          <a
            href={PIPELINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary-700 underline-offset-2 hover:underline"
          >
            Configure your pipeline
          </a>{" "}
          for an exact quote. Enterprise and ongoing research partnerships are
          priced per project.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <AnimatedSection className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-sm ring-1 ring-primary-900/10">
            <h3 className="font-heading text-2xl font-semibold text-primary-900">
              Every Analysis Includes
            </h3>
            <p className="mt-2 text-gray-600">
              All plans include our point-and-click analysis platform.
            </p>
            <ul className="mb-8 mt-6 grid w-full gap-3 sm:grid-cols-2">
              {INCLUDED_WITH_EVERY_ANALYSIS.map((item) => (
                <li key={item} className="flex items-start text-sm text-gray-700">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={PIPELINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("primary", "md", "mt-auto")}
            >
              Configure Your Pipeline
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </AnimatedSection>

          <AnimatedSection
            delay={0.1}
            className="flex flex-col items-start rounded-2xl bg-primary-900 p-8 text-white"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-400">
              Don&apos;t see what you need?
            </p>
            <h3 className="mt-2 font-heading text-2xl font-semibold">
              Enterprise &amp; Custom Solutions
            </h3>
            <p className="mt-2 text-gray-300">
              Custom pricing for ongoing research partnerships. Pricing depends
              on project complexity, dataset size, and timeline. All new
              clients requiring custom data analysis receive a{" "}
              <span className="font-semibold text-white">
                free consultation
              </span>{" "}
              to discuss your needs and receive a detailed quote.
            </p>
            <ul className="mb-8 mt-6 grid w-full gap-3 sm:grid-cols-2">
              {ENTERPRISE_FEATURES.map((item) => (
                <li key={item} className="flex items-start text-sm text-gray-100">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start text-sm text-gray-100">
                <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Grant support documentation</span>
              </li>
            </ul>
            <a
              href="#contact"
              className={buttonClasses("inverseOutline", "md", "mt-auto")}
            >
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
