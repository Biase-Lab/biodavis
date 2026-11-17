import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CREDENTIALS = [
  { value: "Virginia Tech", label: "Faculty Scientist" },
  { value: "20+ Years", label: "Animal Omics" },
  { value: "Published", label: "Animal Scientist" },
  { value: "Multi-Omics", label: "Integration Expert" },
];

export function About() {
  return (
    <section id="about" className="bg-primary-900 py-16 text-white md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <AnimatedSection>
            <figure className="flex items-center gap-5 lg:block">
              <div className="relative aspect-[4/5] w-28 flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15 sm:w-40 lg:w-full">
                <Image
                  src="/fernando_biase.jpg"
                  alt="Fernando H. Biase, Ph.D."
                  fill
                  sizes="(min-width: 1024px) 300px, 160px"
                  className="object-cover object-[center_15%]"
                />
              </div>
              <figcaption className="lg:mt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-400">
                  Principal Scientist
                </p>
                <p className="mt-1 font-heading text-xl font-semibold">
                  Fernando H. Biase, Ph.D.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-300">
                  Associate Professor, School of Animal Sciences, Virginia Tech
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Ph.D. in Genetics and Molecular Biology, University of São
                  Paulo. Leads USDA-funded research.
                </p>
              </figcaption>
            </figure>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Expert Bioinformatics, Accessible to All Researchers
            </h2>

            <blockquote className="mt-8 border-l-4 border-accent-500 pl-6 text-xl leading-relaxed text-gray-100 md:text-2xl">
              <p>
                &ldquo;After working for two decades in functional genomics,
                I&apos;ve seen brilliant research stall because data analysis
                became a barrier instead of a bridge to discovery. At BiODAVis,
                I personally review every analysis to ensure scientifically
                rigorous results.&rdquo;
              </p>
            </blockquote>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">
              BiODAVis is led by a Virginia Tech faculty scientist with over 20
              years of hands-on experience analyzing NGS datasets in animal
              science research. From initial data quality assessment through
              publication-ready figures, we support your entire analysis
              journey with transparent methods, reproducible workflows, and
              expert biological interpretation—whether you&apos;re studying
              feed efficiency in cattle, heat stress in poultry, disease models
              in companion animals, or rumen microbiome function.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 lg:grid-cols-4">
            {CREDENTIALS.map((credential) => (
              <div
                key={credential.value}
                className="flex flex-col-reverse border-l-2 border-accent-500 pl-4"
              >
                <dt className="text-sm text-gray-300">{credential.label}</dt>
                <dd className="font-heading text-2xl font-bold md:text-3xl">
                  {credential.value}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>
      </div>
    </section>
  );
}
