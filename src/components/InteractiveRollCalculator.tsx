"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, RotateCcw, Share2, Layers, Check, FileSpreadsheet } from "lucide-react";
import { fabricRollSpecs, calculateRollWeight, calculateRollLength } from "@/data/fabricRollSpecs";
import { companyData } from "@/data/company";
import { useQuoteModal } from "./QuoteModalContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function InteractiveRollCalculator() {
  const [calcMode, setCalcMode] = useState<"custom" | "lookup">("lookup");
  
  // Custom mode state
  const [gsm, setGsm] = useState<number>(70);
  const [widthMeters, setWidthMeters] = useState<number>(1.6);
  const [lengthMeters, setLengthMeters] = useState<number>(300);
  const [customRollsCount, setCustomRollsCount] = useState<number>(10);

  // Lookup mode state
  const [selectedSpecIndex, setSelectedSpecIndex] = useState<number>(14); // 70 GSM standard
  const [lookupRollsCount, setLookupRollsCount] = useState<number>(20);

  const { openQuoteModal } = useQuoteModal();

  // Selected spec in lookup mode
  const currentLookup = fabricRollSpecs[selectedSpecIndex] || fabricRollSpecs[0];

  // Values depending on mode
  const activeGsm = calcMode === "lookup" ? currentLookup.gsm : gsm;
  const activeWidth = calcMode === "lookup" ? currentLookup.sizeMeters : widthMeters;
  const activeLength = calcMode === "lookup" ? currentLookup.lengthMeters : lengthMeters;
  const activeRollsCount = calcMode === "lookup" ? lookupRollsCount : customRollsCount;

  // Computations
  const singleRollWeightKg = calculateRollWeight(activeGsm, activeWidth, activeLength);
  const totalWeightKg = Number((singleRollWeightKg * activeRollsCount).toFixed(2));
  const totalWeightTons = Number((totalWeightKg / 1000).toFixed(3));
  const squareMetersPerRoll = Number((activeWidth * activeLength).toFixed(1));
  const totalSquareMeters = Number((squareMetersPerRoll * activeRollsCount).toFixed(1));

  // Approximate roll diameter in cm: D = sqrt( (Length * Thickness * 4 / pi) + coreD^2 )
  // Fabric thickness approx 0.0035 cm per 10 GSM. Core diameter 7.6 cm (3 inch core).
  const thicknessCm = (activeGsm / 10) * 0.0035;
  const approxDiameterCm = Math.min(
    95,
    Math.max(
      22,
      Math.round(Math.sqrt((activeLength * 100 * thicknessCm * 4) / Math.PI + 7.6 * 7.6))
    )
  );

  const getWhatsAppShareUrl = () => {
    const text = `*Rotex Roll Weight Calculation:*\n` +
      `• GSM: ${activeGsm} GSM\n` +
      `• Width: ${activeWidth} Meters\n` +
      `• Length: ${activeLength} Meters / Roll\n` +
      `• Roll Net Weight: ~${singleRollWeightKg} kg\n` +
      `• Total Quantity: ${activeRollsCount} rolls (~${totalWeightKg} kg / ${totalWeightTons} MT)\n` +
      `• Total Area: ${totalSquareMeters} sq. meters\n\n` +
      `Please provide best commercial quote for this specification.`;
    return `https://wa.me/${companyData.directors[0].whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Calculator Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center space-x-1">
              <span>Industrial Precision Utility</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              PP Spunbond Roll Weight & Spec Calculator
            </h3>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center p-1 rounded-xl bg-slate-900 border border-slate-700/80 text-center">
          <button
            onClick={() => setCalcMode("lookup")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-center ${
              calcMode === "lookup"
                ? "bg-sky-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Factory Standards Table
          </button>
          <button
            onClick={() => setCalcMode("custom")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-center ${
              calcMode === "custom"
                ? "bg-sky-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Custom Parameters
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 space-y-6">
          {calcMode === "lookup" ? (
            /* Lookup Mode Selection */
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Select Standard Factory Specification (10 - 200 GSM)
                  </label>
                  <span className="text-[11px] text-sky-400 font-medium">
                    31 Standard Configurations
                  </span>
                </div>
                <select
                  value={selectedSpecIndex}
                  onChange={(e) => setSelectedSpecIndex(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium focus:outline-none focus:border-sky-500 text-sm transition-colors cursor-pointer"
                >
                  {fabricRollSpecs.map((spec, index) => (
                    <option key={spec.srNo} value={index}>
                      Sr.{spec.srNo} | {spec.gsm} GSM • {spec.sizeMeters}m Width × {spec.lengthMeters}m Length = {spec.approxNetWeightKg.toFixed(2)} kg/roll
                    </option>
                  ))}
                </select>
              </div>

              {/* Category & Uses Pills */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Classification:</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {currentLookup.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-400">Primary Applications:</span>
                  <span className="text-right text-slate-200 font-medium">
                    {currentLookup.primaryUses.join(", ")}
                  </span>
                </div>
              </div>

              {/* Number of Rolls Input */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Order Quantity (Total Rolls)
                  </label>
                  <span className="text-xs text-sky-400 font-bold">{lookupRollsCount} Rolls</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="150"
                  value={lookupRollsCount}
                  onChange={(e) => setLookupRollsCount(Number(e.target.value))}
                  className="w-full accent-sky-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>1 Roll (Sample)</span>
                  <span>50 Rolls</span>
                  <span>100 Rolls</span>
                  <span>150+ Rolls (Truckload)</span>
                </div>
              </div>
            </div>
          ) : (
            /* Custom Mode Inputs */
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-slate-300">Fabric Weight (GSM)</label>
                  <span className="text-xs font-black text-sky-400">{gsm} GSM</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="1"
                  value={gsm}
                  onChange={(e) => setGsm(Number(e.target.value))}
                  className="w-full accent-sky-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>10 GSM (Ultra-light)</span>
                  <span>70 GSM (Popular Bags)</span>
                  <span>200 GSM (Heavy Duty)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Roll Width (Meters)
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    min="0.1"
                    max="3.2"
                    value={widthMeters}
                    onChange={(e) => setWidthMeters(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                  />
                  <span className="text-[10px] text-slate-500">Standard: 1.6m (1600mm)</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Winding Length (Meters)
                  </label>
                  <input
                    type="number"
                    step="10"
                    min="50"
                    max="2000"
                    value={lengthMeters}
                    onChange={(e) => setLengthMeters(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                  />
                  <span className="text-[10px] text-slate-500">Standard: 200m - 1000m</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-slate-300">Total Rolls</label>
                  <span className="text-xs font-bold text-sky-400">{customRollsCount} Rolls</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="150"
                  value={customRollsCount}
                  onChange={(e) => setCustomRollsCount(Number(e.target.value))}
                  className="w-full accent-sky-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Formula Display Box */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start sm:items-center space-x-3 text-xs text-slate-400">
            <Layers className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
            <div className="min-w-0">
              <span className="text-slate-300 font-semibold block sm:inline">Standard Mathematical Formula: </span>
              <code className="inline-block break-all sm:break-normal text-sky-300 bg-sky-950/60 px-1.5 py-0.5 rounded font-mono text-[10px] sm:text-[11px] mt-1 sm:mt-0">
                Weight (kg) = (GSM × Width[m] × Length[m]) ÷ 1000
              </code>
            </div>
          </div>
        </div>

        {/* Right Output Summary Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/80 rounded-2xl p-6 shadow-xl relative">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Calculation Output
            </span>
            <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 font-mono text-[11px] font-bold">
              {activeGsm} GSM
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {/* Primary Net Weight metric */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Single Roll Net Weight</span>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <span className="text-3xl font-black text-white">{singleRollWeightKg}</span>
                  <span className="text-sm font-semibold text-sky-400">kg / roll</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block">Roll Diameter</span>
                <span className="text-sm font-bold text-slate-200">~{approxDiameterCm} cm</span>
              </div>
            </div>

            {/* Total Order Weight */}
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Rolls:</span>
                <span className="font-bold text-white">{activeRollsCount} Rolls</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Net Weight:</span>
                <span className="font-bold text-emerald-400 text-sm">
                  {totalWeightKg.toLocaleString()} kg ({totalWeightTons} MT)
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Fabric Coverage:</span>
                <span className="font-medium text-slate-300">
                  {totalSquareMeters.toLocaleString()} m²
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Linear Running Meters:</span>
                <span className="font-medium text-slate-300">
                  {(activeLength * activeRollsCount).toLocaleString()} meters
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Send Specs to Director on WhatsApp</span>
              </a>

              <button
                onClick={() =>
                  openQuoteModal({
                    gsm: activeGsm,
                    productName: `PP Spunbond Fabric Rolls (${activeGsm} GSM, ${activeWidth}m Width)`
                  })
                }
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 shadow-md shadow-sky-950 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Request Commercial Price Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
