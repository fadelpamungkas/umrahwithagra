"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, StampIcon as Passport, Syringe, Calendar, Wallet } from "lucide-react"

const requirementsData = [
  {
    icon: Passport,
    title: {
      en: "Valid Passport",
      id: "Paspor Valid",
    },
    description: {
      en: "Must be valid for at least 6 months beyond your return date with at least 2 blank pages.",
      id: "Harus berlaku minimal 6 bulan setelah tanggal kepulangan dengan minimal 2 halaman kosong.",
    },
  },
  {
    icon: FileCheck,
    title: {
      en: "Umrah Visa",
      id: "Visa Umrah",
    },
    description: {
      en: "Obtained through authorized travel agencies with proper documentation.",
      id: "Diperoleh melalui agen perjalanan resmi dengan dokumentasi yang tepat.",
    },
  },
  {
    icon: Syringe,
    title: {
      en: "Vaccinations",
      id: "Vaksinasi",
    },
    description: {
      en: "Meningitis vaccine and certificates for any seasonal requirements like COVID-19.",
      id: "Vaksin Meningitis dan sertifikat untuk persyaratan musiman seperti COVID-19.",
    },
  },
  {
    icon: Calendar,
    title: {
      en: "Booking Confirmation",
      id: "Konfirmasi Pemesanan",
    },
    description: {
      en: "Confirmed hotel reservations and return flight tickets.",
      id: "Reservasi hotel yang dikonfirmasi dan tiket pesawat pulang pergi.",
    },
  },
  {
    icon: Wallet,
    title: {
      en: "Financial Requirements",
      id: "Persyaratan Keuangan",
    },
    description: {
      en: "Payment for your Umrah package and additional funds for personal expenses.",
      id: "Pembayaran untuk paket Umrah Anda dan dana tambahan untuk pengeluaran pribadi.",
    },
  },
]

const UmrahRequirements = () => {
  const { language } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            {language === "en" ? "Umrah Requirements" : "Persyaratan Umrah"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Essential documents and preparations needed for your Umrah journey"
              : "Dokumen dan persiapan penting yang diperlukan untuk perjalanan Umrah Anda"}
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

export default UmrahRequirements

