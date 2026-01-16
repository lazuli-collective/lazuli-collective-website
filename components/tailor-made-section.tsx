"use client"

import Image from "next/image"
import { MessageCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/constants"

const benefits = [
  "Personal trip designer assigned to you",
  "Access to our full vetted network",
  "Custom itineraries for any group size",
  "24/7 on-ground support",
]

export function TailorMadeSection() {
  return (
    <section id="tailor-made" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/images/hero/liveaboard-sunset.jpg"
                  alt="Luxury liveaboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/expeditions/shipwreck-tec.jpg"
                  alt="Diving group"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/hero/motorbike-desert.jpg"
                  alt="Desert safari"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/images/hero/windsurfing.jpg"
                  alt="Windsurfing adventure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent mb-4 text-sm font-medium tracking-[0.2em] uppercase">
              Bespoke Itineraries
            </p>
            <h2 className="text-foreground mb-6 font-serif text-3xl leading-tight text-pretty md:text-4xl lg:text-5xl">
              Your dream trip, our network
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Not ready to join a group expedition? Tell us what you're dreaming of, and we'll
              design a private adventure just for you. Families, couples, dive clubs—we handle the
              logistics for any size group.
            </p>

            {/* Benefits */}
            <ul className="mb-10 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-primary/10 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <Check className="text-primary h-3 w-3" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                asChild
              >
                <a href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Start the Conversation
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Fill Out a Brief</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
