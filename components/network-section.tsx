"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Shield, Award, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { partners } from "@/lib/partners-data"

// Show only top 6 partners on home page
const featuredPartners = partners.slice(0, 6)

export function NetworkSection() {
  return (
    <section id="network" className="bg-primary text-primary-foreground py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-primary-foreground/60 mb-4 text-sm font-medium tracking-[0.2em] uppercase">
            The Network
          </p>
          <h2 className="mb-6 font-serif text-3xl leading-tight text-pretty md:text-4xl lg:text-5xl">
            Partnering with the region's most experienced operators
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Our network is built on trust. Every partner is personally vetted for safety, equipment
            standards, and guest experience. We only work with the best.
          </p>
        </div>

        {/* Tier Legend */}
        <div className="mb-12 flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary-foreground/20 flex h-8 w-8 items-center justify-center rounded-full">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <span className="font-medium">Lazuli Signature</span>
              <span className="text-primary-foreground/60 ml-2 text-sm">Our A-List partners</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary-foreground/10 flex h-8 w-8 items-center justify-center rounded-full">
              <Shield className="h-4 w-4" />
            </div>
            <div>
              <span className="font-medium">Lazuli Verified</span>
              <span className="text-primary-foreground/60 ml-2 text-sm">Vetted & trusted</span>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPartners.map((partner, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/5 border-primary-foreground/10 hover:bg-primary-foreground/10 rounded-lg border p-6 transition-all duration-300"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="bg-primary-foreground/10 relative flex h-16 w-16 items-center justify-center rounded">
                  <Image
                    src={partner.logo || "/images/placeholders/default.svg"}
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
                  {partner.tier === "Signature" ? (
                    <Star className="mr-1 h-3 w-3 fill-current" />
                  ) : null}
                  {partner.tier}
                </Badge>
              </div>

              <h3 className="mb-1 font-serif text-lg">{partner.name}</h3>
              <p className="text-primary-foreground/60 mb-2 text-sm">{partner.type}</p>
              <p className="text-primary-foreground/40 text-sm">{partner.location}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            className="gap-2"
            asChild
          >
            <Link href="/network">
              View All Partners
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Bottom Text */}
        <p className="text-primary-foreground/60 mt-8 text-center text-sm">
          Interested in joining our network?{" "}
          <Link href="/partner/apply" className="hover:text-primary-foreground underline">
            Learn about our vetting process
          </Link>
        </p>
      </div>
    </section>
  )
}
