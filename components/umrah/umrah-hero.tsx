"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const UmrahHero = () => {
  const { language } = useLanguage()

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner3.jpg')",
          backgroundPosition: "bottom",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container relative z-10 px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {language === "en" ? "Umrah Packages" : "Paket Umrah"}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            {language === "en"
              ? "Experience the spiritual journey of Umrah with our carefully designed packages that cater to your needs and preferences."
              : "Alami perjalanan spiritual Umrah dengan paket-paket kami yang dirancang dengan cermat untuk memenuhi kebutuhan dan preferensi Anda."}
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

export default UmrahHero

