"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center space-x-3 group"
          >
            <div className="relative h-12 w-32 sm:w-40">
              <Image
                src="/biodavis-logo.png"
                alt="BiODAVis - Omics Data Analysis and Visualization"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className={`text-lg font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary-900' : 'text-white'
              }`}>
                <span className={isScrolled ? 'text-accent-600' : 'text-accent-400'}>O</span>mics <span className={isScrolled ? 'text-accent-600' : 'text-accent-400'}>D</span>ata <span className={isScrolled ? 'text-accent-600' : 'text-accent-400'}>A</span>nalysis & <span className={isScrolled ? 'text-accent-600' : 'text-accent-400'}>Vis</span>ualization
              </div>
              <div className={`text-lg font-bold italic transition-colors duration-300 ${
                isScrolled ? 'text-accent-600' : 'text-gray-100'
              }`}>
                See Your Science
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-700'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://biaselb.shinyapps.io/biodavis-pipeline/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="sm"
              >
                Configure Pipeline
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:text-primary-700'
                : 'text-white hover:text-gray-200'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-left px-4 py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4">
                <a
                  href="https://biaselb.shinyapps.io/biodavis-pipeline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    Configure Pipeline
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
