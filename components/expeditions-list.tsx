import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { expeditions } from "@/lib/expeditions-data"

export function ExpeditionsList() {
  return (
    <section className="bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filter Tags */}
        <div className="mb-10 flex flex-wrap gap-3">
          <Badge
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground cursor-pointer px-4 py-2 transition-colors"
          >
            All Expeditions
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground cursor-pointer px-4 py-2 transition-colors"
          >
            Tech Diving
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground cursor-pointer px-4 py-2 transition-colors"
          >
            Liveaboard
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground cursor-pointer px-4 py-2 transition-colors"
          >
            Mixed Adventure
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground cursor-pointer px-4 py-2 transition-colors"
          >
            Egypt
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground cursor-pointer px-4 py-2 transition-colors"
          >
            Turkey
          </Badge>
        </div>

        {/* Expeditions List */}
        <div className="space-y-8">
          {expeditions.map((expedition) => (
            <article
              key={expedition.id}
              className="group bg-card border-border hover:border-primary/30 overflow-hidden rounded-lg border transition-all duration-300"
            >
              <div className="grid md:grid-cols-[400px_1fr] lg:grid-cols-[500px_1fr]">
                {/* Image - Now links to detail page */}
                <Link
                  href={`/expeditions/${expedition.id}`}
                  className="relative block aspect-[4/3] overflow-hidden md:aspect-auto"
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
                          : expedition.status === "Coming Soon"
                            ? "bg-muted text-muted-foreground hover:bg-muted"
                            : "bg-primary text-primary-foreground hover:bg-primary"
                      }
                    >
                      {expedition.status}
                    </Badge>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col p-6 md:p-8">
                  <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    {expedition.location}
                  </div>

                  <Link href={`/expeditions/${expedition.id}`}>
                    <h2 className="text-foreground group-hover:text-primary mb-3 font-serif text-2xl transition-colors md:text-3xl">
                      {expedition.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {expedition.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {expedition.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-secondary text-muted-foreground rounded-full px-3 py-1 text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="text-muted-foreground mt-auto mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {expedition.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      {expedition.spots} of {expedition.totalSpots} spots left
                    </span>
                    <span className="text-foreground font-medium">From {expedition.priceFrom}</span>
                  </div>

                  {/* CTA - Added "View Details" as primary action */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    >
                      <Link href={`/expeditions/${expedition.id}`}>
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="bg-transparent">
                      <Link href={`/expeditions/${expedition.id}/request`}>Request to Join</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
