"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { useQuoteModal } from "./QuoteModalContext";
import { fabricColors } from "@/data/colors";
import { companyData } from "@/data/company";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function QuoteModal() {
  const { isOpen, initialData, closeQuoteModal } = useQuoteModal();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productType, setProductType] = useState("PP Spunbond Standard Rolls");
  const [gsm, setGsm] = useState("70");
  const [color, setColor] = useState("WHITE");
  const [quantity, setQuantity] = useState("1000 kg (1 Metric Ton)");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData.productName) setProductType(initialData.productName);
    if (initialData.gsm) setGsm(String(initialData.gsm));
    if (initialData.colorName) setColor(initialData.colorName);
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    closeQuoteModal();
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Quote Request from Rotex Website*\n\n` +
      `*Name:* ${fullName || "Prospective Buyer"}\n` +
      `*Phone:* ${phone ? `+91 ${phone}` : "N/A"}\n` +
      `*Email:* ${email || "N/A"}\n` +
      `*Product:* ${productType}\n` +
      `*GSM:* ${gsm} GSM\n` +
      `*Color:* ${color}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Notes:* ${message || "Please provide best commercial pricing and delivery lead time."}`;
    return encodeURIComponent(text);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuoteModal}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-800 my-auto z-10 max-h-[calc(100dvh-3rem)] overflow-y-auto"
        >
          {/* Top colored edge accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-600 via-blue-700 to-red-600" />

          {/* Close button */}
          <button
            onClick={closeQuoteModal}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="flex items-center space-x-2 text-sky-700 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Instant Factory RFQ</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Request Nonwoven Roll Quotation
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">
                Direct factory pricing for PP Spunbond rolls from Rotex Nonwoven. 10 - 200 GSM, 21+ colors.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shah"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-slate-700">
                        WhatsApp / Mobile No. <span className="text-red-500">*</span>
                      </label>
                      <span className={`text-[10px] font-mono ${phone.length === 10 ? "text-emerald-600 font-bold" : "text-slate-400"}`}>
                        {phone.length}/10 digits
                      </span>
                    </div>
                    <div className="flex rounded-lg border border-slate-300 bg-slate-50 overflow-hidden focus-within:bg-white focus-within:border-sky-500 transition-colors">
                      <span className="inline-flex items-center px-2.5 text-xs font-bold text-slate-600 bg-slate-100/90 border-r border-slate-200 select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="98765 43210"
                        value={phone}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setPhone(digitsOnly);
                        }}
                        className="w-full px-3 py-2 text-sm bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target GSM Range *
                    </label>
                    <select
                      value={gsm}
                      onChange={(e) => setGsm(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    >
                      <option value="15">15 GSM (Medical / Agrofleece)</option>
                      <option value="25">25 GSM (3-Ply Masks / Gowns)</option>
                      <option value="35">35 GSM (Medical Drapes)</option>
                      <option value="50">50 GSM (D-Cut Bags)</option>
                      <option value="60">60 GSM (Standard Bags)</option>
                      <option value="70">70 GSM (Shopping Bags - Most Popular)</option>
                      <option value="80">80 GSM (Heavy Bags / Mattress)</option>
                      <option value="90">90 GSM (Mattress Pocket Springs)</option>
                      <option value="100">100 GSM (Heavy Duty Packaging)</option>
                      <option value="120">120 GSM (Premium Bags)</option>
                      <option value="150">150 GSM (Industrial Liners)</option>
                      <option value="200">200 GSM (High Tensile Heavy Duty)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Color Shade *
                    </label>
                    <select
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    >
                      {fabricColors.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.fullName})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Approx. Order Quantity
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    >
                      <option value="Sample Rolls (Test Order)">Sample Rolls (Test Order)</option>
                      <option value="500 kg - 1 Metric Ton">500 kg - 1 Metric Ton</option>
                      <option value="2 - 5 Metric Tons">2 - 5 Metric Tons</option>
                      <option value="Full Truck Load (10+ Tons)">Full Truck Load (10+ Tons)</option>
                      <option value="Export Container 20ft / 40ft HQ">Export Container 20ft / 40ft HQ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Application Details / Special Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need 1.6m width rolls for shopping bags with UV treatment or custom slitting..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-blue-700 to-red-600 hover:from-sky-500 hover:to-red-500 shadow-lg shadow-sky-600/25 active:scale-[0.99] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Generate Factory Quotation</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4 text-center space-y-5"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-950">Quotation Request Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mt-2">
                  Thank you, <span className="font-bold text-sky-700">{fullName || "Valued Customer"}</span>. 
                  Our sales and engineering desk will review your {gsm} GSM {color} requirement immediately.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
                <div className="flex justify-between text-slate-600">
                  <span>Product:</span> <span className="text-slate-900 font-bold">{productType}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GSM &amp; Color:</span> <span className="text-slate-900 font-bold">{gsm} GSM • {color}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Quantity:</span> <span className="text-slate-900 font-bold">{quantity}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Official Email:</span> <span className="text-sky-700 font-bold">{companyData.email}</span>
                </div>
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <p className="text-xs text-slate-600 font-semibold">
                  Send this inquiry directly to our Directors via WhatsApp for instant pricing:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${companyData.directors[0].whatsappNumber}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Nirav Patel</span>
                  </a>
                  <a
                    href={`https://wa.me/${companyData.directors[1].whatsappNumber}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Prakash Patel</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
