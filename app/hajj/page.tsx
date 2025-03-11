import HajjHero from "@/components/hajj/hajj-hero"
import HajjPackages from "@/components/hajj/hajj-packages"
import HajjInfo from "@/components/hajj/hajj-info"
import HajjRequirements from "@/components/hajj/hajj-requirements"
import HajjCta from "@/components/hajj/hajj-cta"

export default function HajjPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HajjHero />
      <HajjPackages />
      <HajjInfo />
      <HajjRequirements />
      <HajjCta />
    </div>
  )
}

