"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  Recycle, 
  Users, 
  Phone, 
  ArrowRight,
  CheckCircle2,
  Factory,
  Microscope,
  Layers,
  Sparkles,
  Zap,
  Globe,
  PackageCheck,
  HelpCircle,
  Gauge,
  ChevronDown
} from "lucide-react";
import { companyData } from "@/data/company";
import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whyChooseUsPillars = [
    {
      icon: ShieldCheck,
      color: "sky",
      title: "100% Virgin Homopolymer PP",
      desc: "We strictly utilize prime virgin polypropylene resin from premier petrochemical refineries. Zero regrind and zero calcium carbonate (CaCO3) fillers, guaranteeing high elongation, tear resistance, and no chalky dusting on converting machines."
    },
    {
      icon: Zap,
      color: "amber",
      title: "Balanced MD/CD Tensile Ratio",
      desc: "Our automated filament attenuation and diamond-point calendering maintain balanced tensile strength in both Machine Direction and Cross Direction (near 1:1 ratio), eliminating web splitting during high-speed bag manufacturing."
    },
    {
      icon: Layers,
      color: "emerald",
      title: "21+ Vibrant Non-woven Fabric Shades",
      desc: "Immediate ready-stock availability across 21 standard commercial colors. Formulated with azo-free, heavy-metal-free pigments and optional UV stabilization for outdoor agricultural applications."
    },
    {
      icon: Factory,
      color: "indigo",
      title: "Custom Slitting (50mm – 1600mm)",
      desc: "High-precision rotary shear slitting equipment delivers clean, burr-free roll edges and uniform tension winding across narrow widths for medical tapes, cable wraps, and pocket spring mattress coils."
    },
    {
      icon: Microscope,
      color: "red",
      title: "In-House ASTM & ISO Quality Lab",
      desc: "Every master roll is batch-tested for GSM uniformity, tensile burst, elongation, hydrostatic head (liquid barrier), and air permeability before receiving an internal factory dispatch clearance certificate."
    },
    {
      icon: Users,
      color: "teal",
      title: "Direct Leadership Accountability",
      desc: "Partnering with Rotex gives you direct phone and WhatsApp access to our directors Nirav Patel and Prakash Patel. Fast turnaround on custom bids, prompt sample roll dispatches, and guaranteed delivery schedules."
    }
  ];

  const manufacturingSteps = [
    {
      step: "01",
      title: "Prime Polymer Dosing & Extrusion",
      desc: "Virgin polypropylene granules and certified color non-woven fabric formulations are gravimetrically dosed and melted under precise thermal zones into a homogenous polymer melt."
    },
    {
      step: "02",
      title: "Continuous Filament Spinning",
      desc: "High-pressure multi-hole spinnerets extrude thousands of continuous microfilaments, which are aerodynamically drawn at supersonic speeds into ultra-fine fibers."
    },
    {
      step: "03",
      title: "Calender Point Bonding",
      desc: "The randomly laid web passes through high-pressure heated calender rollers with diamond engraving, thermally bonding the fibers without any chemical adhesives."
    },
    {
      step: "04",
      title: "Automated Slitting & Export Packaging",
      desc: "Online edge-trimmed rolls are precision slit to specified widths, measured for exact roll length/weight, and wrapped in heavy-duty moisture-proof protective poly-sleeves."
    }
  ];

  const aboutFaqs = [
    {
      q: "What makes Rotex PP Spunbond rolls different from market commercial grades?",
      a: "Most commercial grade nonwoven fabrics blend up to 25% calcium carbonate (chalk) to cut costs, making the fabric brittle, chalky, and prone to web breaks. Rotex manufactures exclusively with 100% prime virgin homopolymer polypropylene, ensuring maximum tensile strength, uniform fiber distribution, and clean ultrasonic weldability."
    },
    {
      q: "Can you provide custom roll widths and slitted reels?",
      a: "Yes. Our standard production width is 1.60 meters (160 cm), but our high-speed slitter-rewinders can slit rolls into custom widths ranging from 50 mm (5 cm) up to 1600 mm based on your exact machine specifications."
    },
    {
      q: "What is your standard production capacity and dispatch turnaround?",
      a: "We operate multiple multi-shift extrusion lines delivering over 18,000 Metric Tons of annual capacity. For standard GSM and 21 stock colors, dispatch occurs within 24 to 48 hours. Custom colors or specialized additive runs typically ship in 3 to 7 working days."
    },
    {
      q: "Do you supply testing samples and swatches for line trials?",
      a: "Yes. We offer sample swatch books and sample trial roll lengths for industrial converters. Contact our directors on WhatsApp or phone to request a customized sample package."
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-800">
      
      {/* 1. Header & Breadcrumb Hero */}
      <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>Our Story, Capability &amp; Vision</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
          About Rotex Nonwoven Fabrics
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Pioneering high-tensile 100% virgin polypropylene spunbond nonwoven fabric rolls. 
          Engineered for high-speed automated bag-making, medical hygiene, agriculture, and industrial upholstery.
        </p>
      </AnimatedSection>

      {/* 2. Key Metrics Strip */}
      <AnimatedSection variant="fadeUp">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 p-5 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md">
          <div className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-2xl sm:text-3xl font-black text-sky-700 block">
              <AnimatedCounter value={18000} suffix="+" duration={2.2} />
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">Metric Tons</span>
            <span className="text-[10px] text-slate-500">Annual Extrusion</span>
          </div>

          <div className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 block">
              <AnimatedCounter value={10} duration={1.6} />–<AnimatedCounter value={200} duration={2.0} />
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">GSM Range</span>
            <span className="text-[10px] text-slate-500">Fabric Weight Spectrum</span>
          </div>

          <div className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 block">
              1.60m
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">Master Width</span>
            <span className="text-[10px] text-slate-500">Custom Slit to 50mm</span>
          </div>

          <div className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 block">
              <AnimatedCounter value={21} suffix="+" duration={1.6} />
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">Color Shades</span>
            <span className="text-[10px] text-slate-500">Non-woven Fabric Ready Stock</span>
          </div>

          <div className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-2xl sm:text-3xl font-black text-emerald-700 block">
              <AnimatedCounter value={100} suffix="%" duration={1.8} />
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">Virgin PP</span>
            <span className="text-[10px] text-slate-500">Zero Chalk Adulteration</span>
          </div>

          <div className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-2xl sm:text-3xl font-black text-sky-700 block">
              <AnimatedCounter value={450} suffix="+" duration={1.8} />
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">B2B Partners</span>
            <span className="text-[10px] text-slate-500">Domestic &amp; Export</span>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Story & Factory Overview */}
      <AnimatedSection variant="scaleUp">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Manufacturing Legacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Engineered for High-Speed Automation &amp; Global Standards
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Headquartered in the premier industrial textile belt of Gujarat, India, 
                Rotex Nonwoven Fabrics was established to provide converting industries with dependable, 
                high-tensile polypropylene spunbond rolls that run smoothly without tears or dust.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                While much of the market relies on calcium carbonate filler non-woven fabric additives to lower costs at the expense 
                of strength, Rotex adheres uncompromisingly to <strong className="text-slate-900 font-bold">100% prime virgin polymer</strong>. 
                Our multi-beam continuous filament spunbond lines generate uniform fiber distribution, high burst strength, 
                and superior ultrasonic weldability across every meter.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Integrated multi-shift production plant delivering 18,000+ MT annually</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Calibrated ASTM &amp; ISO in-house quality testing protocol for every batch</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Extensive 21-color stockyard ensuring same-day or next-day truck loading</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="/images/hero_spunbond_rolls.webp"
                alt="Rotex Nonwoven Factory Warehouse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/95 text-xs text-slate-900 font-bold shadow-md border border-slate-200">
                <span>1.60m Master Production Width</span>
                <span className="text-[10px] text-slate-500 block font-normal">Ready Stock &amp; Custom Slitting Available</span>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* 4. DEDICATED "WHY CHOOSE US" SECTION */}
      <section className="space-y-8">
        <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Industry Leaders Choose Rotex
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From zero chalky fillers to balanced multi-directional tensile ratios, here is why leading 
            packaging converters, medical brands, and industrial manufacturers rely on Rotex.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} variant="fadeUp" delay={idx * 0.08}>
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xs">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center text-xs font-bold text-sky-700 space-x-1">
                    <span>Rotex Standard</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* 5. Our 4-Step Extrusion & Quality Process */}
      <section className="space-y-8">
        <AnimatedSection variant="fadeUp" className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
            End-to-End Precision
          </span>
          <h2 className="text-3xl font-black text-slate-900">Our 4-Step Extrusion Process</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            How we transform raw virgin polypropylene granules into finished, high-performance master rolls.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {manufacturingSteps.map((step, idx) => (
            <AnimatedSection key={step.step} variant="fadeUp" delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 h-full flex flex-col justify-between space-y-4 shadow-sm relative overflow-hidden group hover:border-slate-300">
                <div className="absolute top-3 right-3 text-4xl font-black text-slate-100 group-hover:text-sky-50 transition-colors pointer-events-none">
                  {step.step}
                </div>
                <div className="space-y-2 relative z-10">
                  <span className="text-xs font-bold text-sky-700 tracking-wider uppercase block">
                    Phase {step.step}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 6. Directors & Executive Leadership */}
      <div className="space-y-8">
        <AnimatedSection variant="fadeUp" className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block mb-1">
            Executive Leadership
          </span>
          <h2 className="text-3xl font-black text-slate-900">Meet the Directors of Rotex</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Direct leadership accountability. Contact our directors directly for commercial contracts, 
            exclusive distributor territories, and custom technical inquiries.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companyData.directors.map((director, idx) => (
            <AnimatedSection key={director.name} variant="fadeUp" delay={idx * 0.15}>
              <div className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between space-y-6 shadow-md h-full">
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600 via-blue-700 to-red-600 text-white font-black text-xl flex items-center justify-center shadow-md">
                      {director.avatarText}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{director.name}</h3>
                      <p className="text-xs font-bold text-sky-700">{director.role}</p>
                      <p className="text-[11px] text-slate-500">Rotex Nonwoven Fabrics</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {director.bio}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Direct Phone:</span>
                      <a href={`tel:${director.phone}`} className="font-bold text-slate-900 hover:text-sky-700">
                        {director.displayPhone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Email:</span>
                      <a href={`mailto:${companyData.email}`} className="font-semibold text-sky-700 hover:underline">
                        {companyData.email}
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${director.phone}`}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors border border-slate-300"
                    >
                      <Phone className="w-3.5 h-3.5 text-sky-600" />
                      <span>Direct Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${director.whatsappNumber}?text=${encodeURIComponent(director.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* 7. Core Values & Sustainability */}
      <AnimatedSection variant="fadeUp">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Polymer Integrity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never compromise on virgin raw materials. Every metric ton extruded meets strict MFI, density, and tensile benchmarks without chalky additives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Recycle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Eco &amp; Recyclability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Polypropylene is 100% recyclable (#5). Our nonwoven solutions replace single-use plastic bags and reduce agricultural pesticide use via protective fleece.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Transparent Partnership</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct access to our factory directors means immediate pricing decisions, flexible credit terms for verified partners, and dependable scheduled shipments.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 8. Factory FAQs */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <AnimatedSection variant="fadeUp" className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions About Rotex
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {aboutFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <AnimatedSection key={idx} variant="fadeUp" delay={idx * 0.05}>
                <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* 9. Bottom High-Impact CTA */}
      <AnimatedSection variant="scaleUp">
        <div className="rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5 shadow-xl text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <span className="px-3.5 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider inline-block">
            Direct Factory Partnership
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white max-w-2xl mx-auto">
            Ready to Partner with a Reliable Virgin Spunbond Extruder?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Contact Directors Nirav Patel and Prakash Patel directly for spot roll availability, 
            contract pricing, or sample swatch roll dispatch.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-600 to-red-600 hover:from-sky-500 hover:to-red-500 shadow-md transition-all"
            >
              Contact Sales Desk
            </Link>
            <a
              href={`https://wa.me/${companyData.directors[0].whatsappNumber}?text=${encodeURIComponent(
                "Hello Nirav Patel, I reviewed the Rotex About page and would like to inquire about bulk nonwoven roll supply."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md flex items-center space-x-2 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Director</span>
            </a>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
