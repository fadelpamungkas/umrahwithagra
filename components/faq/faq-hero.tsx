"use client"

import { useLanguage } from "@/components/language-provider"

const FaqHero = () => {
  const { language } = useLanguage()

  return (
    <section className="relative w-full py-20 bg-primary text-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {language === "en" ? "Frequently Asked Questions" : "Pertanyaan yang Sering Diajukan"}
          </h1>
          <p className="text-lg text-primary-foreground/80">
            {language === "en"
              ? "Find answers to common questions about Hajj and Umrah services"
              : "Temukan jawaban untuk pertanyaan umum tentang layanan Haji dan Umrah"}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FaqHero

