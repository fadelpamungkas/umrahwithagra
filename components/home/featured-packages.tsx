"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// umroh reguler, umroh eksklusif, umroh platinum 
const packages = [
  {
    id: 1,
    title: {
      en: "Reguler Umrah",
      id: "Umrah Reguler",
    },
    description: {
      en: "All-inclusive 12-day journey to Makkah and Madinah with 5-star accommodations",
      id: "Perjalanan 12 hari ke Makkah dan Madinah dengan akomodasi bintang 5",
    },
    image: "/images/package-1.jpg",
    duration: 12,
    groupSize: "15-20",
    type: "umrah",
    featured: true,
    price: {
      en: "Starting from $2,500",
      id: "Mulai dari Rp 35.000.000",
    },
  },
  {
    id: 2,
    title: {
      en: "Exclusive Umrah",
      id: "Umrah Eksklusif",
    },
    description: {
      en: "10-day journey to the holy cities with comfortable 3-star accommodations",
      id: "Perjalanan 10 hari ke kota suci dengan akomodasi nyaman bintang 3",
    },
    image: "/images/package-2.jpg",
    duration: 10,
    groupSize: "20-25",
    type: "umrah",
    featured: true,
    price: {
      en: "Starting from $1,800",
      id: "Mulai dari Rp 25.000.000",
    },
  },
  {
    id: 3,
    title: {
      en: "Platinum Umrah",
      id: "Umrah Platinum",
    },
    description: {
      en: "Premium 3-week hajj journey with luxury accommodations and personalized service",
      id: "Perjalanan haji premium 3 minggu dengan akomodasi mewah dan layanan personal",
    },
    image: "/images/package-4.jpg",
    duration: 21,
    groupSize: "10-15",
    type: "umrah",
    featured: true,
    price: {
      en: "Starting from $9,500",
      id: "Mulai dari Rp 135.000.000",
    },
  },
]

const FeaturedPackages = () => {
  const { t, language } = useLanguage()

  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{t("home.featured.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Choose from our carefully designed packages to make your spiritual journey meaningful and comfortable"
              : "Pilih dari paket-paket kami yang dirancang dengan hati-hati untuk membuat perjalanan spiritual Anda bermakna dan nyaman"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  fill
                  alt={pkg.title[language]}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold uppercase py-1 px-2 rounded">
                  {pkg.type === "hajj" ? (language === "en" ? "Hajj" : "Haji") : "Umrah"}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-caviar-dreams text-xl">{pkg.title[language]}</CardTitle>
                <CardDescription>{pkg.description[language]}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      {language === "en" ? `${pkg.duration} days` : `${pkg.duration} hari`}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {pkg.groupSize}
                    </div>
                  </div>
                  <p className="font-bold text-primary text-lg mt-2">{pkg.price[language]}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/${pkg.type === "hajj" ? "hajj" : "umrah"}/${pkg.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    {language === "en" ? "View Details" : "Lihat Detail"}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/*<div className="text-center mt-12">
          <Link href="/packages">
            <Button>
              {language === "en" ? "View All Packages" : "Lihat Semua Paket"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        */}
      </div>
    </section>
  )
}

export default FeaturedPackages

