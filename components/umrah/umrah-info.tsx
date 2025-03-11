"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Repeat, Heart, SunMoon, ArrowRight } from "lucide-react"

const UmrahInfo = () => {
  const { language } = useLanguage()

  const rituals = [
    {
      icon: Heart,
      title: {
        en: "Ihram",
        id: "Ihram",
      },
      description: {
        en: "Entering a state of purity and devotion by wearing special white garments and making the intention for Umrah.",
        id: "Memasuki keadaan kesucian dan pengabdian dengan mengenakan pakaian putih khusus dan membuat niat untuk Umrah.",
      },
    },
    {
      icon: Repeat,
      title: {
        en: "Tawaf",
        id: "Tawaf",
      },
      description: {
        en: "Circling the Kaaba seven times in a counterclockwise direction, symbolizing unity with believers in worship.",
        id: "Mengelilingi Ka'bah tujuh kali berlawanan arah jarum jam, melambangkan kesatuan dengan orang-orang beriman dalam ibadah.",
      },
    },
    {
      icon: ArrowRight,
      title: {
        en: "Sa'i",
        id: "Sa'i",
      },
      description: {
        en: "Walking seven times between the hills of Safa and Marwah, commemorating Hajar's search for water.",
        id: "Berjalan tujuh kali antara bukit Safa dan Marwah, memperingati pencarian air Hajar.",
      },
    },
    {
      icon: SunMoon,
      title: {
        en: "Taqsir/Halq",
        id: "Taqsir/Halq",
      },
      description: {
        en: "Cutting or shaving the hair to mark the completion of Umrah and the return to normal state from Ihram.",
        id: "Memotong atau mencukur rambut untuk menandai penyelesaian Umrah dan kembali ke keadaan normal dari Ihram.",
      },
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            {language === "en" ? "Understanding Umrah Rituals" : "Memahami Ritual Umrah"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Learn about the essential rituals that make up the spiritual journey of Umrah"
              : "Pelajari tentang ritual penting yang membentuk perjalanan spiritual Umrah"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/package-5.jpg" alt="Umrah Rituals" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rituals.map((ritual, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow bg-background/90">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <ritual.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-caviar-dreams text-xl">{ritual.title[language]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{ritual.description[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UmrahInfo

