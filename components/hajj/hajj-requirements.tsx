"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, StampIcon as Passport, FileHeart, Syringe, CreditCard, Luggage } from "lucide-react"

const requirementsData = [
  {
    icon: Passport,
    title: {
      en: "Valid Passport",
      id: "Paspor Valid",
    },
    description: {
      en: "Must be valid for at least 6 months beyond your return date with at least 4 blank pages.",
      id: "Harus berlaku minimal 6 bulan setelah tanggal kepulangan dengan minimal 4 halaman kosong.",
    },
  },
  {
    icon: Syringe,
    title: {
      en: "Vaccinations",
      id: "Vaksinasi",
    },
    description: {
      en: "Meningitis (ACYW135) vaccine and certificates for seasonal requirements like COVID-19.",
      id: "Vaksin Meningitis (ACYW135) dan sertifikat untuk persyaratan musiman seperti COVID-19.",
    },
  },
  {
    icon: FileHeart,
    title: {
      en: "Medical Check-up",
      id: "Pemeriksaan Medis",
    },
    description: {
      en: "Recent medical certificate confirming physical fitness for Hajj journey.",
      id: "Sertifikat medis terbaru yang mengkonfirmasi kebugaran fisik untuk perjalanan Haji.",
    },
  },
  {
    icon: FileCheck,
    title: {
      en: "Hajj Visa",
      id: "Visa Haji",
    },
    description: {
      en: "Special Hajj visa obtained through authorized travel agencies.",
      id: "Visa Haji khusus yang diperoleh melalui agen perjalanan resmi.",
    },
  },
  {
    icon: CreditCard,
    title: {
      en: "Financial Requirements",
      id: "Persyaratan Keuangan",
    },
    description: {
      en: "Full payment for the selected Hajj package and additional funds for personal expenses.",
      id: "Pembayaran penuh untuk paket Haji yang dipilih dan dana tambahan untuk pengeluaran pribadi.",
    },
  },
  {
    icon: Luggage,
    title: {
      en: "Travel Documentation",
      id: "Dokumentasi Perjalanan",
    },
    description: {
      en: "Completed Hajj application forms, passport-sized photos, and copies of identification documents.",
      id: "Formulir aplikasi Haji yang telah diisi, foto ukuran paspor, dan salinan dokumen identifikasi.",
    },
  },
]

const HajjRequirements = () => {
  const { language } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            {language === "en" ? "Hajj Requirements" : "Persyaratan Haji"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Essential documents and preparations needed for your Hajj journey"
              : "Dokumen dan persiapan penting yang diperlukan untuk perjalanan Haji Anda"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirementsData.map((req, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <req.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-caviar-dreams text-xl">{req.title[language]}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{req.description[language]}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HajjRequirements

