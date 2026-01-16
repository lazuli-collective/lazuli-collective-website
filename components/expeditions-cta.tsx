import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExpeditionsCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Don't see what you're looking for?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          We're always planning new expeditions. Tell us what kind of adventure you're dreaming of, and we'll let you
          know when something matches.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Tell Us Your Dream Trip
          </a>
        </Button>
      </div>
    </section>
  )
}
