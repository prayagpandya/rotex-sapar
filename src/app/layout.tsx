import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { QuoteModal } from "@/components/QuoteModal";
import { QuoteProvider } from "@/components/QuoteModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rotex Nonwoven Fabrics | PP Spunbond Fabric Rolls (10 - 200 GSM)",
  description:
    "Leading manufacturer and exporter of PP Spunbond Nonwoven Fabric Rolls in 10 to 200 GSM with 21+ colors. Certified for medical masks, agro crop cover, eco carry bags, and furniture upholstery.",
  keywords: [
    "PP Spunbond Nonwoven Fabric Rolls",
    "Rotex Nonwoven",
    "Nonwoven fabric roll manufacturer India",
    "Medical nonwoven fabric",
    "Agriculture crop cover fleece",
    "Spunbond shopping bag fabric",
    "Nirav Patel Rotex",
    "Prakash Patel Rotex",
    "10 to 200 GSM nonwoven rolls"
  ],
  authors: [{ name: "Rotex Nonwoven Fabrics" }],
  openGraph: {
    title: "Rotex Nonwoven Fabrics | PP Spunbond Fabric Rolls",
    description:
      "Precision PP Spunbond Nonwoven Fabric Rolls (10-200 GSM, 21 Colors). Direct factory pricing from directors Nirav Patel & Prakash Patel.",
    url: "https://rotexfab.com",
    siteName: "Rotex Nonwoven Fabrics",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/branding/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/branding/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 selection:bg-sky-600 selection:text-white">
        <QuoteProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <QuoteModal />
        </QuoteProvider>
      </body>
    </html>
  );
}
