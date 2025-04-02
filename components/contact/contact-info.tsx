"use client"

import { useLanguage } from "@/components/language-provider"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import TiktokIcon from '@/public/icons/tiktok.svg';
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ContactInfo = () => {
  const { language } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-caviar-dreams font-bold text-primary mb-6">
          {language === "en" ? "Contact Information" : "Informasi Kontak"}
        </h2>
        <ul className="space-y-6">
          <li className="flex items-start">
            <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
            <div>
              <p className="font-bold">{language === "en" ? "Phone" : "Telepon"}</p>
              <p className="text-muted-foreground">+62 852-1213-5211</p>
            </div>
          </li>
          <li className="flex items-start">
            <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
            <div>
              <p className="font-bold">{language === "en" ? "Email" : "Email"}</p>
              <p className="text-muted-foreground">info@umrahwithagra.com</p>
            </div>
          </li>
          <li className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
            <div>
              <p className="font-bold">{language === "en" ? "Office Address" : "Alamat Kantor"}</p>
              <p className="text-muted-foreground">
                Jl. Manunggal Pratama No.12, Cipinang Melayu, Kec. Makasar
                <br />
                Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13620
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <Clock className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
            <div>
              <p className="font-bold">{language === "en" ? "Opening Hours" : "Jam Buka"}</p>
              <p className="text-muted-foreground">
                {language === "en" ? "Monday - Friday: 9:00 AM - 5:00 PM" : "Senin - Jumat: 9:00 - 17:00"}
                <br />
                {language === "en" ? "Saturday: 9:00 AM - 1:00 PM" : "Sabtu: 9:00 - 13:00"}
                <br />
                {language === "en" ? "Sunday: Closed" : "Minggu: Tutup"}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-caviar-dreams font-bold text-primary mb-6">
          {language === "en" ? "Connect With Us" : "Terhubung Dengan Kami"}
        </h2>
        <div className="flex items-center space-x-4">
          <Link
            href="https://instagram.com/@umrahwithagra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
          >
            <Instagram className="h-5 w-5 text-primary" />
          </Link>
          <Link
            href="https://tiktok.com/@umrahwithagra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
          >
          <TiktokIcon className="h-5 w-5 text-primary fill-current" /> 
          </Link>
          <Link
            href="https://facebook.com/@umrahwithagra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
          >
            <Facebook className="h-5 w-5 text-primary" />
          </Link>
          <Link href={`https://wa.me/6285212135211`} target="_blank" rel="noopener noreferrer">
            <Button variant="default">{language === "en" ? "Chat on WhatsApp" : "Chat di WhatsApp"}</Button>
          </Link>
        </div>
      </div>

      {/*
      <div className="mt-8 rounded-lg overflow-hidden h-[300px] border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65294797317!2d106.68942551121233!3d-6.229386704008365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f436b8c94b07%3A0x6ea8bee748d534!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      */}
    </div>
  )
}

export default ContactInfo

