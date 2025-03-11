"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Ahmad Syahid",
    location: {
      en: "Jakarta, Indonesia",
      id: "Jakarta, Indonesia",
    },
    image: "/images/avatar-1.jpg",
    rating: 5,
    text: {
      en: "The entire journey was seamless from start to finish. The accommodations were excellent, and the guides were knowledgeable and attentive. I highly recommend Umrah With Agra for your pilgrimage.",
      id: "Seluruh perjalanan berjalan lancar dari awal hingga akhir. Akomodasi sangat baik, dan pemandu sangat berpengetahuan dan perhatian. Saya sangat merekomendasikan Umrah With Agra untuk perjalanan ibadah Anda.",
    },
  },
  {
    id: 2,
    name: "Fatimah Rahman",
    location: {
      en: "Surabaya, Indonesia",
      id: "Surabaya, Indonesia",
    },
    image: "/images/avatar-1.jpg",
    rating: 5,
    text: {
      en: "As a first-time Umrah pilgrim, I was nervous, but the team made everything so easy. The hotels were close to Haram, and the spiritual guidance enhanced my experience tremendously.",
      id: "Sebagai jamaah Umrah pertama kali, saya gugup, tetapi tim membuat segalanya sangat mudah. Hotel-hotel dekat dengan Haram, dan bimbingan spiritual sangat meningkatkan pengalaman saya.",
    },
  },
  {
    id: 3,
    name: "Hasan Abdullah",
    location: {
      en: "Bandung, Indonesia",
      id: "Bandung, Indonesia",
    },
    image: "/images/avatar-1.jpg",
    rating: 5,
    text: {
      en: "My family and I performed Hajj with Umrah With Agra, and it was a life-changing experience. The attention to detail and personalized service exceeded our expectations.",
      id: "Keluarga saya dan saya melaksanakan Haji dengan Umrah With Agra, dan itu adalah pengalaman yang mengubah hidup. Perhatian terhadap detail dan layanan personal melebihi harapan kami.",
    },
  },
]

const Testimonials = () => {
  const { t, language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("home.testimonials.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-4 text-primary/10">
            <Quote className="w-24 h-24" />
          </div>

          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-secondary/10">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-lg mb-4">{testimonial.text[language]}</p>
                          <h4 className="font-bold font-caviar-dreams text-xl">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.location[language]}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

