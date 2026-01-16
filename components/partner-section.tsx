"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const vettingProcess = [
  {
    step: "01",
    title: "Safety Standards",
    description:
      "Equipment checks, certifications, emergency protocols, and insurance verification.",
  },
  {
    step: "02",
    title: "Experience Review",
    description: "Track record, guest testimonials, and industry reputation assessment.",
  },
  {
    step: "03",
    title: "On-Site Inspection",
    description: "Our team visits personally to evaluate facilities and meet the crew.",
  },
  {
    step: "04",
    title: "Ongoing Audits",
    description:
      "Regular quality checks and guest feedback monitoring ensure standards are maintained.",
  },
]

export function PartnerSection() {
  return (
    <section id="partner" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <p className="text-accent mb-4 text-sm font-medium tracking-[0.2em] uppercase">
              Partner With Us
            </p>
            <h2 className="text-foreground mb-6 font-serif text-3xl leading-tight text-pretty md:text-4xl lg:text-5xl">
              Join the collective
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Are you an established operator in Egypt or Turkey? We're selectively expanding our
              network of vetted partners. Here's what we look for.
            </p>

            {/* Benefits for Partners */}
            <div className="mb-10 space-y-4">
              {[
                "Access to our global client base",
                "Featured placement in curated itineraries",
                "Marketing support and co-branded expeditions",
                "Direct relationship with our trip designers",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              asChild
            >
              <Link href="/partner/apply">
                Apply to Join the Network
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Vetting Process */}
          <div className="bg-card border-border rounded-lg border p-8">
            <h3 className="text-foreground mb-8 font-serif text-2xl">Our Vetting Process</h3>
            <div className="space-y-8">
              {vettingProcess.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-primary/30 font-serif text-2xl font-bold">{item.step}</span>
                  <div>
                    <h4 className="text-foreground mb-1 font-medium">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
