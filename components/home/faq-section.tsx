"use client"

import { useLanguage } from "@/components/language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import faqData from "@/data/faq-data.json"

const FaqSection = () => {
  const { t, language } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{t("home.faq.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.homeFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-caviar-dreams text-lg font-semibold">
                  {faq.question[language]}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer[language]}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Link href="/faq">
              <Button variant="outline">{language === "en" ? "View All FAQs" : "Lihat Semua FAQ"}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection

