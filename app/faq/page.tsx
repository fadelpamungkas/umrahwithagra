import FaqHero from "@/components/faq/faq-hero"
import FaqContent from "@/components/faq/faq-content"
import FaqCta from "@/components/faq/faq-cta"

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <FaqHero />
      <FaqContent />
      <FaqCta />
    </div>
  )
}

