import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PartnerApplicationForm } from "@/components/partner-application-form"

export const metadata = {
  title: "Apply to Join the Network | The Lazuli Collective",
  description:
    "Are you an established adventure operator in Egypt or Turkey? Apply to join The Lazuli Collective network of vetted partners.",
}

export default function PartnerApplyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PartnerApplicationForm />
      <Footer />
    </main>
  )
}
