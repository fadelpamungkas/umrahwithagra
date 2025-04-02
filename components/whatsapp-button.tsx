"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

const WhatsAppButton = () => {
  const { t } = useLanguage()
  const phoneNumber = "6285212135211" // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
      <Button className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg p-0">
        <span className="sr-only">{t("cta.contact")}</span>
        <MessageCircle className="w-6 h-6" />
      </Button>
    </a>
  )
}

export default WhatsAppButton

