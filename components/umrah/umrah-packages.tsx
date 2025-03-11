"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Check, Users } from "lucide-react"
import Link from "next/link"

const umrahPackages = [
  {
    id: 1,
    title: {
      en: "Premium Umrah Package",
      id: "Paket Umrah Premium",
    },
    description: {
      en: "All-inclusive 12-day journey to Makkah and Madinah with 5-star accommodations",
      id: "Perjalanan 12 hari ke Makkah dan Madinah dengan akomodasi bintang 5",
    },
    duration: 12,
    groupSize: "15-20",
    features: [
      {
        en: "5-star hotel accommodations in Makkah and Madinah",
        id: "Akomodasi hotel bintang 5 di Makkah dan Madinah",
      },
      {
        en: "Private transportation throughout the journey",
        id: "Transportasi pribadi selama perjalanan",
      },
      {
        en: "Direct flights with premium airlines",
        id: "Penerbangan langsung dengan maskapai premium",
      },
      {
        en: "Personalized guidance from experienced scholars",
        id: "Bimbingan personal dari ulama berpengalaman",
      },
      {
        en: "All meals included with premium dining options",
        id: "Semua makanan termasuk dengan pilihan makan premium",
      },
    ],
    price: {
      en: "$2,500",
      id: "Rp 35.000.000",
    },
  },
  {
    id: 2,
    title: {
      en: "Standard Umrah Package",
      id: "Paket Umrah Standar",
    },
    description: {
      en: "Comprehensive 10-day journey with comfortable 4-star accommodations",
      id: "Perjalanan komprehensif 10 hari dengan akomodasi nyaman bintang 4",
    },
    duration: 10,
    groupSize: "15-25",
    features: [
      {
        en: "4-star hotel accommodations in Makkah and Madinah",
        id: "Akomodasi hotel bintang 4 di Makkah dan Madinah",
      },
      {
        en: "Comfortable transportation throughout the journey",
        id: "Transportasi nyaman selama perjalanan",
      },
      {
        en: "Regular flights with reputable airlines",
        id: "Penerbangan reguler dengan maskapai terpercaya",
      },
      {
        en: "Group guidance from experienced scholars",
        id: "Bimbingan kelompok dari ulama berpengalaman",
      },
      {
        en: "All meals included",
        id: "Semua makanan termasuk",
      },
    ],
    price: {
      en: "$2,100",
      id: "Rp 30.000.000",
    },
  },
  {
    id: 3,
    title: {
      en: "Economy Umrah Package",
      id: "Paket Umrah Ekonomi",
    },
    description: {
      en: "10-day journey to the holy cities with comfortable 3-star accommodations",
      id: "Perjalanan 10 hari ke kota suci dengan akomodasi nyaman bintang 3",
    },
    duration: 10,
    groupSize: "20-30",
    features: [
      {
        en: "3-star hotel accommodations in Makkah and Madinah",
        id: "Akomodasi hotel bintang 3 di Makkah dan Madinah",
      },
      {
        en: "Shared transportation throughout the journey",
        id: "Transportasi bersama selama perjalanan",
      },
      {
        en: "Regular flights with transit",
        id: "Penerbangan reguler dengan transit",
      },
      {
        en: "Group guidance from experienced scholars",
        id: "Bimbingan kelompok dari ulama berpengalaman",
      },
      {
        en: "All meals included",
        id: "Semua makanan termasuk",
      },
    ],
    price: {
      en: "$1,800",
      id: "Rp 25.000.000",
    },
  },
]

const UmrahPackages = () => {
  const { language } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            {language === "en" ? "Our Umrah Packages" : "Paket Umrah Kami"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Choose the package that best suits your needs and preferences for this sacred journey"
              : "Pilih paket yang paling sesuai dengan kebutuhan dan preferensi Anda untuk perjalanan suci ini"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {umrahPackages.map((pkg) => (
            <Card key={pkg.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="font-caviar-dreams text-xl">{pkg.title[language]}</CardTitle>
                <CardDescription>{pkg.description[language]}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex justify-between text-sm mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {language === "en" ? `${pkg.duration} days` : `${pkg.duration} hari`}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {pkg.groupSize}
                  </div>
                </div>

                <p className="font-bold text-2xl text-primary mb-4">{pkg.price[language]}</p>

                <ul className="space-y-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature[language]}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href={`https://wa.me/6285212135211?text=${encodeURIComponent(
                    language === "en"
                      ? `I'm interested in the ${pkg.title.en} package`
                      : `Saya tertarik dengan paket ${pkg.title.id}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">{language === "en" ? "Inquire Now" : "Tanyakan Sekarang"}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UmrahPackages

