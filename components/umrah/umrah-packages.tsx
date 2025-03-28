"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Check, Users } from "lucide-react"
import Link from "next/link"
import packageData from "@/data/umrah-packages.json"

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
          {packageData.map((pkg) => (
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
                <Link href={`/umrah/${pkg.id}`} className="w-full">
                  <Button className="w-full">{language === "en" ? "Details" : "Detail"}</Button>
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
