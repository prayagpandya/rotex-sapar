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
    name: "White",
    code: "ROT-01",
    fullName: "White",
    hex: "#FFFFFF",
    textColor: "dark",
    category: "Neutrals & Earth",
    popularFor: "Medical face masks, surgical drapes, hygiene products, agriculture crop fleece",
    recommendedGsm: "10 - 150 GSM",
    description: "High-whiteness index virgin polymer with uniform opacity, standard for healthcare, cleanroom, and agro fleece applications."
  },
  {
    id: "black",
    name: "Black",
    code: "ROT-02",
    fullName: "Black",
    hex: "#121214",
    textColor: "light",
    category: "Neutrals & Earth",
    popularFor: "Mattress pocket coils, sofa bottom dust covers, luxury shopping bags, automotive trunk liners",
    recommendedGsm: "40 - 200 GSM",
    description: "Deep carbon black with superior UV stability and maximum opacity for furniture, bedding, and packaging."
  },
  {
    id: "beige",
    name: "Beige",
    code: "ROT-03",
    fullName: "Beige",
    hex: "#D6C3A5",
    textColor: "dark",
    category: "Neutrals & Earth",
    popularFor: "Boutique carry bags, wardrobe organizers, garment covers, home furnishing backing",
    recommendedGsm: "50 - 100 GSM",
    description: "Elegant earthy sandy-beige neutral widely chosen by retail brands and home textile manufacturers."
  },
  {
    id: "ivory",
    name: "Ivory",
    code: "ROT-04",
    fullName: "Ivory",
    hex: "#F5ECCF",
    textColor: "dark",
    category: "Neutrals & Earth",
    popularFor: "Pillow ticking, garment linings, delicate luxury packaging, gift bags",
    recommendedGsm: "25 - 80 GSM",
    description: "Gentle creamy off-white tone delivering a warm textile finish without optical glare."
  },
  {
    id: "bright-ivory",
    name: "Bright Ivory",
    code: "ROT-05",
    fullName: "Bright Ivory",
    hex: "#FFF9E6",
    textColor: "dark",
    category: "Neutrals & Earth",
    popularFor: "Jewelry pouches, inner garment interfacing, cleanroom covers, premium shopping sacks",
    recommendedGsm: "30 - 80 GSM",
    description: "Luminous bright ivory finish with a radiant warm undertone, highly popular for premium packaging."
  },
  {
    id: "brown",
    name: "Brown",
    code: "ROT-06",
    fullName: "Brown",
    hex: "#5C341F",
    textColor: "light",
    category: "Neutrals & Earth",
    popularFor: "Luggage inner lining, shoe bags, heavy duty packaging, sofa internal upholstery",
    recommendedGsm: "60 - 140 GSM",
    description: "Durable rich brown shade offering dirt-masking properties and high abrasion resistance."
  },
  {
    id: "peacock-blue",
    name: "Peacock Blue",
    code: "ROT-07",
    fullName: "Peacock Blue",
    hex: "#006680",
    textColor: "light",
    category: "Blues & Medical",
    popularFor: "Luxury shopping bags, hospitality linen, medical attire, designer boutique totes",
    recommendedGsm: "40 - 100 GSM",
    description: "Striking peacock blue shade combining rich cyan-teal depth with vivid textile luster."
  },
  {
    id: "royal-blue",
    name: "Royal Blue",
    code: "ROT-08",
    fullName: "Royal Blue",
    hex: "#1D4ED8",
    textColor: "light",
    category: "Blues & Medical",
    popularFor: "Retail shopping bags, corporate event totes, surgeon scrubs, industrial protective covers",
    recommendedGsm: "40 - 120 GSM",
    description: "Royal blue nonwoven fabric with intense tint strength and high colorfastness."
  },
  {
    id: "lemon-yellow",
    name: "Lemon Yellow",
    code: "ROT-09",
    fullName: "Lemon Yellow",
    hex: "#FEE440",
    textColor: "dark",
    category: "Warm & Vibrant",
    popularFor: "Promotional event bags, children's products, caution signs, gift wrappers",
    recommendedGsm: "40 - 90 GSM",
    description: "Sunny, radiant, and eye-catching lemon shade that maximizes brand visibility on retail streets."
  },
  {
    id: "violet",
    name: "Violet",
    code: "ROT-10",
    fullName: "Violet",
    hex: "#7C3AED",
    textColor: "light",
    category: "Deep Luxury",
    popularFor: "Cosmetics packaging bags, salon capes, apparel covers, premium wedding totes",
    recommendedGsm: "60 - 100 GSM",
    description: "Purple-violet tone with high sheen, imparting sophisticated shelf appeal."
  },
  {
    id: "sea-green",
    name: "Sea Green",
    code: "ROT-11",
    fullName: "Sea Green",
    hex: "#0D9488",
    textColor: "light",
    category: "Greens & Eco",
    popularFor: "Surgical OT drapes, hospital gowns, organic grocery shopping bags, eco packaging",
    recommendedGsm: "25 - 90 GSM",
    description: "Calming sea green tone engineered for surgical drape compliance and eco-friendly branding."
  },
  {
    id: "orange",
    name: "Orange",
    code: "ROT-12",
    fullName: "Orange",
    hex: "#EA580C",
    textColor: "light",
    category: "Warm & Vibrant",
    popularFor: "Industrial safety covers, sweet boxes, fruit collection bags, hardware retail totes",
    recommendedGsm: "50 - 120 GSM",
    description: "Brilliant orange formulated with UV inhibitors for high visibility and outdoor resilience."
  },
  {
    id: "reliance-green",
    name: "Reliance Green",
    code: "ROT-13",
    fullName: "Reliance Green",
    hex: "#008444",
    textColor: "light",
    category: "Greens & Eco",
    popularFor: "Industrial wrapping, heavy-duty grocery bags, agricultural covers, corporate packaging",
    recommendedGsm: "50 - 120 GSM",
    description: "Signature industrial Reliance Green shade delivering uniform depth, durability, and commercial appeal."
  },
  {
    id: "maroon",
    name: "Maroon",
    code: "ROT-14",
    fullName: "Maroon",
    hex: "#6B1426",
    textColor: "light",
    category: "Deep Luxury",
    popularFor: "Saree covers, jewelry packaging, wedding gift bags, upholstery backing",
    recommendedGsm: "70 - 140 GSM",
    description: "Traditional deep burgundy tone preferred for high-value textile and bridal garment packaging."
  },
  {
    id: "light-maroon",
    name: "Light Maroon",
    code: "ROT-15",
    fullName: "Light Maroon",
    hex: "#A82244",
    textColor: "light",
    category: "Deep Luxury",
    popularFor: "Footwear bags, ethnic wear packaging, gift bags, decorative cushion liners",
    recommendedGsm: "50 - 110 GSM",
    description: "A balanced ruby-maroon shade blending rich warmth with high vibrance."
  },
  {
    id: "red",
    name: "Red",
    code: "ROT-16",
    fullName: "Red",
    hex: "#DC2626",
    textColor: "light",
    category: "Warm & Vibrant",
    popularFor: "Festive shopping bags, promotional merchandise, footwear dust bags, warning covers",
    recommendedGsm: "50 - 120 GSM",
    description: "High-impact vibrant red delivering vivid brand recall and flawless dye dispersion."
  },
  {
    id: "perrot-green",
    name: "Perrot Green",
    code: "ROT-17",
    fullName: "Perrot Green",
    hex: "#78B82A",
    textColor: "dark",
    category: "Greens & Eco",
    popularFor: "Organic store bags, plant wrapping, floral bouquet wrap, youth merchandise",
    recommendedGsm: "40 - 80 GSM",
    description: "Fresh, zesty lime green that provides exceptional visibility in modern retail and packaging."
  },
  {
    id: "pink",
    name: "Pink",
    code: "ROT-18",
    fullName: "Pink",
    hex: "#EC4899",
    textColor: "light",
    category: "Warm & Vibrant",
    popularFor: "Apparel boutiques, baby care bags, beauty & cosmetic kits, gift sacks",
    recommendedGsm: "40 - 90 GSM",
    description: "Warm pink with uniform color intensity, resistant to fade and color bleed."
  },
  {
    id: "nevy-blue",
    name: "Nevy Blue",
    code: "ROT-19",
    fullName: "Nevy Blue",
    hex: "#10224D",
    textColor: "light",
    category: "Blues & Medical",
    popularFor: "Corporate conference bags, automotive dust covers, mattress borders, travel luggage",
    recommendedGsm: "60 - 150 GSM",
    description: "Deep classic dark blue providing clean corporate elegance and excellent stain resistance."
  },
  {
    id: "golden-yellow",
    name: "Golden Yellow",
    code: "ROT-20",
    fullName: "Golden Yellow",
    hex: "#EAB308",
    textColor: "dark",
    category: "Warm & Vibrant",
    popularFor: "Festival carry bags, sweet shop packaging, agricultural harvest sacks",
    recommendedGsm: "50 - 100 GSM",
    description: "Warm golden hue with excellent opacity and vibrant festive appeal."
  },
  {
    id: "bottle-green",
    name: "Bottle Green",
    code: "ROT-21",
    fullName: "Bottle Green",
    hex: "#064E3B",
    textColor: "light",
    category: "Greens & Eco",
    popularFor: "Industrial wrapping, heavy duty eco sacks, sofa spring encasements, farm blankets",
    recommendedGsm: "60 - 160 GSM",
    description: "Dark forest bottle green with maximum opacity and superior outdoor weathering."
  }
];
