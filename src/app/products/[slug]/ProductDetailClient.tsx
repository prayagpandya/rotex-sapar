"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  Layers,
  FileSpreadsheet,
  ArrowRight
} from "lucide-react";
import { ProductItem } from "@/data/products";
import { companyData } from "@/data/company";
import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function ProductDetailClient({
  product,
  relatedProducts
}: {
  product: ProductItem;
  relatedProducts: ProductItem[];
}) {
  const [selectedImage, setSelectedImage] = useState(product.image);

  const getWhatsAppInquiryUrl = () => {
    const text = `Hello Nirav Patel, I am inquiring about *${product.name}* (${product.gsmRange}). Please provide sample roll availability and bulk rate quote.`;
    return `https://wa.me/${companyData.directors[0].whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-800">
      
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-sky-700 font-bold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <AnimatedSection variant="scaleUp">
            <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />

              {product.highlightBadge && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-indigo-600 text-white shadow-md">
                  {product.highlightBadge}
                </div>
              )}

              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md text-xs font-mono text-sky-700 font-bold border border-slate-200 shadow-sm">
                {product.gsmRange} • {product.standardWidth}
              </div>
            </div>
          </AnimatedSection>

          {/* Thumbnails */}
          {product.gallery.length > 1 && (
            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    selectedImage === img
                      ? "border-sky-600 ring-2 ring-sky-300 scale-105"
                      : "border-slate-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`${product.name} thumbnail ${i}`} fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Specs */}
        <div className="lg:col-span-6 space-y-6">
          <AnimatedSection variant="fadeUp">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              Rotex Engineered Nonwoven
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 leading-tight">
              {product.name}
            </h1>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {product.subtitle}
            </p>
          </AnimatedSection>

          {/* Quick Info Grid */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs shadow-xs">
              <div>
                <span className="text-slate-500 font-medium block">GSM Spectrum:</span>
                <span className="font-bold text-slate-900 text-sm">{product.gsmRange}</span>
              </div>
              <div>
                <span className="text-slate-500 font-medium block">Master Roll Width:</span>
                <span className="font-bold text-slate-900 text-sm">{product.standardWidth}</span>
              </div>
              <div>
                <span className="text-slate-500 font-medium block">Polymer Composition:</span>
                <span className="font-bold text-slate-900">{product.polymer}</span>
              </div>
              <div>
                <span className="text-slate-500 font-medium block">Bonding Pattern:</span>
                <span className="font-bold text-slate-900">{product.bondingType}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Action CTAs */}
          <AnimatedSection variant="fadeUp" delay={0.15}>
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/contact"
                  className="py-3 px-5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-600 via-blue-700 to-red-600 hover:from-sky-500 hover:to-red-500 shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer text-center"
                >
                  <span>Contact Sales Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer text-center"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp Nirav Patel</span>
                </a>
              </div>

              <div className="text-center text-[11px] text-slate-500 font-medium">
                Direct phone: <a href={`tel:${companyData.directors[0].phone}`} className="text-slate-900 font-bold hover:text-sky-700">{companyData.directors[0].displayPhone}</a> • Email: <a href={`mailto:${companyData.email}`} className="text-sky-700 font-semibold hover:underline">{companyData.email}</a>
              </div>
            </div>
          </AnimatedSection>

          {/* Key Features */}
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Key Performance Advantages
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

        </div>

      </div>

      {/* Technical Data Sheet Matrix */}
      <AnimatedSection variant="fadeUp">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md">
          <div className="flex items-center space-x-2 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
            <FileSpreadsheet className="w-4 h-4" />
            <span>Laboratory Verified Parameters</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">Technical Data Sheet (TDS)</h2>
          <p className="text-xs text-slate-500 mt-1 mb-6">
            Tested under ASTM / ISO standards at standard ambient laboratory conditioning (23°C &plusmn; 2°C, 50% &plusmn; 5% RH).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-slate-500 font-medium block">Tensile Strength (MD):</span>
              <span className="font-bold text-slate-900 text-sm">{product.technicalSpecs.tensileStrengthMD}</span>
              <span className="text-[10px] text-slate-500 block">Machine Direction (ASTM D5035)</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-slate-500 font-medium block">Tensile Strength (CD):</span>
              <span className="font-bold text-slate-900 text-sm">{product.technicalSpecs.tensileStrengthCD}</span>
              <span className="text-[10px] text-slate-500 block">Cross Direction (ASTM D5035)</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-slate-500 font-medium block">Elongation at Break (MD):</span>
              <span className="font-bold text-emerald-700 text-sm">{product.technicalSpecs.elongationMD}</span>
              <span className="text-[10px] text-slate-500 block">High tear elasticity</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-slate-500 font-medium block">Elongation at Break (CD):</span>
              <span className="font-bold text-emerald-700 text-sm">{product.technicalSpecs.elongationCD}</span>
              <span className="text-[10px] text-slate-500 block">Cross web stretch</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-slate-500 font-medium block">Color Fastness:</span>
              <span className="font-bold text-sky-700 text-sm">{product.technicalSpecs.colorFastness}</span>
              <span className="text-[10px] text-slate-500 block">Resistant to rubbing &amp; bleed</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-slate-500 font-medium block">Melting Point:</span>
              <span className="font-bold text-slate-900 text-sm">{product.technicalSpecs.meltingPoint}</span>
              <span className="text-[10px] text-slate-500 block">High thermal stability</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Target Industry Applications */}
      <AnimatedSection variant="fadeUp">
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-slate-900">Recommended Applications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.applications.map((app, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center space-x-3 text-xs text-slate-800 shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Related Products */}
      <AnimatedSection variant="fadeUp" className="pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Other Specialty Roll Products</h2>
          <Link href="/products" className="text-xs text-sky-700 hover:text-sky-800 font-bold flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <Link
              key={rel.id}
              href={`/products/${rel.slug}`}
              className="rounded-2xl bg-white border border-slate-200 p-4 hover:border-sky-300 hover:shadow-lg transition-all group flex flex-col justify-between space-y-3 shadow-xs"
            >
              <div className="relative h-36 rounded-xl overflow-hidden bg-slate-100">
                <Image src={rel.image} alt={rel.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">{rel.name}</h4>
                <p className="text-[11px] text-slate-600 line-clamp-2 mt-1">{rel.subtitle}</p>
              </div>
              <div className="text-xs text-sky-700 font-bold flex items-center space-x-1">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>

    </div>
  );
}
