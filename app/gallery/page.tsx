import GalleryHero from "@/components/gallery/gallery-hero"
import GalleryContent from "@/components/gallery/gallery-content"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHero />
      <GalleryContent />
    </div>
  )
}

