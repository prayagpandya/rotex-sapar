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
    id: "packaging-shopping-bags",
    name: "Packaging & Shopping Bags",
    shortDesc: "Eco-friendly nonwoven carrier bags, D-cut bags, U-cut bags, box bags, loop-handle bags, and grain sacks.",
    fullDesc: "Rotex PP spunbond fabric is the gold standard for automated and semi-automated bag conversion machines. Delivering high tensile tear resistance, rich color opacity across 21 nonwoven fabric shades, and ultra-smooth surfaces for multicolor flexo, screen, and rotogravure printing.",
    image: "/images/applications/utility_packaging_bags.jpg",
    typicalGsm: "40 - 120 GSM",
    recommendedColors: ["White", "Black", "Royal Blue", "Red", "Orange", "Perrot Green", "Golden Yellow", "Maroon"],
    keyBenefits: [
      "100% recyclable alternative to banned single-use plastic",
      "Superior load-carrying strength (up to 20kg+ carry capacity)",
      "High ink receptivity for screen, flexo & rotogravure printing",
      "Puncture-resistant with uniform diamond bond pattern"
    ],
    itemsProduced: [
      "Box Bags & Stitched Shopping Bags",
      "U-Cut & D-Cut Nonwoven Bags",
      "Loop-Handle Retail & Carry Bags",
      "Rice, Wheat, Spices & Split Pulses Sacks",
      "Garment Wardrobe Covers & Stitching Bags"
    ]
  },
  {
    id: "medical-healthcare",
    name: "Medical & Healthcare",
    shortDesc: "Cleanroom surgical gowns, 3-ply face masks, bouffant caps, and sterile disposable drapes.",
    fullDesc: "Rotex provides hospital-grade PP spunbond fabric manufactured with bio-compatible nonwoven fabrics. Certified for fluid-repellence, low-linting, and skin safety under international healthcare protocols.",
    image: "/images/applications/utility_medical_ppe.jpg",
    typicalGsm: "10 - 45 GSM",
    recommendedColors: ["White", "Peacock Blue", "Sea Green", "Nevy Blue"],
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
    image: "/images/applications/utility_agriculture_crop.jpg",
    typicalGsm: "15 - 35 GSM",
    recommendedColors: ["White", "Sea Green", "Reliance Green"],
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
    id: "furniture-bedding",
    name: "Furniture & Bedding",
    shortDesc: "Pocket spring coil sleeves, sofa dust covers, cushion ticking, and mattress quilt backing.",
    fullDesc: "Engineered specifically to endure continuous cyclic compression inside premium mattresses and sofas. Rotex furniture spunbond fabrics prevent coil rubbing friction, mute noise, and inhibit dust and mites.",
    image: "/images/applications/utility_furniture_bedding.jpg",
    typicalGsm: "50 - 150 GSM",
    recommendedColors: ["Black", "White", "Beige", "Brown", "Ivory"],
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
    image: "/images/applications/utility_industrial_filtration.jpg",
    typicalGsm: "60 - 200 GSM",
    recommendedColors: ["White", "Black", "Beige", "Nevy Blue"],
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
