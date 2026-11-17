import Image from "next/image";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL, NAV_LINKS, SERVICES } from "@/lib/constants";

const linkStyles =
  "text-sm text-gray-300 transition-colors hover:text-accent-400";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[1.3fr_0.7fr_1.6fr_0.9fr]">
          {/* Company */}
          <div>
            <div className="inline-block rounded-xl bg-white p-3">
              <Image
                src="/biodavis-art.png"
                alt="BiODAVis"
                width={1200}
                height={445}
                sizes="200px"
                className="h-auto w-[200px]"
              />
            </div>
            <p className="mt-5 text-lg font-bold leading-tight">
              <span className="text-accent-400">O</span>mics{" "}
              <span className="text-accent-400">D</span>ata{" "}
              <span className="text-accent-400">A</span>nalysis &amp;{" "}
              <span className="text-accent-400">Vis</span>ualization
            </p>
            <p className="mt-1 text-lg font-bold italic text-accent-400">
              See Your Science
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-300">
              Interactive multi-omics analysis for animal science
              research—delivered through custom interactive dashboards.
              Faculty-led expertise for livestock, poultry, companion animals,
              rodents and human genomics.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkStyles}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="grid grid-cols-[auto_auto] justify-start gap-x-8 gap-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href={`#service-${service.id}`} className={linkStyles}>
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`flex items-center ${linkStyles}`}
            >
              <Mail className="mr-2 h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-sm text-gray-400">
              We respond within 24 hours
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-300">
            Faculty-led bioinformatics service | School of Animal Sciences,
            Virginia Tech
          </p>
          <p className="text-sm text-gray-400">
            BiODAVis is an independent company and is not a service of Virginia
            Tech.
          </p>
          <p className="text-sm text-gray-400">
            &copy; {currentYear} BiODAVis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
