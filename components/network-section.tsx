"use client"

import Image from "next/image"
import { Star, Shield, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const partners = [
  {
    name: "Red Sea Divers",
    type: "Dive Center",
    location: "Hurghada, Egypt",
    tier: "Signature",
    logo: "/dive-center-logo-minimal-professional.jpg",
  },
  {
    name: "Aegean Adventures",
    type: "Liveaboard",
    location: "Bodrum, Turkey",
    tier: "Signature",
    logo: "/liveaboard-boat-company-logo-minimal.jpg",
  },
  {
    name: "Sinai Safari Co.",
    type: "Desert Tours",
    location: "Dahab, Egypt",
    tier: "Verified",
    logo: "/safari-tour-company-logo-desert-minimal.jpg",
  },
  {
    name: "Gallipoli Tek",
    type: "Tech Diving",
    location: "Çanakkale, Turkey",
    tier: "Signature",
    logo: "/technical-diving-company-logo-minimal.jpg",
  },
  {
    name: "Luxor Expeditions",
    type: "Historical Tours",
    location: "Luxor, Egypt",
    tier: "Verified",
    logo: "/archaeological-tour-company-logo-minimal.jpg",
  },
  {
    name: "Antalya Blue",
    type: "Dive Resort",
    location: "Antalya, Turkey",
    tier: "Verified",
    logo: "/dive-resort-logo-ocean-minimal.jpg",
  },
]

export function NetworkSection() {
  return (
    <section id="network" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary-foreground/60 uppercase tracking-[0.2em] text-sm mb-4 font-medium">The Network</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-pretty">
            Partnering with the region's most experienced operators
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Our network is built on trust. Every partner is personally vetted for safety, equipment standards, and guest
            experience. We only work with the best.
          </p>
        </div>

        {/* Tier Legend */}
        <div className="flex flex-wrap gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="font-medium">Lazuli Signature</span>
              <span className="text-primary-foreground/60 text-sm ml-2">Our A-List partners</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-medium">Lazuli Verified</span>
              <span className="text-primary-foreground/60 text-sm ml-2">Vetted & trusted</span>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="relative w-20 h-10 bg-primary-foreground/10 rounded flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain p-2 opacity-80"
                  />
                </div>
                <Badge
                  variant="outline"
                  className={`border-primary-foreground/30 text-primary-foreground ${
                    partner.tier === "Signature" ? "bg-primary-foreground/10" : ""
                  }`}
                >
                  {partner.tier === "Signature" ? <Star className="w-3 h-3 mr-1 fill-current" /> : null}
                  {partner.tier}
                </Badge>
              </div>

              <h3 className="font-serif text-lg mb-1">{partner.name}</h3>
              <p className="text-primary-foreground/60 text-sm mb-2">{partner.type}</p>
              <p className="text-primary-foreground/40 text-sm">{partner.location}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-primary-foreground/60 mt-12 text-sm">
          Interested in joining our network?{" "}
          <a href="#partner" className="underline hover:text-primary-foreground">
            Learn about our vetting process
          </a>
        </p>
      </div>
    </section>
  )
}
