"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner1.jpeg')",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container relative z-10 px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("home.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">{t("home.hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/umrah">
              <Button size="lg" className="text-base font-medium bg-primary hover:bg-primary/90">
                {t("home.hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link 
            href={`https://wa.me/6285212135211?text=${encodeURIComponent(t("whatsapp.general"))}`} 
            target="_blank" 
            rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium bg-transparent border-white text-white hover:bg-white/80"
              >
                {t("cta.contact")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

