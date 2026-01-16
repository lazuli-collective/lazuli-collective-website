"use client"

import Image from "next/image"
import { Star, Shield, Award } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { partners } from "@/lib/partners-data"

export default function NetworkPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4 font-medium">The Network</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight text-pretty">
              Meet our trusted partners
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Every operator in our network is personally vetted for safety, equipment standards, and guest experience.
              We only work with the best in Egypt and Turkey.
            </p>
          </div>
        </div>
      </section>

      {/* Partners List Section */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tier Legend */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-medium block">Lazuli Signature</span>
                <span className="text-muted-foreground text-sm">Our A-List partners with proven excellence</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-medium block">Lazuli Verified</span>
                <span className="text-muted-foreground text-sm">Thoroughly vetted and trusted operators</span>
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="relative w-20 h-20 bg-muted rounded flex items-center justify-center overflow-hidden">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      partner.tier === "Signature"
                        ? "border-primary/30 text-primary bg-primary/5"
                        : "border-border text-foreground"
                    }`}
                  >
                    {partner.tier === "Signature" ? <Star className="w-3 h-3 mr-1 fill-current" /> : null}
                    {partner.tier}
                  </Badge>
                </div>

                <h3 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">{partner.name}</h3>
                <p className="text-muted-foreground text-sm mb-1">{partner.type}</p>
                <p className="text-muted-foreground/60 text-sm mb-4">{partner.location}</p>

                <p className="text-sm leading-relaxed text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Want to join our network?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            We're always looking for exceptional operators who share our commitment to quality and safety.
          </p>
          <Link
            href="/partner/apply"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-md font-medium hover:bg-primary-foreground/90 transition-colors"
          >
            Apply to become a partner
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
