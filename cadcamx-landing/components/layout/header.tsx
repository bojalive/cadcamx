"use client";

import { useState } from "react";
import { FaCube, FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/90 backdrop-blur border-b border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-accent-gold to-accent-orange rounded-lg flex items-center justify-center">
              <FaCube className="text-primary-dark text-lg" />
            </div>
            <span className="text-2xl font-bold gradient-text">CADCAMX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-white hover:text-accent-gold transition-colors font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-accent-gold transition-colors font-medium cursor-pointer"
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-white hover:text-accent-gold transition-colors font-medium cursor-pointer"
            >
              Services
            </a>
            <a
              href="/case-studies"
              className="text-white hover:text-accent-gold transition-colors font-medium cursor-pointer"
            >
              Case Studies
            </a>
            <a
              href="/pricing"
              className="text-white hover:text-accent-gold transition-colors font-medium cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="text-white hover:text-accent-gold transition-colors font-medium cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/contact'}
              className="hidden md:block border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark"
            >
              Get Quote
            </Button>
            <Button
              onClick={() => window.location.href = '/contact'}
              className="bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark hover:shadow-lg hover:shadow-accent-gold/25 font-bold"
            >
              Start Project
            </Button>
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <a
              href="/"
              className="block text-white hover:text-accent-gold transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-white hover:text-accent-gold transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="/services"
              className="block text-white hover:text-accent-gold transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="/case-studies"
              className="block text-white hover:text-accent-gold transition-colors font-medium"
            >
              Case Studies
            </a>
            <a
              href="/pricing"
              className="block text-white hover:text-accent-gold transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="block text-white hover:text-accent-gold transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
