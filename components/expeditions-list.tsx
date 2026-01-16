import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { expeditions } from "@/lib/expeditions-data"

export function ExpeditionsList() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            All Expeditions
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Tech Diving
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Liveaboard
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Mixed Adventure
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Egypt
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Turkey
          </Badge>
        </div>

        {/* Expeditions List */}
        <div className="space-y-8">
          {expeditions.map((expedition) => (
            <article
              key={expedition.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-[400px_1fr] lg:grid-cols-[500px_1fr]">
                {/* Image - Now links to detail page */}
                <Link
                  href={`/expeditions/${expedition.id}`}
                  className="relative aspect-[4/3] md:aspect-auto overflow-hidden block"
                >
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
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    {expedition.location}
                  </div>

                  <Link href={`/expeditions/${expedition.id}`}>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {expedition.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{expedition.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {expedition.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6 mt-auto">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {expedition.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {expedition.spots} of {expedition.totalSpots} spots left
                    </span>
                    <span className="font-medium text-foreground">From {expedition.priceFrom}</span>
                  </div>

                  {/* CTA - Added "View Details" as primary action */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                      <Link href={`/expeditions/${expedition.id}`}>
                        View Details
                        <ArrowRight className="w-4 h-4" />
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
