"use client"

import { useLanguage } from "@/components/language-provider"

const GalleryHero = () => {
  const { language } = useLanguage()

  return (
    <section className="relative w-full pt-20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl text-primary md:text-5xl font-bold mb-6">
            {language === "en" ? "Our Gallery" : "Galeri Kami"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === "en"
              ? "Explore moments from our Hajj and Umrah journeys"
              : "Jelajahi momen-momen dari perjalanan Haji dan Umrah kami"}
          </p>
        </div>
      </div>
    </section>
  )
}

export default GalleryHero

