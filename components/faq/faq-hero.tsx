"use client"

import { useLanguage } from "@/components/language-provider"

const FaqHero = () => {
  const { language } = useLanguage()

  return (
    <section className="relative w-full pt-20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl text-primary md:text-5xl font-bold mb-6">
            {language === "en" ? "Frequently Asked Questions" : "Pertanyaan yang Sering Diajukan"}
          </h1>
          <p className="text-lg text-muted-foreground">
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

