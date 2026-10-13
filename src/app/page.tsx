"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Palette, 
  Phone, 
  Award, 
  Microscope, 
  Recycle, 
  Zap,
  Globe,
  Truck,
  Mail
} from "lucide-react";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";
import { applicationsData } from "@/data/applications";
import { testimonialsData } from "@/data/faq";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";
import { ColorSwatchViewer } from "@/components/ColorSwatchViewer";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24 overflow-hidden bg-slate-50 text-slate-800">
      
      {/* 1. HERO SECTION WITH RELATED LIGHT THEME BACKGROUND IMAGE */}
      <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Dedicated Generated Light Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg_factory.webp"
            alt="Rotex Nonwoven High-Tech Manufacturing Plant Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle horizontal gradient: clean white illumination behind text while leaving the factory and rolls vivid on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-slate-50/90" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Certification Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/90 text-xs text-slate-700 shadow-sm backdrop-blur-md max-w-full text-center"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block shrink-0" />
              <span className="font-bold text-sky-700">Direct Factory Manufacturer</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-slate-600 font-medium">ISO 9001:2015 Certified</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]"
            >
              Engineered Excellence in{" "}
              <span className="gradient-rotex-text">PP Spunbond</span>{" "}
              Nonwoven Fabric Rolls
            </motion.h1>

            {/* Subheading - High-Contrast Visible Typography & Highlight Badges */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
            >
              High-tensile, 100% virgin polypropylene nonwoven fabric rolls manufactured from{" "}
              <span className="font-extrabold text-sky-900 bg-sky-100/90 px-2 py-0.5 rounded-md border border-sky-200/80 shadow-xs inline-block my-0.5">
                10 to 200 GSM
              </span>{" "}
              in{" "}
              <span className="font-extrabold text-red-900 bg-red-100/90 px-2 py-0.5 rounded-md border border-red-200/80 shadow-xs inline-block my-0.5">
                21+ vibrant colors
              </span>
              . Precision slit to 1.6m width, trusted across medical PPE, agricultural agrofleece, 
              eco-friendly bags, and mattress upholstery.
            </motion.p>

            {/* Primary Action Buttons (Contact Us & Explore Products & WhatsApp) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-blue-700 to-red-600 hover:from-sky-500 hover:to-red-500 shadow-lg shadow-sky-600/25 active:scale-95 transition-all flex items-center space-x-2"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/products"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 hover:text-sky-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all flex items-center space-x-2"
              >
                <Layers className="w-4 h-4 text-sky-600" />
                <span>Explore Products</span>
              </Link>

              <a
                href={`https://wa.me/${companyData.directors[0].whatsappNumber}?text=${encodeURIComponent(companyData.directors[0].whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md shadow-emerald-500/20 active:scale-95 transition-all flex items-center space-x-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">WhatsApp Directors</span>
              </a>
            </motion.div>

            {/* Quick feature tick marks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 font-medium"
            >
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Virgin Polymer</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>21 Standard Color Shades</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Custom Slitting &amp; Lengths</span>
              </span>
            </motion.div>

          </div>

          {/* Right Hero Image Showcase with Clean White Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative soft shadow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-sky-200 via-indigo-100 to-red-100 opacity-60 blur-xl pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/hero_spunbond_rolls.webp"
                  alt="Rotex PP Spunbond Nonwoven Fabric Rolls stacked in warehouse"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 text-xs flex items-center space-x-2 shadow-lg border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    PP
                  </div>
                  <div>
                    <div className="font-bold text-[11px] text-slate-900">Polypropylene Spunbond</div>
                    <div className="text-[10px] text-slate-500">1.60m Standard Master Rolls</div>
                  </div>
                </div>

                {/* Floating Bottom Left Spec Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 text-xs flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                      Production Range
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      10 GSM - 200 GSM Available
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-600 font-bold block">
                      Ready Stock
                    </span>
                    <span className="text-xs font-bold text-sky-700">
                      21 Standard Colors
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. STATS & CAPABILITY COUNTERS (BALANCED WITH LARGEST IN CENTER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 p-5 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-lg">
            
            {/* Metric 1: GSM Range */}
            <div className="text-center p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 flex flex-col justify-center transition-all hover:border-sky-300 hover:bg-sky-50/30">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter value={10} duration={1.6} />
                <span className="text-slate-400 mx-1">–</span>
                <AnimatedCounter value={200} duration={2.0} />
              </span>
              <span className="text-xs font-bold text-sky-700 mt-1 uppercase tracking-wider">
                GSM Spectrum
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                Fabric Weight Range
              </span>
            </div>

            {/* Metric 2: Global B2B Partners */}
            <div className="text-center p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 flex flex-col justify-center transition-all hover:border-sky-300 hover:bg-sky-50/30">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter value={450} suffix="+" duration={1.8} />
              </span>
              <span className="text-xs font-bold text-sky-700 mt-1 uppercase tracking-wider">
                B2B Partners
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                Global Clients Served
              </span>
            </div>

            {/* Metric 3: CENTER & LARGEST HERO NUMBER - 18,000+ METRIC TONS */}
            <div className="col-span-2 lg:col-span-1 text-center p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-sky-50 via-white to-blue-50/40 border-2 border-sky-400 shadow-md flex flex-col justify-center relative ring-4 ring-sky-100/70 transform lg:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-sky-600 to-red-600 text-[10px] font-black uppercase tracking-wider text-white shadow-sm whitespace-nowrap">
                Largest Capacity
              </div>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-800 tracking-tight mt-1">
                <AnimatedCounter value={18000} suffix="+" duration={2.4} />
              </span>
              <span className="text-xs sm:text-sm font-black text-slate-900 mt-1 uppercase tracking-wider">
                Metric Tons / Year
              </span>
              <span className="text-[11px] text-slate-600 font-medium mt-0.5">
                Annual Extrusion Capacity
              </span>
            </div>

            {/* Metric 4: Color Shades */}
            <div className="text-center p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 flex flex-col justify-center transition-all hover:border-sky-300 hover:bg-sky-50/30">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter value={21} suffix="+" duration={1.6} />
              </span>
              <span className="text-xs font-bold text-sky-700 mt-1 uppercase tracking-wider">
                Color Shades
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                Non-woven Fabric Ready Stock
              </span>
            </div>

            {/* Metric 5: Virgin Grade Purity */}
            <div className="text-center p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 flex flex-col justify-center transition-all hover:border-sky-300 hover:bg-sky-50/30">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter value={100} suffix="%" duration={1.8} />
              </span>
              <span className="text-xs font-bold text-sky-700 mt-1 uppercase tracking-wider">
                Virgin Polymer
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                Zero Contamination Guarantee
              </span>
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* 3. 21 COLOR PALETTE SHOWCASE & 360° 3D PRODUCT MODEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <ColorSwatchViewer />
        </AnimatedSection>
      </section>

      {/* 4. CORE PRODUCT RANGE (LIGHT THEME) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Specialized PP Spunbond Fabric Rolls
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From ultra-light 10 GSM medical webs to high-density 200 GSM industrial reinforcement rolls, 
            manufactured using virgin polymer with custom treatment additives.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product, idx) => (
            <AnimatedSection
              key={product.id}
              variant="fadeUp"
              delay={idx * 0.08}
              className="flex flex-col"
            >
              <Link
                href={`/products/${product.slug}`}
                className="h-full rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group shadow-sm cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {product.highlightBadge && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-indigo-600 text-white shadow-md">
                      {product.highlightBadge}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-white/95 backdrop-blur-md text-[11px] font-mono text-sky-700 font-bold border border-slate-200 shadow-sm">
                    {product.gsmRange}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Quick specs pill */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-slate-500">
                      <span>Standard Width:</span>
                      <span className="text-slate-800 font-semibold">1.60 Meters</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Polymer:</span>
                      <span className="text-slate-800 font-semibold">100% Virgin PP</span>
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700 group-hover:text-sky-800 transition-colors">
                    <span>View Specifications &amp; Rolls</span>
                    <span className="w-8 h-8 rounded-xl bg-sky-50 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center transition-all shadow-2xs">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-xs text-slate-800 hover:text-sky-700 bg-white border border-slate-300 hover:border-sky-400 transition-all shadow-sm"
          >
            <span>View Complete Products &amp; Technical Catalog</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </Link>
        </div>
      </section>

      {/* 5. APPLICATIONS & INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Versatile Utility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Industries Powered by Rotex Rolls
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Engineered to fulfill stringent international benchmarks across healthcare, 
            agriculture, retail packaging, and home furnishing.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationsData.map((app, idx) => (
            <AnimatedSection
              key={app.id}
              variant="fadeUp"
              delay={idx * 0.08}
              className="flex flex-col"
            >
              <div className="h-full rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all p-5 flex flex-col justify-between space-y-4 group shadow-sm">
                <div className="relative h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded bg-white/95 text-[10px] font-mono text-emerald-700 font-bold border border-slate-200 shadow-sm">
                    Typical: {app.typicalGsm}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {app.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 mb-1 font-semibold uppercase tracking-wider">
                    Common Items:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {app.itemsProduced.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded bg-slate-50 text-[10px] text-slate-700 border border-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/applications"
                    className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center space-x-1"
                  >
                    <span>Read Industry Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 6. MANUFACTURING LINE & QUALITY ASSURANCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="scaleUp">
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden relative shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-100 text-rotex-red border border-red-200 text-xs font-bold uppercase tracking-wider">
                  <Microscope className="w-3.5 h-3.5" />
                  <span>State of the Art Quality Testing</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  High-Speed Extrusion &amp; Zero-Defect Lab Inspection
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Every batch of Rotex PP Spunbond fabric rolls undergoes comprehensive in-house testing: 
                  GSM circular sample cutters, digital electronic micrometers, computerized universal tensile 
                  strength testers (MD &amp; CD), and hydrostatic head test equipment for medical impermeability.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xl font-black text-sky-700 block">&plusmn; 2.5%</span>
                    <span className="text-xs text-slate-800 font-bold block mt-0.5">GSM Uniformity</span>
                    <span className="text-[10px] text-slate-500">Tightly controlled across roll width</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xl font-black text-emerald-700 block">100%</span>
                    <span className="text-xs text-slate-800 font-bold block mt-0.5">Virgin Polypropylene</span>
                    <span className="text-[10px] text-slate-500">No recycled fillers or calcium</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/infrastructure"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-bold text-xs text-slate-800 hover:text-white bg-slate-100 hover:bg-slate-900 border border-slate-300 transition-all shadow-sm"
                  >
                    <span>Tour Our Extrusion Infrastructure</span>
                    <ArrowRight className="w-4 h-4 text-sky-600" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-80 lg:h-[480px]">
                <Image
                  src="/images/manufacturing_line.webp"
                  alt="Rotex PP Spunbond Nonwoven Manufacturing Extrusion Line"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 7. DIRECTORS & LEADERSHIP CONNECT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Factory Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Connect Directly with Rotex Directors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No middle agents. Speak directly with our founding directors for commercial terms, 
            contract manufacturing, sample roll dispatches, and technical inquiries.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companyData.directors.map((director, idx) => (
            <AnimatedSection
              key={director.name}
              variant="fadeUp"
              delay={idx * 0.15}
            >
              <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 hover:border-slate-300 transition-all duration-300 shadow-md flex flex-col justify-between space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600 via-blue-700 to-red-600 text-white font-black text-xl flex items-center justify-center shadow-md">
                      {director.avatarText}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{director.name}</h3>
                      <p className="text-xs font-bold text-sky-700">{director.role}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Rotex Nonwoven Fabrics</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {director.bio}
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Mobile / WhatsApp:</span>
                    <a
                      href={`tel:${director.phone}`}
                      className="text-slate-900 font-bold hover:text-sky-700 transition-colors"
                    >
                      {director.displayPhone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Direct Email:</span>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={`tel:${director.phone}`}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors border border-slate-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>Call Direct</span>
                  </a>
                  <a
                    href={`https://wa.me/${director.whatsappNumber}?text=${encodeURIComponent(director.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block mb-2">
            Client Trust &amp; Partnerships
          </span>
          <h2 className="text-3xl font-black text-slate-900">What Our Manufacturing Partners Say</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item, idx) => (
            <AnimatedSection key={item.id} variant="fadeUp" delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 h-full shadow-sm">
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{item.clientName}</span>
                    <span className="text-slate-500 text-[11px] block">{item.company} • {item.location}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-[10px] font-bold">
                    {item.industry}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 9. BOTTOM HIGH-IMPACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="scaleUp">
          <div className="rounded-3xl bg-gradient-to-r from-sky-900 via-blue-900 to-slate-900 text-white border border-sky-800 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
                Ready to Upgrade Your Nonwoven Supply Chain?
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Connect Directly for Bulk Roll Pricing Today
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                Connect with Nirav Patel or Prakash Patel now for instant quotations, 
                free swatch sample books, and customized roll slitting specifications.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all"
                >
                  Contact Our Factory Desk
                </Link>
                <a
                  href={`tel:${companyData.directors[0].phone}`}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-sky-800/80 hover:bg-sky-800 border border-sky-500 transition-all flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-sky-300" />
                  <span>Call {companyData.directors[0].displayPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
