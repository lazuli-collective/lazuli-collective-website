export interface Partner {
  name: string;
  type: string;
  location: string;
  tier: "Signature" | "Verified";
  logo: string;
  description: string;
}

export const partners: Partner[] = [
  {
    name: "Red Sea Divers",
    type: "Dive Center",
    location: "Hurghada, Egypt",
    tier: "Signature",
    logo: "/dive-center-logo-minimal-professional.jpg",
    description:
      "Award-winning dive center with over 20 years of experience in the Red Sea. Specializing in technical diving, wreck exploration, and marine conservation. PADI 5-star facility with modern equipment and multilingual instructors.",
  },
  {
    name: "Aegean Adventures",
    type: "Liveaboard",
    location: "Bodrum, Turkey",
    tier: "Signature",
    logo: "/liveaboard-boat-company-logo-minimal.jpg",
    description:
      "Luxury liveaboard experiences along Turkey's stunning Aegean coast. Fleet of traditional Turkish gulets and modern yachts, offering diving, sailing, and cultural exploration. Gourmet cuisine and personalized itineraries.",
  },
  {
    name: "Sinai Safari Co.",
    type: "Desert Tours",
    location: "Dahab, Egypt",
    tier: "Verified",
    logo: "/safari-tour-company-logo-desert-minimal.jpg",
    description:
      "Expert-led desert expeditions into the heart of Sinai. Camel treks, Bedouin cultural experiences, and off-road adventures. Small group sizes ensure authentic experiences with local communities and pristine desert landscapes.",
  },
  {
    name: "Gallipoli Tek",
    type: "Tech Diving",
    location: "Çanakkale, Turkey",
    tier: "Signature",
    logo: "/technical-diving-company-logo-minimal.jpg",
    description:
      "Premier technical diving operation specializing in Gallipoli's historic WWI shipwrecks. TDI-certified instructors, advanced mixed-gas diving, and deep wreck penetration. Combining history with world-class technical diving.",
  },
  {
    name: "Luxor Expeditions",
    type: "Historical Tours",
    location: "Luxor, Egypt",
    tier: "Verified",
    logo: "/archaeological-tour-company-logo-minimal.jpg",
    description:
      "Private archaeological tours led by qualified Egyptologists. Exclusive access to lesser-known tombs and temples, avoiding crowds. Hot air balloon flights over the Valley of the Kings and bespoke historical experiences.",
  },
  {
    name: "Antalya Blue",
    type: "Dive Resort",
    location: "Antalya, Turkey",
    tier: "Verified",
    logo: "/dive-resort-logo-ocean-minimal.jpg",
    description:
      "Boutique dive resort on the Turkish Riviera offering both recreational and technical diving. Daily boat trips to pristine dive sites, underwater caves, and ancient shipwrecks. Full-service resort with accommodation and training facilities.",
  },
];
