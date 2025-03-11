"use client"

import { useLanguage } from "@/components/language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: {
      en: "What is the difference between Hajj and Umrah?",
      id: "Apa perbedaan antara Haji dan Umrah?",
    },
    answer: {
      en: "Hajj is the annual Islamic pilgrimage to Makkah and is mandatory for Muslims to perform at least once in their lifetime if they are physically and financially able. It takes place during specific days in the Islamic month of Dhul Hijjah. Umrah, on the other hand, is a non-mandatory pilgrimage that can be performed at any time of the year.",
      id: "Haji adalah ibadah tahunan umat Islam ke Makkah dan wajib dilakukan oleh Muslim setidaknya sekali seumur hidup jika mereka mampu secara fisik dan finansial. Haji dilaksanakan pada hari-hari tertentu di bulan Islam Dzulhijjah. Sedangkan Umrah adalah ibadah yang tidak wajib dan dapat dilakukan kapan saja sepanjang tahun.",
    },
  },
  {
    question: {
      en: "What documents do I need for Hajj and Umrah?",
      id: "Dokumen apa yang saya butuhkan untuk Haji dan Umrah?",
    },
    answer: {
      en: "You will need a valid passport with at least 6 months validity, proof of vaccination according to Saudi Arabia's health requirements, a visa specifically for Hajj or Umrah, and passport-sized photographs. Additional requirements may apply based on your country of residence.",
      id: "Anda akan membutuhkan paspor yang masih berlaku dengan masa berlaku minimal 6 bulan, bukti vaksinasi sesuai dengan persyaratan kesehatan Arab Saudi, visa khusus untuk Haji atau Umrah, dan foto ukuran paspor. Persyaratan tambahan mungkin berlaku berdasarkan negara tempat tinggal Anda.",
    },
  },
  {
    question: {
      en: "How far in advance should I book my Hajj or Umrah package?",
      id: "Berapa lama sebelumnya saya harus memesan paket Haji atau Umrah?",
    },
    answer: {
      en: "For Hajj, we recommend booking at least 8-12 months in advance as spots fill up quickly and there are limited quotas for each country. For Umrah, booking 2-3 months ahead is usually sufficient, though during peak seasons (such as Ramadan), earlier booking is advisable.",
      id: "Untuk Haji, kami menyarankan pemesanan setidaknya 8-12 bulan sebelumnya karena tempat cepat terisi dan ada kuota terbatas untuk setiap negara. Untuk Umrah, pemesanan 2-3 bulan sebelumnya biasanya cukup, meskipun selama musim puncak (seperti Ramadhan), pemesanan lebih awal disarankan.",
    },
  },
  {
    question: {
      en: "What is included in your Hajj and Umrah packages?",
      id: "Apa saja yang termasuk dalam paket Haji dan Umrah Anda?",
    },
    answer: {
      en: "Our packages typically include accommodation, transportation (including flights), visa processing, guidance through all rituals by experienced guides, meals, and Ziyarat (visits to historical sites). The specific inclusions vary by package type, so please check the details of each package.",
      id: "Paket kami biasanya mencakup akomodasi, transportasi (termasuk penerbangan), pemrosesan visa, bimbingan melalui semua ritual oleh pemandu berpengalaman, makanan, dan Ziarah (kunjungan ke situs-situs bersejarah). Rincian spesifik bervariasi menurut jenis paket, jadi silakan periksa detail setiap paket.",
    },
  },
]

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
            {faqs.map((faq, index) => (
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

