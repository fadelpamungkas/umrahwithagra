"use client"

import { useLanguage } from "@/components/language-provider"
import { Shield, Award, Hotel, MapPin, Clock, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: {
      en: "Licensed & Certified",
      id: "Berizin & Tersertifikasi",
    },
    description: {
      en: "Fully licensed travel operators authorized by Saudi Ministry of Hajj",
      id: "Operator perjalanan yang memiliki izin dari Kementerian Haji Arab Saudi",
    },
  },
  {
    icon: Hotel,
    title: {
      en: "Premium Accommodations",
      id: "Akomodasi Premium",
    },
    description: {
      en: "Stay in comfortable hotels close to the holy sites",
      id: "Menginap di hotel nyaman yang dekat dengan situs-situs suci",
    },
  },
  {
    icon: Award,
    title: {
      en: "Experienced Guides",
      id: "Pemandu Berpengalaman",
    },
    description: {
      en: "Knowledgeable and multilingual guides to assist throughout your journey",
      id: "Pemandu yang berpengetahuan dan multibahasa untuk membantu selama perjalanan Anda",
    },
  },
  {
    icon: Clock,
    title: {
      en: "24/7 Support",
      id: "Dukungan 24/7",
    },
    description: {
      en: "Round-the-clock assistance for all your needs during the pilgrimage",
      id: "Bantuan sepanjang waktu untuk semua kebutuhan Anda selama ibadah",
    },
  },
  {
    icon: MapPin,
    title: {
      en: "Strategic Locations",
      id: "Lokasi Strategis",
    },
    description: {
      en: "Accommodations within walking distance to Haram in both Makkah and Madinah",
      id: "Akomodasi dengan jarak berjalan kaki ke Haram baik di Makkah maupun Madinah",
    },
  },
  {
    icon: HeartHandshake,
    title: {
      en: "Personalized Service",
      id: "Layanan Personal",
    },
    description: {
      en: "Customized packages to meet your specific needs and preferences",
      id: "Paket yang disesuaikan untuk memenuhi kebutuhan dan preferensi spesifik Anda",
    },
  },
]

const Benefits = () => {
  const { t, language } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{t("home.why.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "We provide comprehensive services to make your sacred journey memorable and hassle-free"
              : "Kami menyediakan layanan komprehensif untuk membuat perjalanan suci Anda berkesan dan bebas masalah"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-caviar-dreams text-xl font-bold mb-2">{benefit.title[language]}</h3>
              <p className="text-muted-foreground">{benefit.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits

