"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const expeditions = [
  {
    id: "gallipoli-tech-wreck-2026",
    title: "Gallipoli Tech Wreck Expedition",
    location: "Turkey",
    type: "Tech Diving",
    dates: "15-22 September 2026",
    spots: 3,
    image: "/shipwreck-underwater-diving-dramatic-blue-water-te.jpg",
    description: "Explore the legendary wrecks of the Dardanelles with an elite crew of tech divers.",
    status: "Limited Spots",
  },
  {
    id: "brothers-islands-2026",
    title: "Brothers Islands Deep South",
    location: "Egypt, Red Sea",
    type: "Liveaboard",
    dates: "3-10 November 2026",
    spots: 8,
    image: "/hammerhead-shark-underwater-red-sea-egypt-diving-b.jpg",
    description: "A week aboard our signature vessel, chasing sharks and exploring pristine reefs.",
    status: "Now Booking",
  },
  {
    id: "sinai-freediving-2027",
    title: "Sinai Desert & Dahab Freediving",
    location: "Egypt",
    type: "Mixed Adventure",
    dates: "January 2027",
    spots: 12,
    image: "/sinai-desert-mountains-sunrise-golden-light-egypt-.jpg",
    description: "Mountains, desert canyons, and the Blue Hole. An unforgettable week of contrast.",
    status: "Early Access",
  },
]

export function ExpeditionsSection() {
  return (
    <section id="expeditions" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4 font-medium">Signature Expeditions</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">Join the Crew</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base">
            Exclusive, limited-seat adventures curated by The Lazuli Collective. Fixed dates. Vetted crew. Extraordinary
            experiences.
          </p>
        </div>

        {/* Expeditions Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {expeditions.map((expedition) => (
            <article
              key={expedition.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
            >
              <Link href={`/expeditions/${expedition.id}`} className="relative aspect-[4/3] overflow-hidden block">
                <Image
                  src={expedition.image || "/placeholder.svg"}
                  alt={expedition.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-background/90 text-foreground hover:bg-background/90">{expedition.type}</Badge>
                  <Badge
                    className={
                      expedition.spots <= 5
                        ? "bg-accent text-accent-foreground hover:bg-accent"
                        : "bg-primary text-primary-foreground hover:bg-primary"
                    }
                  >
                    {expedition.status}
                  </Badge>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {expedition.location}
                </div>

                <Link href={`/expeditions/${expedition.id}`}>
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {expedition.title}
                  </h3>
                </Link>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{expedition.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {expedition.dates}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {expedition.spots} spots left
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                  asChild
                >
                  <Link href={`/expeditions/${expedition.id}`}>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="link" className="text-primary gap-2" asChild>
            <Link href="/expeditions">
              View All Expeditions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
