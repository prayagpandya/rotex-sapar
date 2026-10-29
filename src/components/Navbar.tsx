"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  Layers, 
  Palette, 
  Building2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { companyData } from "@/data/company";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products", icon: Layers },
    { href: "/colors", label: "Color Palette", icon: Palette },
    { href: "/applications", label: "Applications" },
    { href: "/infrastructure", label: "Infrastructure", icon: Building2 },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 hidden md:block py-2 px-4 sm:px-6 lg:px-8 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span className="font-medium">Direct Factory Manufacturer | 10 - 200 GSM</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center space-x-2">
              <span className="text-slate-400">Directors:</span>
              <a
                href={`tel:${companyData.directors[0].phone}`}
                className="hover:text-sky-400 transition-colors font-medium text-slate-200"
              >
                Nirav Patel: {companyData.directors[0].displayPhone}
              </a>
              <span className="text-slate-600">/</span>
              <a
                href={`tel:${companyData.directors[1].phone}`}
                className="hover:text-sky-400 transition-colors font-medium text-slate-200"
              >
                Prakash Patel: {companyData.directors[1].displayPhone}
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{companyData.email}</span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center space-x-3">
              <a
                href={`https://wa.me/${companyData.directors[0].whatsappNumber}?text=Hi%20Nirav%20Patel%2C%20I%20am%20interested%20in%20Rotex%20PP%20Nonwoven%20Fabric%20Rolls.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-[#25D366] hover:text-emerald-400 transition-colors font-semibold"
                title="WhatsApp Nirav Patel"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Nirav Patel</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={`https://wa.me/${companyData.directors[1].whatsappNumber}?text=Hi%20Prakash%20Patel%2C%20I%20am%20interested%20in%20Rotex%20PP%20Nonwoven%20Fabric%20Rolls.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-[#25D366] hover:text-emerald-400 transition-colors font-semibold"
                title="WhatsApp Prakash Patel"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Prakash Patel</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Clean Light Theme */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/60 border-b border-slate-200/90 py-2.5"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200/70 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name in Single Line */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group py-1 focus:outline-none shrink-0">
              <div className="relative h-7 xs:h-8 sm:h-10 md:h-11 w-18 xs:w-22 sm:w-28 md:w-32 shrink-0 flex items-center">
                <Image
                  src="/images/branding/logo.webp"
                  alt="Rotex Fabric Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 88px, (max-width: 768px) 112px, 128px"
                  className="object-contain object-left transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-[15px] font-black tracking-tight sm:tracking-wider text-orange-600 uppercase whitespace-nowrap group-hover:text-orange-500 transition-colors leading-none">
                ROTEX FABRIC PVT. LTD.
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-sky-700 bg-sky-50 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-sky-600 to-red-600 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button - Prominent Contact Us Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="/contact"
                className="group relative overflow-hidden px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-600 via-blue-700 to-red-600 hover:from-sky-500 hover:to-red-500 shadow-md shadow-sky-600/20 active:scale-95 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-1.5 sm:space-x-2 shrink-0">
              <Link
                href="/contact"
                className="px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-white bg-gradient-to-r from-sky-600 to-red-600 hidden xs:inline-flex sm:hidden shadow-sm"
              >
                Contact
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Light Theme) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-50 bg-white/98 backdrop-blur-xl border-b border-slate-200 p-6 lg:hidden shadow-2xl max-h-[calc(100dvh-68px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-sky-50 text-sky-700 font-bold"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 to-red-600 shadow-md text-center block"
                >
                  Contact Rotex Team
                </Link>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={`tel:${companyData.directors[0].phone}`}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-slate-700 hover:text-sky-700 text-center"
                  >
                    <Phone className="w-4 h-4 text-sky-600 mb-1" />
                    <span className="font-bold text-xs text-slate-900">Nirav Patel</span>
                    <span className="text-xs font-semibold text-slate-700">9925195928</span>
                  </a>
                  <a
                    href={`tel:${companyData.directors[1].phone}`}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-slate-700 hover:text-sky-700 text-center"
                  >
                    <Phone className="w-4 h-4 text-sky-600 mb-1" />
                    <span className="font-bold text-xs text-slate-900">Prakash Patel</span>
                    <span className="text-xs font-semibold text-slate-700">9925195930</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
