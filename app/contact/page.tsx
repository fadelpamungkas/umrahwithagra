import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactHero />
      <div className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

