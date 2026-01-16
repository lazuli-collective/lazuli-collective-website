import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RequestToJoinForm } from "@/components/request-to-join-form"
import { notFound } from "next/navigation"
import { expeditions, getExpeditionById } from "@/lib/expeditions-data"

export async function generateStaticParams() {
  return expeditions.map((expedition) => ({
    id: expedition.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const expedition = getExpeditionById(id)
  if (!expedition) return { title: "Expedition Not Found" }

  return {
    title: `Request to Join: ${expedition.title} | The Lazuli Collective`,
    description: `Apply to join the ${expedition.title} expedition. ${expedition.dates} in ${expedition.location}.`,
  }
}

export default async function RequestToJoinPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const expedition = getExpeditionById(id)

  if (!expedition) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <RequestToJoinForm
        expedition={{
          id: expedition.id,
          title: expedition.title,
          location: expedition.location,
          dates: expedition.dates,
          type: expedition.type,
          spots: expedition.spots,
          priceFrom: expedition.priceFrom,
          image: expedition.image,
        }}
      />
      <Footer />
    </main>
  )
}
