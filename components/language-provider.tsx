"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "id"
type Translations = Record<string, Record<Language, string>>

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

// Common translations
const translations: Translations = {
  "nav.home": {
    en: "Home",
    id: "Beranda",
  },
  "nav.hajj": {
    en: "Hajj",
    id: "Haji",
  },
  "nav.umrah": {
    en: "Umrah",
    id: "Umrah",
  },
  "nav.gallery": {
    en: "Gallery",
    id: "Galeri",
  },
  "nav.faq": {
    en: "FAQ",
    id: "FAQ",
  },
  "nav.contact": {
    en: "Contact",
    id: "Kontak",
  },
  "cta.contact": {
    en: "Contact us",
    id: "Hubungi kami",
  },
  "home.hero.title": {
    en: "Your Journey to Sacred Pilgrimage",
    id: "Perjalanan Suci Anda",
  },
  "home.hero.subtitle": {
    en: "Experience the spiritual journey of a lifetime with our personalized Hajj and Umrah services",
    id: "Alami perjalanan spiritual seumur hidup dengan layanan Haji dan Umrah yang dipersonalisasi",
  },
  "home.hero.cta": {
    en: "Umrah Packages",
    id: "Lihat Paket Umrah",
  },
  "home.featured.title": {
    en: "Featured Packages",
    id: "Paket Unggulan",
  },
  "home.why.title": {
    en: "Why Choose Us",
    id: "Mengapa Memilih Kami",
  },
  "home.testimonials.title": {
    en: "What Our Pilgrims Say",
    id: "Apa Kata Jamaah Kami",
  },
  "home.posts.title": {
    en: "Post",
    id: "Post",
  },
  "home.faq.title": {
    en: "Frequently Asked Questions",
    id: "Pertanyaan yang Sering Diajukan",
  },
  "footer.rights": {
    en: "All rights reserved",
    id: "Seluruh hak cipta",
  },
  "whatsapp.general": {
    en: "I have a question about your services",
    id: "Saya memiliki pertanyaan tentang layanan Anda",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en")
  }

  const t = (key: string) => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

