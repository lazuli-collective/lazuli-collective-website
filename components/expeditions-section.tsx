"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BRAND } from "@/lib/constants"
import { expeditions } from "@/lib/expeditions-data"

// Show first 3 expeditions on homepage
const featuredExpeditions = expeditions.slice(0, 3)

export function ExpeditionsSection() {
  return (
    <section id="expeditions" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-accent mb-4 text-sm font-medium tracking-[0.2em] uppercase">
              Signature Expeditions
            </p>
            <h2 className="text-foreground font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              Join the Crew
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base">
            Exclusive, limited-seat adventures curated by {BRAND.name}. Fixed dates. Vetted crew.
            Extraordinary experiences.
          </p>
        </div>

        {/* Expeditions Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredExpeditions.map((expedition) => (
            <article
              key={expedition.id}
              className="group bg-card border-border hover:border-primary/30 overflow-hidden rounded-lg border transition-all duration-300"
            >
              <Link
                href={`/expeditions/${expedition.id}`}
                className="relative block aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={expedition.image || "/images/placeholders/default.svg"}
                  alt={expedition.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-background/90 text-foreground hover:bg-background/90">
                    {expedition.type}
                  </Badge>
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
                <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  {expedition.location}
                </div>

                <Link href={`/expeditions/${expedition.id}`}>
                  <h3 className="text-foreground group-hover:text-primary mb-3 font-serif text-xl transition-colors">
                    {expedition.title}
                  </h3>
                </Link>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {expedition.description}
                </p>

                <div className="text-muted-foreground mb-6 flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {expedition.dates}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    {expedition.spots} spots left
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary w-full bg-transparent"
                  asChild
                >
                  <Link href={`/expeditions/${expedition.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Button variant="link" className="text-primary gap-2" asChild>
            <Link href="/expeditions">
              View All Expeditions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
