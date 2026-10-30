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
  tagline: "Precision Engineered PP Spunbond Nonwoven Fabric",
  established: "2012",
  email: "rotexfab@yahoo.com",
  inquiryEmail: "rotexfab@yahoo.com",
  website: "www.rotexfabric.com",
  gstin: "24AAECR5787J1ZW",
  officeHours: "Thursday – Tuesday: 10:00 AM – 7:00 PM | Wednesday: Closed (Holiday)",
  weeklySchedule: [
    { day: "Sunday", hours: "10:00 AM – 7:00 PM", isHoliday: false },
    { day: "Monday", hours: "10:00 AM – 7:00 PM", isHoliday: false },
    { day: "Tuesday", hours: "10:00 AM – 7:00 PM", isHoliday: false },
    { day: "Wednesday", hours: "Closed / Holiday", isHoliday: true },
    { day: "Thursday", hours: "10:00 AM – 7:00 PM", isHoliday: false },
    { day: "Friday", hours: "10:00 AM – 7:00 PM", isHoliday: false },
    { day: "Saturday", hours: "10:00 AM – 7:00 PM", isHoliday: false }
  ],
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
    gstin: "24AAECR5787J1ZW",
    plant: "Survey No.275/1/P, Plot No.22/23, Gujarat Alloy Cast Gate, Shapar Main Road, At :- Shapar (Veraval) 360024. Tal :- Kotda Sangani, Dist :- Rajkot.- Gujarat.",
    displayAddress: "Survey No.275/1/P, Plot No.22/23, Gujarat Alloy Cast Gate, Shapar Main Road, At :- Shapar (Veraval) 360024. Tal :- Kotda Sangani, Dist :- Rajkot.- Gujarat.",
    googleMapsUrl: "https://maps.app.goo.gl/KcnPrddDdH4kSLgJ9",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.308722247781!2d70.7843186!3d22.159999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835a1c2327d7f%3A0x8ef56b59767722ef!2sROTEX%20FABRIC%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1730300000000!5m2!1sen!2sin"
  },
  directors: [
    {
      name: "Nirav Patel",
      role: "Director",
      phone: "+919925195928",
      displayPhone: "09925195928",
      whatsappNumber: "919925195928",
      whatsappMessage: "Hello Nirav Patel,\n\nI am interested in Rotex PP Spunbond Nonwoven Fabric.\n\nPlease share the available GSM options, colours, pricing, and sample availability.\n\nThank you.",
      email: "rotexfab@yahoo.com",
      avatarText: "NP",
      bio: "Over 15+ years of expertise in polymer extrusion, industrial spunbond formulation, and commercial distribution across domestic & international markets."
    },
    {
      name: "Prakash Patel",
      role: "Director",
      phone: "+919925195930",
      displayPhone: "09925195930",
      whatsappNumber: "919925195930",
      whatsappMessage: "Hello Prakash Patel,\n\nI am interested in Rotex PP Spunbond Nonwoven Fabric.\n\nPlease share the available GSM options, colours, pricing, and sample availability.\n\nThank you.",
      email: "rotexfab@yahoo.com",
      avatarText: "PP",
      bio: "Overseeing executive management, national & international marketing, business growth, and quality-driven nonwoven extrusion operations."
    }
  ] as DirectorContact[],
  stats: [
    { label: "Annual Extrusion Capacity", value: "18,000+", unit: "Metric Tons" },
    { label: "GSM Spectrum", value: "10 - 200", unit: "GSM Range" },
    { label: "Standard Production Width", value: "1.6", unit: "Meters (Custom Slit)" },
    { label: "Standard Colors", value: "21+", unit: "Nonwoven Fabric Shades" },
    { label: "Quality Conformity", value: "100%", unit: "Virgin Polypropylene" },
    { label: "Global Clients Served", value: "450+", unit: "B2B Partners" }
  ],
  certifications: [
    "OEKO-TEX Standard 100 Compliant",
    "REACH & RoHS Compliant Additives",
    "Food & Medical Contact Safety Evaluated",
    "100% Recyclable Eco-Friendly Polypropylene"
  ]
};
