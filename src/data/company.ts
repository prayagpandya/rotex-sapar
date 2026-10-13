export interface DirectorContact {
  name: string;
  role: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  avatarText: string;
  bio: string;
}

export const companyData = {
  name: "Rotex Fabric Pvt. Ltd.",
  legalName: "Rotex Fabric Pvt. Ltd.",
  shortName: "Rotex Fabric",
  tagline: "Precision Engineered PP Spunbond Nonwoven Fabric Rolls",
  established: "2012",
  email: "rotexfab@yahoo.com",
  inquiryEmail: "rotexfab@yahoo.com",
  website: "www.rotexfabric.com",
  officeHours: "Monday - Saturday: 9:00 AM - 7:30 PM IST",
  address: {
    surveyNo: "Survey No.275/1/P",
    plotNo: "Plot No.22/23",
    gate: "Gujarat Alloy Cast Gate",
    road: "Shapar Main Road",
    village: "Shapar (Veraval)",
    taluka: "Kotda Sangani",
    district: "Rajkot",
    state: "Gujarat",
    country: "India",
    pinCode: "360024",
    plant: "Survey No.275/1/P, Plot No.22/23, Gujarat Alloy Cast Gate, Shapar Main Road, At :- Shapar (Veraval) 360024. Tal :- Kotda Sangani, Dist :- Rajkot, Gujarat",
    displayAddress: "Survey No.275/1/P, Plot No.22/23, Gujarat Alloy Cast Gate, Shapar Main Road, At :- Shapar (Veraval) 360024. Tal :- Kotda Sangani, Dist :- Rajkot, Gujarat"
  },
  directors: [
    {
      name: "Nirav Patel",
      role: "Director - Commercial & Technical Sales",
      phone: "+919925195928",
      displayPhone: "+91 99251 95928",
      whatsappNumber: "919925195928",
      whatsappMessage: "Hello Nirav Patel, I am interested in Rotex PP Spunbond Nonwoven Fabric Rolls. Please share quotation and technical specifications.",
      email: "rotexfab@yahoo.com",
      avatarText: "NP",
      bio: "Over 15+ years of expertise in polymer extrusion, industrial spunbond formulation, and commercial distribution across domestic & international markets."
    },
    {
      name: "Prakash Patel",
      role: "Director - Operations & Plant Production",
      phone: "+919925195930",
      displayPhone: "+91 99251 95930",
      whatsappNumber: "919925195930",
      whatsappMessage: "Hello Prakash Patel, I would like to inquire about bulk manufacturing capacity, custom GSM slitting, and delivery schedules for PP Nonwoven Rolls.",
      email: "rotexfab@yahoo.com",
      avatarText: "PP",
      bio: "Leading state-of-the-art automated spunbond extrusion lines, quality laboratory adherence, and multi-shift capacity management."
    }
  ] as DirectorContact[],
  stats: [
    { label: "Annual Extrusion Capacity", value: "18,000+", unit: "Metric Tons" },
    { label: "GSM Spectrum", value: "10 - 200", unit: "GSM Range" },
    { label: "Standard Production Width", value: "1.6", unit: "Meters (Custom Slit)" },
    { label: "Standard Vibrant Colors", value: "21+", unit: "Non-woven Fabric Shades" },
    { label: "Quality Conformity", value: "100%", unit: "Virgin Polypropylene" },
    { label: "Global Clients Served", value: "450+", unit: "B2B Partners" }
  ],
  certifications: [
    "ISO 9001:2015 Certified Manufacturing",
    "OEKO-TEX Standard 100 Compliant",
    "REACH & RoHS Compliant Additives",
    "Food & Medical Contact Safety Evaluated",
    "100% Recyclable Eco-Friendly Polypropylene"
  ]
};
