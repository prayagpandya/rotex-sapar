"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Layers, 
  FileSpreadsheet, 
  HelpCircle, 
  Sparkles, 
  ShoppingBag, 
  Truck, 
  ArrowRight
} from "lucide-react";
import { companyData } from "@/data/company";
import { useQuoteModal } from "@/components/QuoteModalContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InteractiveRollCalculator } from "@/components/InteractiveRollCalculator";
import { SpecTable } from "@/components/SpecTable";

export default function CalculatorPage() {
  const { openQuoteModal } = useQuoteModal();

  // Bag yield calculator states
  const [bagGsm, setBagGsm] = useState<number>(70);
  const [bagWidthCm, setBagWidthCm] = useState<number>(30); // 30cm wide
  const [bagHeightCm, setBagHeightCm] = useState<number>(40); // 40cm height
  const [bagGussetCm, setBagGussetCm] = useState<number>(10); // 10cm gusset
  const [rollLengthM, setRollLengthM] = useState<number>(300); // 300m roll (1.6m width)

  // Estimated fabric area per bag in sq meters: (2 * height + gusset) * (width + gusset) / 10000 approx
  const fabricAreaPerBagM2 =
    ((bagHeightCm * 2 + bagGussetCm) * (bagWidthCm + bagGussetCm)) / 10000;
  const rollTotalAreaM2 = 1.6 * rollLengthM;
  const estimatedBagsPerRoll =
    fabricAreaPerBagM2 > 0 ? Math.floor((rollTotalAreaM2 * 0.9) / fabricAreaPerBagM2) : 0; // 90% cutting efficiency
  const bagWeightGrams = Number((fabricAreaPerBagM2 * bagGsm).toFixed(1));

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          <span>Industrial Precision Utility</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          PP Spunbond Fabric Roll Weight Calculator
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Accurately calculate net roll weight, linear length, total square meters, 
          and container payloads for PP Spunbond Nonwoven Fabric Rolls. 
          Grounded directly in our official factory specification standards.
        </p>
      </AnimatedSection>

      {/* Main Interactive Roll Calculator */}
      <AnimatedSection variant="fadeUp">
        <InteractiveRollCalculator />
      </AnimatedSection>

      {/* Secondary Tool: Shopping Bag Production Yield Calculator */}
      <AnimatedSection variant="fadeUp">
        <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Converter Utility
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Nonwoven Shopping Bag Yield Estimator
                </h3>
              </div>
            </div>
            <span className="text-xs text-slate-200 font-semibold">
              For D-Cut, W-Cut &amp; Box Bag Fabric Converters
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Inputs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Fabric GSM
                  </label>
                  <select
                    value={bagGsm}
                    onChange={(e) => setBagGsm(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-sky-500"
                  >
                    <option value="50">50 GSM (Lightweight Bag)</option>
                    <option value="60">60 GSM (Standard Retail)</option>
                    <option value="70">70 GSM (Supermarket Classic)</option>
                    <option value="80">80 GSM (Heavy Duty Bag)</option>
                    <option value="90">90 GSM (Box Bag)</option>
                    <option value="100">100 GSM (Premium Reusable Tote)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Roll Length (1.6m Width)
                  </label>
                  <select
                    value={rollLengthM}
                    onChange={(e) => setRollLengthM(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-sky-500"
                  >
                    <option value="200">200 Meters</option>
                    <option value="300">300 Meters (Standard 70 GSM)</option>
                    <option value="400">400 Meters</option>
                    <option value="500">500 Meters</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Bag Width (cm)
                  </label>
                  <input
                    type="number"
                    value={bagWidthCm}
                    onChange={(e) => setBagWidthCm(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Bag Height (cm)
                  </label>
                  <input
                    type="number"
                    value={bagHeightCm}
                    onChange={(e) => setBagHeightCm(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Gusset/Depth (cm)
                  </label>
                  <input
                    type="number"
                    value={bagGussetCm}
                    onChange={(e) => setBagGussetCm(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Estimated Bag Output (Single Roll)
              </span>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-200 block font-semibold">Estimated Bags / Roll</span>
                  <span className="text-3xl font-black text-amber-400">
                    ~{estimatedBagsPerRoll.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-300 ml-1 font-semibold">bags (90% eff.)</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-200 block font-semibold">Single Bag Weight</span>
                  <span className="text-sm font-bold text-white">~{bagWeightGrams} g</span>
                </div>
              </div>

              <button
                onClick={() =>
                  openQuoteModal({
                    productName: "Nonwoven Shopping Bag Fabric Rolls",
                    gsm: bagGsm
                  })
                }
                className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-amber-600 hover:bg-amber-500 shadow-md transition-all text-center cursor-pointer"
              >
                Inquire Bag Fabric Rolls ({bagGsm} GSM)
              </button>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Complete Official Spec Table (fabric_roll.png) */}
      <AnimatedSection variant="fadeUp">
        <SpecTable />
      </AnimatedSection>

      {/* Mathematical FAQ / Explanation */}
      <AnimatedSection variant="fadeUp">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <h4 className="text-base font-bold text-white flex items-center space-x-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>How Is Nonwoven Fabric Roll Weight Calculated?</span>
            </h4>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              GSM stands for <strong className="text-slate-200">Grams per Square Meter</strong>. 
              Multiplying GSM by the roll width (in meters) and roll length (in meters) yields total grams, 
              which is divided by 1,000 to determine net kilograms.
            </p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-semibold text-sky-300">
              Formula: Weight (kg) = [GSM × Width(m) × Length(m)] / 1000
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <h4 className="text-base font-bold text-white flex items-center space-x-2">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Container Logistics &amp; Payloads</span>
            </h4>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              A standard 20-foot shipping container accommodates approximately <strong className="text-slate-200">5.5 to 6.5 Metric Tons</strong> of PP Spunbond rolls. 
              A 40-foot High Cube (HQ) container accommodates <strong className="text-slate-200">12.5 to 14.5 Metric Tons</strong> depending on roll diameter and GSM compression.
            </p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-semibold text-emerald-300">
              Palletized or Loose Stuffed | Water-Proof Stretch Wrapped
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
