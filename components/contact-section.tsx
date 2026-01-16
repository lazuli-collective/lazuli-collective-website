"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BRAND, CONTACT } from "@/lib/constants"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dream: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("New Inquiry from Website")
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nDream Trip:\n${formData.dream}`
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div>
            <p className="text-accent mb-4 text-sm font-medium tracking-[0.2em] uppercase">
              Get In Touch
            </p>
            <h2 className="text-foreground mb-6 font-serif text-3xl leading-tight text-pretty md:text-4xl lg:text-5xl">
              Ready to start planning?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              The best way to reach us is via WhatsApp. We're usually online during Egypt and Turkey
              business hours, but leave a message anytime.
            </p>

            {/* Contact Methods */}
            <div className="mb-10 space-y-6">
              <a
                href={CONTACT.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:border-primary/30 hover:bg-secondary/30 group flex items-center gap-4 rounded-lg border p-4 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors group-hover:bg-[#25D366]/20">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-foreground font-medium">WhatsApp Us</p>
                  <p className="text-muted-foreground text-sm">Fastest response time</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="border-border hover:border-primary/30 hover:bg-secondary/30 group flex items-center gap-4 rounded-lg border p-4 transition-all"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <p className="text-foreground font-medium">{CONTACT.email}</p>
                  <p className="text-muted-foreground text-sm">For detailed inquiries</p>
                </div>
              </a>

              <div className="border-border flex items-center gap-4 rounded-lg border p-4">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <p className="text-foreground font-medium">
                    Based in {BRAND.locations.join(" & ")}
                  </p>
                  <p className="text-muted-foreground text-sm">On the ground in Egypt & Turkey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border-border rounded-lg border p-8">
            <h3 className="text-foreground mb-2 font-serif text-2xl">Brief Your Fixers</h3>
            <p className="text-muted-foreground mb-8">
              Tell us about your dream adventure and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
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

              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dream">What is your dream trip?</Label>
                <Textarea
                  id="dream"
                  placeholder="Tell us about the adventure you are imagining. Where do you want to go? What do you want to experience? How many people? Any specific dates?"
                  rows={5}
                  value={formData.dream}
                  onChange={(e) => setFormData({ ...formData, dream: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full gap-2"
              >
                <Send className="h-4 w-4" />
                Send Your Brief
              </Button>

              <p className="text-muted-foreground text-center text-xs">
                We respect your privacy. Your information is never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
