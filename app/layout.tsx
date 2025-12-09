import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sohani Clean | Premium Laundry Soaps & Detergents",
  description: "Experience the power of clean with Sohani Clean - Premium laundry soaps and detergents that leave your clothes fresh, bright, and beautifully clean. Eco-friendly formulas for your family.",
  keywords: "laundry soap, detergent, cleaning products, fabric care, stain remover, eco-friendly detergent",
  openGraph: {
    title: "Sohani Clean | Premium Laundry Soaps & Detergents",
    description: "Experience the power of clean with premium laundry solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
