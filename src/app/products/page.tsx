"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, ArrowRight, Sparkles, Filter, CheckCircle2 } from "lucide-react";
import { productsData } from "@/data/products";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SpecTable } from "@/components/SpecTable";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = [
    "All",
    "Standard Spunbond",
    "Medical & Hygiene",
    "Agriculture",
    "Packaging & Bags",
    "Furniture & Bedding",
    "Hydrophilic"
  ];

  const filteredProducts = productsData.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Standard Spunbond" && p.slug.includes("standard")) return true;
    if (activeFilter === "Medical & Hygiene" && p.slug.includes("medical")) return true;
    if (activeFilter === "Agriculture" && p.slug.includes("agriculture")) return true;
    if (activeFilter === "Packaging & Bags" && p.slug.includes("packaging")) return true;
    if (activeFilter === "Furniture & Bedding" && p.slug.includes("furniture")) return true;
    if (activeFilter === "Hydrophilic" && p.slug.includes("hydrophilic")) return true;
    return false;
  });

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-800">
      
      {/* Page Header */}
      <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Product Range &amp; Catalog</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          PP Spunbond Nonwoven Fabric Rolls
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          100% Virgin Polypropylene rolls manufactured on continuous filament spunbond extrusion lines. 
          Available from <span className="text-sky-700 font-bold">10 GSM to 200 GSM</span> in 
          standard 1.6m width with specialized treatments (Hydrophilic, Hydrophobic, UV, Anti-Static).
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === tab
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, idx) => (
          <AnimatedSection
            key={product.id}
            variant="fadeUp"
            delay={idx * 0.08}
            className="flex flex-col"
          >
            <Link
              href={`/products/${product.slug}`}
              className="h-full rounded-3xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-sm cursor-pointer"
            >
              {/* Image & Badges */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {product.highlightBadge && (
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-indigo-600 text-white shadow-md">
                    {product.highlightBadge}
                  </div>
                )}

                <div className="absolute bottom-3.5 left-3.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-xs font-mono text-sky-700 border border-slate-200 font-bold shadow-xs">
                  {product.gsmRange}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Key features bullets */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {product.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700 group-hover:text-sky-800 transition-colors">
                  <span>Explore Technical Specifications</span>
                  <span className="py-2 px-3.5 rounded-xl bg-sky-50 group-hover:bg-sky-600 group-hover:text-white flex items-center space-x-1.5 transition-all shadow-xs">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

              </div>

            </Link>
          </AnimatedSection>
        ))}
      </div>

      {/* Technical Specifications Matrix */}
      <AnimatedSection variant="fadeUp" className="pt-8">
        <SpecTable />
      </AnimatedSection>

      {/* Bottom Contact / Inquire banner */}
      <AnimatedSection variant="scaleUp">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Need Custom GSM, Roll Slitting, or Specific Non-woven Fabric?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Our factory engineers can slit master rolls down to any required width (from 100mm to 1600mm) 
              and formulate custom additives like UV inhibitors, surfactants, and flame retardants.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-600 to-red-600 hover:from-sky-500 hover:to-red-500 shadow-md"
            >
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
