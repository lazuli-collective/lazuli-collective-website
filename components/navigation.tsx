"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BRAND, CONTACT } from "@/lib/constants"

const navLinks = [
  { href: "#expeditions", label: "Expeditions" },
  { href: "#tailor-made", label: "Tailor-Made" },
  // { href: "#network", label: "The Network" }, // Hidden until ready
  { href: "#partner", label: "Partner With Us" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background/80 border-border/50 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-primary font-serif text-xl font-semibold tracking-tight">
              {BRAND.name}
            </span>
            <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase">
              {BRAND.tagline}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              asChild
            >
              <a href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            isOpen ? "mt-4 max-h-96" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground py-2 text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2 w-full gap-2"
              asChild
            >
              <a href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
