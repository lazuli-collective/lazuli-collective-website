import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/constants"

export function ExpeditionsCTA() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-foreground mb-4 font-serif text-2xl md:text-3xl">
          Don't see what you're looking for?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          We're always planning new expeditions. Tell us what kind of adventure you're dreaming of,
          and we'll let you know when something matches.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          asChild
        >
          <a href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" />
            Tell Us Your Dream Trip
          </a>
        </Button>
      </div>
    </section>
  )
}
