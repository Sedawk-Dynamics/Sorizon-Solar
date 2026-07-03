import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { StickyWhatsApp } from "@/components/layout/sticky-whatsapp"
import { ExitPopup } from "@/components/layout/exit-popup"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Sorizon Solar Solutions - Premium Solar Installation & Energy Savings",
  description:
    "Leading solar energy solutions for residential and commercial properties. Save up to 75% on electricity bills with Sorizon Solar's high-quality solar panel installations.",
  keywords: [
    "solar panels",
    "solar installation",
    "residential solar",
    "commercial solar",
    "solar energy",
    "renewable energy",
    "solar savings calculator",
    "sustainable energy solutions",
  ].join(", "),
  authors: [{ name: "Sorizon Solar Solutions" }],
  creator: "Sorizon Solar Solutions",
  publisher: "Sorizon Solar Solutions",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sorizonsolar.com",
    title: "Sorizon Solar Solutions - Premium Solar Energy",
    description:
      "Transform your energy consumption with cutting-edge solar technology. Reduce costs, increase sustainability, and join the clean energy revolution.",
    siteName: "Sorizon Solar Solutions",
    images: [
      {
        url: "https://sorizonsolar.com/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Sorizon Solar - Commercial Solar Farm",
        type: "image/jpeg",
      },
      {
        url: "https://sorizonsolar.com/images/solar-hero.jpg",
        width: 800,
        height: 600,
        alt: "Professional Solar Panel Installation",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card for social sharing
  twitter: {
    card: "summary_large_image",
    title: "Sorizon Solar Solutions - Clean Energy for Your Home & Business",
    description:
      "Professional solar installations with 30-year warranty. Get instant savings estimate with our solar calculator.",
    creator: "@SorizionSolar",
    images: ["https://sorizonsolar.com/images/hero-bg.jpg"],
  },

  // Favicon and app icons
  icons: {
    icon: "/images/image.png",
    apple: "/images/image.png",
    shortcut: "/images/image.png",
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional metadata
  category: "Technology",
  classification: "Solar Energy",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <StickyWhatsApp />
        <ExitPopup />
        <Analytics />
      </body>
    </html>
  )
}
