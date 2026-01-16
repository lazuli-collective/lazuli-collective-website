import { Shield, Users, MapPin, Compass } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Vetted Network",
    description: "Every partner is hand-picked and personally inspected. We check the gear, so you don't have to.",
  },
  {
    icon: Users,
    title: "Insider Access",
    description: "Skip the tourist traps. We know the hidden spots, the best guides, and the secret schedules.",
  },
  {
    icon: MapPin,
    title: "On The Ground",
    description: "We're based in Egypt and Turkey. When something changes, we're already there.",
  },
  {
    icon: Compass,
    title: "Stress-Free",
    description: "Don't get overwhelmed. Don't get ripped off. We handle the logistics, you handle the adventure.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4 font-medium">Why The Collective</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-pretty">
            Your plug in the adventure industry
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Think of us as your trusted local fixer. We've spent years building relationships with the region's most
            experienced operators. Now, we're opening that network to you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 border border-border rounded-lg hover:border-primary/30 hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
