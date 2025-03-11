"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FaqCta = () => {
  const { language } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            {language === "en" ? "Still Have Questions?" : "Masih Punya Pertanyaan?"}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            {language === "en"
              ? "Can't find the answer you're looking for? Please contact our friendly team."
              : "Tidak dapat menemukan jawaban yang Anda cari? Silakan hubungi tim kami yang ramah."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/6285212135211?text=${encodeURIComponent(
                language === "en"
                  ? "I have a question about your services"
                  : "Saya memiliki pertanyaan tentang layanan Anda",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-base font-medium">
                {language === "en" ? "Contact via WhatsApp" : "Hubungi via WhatsApp"}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-base font-medium">
                {language === "en" ? "Contact Us" : "Hubungi Kami"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqCta

