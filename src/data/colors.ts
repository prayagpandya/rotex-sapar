export interface FabricColor {
  id: string;
  name: string;
  code: string;
  fullName: string;
  hex: string;
  textColor: 'light' | 'dark';
  category: 'Neutrals & Earth' | 'Blues & Medical' | 'Greens & Eco' | 'Warm & Vibrant' | 'Deep Luxury';
  popularFor: string;
  recommendedGsm: string;
  description: string;
}

export const fabricColors: FabricColor[] = [
  {
    id: "white",
    name: "WHITE",
    code: "ROT-01",
    fullName: "Pure Optical White",
    hex: "#FFFFFF",
    textColor: "dark",
    category: "Neutrals & Earth",
    popularFor: "Medical face masks, surgical drapes, hygiene products, agriculture crop fleece",
    recommendedGsm: "10 - 150 GSM",
    description: "High-whiteness index polymer with uniform opacity, standard for healthcare, cleanroom, and agro fleece applications."
  },
  {
    id: "black",
    name: "BLACK",
    code: "ROT-02",
    fullName: "Carbon Jet Black",
    hex: "#121214",
    textColor: "light",
    category: "Neutrals & Earth",
    popularFor: "Mattress pocket coils, sofa bottom dust covers, luxury shopping bags, automotive trunk liners",
    recommendedGsm: "40 - 200 GSM",
    description: "Deep, rich carbon black with superior UV stability and maximum opacity for furniture and packaging."
  },
  {
    id: "beige",
    name: "BEIGE",
    code: "ROT-03",
    fullName: "Classic Warm Beige",
    hex: "#D6C3A5",
    textColor: "dark",
    category: "Neutrals & Earth",
    popularFor: "Boutique carry bags, wardrobe organizers, garment covers, home furnishing backing",
    recommendedGsm: "50 - 100 GSM",
    description: "Elegant earthy neutral shade widely chosen by luxury retail brands and home textile makers."
  },
  {
    id: "ivory",
    name: "IVORY",
    code: "ROT-04",
    fullName: "Soft Ivory Cream",
    hex: "#FDF8E4",
    textColor: "dark",
    category: "Neutrals & Earth",
    popularFor: "Pillow ticking, garment linings, delicate packaging, wedding gift bags",
    recommendedGsm: "25 - 80 GSM",
    description: "Gentle off-white hue delivering a warm premium textile finish without optical glare."
  },
  {
    id: "brown",
    name: "BROWN",
    code: "ROT-05",
    fullName: "Rich Chocolate Brown",
    hex: "#5C341F",
    textColor: "light",
    category: "Neutrals & Earth",
    popularFor: "Luggage inner lining, shoe bags, heavy duty packaging, sofa internal upholstery",
    recommendedGsm: "60 - 140 GSM",
    description: "Deep, durable brown shade offering dirt-masking properties and high abrasion resistance."
  },
  {
    id: "p-blue",
    name: "P.BLUE",
    code: "ROT-06",
    fullName: "Pastel Sky Blue",
    hex: "#38BDF8",
    textColor: "dark",
    category: "Blues & Medical",
    popularFor: "Hospital patient gowns, 3-ply surgical masks, dental bibs, sanitary disposables",
    recommendedGsm: "15 - 50 GSM",
    description: "Recognized medical pastel blue, soft on the eyes, formulated with skin-safe certified pigments."
  },
  {
    id: "r-blue",
    name: "R.BLUE",
    code: "ROT-07",
    fullName: "Vibrant Royal Blue",
    hex: "#1D4ED8",
    textColor: "light",
    category: "Blues & Medical",
    popularFor: "Retail shopping bags, corporate event totes, surgeon scrubs, industrial covers",
    recommendedGsm: "40 - 120 GSM",
    description: "Bright, commanding royal blue non-woven fabric with intense tint strength and high colorfastness."
  },
  {
    id: "l-yellow",
    name: "L.YELLOW",
    code: "ROT-08",
    fullName: "Bright Lemon Yellow",
    hex: "#FEF08A",
    textColor: "dark",
    category: "Warm & Vibrant",
    popularFor: "Promotional event bags, children's products, caution signs, gift wrappers",
    recommendedGsm: "40 - 90 GSM",
    description: "Sunny and eye-catching shade that maximizes brand visibility on retail streets."
  },
  {
    id: "violet",
    name: "VIOLET",
    code: "ROT-09",
    fullName: "Imperial Violet",
    hex: "#7C3AED",
    textColor: "light",
    category: "Deep Luxury",
    popularFor: "Cosmetics packaging bags, salon capes, luxury apparel covers, gift bags",
    recommendedGsm: "60 - 100 GSM",
    description: "Regal purple-violet tone with high sheen, imparting sophisticated shelf appeal."
  },
  {
    id: "s-green",
    name: "S.GREEN",
    code: "ROT-10",
    fullName: "Sea Green / Aqua",
    hex: "#0D9488",
    textColor: "light",
    category: "Greens & Eco",
    popularFor: "Surgical OT drapes, hospital gowns, organic grocery shopping bags, eco packaging",
    recommendedGsm: "25 - 90 GSM",
    description: "Calming sea green tone engineered for surgical drape compliance and eco-friendly branding."
  },
  {
    id: "orange",
    name: "ORANGE",
    code: "ROT-11",
    fullName: "High-Visibility Tangerine Orange",
    hex: "#EA580C",
    textColor: "light",
    category: "Warm & Vibrant",
    popularFor: "Industrial safety covers, festive sweet bags, fruit collection bags, hardware retail totes",
    recommendedGsm: "50 - 120 GSM",
    description: "Energetic and brilliant orange formulated with UV inhibitors for prolonged outdoor resilience."
  },
  {
    id: "r-green",
    name: "R.GREEN",
    code: "ROT-12",
    fullName: "Royal / Emerald Green",
    hex: "#15803D",
    textColor: "light",
    category: "Greens & Eco",
    popularFor: "Supermarket grocery bags, nursery sapling root bags, horticulture blankets",
    recommendedGsm: "50 - 100 GSM",
    description: "Rich botanical green symbolizing nature and sustainability, favorite of grocery chains."
  },
  {
    id: "maroon",
    name: "MAROON",
    code: "ROT-13",
    fullName: "Deep Classic Maroon",
    hex: "#881337",
    textColor: "light",
    category: "Deep Luxury",
    popularFor: "Saree covers, jewelry packaging, wedding gift bags, upholstery backing",
    recommendedGsm: "70 - 140 GSM",
    description: "Traditional deep burgundy tone preferred for high-value textile and bridal garment packaging."
  },
  {
    id: "red",
    name: "RED",
    code: "ROT-14",
    fullName: "Signal Scarlet Red",
    hex: "#DC2626",
    textColor: "light",
    category: "Warm & Vibrant",
    popularFor: "Festive shopping bags, promotional merchandise, footwear dust bags, warning covers",
    recommendedGsm: "50 - 120 GSM",
    description: "Dynamic high-impact red delivering vivid brand recall and flawless dye dispersion."
  },
  {
    id: "p-green",
    name: "P.GREEN",
    code: "ROT-15",
    fullName: "Fresh Parrot Green",
    hex: "#84CC16",
    textColor: "dark",
    category: "Greens & Eco",
    popularFor: "Organic store bags, plant wrapping, floral bouquet wrap, youth merchandise",
    recommendedGsm: "40 - 80 GSM",
    description: "Lively, fresh neon lime green that stands out in modern retail and packaging."
  },
  {
    id: "pink",
    name: "PINK",
    code: "ROT-16",
    fullName: "Candy Blossom Pink",
    hex: "#EC4899",
    textColor: "light",
    category: "Warm & Vibrant",
    popularFor: "Apparel boutiques, baby care bags, beauty & cosmetic kits, gift sacks",
    recommendedGsm: "40 - 90 GSM",
    description: "Delightful warm pink with uniform color intensity, resistant to fade and color bleed."
  },
  {
    id: "n-blue",
    name: "N.BLUE",
    code: "ROT-17",
    fullName: "Deep Navy Blue",
    hex: "#1E3A8A",
    textColor: "light",
    category: "Blues & Medical",
    popularFor: "Corporate conference bags, automotive dust covers, mattress borders, travel luggage",
    recommendedGsm: "60 - 150 GSM",
    description: "Authoritative dark navy blue providing clean professional looks and stain resistance."
  },
  {
    id: "g-yellow",
    name: "G.YELLOW",
    code: "ROT-18",
    fullName: "Golden Mango Yellow",
    hex: "#EAB308",
    textColor: "dark",
    category: "Warm & Vibrant",
    popularFor: "Festive festival carry bags, sweet shop packaging, agricultural harvest sacs",
    recommendedGsm: "50 - 100 GSM",
    description: "Warm golden hue with excellent opacity and vibrant festive appeal."
  },
  {
    id: "b-ivory",
    name: "B.IVORY",
    code: "ROT-19",
    fullName: "Bright Pearl Ivory",
    hex: "#FFFBEB",
    textColor: "dark",
    category: "Neutrals & Earth",
    popularFor: "High-end jewelry pouches, inner garment interfacing, cleanroom covers",
    recommendedGsm: "30 - 80 GSM",
    description: "Luminous pearl finish with a balanced warm undertone for refined packaging."
  },
  {
    id: "b-green",
    name: "B.GREEN",
    code: "ROT-20",
    fullName: "Deep Bottle Green",
    hex: "#064E3B",
    textColor: "light",
    category: "Greens & Eco",
    popularFor: "Industrial wrapping, heavy duty eco sacks, sofa spring encasements, farm blankets",
    recommendedGsm: "60 - 160 GSM",
    description: "Ultra-dark forest bottle green with maximum opacity and superior outdoor weathering."
  },
  {
    id: "l-maroon",
    name: "L.MAROON",
    code: "ROT-21",
    fullName: "Light Crimson Maroon",
    hex: "#9F1239",
    textColor: "light",
    category: "Deep Luxury",
    popularFor: "Footwear bags, ethnic wear bags, luxury gift wrap, decorative cushion liners",
    recommendedGsm: "50 - 110 GSM",
    description: "A balanced ruby-maroon shade blending high vibrance with premium warmth."
  }
];
