"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { CONTACT_EMAIL } from "@/lib/constants";
import { Mail, Clock, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 font-heading">
              Let&apos;s Discuss Your Custom Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a free consultation and custom quote for your custom bioinformatics
              analysis needs
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={0.1}>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-primary-900 mb-6 font-heading">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-6 font-heading">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-1">
                        Email Us
                      </h4>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-primary-700 hover:text-accent-500 transition-colors"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-1">
                        Response Time
                      </h4>
                      <p className="text-gray-600">
                        We respond to all inquiries within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-1">
                        Connect With Us
                      </h4>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-700 hover:text-accent-500 transition-colors"
                      >
                        Follow us on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent-50 rounded-xl p-6 border border-accent-100">
                <h4 className="font-semibold text-primary-900 mb-3">
                  What Happens Next?
                </h4>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                      1
                    </span>
                    <span className="text-sm">
                      We review your project details and requirements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                      2
                    </span>
                    <span className="text-sm">
                      Schedule a free 30-minute consultation call
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                      3
                    </span>
                    <span className="text-sm">
                      Receive a detailed proposal with custom pricing and
                      timeline
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
