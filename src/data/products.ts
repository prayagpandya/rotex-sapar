export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  gsmRange: string;
  standardWidth: string;
  rollLengthRange: string;
  image: string;
  gallery: string[];
  polymer: string;
  bondingType: string;
  keyFeatures: string[];
  applications: string[];
  technicalSpecs: {
    tensileStrengthMD: string;
    tensileStrengthCD: string;
    elongationMD: string;
    elongationCD: string;
    colorFastness: string;
    meltingPoint: string;
  };
  highlightBadge?: string;
  description: string;
}

export const productsData: ProductItem[] = [
  {
    id: "pp-spunbond-standard-rolls",
    slug: "pp-spunbond-standard-rolls",
    name: "PP Spunbond Nonwoven Fabric (Standard Rolls)",
    subtitle: "High-Tensile 100% Virgin Polypropylene Fabric Rolls for Universal Industrial Conversion",
    gsmRange: "10 GSM - 200 GSM",
    standardWidth: "1.60 Meters (Slitting down to 100mm available)",
    rollLengthRange: "200m - 1000m (Standard factory winding)",
    image: "/images/hero_spunbond_rolls.webp",
    gallery: [
      "/images/hero_spunbond_rolls.webp",
      "/images/applications/product_portfolio_packaging_bags.webp",
      "/images/products/p2.webp",
      "/images/products/furniture_pocket_springs.jpg",
      "/images/spunbond_pattern_texture.webp"
    ],
    polymer: "100% Prime Virgin Polypropylene (PP Homopolymer)",
    bondingType: "Thermal Calender Diamond Embossed Pattern",
    keyFeatures: [
      "Consistent web uniformity with zero pinholes",
      "High longitudinal (MD) and transverse (CD) tensile ratio",
      "Non-toxic, hypoallergenic, and odorless",
      "100% recyclable thermoplastic polymer",
      "Superior dye dispersion across 21+ nonwoven fabric colors"
    ],
    applications: [
      "General Packaging & Linings",
      "Shopping & Carry Bags",
      "Garment Covers & Suit Bags",
      "Home Furnishing Interlining",
      "Industrial Dust Barrier Covers"
    ],
    technicalSpecs: {
      tensileStrengthMD: ">= 32 N / 5cm (at 30 GSM) to >= 240 N / 5cm (at 150 GSM)",
      tensileStrengthCD: ">= 22 N / 5cm (at 30 GSM) to >= 170 N / 5cm (at 150 GSM)",
      elongationMD: "50% - 85%",
      elongationCD: "55% - 90%",
      colorFastness: "Grade 4.5+ (AATCC 8)",
      meltingPoint: "165°C - 170°C"
    },
    highlightBadge: "Best Seller",
    description: "Our core product line manufactured on high-speed continuous filament extrusion beams. Engineered for maximum tear resistance, flawless ultrasonic welding, and high-speed automatic bag-making machines."
  },
  {
    id: "medical-hygiene-nonwoven-rolls",
    slug: "medical-hygiene-nonwoven-rolls",
    name: "Medical & Hygiene Grade Nonwoven Fabric",
    subtitle: "Cleanroom Processed Hypoallergenic Spunbond Fabric for Healthcare PPE & Disposables",
    gsmRange: "10 GSM - 50 GSM",
    standardWidth: "1.60 Meters / Slit to 175mm, 195mm (Mask Size)",
    rollLengthRange: "500m - 1000m",
    image: "/images/products/medical_fabric_rolls.jpg",
    gallery: [
      "/images/products/medical_fabric_rolls.jpg",
      "/images/products/p2.webp",
      "/images/products/p6.webp",
      "/images/products/p10.webp"
    ],
    polymer: "Medical-Grade High MFI Polypropylene",
    bondingType: "Ultra-Soft Micro Point Diamond Calender",
    keyFeatures: [
      "Skin-friendly ultra-soft hand feel with zero skin irritation",
      "Hydrophobic fluid barrier prevents droplet penetration",
      "High air-permeability for comfortable respiratory breathing",
      "Ultrasonic weldable for high-speed automated mask lines",
      "Compatible with Ethylene Oxide (ETO) and Gamma sterilization"
    ],
    applications: [
      "3-Ply & N95 Surgical Face Masks (Inner & Outer Layers)",
      "Surgical Gowns & Isolation Coveralls",
      "Disposable Bouffant Caps & Surgeon Hoods",
      "Shoe Covers & Medical Aprons",
      "Hospital Bed Sheets & Patient Drapes"
    ],
    technicalSpecs: {
      tensileStrengthMD: ">= 30 N / 5cm",
      tensileStrengthCD: ">= 20 N / 5cm",
      elongationMD: "60% - 90%",
      elongationCD: "65% - 95%",
      colorFastness: "Grade 5.0 (Clean Medical Standard)",
      meltingPoint: "168°C"
    },
    highlightBadge: "Medical Certified",
    description: "Formulated specifically for the healthcare sector. Manufactured in sanitized positive-pressure environments with bio-compatible nonwoven fabrics in Medical Blue, Sea Green, and White."
  },
  {
    id: "agriculture-crop-cover-rolls",
    slug: "agriculture-crop-cover-rolls",
    name: "Agricultural UV Treated Crop Protection Cover",
    subtitle: "UV-Stabilized Agrofleece Rolls for Frost Protection, Insect Barrier & Microclimate Optimization",
    gsmRange: "15 GSM - 35 GSM",
    standardWidth: "1.60m, 3.20m (Ultrasonic Welded Joint Width)",
    rollLengthRange: "500m - 1000m",
    image: "/images/products/agrofleece_crop_cover.jpg",
    gallery: [
      "/images/products/agrofleece_crop_cover.jpg",
      "/images/products/p4.webp",
      "/images/products/p10.webp"
    ],
    polymer: "UV-Stabilized PP Copolymer with HALS Additives",
    bondingType: "Open-Pore High-Porosity Calender",
    keyFeatures: [
      "1% - 3% UV Nonwoven Fabric stabilizer addition for 12-24 months outdoor lifespan",
      "Optimal light transmission (85%+) for photosynthesis",
      "Permeable to air, water, and spray nutrients",
      "Creates thermal microclimate preventing frost and wind damage",
      "Chemical pesticide reduction by acting as physical insect barrier"
    ],
    applications: [
      "Open Field Floating Row Covers for Vegetables & Melons",
      "Greenhouse Shade Cloth & Thermal Insulation Curtains",
      "Fruit Wrapping & Banana Bunch Covers",
      "Nursery Sapling Bags & Seedbed Germination Blankets",
      "Turf Protection & Weed Control Underlay"
    ],
    technicalSpecs: {
      tensileStrengthMD: ">= 25 N / 5cm (at 17 GSM)",
      tensileStrengthCD: ">= 18 N / 5cm (at 17 GSM)",
      elongationMD: "70% - 100%",
      elongationCD: "75% - 105%",
      colorFastness: "UV Weathering Tested (ASTM G154)",
      meltingPoint: "165°C"
    },
    highlightBadge: "UV Stabilized",
    description: "A vital productivity tool for progressive farmers. Rotex Agro Cover protects valuable crops against frost down to -4°C, scorching UV rays, insect vectors, and hail while letting rain and sunlight nurture the produce."
  },
  {
    id: "packaging-carry-bag-nonwoven",
    slug: "packaging-carry-bag-nonwoven",
    name: "Nonwoven Fabric for Packaging & Shopping Bag",
    subtitle: "Solid Nonwoven Fabric Spunbond Rolls for Box Bags, U-Cut, D-Cut, and Loop Handle Bags",
    gsmRange: "40 GSM - 120 GSM",
    standardWidth: "1.60 Meters (Custom Slitting on Request)",
    rollLengthRange: "200m - 500m",
    image: "/images/applications/product_portfolio_packaging_bags.webp",
    gallery: [
      "/images/applications/product_portfolio_packaging_bags.webp",
      "/images/products/p7.webp",
      "/images/products/p11.webp",
      "/images/products/p14.webp"
    ],
    polymer: "Virgin PP with Anti-Splitting Polymer Modifiers",
    bondingType: "High-Definition Diamond Embossing",
    keyFeatures: [
      "Exceptional puncture resistance & tear strength for heavy groceries",
      "Optimized for flexographic, screen, and rotogravure printing",
      "Clean ultrasonic slitting and seam welding without fraying",
      "Eco-friendly reusable alternative to single-use plastics",
      "21 standard solid colors in stock for prompt dispatch"
    ],
    applications: [
      "Box Bags & Stitched Shopping Bags",
      "U-Cut & D-Cut Supermarket Grocery Shopping Bags",
      "Loop Handle Luxury Brand Retail Sacks",
      "Rice, Wheat, Spices & Split Pulses Sacks",
      "Stitched Box Bags & Nonwoven Garment Wardrobe Covers"
    ],
    technicalSpecs: {
      tensileStrengthMD: ">= 75 N / 5cm (at 60 GSM)",
      tensileStrengthCD: ">= 55 N / 5cm (at 60 GSM)",
      elongationMD: "55% - 80%",
      elongationCD: "60% - 85%",
      colorFastness: "Grade 4.5+ (Rubbing & Washing)",
      meltingPoint: "166°C"
    },
    highlightBadge: "High Volume",
    description: "The preferred roll choice for India's leading automated bag manufacturers. Provides high printing receptivity, flawless thermal ultrasonic sealing, and vibrant color consistency from the first meter to the last."
  },
  {
    id: "furniture-mattress-upholstery-rolls",
    slug: "furniture-mattress-upholstery-rolls",
    name: "Furniture, Mattress & Pocket Spring Fabric",
    subtitle: "High-Resilience Nonwoven Liners, Dust Covers, and Pocket Coil Sleeves for Bedding",
    gsmRange: "50 GSM - 160 GSM",
    standardWidth: "1.60 Meters & Custom Slit Rolls",
    rollLengthRange: "200m - 400m",
    image: "/images/products/furniture_pocket_springs.jpg",
    gallery: [
      "/images/products/furniture_pocket_springs.jpg",
      "/images/products/p8.webp",
      "/images/products/p12.webp"
    ],
    polymer: "Heavy-Gauge Virgin Polypropylene Homopolymer",
    bondingType: "Deep Calender Diamond Matrix",
    keyFeatures: [
      "High puncture resistance protects against spring coil protrusion",
      "Acoustic noise dampening prevents metal-on-metal spring squeaks",
      "Breathable structure inhibits moisture buildup and dust mites",
      "Easy stapling, cutting, and stitching for sofa carpentry",
      "Black and White shades in steady supply"
    ],
    applications: [
      "Individually Wrapped Pocket Spring Coil Encasements",
      "Mattress Quilting Backing & Flange Cloth",
      "Sofa Base & Underside Dust Barrier Cloth",
      "Cushion & Pillow Ticking Inserts",
      "Office Chair Backrest & Partition Liners"
    ],
    technicalSpecs: {
      tensileStrengthMD: ">= 110 N / 5cm (at 80 GSM)",
      tensileStrengthCD: ">= 80 N / 5cm (at 80 GSM)",
      elongationMD: "50% - 75%",
      elongationCD: "55% - 80%",
      colorFastness: "Grade 4.5 (Dry Clean & Rubbing)",
      meltingPoint: "167°C"
    },
    highlightBadge: "Heavy Duty",
    description: "Specifically engineered for mattress and upholstered furniture durability. Resists heavy cyclic compression, eliminates spring noise, and ensures reliable structural integrity across decades of everyday use."
  },
  {
    id: "hydrophilic-absorbent-nonwoven-rolls",
    slug: "hydrophilic-absorbent-nonwoven-rolls",
    name: "Hydrophilic Fast-Absorbing Nonwoven Fabric",
    subtitle: "Surfactant-Treated Spunbond Rolls for Instant Liquid Absorption & Moisture Strike-Through",
    gsmRange: "10 GSM - 40 GSM",
    standardWidth: "1.60 Meters (Custom slitting available)",
    rollLengthRange: "500m - 1000m",
    image: "/images/products/hydrophilic_water_drops.jpg",
    gallery: [
      "/images/products/hydrophilic_water_drops.jpg",
      "/images/products/p2.webp",
      "/images/products/p9.webp",
      "/images/products/p13.webp"
    ],
    polymer: "PP + Food-Safe Topical Hydrophilic Surfactant",
    bondingType: "Ultra-Fine Calender Dot Pattern",
    keyFeatures: [
      "Instantaneous liquid strike-through (< 3.0 seconds)",
      "Zero surface wet-back / re-wetting ensures dryness against skin",
      "Dermatologically safe, hypoallergenic formulation",
      "Uniform fiber distribution allows rapid liquid migration",
      "Maintains dry tactile feel under continuous pressure"
    ],
    applications: [
      "Baby Diaper Topsheet & Core Wrap",
      "Adult Incontinence Pads & Liners",
      "Feminine Hygiene Sanitary Napkins",
      "Agricultural Irrigation Capillary Mats",
      "Industrial Degreasing Wipes & Cleaning Cloths"
    ],
    technicalSpecs: {
      tensileStrengthMD: ">= 28 N / 5cm",
      tensileStrengthCD: ">= 18 N / 5cm",
      elongationMD: "65% - 95%",
      elongationCD: "70% - 100%",
      colorFastness: "Grade 5.0",
      meltingPoint: "165°C"
    },
    highlightBadge: "High Absorption",
    description: "While standard polypropylene is naturally water-repellent, our Hydrophilic Spunbond undergoes an advanced inline surfactant treatment that transforms the surface into a rapid fluid-wicking membrane with clear droplet absorption."
  }
];
