import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ExpeditionsSection } from "@/components/expeditions-section"
import { TailorMadeSection } from "@/components/tailor-made-section"
import { NetworkSection } from "@/components/network-section"
import { PartnerSection } from "@/components/partner-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValueProposition />
      <ExpeditionsSection />
      <TailorMadeSection />
      <NetworkSection />
      <PartnerSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
