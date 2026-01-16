import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  X,
  MessageCircle,
  ArrowLeft,
  Compass,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CrewMember {
  name: string
  role: string
  bio: string
}

interface ItineraryDay {
  day: number
  title: string
  description: string
}

interface Expedition {
  id: string
  title: string
  location: string
  region: string
  type: string
  dates: string
  duration: string
  spots: number
  totalSpots: number
  image: string
  heroImage: string
  description: string
  longDescription: string
  highlights: string[]
  status: string
  priceFrom: string
  included: string[]
  notIncluded: string[]
  requirements: string[]
  itinerary: ItineraryDay[]
  crew: CrewMember[]
}

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
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            {/* Back Link */}
            <Link
              href="/expeditions"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              All Expeditions
            </Link>

            <div className="flex flex-wrap gap-3 mb-4">
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

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 text-balance">
              {expedition.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-primary-foreground/90">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {expedition.location} — {expedition.region}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {expedition.dates}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {expedition.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* Left Column - Content */}
            <div>
              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">{expedition.longDescription}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3">
                  {expedition.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground"
                    >
                      <Compass className="w-4 h-4 text-primary" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-0">
                  {expedition.itinerary.map((day, index) => (
                    <div
                      key={day.day}
                      className="relative pl-8 pb-8 border-l-2 border-border last:border-l-transparent last:pb-0"
                    >
                      {/* Day marker */}
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-xs font-medium text-primary-foreground">{day.day}</span>
                      </div>

                      <div className="bg-card border border-border rounded-lg p-5 ml-4">
                        <h3 className="font-medium text-foreground mb-2">{day.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    What's Included
                  </h2>
                  <ul className="space-y-3">
                    {expedition.included.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-accent" />
                    Not Included
                  </h2>
                  <ul className="space-y-3">
                    {expedition.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <X className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-12">
                <h2 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Requirements
                </h2>
                <div className="bg-secondary/50 border border-border rounded-lg p-6">
                  <ul className="space-y-3">
                    {expedition.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Crew */}
              {expedition.crew.length > 0 && (
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-6">Your Crew</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {expedition.crew.map((member) => (
                      <div key={member.name} className="bg-card border border-border rounded-lg p-5">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                            <span className="font-serif text-xl text-primary">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{member.name}</h3>
                            <p className="text-sm text-primary">{member.role}</p>
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
            <div className="lg:sticky lg:top-28 h-fit">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={expedition.image || "/placeholder.svg"}
                    alt={expedition.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  {/* Price */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-muted-foreground text-sm">Starting from</span>
                    <span className="font-serif text-3xl text-foreground">{expedition.priceFrom}</span>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                    <Users className="w-4 h-4" />
                    <span>
                      <strong className={expedition.spots <= 5 ? "text-accent" : "text-foreground"}>
                        {expedition.spots} spots
                      </strong>{" "}
                      remaining of {expedition.totalSpots}
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                      <Link href={`/expeditions/${expedition.id}/request`}>
                        Request to Join
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>

                    <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                      <a
                        href={`https://wa.me/1234567890?text=Hi! I have questions about the ${expedition.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>

                  <p className="text-muted-foreground text-xs text-center mt-4">
                    Final pricing and availability confirmed upon inquiry.
                  </p>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="mt-6 bg-secondary/50 border border-border rounded-lg p-5">
                <h4 className="font-medium text-foreground text-sm mb-3">Why book with Lazuli?</h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    Vetted operators only
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    On-the-ground support in Egypt & Turkey
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    Small groups, big experiences
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
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
