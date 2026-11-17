import { ArrowRight, Check } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { PIPELINE_URL, SERVICES } from "@/lib/constants";
import Image from "next/image";

const HIGHLIGHTS = [
  "Virginia Tech Faculty",
  "Extensive Omics Expertise",
  "Publication Support",
  "2-Week Delivery",
];

// Entrance animation; skipped for visitors who ask for reduced motion.
const reveal = "motion-safe:animate-slide-up";
const delay = (seconds: number) => ({ animationDelay: `${seconds}s` });

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-white pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Soft colour wash in the logo's green, blue and violet */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-24 h-[520px] w-[520px] rounded-full bg-brand-violet/15 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-[420px] w-[420px] rounded-full bg-accent-400/20 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 h-[460px] w-[460px] rounded-full bg-brand-green/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:gap-16">
          {/* Text comes first on phones; on wide screens it sits to the right of the logo. */}
          <div className="lg:order-2">
            <p
              className={`mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary-900/70 ${reveal}`}
            >
              <span className="text-primary-700">O</span>mics{" "}
              <span className="text-primary-700">D</span>ata{" "}
              <span className="text-primary-700">A</span>nalysis &amp;{" "}
              <span className="text-primary-700">Vis</span>ualization
            </p>

            <h1
              className={`font-heading text-5xl font-bold leading-[1.05] tracking-tight text-primary-900 sm:text-6xl xl:text-7xl ${reveal}`}
              style={delay(0.05)}
            >
              See your{" "}
              <span className="bg-gradient-to-r from-brand-green via-brand-blue to-brand-violet bg-clip-text text-transparent">
                science.
              </span>
            </h1>

            <p
              className={`mt-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl ${reveal}`}
              style={delay(0.12)}
            >
              Complex omics data transformed into actionable biological
              insights, delivered through interactive dashboards—not file
              dumps. Professional omics and multi-omics analysis for livestock,
              poultry, companion animals, rodents and human research.
            </p>

            <div
              className={`mt-9 flex flex-col gap-4 sm:flex-row ${reveal}`}
              style={delay(0.2)}
            >
              <a
                href={PIPELINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses("primary", "lg", "whitespace-nowrap lg:px-6 xl:px-8")}
              >
                Configure Your Pipeline
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className={buttonClasses("secondary", "lg", "whitespace-nowrap lg:px-6 xl:px-8")}>
                Explore Services
              </a>
            </div>

            <ul
              className={`mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium text-primary-900/80 ${reveal}`}
              style={delay(0.28)}
            >
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 flex-shrink-0 text-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`mx-auto w-full max-w-xl lg:order-1 lg:max-w-none ${reveal}`} style={delay(0.2)}>
            {/* The logo artwork, on a transparent background so it sits on the colour wash */}
            <Image
              src="/biodavis-art.png"
              alt="BiODAVis logo: a DNA helix flowing into charts and network visualizations"
              width={1200}
              height={445}
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="feather-edges h-auto w-full"
            />

            <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:mt-8">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#service-${service.id}`}
                    className="inline-block rounded-full border border-primary-900/10 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-primary-900/80 transition-colors hover:border-primary-700 hover:text-primary-700"
                  >
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
