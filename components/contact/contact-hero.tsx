"use client"

import { useLanguage } from "@/components/language-provider"

const ContactHero = () => {
  const { language } = useLanguage()

  return (
    <section className="relative w-full py-20 bg-primary text-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {language === "en" ? "Contact Us" : "Hubungi Kami"}
          </h1>
          <p className="text-lg text-primary-foreground/80">
            {language === "en"
              ? "Get in touch with our team for any inquiries about our Hajj and Umrah services"
              : "Hubungi tim kami untuk pertanyaan apapun tentang layanan Haji dan Umrah kami"}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactHero

