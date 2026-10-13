"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  HelpCircle,
  AlertCircle
} from "lucide-react";
import confetti from "canvas-confetti";
import { companyData } from "@/data/company";
import { fabricColors } from "@/data/colors";
import { faqData } from "@/data/faq";
import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Regex validation rules
const NAME_REGEX = /^[a-zA-Z\s.'-]{2,50}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const COMPANY_REGEX = /^[a-zA-Z0-9\s.,&'()/-]{2,100}$/;

const validatePhoneValue = (val: string): { valid: boolean; message?: string } => {
  const digits = val.replace(/\D/g, "");
  if (!digits) {
    return { valid: false, message: "Mobile / WhatsApp number is required." };
  }
  if (digits.length !== 10) {
    return { valid: false, message: `Contact number must be exactly 10 digits (currently ${digits.length}/10).` };
  }
  if (!PHONE_REGEX.test(digits)) {
    return { valid: false, message: "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9." };
  }
  return { valid: true };
};

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productType, setProductType] = useState("PP Spunbond Standard Rolls");
  const [gsm, setGsm] = useState("70");
  const [color, setColor] = useState("WHITE");
  const [quantity, setQuantity] = useState("1000 kg (1 Metric Ton)");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Validation state
  const [errors, setErrors] = useState<{
    fullName?: string;
    phone?: string;
    email?: string;
    company?: string;
  }>({});
  const [touched, setTouched] = useState<{
    fullName?: boolean;
    phone?: boolean;
    email?: boolean;
    company?: boolean;
  }>({});

  const validateField = (field: string, value: string): string | undefined => {
    if (field === "fullName") {
      if (!value.trim()) return "Full Name is required.";
      if (!NAME_REGEX.test(value.trim())) {
        return "Please enter a valid name (letters & spaces only, 2-50 characters).";
      }
    }
    if (field === "phone") {
      const res = validatePhoneValue(value);
      if (!res.valid) {
        return res.message;
      }
    }
    if (field === "email") {
      if (value.trim() && !EMAIL_REGEX.test(value.trim())) {
        return "Please enter a valid email address (e.g. buyer@company.com).";
      }
    }
    if (field === "company") {
      if (value.trim() && !COMPANY_REGEX.test(value.trim())) {
        return "Please enter a valid business/company name.";
      }
    }
    return undefined;
  };

  const generateCombinedMessage = () => {
    const cleanPhone = phone.trim() ? `+91 ${phone.trim()}` : "Not Provided";
    const cleanName = fullName.trim();
    const cleanCompany = company.trim() || "Individual / Not Specified";
    const cleanEmail = email.trim() || "Not Provided";
    const cleanNotes = message.trim() || "Please provide best wholesale factory pricing, roll delivery schedule, and sample availability.";

    return (
      `*NEW INQUIRY - ROTEX NONWOVEN FABRICS*\n` +
      `----------------------------------------\n` +
      `*Name:* ${cleanName}\n` +
      `*Company:* ${cleanCompany}\n` +
      `*Mobile / WhatsApp:* ${cleanPhone}\n` +
      `*Email:* ${cleanEmail}\n\n` +
      `*Product:* ${productType}\n` +
      `*Target GSM:* ${gsm} GSM\n` +
      `*Color Shade:* ${color}\n` +
      `*Estimated Quantity:* ${quantity}\n\n` +
      `*Application / Notes:*\n${cleanNotes}\n` +
      `----------------------------------------\n` +
      `_Inquiry submitted via Rotex Nonwoven Website Contact Desk_`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameErr = validateField("fullName", fullName);
    const phoneErr = validateField("phone", phone);
    const emailErr = validateField("email", email);
    const companyErr = validateField("company", company);

    const validationErrors: typeof errors = {};
    if (nameErr) validationErrors.fullName = nameErr;
    if (phoneErr) validationErrors.phone = phoneErr;
    if (emailErr) validationErrors.email = emailErr;
    if (companyErr) validationErrors.company = companyErr;

    setErrors(validationErrors);
    setTouched({ fullName: true, phone: true, email: true, company: true });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Combine all form values into structured WhatsApp message
    const combinedMessage = generateCombinedMessage();
    const encodedMessage = encodeURIComponent(combinedMessage);

    // Primary Director WhatsApp link (Nirav Patel: +91 99251 95928)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919925195928&text=${encodedMessage}`;

    // Automatically open WhatsApp with pre-composed text
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 120,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-800">
      
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider">
          <Phone className="w-3.5 h-3.5" />
          <span>Direct Contact &amp; Inquiry</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Connect with Rotex Nonwoven
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Request wholesale fabric roll pricing, schedule plant audits, or order sample swatch books. 
          Connect directly with our Directors Nirav Patel &amp; Prakash Patel.
        </p>
      </AnimatedSection>

      {/* Main Grid: Direct Contact Cards & Interactive RFQ Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Contact Info & Director Cards */}
        <div className="lg:col-span-5 space-y-6">
          <AnimatedSection variant="fadeUp">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">Direct Leadership Contacts</h2>

              {/* Director 1: Nirav Patel */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 text-white font-bold text-base flex items-center justify-center shadow-xs">
                    NP
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Nirav Patel</h3>
                    <p className="text-xs text-sky-700 font-bold">Director - Commercial &amp; Sales</p>
                    <p className="text-[11px] text-slate-500">Rotex Nonwoven Fabrics</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Phone / WhatsApp:</span>
                    <a href="tel:+919925195928" className="font-bold text-slate-900 hover:text-sky-700">
                      +91 99251 95928
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Email:</span>
                    <a href={`mailto:${companyData.email}`} className="text-sky-700 hover:underline font-bold">
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:+919925195928"
                    className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 flex items-center justify-center space-x-1.5 transition-colors border border-slate-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>Call Nirav Patel</span>
                  </a>
                  <a
                    href={`https://wa.me/919925195928?text=${encodeURIComponent(companyData.directors[0].whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-xs font-bold text-white flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Director 2: Prakash Patel */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-red-600 text-white font-bold text-base flex items-center justify-center shadow-xs">
                    PP
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Prakash Patel</h3>
                    <p className="text-xs text-sky-700 font-bold">Director - Operations &amp; Production</p>
                    <p className="text-[11px] text-slate-500">Rotex Nonwoven Fabrics</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Phone / WhatsApp:</span>
                    <a href="tel:+919925195930" className="font-bold text-slate-900 hover:text-sky-700">
                      +91 99251 95930
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Email:</span>
                    <a href={`mailto:${companyData.email}`} className="text-sky-700 hover:underline font-bold">
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:+919925195930"
                    className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 flex items-center justify-center space-x-1.5 transition-colors border border-slate-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>Call Prakash Patel</span>
                  </a>
                  <a
                    href={`https://wa.me/919925195930?text=${encodeURIComponent(companyData.directors[1].whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-xs font-bold text-white flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Plant Location & Operating Hours */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs text-slate-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 block text-xs">Rotex Fabric Pvt. Ltd. (Factory Address):</span>
                    <p className="text-[11px] text-slate-700 leading-relaxed font-medium">
                      Survey No. 275/1/P, Plot No. 22/23,<br />
                      Gujarat Alloy Cast Gate, Shapar Main Road,<br />
                      At :- Shapar (Veraval) 360024.<br />
                      Tal :- Kotda Sangani, Dist :- Rajkot, Gujarat.
                    </p>
                    <div className="pt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-600 border-t border-slate-100">
                      <span><strong>Web:</strong> <a href="https://www.rotexfabric.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">www.rotexfabric.com</a></span>
                      <span><strong>Email:</strong> <a href={`mailto:${companyData.email}`} className="text-sky-700 hover:underline">{companyData.email}</a></span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 pt-1 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Plant &amp; Office Hours:</span>
                    <span>{companyData.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Interactive RFQ Form */}
        <div className="lg:col-span-7">
          <AnimatedSection variant="scaleUp">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-md relative">
              
              {!isSubmitted ? (
                <div>
                  <div className="flex items-center space-x-2 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Official Factory Contact &amp; RFQ</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Send an Inquiry to Rotex
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 mb-6">
                    Fill out your desired specifications or questions. Our directors will review and respond directly within 2 business hours.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Niranjan Shah"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (touched.fullName) {
                              setErrors((prev) => ({
                                ...prev,
                                fullName: validateField("fullName", e.target.value),
                              }));
                            }
                          }}
                          onBlur={() => {
                            setTouched((prev) => ({ ...prev, fullName: true }));
                            setErrors((prev) => ({
                              ...prev,
                              fullName: validateField("fullName", fullName),
                            }));
                          }}
                          className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
                            errors.fullName && touched.fullName
                              ? "border-red-400 bg-red-50/20 focus:border-red-500"
                              : "border-slate-300 focus:border-sky-500"
                          }`}
                        />
                        {errors.fullName && touched.fullName && (
                          <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company / Business Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Bag Converters Pvt Ltd (Optional)"
                          value={company}
                          onChange={(e) => {
                            setCompany(e.target.value);
                            if (touched.company) {
                              setErrors((prev) => ({
                                ...prev,
                                company: validateField("company", e.target.value),
                              }));
                            }
                          }}
                          onBlur={() => {
                            setTouched((prev) => ({ ...prev, company: true }));
                            setErrors((prev) => ({
                              ...prev,
                              company: validateField("company", company),
                            }));
                          }}
                          className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
                            errors.company && touched.company
                              ? "border-red-400 bg-red-50/20 focus:border-red-500"
                              : "border-slate-300 focus:border-sky-500"
                          }`}
                        />
                        {errors.company && touched.company && (
                          <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.company}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-bold text-slate-700">
                            Mobile / WhatsApp No. <span className="text-red-500">*</span>
                          </label>
                          <span className={`text-[10px] font-mono ${phone.length === 10 ? "text-emerald-600 font-bold" : "text-slate-400"}`}>
                            {phone.length}/10 digits
                          </span>
                        </div>
                        <div className={`flex rounded-xl border transition-colors bg-slate-50 overflow-hidden focus-within:bg-white focus-within:border-sky-500 ${
                          errors.phone && touched.phone
                            ? "border-red-400 bg-red-50/20"
                            : "border-slate-300"
                        }`}>
                          <span className="inline-flex items-center px-3 text-xs font-bold text-slate-600 bg-slate-100/90 border-r border-slate-200 select-none">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="98250 12345"
                            value={phone}
                            onChange={(e) => {
                              // Restrict input strictly to digits and max 10 digits
                              const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                              setPhone(digitsOnly);
                              if (touched.phone) {
                                setErrors((prev) => ({
                                  ...prev,
                                  phone: validateField("phone", digitsOnly),
                                }));
                              }
                            }}
                            onBlur={() => {
                              setTouched((prev) => ({ ...prev, phone: true }));
                              setErrors((prev) => ({
                                ...prev,
                                phone: validateField("phone", phone),
                              }));
                            }}
                            className="w-full px-3 py-2.5 text-xs bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
                          />
                        </div>
                        {errors.phone && touched.phone && (
                          <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. buyer@acme.com (Optional)"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (touched.email) {
                              setErrors((prev) => ({
                                ...prev,
                                email: validateField("email", e.target.value),
                              }));
                            }
                          }}
                          onBlur={() => {
                            setTouched((prev) => ({ ...prev, email: true }));
                            setErrors((prev) => ({
                              ...prev,
                              email: validateField("email", email),
                            }));
                          }}
                          className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
                            errors.email && touched.email
                              ? "border-red-400 bg-red-50/20 focus:border-red-500"
                              : "border-slate-300 focus:border-sky-500"
                          }`}
                        />
                        {errors.email && touched.email && (
                          <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Target GSM <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={gsm}
                          onChange={(e) => setGsm(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors cursor-pointer"
                        >
                          <option value="15">15 GSM (Agro Fleece / Mask inner)</option>
                          <option value="25">25 GSM (3-Ply Surgical Mask / Gown)</option>
                          <option value="35">35 GSM (Medical Bed Cover / Drape)</option>
                          <option value="50">50 GSM (D-Cut Bags)</option>
                          <option value="60">60 GSM (Standard Bags)</option>
                          <option value="70">70 GSM (Supermarket Bags - Popular)</option>
                          <option value="80">80 GSM (Heavy Bags / Mattress)</option>
                          <option value="90">90 GSM (Mattress Pocket Springs)</option>
                          <option value="100">100 GSM (Reinforced Packaging)</option>
                          <option value="120">120 GSM (Luggage / Heavy Sacks)</option>
                          <option value="150">150 GSM (Industrial Liners)</option>
                          <option value="200">200 GSM (Maximum Density)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Fabric Color Shade <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors cursor-pointer"
                        >
                          {fabricColors.map((c) => (
                            <option key={c.id} value={c.name}>
                              {c.name} ({c.fullName})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Product Type
                        </label>
                        <select
                          value={productType}
                          onChange={(e) => setProductType(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors cursor-pointer"
                        >
                          <option value="PP Spunbond Standard Rolls">PP Spunbond Standard Rolls</option>
                          <option value="Medical & Hygiene Rolls">Medical &amp; Hygiene Rolls</option>
                          <option value="Agriculture UV Crop Protection">Agriculture UV Crop Protection</option>
                          <option value="Packaging & Carry Bag Rolls">Packaging &amp; Carry Bag Rolls</option>
                          <option value="Furniture & Mattress Springs">Furniture &amp; Mattress Springs</option>
                          <option value="Hydrophilic Fast-Absorbing">Hydrophilic Fast-Absorbing</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Order Quantity
                        </label>
                        <select
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors cursor-pointer"
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
                        Application Details / Custom Slitting Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Required roll slit width, delivery destination, sample requests..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center space-x-2 transition-all cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                        <span>Send Factory Inquiry via WhatsApp</span>
                      </button>
                      <p className="text-[11px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                        <span>Clicking validates your entries &amp; opens WhatsApp with your pre-written inquiry. Just tap Enter!</span>
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-6 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                      <WhatsAppIcon className="w-3 h-3 text-[#25D366]" />
                      <span>WhatsApp Opened</span>
                    </span>
                    <h3 className="text-2xl font-black text-slate-950">Inquiry Generated &amp; Ready!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <span className="font-bold text-slate-900">{fullName}</span>. 
                      WhatsApp has opened in a new tab with your inquiry details pre-written. 
                      Simply tap <strong>Enter</strong> in WhatsApp to send your message directly to Director Nirav Patel.
                    </p>
                  </div>

                  {/* Order Specs Summary (No raw message text) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between text-slate-500">
                      <span>Product:</span> <span className="text-slate-900 font-bold">{productType}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Specifications:</span> <span className="text-slate-900 font-bold">{gsm} GSM • {color}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Order Quantity:</span> <span className="text-slate-900 font-bold">{quantity}</span>
                    </div>
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <p className="text-xs text-slate-600 font-semibold">
                      If WhatsApp didn&apos;t open automatically, click a button below to launch:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a
                        href={`https://api.whatsapp.com/send?phone=919925195928&text=${encodeURIComponent(generateCombinedMessage())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white" />
                        <span>Nirav Patel (+91 99251 95928)</span>
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?phone=919925195930&text=${encodeURIComponent(generateCombinedMessage())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                        <span>Prakash Patel (+91 99251 95930)</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrors({});
                        setTouched({});
                      }}
                      className="px-6 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </AnimatedSection>
        </div>

      </div>

      {/* Frequently Asked Questions Accordion */}
      <AnimatedSection variant="fadeUp" className="max-w-4xl mx-auto space-y-6 pt-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Buyer Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-sky-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </AnimatedSection>

    </div>
  );
}
