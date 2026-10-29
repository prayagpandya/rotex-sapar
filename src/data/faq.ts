export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  location: string;
  industry: string;
  quote: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    clientName: "Rajesh Singhania",
    company: "EcoBags India Corp",
    location: "Ahmedabad, Gujarat",
    industry: "Packaging & Bag Manufacturing",
    quote: "Rotex has been our primary nonwoven roll supplier for 5+ years. Their GSM uniformity is unmatched — our high-speed bag making machines run with zero web breaks, saving us hours of downtime each week. Nirav Patel always ensures timely roll dispatch.",
    rating: 5
  },
  {
    id: "2",
    clientName: "Dr. Vikram Kulkarni",
    company: "Apex Medisystems Healthcare",
    location: "Pune, Maharashtra",
    industry: "Medical PPE & Disposables",
    quote: "Finding consistent medical-grade PP nonwoven rolls with genuine skin compatibility was tough until we partnered with Rotex. Their optical white and pastel blue 25 GSM fabric passes all bio-compatibility and barrier inspections with flying colors.",
    rating: 5
  },
  {
    id: "3",
    clientName: "Sunil Verma",
    company: "ComfortRest Mattresses",
    location: "Bengaluru, Karnataka",
    industry: "Mattress & Pocket Springs",
    quote: "We consume over 40 tons of 70-100 GSM black spunbond rolls per month for our pocket spring units. Prakash Patel and the production team maintain tight micrometer tolerances, ensuring our coils never pierce the fabric.",
    rating: 5
  },
  {
    id: "4",
    clientName: "Ramesh Patel",
    company: "GreenFields Agro Solutions",
    location: "Anand, Gujarat",
    industry: "Horticulture & Agriculture",
    quote: "The UV-stabilized 17 GSM crop cover rolls from Rotex saved our watermelon and tomato harvest from early winter frosts. Farmers in our network saw a 25% yield boost. Exceptional quality and direct factory transparency.",
    rating: 5
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FaqItem[] = [
  {
    question: "What is the GSM range available for Rotex PP Spunbond Fabric Rolls?",
    answer: "We manufacture PP Spunbond Nonwoven Fabric Rolls across a comprehensive spectrum from 10 GSM up to 200 GSM in various formulations including hydrophobic, hydrophilic, UV-stabilized, and flame-retardant.",
    category: "Specifications"
  },
  {
    question: "What is the standard width and roll length of your fabric rolls?",
    answer: "Our standard extrusion master roll width is 1.60 meters (1600mm). However, with our inline precision slitting machines, we can custom slit rolls down to custom widths (e.g. 100mm, 175mm for masks, 300mm, 800mm, etc.). Standard roll lengths range from 200 meters up to 1000 meters depending on the GSM.",
    category: "Specifications"
  },
  {
    question: "How do you calculate the net weight of a nonwoven fabric roll?",
    answer: "The formula is: Net Weight (kg) = (GSM × Width in meters × Length in meters) ÷ 1000. For example, a 70 GSM roll of 1.6m width and 300m length weighs: (70 × 1.6 × 300) ÷ 1000 = 33.60 kg. You can use our interactive Roll Weight Calculator on this website for instant lookups.",
    category: "Technical"
  },
  {
    question: "Are Rotex PP Spunbond Nonwoven fabrics eco-friendly and recyclable?",
    answer: "Yes, 100%. Polypropylene (PP) is a thermoplastic polymer coded Resin Identification Code #5. It is non-toxic, free from BPA and plasticizers, and fully recyclable into secondary industrial polymer compounds, making it an eco-friendly alternative to single-use plastics.",
    category: "Environmental"
  },
  {
    question: "How many standard colors are available in stock?",
    answer: "We offer 21 standard factory nonwoven fabric colors including White, Black, Beige, Ivory, Bright Ivory, Brown, Peacock Blue, Royal Blue, Lemon Yellow, Violet, Sea Green, Orange, Reliance Green, Maroon, Light Maroon, Red, Perrot Green, Pink, Nevy Blue, Golden Yellow, and Bottle Green. Custom color shade matching against Pantone or client swatch samples is also available for bulk orders.",
    category: "Colors & Customization"
  },
  {
    question: "How can I request a price quotation or place an order?",
    answer: "You can request a quote directly through our online RFQ form, or connect immediately with our Directors Nirav Patel (+91 99251 95928) or Prakash Patel (+91 99251 95930) via direct phone call or WhatsApp. You can also email us at rotexfab@yahoo.com.",
    category: "Commercial & Ordering"
  }
];
