"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Palette, Check, ArrowRight, Layers, ShieldCheck, SunMedium } from "lucide-react";
import { fabricColors } from "@/data/colors";
import { companyData } from "@/data/company";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ColorSwatchViewer } from "@/components/ColorSwatchViewer";

export default function ColorsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Neutrals & Earth",
    "Blues & Medical",
    "Greens & Eco",
    "Warm & Vibrant",
    "Deep Luxury"
  ];

  const filteredColors =
    activeCategory === "All"
      ? fabricColors
      : fabricColors.filter((c) => c.category === activeCategory);

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-800">
      
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider">
          <Palette className="w-3.5 h-3.5" />
          <span>Official Color Catalog</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          21+ Nonwoven Fabric Color Rolls
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Extruded using high-purity virgin polymer nonwoven fabric formulations. 
          Enjoy flawless color uniformity, zero dye migration, high lightfastness, and skin-safe non-toxic pigments 
          across all 10 to 200 GSM specifications.
        </p>
      </AnimatedSection>

      {/* Interactive Swatch & Roll Simulation Widget */}
      <AnimatedSection variant="fadeUp">
        <ColorSwatchViewer />
      </AnimatedSection>

      {/* Color Benefits Pillars */}
      <AnimatedSection variant="fadeUp">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <SunMedium className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">UV &amp; Lightfast Stability</h3>
            <p className="text-xs text-slate-800 font-medium leading-relaxed">
              Formulated with high-grade optical pigments that resist photodegradation and fading even when exposed to outdoor sunlight and weather.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Skin-Safe &amp; Non-Toxic</h3>
            <p className="text-xs text-slate-800 font-medium leading-relaxed">
              Certified free from heavy metals, formaldehyde, and phthalates. Compliant with medical surgical wear and food-packaging requirements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-rotex-red flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Consistent Batch-to-Batch</h3>
            <p className="text-xs text-slate-800 font-medium leading-relaxed">
              Automated gravimetric nonwoven fabric dosers maintain tight chromatic tolerance (Delta E &lt; 1.0) across high-volume production cycles.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Complete Color Directory Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-black text-slate-900">Full Color Range Directory</h2>
            <p className="text-sm text-slate-700 mt-0.5 font-medium">
              Available across 10 - 200 GSM in 1.6m width rolls.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-sky-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredColors.map((c, idx) => (
            <AnimatedSection key={c.id} variant="fadeUp" delay={idx * 0.04}>
              <div className="h-full rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg p-5 flex flex-col justify-between space-y-4 group transition-all duration-300 shadow-xs">
                
                {/* Visual Swatch */}
                <div
                  className="w-full h-24 rounded-xl shadow-inner border border-slate-200 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className={`font-black text-xs sm:text-sm uppercase tracking-wider text-center px-2 drop-shadow leading-tight ${
                      c.textColor === "light" ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {c.name}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">{c.fullName}</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed line-clamp-2">
                    {c.description}
                  </p>
                </div>

                {/* Action button */}
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="w-full py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-sky-600 hover:text-white transition-colors block text-center shadow-xs"
                  >
                    Inquire {c.name} Rolls
                  </Link>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>



    </div>
  );
}
