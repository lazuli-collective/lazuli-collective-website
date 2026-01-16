"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CONTACT } from "@/lib/constants"

interface ExpeditionSummary {
  id: string
  title: string
  location: string
  dates: string
  type: string
  spots: number
  priceFrom: string
  image: string
}

export function RequestToJoinForm({ expedition }: { expedition: ExpeditionSummary }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    experience: "",
    certifications: "",
    groupSize: "1",
    specialRequirements: "",
    howHeard: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Request to Join: ${expedition.title}`)
    const body = encodeURIComponent(
      `EXPEDITION: ${expedition.title}\nDATES: ${expedition.dates}\n\n` +
        `--- PERSONAL INFO ---\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Nationality: ${formData.nationality || "Not provided"}\n\n` +
        `--- EXPERIENCE ---\n` +
        `Level: ${formData.experience}\n` +
        `Certifications: ${formData.certifications || "Not provided"}\n\n` +
        `--- TRIP DETAILS ---\n` +
        `Group Size: ${formData.groupSize}\n` +
        `Special Requirements: ${formData.specialRequirements || "None"}\n` +
        `How Heard: ${formData.howHeard || "Not specified"}`
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="bg-background pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back Link */}
        <Link
          href="/expeditions"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Expeditions
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          {/* Form */}
          <div>
            <h1 className="text-foreground mb-3 font-serif text-3xl md:text-4xl">
              Request to Join
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Complete this brief and we'll get back to you within 24 hours to discuss availability
              and next steps.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-foreground border-border border-b pb-2 font-medium">
                  About You
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input
                      id="nationality"
                      placeholder="e.g., British"
                      value={formData.nationality}
                      onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h3 className="text-foreground border-border border-b pb-2 font-medium">
                  Your Experience
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="experience">Diving / Adventure Experience *</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({ ...formData, experience: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-50 dives)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (50-200 dives)</SelectItem>
                      <SelectItem value="advanced">Advanced (200-500 dives)</SelectItem>
                      <SelectItem value="expert">Expert (500+ dives)</SelectItem>
                      <SelectItem value="tech">Technical Diver</SelectItem>
                      <SelectItem value="instructor">Instructor / Professional</SelectItem>
                      <SelectItem value="non-diver">Non-Diver / Adventure Focus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="certifications">Certifications / Qualifications</Label>
                  <Input
                    id="certifications"
                    placeholder="e.g., PADI Advanced, TDI Trimix, etc."
                    value={formData.certifications}
                    onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                  />
                </div>
              </div>

              {/* Trip Details */}
              <div className="space-y-4">
                <h3 className="text-foreground border-border border-b pb-2 font-medium">
                  Trip Details
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="groupSize">How many people in your group? *</Label>
                  <Select
                    value={formData.groupSize}
                    onValueChange={(value) => setFormData({ ...formData, groupSize: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Just me</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3-4">3-4 people</SelectItem>
                      <SelectItem value="5+">5+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialRequirements">
                    Any special requirements or questions?
                  </Label>
                  <Textarea
                    id="specialRequirements"
                    placeholder="Dietary requirements, equipment needs, specific interests, or any questions about the expedition..."
                    rows={4}
                    value={formData.specialRequirements}
                    onChange={(e) =>
                      setFormData({ ...formData, specialRequirements: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="howHeard">How did you hear about us?</Label>
                  <Select
                    value={formData.howHeard}
                    onValueChange={(value) => setFormData({ ...formData, howHeard: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="referral">Friend / Referral</SelectItem>
                      <SelectItem value="dive-club">Dive Club</SelectItem>
                      <SelectItem value="previous">Previous Guest</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full gap-2"
              >
                <Send className="h-4 w-4" />
                Submit Request
              </Button>

              <p className="text-muted-foreground text-center text-xs">
                Submitting a request does not guarantee a spot. We review all applications to ensure
                the right fit for the expedition.
              </p>
            </form>
          </div>

          {/* Sidebar - Expedition Summary */}
          <div className="h-fit lg:sticky lg:top-28">
            <div className="bg-card border-border overflow-hidden rounded-lg border">
              <div className="relative aspect-video">
                <Image
                  src={expedition.image || "/images/placeholders/default.svg"}
                  alt={expedition.title}
                  fill
                  className="object-cover"
                />
                <Badge className="bg-primary text-primary-foreground absolute top-3 left-3">
                  {expedition.type}
                </Badge>
              </div>
              <div className="p-6">
                <h2 className="text-foreground mb-4 font-serif text-xl">{expedition.title}</h2>
                <div className="space-y-3 text-sm">
                  <div className="text-muted-foreground flex items-center gap-3">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>{expedition.location}</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-3">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>{expedition.dates}</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-3">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    <span>{expedition.spots} spots remaining</span>
                  </div>
                </div>
                <div className="border-border mt-5 border-t pt-5">
                  <div className="mb-4 flex items-baseline justify-between">
                    <span className="text-muted-foreground text-sm">Starting from</span>
                    <span className="text-foreground font-serif text-2xl">
                      {expedition.priceFrom}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 text-xs">
                    Final pricing provided upon application review.
                  </p>
                  <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                    <a
                      href={`${CONTACT.whatsapp.url}?text=${encodeURIComponent(`Hi! I have a question about the ${expedition.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Questions? WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
