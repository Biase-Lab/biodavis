import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { Service, ServiceCategory } from "@/lib/constants";

const CATEGORY_STYLES: Record<ServiceCategory, string> = {
  Transcriptomics: "bg-brand-blue/10 text-brand-blue",
  Genomics: "bg-brand-violet/10 text-brand-violet",
  Microbiome: "bg-brand-green/10 text-brand-green",
  "Mass spectrometry": "bg-accent-700/10 text-accent-700",
};

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

// Each card spans five rows of the parent grid (icon, title, summary, price,
// details) so those parts line up across the cards in a row.
export function ServiceCard({ service, delay }: ServiceCardProps) {
  return (
    <AnimatedSection
      delay={delay}
      className="service-card row-span-5 grid grid-rows-subgrid gap-y-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primary-900/10 hover:shadow-lg"
    >
      <div
        id={`service-${service.id}`}
        className="flex items-center justify-between gap-3"
      >
        <Image
          src={service.icon}
          alt=""
          width={56}
          height={56}
          sizes="56px"
          className="h-14 w-14 object-contain"
        />
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_STYLES[service.category]}`}
        >
          {service.category}
        </span>
      </div>

      <h3 className="mt-4 font-heading text-xl font-semibold text-primary-900">
        {service.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {service.summary}
      </p>

      <p className="mt-5 flex flex-wrap items-baseline gap-x-2 border-t border-primary-900/10 pt-4">
        <span className="text-sm text-gray-500">from</span>
        <span className="font-heading text-3xl font-bold text-primary-900">
          {service.price}
        </span>
        <span className="text-sm text-gray-500">{service.priceUnit}</span>
      </p>

      <details className="group mt-3">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg py-2 text-sm font-semibold text-primary-700 hover:text-primary-800 [&::-webkit-details-marker]:hidden">
          What&apos;s included
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
        </summary>
        <div className="pt-2">
          {service.applications && (
            <p className="mb-3 text-sm leading-relaxed text-gray-600">
              {service.applications}
            </p>
          )}
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start text-sm text-gray-700">
                <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-brand-green" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </AnimatedSection>
  );
}
