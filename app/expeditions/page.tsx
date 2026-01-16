import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExpeditionsHero } from "@/components/expeditions-hero"
import { ExpeditionsList } from "@/components/expeditions-list"
import { ExpeditionsCTA } from "@/components/expeditions-cta"

export const metadata = {
  title: "Expeditions | The Lazuli Collective",
  description:
    "Join our curated expeditions across Egypt and Turkey. Limited spots, vetted crew, extraordinary experiences.",
}

export default function ExpeditionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ExpeditionsHero />
      <ExpeditionsList />
      <ExpeditionsCTA />
      <Footer />
    </main>
  )
}
