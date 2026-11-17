"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { NAV_LINKS, PIPELINE_URL } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-primary-900/10 backdrop-blur-md ${
        isMenuOpen ? "bg-white" : "bg-white/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" onClick={closeMenu} className="flex items-center">
            <Image
              src="/biodavis-wordmark.png"
              alt="BiODAVis"
              width={560}
              height={96}
              priority
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-900/80 transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PIPELINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("primary", "sm")}
            >
              Configure Your Pipeline
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden -mr-2 p-2 text-primary-900"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            className="md:hidden flex flex-col gap-1 border-t border-primary-900/10 py-4"
            aria-label="Main"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-2 py-3 font-medium text-primary-900 hover:bg-primary-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PIPELINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={buttonClasses("primary", "md", "mt-3 w-full")}
            >
              Configure Your Pipeline
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
