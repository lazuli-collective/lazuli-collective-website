import type { LucideIcon } from "lucide-react"

// =============================================================================
// Expedition Types
// =============================================================================

/** A single day in an expedition itinerary */
export interface ItineraryDay {
  day: number
  title: string
  description: string
}

/** A crew member on an expedition */
export interface CrewMember {
  name: string
  role: string
  bio: string
}

/** Full expedition data structure */
export interface Expedition {
  /** Unique identifier (URL slug) */
  id: string
  /** Display title */
  title: string
  /** Country/region (e.g., "Egypt, Red Sea") */
  location: string
  /** Specific area within location */
  region: string
  /** Type of expedition (e.g., "Tech Diving", "Liveaboard") */
  type: string
  /** Lucide icon component for the expedition type */
  icon: LucideIcon
  /** Human-readable dates (e.g., "15-22 September 2026") */
  dates: string
  /** Duration string (e.g., "8 days") */
  duration: string
  /** Number of spots remaining */
  spots: number
  /** Total capacity */
  totalSpots: number
  /** Card/thumbnail image path */
  image: string
  /** Hero/header image path */
  heroImage: string
  /** Short description for cards */
  description: string
  /** Full description for detail page */
  longDescription: string
  /** Feature highlights (max 4) */
  highlights: string[]
  /** Availability status (e.g., "Now Booking", "Limited Spots") */
  status: string
  /** Starting price with currency (e.g., "€2,800") */
  priceFrom: string
  /** Items included in the price */
  included: string[]
  /** Items not included in the price */
  notIncluded: string[]
  /** Requirements to join */
  requirements: string[]
  /** Day-by-day itinerary */
  itinerary: ItineraryDay[]
  /** Expedition crew/guides */
  crew: CrewMember[]
}

// =============================================================================
// Partner Types
// =============================================================================

/** Partner tier levels */
export type PartnerTier = "Signature" | "Verified"

/** A partner in the network */
export interface Partner {
  /** Company/business name */
  name: string
  /** Type of service (e.g., "Dive Center", "Liveaboard") */
  type: string
  /** Location (e.g., "Hurghada, Egypt") */
  location: string
  /** Partner tier status */
  tier: PartnerTier
  /** Logo image path */
  logo: string
  /** Description of services */
  description: string
}

// =============================================================================
// Form Types
// =============================================================================

/** Contact form data */
export interface ContactFormData {
  name: string
  email: string
  phone: string
  dream: string
}

/** Partner application form data */
export interface PartnerApplicationFormData {
  companyName: string
  contactName: string
  email: string
  phone: string
  website: string
  location: string
  serviceType: string
  yearsOperating: string
  description: string
  certifications: string
  whyJoin: string
}

/** Expedition join request form data */
export interface JoinRequestFormData {
  name: string
  email: string
  phone: string
  nationality: string
  experience: string
  certifications: string
  groupSize: string
  specialRequirements: string
  howHeard: string
}
