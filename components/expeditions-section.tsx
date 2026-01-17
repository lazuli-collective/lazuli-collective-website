"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { BRAND } from "@/lib/constants"
import { expeditions } from "@/lib/expeditions-data"
import { useState } from "react"

export function ExpeditionsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    })
  }, [api])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <section id="expeditions" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-accent mb-4 text-sm font-medium tracking-[0.2em] uppercase">
              Signature Expeditions
            </p>
            <h2 className="text-foreground font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              Join the Crew
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base">
            Exclusive, limited-seat adventures curated by {BRAND.name}. Fixed dates. Vetted crew.
            Extraordinary experiences.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {expeditions.map((expedition) => (
                <CarouselItem
                  key={expedition.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <article className="group bg-card border-border hover:border-primary/30 h-full overflow-hidden rounded-lg border transition-all duration-300">
                    <Link
                      href={`/expeditions/${expedition.id}`}
                      className="relative block aspect-[4/3] overflow-hidden"
                    >
                      <Image
                        src={expedition.image || "/images/placeholders/default.svg"}
                        alt={expedition.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-background/90 text-foreground hover:bg-background/90">
                          {expedition.type}
                        </Badge>
                        <Badge
                          className={
                            expedition.spots <= 5
                              ? "bg-accent text-accent-foreground hover:bg-accent"
                              : "bg-primary text-primary-foreground hover:bg-primary"
                          }
                        >
                          {expedition.status}
                        </Badge>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4" />
                        {expedition.location}
                      </div>

                      <Link href={`/expeditions/${expedition.id}`}>
                        <h3 className="text-foreground group-hover:text-primary mb-3 font-serif text-xl transition-colors">
                          {expedition.title}
                        </h3>
                      </Link>

                      <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
                        {expedition.description}
                      </p>

                      <div className="text-muted-foreground mb-6 flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {expedition.dates}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="h-4 w-4" />
                          {expedition.spots} spots left
                        </span>
                      </div>

                      <Button
                        variant="outline"
                        className="group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary w-full bg-transparent"
                        asChild
                      >
                        <Link href={`/expeditions/${expedition.id}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation Arrows */}
          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className="bg-background/80 hover:bg-background border-border hover:border-primary/50 absolute top-1/2 -left-4 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border p-2 shadow-lg backdrop-blur-sm transition-all md:-left-6 md:flex"
              aria-label="Previous expedition"
            >
              <ChevronLeft className="text-foreground h-5 w-5" />
            </button>
          )}
          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="bg-background/80 hover:bg-background border-border hover:border-primary/50 absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border p-2 shadow-lg backdrop-blur-sm transition-all md:-right-6 md:flex"
              aria-label="Next expedition"
            >
              <ChevronRight className="text-foreground h-5 w-5" />
            </button>
          )}

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  index === current
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All CTA - More Prominent */}
        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 py-6 text-base font-medium shadow-lg transition-all hover:shadow-xl"
            asChild
          >
            <Link href="/expeditions">
              View All Expeditions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
