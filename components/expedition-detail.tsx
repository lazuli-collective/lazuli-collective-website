import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  Sparkles,
  MessageCircle,
  ArrowLeft,
  Compass,
  Shield,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CONTACT } from "@/lib/constants"
import type { Expedition } from "@/lib/types"

export function ExpeditionDetail({ expedition }: { expedition: Expedition }) {
  return (
    <article>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src={expedition.heroImage || expedition.image}
          alt={expedition.title}
          fill
          className="object-cover"
          priority
        />
        <div className="from-foreground/80 via-foreground/30 absolute inset-0 bg-gradient-to-t to-transparent" />

        <div className="absolute right-0 bottom-0 left-0 p-6 md:p-12">
          <div className="mx-auto max-w-7xl">
            {/* Back Link */}
            <Link
              href="/expeditions"
              className="text-primary-foreground/80 hover:text-primary-foreground mb-6 inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Expeditions
            </Link>

            <div className="mb-4 flex flex-wrap gap-3">
              <Badge className="bg-primary text-primary-foreground">{expedition.type}</Badge>
              <Badge
                className={
                  expedition.spots <= 5
                    ? "bg-accent text-accent-foreground"
                    : expedition.status === "Coming Soon"
                      ? "bg-muted text-muted-foreground"
                      : "bg-card text-foreground"
                }
              >
                {expedition.status}
              </Badge>
            </div>

            <h1 className="text-primary-foreground mb-4 font-serif text-4xl text-balance md:text-5xl lg:text-6xl">
              {expedition.title}
            </h1>

            <div className="text-primary-foreground/90 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {expedition.location} — {expedition.region}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {expedition.dates}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {expedition.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Left Column - Content */}
            <div>
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-foreground mb-4 font-serif text-2xl">Overview</h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {expedition.longDescription}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3">
                  {expedition.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="bg-secondary text-secondary-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                    >
                      <Compass className="text-primary h-4 w-4" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-12">
                <h2 className="text-foreground mb-6 font-serif text-2xl">Day-by-Day Itinerary</h2>
                <div className="space-y-0">
                  {expedition.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="border-border relative border-l-2 pb-8 pl-8 last:border-l-transparent last:pb-0"
                    >
                      {/* Day marker */}
                      <div className="bg-primary absolute top-0 -left-3 flex h-6 w-6 items-center justify-center rounded-full">
                        <span className="text-primary-foreground text-xs font-medium">
                          {day.day}
                        </span>
                      </div>

                      <div className="bg-card border-border ml-4 rounded-lg border p-5">
                        <h3 className="text-foreground mb-2 font-medium">{day.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included */}
              <div className="mb-12 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-foreground mb-4 flex items-center gap-2 font-serif text-xl">
                    <Check className="text-primary h-5 w-5" />
                    What's Included
                  </h2>
                  <ul className="space-y-3">
                    {expedition.included.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground flex items-start gap-3 text-sm"
                      >
                        <Check className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-foreground mb-4 flex items-center gap-2 font-serif text-xl">
                    <Sparkles className="text-primary h-5 w-5" />
                    Customize Your Package
                  </h2>
                  <ul className="space-y-3">
                    {expedition.notIncluded.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground flex items-start gap-3 text-sm"
                      >
                        <Sparkles className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-12">
                <h2 className="text-foreground mb-4 flex items-center gap-2 font-serif text-xl">
                  <Shield className="text-primary h-5 w-5" />
                  Requirements
                </h2>
                <div className="bg-secondary/50 border-border rounded-lg border p-6">
                  <ul className="space-y-3">
                    {expedition.requirements.map((req) => (
                      <li
                        key={req}
                        className="text-muted-foreground flex items-start gap-3 text-sm"
                      >
                        <div className="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Notes */}
              {expedition.notes && expedition.notes.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-foreground mb-4 flex items-center gap-2 font-serif text-xl">
                    <Info className="text-primary h-5 w-5" />
                    Notes
                  </h2>
                  <div className="bg-secondary/50 border-border rounded-lg border p-6">
                    <ul className="space-y-3">
                      {expedition.notes.map((note) => (
                        <li
                          key={note}
                          className="text-muted-foreground flex items-start gap-3 text-sm"
                        >
                          <div className="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Crew */}
              {expedition.crew.length > 0 && (
                <div>
                  <h2 className="text-foreground mb-6 font-serif text-2xl">Your Crew</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {expedition.crew.map((member) => (
                      <div
                        key={member.name}
                        className="bg-card border-border rounded-lg border p-5"
                      >
                        <div className="mb-3 flex items-center gap-4">
                          <div className="bg-secondary flex h-14 w-14 items-center justify-center rounded-full">
                            <span className="text-primary font-serif text-xl">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-foreground font-medium">{member.name}</h3>
                            <p className="text-primary text-sm">{member.role}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm">{member.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="h-fit lg:sticky lg:top-28">
              <div className="bg-card border-border overflow-hidden rounded-lg border">
                <div className="relative aspect-video">
                  <Image
                    src={expedition.image || "/images/placeholders/default.svg"}
                    alt={expedition.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  {/* Price */}
                  <div className="mb-4 flex items-baseline justify-between">
                    <span className="text-muted-foreground text-sm">Starting from</span>
                    <span className="text-foreground font-serif text-3xl">
                      {expedition.priceFrom}
                    </span>
                  </div>

                  {/* Availability */}
                  <div className="text-muted-foreground border-border mb-6 flex items-center gap-3 border-b pb-6 text-sm">
                    <Users className="h-4 w-4" />
                    <span>
                      <strong className={expedition.spots <= 5 ? "text-accent" : "text-foreground"}>
                        {expedition.spots} spots
                      </strong>{" "}
                      remaining of {expedition.totalSpots}
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full gap-2"
                    >
                      <Link href={`/expeditions/${expedition.id}/request`}>
                        Request to Join
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>

                    <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                      <a
                        href={`${CONTACT.whatsapp.url}?text=${encodeURIComponent(`Hi! I have questions about the ${expedition.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>

                  <p className="text-muted-foreground mt-4 text-center text-xs">
                    Final pricing and availability confirmed upon inquiry.
                  </p>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-secondary/50 border-border mt-6 rounded-lg border p-5">
                <h4 className="text-foreground mb-3 text-sm font-medium">Why book with Lazuli?</h4>
                <ul className="text-muted-foreground space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <Check className="text-primary mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                    Vetted operators only
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-primary mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                    On-the-ground support in Egypt & Turkey
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-primary mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                    Small groups, big experiences
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-primary mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                    Flexible payment plans available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
