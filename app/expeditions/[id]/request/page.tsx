import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RequestToJoinForm } from "@/components/request-to-join-form"
import { notFound } from "next/navigation"

const expeditions: Record<
  string,
  {
    title: string
    location: string
    dates: string
    type: string
    spots: number
    priceFrom: string
    image: string
  }
> = {
  "gallipoli-tech-wreck-2026": {
    title: "Gallipoli Tech Wreck Expedition",
    location: "Turkey",
    dates: "15-22 September 2026",
    type: "Tech Diving",
    spots: 3,
    priceFrom: "€2,800",
    image: "/shipwreck-underwater-diving-dramatic-blue-water-te.jpg",
  },
  "brothers-islands-2026": {
    title: "Brothers Islands Deep South",
    location: "Egypt, Red Sea",
    dates: "3-10 November 2026",
    type: "Liveaboard",
    spots: 8,
    priceFrom: "€1,950",
    image: "/hammerhead-shark-underwater-red-sea-egypt-diving-b.jpg",
  },
  "sinai-freediving-2027": {
    title: "Sinai Desert & Dahab Freediving",
    location: "Egypt",
    dates: "January 2027",
    type: "Mixed Adventure",
    spots: 12,
    priceFrom: "€1,600",
    image: "/sinai-desert-mountains-sunrise-golden-light-egypt-.jpg",
  },
  "elphinstone-shark-quest-2026": {
    title: "Elphinstone Shark Quest",
    location: "Egypt, Red Sea",
    dates: "8-15 December 2026",
    type: "Liveaboard",
    spots: 6,
    priceFrom: "€2,100",
    image: "/oceanic-whitetip-shark-underwater-red-sea-egypt-di.jpg",
  },
  "cappadocia-coast-2027": {
    title: "Cappadocia to Coast",
    location: "Turkey",
    dates: "April 2027",
    type: "Land & Sea",
    spots: 10,
    priceFrom: "€3,200",
    image: "/cappadocia-hot-air-balloons-sunrise-turkey-adventu.jpg",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const expedition = expeditions[id]
  if (!expedition) return { title: "Expedition Not Found" }

  return {
    title: `Request to Join: ${expedition.title} | The Lazuli Collective`,
    description: `Apply to join the ${expedition.title} expedition. ${expedition.dates} in ${expedition.location}.`,
  }
}

export default async function RequestToJoinPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const expedition = expeditions[id]

  if (!expedition) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <RequestToJoinForm expedition={{ id, ...expedition }} />
      <Footer />
    </main>
  )
}
