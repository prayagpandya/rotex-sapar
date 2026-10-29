"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Microscope, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Truck, 
  ArrowRight
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function InfrastructurePage() {
  const testingSteps = [
    {
      title: "Circular GSM Sample Cutting & Electronic Weighing",
      desc: "Samples cut with standard 100 cm² circular cutters across left, center, and right edges of the web to guarantee ±2.5% GSM tolerance."
    },
    {
      title: "Universal Tensile & Elongation Testing",
      desc: "Computerized Instron-style tensile testing measuring Machine Direction (MD) and Cross Direction (CD) peak force and stretch before rupture."
    },
    {
      title: "Hydrostatic Head & Water Strike-Through",
      desc: "Pressurized liquid column testing to verify water impermeability for medical barriers or rapid absorption for hydrophilic diaper grades."
    },
    {
      title: "Spectrophotometer Color Chromaticity (Delta E)",
      desc: "Digital colorimeter verification ensuring zero batch-to-batch shade deviation across all 21 standard nonwoven fabric shades."
    },
    {
      title: "Thermal Shrinkage & Calender Bond Integrity",
      desc: "Hot-air oven tests verifying thermal stability and diamond bonding adhesion without filament delamination or fuzziness."
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-800">
      
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5" />
          <span>Extrusion Plant &amp; Quality Lab</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          World-Class Extrusion Infrastructure
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Operating high-speed continuous filament polypropylene spunbond lines in Gujarat, India. 
          Driven by automated gravimetric dosing, precision calender bonding, and a zero-defect quality testing laboratory.
        </p>
      </AnimatedSection>

      {/* Main Extrusion Line Spotlight */}
      <AnimatedSection variant="scaleUp">
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
                Core Production Line
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                High-Speed Polypropylene Spunbond Extrusion Beams
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Raw virgin PP polymer granules are melted and homogenized in precision multi-zone extruders, 
                pumped through micro-hole spinneret dies to form thousands of continuous filaments, 
                attenuated by supersonic air drafts, laid randomly onto a porous forming belt, 
                and thermally bonded using heated diamond-pattern calender rolls.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Annual capacity exceeding 18,000+ Metric Tons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Master roll width: 1.60 meters (1600mm)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Precision inline slitting down to custom widths (100mm to 1600mm)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated turret winders ensuring uniform core tension without wrinkles</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all"
                >
                  <span>Schedule Plant Visit / Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 lg:h-[450px]">
              <Image
                src="/images/manufacturing_line.webp"
                alt="Rotex Extrusion Plant"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Quality Testing Laboratory Section */}
      <AnimatedSection variant="fadeUp">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 lg:order-1">
              <Image
                src="/images/quality_testing_lab.webp"
                alt="Rotex Textile Quality Testing Laboratory"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-white/95 text-xs text-slate-900 shadow-sm border border-slate-200">
                <span className="font-bold block">ASTM &amp; ISO Testing Protocol</span>
                <span className="text-xs text-slate-700 font-semibold">Calibrated Electronic Metrology</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 lg:order-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-100 text-rotex-red border border-red-200 text-xs font-bold uppercase tracking-wider">
                <Microscope className="w-3.5 h-3.5" />
                <span>Zero Compromise QA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                In-House Metrology &amp; Quality Laboratory
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Quality at Rotex is quantified with empirical laboratory instruments. 
                Every master roll is tagged with a unique roll identification barcode and accompanied 
                by a Certificate of Analysis (COA) confirming GSM conformity and tensile strength.
              </p>

              <div className="space-y-3">
                {testingSteps.slice(0, 3).map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <span>{step.title}</span>
                    </h4>
                    <p className="text-xs text-slate-800 pl-7 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Packaging, Slitting & Logistics */}
      <AnimatedSection variant="fadeUp">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Custom Slitting &amp; Rewinding</h3>
            <p className="text-xs text-slate-800 font-medium leading-relaxed">
              Equipped with high-precision razor and shear rotary knives. Slit widths available from 100mm upwards, ideal for mask earloops, mask bodies, and tape reinforcement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Moisture-Proof Packaging</h3>
            <p className="text-xs text-slate-800 font-medium leading-relaxed">
              Every roll is wrapped in high-micron transparent protective film with plastic end caps to prevent dust infiltration, edge impact damage, or humidity contamination during transit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Rapid Nationwide &amp; Export Dispatch</h3>
            <p className="text-xs text-slate-800 font-medium leading-relaxed">
              Located adjacent to major express highway corridors and western container ports (Mundra, Nhava Sheva). Full truckload dispatches ready within 24-48 hours for standard colors.
            </p>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
