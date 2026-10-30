"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ShieldCheck, 
  Recycle, 
  Layers
} from "lucide-react";
import { companyData } from "@/data/company";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-800 relative overflow-hidden">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* 4 Column Structure with Exact Row 1 (Content) and Row 2 (Actions) Alignment on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-10 xl:gap-x-12 gap-y-6 items-start">
          
          {/* Column 1 Top: Brand & Overview (2 cols on large) */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 md:col-span-2 md:col-start-1 md:row-start-1 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3 group py-1 focus:outline-none">
              <div className="relative h-10 sm:h-12 w-28 sm:w-36 shrink-0">
                <Image
                  src="/images/branding/logo.webp"
                  alt="Rotex Fabric Logo"
                  fill
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-contain object-left transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-black tracking-wider text-orange-600 uppercase leading-none group-hover:text-orange-500 transition-colors whitespace-nowrap">
                ROTEX FABRIC PVT. LTD.
              </span>
            </Link>

            <p className="text-sm text-slate-800 leading-relaxed max-w-md font-medium">
              Leading precision manufacturer and exporter of 100% Virgin Polypropylene (PP) 
              Spunbond Nonwoven Fabric. Supplying packaging, medical PPE, agriculture fleece, 
              eco-friendly bags, furniture pocket springs, and filtration sectors across India and worldwide.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-900 shadow-sm font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Virgin Polymer</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-900 shadow-sm font-bold">
                <Recycle className="w-3.5 h-3.5 text-sky-600" />
                <span>100% Recyclable PP (#5)</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-900 shadow-sm font-bold">
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>10 - 200 GSM</span>
              </div>
            </div>
          </div>

          {/* Column 1 Bottom: Contact Factory Sales Desk */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 md:col-span-2 md:col-start-1 md:row-start-2 flex items-start">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-600 to-red-600 hover:from-sky-500 hover:to-red-500 transition-all shadow-md"
            >
              <span>Contact Factory Sales Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Column 2 Top: Quick Links */}
          <div className="lg:col-span-1 lg:col-start-3 lg:row-start-1 md:col-span-1 md:col-start-1 md:row-start-3 space-y-4">
            <h4 className="text-sm font-black text-slate-950 uppercase tracking-wider border-l-2 border-sky-600 pl-2.5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products" className="text-slate-800 hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-semibold">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link href="/colors" className="text-slate-800 hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-semibold">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>21+ Color Swatches</span>
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-slate-800 hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-semibold">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Industry Applications</span>
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-slate-800 hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-semibold">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Extrusion &amp; Quality Lab</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-800 hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-semibold">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>About Rotex</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-800 hover:text-sky-700 transition-colors flex items-center space-x-1.5 font-semibold">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Contact Directors</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 Bottom: Nirav Patel WhatsApp */}
          <div className="lg:col-span-1 lg:col-start-3 lg:row-start-2 md:col-span-1 md:col-start-1 md:row-start-4 flex items-start">
            <a
              href={`https://wa.me/${companyData.directors[0].whatsappNumber}?text=${encodeURIComponent(companyData.directors[0].whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs text-center"
              title="WhatsApp Nirav Patel"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>Nirav Patel</span>
            </a>
          </div>

          {/* Column 3 Top: Fabric Specifications Range */}
          <div className="lg:col-span-1 lg:col-start-4 lg:row-start-1 md:col-span-1 md:col-start-2 md:row-start-3 space-y-4">
            <h4 className="text-sm font-black text-slate-950 uppercase tracking-wider border-l-2 border-red-600 pl-2.5">
              Product Types
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/products" className="text-slate-800 hover:text-sky-700 transition-colors">
                  PP Spunbond Nonwoven Fabric
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-800 hover:text-sky-700 transition-colors">
                  Medical &amp; Hygiene Nonwoven
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-800 hover:text-sky-700 transition-colors">
                  UV Agrofleece Crop Cover
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-800 hover:text-sky-700 transition-colors">
                  D-Cut, U-Cut &amp; Box Bag Fabric Rolls
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-800 hover:text-sky-700 transition-colors">
                  Pocket Spring Mattress Nonwoven
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-800 hover:text-sky-700 transition-colors">
                  Hydrophilic Absorbent Fabric
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 Bottom: Prakash Patel WhatsApp */}
          <div className="lg:col-span-1 lg:col-start-4 lg:row-start-2 md:col-span-1 md:col-start-2 md:row-start-4 flex items-start">
            <a
              href={`https://wa.me/${companyData.directors[1].whatsappNumber}?text=${encodeURIComponent(companyData.directors[1].whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs text-center"
              title="WhatsApp Prakash Patel"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>Prakash Patel</span>
            </a>
          </div>

          {/* Column 4 Top: Official Address */}
          <div className="lg:col-span-1 lg:col-start-5 lg:row-start-1 md:col-span-2 md:col-start-1 md:row-start-5 space-y-4">
            <h4 className="text-sm font-black text-slate-950 uppercase tracking-wider border-l-2 border-emerald-600 pl-2.5">
              Factory &amp; Contact
            </h4>

            {/* Full Official Company Address Block */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-xs text-slate-900 leading-relaxed font-semibold">
              <div className="font-black text-slate-950 mb-1 text-xs">Rotex Fabric Pvt.Ltd.</div>
              <div className="text-xs text-slate-800 space-y-0.5 font-medium">
                <p>Survey No.275/1/P,</p>
                <p>Plot No.22/23,</p>
                <p>Gujarat Alloy Cast Gate,</p>
                <p>Shapar Main Road,</p>
                <p>At : Shapar (Veraval) 360024.</p>
                <p>Tal : Kotda Sangani,</p>
                <p>Dist : Rajkot.- Gujarat.</p>
                <p className="pt-1">
                  <strong>E-mail: </strong>
                  <a href="mailto:rotexfab@yahoo.com" className="text-sky-700 hover:underline font-bold">
                    rotexfab@yahoo.com
                  </a>
                </p>
                <p>
                  <strong>Web: </strong>
                  <a href="https://www.rotexfabric.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline font-bold">
                    www.rotexfabric.com
                  </a>
                </p>
                <p className="font-black text-slate-950 pt-0.5">
                  <strong>GSTIN: </strong>24AAECR5787J1ZW
                </p>
              </div>
            </div>
          </div>

          {/* Column 4 Bottom: Plant & Office Hours Card */}
          <div className="lg:col-span-1 lg:col-start-5 lg:row-start-2 md:col-span-2 md:col-start-1 md:row-start-6 flex items-start">
            <div className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 space-y-0.5 shadow-2xs">
              <span className="font-bold text-slate-950 block text-[11px] uppercase tracking-wider">Office &amp; Plant Hours:</span>
              <p className="text-xs text-slate-800 font-semibold">Thursday – Tuesday: 10:00 AM – 7:00 PM</p>
              <p className="text-xs text-red-600 font-bold">Wednesday: Closed / Holiday</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-800 gap-4 text-center sm:text-left font-semibold">
          <p>© {new Date().getFullYear()} Rotex Fabric Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1.5 text-slate-800">
            <span>PP Spunbond Fabric (10 - 200 GSM)</span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <Link href="/contact" className="hover:text-slate-950 transition-colors font-bold text-sky-700">
              Shapar (Rajkot) Factory Desk &amp; Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
