"use client"

import { useLanguage } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageData {
  id: number
  src: string
  alt: string
  caption: {
    en: string
    id: string
  }
}

interface GalleryData {
  [key: string]: ImageData[]
}

const galleryData: GalleryData = {
  umrah: [
    {
      id: 1,
      src: "/images/package-4.jpg",
      alt: "Umrah pilgrims at Kaaba",
      caption: {
        en: "Our pilgrims performing Tawaf around the Kaaba",
        id: "Jamaah kami melakukan Tawaf mengelilingi Ka'bah",
      },
    },
    {
      id: 2,
      src: "/images/banner2.jpg",
      alt: "Group photo in Madinah",
      caption: {
        en: "Group photo in front of Masjid Nabawi, Madinah",
        id: "Foto grup di depan Masjid Nabawi, Madinah",
      },
    },
    {
      id: 3,
      src: "/images/banner1.jpeg",
      alt: "Umrah journey",
      caption: {
        en: "Beautiful view of Makkah during our Umrah journey",
        id: "Pemandangan indah Makkah selama perjalanan Umrah kami",
      },
    },
    {
      id: 4,
      src: "/images/banner3.jpg",
      alt: "Umrah pilgrims",
      caption: {
        en: "Our pilgrims during the sacred journey",
        id: "Jamaah kami selama perjalanan suci",
      },
    },
    {
      id: 5,
      src: "/images/package-1.jpg",
      alt: "Umrah preparation",
      caption: {
        en: "Preparation session before departure",
        id: "Sesi persiapan sebelum keberangkatan",
      },
    },
    {
      id: 6,
      src: "/images/package-2.jpg",
      alt: "Umrah group",
      caption: {
        en: "Our Umrah group enjoying their spiritual journey",
        id: "Grup Umrah kami menikmati perjalanan spiritual mereka",
      },
    },
  ],
  events: [
    {
      id: 1,
      src: "/images/package-5.jpg",
      alt: "Manasik event",
      caption: {
        en: "Manasik training event for our pilgrims",
        id: "Acara pelatihan manasik untuk jamaah kami",
      },
    },
    {
      id: 2,
      src: "/images/instagram_image_1.jpg",
      alt: "Community gathering",
      caption: {
        en: "Community gathering and information session",
        id: "Pertemuan komunitas dan sesi informasi",
      },
    },
    {
      id: 3,
      src: "/images/package-1.jpg",
      alt: "Umrah seminar",
      caption: {
        en: "Umrah seminar for new pilgrims",
        id: "Seminar Umrah untuk jamaah baru",
      },
    },
  ],
}

const GalleryContent = () => {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)
  const [currentCategory, setCurrentCategory] = useState<string>("umrah")

  const handlePrevImage = () => {
    if (!selectedImage) return
    const currentIndex = galleryData[currentCategory].findIndex((img) => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + galleryData[currentCategory].length) % galleryData[currentCategory].length
    setSelectedImage(galleryData[currentCategory][prevIndex])
  }

  const handleNextImage = () => {
    if (!selectedImage) return
    const currentIndex = galleryData[currentCategory].findIndex((img) => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryData[currentCategory].length
    setSelectedImage(galleryData[currentCategory][nextIndex])
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <Tabs defaultValue="umrah" className="w-full" onValueChange={(value) => setCurrentCategory(value)}>
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 gap-2 bg-gray-200">
              <TabsTrigger value="umrah">{language === "en" ? "Umrah Gallery" : "Galeri Umrah"}</TabsTrigger>
              <TabsTrigger value="events">{language === "en" ? "Events" : "Acara"}</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(galleryData).map(([category, images]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm">{image.caption[language]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          {selectedImage && (
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
              <DialogTitle className="sr-only">Image Preview</DialogTitle>
              <div className="relative">
                <div className="relative aspect-video w-full">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                  <p className="text-white text-center">{selectedImage.caption[language]}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-0 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={24} />
                </button>
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}

export default GalleryContent
