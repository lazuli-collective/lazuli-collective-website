// =============================================================================
// Brand
// =============================================================================
export const BRAND = {
  name: "The Lazuli Collective",
  tagline: "Bespoke Adventure Network",
  description: "Your insider connection to premium adventure experiences in the Red Sea & Mediterranean Sea.",
  locations: ["Red Sea", "Mediterranean Sea"] as const,
  foundedYear: 2026,
} as const

// =============================================================================
// Contact
// =============================================================================
export const CONTACT = {
  whatsapp: {
    number: "+201234567890", // TODO: Replace with real number
    get url() {
      return `https://wa.me/${this.number.replace(/\+/g, "")}`
    },
  },
  email: "hello@thelazulicollective.com",
  website: "https://thelazulicollective.com",
} as const

// =============================================================================
// Social Media
// =============================================================================
export const SOCIAL = {
  instagram: "https://instagram.com/lazuli.adventures", // TODO: Add real URLs
  facebook: "https://www.facebook.com/thelazulicollective",
  youtube: "",
  linkedin: "https://www.linkedin.com/company/111119101/",
} as const

// =============================================================================
// Layout
// =============================================================================
export const LAYOUT = {
  maxWidth: "max-w-7xl",
  sectionPadding: "py-24",
  containerPadding: "px-6",
} as const

// =============================================================================
// SEO / Metadata
// =============================================================================
export const SEO = {
  title: `${BRAND.name} | ${BRAND.tagline}`,
  description: BRAND.description,
  keywords: [
    "adventure travel",
    "Egypt diving",
    "Turkey expeditions",
    "Mediterranean Sea",
    "liveaboard",
    "tech diving",
    "Red Sea diving",
    "Mediterranean Sea diving",
    "Gallipoli diving",
    "Dahab diving",
    "Abu Talha diving",
    "Blue Hole diving",
    "The Canyon diving",
    "Tiger Canyon diving",
    "Gorilla Head diving",
    "The Arch diving",
  ] as const,
  themeColor: "#2D4A6B", // Lazuli blue
} as const

// =============================================================================
// Images
// =============================================================================
export const IMAGES = {
  placeholders: {
    default: "/images/placeholders/default.svg",
    defaultJpg: "/images/placeholders/default.jpg",
    logo: "/images/placeholders/logo.svg",
    logoPng: "/images/placeholders/logo.png",
    user: "/images/placeholders/user.jpg",
  },
  icons: {
    icon: "/icons/icon.svg",
    iconLight: "/icons/icon-light-32x32.png",
    iconDark: "/icons/icon-dark-32x32.png",
    apple: "/icons/apple-icon.png",
  },
} as const
