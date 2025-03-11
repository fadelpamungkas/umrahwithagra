"use client"

import type React from "react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Loader2 } from "lucide-react"

const ContactForm = () => {
  const { language } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-caviar-dreams">
            {language === "en" ? "Thank You!" : "Terima Kasih!"}
          </CardTitle>
          <CardDescription>
            {language === "en"
              ? "We have received your message and will contact you shortly."
              : "Kami telah menerima pesan Anda dan akan menghubungi Anda segera."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setSubmitted(false)} className="mt-4">
            {language === "en" ? "Send another message" : "Kirim pesan lain"}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-caviar-dreams">
          {language === "en" ? "Send Us a Message" : "Kirim Pesan"}
        </CardTitle>
        <CardDescription>
          {language === "en"
            ? "Fill out the form below and we'll get back to you as soon as possible."
            : "Isi formulir di bawah ini dan kami akan menghubungi Anda sesegera mungkin."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{language === "en" ? "Full Name" : "Nama Lengkap"}*</Label>
              <Input id="name" placeholder={language === "en" ? "Your name" : "Nama Anda"} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{language === "en" ? "Email Address" : "Alamat Email"}*</Label>
              <Input id="email" type="email" placeholder={language === "en" ? "Your email" : "Email Anda"} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{language === "en" ? "Phone Number" : "Nomor Telepon"}*</Label>
              <Input id="phone" placeholder={language === "en" ? "Your phone number" : "Nomor telepon Anda"} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">{language === "en" ? "Subject" : "Subjek"}*</Label>
              <Select required>
                <SelectTrigger id="subject">
                  <SelectValue placeholder={language === "en" ? "Select a subject" : "Pilih subjek"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hajj">{language === "en" ? "Hajj Inquiry" : "Pertanyaan Haji"}</SelectItem>
                  <SelectItem value="umrah">{language === "en" ? "Umrah Inquiry" : "Pertanyaan Umrah"}</SelectItem>
                  <SelectItem value="package">
                    {language === "en" ? "Package Information" : "Informasi Paket"}
                  </SelectItem>
                  <SelectItem value="visa">{language === "en" ? "Visa Inquiry" : "Pertanyaan Visa"}</SelectItem>
                  <SelectItem value="other">{language === "en" ? "Other" : "Lainnya"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{language === "en" ? "Message" : "Pesan"}*</Label>
            <Textarea id="message" placeholder={language === "en" ? "Your message" : "Pesan Anda"} rows={5} required />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {language === "en" ? "Sending..." : "Mengirim..."}
              </>
            ) : language === "en" ? (
              "Send Message"
            ) : (
              "Kirim Pesan"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm

