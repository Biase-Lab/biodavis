import {
  ArrowRight,
  HeadphonesIcon,
  MousePointerClick,
  Sliders,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { buttonClasses } from "@/components/ui/Button";
import { PIPELINE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: MousePointerClick,
    title: "Interactive Dashboards",
    description:
      "We deliver custom interactive dashboards—not file dumps. Explore your results interactively, adjust parameters, visualize pathways, and generate publication figures on demand. No coding required, no zip files to decipher.",
    featured: true,
  },
  {
    icon: HeadphonesIcon,
    title: "Animal Science Expertise",
    description:
      "We don't just deliver results—we provide expert interpretation for livestock, poultry, companion animals, rodents and human studies. Faculty-led guidance from someone who understands production traits, disease models, and species-specific biology.",
    featured: false,
  },
  {
    icon: Sliders,
    title: "Multi-Omics Integration",
    description:
      "Every analysis is customized to your specific research questions and data types. We integrate transcriptomics, metabolomics, and proteomics to reveal mechanisms that single-omics approaches miss—connecting the dots across molecular layers.",
    featured: false,
  },
];

const STEPS = [
  {
    title: "Select Your Service",
    description: "Choose the analysis type for your research",
  },
  {
    title: "Configure Pipeline",
    description: "Customize parameters with simple clicks",
  },
  {
    title: "Upload Your Data",
    description: "Securely upload your raw data",
  },
  {
    title: "Receive Your Dashboard",
    description: "Get your custom interactive dashboard with visualizations",
  },
  {
    title: "Explore & Publish",
    description: "Generate figures and gain insights from your data",
  },
];

const DATA_HANDLING = [
  {
    title: "Who sees your data",
    description: "Only Dr. Biase. Your data is never shared with anyone else.",
  },
  {
    title: "How long we keep it",
    description:
      "Your raw data is deleted when your dashboard is delivered.",
  },
  {
    title: "Who owns the results",
    description: "You do. The researcher who pays for the analysis owns the results.",
  },
];

const brandGradient =
  "bg-gradient-to-br from-brand-green via-brand-blue to-brand-violet";

export function ValueProposition() {
  return (
    <section id="why" className="bg-primary-900 py-16 text-white md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
            Why Choose BiODAVis?
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Professional analysis meets user-friendly technology
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              delay={0.1 * index}
              className={cn(
                "rounded-2xl bg-white/5 p-7",
                feature.featured
                  ? "ring-2 ring-accent-500"
                  : "ring-1 ring-white/10"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${brandGradient}`}
                >
                  <feature.icon className="h-6 w-6" />
                </span>
                {feature.featured && (
                  <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold">
                    Key Differentiator
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold md:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-300">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 border-t border-white/10 pt-14">
          <h3 className="text-center font-heading text-2xl font-semibold md:text-3xl">
            From Data to an Informative Dashboard in Five Simple Steps
          </h3>

          <ol className="mt-10 grid gap-8 md:grid-cols-5">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-4 md:block md:text-center"
              >
                {/* Line to the next step: vertical on phones, horizontal on wide screens */}
                {index < STEPS.length - 1 && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-8 left-6 top-12 w-px bg-white/25 md:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-6 hidden h-px w-[calc(100%+2rem)] bg-white/25 md:block"
                    />
                  </>
                )}
                <span
                  className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-heading text-lg font-bold md:mx-auto ${brandGradient}`}
                >
                  {index + 1}
                </span>
                <div className="md:mt-4">
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="mt-1 text-sm text-gray-300">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </AnimatedSection>

        <AnimatedSection className="mt-14 rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
          <h3 className="text-center font-heading text-xl font-semibold md:text-2xl">
            Your Data, Your Results
          </h3>
          <dl className="mt-6 grid gap-6 md:grid-cols-3">
            {DATA_HANDLING.map((item) => (
              <div key={item.title} className="border-l-2 border-accent-500 pl-4">
                <dt className="font-semibold">{item.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-gray-300">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>

        <AnimatedSection className="mt-14 text-center">
          <p className="text-xl text-gray-300">
            Ready to experience the difference?
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={PIPELINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("inverse", "lg", "w-full sm:w-auto")}
            >
              Configure Your Pipeline
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className={buttonClasses("inverseOutline", "lg", "w-full text-center sm:w-auto")}
            >
              Schedule a Consultation for Custom Analysis
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
