"use client"

import { ArrowDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/underwater-scuba-diver-silhouette-dramatic-lightin.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-sand/80 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Egypt & Turkey</p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-background font-medium leading-tight mb-6 text-balance">
          Bespoke Adventure Network
          <br />
          <span className="text-sand">&</span> Expeditions
        </h1>

        <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Your insider connection to the best liveaboards, dive centers, and adventure providers in the region. We
          curate the network. We plan the logistics. You just show up.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 gap-2 text-base px-8"
            asChild
          >
            <a href="#expeditions">View Expeditions</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-background/30 text-background hover:bg-background/10 hover:text-background gap-2 text-base px-8 bg-transparent"
            asChild
          >
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Start Planning
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-background/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
