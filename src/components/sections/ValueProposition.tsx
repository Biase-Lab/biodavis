"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Sliders, MousePointerClick, HeadphonesIcon } from "lucide-react";

export function ValueProposition() {
  const features = [
    {
      icon: <MousePointerClick className="w-12 h-12" />,
      title: "Interactive Dashboards",
      description:
        "We deliver custom interactive dashboards—not file dumps. Explore your results interactively, adjust parameters, visualize pathways, and generate publication figures on demand. No coding required, no zip files to decipher.",
      color: "from-accent-500 to-accent-700",
      featured: true,
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12" />,
      title: "Animal Science Expertise",
      description:
        "We don't just deliver results—we provide expert interpretation for livestock, poultry, companion animals, rodents and human studies. Faculty-led guidance from someone who understands production traits, disease models, and species-specific biology.",
      color: "from-primary-700 to-accent-500",
    },
    {
      icon: <Sliders className="w-12 h-12" />,
      title: "Multi-Omics Integration",
      description:
        "Every analysis is customized to your specific research questions and data types. We integrate transcriptomics, metabolomics, and proteomics to reveal mechanisms that single-omics approaches miss—connecting the dots across molecular layers.",
      color: "from-primary-500 to-primary-700",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
              Why Choose BiODAVis?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional analysis meets user-friendly technology
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div
                className={`relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
                  feature.featured ? "lg:scale-105 ring-2 ring-accent-500" : ""
                }`}
              >
                {feature.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Key Differentiator
                    </span>
                  </div>
                )}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Visual Diagram Section */}
        <AnimatedSection delay={0.3}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 font-heading">
              From Data to an Informative Dashboard in Five Simple Steps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: "1",
                  title: "Select Your Service",
                  desc: "Choose the analysis type for your research",
                },
                {
                  step: "2",
                  title: "Configure Pipeline",
                  desc: "Customize parameters with simple clicks",
                },
                {
                  step: "3",
                  title: "Upload Your Data",
                  desc: "Securely upload your raw data",
                },
                {
                  step: "4",
                  title: "Receive Your Dashboard",
                  desc: "Get your custom interactive dashboard with visualizations",
                },
                {
                  step: "5",
                  title: "Explore & Publish",
                  desc: "Generate figures and gain insights from your data",
                },
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300 mb-6">
              Ready to experience the difference?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://biaselb.shinyapps.io/biodavis-pipeline/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Configure Your Pipeline Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Consultation for Custom Analysis
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
