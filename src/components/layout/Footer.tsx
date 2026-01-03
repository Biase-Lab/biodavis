import { SITE_NAME, SITE_TAGLINE, SITE_SLOGAN, CONTACT_EMAIL, SERVICES } from "@/lib/constants";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <div className="font-heading font-bold text-base leading-tight">{SITE_NAME}: {SITE_TAGLINE}</div>
                <div className="text-sm text-accent-400 font-medium italic mt-0.5">{SITE_SLOGAN}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Interactive multi-omics analysis for animal science research—delivered through custom interactive dashboards. Faculty-led expertise for livestock, poultry, companion animals, rodents and human genomics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <span className="text-gray-300 text-sm">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">
                  We respond within 24 hours
                </p>
              </li>
              <li className="pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8 text-center space-y-2">
          <p className="text-gray-300 text-sm">
            Faculty-led bioinformatics service | School of Animal Sciences, Virginia Tech
          </p>
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
