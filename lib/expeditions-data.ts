import { Anchor, Ship } from "lucide-react"
import type { Expedition } from "./types"

/**
 * All available expeditions offered by The Lazuli Collective.
 * Add new expeditions to this array to display them on the website.
 */
export const expeditions: Expedition[] = [
  {
    id: "gallipoli-tech-wreck-2026",
    title: "Gallipoli WWI Wreck Tour",
    location: "Çanakkale, Turkey",
    region: "Gallipoli",
    type: "Shipwreck Diving",
    icon: Anchor,
    dates: "15-22 July 2026 (TBC)",
    duration: "8 days",
    spots: 14,
    totalSpots: 16,
    image: "/images/expeditions/gallipoli-wrecks.jpg",
    heroImage: "/images/expeditions/gallipoli-wrecks.jpg",
    description:
      "Descend into history. Seven days exploring the legendary WWI wrecks of the Dardanelles—from HMS Majestic at 24m to the deepest battleships at 90m. Open Circuit and CCR configurations welcome.",
    longDescription:
      "The Gallipoli Peninsula is hallowed ground—both above and below the waterline. In 1915, during one of the bloodiest campaigns of World War I, the narrow strait of the Dardanelles became the final resting place for Allied and Ottoman vessels alike. Today, these wrecks lie scattered across depths ranging from recreational to extreme technical, each one a time capsule of sacrifice and maritime history.\n\nThis expedition is designed for serious technical divers seeking to explore wrecks that few will ever see. From the imposing bulk of HMS Majestic—a pre-dreadnought battleship torpedoed by a German U-boat—to the deeper sites that demand trimix and extended decompression, every dive is a pilgrimage into the past. We've partnered with Turkey's premier technical diving operation to ensure every aspect of your diving is handled: twin sets, stages, bailout cylinders, trimix and helitrox fills, CCR sorbalime, DPVs for the deeper penetrations—if you need it, we've got it sorted.\n\nWhether you're an experienced OC tech diver or a rebreather specialist, this expedition will push your skills and reward you with encounters that redefine what wreck diving can be.",
    highlights: [
      "22 shipwrecks",
      "9m to 90m depth range",
      "CCR & OC supported",
      "Full gas logistics",
    ],
    status: "Early Access",
    priceFrom: "€2,800",
    included: [
      "7 nights accommodation in boutique waterfront hotel",
      "All technical diving (up to 2 dives per day on dive days)",
      "Twin set, stages, bailout, and CCR cylinders provided",
      "All gas: Nitrox, Trimix, Helitrox fills included",
      "CCR sorbalime and oxygen provided for rebreather divers",
      "DPV rental for deep wreck exploration",
      "Daily breakfast at hotel & lunch at dive center",
      "Airport transfers from Istanbul or Çanakkale",
      "Expert dive guides with 10+ years local experience",
      "Return flights from your home country",
    ],
    notIncluded: [
      "Personal dive equipment (available for rent or bring your own)",
      "CCR unit (JJ Rebreather available for rent or bring your own)",
      "Dinners (group dinners arranged, pay as you go)",
      "Personal travel insurance",
      "Dive insurance",
      "Alcoholic beverages",
      "Gratuities",
      "Visa fees (if applicable)",
    ],
    requirements: [
      "Technical diving certification: TDI ANDP / PADI Tec50 or equivalent for deeper dives",
      "CCR divers: appropriate CCR certification to 60m+ recommended",
      "Minimum 100 logged dives, 30+ technical dives",
      "Trimix experience required for dives below 50m",
      "Recent dive experience within 6 months",
      "Valid dive insurance with technical diving coverage to planned depths",
      "Good physical fitness and medical clearance for diving",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        description:
          "Arrive in Çanakkale, transfer to boutique hotel overlooking the Dardanelles. Evening welcome dinner with the crew, followed by comprehensive briefing on the week's dive plan, equipment check, and a historical overview of the Gallipoli campaign by our resident historian.",
      },
      {
        day: 2,
        title: "Check Dives & Shallower Wrecks",
        description:
          "Morning check dives to assess skills, trim, and buoyancy in local conditions. Afternoon dive on one of the shallower wrecks (15-25m range) to acclimate. Gas analysis and equipment fine-tuning with our technical support team.",
      },
      {
        day: 3,
        title: "HMS Majestic",
        description:
          "The crown jewel of Gallipoli diving. This 16,000-ton pre-dreadnought battleship sits upright at 24m, her massive guns still pointing skyward. Multiple dives exploring the superstructure, deck guns, and surrounding debris field. An emotional and unforgettable experience.",
      },
      {
        day: 4,
        title: "The Lundy & Mid-Depth Wrecks",
        description:
          "Two-dive day exploring wrecks in the 35-50m range. The Lundy, a British merchant vessel, offers excellent penetration opportunities. Afternoon dive on additional sites based on conditions. Evening video review and debrief.",
      },
      {
        day: 5,
        title: "Deep Wreck Exploration",
        description:
          "The day serious tech divers wait for. Single dive on one of the deeper wrecks (60-90m range) for those with appropriate certification and experience. Extended bottom time with appropriate decompression. Non-participating divers can explore shallower alternatives.",
      },
      {
        day: 6,
        title: "HMS Triumph & French Submarine Joule",
        description:
          "Explore HMS Triumph, another battleship lost in 1915, and the French submarine Joule. Depths vary from 40-55m. These sites see very few divers and the marine life encrustation is spectacular.",
      },
      {
        day: 7,
        title: "Flex Day / Repeat Dives",
        description:
          "Weather and condition-dependent day. Return to favorite wrecks for repeat dives or explore sites we couldn't fit in earlier. Optional surface excursion to the Gallipoli battlefields and memorials for historical context.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Mandatory 24-hour surface interval completed. Leisurely breakfast, certificate presentation, and group photos. Transfers to Istanbul or Çanakkale airport. Until the next expedition.",
      },
    ],
    crew: [
      {
        name: "Mustafa Kaya",
        role: "Lead Technical Dive Guide",
        bio: "20+ years guiding tech dives in the Dardanelles. Former Turkish Navy clearance diver. Knows every wreck intimately.",
      },
      {
        name: "Dr. Ayşe Yılmaz",
        role: "Maritime Historian",
        bio: "PhD in WWI naval history. Author of 'The Sunken Fleet of Gallipoli'. Provides historical context for every dive.",
      },
    ],
  },
  {
    id: "dahab-canyon-tec-2026",
    title: "Dahab Canyons & Caves Tec Expedition",
    location: "Egypt, Red Sea",
    region: "Gulf of Aqaba",
    type: "Tech Diving",
    icon: Anchor,
    dates: "October 2026",
    duration: "8 days",
    spots: 10,
    totalSpots: 14,
    image: "/images/expeditions/dahab-canyon.jpg",
    heroImage: "/images/expeditions/dahab-canyon.jpg",
    description:
      "Beyond the Blue Hole. A week-long liveaboard expedition from Hurghada exploring Dahab's lesser-known canyon systems and underwater caves—40m to 70m+ on trimix, aboard one of the Red Sea's finest vessels.",
    longDescription:
      "Everyone knows Dahab's Blue Hole and The Canyon—but the coastline hides secrets that only technical divers will ever witness. Deep canyons cutting through the reef, cave systems that snake into darkness, and walls that plunge beyond recreational limits. This expedition takes you there.\n\nDeparting from Hurghada aboard a liveaboard vessel specifically equipped for technical diving operations, we'll spend a week working the Dahab coastline from the water. This isn't your typical day-trip operation with crowded sites and time pressure. We moor where we want, dive when conditions are optimal, and have the flexibility to explore sites that shore-based operations simply can't reach.\n\nOur vessel is one of the best-equipped technical diving platforms in the region: dedicated filling stations for trimix and nitrox, ample deck space for twin sets and stages, professional crew who understand the needs of serious divers, and cuisine that rivals the best shore-side restaurants. Your only job is to dive.\n\nExpect dives ranging from 40m to 70m+, with some sites offering opportunities for those certified deeper. All trimix fills are handled on board, along with equipment support, dive planning assistance, and the kind of meticulous organization that lets you focus on the diving.",
    highlights: ["Remote canyon systems", "Trimix liveaboard", "40-70m+ depths", "Premium vessel"],
    status: "Early Access",
    priceFrom: "€2,600",
    included: [
      "7 nights full-board on premium technical diving liveaboard",
      "Up to 3 technical dives per day",
      "All gas: Nitrox, Trimix fills included",
      "Soft drinks, tea, coffee & water",
      "Marine park fees",
      "Return flights from your home country",
      "Airport transfers Hurghada",
      "Twin sets, stages, and bailout available",
      "Technical dive guides with local site expertise",
      "Dive planning support and gas management",
      "Onboard technical support and equipment assistance",
    ],
    notIncluded: [
      "Personal dive equipment (regs, computers, wing/backplate, exposure suit)",
      "CCR unit and consumables (CCR divers welcome, bring your own)",
      "Alcoholic beverages",
      "Equipment rental beyond tanks/weights (available on request)",
      "Personal travel insurance (required)",
      "Gratuities",
      "Visa fees",
    ],
    requirements: [
      "Technical diving certification: Tec 45 / Advanced Nitrox + Deco Procedures minimum",
      "Trimix certification required for dives beyond 55m (Tec 50 / Normoxic Trimix or equivalent)",
      "Minimum 50 logged dives, 20+ technical dives",
      "Recent technical diving experience within 6 months",
      "Valid dive insurance with technical diving coverage",
      "Comfortable with overhead environments for cave/cavern sections",
      "Good physical fitness",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation in Hurghada",
        description:
          "Board the vessel in Hurghada Marina. Welcome aboard, cabin assignments, safety briefing, and equipment setup. Check dive at a local reef site before we begin our overnight sail north to the Gulf of Aqaba.",
      },
      {
        day: 2,
        title: "Southern Dahab Sites",
        description:
          "Arrive in Dahab waters. First technical dives on the southern canyon systems. Depths 40-50m. Evening briefing on the week's exploration targets and site selection based on conditions.",
      },
      {
        day: 3,
        title: "The Deep Canyons",
        description:
          "Explore the dramatic canyon formations that cut through the reef. Sheer walls, swim-throughs, and depths pushing to 55-60m. Trimix dives for those certified. The geology here is unlike anywhere else in the Red Sea.",
      },
      {
        day: 4,
        title: "Cave Systems & Overhangs",
        description:
          "Focus on the cavern and overhead environments. Proper cave training not required but overhead experience recommended. Depths vary from 45-65m. Spectacular light effects in the cavern entrances.",
      },
      {
        day: 5,
        title: "The Outer Walls",
        description:
          "Deeper exploration of the vertical walls that drop into the abyss. Dives in the 55-70m range for certified trimix divers. Slower day with extended surface intervals and quality decompression time.",
      },
      {
        day: 6,
        title: "Northern Sites & The Bells",
        description:
          "Work the northern sections of the coast. Includes the famous Bells entry point and surrounding areas. Multiple depth options for mixed certification groups.",
      },
      {
        day: 7,
        title: "Flex Day & Return Sail",
        description:
          "Morning dives based on conditions and group preference. Repeat favorites or explore sites we couldn't fit earlier. Afternoon begin the sail back to Hurghada. Sunset on deck.",
      },
      {
        day: 8,
        title: "Disembarkation",
        description:
          "Final breakfast on board. Disembark by 10am. Transfers to Hurghada airport or hotels. Surface interval requirement observed.",
      },
    ],
    crew: [
      {
        name: "Ahmed Mahmoud",
        role: "Technical Dive Supervisor",
        bio: "TDI Trimix Instructor. 15 years technical diving in the Red Sea. Former Egyptian Navy diver.",
      },
      {
        name: "Captain Youssef Ibrahim",
        role: "Vessel Captain",
        bio: "25 years navigating the Red Sea. Specialist in technical diving expedition logistics.",
      },
    ],
  },
  {
    id: "rosalie-moller-2026",
    title: "Rosalie Moller & Gubal Island Expedition",
    location: "Egypt, Red Sea",
    region: "Strait of Gubal",
    type: "Tech Diving",
    icon: Anchor,
    dates: "November 2026 (TBC)",
    duration: "5 days",
    spots: 12,
    totalSpots: 16,
    image: "/images/expeditions/rosalie-moller.jpg",
    heroImage: "/images/expeditions/rosalie-moller.jpg",
    description:
      "The forgotten sister. While crowds flock to the Thistlegorm, technical divers can explore the hauntingly beautiful Rosalie Moller in near-solitude. Five days in the Strait of Gubal—deep wreck exploration for tec divers, stunning reef diving at Gubal Island for everyone.",
    longDescription:
      "Just 10 kilometers from the legendary SS Thistlegorm lies her lesser-known contemporary: the Rosalie Moller. Both ships were bombed by German aircraft within days of each other in October 1941, both sank in the Strait of Gubal, and both now rest on the sandy bottom—yet while Thistlegorm welcomes hundreds of divers daily, Rosalie Moller receives only a handful.\n\nThere's a reason for that. Sitting at 50m with the deck at 39m, Rosalie Moller demands technical diving skills. Strong currents, limited visibility at times, and depths that push recreational limits keep the casual divers away. For those of us who put in the training, the reward is extraordinary: a 108-meter cargo steamship draped in soft corals, teeming with glassfish, and utterly peaceful.\n\nThis expedition offers the best of both worlds. Technical divers will focus on Rosalie Moller with multiple dives to truly explore her holds, engine room, and superstructure. Recreational divers in the group can enjoy world-class diving at Gubal Island—the reef systems here are pristine, with dramatic drop-offs, abundant marine life, and some of the best visibility in the northern Red Sea.\n\nWe're still finalizing dates and logistics for this expedition, but register your interest now for priority access when bookings open.",
    highlights: [
      "Rosalie Moller deep wreck",
      "Gubal Island reefs",
      "Rec & tec options",
      "Small group",
    ],
    status: "Planning",
    priceFrom: "€1,800",
    included: [
      "4 nights full-board on diving liveaboard",
      "Multiple dives on Rosalie Moller (tec divers)",
      "Gubal Island reef diving (rec divers)",
      "Nitrox fills for recreational divers",
      "Trimix/Nitrox fills for technical divers",
      "Soft drinks, tea, coffee & water",
      "Marine park fees",
      "Return flights from your home country",
      "Airport transfers Hurghada or Sharm el-Sheikh",
      "Tanks & weights",
      "Dive guides for both tec and rec groups",
    ],
    notIncluded: [
      "Personal dive equipment",
      "Technical diving equipment (stage bottles, twins available for rent)",
      "Alcoholic beverages",
      "Equipment rental beyond basics",
      "Personal travel insurance (required)",
      "Gratuities",
      "Visa fees",
    ],
    requirements: [
      "TECHNICAL DIVERS: Tec 45 / Advanced Nitrox + Deco Procedures minimum for Rosalie Moller",
      "RECREATIONAL DIVERS: Advanced Open Water or equivalent for Gubal Island",
      "All divers: minimum 30 logged dives",
      "Technical divers: 20+ technical dives logged",
      "Recent dive experience within 12 months",
      "Valid dive insurance (tech coverage for tec divers)",
      "Comfortable with currents",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation",
        description:
          "Board vessel in Hurghada. Sail toward Shag Rock and the Strait of Gubal. Safety briefing and equipment setup. Evening dive or early night depending on arrival time.",
      },
      {
        day: 2,
        title: "Gubal Island & First Rosalie Moller Dive",
        description:
          "Morning dive at Gubal Island for all divers—stunning reef walls, vibrant corals, and excellent marine life. Afternoon: technical divers descend on Rosalie Moller (50m) for the first exploration. Recreational divers enjoy a second Gubal reef dive.",
      },
      {
        day: 3,
        title: "Rosalie Moller & Gubal Reefs",
        description:
          "Technical divers: extended Rosalie Moller exploration—engine room, holds, and superstructure. Recreational divers: full day at Gubal Island's best sites, including Bluff Point and the famous drift dives along the island's walls.",
      },
      {
        day: 4,
        title: "Final Dives & Exploration",
        description:
          "Technical divers: final Rosalie Moller dive with penetration options for those qualified. Recreational divers: choice of Gubal sites or nearby Sha'ab Abu Nuhas reefs. Sunset sail toward port.",
      },
      {
        day: 5,
        title: "Disembarkation",
        description:
          "Morning surface interval. Breakfast and disembark. Transfers to airport. Minimum surface interval times observed for all flight connections.",
      },
    ],
    crew: [
      {
        name: "Hassan Farouq",
        role: "Lead Wreck Specialist",
        bio: "Has logged over 300 dives on Rosalie Moller alone. Knows every penetration point and the best routes through the wreck.",
      },
    ],
  },
  {
    id: "red-sea-wreck-safari-2026",
    title: "Red Sea Wreck Safari",
    location: "Egypt, Red Sea",
    region: "Northern Red Sea",
    type: "Liveaboard",
    icon: Ship,
    dates: "December 2026",
    duration: "8 days",
    spots: 14,
    totalSpots: 20,
    image: "/images/expeditions/thistlegorm.jpg",
    heroImage: "/images/expeditions/thistlegorm.jpg",
    description:
      "The ultimate wreck diving safari. One week, seven legendary shipwrecks—from the iconic Thistlegorm to the Abu Nuhas graveyard. Premium liveaboard, world-class diving, and stories that span centuries of maritime history.",
    longDescription:
      "The northern Red Sea is the world's greatest open-air shipwreck museum. Nowhere else on Earth can you dive this many historically significant, beautifully preserved, and incredibly diverse wrecks in a single week. From WWII cargo ships frozen in time to 19th-century sailing vessels draped in coral, this expedition covers them all.\n\nOur route is designed to maximize your wreck diving while minimizing transit time. We start from Hurghada and work our way through the greatest hits: the SS Thistlegorm with her cargo of wartime vehicles, the Rosalie Moller for those who want to go deep, the Abu Nuhas reef with its four stacked wrecks (Giannis D, Carnatic, Chrisoula K, and Kimon M), and the beautiful Dunraven.\n\nThe vessel is a premium liveaboard with spacious cabins, excellent cuisine, and a crew that understands serious divers. Nitrox is included, and we offer plenty of diving flexibility—whether you want four dives a day or prefer a more relaxed pace with time for photography and exploration.\n\nThis expedition suits recreational and technical divers alike. Most wrecks are accessible to Advanced Open Water divers, while deeper penetrations and the Rosalie Moller offer challenges for those with technical training.",
    highlights: [
      "7 legendary wrecks",
      "SS Thistlegorm",
      "Abu Nuhas 4 wrecks",
      "Premium liveaboard",
    ],
    status: "Now Booking",
    priceFrom: "€1,950",
    included: [
      "7 nights full-board on premium liveaboard",
      "Up to 4 dives per day",
      "Nitrox included for all divers",
      "Soft drinks, tea, coffee & water",
      "All marine park fees",
      "Return flights from your home country",
      "Airport transfers Hurghada",
      "Tanks & weights",
      "Experienced wreck diving guides",
      "Underwater torch rental",
      "Daily dive briefings with historical context",
    ],
    notIncluded: [
      "Personal dive equipment",
      "Alcoholic beverages",
      "Equipment rental (available on board)",
      "Personal travel insurance (required)",
      "Gratuities",
      "Visa fees",
      "Technical diving gases (Trimix available on request for surcharge)",
    ],
    requirements: [
      "Advanced Open Water certification or equivalent",
      "Minimum 40 logged dives",
      "Wreck diving specialty recommended but not required",
      "Deep Diver specialty recommended for deeper penetrations",
      "Recent dive experience within 12 months",
      "Comfortable with overhead environments for wreck penetration",
      "Valid dive insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation & Check Dives",
        description:
          "Board vessel in Hurghada Marina. Welcome briefing, cabin assignments, and equipment setup. Afternoon check dive on nearby reef. Sail toward Abu Nuhas overnight.",
      },
      {
        day: 2,
        title: "Abu Nuhas - The Shipwreck Graveyard",
        description:
          "Full day at Abu Nuhas reef—nicknamed 'Ships' Graveyard' for good reason. Four major wrecks on one reef. Morning: Giannis D (1983, Greek cargo ship, spectacular bow section). Afternoon: Carnatic (1869, Victorian-era steamship, oldest wreck on the route). Night dive optional.",
      },
      {
        day: 3,
        title: "Abu Nuhas Continued",
        description:
          "Complete our Abu Nuhas exploration. Chrisoula K ('Tile Wreck', 1981, cargo of Italian tiles still visible) and Kimon M (1978, lentils cargo ship). Four wrecks, countless penetration opportunities, and superb marine life.",
      },
      {
        day: 4,
        title: "SS Thistlegorm",
        description:
          "The main event. SS Thistlegorm is consistently rated among the world's top wrecks. A WWII British cargo ship bombed in 1941, she rests at 30m with her cargo perfectly preserved: BSA motorcycles, Bedford trucks, train carriages, ammunition, and more. Multiple dives to explore inside and out.",
      },
      {
        day: 5,
        title: "Rosalie Moller & Shag Rock",
        description:
          "For tech-certified divers: dive the deeper Rosalie Moller (50m). Recreational divers: explore Shag Rock reef and return to Thistlegorm. All groups reconvene for afternoon sailing.",
      },
      {
        day: 6,
        title: "The Dunraven",
        description:
          "One of the Red Sea's most beautiful wrecks. This 19th-century steamship lies upside-down at 28m, creating dramatic swim-throughs and a hull covered in soft corals. Excellent for photography. Afternoon reef diving.",
      },
      {
        day: 7,
        title: "Northern Reefs & Return",
        description:
          "Morning dive on pristine reefs—a change of pace after a week of wrecks. Options include Sha'ab El Erg (dolphins) or Umm Gamar. Afternoon sail back to Hurghada. Farewell dinner on deck.",
      },
      {
        day: 8,
        title: "Disembarkation",
        description:
          "Final breakfast on board. Disembark by 9am. Transfers to Hurghada airport or hotels. We observe minimum 18-hour surface interval before flights.",
      },
    ],
    crew: [
      {
        name: "Mohamed Ashraf",
        role: "Lead Dive Guide",
        bio: "PADI Course Director. 18 years guiding wreck dives in the Red Sea. Red Sea native with encyclopedic knowledge.",
      },
      {
        name: "Captain Mahmoud Saeed",
        role: "Vessel Captain",
        bio: "30 years navigating these waters. Expert in positioning for current and best dive conditions.",
      },
    ],
  },
]

/**
 * Find an expedition by its unique ID (URL slug).
 * @param id - The expedition ID to search for
 * @returns The expedition if found, undefined otherwise
 */
export function getExpeditionById(id: string): Expedition | undefined {
  return expeditions.find((exp) => exp.id === id)
}

/**
 * Filter expeditions by their type (e.g., "Tech Diving", "Liveaboard").
 * @param type - The expedition type to filter by
 * @returns Array of expeditions matching the type
 */
export function getExpeditionsByType(type: string): Expedition[] {
  return expeditions.filter((exp) => exp.type === type)
}

/**
 * Filter expeditions by location (partial match).
 * @param location - The location string to search for (e.g., "Egypt", "Turkey")
 * @returns Array of expeditions containing the location in their location field
 */
export function getExpeditionsByLocation(location: string): Expedition[] {
  return expeditions.filter((exp) => exp.location.includes(location))
}
