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
      <section className="bg-background pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-accent mb-4 text-sm font-medium tracking-[0.2em] uppercase">
              The Network
            </p>
            <h1 className="text-foreground mb-6 font-serif text-4xl leading-tight text-pretty md:text-5xl lg:text-6xl">
              Meet our trusted partners
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              Every operator in our network is personally vetted for safety, equipment standards,
              and guest experience. We only work with the best in Egypt and Turkey.
            </p>
          </div>
        </div>
      </section>

      {/* Partners List Section */}
      <section className="bg-secondary/30 py-12">
        <div className="mx-auto max-w-7xl px-6">
          {/* Tier Legend */}
          <div className="mb-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <Award className="text-primary h-5 w-5" />
              </div>
              <div>
                <span className="block font-medium">Lazuli Signature</span>
                <span className="text-muted-foreground text-sm">
                  Our A-List partners with proven excellence
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <Shield className="text-primary h-5 w-5" />
              </div>
              <div>
                <span className="block font-medium">Lazuli Verified</span>
                <span className="text-muted-foreground text-sm">
                  Thoroughly vetted and trusted operators
                </span>
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-card border-border hover:border-primary/50 rounded-lg border p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="bg-muted relative flex h-20 w-20 items-center justify-center overflow-hidden rounded">
                    <Image
                      src={partner.logo || "/images/placeholders/default.svg"}
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
                    {partner.tier === "Signature" ? (
                      <Star className="mr-1 h-3 w-3 fill-current" />
                    ) : null}
                    {partner.tier}
                  </Badge>
                </div>

                <h3 className="group-hover:text-primary mb-2 font-serif text-xl transition-colors">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground mb-1 text-sm">{partner.type}</p>
                <p className="text-muted-foreground/60 mb-4 text-sm">{partner.location}</p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-4xl">Want to join our network?</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            We're always looking for exceptional operators who share our commitment to quality and
            safety.
          </p>
          <Link
            href="/partner/apply"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 inline-block rounded-md px-8 py-3 font-medium transition-colors"
          >
            Apply to become a partner
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
