"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "./language-provider"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { LanguageSwitcher } from "./language-switcher"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const routes = [
    { href: "/", label: t("nav.home") },
    { href: "/umrah", label: t("nav.umrah") },
    { href: "/hajj", label: t("nav.hajj") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-start justify-center space-x-1 w-auto h-24">
          <Image src="/images/agra_logo_text.png" alt="umrahwithagra" width={100} height={100} className="h-24 w-auto" />
        </Link>

        <div className="flex items-center justify-between space-x-14">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-caviar-dreams",
                        pathname === route.href ? "border border-primary/70 text-primary font-bold" : "font-bold",
                      )}
                    >
                      {route.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

        </div>
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-16 right-8 z-50 w-52 bg-background border-t animate-in slide-in-from-top-5">
            <nav className="container grid gap-6 p-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "font-caviar-dreams text-lg py-2 transition-colors hover:text-primary",
                    pathname === route.href ? "font-bold text-primary" : "text-muted-foreground",
                  )}
                  onClick={toggleMenu}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

