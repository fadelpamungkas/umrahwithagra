"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const HajjHero = () => {
  const { language } = useLanguage()

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner2.jpg')",
          backgroundPosition: "top",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container relative z-10 px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {language === "en" ? "Hajj Packages" : "Paket Haji"}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            {language === "en"
              ? "Embark on the journey of a lifetime with our comprehensive Hajj packages designed to provide a spiritually enriching experience."
              : "Jalani perjalanan seumur hidup dengan paket Haji komprehensif kami yang dirancang untuk memberikan pengalaman spiritual yang memperkaya."}
          </p>
          <Link href="https://wa.me/6285212135211" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-base font-medium">
              {language === "en" ? "Inquire Now" : "Tanyakan Sekarang"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HajjHero

