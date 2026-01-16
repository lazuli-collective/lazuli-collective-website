import { Anchor, Mountain, Waves } from "lucide-react"

export const expeditions = [
  {
    id: "gallipoli-tech-wreck-2026",
    title: "Gallipoli Tech Wreck Expedition",
    location: "Turkey",
    region: "Dardanelles",
    type: "Tech Diving",
    icon: Anchor,
    dates: "15-22 September 2026",
    duration: "8 days",
    spots: 3,
    totalSpots: 12,
    image: "/shipwreck-underwater-diving-dramatic-blue-water-te.jpg",
    heroImage: "/gallipoli-underwater-shipwreck-tech-diving-dramati.jpg",
    description:
      "Explore the legendary wrecks of the Dardanelles with an elite crew of tech divers. This expedition covers some of the most historically significant dive sites in the Mediterranean.",
    longDescription:
      "The Gallipoli Peninsula holds some of the most historically significant and technically demanding wrecks in the world. From WWI battleships to merchant vessels, these sites tell stories of sacrifice and maritime history like nowhere else. This expedition is designed for experienced technical divers ready to push their limits in challenging conditions while paying respect to these underwater war graves.",
    highlights: ["HMS Majestic", "Lundy Wreck", "Night dives", "Expert guides"],
    status: "Limited Spots",
    priceFrom: "€2,800",
    included: [
      "7 nights accommodation in boutique hotel",
      "All tech diving with doubles/stages provided",
      "Nitrox & Trimix fills",
      "Daily breakfast & lunch",
      "Airport transfers from Istanbul/Çanakkale",
      "Expert dive guides with 15+ years local experience",
      "Dive insurance for the duration",
      "Historical briefings & site documentation",
    ],
    notIncluded: [
      "International flights",
      "Personal dive equipment (regs, computers, etc.)",
      "Dinners (group dinners optional)",
      "Travel insurance",
      "Alcoholic beverages",
      "Gratuities",
    ],
    requirements: [
      "Minimum 100 logged dives",
      "Technical diving certification (Tec 40 or equivalent)",
      "Recent dive experience within 6 months",
      "Valid dive insurance with tech coverage",
      "Good physical fitness",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        description:
          "Arrive in Çanakkale, transfer to hotel. Evening briefing with the crew, gear check, and historical overview of the Gallipoli campaign.",
      },
      {
        day: 2,
        title: "Check Dives & HMS Majestic",
        description:
          "Morning check dives to assess skills and trim. Afternoon dive on HMS Majestic (45m), a pre-dreadnought battleship sunk in 1915.",
      },
      {
        day: 3,
        title: "The Lundy & HMS Triumph",
        description:
          "Two-dive day exploring the Lundy wreck and HMS Triumph. Maximum depth 55m. Evening debrief and video review.",
      },
      {
        day: 4,
        title: "Deep Wrecks",
        description:
          "Advanced technical dives on deeper sites (60m+). Single dive day allowing for extended bottom time and proper deco.",
      },
      {
        day: 5,
        title: "Flex Day / Alternative Sites",
        description:
          "Weather-dependent exploration of additional sites or repeat dives on favorites. Optional surface interval trip to Gallipoli memorials.",
      },
      {
        day: 6,
        title: "Final Dives",
        description:
          "Last dives of the expedition. Choice of revisiting highlights or exploring new sites based on group preference.",
      },
      {
        day: 7,
        title: "Surface Day & Celebration",
        description:
          "Mandatory 24-hour surface interval before flying. Cultural exploration of Çanakkale, group dinner, and certificate presentation.",
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfers to Istanbul or Çanakkale airport. Safe travels and until the next expedition.",
      },
    ],
    crew: [
      {
        name: "Mustafa Kaya",
        role: "Lead Dive Guide",
        bio: "15+ years guiding tech dives in Gallipoli. Former Turkish Navy diver.",
      },
      {
        name: "Sarah Mitchell",
        role: "Expedition Coordinator",
        bio: "Lazuli Collective co-founder. TDI Instructor and wreck diving specialist.",
      },
    ],
  },
  {
    id: "brothers-islands-2026",
    title: "Brothers Islands Deep South",
    location: "Egypt, Red Sea",
    region: "Southern Red Sea",
    type: "Liveaboard",
    icon: Waves,
    dates: "3-10 November 2026",
    duration: "7 nights",
    spots: 8,
    totalSpots: 20,
    image: "/hammerhead-shark-underwater-red-sea-egypt-diving-b.jpg",
    heroImage: "/brothers-islands-red-sea-egypt-aerial-view-liveabo.jpg",
    description:
      "A week aboard our signature vessel, chasing sharks and exploring pristine reefs. The Brothers Islands offer some of the most thrilling diving in the Red Sea.",
    longDescription:
      "The Brothers Islands are legendary among divers for good reason. These remote outposts in the Egyptian Red Sea deliver consistent shark encounters, pristine coral walls, and historic wrecks. Our Deep South itinerary maximizes your time at the best sites, with a focus on Big Brother's famous plateau and the Aida wreck at Little Brother.",
    highlights: ["Big Brother", "Little Brother", "Shark encounters", "Premium liveaboard"],
    status: "Now Booking",
    priceFrom: "€1,950",
    included: [
      "7 nights full-board on premium liveaboard",
      "Up to 4 dives per day",
      "Nitrox included",
      "Soft drinks, tea & coffee",
      "Marine park fees",
      "Airport transfers Hurghada",
      "Dive guides",
      "Tanks & weights",
    ],
    notIncluded: [
      "International flights",
      "Personal dive equipment",
      "Alcoholic beverages",
      "Equipment rental (available on board)",
      "Travel insurance",
      "Gratuities",
      "Visa fees",
    ],
    requirements: [
      "Minimum 50 logged dives",
      "Advanced Open Water or equivalent",
      "Recent dive experience within 12 months",
      "Comfortable with currents and blue water diving",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation",
        description:
          "Board the vessel in Hurghada. Safety briefing and check dive at a local site before overnight sail to The Brothers.",
      },
      {
        day: 2,
        title: "Big Brother",
        description:
          "Full day at Big Brother. Dawn dive on the plateau for threshers, followed by wall dives and the Numidia wreck.",
      },
      {
        day: 3,
        title: "Big Brother & Little Brother",
        description: "Morning dives at Big Brother, afternoon transit to Little Brother. Night dive optional.",
      },
      {
        day: 4,
        title: "Little Brother",
        description: "Explore the Aida wreck and pristine coral walls. Grey reef sharks and schooling fish guaranteed.",
      },
      {
        day: 5,
        title: "Daedalus Reef",
        description: "Transit to Daedalus. Famous for hammerhead schools and oceanic whitetips.",
      },
      {
        day: 6,
        title: "Daedalus & Elphinstone",
        description: "Morning dives at Daedalus, afternoon sail to Elphinstone for sunset dive.",
      },
      {
        day: 7,
        title: "Elphinstone & Return",
        description: "Dawn dive at Elphinstone for oceanic whitetips. Final dives and sail back to Hurghada.",
      },
      {
        day: 8,
        title: "Disembarkation",
        description: "Breakfast on board, disembark by 9am. Transfers to airport or hotel.",
      },
    ],
    crew: [
      {
        name: "Ahmed Hassan",
        role: "Boat Captain",
        bio: "20 years navigating the Red Sea. Knows every reef and current.",
      },
      {
        name: "Mohamed Saleh",
        role: "Lead Dive Guide",
        bio: "PADI Course Director. Red Sea native with encyclopedic marine knowledge.",
      },
    ],
  },
  {
    id: "sinai-freediving-2027",
    title: "Sinai Desert & Dahab Freediving",
    location: "Egypt",
    region: "Sinai Peninsula",
    type: "Mixed Adventure",
    icon: Mountain,
    dates: "January 2027",
    duration: "10 days",
    spots: 12,
    totalSpots: 16,
    image: "/sinai-desert-mountains-sunrise-golden-light-egypt-.jpg",
    heroImage: "/dahab-blue-hole-freediving-red-sea-egypt-aerial-tu.jpg",
    description:
      "Mountains, desert canyons, and the Blue Hole. An unforgettable week of contrast combining freediving, hiking, and Bedouin hospitality.",
    longDescription:
      "This is not just a freediving trip—it's a complete Sinai immersion. From the depths of the Blue Hole to the summit of Mount Sinai, this expedition combines breath-hold diving with desert trekking and authentic Bedouin experiences. Perfect for freedivers seeking adventure beyond the water.",
    highlights: ["Blue Hole", "Mount Sinai sunrise", "Bedouin camps", "Canyon trekking"],
    status: "Early Access",
    priceFrom: "€1,600",
    included: [
      "9 nights accommodation (mix of hotel & Bedouin camps)",
      "All freediving sessions with certified instructors",
      "Mount Sinai trek with local guides",
      "Colored Canyon excursion",
      "Daily breakfast, most lunches & dinners",
      "All ground transportation",
      "Freediving equipment provided",
    ],
    notIncluded: [
      "International flights",
      "Personal freediving equipment (wetsuits, fins)",
      "Some meals in Dahab (flexibility to explore)",
      "Travel insurance",
      "Visa fees",
      "Personal expenses",
    ],
    requirements: [
      "Basic freediving experience or willingness to learn",
      "Good swimming ability",
      "Moderate fitness for hiking",
      "Open mind for adventure",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dahab",
        description: "Transfer from Sharm el-Sheikh airport. Welcome dinner with the crew.",
      },
      {
        day: 2,
        title: "Freediving Fundamentals",
        description: "Morning theory session. Afternoon pool/confined water practice. Evening at leisure in Dahab.",
      },
      {
        day: 3,
        title: "Blue Hole Introduction",
        description: "First open water session at the famous Blue Hole. Depth work and technique refinement.",
      },
      {
        day: 4,
        title: "Deep Blue",
        description: "Full day at Blue Hole. Push your personal limits with guided depth sessions.",
      },
      {
        day: 5,
        title: "Canyon & Lighthouse",
        description: "Explore other Dahab freediving sites. The Canyon's underwater arch is unforgettable.",
      },
      {
        day: 6,
        title: "Desert Transit",
        description:
          "Leave Dahab for the mountains. 4x4 journey through Colored Canyon. Night at Bedouin camp under the stars.",
      },
      {
        day: 7,
        title: "Mount Sinai",
        description:
          "Pre-dawn trek to summit for sunrise. Descend and explore St. Catherine's Monastery. Return to camp.",
      },
      {
        day: 8,
        title: "Return to Coast",
        description: "Scenic drive back to Dahab. Afternoon freediving session. Farewell dinner.",
      },
      {
        day: 9,
        title: "Final Dives",
        description: "Optional morning freediving. Free afternoon to relax or explore Dahab.",
      },
      {
        day: 10,
        title: "Departure",
        description: "Transfers to Sharm el-Sheikh airport. Until next time.",
      },
    ],
    crew: [
      {
        name: "Layla Ibrahim",
        role: "Freediving Instructor",
        bio: "AIDA Instructor. Egyptian national record holder.",
      },
      {
        name: "Salem Musa",
        role: "Bedouin Guide",
        bio: "Born in the Sinai mountains. Third-generation guide.",
      },
    ],
  },
  {
    id: "elphinstone-shark-quest-2026",
    title: "Elphinstone Shark Quest",
    location: "Egypt, Red Sea",
    region: "Southern Red Sea",
    type: "Liveaboard",
    icon: Waves,
    dates: "8-15 December 2026",
    duration: "7 nights",
    spots: 6,
    totalSpots: 18,
    image: "/oceanic-whitetip-shark-underwater-red-sea-egypt-di.jpg",
    heroImage: "/elphinstone-reef-underwater-red-sea-shark-diving-d.jpg",
    description:
      "Dedicated to the legendary oceanic whitetip encounters at Elphinstone Reef. Timing is everything—December offers peak shark season.",
    longDescription:
      "December is prime time for oceanic whitetip encounters at Elphinstone, and this expedition is designed to maximize your time with these magnificent creatures. We spend extended time at Elphinstone and combine it with the best shark sites in the southern Red Sea.",
    highlights: ["Elphinstone Reef", "Oceanic whitetips", "Daedalus Reef", "Professional photography"],
    status: "Now Booking",
    priceFrom: "€2,100",
    included: [
      "7 nights full-board on premium liveaboard",
      "Up to 4 dives per day",
      "Nitrox included",
      "Soft drinks, tea & coffee",
      "Marine park fees",
      "Airport transfers Marsa Alam",
      "Professional underwater photography workshop",
    ],
    notIncluded: [
      "International flights",
      "Personal dive equipment",
      "Alcoholic beverages",
      "Equipment rental",
      "Travel insurance",
      "Gratuities",
    ],
    requirements: [
      "Minimum 50 logged dives",
      "Advanced Open Water or equivalent",
      "Comfortable with sharks and blue water",
      "Camera gear recommended but not required",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation Marsa Alam",
        description: "Board vessel, safety briefing, check dive at nearby reef.",
      },
      {
        day: 2,
        title: "Elphinstone",
        description: "Full day at Elphinstone. Dawn dive for oceanic whitetips, multiple wall dives.",
      },
      {
        day: 3,
        title: "Elphinstone",
        description: "Another full day maximizing encounters. Photography workshop session.",
      },
      {
        day: 4,
        title: "Transit & Daedalus",
        description: "Morning at Elphinstone, afternoon sail to Daedalus Reef.",
      },
      {
        day: 5,
        title: "Daedalus",
        description: "Hammerheads, grey reefs, and thresher sharks. Full day diving.",
      },
      {
        day: 6,
        title: "Brothers Islands",
        description: "Sail to Brothers. Afternoon and night dives.",
      },
      {
        day: 7,
        title: "Brothers & Return",
        description: "Morning dives, sail back to Marsa Alam.",
      },
      {
        day: 8,
        title: "Disembarkation",
        description: "Breakfast and farewell. Transfers to airport.",
      },
    ],
    crew: [
      {
        name: "Pierre Dubois",
        role: "Photography Guide",
        bio: "Award-winning underwater photographer. National Geographic contributor.",
      },
    ],
  },
  {
    id: "cappadocia-coast-2027",
    title: "Cappadocia to Coast",
    location: "Turkey",
    region: "Central Anatolia & Aegean",
    type: "Land & Sea",
    icon: Mountain,
    dates: "April 2027",
    duration: "12 days",
    spots: 10,
    totalSpots: 14,
    image: "/cappadocia-hot-air-balloons-sunrise-turkey-adventu.jpg",
    heroImage: "/cappadocia-fairy-chimneys-sunrise-hot-air-balloons.jpg",
    description:
      "From the fairy chimneys of Cappadocia to the turquoise waters of the Aegean. This expedition combines Turkey's most iconic landscapes with hidden coastal gems.",
    longDescription:
      "Turkey is more than just great diving—it's a crossroads of civilizations with landscapes that take your breath away. This expedition combines the otherworldly beauty of Cappadocia with the rich underwater heritage of the Aegean coast, all connected by a private gulet cruise.",
    highlights: ["Hot air balloon", "Underground cities", "Aegean diving", "Gulet cruise"],
    status: "Coming Soon",
    priceFrom: "€3,200",
    included: [
      "11 nights accommodation (boutique hotels + gulet)",
      "Hot air balloon flight in Cappadocia",
      "All diving on the Aegean coast",
      "Private gulet charter for 4 nights",
      "All ground transportation",
      "Daily breakfast, most meals",
      "English-speaking guides throughout",
    ],
    notIncluded: [
      "International flights",
      "Personal dive equipment",
      "Some meals (for flexibility)",
      "Travel insurance",
      "Alcoholic beverages",
      "Gratuities",
    ],
    requirements: [
      "Open Water certification for diving portions",
      "Moderate fitness for walking tours",
      "Sense of adventure",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cappadocia",
        description: "Fly into Kayseri or Nevşehir. Transfer to cave hotel in Göreme.",
      },
      {
        day: 2,
        title: "Balloon Flight",
        description: "Pre-dawn hot air balloon flight over fairy chimneys. Afternoon explore Göreme Open Air Museum.",
      },
      {
        day: 3,
        title: "Underground Cities",
        description: "Explore Derinkuyu underground city and Ihlara Valley hiking.",
      },
      {
        day: 4,
        title: "Transit to Coast",
        description: "Scenic drive to the Aegean coast. Overnight in Fethiye.",
      },
      {
        day: 5,
        title: "Board Gulet",
        description: "Embark on private gulet. First dives at local reefs. Sail to secluded bay.",
      },
      {
        day: 6,
        title: "Ancient Wrecks",
        description: "Dive ancient amphora sites. Swim in turquoise coves. Traditional Turkish dinner on deck.",
      },
      {
        day: 7,
        title: "Island Hopping",
        description: "Explore Greek islands and hidden bays. Snorkeling and diving.",
      },
      {
        day: 8,
        title: "Kas & Kekova",
        description: "Dive the sunken city of Kekova. Explore the charming town of Kas.",
      },
      {
        day: 9,
        title: "Final Diving",
        description: "Morning dives, afternoon sail back to Fethiye.",
      },
      {
        day: 10,
        title: "Disembark & Ephesus",
        description: "Leave gulet, drive to Selçuk. Afternoon visit to Ephesus.",
      },
      {
        day: 11,
        title: "Ephesus & Istanbul",
        description: "Morning at Ephesus. Flight to Istanbul. Farewell dinner.",
      },
      {
        day: 12,
        title: "Departure",
        description: "Transfers to Istanbul airport. End of expedition.",
      },
    ],
    crew: [
      {
        name: "Elif Demir",
        role: "Cultural Guide",
        bio: "Archaeologist and historian. Expert in Anatolian civilizations.",
      },
      {
        name: "Captain Yusuf",
        role: "Gulet Captain",
        bio: "30 years sailing the Turkish coast. Master storyteller.",
      },
    ],
  },
]

export function getExpeditionById(id: string) {
  return expeditions.find((exp) => exp.id === id)
}

export function getExpeditionsByType(type: string) {
  return expeditions.filter((exp) => exp.type === type)
}

export function getExpeditionsByLocation(location: string) {
  return expeditions.filter((exp) => exp.location.includes(location))
}
