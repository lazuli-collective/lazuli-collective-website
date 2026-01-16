import { Shield, Users, MapPin, Compass } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Vetted Network",
    description:
      "Every partner is hand-picked and personally inspected. We check the gear, so you don't have to.",
  },
  {
    icon: Users,
    title: "Insider Access",
    description:
      "Skip the tourist traps. We know the hidden spots, the best guides, and the secret schedules.",
  },
  {
    icon: MapPin,
    title: "On The Ground",
    description: "We're based in Egypt and Turkey. When something changes, we're already there.",
  },
  {
    icon: Compass,
    title: "Stress-Free",
    description:
      "Don't get overwhelmed. Don't get ripped off. We handle the logistics, you handle the adventure.",
  },
]

export function ValueProposition() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-accent mb-4 text-sm font-medium tracking-[0.2em] uppercase">
            Why The Collective
          </p>
          <h2 className="text-foreground mb-6 font-serif text-3xl leading-tight text-pretty md:text-4xl lg:text-5xl">
            Your plug in the adventure industry
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Think of us as your trusted local fixer. We've spent years building relationships with
            the region's most experienced operators. Now, we're opening that network to you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border-border hover:border-primary/30 hover:bg-secondary/30 rounded-lg border p-6 transition-all duration-300"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                <feature.icon className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-3 font-serif text-xl">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
