"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

export function About() {
  const credentials = [
    {
      icon: <Award className="w-6 h-6" />,
      value: "Virginia Tech",
      label: "Faculty Scientist",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "20+ Years",
      label: "Animal Omics",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      value: "Published",
      label: "Animal Scientist",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "Multi-Omics",
      label: "Integration Expert",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 font-heading">
              Expert Bioinformatics, Accessible to All Researchers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging the gap between cutting-edge genomics technology and
              researchers who need actionable insights, not code or file dumps
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                BiODAVis is led by a Virginia Tech faculty scientist specializing in livestock, poultry, companion animals, rodents and human genomics. With over 20 years of hands-on experience analyzing NGS datasets in animal science research and a track record of peer-reviewed publications, we provide PhD-level bioinformatics expertise tailored to the unique challenges of animal omics—from production traits and disease resistance to nutritional interventions and microbiome studies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is simple: make sophisticated multi-omics analysis accessible to animal science researchers, regardless of computational background. We deliver results through custom interactive dashboards—not file dumps—so you can explore your data, adjust parameters, visualize pathways, and generate publication figures without writing a single line of code.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From initial data quality assessment through publication-ready figures, we support your entire analysis journey with transparent methods, reproducible workflows, and expert biological interpretation. Whether you're studying feed efficiency in cattle, heat stress in poultry, disease models in companion animals, or rumen microbiome function, we understand your biology and deliver insights you can use.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-10 border border-primary-100">
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                  <Image
                    src="/fernando_biase.jpg"
                    alt="Fernando H. Biase, Ph.D."
                    fill
                    className="object-cover object-[center_15%]"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2 font-heading text-center">
                Meet the Principal Scientist
              </h3>
              <p className="text-xl font-semibold text-primary-700 mb-1 text-center">
                Fernando H. Biase, Ph.D.
              </p>
              <p className="text-md text-gray-600 mb-6 text-center">
                Associate Professor, School of Animal Sciences, Virginia Tech
              </p>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-accent-500 pl-6 space-y-4">
                <p>
                  "After working for two decades in functional genomics, I've seen brilliant research stall because data analysis became a barrier instead of a bridge to discovery.
                </p>
                <p>
                  I hold a Ph.D. in Genetics and Molecular Biology from the University of São Paulo and lead USDA-funded research. At BiODAVis, I personally review every analysis to ensure scientifically rigorous results. You can now focus on actionable biological insights, not just tables difficult to interpret."
                </p>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-accent-500 mb-3">{credential.icon}</div>
                <div className="text-3xl font-bold text-primary-900 mb-1 font-heading">
                  {credential.value}
                </div>
                <div className="text-sm text-gray-600">{credential.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
