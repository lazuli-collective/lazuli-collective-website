import Link from "next/link"
import { MessageCircle, Instagram, Facebook, Youtube } from "lucide-react"

const footerLinks = {
  explore: [
    { label: "Expeditions", href: "#expeditions" },
    { label: "Tailor-Made", href: "#tailor-made" },
    { label: "The Network", href: "/network" },
    { label: "Journal", href: "#journal" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Partner With Us", href: "#partner" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-semibold text-background tracking-tight">
                The Lazuli Collective
              </span>
            </Link>
            <p className="text-background/60 mb-6 max-w-sm leading-relaxed">
              Your insider connection to premium adventure experiences in Egypt and Turkey. Based in Hurghada and
              Bodrum.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © 2026 The Lazuli Collective. Part of{" "}
            <a
              href="https://lazuli.global"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
            >
              Lazuli Global
            </a>
          </p>
          <p className="text-background/40 text-sm">Crafted with care in Egypt & Turkey</p>
        </div>
      </div>
    </footer>
  )
}
