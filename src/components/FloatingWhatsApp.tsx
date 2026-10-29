"use client";

import React, { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "@/data/company";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end max-w-[calc(100vw-2rem)]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-sm rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 text-slate-800 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Send Factory Inquiry on WhatsApp</h4>
                  <p className="text-xs text-emerald-800 font-bold">Direct Connect with Company Directors</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close WhatsApp Menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Contacts List */}
            <div className="mt-3 space-y-2.5">
              {companyData.directors.map((director) => (
                <a
                  key={director.name}
                  href={`https://wa.me/${director.whatsappNumber}?text=${encodeURIComponent(director.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {director.name}
                      </div>
                      <div className="text-xs text-slate-700 font-bold">
                        {director.role}
                      </div>
                      <div className="text-xs text-emerald-800 font-bold">
                        +91 {director.whatsappNumber.slice(2)}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-700 font-semibold">
                Typically replies in minutes for bulk roll rates
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button - CIRCULAR WITH OFFICIAL WHATSAPP LOGO */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-950/25 flex items-center justify-center transition-all cursor-pointer group"
        aria-label="Open Direct WhatsApp Chat"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
        </span>
        <WhatsAppIcon className="w-8 h-8 text-white drop-shadow-sm" />
      </motion.button>
    </div>
  );
}
