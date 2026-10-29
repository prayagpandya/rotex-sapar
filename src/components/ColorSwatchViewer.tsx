"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Palette, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Sun, 
  Package, 
  CheckCircle2, 
  Sparkles,
  Phone
} from "lucide-react";
import { fabricColors, FabricColor } from "@/data/colors";
import { companyData } from "@/data/company";
import { Product3DViewer } from "./Product3DViewer";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ColorSwatchViewer() {
  const [selectedColor, setSelectedColor] = useState<FabricColor>(fabricColors[0]); // Default: White
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [pattern, setPattern] = useState<"diamond" | "smooth">("diamond");

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
    <div className="rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 lg:p-9 shadow-lg relative overflow-hidden">
      
      {/* Background ambient decorative glow */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: selectedColor.hex }}
      />

      {/* Header Row with Badge & Live Shade Indicator */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Palette className="w-3.5 h-3.5" />
            <span>Rotex Color Studio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            21 Standard Nonwoven Fabric Color Shades
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-2xl font-medium">
            100% Virgin Polypropylene with food/medical-grade pigment dispersion. Low Delta E (&lt;1.0) ensures batch consistency across roll orders.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 
        MAIN CONTENT GRID
        Mobile order:
          1. 3D Product View (Roll Model)
          2. Color Swatches (Buttons)
          3. Selected Color Details Card & Actions
          4. Technical Assurance & Physical Kit Courier
      */}
      <div className="mt-8 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* BLOCK 1: 3D Product Model */}
        <div className="order-1 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 w-full">
          <Product3DViewer
            colorHex={selectedColor.hex}
            colorName={selectedColor.name}
            colorCode={selectedColor.code}
            textColor={selectedColor.textColor}
            pattern={pattern}
            onPatternChange={setPattern}
          />
        </div>

        {/* BLOCK 2: Color Choosing Section */}
        <div className="order-2 lg:order-none lg:col-span-7 lg:col-start-1 lg:row-start-1 w-full space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                <Palette className="w-3.5 h-3.5 text-sky-600" />
                <span>Select Nonwoven Fabric Color Shade</span>
              </span>
              <p className="text-xs text-slate-800 font-medium mt-0.5">
                Tap any shade to apply live color to the 3D roll above.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
              <span className="text-[10px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200 shadow-2xs">
                {selectedColor.name}
              </span>
              <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200 text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => setPattern("diamond")}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                    pattern === "diamond" ? "bg-white text-sky-700 shadow-2xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Thermal calender diamond point-bonded pattern"
                >
                  ◇ Diamond Cut
                </button>
                <button
                  type="button"
                  onClick={() => setPattern("smooth")}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                    pattern === "smooth" ? "bg-white text-sky-700 shadow-2xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Plain smooth finish"
                >
                  ◌ Smooth
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Swatches Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2 sm:gap-2.5">
            {filteredColors.map((c) => {
              const isSelected = selectedColor.id === c.id;
              return (
                <motion.button
                  key={c.id}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setSelectedColor(c)}
                  aria-label={`Select ${c.name} color swatch`}
                  aria-pressed={isSelected}
                  className={`group relative flex flex-col items-center p-2 rounded-xl sm:rounded-2xl border transition-all cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                    isSelected
                      ? "border-sky-500 bg-sky-50/80 shadow-sm ring-2 ring-sky-300"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {/* Color Circle Swatch */}
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full shadow-inner relative flex items-center justify-center border border-slate-300/90 shrink-0"
                    style={{ backgroundColor: c.hex }}
                  >
                    {isSelected && (
                      <Check
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                          c.textColor === "light" ? "text-white" : "text-slate-900"
                        } font-black drop-shadow`}
                      />
                    )}
                  </div>

                  <span className="text-xs font-bold text-slate-950 mt-1 sm:mt-1.5 line-clamp-2 w-full text-center leading-tight">
                    {c.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* BLOCK 3: Selected Color Details Card & Inquiry Buttons */}
        <div className="order-3 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-2 w-full bg-slate-50/90 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h4 className="text-base font-bold text-slate-900">{selectedColor.fullName}</h4>
                <span className="text-xs text-slate-600 font-medium">Standard Nonwoven Fabric Shade</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white text-sky-700 border border-slate-200 shadow-xs">
                {selectedColor.category}
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {selectedColor.description}
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-start justify-between">
                <span className="text-slate-600 font-medium">Texture Finish:</span>
                <span className="text-right font-bold text-sky-700">
                  {pattern === "diamond" ? "◇ Diamond Cut (Point-Bond)" : "◌ Smooth Finish"}
                </span>
              </div>

              <div className="flex items-start justify-between gap-2">
                <span className="text-slate-600 font-medium shrink-0">Popular For:</span>
                <span className="text-right font-medium text-slate-800">
                  {selectedColor.popularFor}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 space-y-2">
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-600 to-red-600 hover:from-sky-500 hover:to-red-500 shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Inquire for {selectedColor.fullName} Fabric</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={`https://wa.me/${companyData.directors[0].whatsappNumber}?text=${encodeURIComponent(
                    `Hello Nirav Patel, I want to inquire about availability and pricing for Rotex PP Nonwoven in ${selectedColor.fullName} color with ${pattern === "diamond" ? "Diamond Cut (Point-Bond)" : "Smooth"} pattern.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Nirav Patel</span>
                </a>

                <a
                  href={`https://wa.me/${companyData.directors[1].whatsappNumber}?text=${encodeURIComponent(
                    `Hello Prakash Patel, I want to inquire about availability and pricing for Rotex PP Nonwoven in ${selectedColor.fullName} color with ${pattern === "diamond" ? "Diamond Cut (Point-Bond)" : "Smooth"} pattern.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Prakash Patel</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 4: Technical Assurance & Physical Swatch Book Courier */}
        <div className="order-4 lg:order-none lg:col-span-7 lg:col-start-1 lg:row-start-2 w-full space-y-4">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-700 font-medium">
            <span>Need custom Pantone or RAL shade matching?</span>
            <Link
              href="/contact"
              className="text-sky-700 hover:text-sky-800 font-bold transition-colors inline-flex items-center space-x-1"
            >
              <span>Request Custom Nonwoven Fabric &rarr;</span>
            </Link>
          </div>

          {/* Technical Assurance Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-1.5 text-sky-700 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] font-bold">Delta E &lt; 1.0</span>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-tight">
                  Spectrophotometer verified for consistent batch-to-batch shade reproduction.
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-1.5 text-amber-600 mb-1">
                  <Sun className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] font-bold">UV Anti-Fade</span>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-tight">
                  Enhanced outdoor weatherability with UV stabilization additives.
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-1.5 text-emerald-600 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] font-bold">Heavy Metal Free</span>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-tight">
                  Formulated with non-toxic pigments compliant with industrial safety standards.
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-1.5 text-indigo-600 mb-1">
                  <Package className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] font-bold">Ready Stock Buffer</span>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-tight">
                  High-turnover core shades maintained in factory warehouse for prompt dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Active Shade Fast Spec Pill Bar */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-900 font-bold">Selected Shade:</span>
              <span className="font-bold text-slate-900 flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full inline-block border border-slate-300" style={{ backgroundColor: selectedColor.hex }} />
                <span>{selectedColor.fullName}</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-900 font-medium">
              <span><strong>Pattern:</strong> {pattern === "diamond" ? "◇ Diamond Cut" : "◌ Smooth Finish"}</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span><strong>Slit Width:</strong> 50mm – 1600mm</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span><strong>MOQ:</strong> 1 Roll Ready Stock</span>
            </div>
          </div>

          {/* B2B Physical Swatch Ring Courier Callout */}
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/50 to-indigo-50/40 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="space-y-0.5">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded-md bg-sky-700 text-white text-[10px] font-bold uppercase tracking-wider">
                  Physical Samples
                </span>
                <span className="text-xs font-bold text-slate-900">
                  Request a Physical Colour Sample Kit
                </span>
              </div>
              <p className="text-xs text-slate-900 leading-relaxed font-medium">
                Evaluate GSM feel, opacity, tensile hand, and exact color match for your production requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs shrink-0 flex items-center justify-center space-x-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Sample Kit</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
