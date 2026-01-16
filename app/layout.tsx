import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { BRAND, SEO } from "@/lib/constants"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: BRAND.name }],
  openGraph: {
    title: SEO.title,
    description: BRAND.description,
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: SEO.themeColor,
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {/* Note: @vercel/analytics removed for static hosting compatibility.
            Re-add if deploying to Vercel. */}
      </body>
    </html>
  )
}
