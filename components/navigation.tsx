"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/expeditions", label: "Expeditions" },
  { href: "/#tailor-made", label: "Tailor-Made" },
  { href: "/#network", label: "The Network" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/partner/apply", label: "Partner With Us" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-serif font-semibold text-primary tracking-tight">The Lazuli Collective</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Bespoke Adventure Network
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn("lg:hidden overflow-hidden transition-all duration-300", isOpen ? "max-h-96 mt-4" : "max-h-0")}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full mt-2" asChild>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
