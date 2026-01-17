"use client"

import { ArrowDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BRAND, CONTACT } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero/underwater-diver.jpg')`,
        }}
      >
        <div className="from-foreground/60 via-foreground/40 to-foreground/70 absolute inset-0 bg-gradient-to-b" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="text-sand/80 mb-6 text-sm font-medium tracking-[0.3em] uppercase">
          Red Sea, Mediterranean Sea, and More
        </p>

        <h1 className="text-background mb-6 font-serif text-4xl leading-tight font-medium text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          {BRAND.tagline}
          <br />
          <span className="text-sand">&</span> Expeditions
        </h1>

        <p className="text-background/80 mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
          Your insider connection to the best liveaboards, dive centers, and adventure providers in
          the region. We curate the network. We plan the logistics. You just show up.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 gap-2 px-8 text-base"
            asChild
          >
            <a href="#expeditions">View Expeditions</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-background/30 text-background hover:bg-background/10 hover:text-background gap-2 bg-transparent px-8 text-base"
            asChild
          >
            <a href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Start Planning
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-background/60 h-6 w-6" />
      </div>

      {/* Decorative Elements */}
      <div className="from-background absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </section>
  )
}
