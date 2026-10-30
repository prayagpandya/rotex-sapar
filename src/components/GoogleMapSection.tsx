"use client";

import React from "react";
import { 
  MapPin, 
  ExternalLink, 
  Navigation,
  Compass
} from "lucide-react";
import { companyData } from "@/data/company";
import { AnimatedSection } from "./AnimatedSection";

interface GoogleMapSectionProps {
  className?: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
}

export function GoogleMapSection({
  className = "",
  badgeText = "Factory Location & Route",
  title = "Visit Our Manufacturing Plant on Google Maps",
  subtitle = "Located in the prime industrial manufacturing hub of Shapar (Veraval), Rajkot, Gujarat. Direct highway accessibility for container freight, bulk roll dispatch, and buyer facility inspections."
}: GoogleMapSectionProps) {
  const mapDirectUrl = companyData.address.googleMapsUrl || "https://maps.app.goo.gl/KcnPrddDdH4kSLgJ9";
  const mapEmbedUrl = companyData.address.googleMapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.308722247781!2d70.7843186!3d22.159999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835a1c2327d7f%3A0x8ef56b59767722ef!2sROTEX%20FABRIC%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1730300000000!5m2!1sen!2sin";

  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Section Header */}
      <AnimatedSection variant="fadeUp" className="space-y-3 text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-600" />
          <span>{badgeText}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
          {subtitle}
        </p>
      </AnimatedSection>

      {/* Full-Width Rectangular Google Map */}
      <AnimatedSection variant="scaleUp">
        <div className="w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative h-[380px] sm:h-[460px] lg:h-[500px]">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ROTEX FABRIC PVT. LTD. - Google Maps Location"
            className="w-full h-full"
          />

          {/* Floating Google Maps Direct Action Badge */}
          <div className="absolute top-4 right-4 z-10">
            <a
              href={mapDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/95 hover:bg-white text-slate-900 border border-slate-200 shadow-lg backdrop-blur-md text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer group"
              title="Open in Google Maps App"
            >
              <Navigation className="w-4 h-4 text-sky-600 group-hover:rotate-12 transition-transform" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
            </a>
          </div>

          {/* Bottom Location Indicator Bar */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 sm:px-5 sm:py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg text-xs font-semibold text-slate-800">
            <div className="flex items-center space-x-2 text-center sm:text-left">
              <Compass className="w-4 h-4 text-sky-600 shrink-0 hidden sm:block" />
              <span>
                <strong>Factory Works:</strong> Survey No.275/1/P, Plot No.22/23, Gujarat Alloy Cast Gate, Shapar (Veraval) 360024, Rajkot, Gujarat
              </span>
            </div>
            <a
              href={mapDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center space-x-1.5 text-sky-700 hover:text-sky-800 font-bold hover:underline"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 text-sky-600" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
