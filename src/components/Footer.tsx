"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Recycle, 
  Sparkles,
  Layers
} from "lucide-react";
import { companyData } from "@/data/company";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 relative overflow-hidden">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 xl:gap-12">
          
          {/* Column 1: Brand & Overview (2 cols on large) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block group py-1">
              <div className="relative h-14 sm:h-16 w-48 sm:w-56">
                <Image
                  src="/images/branding/logo.webp"
                  alt="Rotex Nonwoven Fabrics Logo"
                  fill
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-contain object-left transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Leading precision manufacturer and exporter of 100% Virgin Polypropylene (PP) 
              Spunbond Nonwoven Fabric Rolls. Supplying medical PPE, agriculture fleece, 
              eco-friendly bags, furniture pocket springs, and filtration sectors across India and worldwide.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-700 shadow-sm font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-700 shadow-sm font-medium">
                <Recycle className="w-3.5 h-3.5 text-sky-600" />
                <span>100% Recyclable PP (#5)</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-700 shadow-sm font-medium">
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>10 - 200 GSM</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-600 to-red-600 hover:from-sky-500 hover:to-red-500 transition-all shadow-md"
              >
                <span>Contact Factory Sales Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-l-2 border-sky-600 pl-2.5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products" className="hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-medium">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link href="/colors" className="hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-medium">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>21+ Color Swatches</span>
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-medium">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Industry Applications</span>
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-medium">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Extrusion &amp; Quality Lab</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-medium">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>About Rotex</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-medium">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Contact Directors</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Fabric Specifications Range */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-l-2 border-red-600 pl-2.5">
              Product Types
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/products" className="hover:text-sky-700 transition-colors">
                  Standard PP Spunbond Rolls
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-700 transition-colors">
                  Medical &amp; Hygiene Nonwoven
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-700 transition-colors">
                  UV Agrofleece Crop Cover
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-700 transition-colors">
                  D-Cut &amp; Box Bag Fabric Rolls
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-700 transition-colors">
                  Pocket Spring Mattress Nonwoven
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-700 transition-colors">
                  Hydrophilic Absorbent Fabric
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Leadership Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-l-2 border-emerald-600 pl-2.5">
              Direct Contact
            </h4>

            <div className="space-y-3">
              {/* Director 1: Nirav Patel */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Nirav Patel</span>
                  <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-semibold">Director</span>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <a
                    href={`tel:${companyData.directors[0].phone}`}
                    className="flex-1 inline-flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-slate-50 text-xs font-bold text-sky-700 hover:text-sky-900 hover:bg-slate-100 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>9925195928</span>
                  </a>
                  <a
                    href={`https://wa.me/${companyData.directors[0].whatsappNumber}?text=${encodeURIComponent(companyData.directors[0].whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all shadow-xs"
                    title="WhatsApp Nirav Patel"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Director 2: Prakash Patel */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Prakash Patel</span>
                  <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-semibold">Director</span>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <a
                    href={`tel:${companyData.directors[1].phone}`}
                    className="flex-1 inline-flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-slate-50 text-xs font-bold text-sky-700 hover:text-sky-900 hover:bg-slate-100 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>9925195930</span>
                  </a>
                  <a
                    href={`https://wa.me/${companyData.directors[1].whatsappNumber}?text=${encodeURIComponent(companyData.directors[1].whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all shadow-xs"
                    title="WhatsApp Prakash Patel"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Email & Web */}
              <div className="pt-1 space-y-1.5 text-xs text-slate-700">
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center space-x-2 hover:text-sky-700 transition-colors font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{companyData.email}</span>
                </a>
                <a
                  href="https://www.rotexfabric.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sky-700 hover:text-sky-800 transition-colors font-semibold"
                >
                  <span>Web: www.rotexfabric.com</span>
                </a>
              </div>

              {/* Plant Location Snippet */}
              <div className="pt-1 text-[11px] text-slate-500 flex items-start space-x-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span>Survey No. 275/1/P, Plot 22/23, Shapar Main Rd, Shapar (Veraval) 360024, Rajkot, Gujarat</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Rotex Fabric Pvt. Ltd. All Rights Reserved. Reg. Trademark Rotex®.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1.5">
            <span>PP Spunbond Fabric Rolls (10 - 200 GSM)</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/contact" className="hover:text-slate-800 transition-colors font-semibold">
              Shapar (Rajkot) Factory Desk &amp; Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
