import Hero from "@/components/home/hero"
import FeaturedPackages from "@/components/home/featured-packages"
import Benefits from "@/components/home/benefits"
import Testimonials from "@/components/home/testimonials"
import Galleries from "@/components/home/galleries"
import FaqSection from "@/components/home/faq-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedPackages />
      <Benefits />
      <Testimonials />
      <Galleries />
      <FaqSection />
    </div>
  )
}

