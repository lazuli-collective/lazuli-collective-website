import { notFound } from "next/navigation"
import { getExpeditionById, expeditions } from "@/lib/expeditions-data"
import { ExpeditionDetail } from "@/components/expedition-detail"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export async function generateStaticParams() {
  return expeditions.map((expedition) => ({
    id: expedition.id,
  }))
}

export default async function ExpeditionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const expedition = getExpeditionById(id)

  if (!expedition) {
    notFound()
  }

  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <ExpeditionDetail expedition={expedition} />
      <Footer />
    </main>
  )
}
