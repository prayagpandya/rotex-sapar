export interface ApplicationCategory {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  typicalGsm: string;
  recommendedColors: string[];
  keyBenefits: string[];
  itemsProduced: string[];
}

export const applicationsData: ApplicationCategory[] = [
  {
    id: "medical-healthcare",
    name: "Medical & Healthcare",
    shortDesc: "Cleanroom surgical gowns, 3-ply face masks, bouffant caps, and sterile disposable drapes.",
    fullDesc: "Rotex provides hospital-grade PP spunbond fabric rolls manufactured with bio-compatible non-woven fabrics. Certified for fluid-repellence, low-linting, and skin safety under international healthcare protocols.",
    image: "/images/applications/medical_hygiene.webp",
    typicalGsm: "10 - 45 GSM",
    recommendedColors: ["WHITE", "P.BLUE", "S.GREEN", "N.BLUE"],
    keyBenefits: [
      "Bacterial & particulate barrier efficacy",
      "High air-permeability for effortless breathing",
      "Non-irritant, lint-free and hypoallergenic",
      "Ultrasonic seam weldable at high machine speeds"
    ],
    itemsProduced: [
      "3-Ply Surgical Masks & N95 outer layers",
      "Surgical Gowns & Protective Coveralls",
      "Surgeon Caps & Bouffant Hairnets",
      "Hospital Bed Linen & Disposable Pillowcases",
      "Shoe Covers & Cleanroom Booties"
    ]
  },
  {
    id: "agriculture-horticulture",
    name: "Agriculture & Horticulture",
    shortDesc: "UV-stabilized crop cover fleece, frost protection sheets, and nursery germination blankets.",
    fullDesc: "Our agrofleece creates a balanced microclimate that shields crops from nocturnal frost down to -4°C, scorching sunlight, wind damage, and insect pest transmission while allowing water, air, and 85%+ sunlight to penetrate.",
    image: "/images/applications/agriculture_cover.webp",
    typicalGsm: "15 - 35 GSM",
    recommendedColors: ["WHITE", "S.GREEN", "R.GREEN"],
    keyBenefits: [
      "Extends harvesting season by 2 - 3 weeks",
      "Reduces dependency on chemical insect sprays",
      "Protects against frost, hail, and heavy downpours",
      "UV-stabilized with HALS for multi-season durability"
    ],
    itemsProduced: [
      "Floating Crop Row Covers",
      "Greenhouse Shade Curtains & Frost Mats",
      "Banana & Fruit Bunch Sleeves",
      "Plant Nursery Sapling Pots",
      "Landscape Weed Barrier Ground Cover"
    ]
  },
  {
    id: "packaging-shopping-bags",
    name: "Packaging & Shopping Bags",
    shortDesc: "Eco-friendly nonwoven carrier bags, D-cut bags, box bags, and garment wardrobe covers.",
    fullDesc: "Rotex PP spunbond fabric rolls are the gold standard for bag conversion machines. Delivering high tensile tear resistance, rich color opacity across 21 vibrant non-woven fabric shades, and smooth surfaces for multicolor printing.",
    image: "/images/applications/packaging_bags.webp",
    typicalGsm: "40 - 120 GSM",
    recommendedColors: ["WHITE", "BLACK", "R.BLUE", "RED", "ORANGE", "P.GREEN", "G.YELLOW", "MAROON"],
    keyBenefits: [
      "100% recyclable alternative to banned single-use plastic",
      "Superior load-carrying strength (up to 20kg carry capacity)",
      "High ink receptivity for screen, flexo & rotogravure printing",
      "Puncture-resistant with uniform diamond bond pattern"
    ],
    itemsProduced: [
      "D-Cut & W-Cut Retail Grocery Bags",
      "Loop Handle & Stitched Box Shopping Bags",
      "Saree, Suit & Luxury Garment Dust Covers",
      "Footwear & Handbag Storage Pouches",
      "Promotional Corporate Totes"
    ]
  },
  {
    id: "furniture-bedding",
    name: "Furniture & Bedding",
    shortDesc: "Pocket spring coil sleeves, sofa dust covers, cushion ticking, and mattress quilt backing.",
    fullDesc: "Engineered specifically to endure continuous cyclic compression inside premium mattresses and sofas. Rotex furniture spunbond fabrics prevent coil rubbing friction, mute noise, and inhibit dust and mites.",
    image: "/images/applications/furniture_mattress.webp",
    typicalGsm: "50 - 150 GSM",
    recommendedColors: ["BLACK", "WHITE", "BEIGE", "BROWN", "IVORY"],
    keyBenefits: [
      "Puncture-proof against high-tension mattress spring wire",
      "Sound-dampening acoustic dampener between springs",
      "Dust and moisture breathable barrier",
      "High tear strength for pneumatic stapling & sewing"
    ],
    itemsProduced: [
      "Individually Wrapped Pocket Spring Coil Envelopes",
      "Mattress Underside Quilted Backing Cloth",
      "Sofa Base & Bottom Dust Protection Cover",
      "Cushion & Pillow Core Casings",
      "Automotive Seat Backing Liners"
    ]
  },
  {
    id: "industrial-filtration",
    name: "Industrial & Filtration",
    shortDesc: "Air and liquid filtration media, cable wrap insulation, geotextile separators, and acoustic liners.",
    fullDesc: "Spunbond polypropylene fibers offer exceptional chemical resistance to acids and alkalis, making Rotex rolls suitable for technical filtration, geotextile underlay, and protective building wraps.",
    image: "/images/quality_testing_lab.webp",
    typicalGsm: "60 - 200 GSM",
    recommendedColors: ["WHITE", "BLACK", "BEIGE", "N.BLUE"],
    keyBenefits: [
      "Resistant to acids, alkalis, and microbial degradation",
      "High dimensional stability under thermal cycling",
      "Uniform pore size distribution for predictable particle capture",
      "Hydrophobic and moisture non-absorbent"
    ],
    itemsProduced: [
      "Air Conditioning Pre-Filters",
      "Coolant & Industrial Liquid Filtration Cloth",
      "Cable Wrap & Wire Sheathing Core",
      "Geotextile Ground Separation Membranes",
      "Automotive Acoustic Engine Hood Liners"
    ]
  }
];
