"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const HajjCta = () => {
  const { language } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            {language === "en" ? "Ready to Embark on Your Sacred Journey?" : "Siap Memulai Perjalanan Suci Anda?"}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80">
            {language === "en"
              ? "Contact our team today to discuss your Hajj plans and secure your place for this life-changing pilgrimage."
              : "Hubungi tim kami hari ini untuk membahas rencana Haji Anda dan amankan tempat Anda untuk ibadah yang mengubah hidup ini."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/6285212135211?text=${encodeURIComponent(
                language === "en"
                  ? "I'm interested in learning more about your Hajj packages"
                  : "Saya tertarik untuk mengetahui lebih lanjut tentang paket Haji Anda",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-base font-medium">
                {language === "en" ? "Contact via WhatsApp" : "Hubungi via WhatsApp"}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium bg-transparent border-white text-white hover:bg-white/10"
              >
                {language === "en" ? "Contact Us" : "Hubungi Kami"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HajjCta

