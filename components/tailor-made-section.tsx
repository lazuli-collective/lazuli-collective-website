"use client";

import Image from "next/image";
import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Personal trip designer assigned to you",
  "Access to our full vetted network",
  "Custom itineraries for any group size",
  "24/7 on-ground support",
];

export function TailorMadeSection() {
  return (
    <section id="tailor-made" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/luxury-liveaboard-boat-sunset-red-sea-egypt-aerial.jpg"
                  alt="Luxury liveaboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/shipwreck-tec-diving.jpg"
                  alt="Diving group"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/motorbike-desert-action-shot.jpg"
                  alt="Desert safari"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/windsurfing-man-on-sea.jpg"
                  alt="Historical sites"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              Bespoke Itineraries
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-pretty">
              Your dream trip, our network
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Not ready to join a group expedition? Tell us what you're dreaming
              of, and we'll design a private adventure just for you. Families,
              couples, dive clubs—we handle the logistics for any size group.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                asChild
              >
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
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
  );
}
