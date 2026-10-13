export interface FabricRollSpec {
  srNo: number;
  gsm: number;
  sizeMeters: number;
  lengthMeters: number;
  approxNetWeightKg: number;
  category: 'Lightweight (10-35 GSM)' | 'Medium Grade (40-80 GSM)' | 'Heavy Duty (85-200 GSM)';
  primaryUses: string[];
}

export const fabricRollSpecs: FabricRollSpec[] = [
  { srNo: 1, gsm: 10, sizeMeters: 1.6, lengthMeters: 1000, approxNetWeightKg: 16.00, category: 'Lightweight (10-35 GSM)', primaryUses: ['Sanitary backing', 'Bouffant caps', 'Medical disposables'] },
  { srNo: 2, gsm: 15, sizeMeters: 1.6, lengthMeters: 1000, approxNetWeightKg: 24.00, category: 'Lightweight (10-35 GSM)', primaryUses: ['Surgical mask inner layer', 'Shoe covers', 'Crop protection fleece'] },
  { srNo: 3, gsm: 22, sizeMeters: 1.6, lengthMeters: 1000, approxNetWeightKg: 35.20, category: 'Lightweight (10-35 GSM)', primaryUses: ['Medical 3-ply mask outer layer', 'Agriculture frost cover', 'Hygiene topsheet'] },
  { srNo: 4, gsm: 25, sizeMeters: 1.6, lengthMeters: 1000, approxNetWeightKg: 40.00, category: 'Lightweight (10-35 GSM)', primaryUses: ['Surgical gown lightweight', 'Protective coveralls', 'Crop fleece'] },
  { srNo: 5, gsm: 30, sizeMeters: 1.6, lengthMeters: 800, approxNetWeightKg: 38.40, category: 'Lightweight (10-35 GSM)', primaryUses: ['SMS surgical gowns', 'Agriculture heavy fleece', 'Disposable bedsheets'] },
  { srNo: 6, gsm: 32, sizeMeters: 1.6, lengthMeters: 600, approxNetWeightKg: 30.72, category: 'Lightweight (10-35 GSM)', primaryUses: ['Garment dust wraps', 'Medical drape wraps', 'Packaging liners'] },
  { srNo: 7, gsm: 35, sizeMeters: 1.6, lengthMeters: 600, approxNetWeightKg: 33.60, category: 'Lightweight (10-35 GSM)', primaryUses: ['Hospital bed covers', 'Shoe covers heavy', 'Apparel interlining'] },
  
  { srNo: 8, gsm: 40, sizeMeters: 1.6, lengthMeters: 500, approxNetWeightKg: 32.00, category: 'Medium Grade (40-80 GSM)', primaryUses: ['Light shopping bags', 'Suit covers', 'Automotive headliner backing'] },
  { srNo: 9, gsm: 45, sizeMeters: 1.6, lengthMeters: 500, approxNetWeightKg: 36.00, category: 'Medium Grade (40-80 GSM)', primaryUses: ['Retail shopping bags', 'Garment bags', 'Pillow protectors'] },
  { srNo: 10, gsm: 50, sizeMeters: 1.6, lengthMeters: 400, approxNetWeightKg: 32.00, category: 'Medium Grade (40-80 GSM)', primaryUses: ['D-Cut carry bags', 'Mattress pocket coil encasing', 'Storage organizer'] },
  { srNo: 11, gsm: 54, sizeMeters: 1.6, lengthMeters: 400, approxNetWeightKg: 34.56, category: 'Medium Grade (40-80 GSM)', primaryUses: ['Promotional tote bags', 'Home furnishing backing', 'Filtration media'] },
  { srNo: 13, gsm: 60, sizeMeters: 1.6, lengthMeters: 400, approxNetWeightKg: 38.40, category: 'Medium Grade (40-80 GSM)', primaryUses: ['Grocery tote bags', 'Mattress quilting backing', 'Sofa dust cover'] },
  { srNo: 14, gsm: 65, sizeMeters: 1.6, lengthMeters: 300, approxNetWeightKg: 31.20, category: 'Medium Grade (40-80 GSM)', primaryUses: ['Loop handle shopping bags', 'Cushion inner covers', 'Shoe bags'] },
  { srNo: 15, gsm: 70, sizeMeters: 1.6, lengthMeters: 300, approxNetWeightKg: 33.60, category: 'Medium Grade (40-80 GSM)', primaryUses: ['Standard supermarket carry bags', 'Luggage inner lining', 'Tablecloths'] },
  { srNo: 16, gsm: 75, sizeMeters: 1.6, lengthMeters: 300, approxNetWeightKg: 36.00, category: 'Medium Grade (40-80 GSM)', primaryUses: ['Premium retail bags', 'Mattress base cloth', 'Gift packaging'] },
  { srNo: 17, gsm: 80, sizeMeters: 1.6, lengthMeters: 300, approxNetWeightKg: 38.40, category: 'Medium Grade (40-80 GSM)', primaryUses: ['Heavy duty retail bags', 'Upholstery padding cloth', 'Wardrobe organizers'] },

  { srNo: 18, gsm: 85, sizeMeters: 1.6, lengthMeters: 250, approxNetWeightKg: 34.00, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Industrial packaging bags', 'Furniture sofa bottom cloth', 'Geotextile separation'] },
  { srNo: 19, gsm: 90, sizeMeters: 1.6, lengthMeters: 250, approxNetWeightKg: 36.00, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Box shopping bags', 'Spring mattress insulator pad', 'Shoe interlining'] },
  { srNo: 20, gsm: 95, sizeMeters: 1.6, lengthMeters: 250, approxNetWeightKg: 38.00, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Heavy packaging covers', 'Acoustic isolation wrap', 'Car seat backing'] },
  { srNo: 21, gsm: 100, sizeMeters: 1.6, lengthMeters: 250, approxNetWeightKg: 40.00, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['High-load carry bags', 'Mattress spring pocket wraps', 'Footwear reinforcement'] },
  { srNo: 22, gsm: 105, sizeMeters: 1.6, lengthMeters: 250, approxNetWeightKg: 42.00, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Heavy packaging sacs', 'Sofa spring insulation', 'Industrial filtration'] },
  { srNo: 23, gsm: 110, sizeMeters: 1.6, lengthMeters: 250, approxNetWeightKg: 44.00, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Rigid tote bags', 'Mattress core wrapper', 'Geotechnical road base'] },
  { srNo: 24, gsm: 120, sizeMeters: 1.6, lengthMeters: 200, approxNetWeightKg: 38.40, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Extra strong tote bags', 'Luggage structural lining', 'Car trunk liner'] },
  { srNo: 25, gsm: 125, sizeMeters: 1.6, lengthMeters: 200, approxNetWeightKg: 40.00, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Heavy industrial sleeves', 'Acoustic wall panel fleece', 'Construction underlay'] },
  { srNo: 26, gsm: 130, sizeMeters: 1.6, lengthMeters: 200, approxNetWeightKg: 41.60, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Upholstery framework backing', 'Geotextile drainage wrap', 'Heavy insulation'] },
  { srNo: 27, gsm: 140, sizeMeters: 1.6, lengthMeters: 200, approxNetWeightKg: 44.80, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Industrial packaging barrier', 'Pocket spring protection', 'Heavy filter media'] },
  { srNo: 28, gsm: 150, sizeMeters: 1.6, lengthMeters: 200, approxNetWeightKg: 48.00, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['High-tensile mattress edge', 'Structural automotive textile', 'Drainage liner'] },
  { srNo: 29, gsm: 160, sizeMeters: 1.6, lengthMeters: 200, approxNetWeightKg: 51.20, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Heavy carpet underlayment', 'Geotextile barrier', 'Reinforced packaging'] },
  { srNo: 30, gsm: 180, sizeMeters: 1.6, lengthMeters: 200, approxNetWeightKg: 57.60, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Ultra heavy duty industrial covers', 'Automotive wheel arch liner', 'Erosion control'] },
  { srNo: 31, gsm: 200, sizeMeters: 1.6, lengthMeters: 200, approxNetWeightKg: 64.00, category: 'Heavy Duty (85-200 GSM)', primaryUses: ['Maximum durability mattress felt replacement', 'Heavy roadbed geotextile', 'Industrial containment'] }
];

export function calculateRollWeight(gsm: number, widthMeters: number, lengthMeters: number): number {
  return Number(((gsm * widthMeters * lengthMeters) / 1000).toFixed(2));
}

export function calculateRollLength(weightKg: number, gsm: number, widthMeters: number): number {
  if (gsm <= 0 || widthMeters <= 0) return 0;
  return Number(((weightKg * 1000) / (gsm * widthMeters)).toFixed(1));
}
