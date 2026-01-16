import Link from "next/link"
import { MessageCircle, Instagram, Facebook, Youtube } from "lucide-react"
import { BRAND, CONTACT, SOCIAL } from "@/lib/constants"

const footerLinks = {
  explore: [
    { label: "Expeditions", href: "#expeditions" },
    { label: "Tailor-Made", href: "#tailor-made" },
    // { label: "The Network", href: "/network" }, // Hidden until ready
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
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <span className="text-background font-serif text-2xl font-semibold tracking-tight">
                {BRAND.name}
              </span>
            </Link>
            <p className="text-background/60 mb-6 max-w-sm leading-relaxed">
              {BRAND.description} Based in {BRAND.locations.join(" and ")}.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={CONTACT.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-background/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              {SOCIAL.instagram && (
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 hover:bg-background/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {SOCIAL.facebook && (
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 hover:bg-background/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {SOCIAL.youtube && (
                <a
                  href={SOCIAL.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 hover:bg-background/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-medium">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-background/10 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-background/40 text-sm">
            © {BRAND.foundedYear} {BRAND.name}. Part of{" "}
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
