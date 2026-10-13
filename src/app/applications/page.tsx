"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Palette
} from "lucide-react";
import { applicationsData } from "@/data/applications";
import { companyData } from "@/data/company";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ApplicationsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-800">
      
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          <span>Industries &amp; Conversion Sectors</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Where Rotex Nonwoven Performs
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Polypropylene spunbond fabric is one of the world's most versatile, lightweight, 
          and cost-effective textiles. Discover how Rotex precision rolls serve major global industries.
        </p>
      </AnimatedSection>

      {/* In-depth Application Sections */}
      <div className="space-y-16">
        {applicationsData.map((app, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <AnimatedSection key={app.id} variant="fadeUp">
              <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-md overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <Image
                      src={app.image}
                      alt={app.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-white/95 text-xs font-mono text-emerald-700 font-bold border border-slate-200 shadow-sm">
                      Standard Range: {app.typicalGsm}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                        Sector #{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                        {app.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                        {app.fullDesc}
                      </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Key Performance Characteristics:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {app.keyBenefits.map((b, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Typical Products Produced */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Common Finished Products:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {app.itemsProduced.map((item, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-slate-50 text-xs text-slate-700 border border-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Colors & Inquire */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center space-x-2 text-xs text-slate-600">
                        <Palette className="w-4 h-4 text-sky-600" />
                        <span>Recommended Colors:</span>
                        <span className="font-bold text-slate-900">
                          {app.recommendedColors.join(", ")}
                        </span>
                      </div>

                      <Link
                        href="/contact"
                        className="py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all"
                      >
                        Inquire for {app.name}
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <AnimatedSection variant="scaleUp">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Have a Specialized Technical Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our extrusion lines can be tailored with specific melt-flow indices, additives (anti-static, hydrophilic, anti-microbial, flame retardant), and customized slitting widths.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-600 to-red-600 hover:from-sky-500 hover:to-red-500 shadow-md"
            >
              Consult Our Technical Team
            </Link>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
