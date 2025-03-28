"use client"

import { useLanguage } from "@/components/language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import faqData from "@/data/faq-data.json"

const FaqContent = () => {
  const { language } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <Tabs defaultValue="general" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-gray-200">
              {faqData.categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title[language]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {faqData.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.id}-item-${index}`}>
                    <AccordionTrigger className="text-left font-caviar-dreams text-lg font-semibold">
                      {faq.question[language]}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer[language]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default FaqContent

