"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  const tiers = [
    {
      name: "Academic",
      price: "Per-Sample Pricing",
      description: "Transparent pricing based on analysis type",
      services: [
        { name: "RNA-seq", price: "$100/sample" },
        { name: "Small-RNA seq", price: "$100/sample" },
        { name: "Single-cell RNA-seq", price: "$150/sample" },
        { name: "WGS SNP analysis", price: "$125/sample" },
        { name: "Metagenome", price: "$125/sample" },
        { name: "Nanopore long-read", price: "$150/sample" },
        { name: "Metabolomics", price: "$600/analysis" },
        { name: "Proteomics", price: "$600/analysis" },
      ],
      features: [
        "Customized pipelines for processing sequence data",
        "Comprehensive results report",
        "Basic visualization package",
        "Manuscript preparation assistance",
        "Email support",
        "2-week delivery",
      ],
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "For ongoing research partnerships",
      features: [
        "Unlimited datasets",
        "Fully customized pipelines",
        "Comprehensive reports & presentations",
        "Custom visualization development",
        "Dedicated support channel",
        "Manuscript preparation assistance",
        "Flexible delivery schedule",
      ],
      cta: "Contact Us",
      featured: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 font-heading">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your research needs.
              <br />
              All plans include our point-and-click analysis platform.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div
                className={`relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  tier.featured
                    ? "ring-2 ring-accent-500 scale-105 md:scale-110"
                    : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2 font-heading">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary-700">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>

                  {/* Service-specific pricing */}
                  {tier.services && (
                    <div className="mb-6 bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-900 mb-3 text-sm">
                        Service Rates
                      </h4>
                      <div className="space-y-2">
                        {tier.services.map((service: any, serviceIndex: number) => (
                          <div
                            key={serviceIndex}
                            className="flex items-center justify-between"
                          >
                            <span className="text-gray-700 text-sm">
                              {service.name}
                            </span>
                            <span className="font-semibold text-primary-700">
                              {service.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    variant={tier.featured ? "accent" : "primary"}
                    className="w-full mb-6"
                    onClick={scrollToContact}
                  >
                    {tier.cta}
                  </Button>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="bg-primary-100 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Custom Solutions Available
            </h3>
            <p className="text-gray-700 mb-4 max-w-4xl mx-auto">
              Pricing depends on project complexity, dataset size, and timeline.
              All new clients requiring custom data analysis receive a{" "}
              <span className="font-semibold text-primary-700">
                free consultation
              </span>{" "}
              to discuss your needs and receive a detailed quote.
            </p>
            <p className="text-sm text-gray-600">
              Grant support documentation
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
