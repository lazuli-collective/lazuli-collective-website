"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dream: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4 font-medium">Get In Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-pretty">
              Ready to start planning?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              The best way to reach us is via WhatsApp. We're usually online during Egypt and Turkey business hours, but
              leave a message anytime.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-10">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp Us</p>
                  <p className="text-muted-foreground text-sm">Fastest response time</p>
                </div>
              </a>

              <a
                href="mailto:hello@thelazulicollective.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">hello@thelazulicollective.com</p>
                  <p className="text-muted-foreground text-sm">For detailed inquiries</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Based in Hurghada & Bodrum</p>
                  <p className="text-muted-foreground text-sm">On the ground in Egypt & Turkey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-serif text-2xl text-foreground mb-2">Brief Your Fixers</h3>
            <p className="text-muted-foreground mb-8">
              Tell us about your dream adventure and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
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
                  placeholder="Tell us about the adventure you're imagining. Where do you want to go? What do you want to experience? How many people? Any specific dates?"
                  rows={5}
                  value={formData.dream}
                  onChange={(e) => setFormData({ ...formData, dream: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                <Send className="w-4 h-4" />
                Send Your Brief
              </Button>

              <p className="text-muted-foreground text-xs text-center">
                We respect your privacy. Your information is never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
