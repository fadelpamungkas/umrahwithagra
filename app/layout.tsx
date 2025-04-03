import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_Display } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import "./themes.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Load custom font
const caviarDreams = localFont({
  src: [
    {
      path: "../public/fonts/caviar_dreams/CaviarDreams.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/caviar_dreams/CaviarDreams_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-caviar-dreams",
})

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-noto-serif",
})

export const metadata: Metadata = {
  title: "Umrah With Agra - Hajj & Umrah Services",
  description:
    "Professional Hajj and Umrah services with personalized packages, expert guidance, and seamless pilgrimages.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", caviarDreams.variable, notoSerifDisplay.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
                <SpeedInsights />
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
