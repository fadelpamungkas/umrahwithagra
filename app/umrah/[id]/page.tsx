"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, CalendarDays, Users, Clock, MapPin, Plane, Hotel, Utensils, Bus } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import packageData from "@/data/umrah-packages.json"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Map icon strings to actual icon components
const iconMap = {
  Plane,
  Hotel,
  MapPin,
  Clock,
  Bus,
  Utensils,
}

const UmrahPackageDetail = () => {
  const { language } = useLanguage()
  const params = useParams()
  const packageId = params.id as string

  // Find the package data based on the ID
  const packageInfo = packageData.find((pkg) => pkg.id === packageId) || packageData[0]

  // State for selected departure date
  const [selectedDate, setSelectedDate] = useState<string>(
    packageInfo.departureDates && packageInfo.departureDates.length > 0 ? packageInfo.departureDates[0].id : "",
  )
  const [selectedOptions, setSelectedOptions] = useState<string>("")

  // Get the selected date text based on the ID
  const getSelectedDateText = () => {
    if (!selectedDate || !packageInfo.departureDates) return ""
    const dateObj = packageInfo.departureDates.find((d) => d.id === selectedDate)
    return dateObj ? dateObj.date[language] : ""
  }

  // Create WhatsApp message with package and date information
  const createWhatsAppMessage = () => {
    const dateText = getSelectedDateText()
    const options = selectedOptions ? selectedOptions.charAt(0).toUpperCase() + selectedOptions.slice(1) : ""
    
    const message =
      language === "en"
        ? `I'm interested in the ${packageInfo.title.en}${selectedOptions ? ` - ${options}` : ""} package departing on ${dateText}. Can you provide more information?`
        : `Saya tertarik dengan paket ${packageInfo.title.id}${selectedOptions ? ` - ${options}` : ""} dengan keberangkatan pada ${dateText}. Bisakah Anda memberikan informasi lebih lanjut?`

    return encodeURIComponent(message)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-primary text-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${packageInfo.banner}')`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">{packageInfo.subtitle[language]}</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{packageInfo.title[language]}</h1>
            <p className="text-lg md:text-xl text-white/80 mb-6 max-w-2xl">{packageInfo.fullDescription[language]}</p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 mr-2 text-secondary" />
                <span>{language === "en" ? `${packageInfo.duration} days` : `${packageInfo.duration} hari`}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-secondary" />
                <span>
                  {packageInfo.groupSize} {language === "en" ? "pilgrims" : "jamaah"}
                </span>
              </div>
              <div className="flex items-center">
                <Plane className="h-5 w-5 mr-2 text-secondary" />
                <span>{packageInfo.airlines}</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-3xl font-bold text-secondary mb-1">{packageInfo.cheapestPrice[language]}</div>
              <div className="text-sm text-white/70">{packageInfo.priceNote[language]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="itinerary" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8 bg-gray-200">
                  <TabsTrigger value="itinerary">{language === "en" ? "Itinerary" : "Itinerary"}</TabsTrigger>
                  <TabsTrigger value="includes">{language === "en" ? "Includes" : "Termasuk"}</TabsTrigger>
                  <TabsTrigger value="excludes">{language === "en" ? "Excludes" : "Tidak Termasuk"}</TabsTrigger>
                </TabsList>

                <TabsContent value="itinerary" className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                    {language === "en" ? "Detailed Itinerary" : "Itinerary Detail"}
                  </h2>

                  <div className="space-y-6">
                    {packageInfo.itinerary.map((day) => {
                      const DayIcon = iconMap[day.icon as keyof typeof iconMap] || MapPin

                      return (
                        <Card key={day.day} className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              <div className="bg-primary/10 p-6 md:w-1/4 flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                  <DayIcon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">
                                  {language === "en" ? `Day ${day.day}` : `Hari ${day.day}`}
                                </h3>
                                <p className="text-primary font-medium">{day.title[language]}</p>
                              </div>
                              <div className="p-6 md:w-3/4">
                                <p>{day.description[language]}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="includes">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                    {language === "en" ? "What's Included" : "Yang Termasuk"}
                  </h2>

                  <ul className="space-y-3">
                    {packageInfo.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="excludes">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                    {language === "en" ? "What's Not Included" : "Yang Tidak Termasuk"}
                  </h2>

                  <ul className="space-y-3">
                    {packageInfo.excludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src={packageInfo.flyer || "/placeholder.svg"}
                    alt={packageInfo.title[language]}
                    width={400}
                    height={600}
                    className="w-full object-cover h-100"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold">
                    {language === "en" ? "Price Details" : "Detail Harga"}
                  </h3>

                  {/* Price Details with Best Deal Highlight */}
                  <div className="mb-6">
                    <div className="w-full flex-col items-start justify-between space-y-2">
                      {Object.entries(packageInfo.pricing).map(([key, value], index) => {
                        const displayName = key.charAt(0).toUpperCase() + key.slice(1);
                        const isBestDeal = key === "triple";
                        const isSelected = selectedOptions === key;

                        return (
                          <Card
                            key={key}
                            className={`cursor-pointer px-4 py-3 rounded-lg relative ${
                              isSelected 
                                ? "border-1 border-primary bg-primary/5" 
                                : isBestDeal 
                                  ? "border-1 border-primary" 
                                  : "border-1 border-gray-200"
                            }`}
                            onClick={() => setSelectedOptions(key)}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-bold text-sm">{displayName}</h4>
                                <p className="text-sm font-medium">{value[language]}</p>
                              </div>

                              <RadioGroup value={selectedOptions} onValueChange={setSelectedOptions} className="flex">
                                <RadioGroupItem value={key} id={key} className="h-5 w-5" />
                              </RadioGroup>
                            </div>

                            {isBestDeal && (
                              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                                {language === "en" ? "Best Deal" : "Termurah"}
                              </div>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold">
                    {language === "en" ? "Departure Dates" : "Tanggal Keberangkatan"}
                  </h3>

                  {/* Date Selection */}
                  <div className="mb-6">
                    <Select value={selectedDate} onValueChange={setSelectedDate}>
                      <SelectTrigger className="w-full cursor-pointer bg-white border-1 hover:border-primary">
                        <SelectValue
                          placeholder={language === "en" ? "Select a departure date" : "Pilih tanggal keberangkatan"}
                        />
                      </SelectTrigger>
                      <SelectContent className="w-full cursor-pointer">
                        {packageInfo.departureDates &&
                          packageInfo.departureDates.map((date) => (
                            <SelectItem key={date.id} value={date.id}>
                              {date.date[language]}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Link
                    href={`https://wa.me/6285212135211?text=${createWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full mt-4 cursor-pointer" disabled={!selectedDate}>
                      {language === "en" ? "Book Now" : "Pesan Sekarang"}
                    </Button> 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UmrahPackageDetail

