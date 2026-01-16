import type { Partner } from "./types"

/**
 * All vetted partners in The Lazuli Collective network.
 * Partners are categorized by tier:
 * - "Signature": Premium, hand-picked partners with established track records
 * - "Verified": Vetted partners that meet quality standards
 */
export const partners: Partner[] = [
  {
    name: "Red Sea Divers",
    type: "Dive Center",
    location: "Hurghada, Egypt",
    tier: "Signature",
    logo: "/images/partners/red-sea-divers.jpg",
    description:
      "Award-winning dive center with over 20 years of experience in the Red Sea. Specializing in technical diving, wreck exploration, and marine conservation. PADI 5-star facility with modern equipment and multilingual instructors.",
  },
  {
    name: "Aegean Adventures",
    type: "Liveaboard",
    location: "Bodrum, Turkey",
    tier: "Signature",
    logo: "/images/partners/aegean-adventures.jpg",
    description:
      "Luxury liveaboard experiences along Turkey's stunning Aegean coast. Fleet of traditional Turkish gulets and modern yachts, offering diving, sailing, and cultural exploration. Gourmet cuisine and personalized itineraries.",
  },
  {
    name: "Sinai Safari Co.",
    type: "Desert Tours",
    location: "Dahab, Egypt",
    tier: "Verified",
    logo: "/images/partners/sinai-safari.jpg",
    description:
      "Expert-led desert expeditions into the heart of Sinai. Camel treks, Bedouin cultural experiences, and off-road adventures. Small group sizes ensure authentic experiences with local communities and pristine desert landscapes.",
  },
  {
    name: "Gallipoli Tek",
    type: "Tech Diving",
    location: "Çanakkale, Turkey",
    tier: "Signature",
    logo: "/images/partners/gallipoli-tek.jpg",
    description:
      "Premier technical diving operation specializing in Gallipoli's historic WWI shipwrecks. TDI-certified instructors, advanced mixed-gas diving, and deep wreck penetration. Combining history with world-class technical diving.",
  },
  {
    name: "Luxor Expeditions",
    type: "Historical Tours",
    location: "Luxor, Egypt",
    tier: "Verified",
    logo: "/images/partners/luxor-expeditions.jpg",
    description:
      "Private archaeological tours led by qualified Egyptologists. Exclusive access to lesser-known tombs and temples, avoiding crowds. Hot air balloon flights over the Valley of the Kings and bespoke historical experiences.",
  },
  {
    name: "Antalya Blue",
    type: "Dive Resort",
    location: "Antalya, Turkey",
    tier: "Verified",
    logo: "/images/partners/antalya-blue.jpg",
    description:
      "Boutique dive resort on the Turkish Riviera offering both recreational and technical diving. Daily boat trips to pristine dive sites, underwater caves, and ancient shipwrecks. Full-service resort with accommodation and training facilities.",
  },
]

/**
 * Get all partners of a specific tier.
 * @param tier - The partner tier to filter by
 * @returns Array of partners matching the tier
 */
export function getPartnersByTier(tier: Partner["tier"]): Partner[] {
  return partners.filter((partner) => partner.tier === tier)
}

/**
 * Get all partners in a specific location (partial match).
 * @param location - The location string to search for (e.g., "Egypt", "Turkey")
 * @returns Array of partners containing the location in their location field
 */
export function getPartnersByLocation(location: string): Partner[] {
  return partners.filter((partner) => partner.location.includes(location))
}
