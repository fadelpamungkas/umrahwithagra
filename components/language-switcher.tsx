"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="w-12 font-medium">
      {language.toUpperCase()}
    </Button>
  )
}

