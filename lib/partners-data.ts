import type { Partner } from "./types"

/**
 * All vetted partners in The Lazuli Collective network.
 * Partners are categorized by tier:
 * - "Signature": Premium, hand-picked partners with established track records
 * - "Verified": Vetted partners that meet quality standards
 */
export const partners: Partner[] = [
  {
    name: "Plop Tours",
    type: "Dive Operator",
    location: "Hurghada, Egypt",
    tier: "Signature",
    logo: "/images/partners/ploptours.jpg",
    description:
      "Premium Red Sea dive tours and spiritual cruises combining world-class diving with transformative wellness experiences. Offering bespoke liveaboard expeditions that seamlessly blend underwater exploration with yoga, meditation, and holistic practices for the mindful adventurer.",
  },
  {
    name: "Sly Dive",
    type: "Liveaboard",
    location: "Dahab, Egypt",
    tier: "Signature",
    logo: "/images/partners/slydive.jpg",
    description:
      "Premier 5-star dive center in Dahab specializing in technical diving with comprehensive TDI curriculum from intro to advanced trimix. Fully rebreather-friendly facility offering guided technical dives, regular Red Sea safaris, and industry workshops. Student-centered approach with meticulous attention to detail and safety.",
  },
  {
    name: "Sofie Henriksson",
    type: "Technical Dive Instructor",
    location: "Hurghada, Egypt",
    tier: "Signature",
    logo: "/images/partners/sofiehenriksson.jpg",
    description:
      "PADI Technical Instructor and expedition leader with over 10,000 dives across 15 years. Specializes in technical diving education and leading exploratory expeditions. Focuses on building solid foundations that give divers absolute freedom to explore with confidence and joy.",
  },
  {
    name: "Audrey Cudel",
    type: "Tech/Cave Diving Instructor",
    location: "Gozo, Malta",
    tier: "Verified",
    logo: "/images/partners/audreycudel.jpg",
    description:
      "TDI SDI Instructor Trainer & Full Cave Evaluator with over 30 years of diving experience. Specialized in sidemount, technical sidemount, and cave diving instruction with operations in Gozo, France, and Mexico.",
  },
  {
    name: "Galipoli Wrecks",
    type: "Dive Center",
    location: "Gallipoli, Turkey",
    tier: "Verified",
    logo: "/images/partners/gallipoliwrecks.jpg",
    description:
      "Specialist dive center for the Gallipoli Historical Underwater Park, featuring 23 WWI shipwrecks from the legendary 1915 Dardanelles Campaign. Explore Allied warships, minesweepers, and support vessels at this world-renowned historical dive site.",
  },
  {
    name: "Celesta",
    type: "Liveaboard",
    location: "Hurghada, Egypt",
    tier: "Verified",
    logo: "/images/partners/celesta.jpg",
    description:
      "Premium Red Sea liveaboard safari boat offering versatile expeditions for recreational and technical/CCR divers. Fully equipped for challenging dive sites while also hosting yoga and spiritual retreats, blending underwater exploration with holistic wellness.",
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
