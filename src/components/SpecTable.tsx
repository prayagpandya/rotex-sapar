"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ArrowUpDown, ArrowRight, FileSpreadsheet } from "lucide-react";
import { fabricRollSpecs } from "@/data/fabricRollSpecs";

export function SpecTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [sortField, setSortField] = useState<"gsm" | "approxNetWeightKg">("gsm");
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const categories = [
    "All",
    "Lightweight (10-35 GSM)",
    "Medium Grade (40-80 GSM)",
    "Heavy Duty (85-200 GSM)"
  ];

  const filteredSpecs = fabricRollSpecs
    .filter((spec) => {
      const matchesCategory =
        categoryFilter === "All" || spec.category === categoryFilter;
      const matchesSearch =
        spec.gsm.toString().includes(searchTerm) ||
        spec.primaryUses.some((use) =>
          use.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      return sortAsc ? valA - valB : valB - valA;
    });

  const toggleSort = (field: "gsm" | "approxNetWeightKg") => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider flex items-center space-x-1.5">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Official Factory Specifications</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            PP Spunbond Fabric Roll Standards (10 - 200 GSM)
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Standard master width 1.6 meters (1600 mm). Custom slitting available upon request.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600" />
          <input
            type="text"
            placeholder="Search GSM or application..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 my-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              categoryFilter === cat
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-center">Sr.</th>
              <th
                onClick={() => toggleSort("gsm")}
                className="px-4 py-3 cursor-pointer hover:text-sky-700 transition-colors"
              >
                <div className="flex items-center space-x-1">
                  <span>GSM</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-4 py-3">Roll Width (Meter)</th>
              <th className="px-4 py-3">Length (Meter)</th>
              <th
                onClick={() => toggleSort("approxNetWeightKg")}
                className="px-4 py-3 cursor-pointer hover:text-sky-700 transition-colors"
              >
                <div className="flex items-center space-x-1">
                  <span>Approx Net Wt. (kg)</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-4 py-3 hidden sm:table-cell">Key Applications</th>
              <th className="px-4 py-3 text-right">Inquiry</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredSpecs.map((spec) => (
              <tr
                key={spec.srNo}
                className="hover:bg-slate-50 transition-colors group"
              >
                <td className="px-4 py-3 text-center text-slate-700 font-mono font-medium">
                  {spec.srNo}
                </td>
                <td className="px-4 py-3 font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  <span className="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700 font-mono font-bold">
                    {spec.gsm} GSM
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-700 font-mono">
                  {spec.sizeMeters.toFixed(1)} m
                </td>
                <td className="px-4 py-3 text-slate-700 font-mono">
                  {spec.lengthMeters} m
                </td>
                <td className="px-4 py-3 font-bold text-emerald-700 font-mono">
                  {spec.approxNetWeightKg.toFixed(2)} kg
                </td>
                <td className="px-4 py-3 text-slate-600 hidden sm:table-cell">
                  {spec.primaryUses.join(", ")}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 hover:bg-sky-600 text-slate-900 hover:text-white transition-all shadow-xs"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-800 gap-2 font-semibold">
        <span>Showing {filteredSpecs.length} of {fabricRollSpecs.length} standard configurations</span>
        <span>Custom slit widths (e.g. 100mm - 1600mm) available upon factory order</span>
      </div>
    </div>
  );
}
