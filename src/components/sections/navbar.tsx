"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Menu", href: "#restaurant" },
  { name: "The Bar", href: "#bar" },
  { name: "Events", href: "#events" },
  { name: "About", href: "#about" },
  { name: "Catering", href: "#catering" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#hero" className="flex items-center">
              <Image
                src="/images/fusion-east-logo.png"
                alt="Fusion East"
                width={100}
                height={100}
                className="h-[100px] w-[100px] rounded-full object-cover"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-sm font-medium tracking-wide text-warm-white/70 transition-colors hover:text-gold"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="tel:7189755065"
                className="flex items-center gap-2 text-base font-medium text-warm-white/70 transition-colors hover:text-gold"
              >
                <Phone className="h-5 w-5" />
                <span className="hidden xl:inline">(718) 975-5065</span>
              </a>
              <Link
                href="#contact"
                className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                Reserve a Table
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-warm-white lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-3xl font-bold text-warm-white transition-colors hover:text-gold"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4 flex flex-col items-center gap-4"
              >
                <a
                  href="tel:7189755065"
                  className="flex items-center gap-2 text-warm-white/70"
                >
                  <Phone className="h-5 w-5" />
                  (718) 975-5065
                </a>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full bg-gold px-8 py-3 text-lg font-semibold text-dark"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
