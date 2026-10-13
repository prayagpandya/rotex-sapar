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
  CheckCircle2, 
  Package, 
  Sparkles 
} from "lucide-react";
import { fabricColors, FabricColor } from "@/data/colors";
import { companyData } from "@/data/company";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Product3DViewer, FabricPatternType } from "@/components/Product3DViewer";

export function ColorSwatchViewer() {
  const [selectedColor, setSelectedColor] = useState<FabricColor>(fabricColors[6]); // Royal Blue
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [pattern, setPattern] = useState<FabricPatternType>("diamond");

  const categories = [
    "All",
    "Neutrals & Earth",
    "Blues & Medical",
    "Greens & Eco",
    "Warm & Vibrant",
    "Deep Luxury"
  ];

  const filteredColors =
    categoryFilter === "All"
      ? fabricColors
      : fabricColors.filter((c) => c.category === categoryFilter);

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-4 sm:p-6 md:p-8 shadow-md relative overflow-hidden">
      {/* Background soft ambient glow matching active color */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: selectedColor.hex }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
        <div>
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider flex items-center space-x-1.5">
            <Palette className="w-3.5 h-3.5" />
            <span>Official Factory Shade Palette</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            21 Standard Non-woven Fabric Color Rolls
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Click any color swatch to preview roll characteristics, recommended GSM, and inquiry details.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                categoryFilter === cat
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Responsive Grid Layout:
          On Mobile (< lg):
            1. 3D Product View (order-1: at the very top!)
            2. Color Chooser Section (order-2: directly below 3D view with smaller circles/boxes!)
            3. Selected Color Details & Inquire CTAs (order-3: directly below swatches)
            4. Non-woven Fabric Technical Assurances & Courier (order-4: at bottom of section)
          On Desktop (lg:):
            Row 1: Swatches Chooser (col 1-7) & 3D Product View (col 8-12) side-by-side
            Row 2: Technical Assurances (col 1-7) & Color Details/CTAs (col 8-12) side-by-side
      */}
      <div className="mt-8 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* BLOCK 1: 3D Product Model
            Mobile: order-1 (at the very top, directly above color choosing!)
            Desktop: lg:col-span-5 lg:col-start-8 lg:row-start-1
        */}
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

        {/* BLOCK 2: Color Choosing Section
            Mobile: order-2 (directly below the 3D product view so color changes are seen instantly!)
            Desktop: lg:col-span-7 lg:col-start-1 lg:row-start-1
        */}
        <div className="order-2 lg:order-none lg:col-span-7 lg:col-start-1 lg:row-start-1 w-full space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                <Palette className="w-3.5 h-3.5 text-sky-600" />
                <span>Select Non-woven Fabric Color Shade</span>
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Tap any shade to apply live color to the 3D roll above.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
              <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200 shadow-2xs">
                {selectedColor.name} ({selectedColor.code})
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

          {/* Interactive Swatches Grid - Decreased size for optimal mobile and desktop compactness */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2 sm:gap-2.5">
            {filteredColors.map((c) => {
              const isSelected = selectedColor.id === c.id;
              return (
                <motion.button
                  key={c.id}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setSelectedColor(c)}
                  className={`group relative flex flex-col items-center p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "border-sky-500 bg-sky-50/80 shadow-sm ring-2 ring-sky-300"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {/* Color Circle Swatch - Decreased size */}
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

                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 mt-1 sm:mt-1.5 truncate w-full text-center leading-tight">
                    {c.name}
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono leading-none mt-0.5">
                    {c.code}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* BLOCK 3: Selected Color Details Card & Inquiry Buttons
            Mobile: order-3 (Immediately below swatches)
            Desktop: lg:col-span-5 lg:col-start-8 lg:row-start-2
        */}
        <div className="order-3 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-2 w-full bg-slate-50/90 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h4 className="text-base font-bold text-slate-900">{selectedColor.fullName}</h4>
                <span className="text-xs text-slate-500 font-medium">Non-woven Fabric Code: {selectedColor.code}</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white text-sky-700 border border-slate-200 shadow-xs">
                {selectedColor.category}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedColor.description}
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-start justify-between">
                <span className="text-slate-500 font-medium">Texture Finish:</span>
                <span className="text-right font-bold text-sky-700">
                  {pattern === "diamond" ? "◇ Diamond Cut (Point-Bond)" : "◌ Smooth Finish"}
                </span>
              </div>

              <div className="flex items-start justify-between">
                <span className="text-slate-500 font-medium">Recommended GSM:</span>
                <span className="text-right font-bold text-slate-900">
                  {selectedColor.recommendedGsm}
                </span>
              </div>

              <div className="flex items-start justify-between gap-2">
                <span className="text-slate-500 font-medium shrink-0">Popular For:</span>
                <span className="text-right font-medium text-slate-700">
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
                <span>Inquire for {selectedColor.name} Rolls</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`https://wa.me/${companyData.directors[0].whatsappNumber}?text=${encodeURIComponent(
                  `Hello Nirav Patel, I want to inquire about availability and pricing for Rotex PP Nonwoven Rolls in ${selectedColor.name} (${selectedColor.code}) color with ${pattern === "diamond" ? "Diamond Cut (Point-Bond)" : "Smooth"} pattern.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Nirav Patel for Samples</span>
              </a>
            </div>
          </div>
        </div>

        {/* BLOCK 4: Non-woven Fabric Technical Assurance & Physical Swatch Book Courier
            Mobile: order-4 (Below details)
            Desktop: lg:col-span-7 lg:col-start-1 lg:row-start-2
        */}
        <div className="order-4 lg:order-none lg:col-span-7 lg:col-start-1 lg:row-start-2 w-full space-y-4">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
            <span>Need custom Pantone or RAL shade matching?</span>
            <Link
              href="/contact"
              className="text-sky-700 hover:text-sky-800 font-bold transition-colors inline-flex items-center space-x-1"
            >
              <span>Request Custom Non-woven Fabric &rarr;</span>
            </Link>
          </div>

          {/* Non-woven Fabric Technical Assurance Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="flex items-center space-x-1.5 text-sky-700 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[11px] font-bold">Delta E &lt; 1.0</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Spectrophotometer verified for zero batch-to-batch shade variation.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="flex items-center space-x-1.5 text-amber-600 mb-1">
                <Sun className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[11px] font-bold">UV Anti-Fade</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Outdoor weatherability with optional 1%–3% HALS stabilizer.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="flex items-center space-x-1.5 text-emerald-600 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[11px] font-bold">Heavy Metal Free</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                RoHS, REACH &amp; food-contact safety compliant non-woven fabrics.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="flex items-center space-x-1.5 text-indigo-600 mb-1">
                <Package className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[11px] font-bold">Ready Stock Buffer</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Standard 21 shades maintained in warehouse for 24h dispatch.
              </p>
            </div>
          </div>

          {/* Active Shade Fast Spec Pill Bar */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-500 font-medium">Selected Shade:</span>
              <span className="font-bold text-slate-900 flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full inline-block border border-slate-300" style={{ backgroundColor: selectedColor.hex }} />
                <span>{selectedColor.fullName} ({selectedColor.code})</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-600">
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
                <span className="px-2 py-0.5 rounded-md bg-sky-600 text-white text-[10px] font-black uppercase tracking-wider">
                  Free B2B Samples
                </span>
                <span className="text-xs font-bold text-slate-900">
                  Request Physical Shade Swatch Book
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Test GSM texture, opacity, and tensile strength before placing bulk orders. Couriered to your plant within 48 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs shrink-0 flex items-center justify-center space-x-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Order Swatch Book</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
