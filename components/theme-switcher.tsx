"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Palette } from "lucide-react"

type ThemeOption = "default" | "conifer" | "sage" | "mist" | "charcoal"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeOption>("default")

  useEffect(() => {
    // Get the theme from localStorage or use default
    const savedTheme = localStorage.getItem("theme") as ThemeOption | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    }
  }, [])

  const setThemeAndSave = (newTheme: ThemeOption) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  const themeOptions: { value: ThemeOption; label: string }[] = [
    { value: "default", label: "Default" },
    { value: "conifer", label: "Conifer" },
    { value: "sage", label: "Sage" },
    { value: "mist", label: "Mist" },
    { value: "charcoal", label: "Charcoal" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setThemeAndSave(option.value)}
            className={theme === option.value ? "bg-accent" : ""}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full border ${
                  option.value === "default"
                    ? "bg-primary"
                    : option.value === "conifer"
                      ? "bg-[#576037]"
                      : option.value === "sage"
                        ? "bg-[#9fa483]"
                        : option.value === "mist"
                          ? "bg-[#f5f8f7]"
                          : "bg-[#373737]"
                }`}
              />
              {option.label}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

