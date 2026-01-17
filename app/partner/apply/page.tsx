import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PartnerApplicationForm } from "@/components/partner-application-form"

export const metadata = {
  title: "Partner With Us | The Lazuli Collective",
  description:
    "Are you an established adventure operator in the Red Sea or Mediterranean Sea? Apply to join The Lazuli Collective network of vetted partners.",
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
