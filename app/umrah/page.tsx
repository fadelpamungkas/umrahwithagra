import UmrahHero from "@/components/umrah/umrah-hero"
import UmrahPackages from "@/components/umrah/umrah-packages"
import UmrahInfo from "@/components/umrah/umrah-info"
import UmrahRequirements from "@/components/umrah/umrah-requirements"
import UmrahCta from "@/components/umrah/umrah-cta"

export default function UmrahPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <UmrahHero />
      <UmrahPackages />
      <UmrahInfo />
      <UmrahRequirements />
      <UmrahCta />
    </div>
  )
}

