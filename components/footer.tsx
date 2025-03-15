"use client"

import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import TiktokIcon from '@/public/icons/tiktok.svg';
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-provider"

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/LogoTranparant-2.png" alt="umrahwithagra" width={12} height={12} className="h-14 w-18" />
            </Link>
            <p className="text-primary-foreground/80 max-w-xs">
              Professional Hajj and Umrah services with personalized packages, expert guidance, and seamless
              pilgrimages.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://instagram.com/@umrahwithagra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://tiktok.com/@umrahwithagra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
                aria-label="Tiktok"
              >
                <TiktokIcon className="h-5 w-5 fill-current" />
              </Link>
              <Link
                href="https://facebook.com/@umrahwithagra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:info@umrahwithagra.com"
                className="text-primary-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/hajj"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t("nav.hajj")}
                </Link>
              </li>
              <li>
                <Link
                  href="/umrah"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t("nav.umrah")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>+62 852-1213-5211</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>info@umrahwithagra.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Jl. Manunggal Pratama No.12, Cipinang Melayu,
                  Kec. Makasar Kota Jakarta Timur,
                  <br />
                  Daerah Khusus Ibukota Jakarta 13620
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-primary-foreground/70">
          <p>
            © {currentYear} Umrah With Agra. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

