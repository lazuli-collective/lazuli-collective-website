"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle, Shield, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BRAND, CONTACT } from "@/lib/constants"

const benefits = [
  {
    icon: Users,
    title: "Global Client Access",
    description: "Connect with serious adventurers from around the world.",
  },
  {
    icon: TrendingUp,
    title: "Featured Placement",
    description: "Priority positioning in our curated itineraries.",
  },
  {
    icon: Shield,
    title: "Trusted Badge",
    description: "Lazuli Signature or Verified partner status.",
  },
]

export function PartnerApplicationForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    serviceType: "",
    yearsOperating: "",
    description: "",
    certifications: "",
    whyJoin: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Partner Application: ${formData.companyName}`)
    const body = encodeURIComponent(
      `--- COMPANY INFO ---\n` +
        `Company: ${formData.companyName}\n` +
        `Website: ${formData.website || "Not provided"}\n` +
        `Location: ${formData.location}\n` +
        `Service Type: ${formData.serviceType}\n` +
        `Years Operating: ${formData.yearsOperating}\n\n` +
        `--- CONTACT PERSON ---\n` +
        `Name: ${formData.contactName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `--- ABOUT THE BUSINESS ---\n` +
        `Description:\n${formData.description}\n\n` +
        `Certifications:\n${formData.certifications || "Not provided"}\n\n` +
        `Why Join ${BRAND.name}:\n${formData.whyJoin || "Not provided"}`
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="bg-background pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          <div>
            <p className="text-accent mb-4 text-sm font-medium tracking-[0.2em] uppercase">
              Partner Application
            </p>
            <h1 className="text-foreground mb-3 font-serif text-3xl md:text-4xl">
              Apply to Join the Network
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              We're selectively expanding our network of vetted operators in Egypt and Turkey.
              Complete this application and our team will be in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-foreground border-border border-b pb-2 font-medium">
                  Company Information
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourcompany.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Primary Location *</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData({ ...formData, location: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="egypt-hurghada">Egypt - Hurghada</SelectItem>
                        <SelectItem value="egypt-sharm">Egypt - Sharm El Sheikh</SelectItem>
                        <SelectItem value="egypt-dahab">Egypt - Dahab</SelectItem>
                        <SelectItem value="egypt-marsa">Egypt - Marsa Alam</SelectItem>
                        <SelectItem value="egypt-other">Egypt - Other</SelectItem>
                        <SelectItem value="turkey-bodrum">Turkey - Bodrum</SelectItem>
                        <SelectItem value="turkey-antalya">Turkey - Antalya</SelectItem>
                        <SelectItem value="turkey-fethiye">Turkey - Fethiye</SelectItem>
                        <SelectItem value="turkey-gallipoli">Turkey - Gallipoli</SelectItem>
                        <SelectItem value="turkey-other">Turkey - Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="liveaboard">Liveaboard Operator</SelectItem>
                        <SelectItem value="dive-center">Dive Center</SelectItem>
                        <SelectItem value="safari">Safari / Land Operator</SelectItem>
                        <SelectItem value="hotel">Boutique Hotel / Resort</SelectItem>
                        <SelectItem value="guide">Licensed Guide Service</SelectItem>
                        <SelectItem value="transport">Transport Provider</SelectItem>
                        <SelectItem value="multi">Multi-Service Operator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearsOperating">Years in Operation *</Label>
                  <Select
                    value={formData.yearsOperating}
                    onValueChange={(value) => setFormData({ ...formData, yearsOperating: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-foreground border-border border-b pb-2 font-medium">
                  Contact Person
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      placeholder="Your name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+20 123 456 7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* About the Business */}
              <div className="space-y-4">
                <h3 className="text-foreground border-border border-b pb-2 font-medium">
                  About Your Business
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="description">
                    Describe your services and what makes you stand out *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your operation, your team, your vessels/facilities, and what sets you apart..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="certifications">Certifications, Licenses & Insurance</Label>
                  <Textarea
                    id="certifications"
                    placeholder="List relevant certifications, operating licenses, and insurance coverage..."
                    rows={3}
                    value={formData.certifications}
                    onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whyJoin">Why do you want to join {BRAND.name}?</Label>
                  <Textarea
                    id="whyJoin"
                    placeholder="What interests you about partnering with us?"
                    rows={3}
                    value={formData.whyJoin}
                    onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full gap-2"
              >
                <Send className="h-4 w-4" />
                Submit Application
              </Button>

              <p className="text-muted-foreground text-center text-xs">
                We review all applications carefully. Expect a response within 5-7 business days.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="h-fit space-y-6 lg:sticky lg:top-28">
            {/* Benefits */}
            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="text-foreground mb-6 font-serif text-xl">Partner Benefits</h3>
              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <benefit.icon className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1 font-medium">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Look For */}
            <div className="bg-secondary/50 border-border rounded-lg border p-6">
              <h3 className="text-foreground mb-4 font-serif text-lg">What We Look For</h3>
              <ul className="space-y-3">
                {[
                  "Established track record (3+ years preferred)",
                  "Strong safety protocols and certifications",
                  "Positive guest reviews and reputation",
                  "Professional equipment and facilities",
                  "Commitment to sustainable practices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
