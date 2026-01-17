import { Anchor, Ship } from "lucide-react"
import type { Expedition } from "./types"

/**
 * All available expeditions offered by The Lazuli Collective.
 * Add new expeditions to this array to display them on the website.
 */
export const expeditions: Expedition[] = [
  // Ghosts of Gallipoli
  {
    id: "ghosts-of-gallipoli-july-2026",
    title: "The Ghosts of Gallipoli",
    location: "Çanakkale, Turkey",
    region: "Gallipoli",
    type: "Shipwrecks, Tec",
    icon: Anchor,
    dates: "15-22 July 2026 (TBC)",
    duration: "8 days",
    spots: 14,
    totalSpots: 16,
    image: "/images/expeditions/gallipoli-wrecks.jpg",
    heroImage: "/images/expeditions/gallipoli-wrecks-2.jpg",
    description:
      "Descend into history. Explore the legendary WWI wrecks of the Dardanelles with Turkey's only authorized dive operation—from HMS Majestic at 24m to battleships resting at 90m. A pilgrimage to one of the world's most exclusive underwater war memorials.",
    longDescription:
      "In 1915, the narrow strait of the Dardanelles became the stage for one of history's most fateful campaigns. Allied forces—British, French, and ANZAC troops—launched a bold offensive to capture Constantinople and knock the Ottoman Empire out of the war. What followed was eight months of brutal combat that would claim over half a million lives and sink a fleet of warships.\n\nFor Turkey, Gallipoli is sacred ground. It was here that a young Ottoman commander named Mustafa Kemal—who would later become Atatürk, the founder of modern Turkey—rose to prominence with his legendary order: \"I am not ordering you to attack. I am ordering you to die.\" The successful defense of these straits ignited the spirit that would eventually lead to Turkish independence. Today, the peninsula is a place of pilgrimage, remembrance, and profound respect.\n\nBeneath the waters, history lies frozen in time. Over 20 warships—battleships, destroyers, submarines, and supply vessels—rest on the sandy bottom at depths ranging from 9 to 90 meters. HMS Majestic, a 16,000-ton pre-dreadnought battleship, sits upright at 24m with her guns still pointed skyward. The French submarine Joule, HMS Triumph, and a dozen other vessels form an underwater war memorial unlike any other on Earth.\n\nAccess to these wrecks is extraordinarily restricted. Due to their historical significance and the heavy commercial shipping traffic through the strait, diving is tightly controlled by Turkish authorities. We've partnered with the only dive center in Turkey authorized to conduct technical diving operations on the Gallipoli wrecks—a relationship built over years of trust and a shared commitment to treating these sites with the reverence they deserve.\n\nThis expedition is designed for serious technical divers seeking to explore wrecks that few will ever witness. All essential equipment is provided—twin sets, stages, bailout, and CCR cylinders—with helium gases, oxygen fills, CCR sorbalime, and DPVs available for those who need them. Whether you're an experienced OC tech diver or a rebreather specialist, this expedition will push your skills and reward you with encounters that redefine what wreck diving can be.",
    highlights: [
      "22 shipwrecks",
      "9m to 90m depth range",
      "CCR & OC supported",
      "Full gas logistics",
    ],
    status: "Early Access",
    priceFrom: "€2,800",
    included: [
      "Return flights from your home country",
      "7 nights accommodation",
      "All technical diving (up to 2 dives per day on dive days)",
      "Twin set, stages, bailout, and CCR cylinders provided",
      "Nitrox base fills",
      "Daily breakfast at hotel & lunch at dive center",
      "Airport transfers",
      "Expert dive guides with 10+ years local experience",
    ],
    notIncluded: [
      "Gas upgrades (helium, oxygen), CCR sorbalime, DPV rentals, and equipment hire available",
      "We'll create a custom package tailored to your diving needs and preferences",
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
    notes: [
      "The Dardanelles has strong currents that can reach 4-5 knots—dive schedules are planned around optimal windows, and some days may require adjustment",
      "We can assist with the Turkey e-Visa application process if needed",
      "A detailed information packet with packing list and arrival instructions will be sent before your trip",
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
        name: "Murathan Yıldız",
        role: "Technical Dive Guide",
        bio: "SSI CCR Extended Range Trimix Instructor with over 25 years of diving experience. Murathan is an accomplished technical diver and underwater cinematographer who has extensively explored and documented Gallipoli's WWI shipwrecks. As a certified DaVinci Resolve instructor and Dolby Vision professional, he brings a unique perspective to underwater imaging. Murathan teaches underwater photography and filmmaking at Istanbul University and serves on the board of SUFOD (Underwater Photography and Filmmakers Association).",
      },
      {
        name: "Rıza Birkan",
        role: "Technical Dive Guide",
        bio: "Experienced technical diver, instructor, and underwater photographer specializing in technical and rebreather diving. Renowned for his work on WWI shipwrecks, Rıza has conducted dives to deep wrecks and unexplored underwater sites, leading to significant discoveries. Co-founder of Gallipoli Wreck Diving, his expertise in advanced diving technologies and passion for underwater history have earned him a respected place in the technical diving community.",
      },
    ],
  },
  // Abu Talha, Canyons & Caves
  {
    id: "abu-talha-september-2026",
    title: "Abu Talha: The Hidden Canyons",
    location: "Dahab, Egypt",
    region: "Abu Talha",
    type: "Exploration, Trimix, CCR",
    icon: Anchor,
    dates: "5-12 September 2026 (TBC)",
    duration: "8 days",
    spots: 20,
    totalSpots: 24,
    image: "/images/expeditions/dahab-canyon.jpg",
    heroImage: "/images/expeditions/dahab-canyon.jpg",
    description:
      "Into the unknown. North of Dahab lies Abu Talha—a labyrinth of deep canyons, unexplored caves, and vertical walls that only a handful of local divers have ever seen. This is a true expedition: 6 days of diving at 50m+, aboard the brand-new Celesta, guided by one of Dahab's most experienced technical explorers.",
    longDescription:
      "Everyone knows Dahab's Blue Hole and The Canyon. But the coastline north of Dahab hides something far more interesting—a region called Abu Talha, where dozens of canyons slice through the reef, cave systems twist into unexplored darkness, and vertical walls drop into the abyss. Very few divers know it exists. Even fewer have dived it.\n\nThis is not a typical Red Sea liveaboard. This is an expedition into genuinely uncharted territory. Many of these sites have never been formally mapped. Some have been dived only by local technical divers pushing the limits of what's accessible. We don't have a polished itinerary with named sites and established routes—we have GPS coordinates, local knowledge, and the flexibility to explore what we find.\n\nYour guide is Amr Mohamed, a TDI Trimix Instructor and KISS Rebreather Instructor who has spent years quietly exploring these canyons. He lives in Dahab. He knows these walls intimately. And he's the one who brought this golden spot to our attention. When Amr says a site is worth seeing, you dive it.\n\nThe vessel is the Celesta—a brand-new 2026 liveaboard designed by a Swedish interior designer and purpose-built for technical and CCR diving operations. Full helium and oxygen supplies, CCR support, booster station, dedicated filling station, and the kind of deck space that serious technical divers need. Breakfast, lunch, and dinner provided. The bar is stocked if you want it.\n\nWe depart from Hurghada and sail north to the Dahab coastline, spending six full days diving the Abu Talha region before returning. Depths range from 9m in the shallow reef sections to 90m in the deepest canyon penetrations. This expedition is designed for experienced technical divers—ideally advanced trimix and CCR certified—who are comfortable with exploration diving, overhead environments, and the inherent uncertainties of venturing where few have gone before.\n\nA note on expectations: this is real exploration. Conditions change. Not every dive will go as planned. Some days we'll discover something extraordinary; other days the sea will have other ideas. If you're looking for a predictable, polished diving holiday, this isn't it. If you want to be among the first to dive sites that most technical divers will never see, welcome aboard.",
    highlights: ["Unexplored canyons", "50m+ depths", "CCR & Trimix", "True expedition"],
    status: "Early Access",
    priceFrom: "€3,000",
    included: [
      "Return flights from your home country",
      "7 nights full-board on M/Y Celesta (new 2026 premium liveaboard)",
      "6 full days of diving, up to 3 dives per day",
      "Nitrox fills",
      "Soft drinks, tea, coffee & water",
      "Marine park fees",
      "Airport transfers Hurghada",
      "Twin sets, stages, and bailout cylinders",
      "CCR cylinders and support infrastructure",
      "Technical dive guide with extensive local exploration experience",
      "Dive planning support and gas management assistance",
    ],
    notIncluded: [
      "Gas upgrades (helium, oxygen for trimix), CCR consumables, and equipment hire available",
      "We'll create a custom package tailored to your diving needs and preferences",
    ],
    requirements: [
      "Technical diving certification: TDI ANDP / PADI Tec 45 or equivalent minimum",
      "Trimix certification strongly recommended for deeper dives (TDI Trimix / Tec 50+)",
      "CCR divers: appropriate CCR certification for planned depths",
      "Recent technical diving experience within 6 months",
      "Valid dive insurance with technical diving coverage to 90m",
      "Comfortable with overhead environments and exploration diving",
      "Self-sufficient in equipment management and dive planning",
      "Good physical fitness and medical clearance for deep diving",
    ],
    notes: [
      "This is an exploration expedition—many sites are unmapped and conditions are variable",
      "Dive sites, depths, and daily itinerary will be adapted based on weather, sea state, and discoveries",
      "Divers must be prepared for the inherent risks of exploration diving in remote locations",
      "The nearest hyperbaric chamber is in Sharm el-Sheikh (approximately 1-2 hours by road from Dahab)",
      "We can provide guidance on obtaining your Egypt visa",
      "A comprehensive information packet will be provided before departure",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation in Hurghada",
        description:
          "Board the Celesta in Hurghada Marina. Welcome aboard, cabin assignments, safety briefing, and equipment setup. Meet your fellow explorers and the crew. Check dive on a nearby reef, then overnight sail north toward the Gulf of Aqaba and the Dahab coastline.",
      },
      {
        day: 2,
        title: "Arrival at Abu Talha",
        description:
          "Arrive in Abu Talha waters. First dives to assess conditions and get oriented with the region's unique topography. Reef reconnaissance in the 30-50m range. Evening briefing with Amr on the week's exploration targets based on what we've seen.",
      },
      {
        day: 3,
        title: "Canyon Exploration",
        description:
          "Push into the canyon systems that define Abu Talha. Dramatic fissures cutting through the reef, swim-throughs, and walls that drop beyond sight. Depths 40-70m depending on certification and conditions. This is what we came for.",
      },
      {
        day: 4,
        title: "The Caves & Caverns",
        description:
          "Focus on the overhead environments—cave entrances, cavern systems, and the passages that wind through the reef structure. Depths 50-80m for qualified divers. Slower pace with proper gas planning and decompression time.",
      },
      {
        day: 5,
        title: "Deep Exploration",
        description:
          "For those certified and equipped: exploration of the deepest canyon sections. Dives to 80-90m for advanced trimix and CCR divers. Single dive with extended deco. Others explore the mid-depth sites discovered earlier in the week.",
      },
      {
        day: 6,
        title: "Continued Exploration",
        description:
          "Return to the best sites from earlier in the week or push into new territory based on conditions. Amr leads based on what the sea is offering. Flexibility is the plan.",
      },
      {
        day: 7,
        title: "Final Dives & Return Sail",
        description:
          "Morning dives to close out the expedition. Last chance to revisit favorites or tick off sites we couldn't fit. Afternoon sail begins back toward Hurghada. Sunset on deck, stories shared.",
      },
      {
        day: 8,
        title: "Disembarkation",
        description:
          "Final breakfast on board. Disembark by 10am. Transfers to Hurghada airport or hotels. Surface interval requirements observed for all flight connections.",
      },
    ],
    crew: [
      {
        name: "Amr Mohamed",
        role: "Expedition Leader & Technical Dive Guide",
        bio: "TDI Trimix Instructor and KISS Rebreather Instructor based in Dahab. Amr has spent years quietly exploring the canyons and caves of Abu Talha—sites that most divers don't even know exist. A hardcore technical diver who lives for deep exploration, he's the one who introduced us to this region. When Amr leads, you're in the hands of someone who knows these waters like no one else.",
      },
      {
        name: "Sofie Henriksson",
        role: "Dive Guide & Vessel Operations",
        bio: "Swedish-born technical diver with over 15 years exploring everything from the dark, cold wrecks of the Baltic to Antarctic expeditions and Red Sea reefs. A PADI Trimix Instructor who's dived in over ten countries, Sofie brings both precision and an infectious sense of adventure to every expedition. On this trip, she handles dive guiding and vessel logistics—making sure everything runs smoothly above and below the surface.",
      },
    ],
  },
  {
    id: "northern-red-sea-deep-wrecks-august-2026",
    title: "Northern Red Sea Deep Wrecks",
    location: "Egypt, Red Sea",
    region: "Northern Red Sea",
    type: "Shipwrecks, Rec & Tec",
    icon: Anchor,
    dates: "8-15 August 2026 (TBC)",
    duration: "8 days",
    spots: 20,
    totalSpots: 24,
    image: "/images/expeditions/rosalie-moller.jpg",
    heroImage: "/images/expeditions/thistlegorm.jpg",
    description:
      "The wrecks they don't tell you about. Beyond the tourist-packed Thistlegorm lies a constellation of forgotten ships—the hauntingly intact Rosalie Moller at 50m, the rarely-dived Gulf Fleet 31 plunging to 100m+, and the legendary graveyard of Abu Nuhas. Penetration-focused diving for those who want to go inside, not just around.",
    longDescription:
      "October 1941. The Strait of Gubal. German Heinkel He 111 bombers sweep low over the Red Sea, hunting Allied supply ships sheltering at anchor. In the span of 48 hours, two cargo vessels are sent to the bottom—the SS Thistlegorm on October 6th, and the Rosalie Moller on October 8th. Both ships had survived the journey from Britain. Neither would complete it.\n\nToday, the Thistlegorm is one of the world's most famous dives. Hundreds of divers descend on her daily, swimming past the Bedford trucks, BSA motorcycles, and railway carriages frozen in her holds. She's spectacular—and she's crowded.\n\nBut her sister in misfortune, the Rosalie Moller, lies just 10 kilometers away in near-solitude. At 50m depth with strong currents and sometimes silty visibility, she demands technical skills that most visitors don't have. For those who do, the reward is extraordinary: a 108-meter cargo steamship sitting upright and intact, draped in soft corals, her bridge still accessible, her helm still in place. You can penetrate her superstructure, explore her holds, and spend an entire dive without seeing another soul.\n\nThis expedition goes further. We've added the Gulf Fleet 31—an offshore supply vessel that slid off a reef edge in 1985 and now rests at depths pushing 100m+. This is serious technical diving: hypoxic trimix or CCR territory, with the superstructure starting at 95m and the stern at 108m. It's rarely dived, and for good reason. But for advanced tech divers, it's an opportunity to explore a wreck that most will never see.\n\nWe'll also spend time at Abu Nuhas—the infamous 'Ships' Graveyard' where four major wrecks lie stacked on a single reef. The SS Carnatic, a Victorian-era steamer that sank in 1869 carrying £40,000 in gold (the captain swore she'd hold; she didn't). The Giannis D, perhaps the most photogenic wreck in the Red Sea with her dramatic tilted bow. The Chrisoula K—the 'Tile Wreck'—with Italian floor tiles still visible in her holds. And the Kimon M, the 'Lentil Wreck,' partially collapsed but offering some of the most atmospheric penetration opportunities in the region.\n\nAnd yes, we'll dive the Thistlegorm. Because regardless of the crowds, she remains one of the greatest wreck dives on Earth. We'll time our dives to avoid the day-boat rush—early mornings and late afternoons when you can have sections of the wreck to yourself.\n\nThis trip is built around penetration. We're not here to swim circles around the outside. We're here to go inside—engine rooms, bridges, cargo holds, crew quarters. Sofie and Amr will guide you through the safest routes, manage the logistics, and ensure every dive is planned with precision. Whether you're an advanced recreational diver working toward your first serious wreck penetrations or a technical diver pushing into the deep wrecks, this expedition delivers the access and the expertise to make it happen.\n\nThe vessel is the Celesta—a brand-new 2026 liveaboard purpose-built for technical diving operations. Full gas support, CCR infrastructure, and a crew that understands serious divers. Recreational divers are welcome and will have outstanding diving at accessible depths; technical divers will have the deep wrecks and extended penetrations they came for.",
    highlights: [
      "Rosalie Moller (50m)",
      "Gulf Fleet 31 (100m+)",
      "SS Thistlegorm",
      "Abu Nuhas wrecks",
    ],
    status: "Early Access",
    priceFrom: "€3,000",
    included: [
      "Return flights from your home country",
      "7 nights full-board on M/Y Celesta (new 2026 premium liveaboard)",
      "Up to 3 dives per day",
      "Nitrox fills",
      "Soft drinks, tea, coffee & water",
      "Marine park fees",
      "Airport transfers Hurghada",
      "Twin sets, stages, and bailout cylinders",
      "CCR cylinders and support infrastructure",
      "Expert wreck dive guides for both recreational and technical groups",
      "Dive planning support and gas management assistance",
    ],
    notIncluded: [
      "Gas upgrades (helium, oxygen for trimix), CCR consumables, and equipment hire available",
      "We'll create a custom package tailored to your diving needs and preferences",
    ],
    requirements: [
      "Recreational divers: Advanced Open Water or equivalent",
      "Wreck Specialty certification recommended for penetration diving",
      "Technical divers: TDI ANDP / PADI Tec 45 or equivalent for deeper wrecks",
      "Advanced Trimix / CCR certification required for Gulf Fleet 31 (100m+)",
      "Recent dive experience within 12 months",
      "Valid dive insurance (technical coverage for tec divers to planned depths)",
      "Comfortable with currents and overhead environments",
    ],
    notes: [
      "Recreational divers will have excellent diving at accessible depths (5-40m) while technical divers access the deep wrecks",
      "Gulf Fleet 31 is a deep technical dive (95-108m) available only to qualified advanced trimix/CCR divers",
      "Penetration diving requires proper training—Wreck Specialty minimum, with guided routes for safety",
      "Itinerary may be adjusted based on weather, sea conditions, and current strength at wreck sites",
      "We can provide guidance on obtaining your Egypt visa",
      "A comprehensive information packet will be provided before departure",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation in Hurghada",
        description:
          "Board the Celesta in Hurghada Marina. Welcome aboard, cabin assignments, safety briefing, and equipment setup. Check dive on a nearby reef to dial in trim and buoyancy. Evening briefing on the week's wreck diving plan.",
      },
      {
        day: 2,
        title: "Abu Nuhas: Giannis D & Carnatic",
        description:
          "Full day at the Ships' Graveyard. Morning dive on the Giannis D—the iconic Greek cargo ship with her dramatic bow section, engine room penetration, and clouds of glassfish. Afternoon on the SS Carnatic—the Victorian-era 'Wine Wreck' with her skeletal iron hull and £40,000 gold salvage story. Night dive optional for the adventurous.",
      },
      {
        day: 3,
        title: "Abu Nuhas: Chrisoula K & Kimon M",
        description:
          "Complete our Abu Nuhas exploration. The Chrisoula K ('Tile Wreck') with Italian cargo still visible and challenging engine room penetration. The Kimon M ('Lentil Wreck')—deepest of the four at 32m, partially collapsed, with dramatic propeller shots and atmospheric swim-throughs.",
      },
      {
        day: 4,
        title: "SS Thistlegorm",
        description:
          "The main event. We time our dives to avoid the day-boat crowds—early morning descent onto the most famous wreck in the Red Sea. Explore the cargo holds packed with WWII supplies: BSA motorcycles, Bedford trucks, aircraft parts, ammunition. Multiple dives to cover the bow, holds, and stern sections with her anti-aircraft guns.",
      },
      {
        day: 5,
        title: "Rosalie Moller",
        description:
          "The forgotten sister. Technical divers descend to 50m on this hauntingly beautiful 108-meter cargo ship—intact, upright, and utterly peaceful. Bridge penetration, helm access, soft coral gardens. Recreational divers enjoy nearby reef sites or a second Thistlegorm dive. This is why we came.",
      },
      {
        day: 6,
        title: "Gulf Fleet 31 & Alternatives",
        description:
          "For advanced trimix and CCR divers: the deep dive of the trip. Gulf Fleet 31 sits at 95-108m—serious gas planning, serious deco, serious reward. Non-participating divers explore Sha'ab Mahmoud reefs or return to favorite wrecks from earlier in the week. Evening celebration dinner.",
      },
      {
        day: 7,
        title: "Final Dives & Return Sail",
        description:
          "Morning dives based on conditions and group preference. Options include repeat wreck dives, Abu Nuhas revisits, or pristine reef diving at Sha'ab El Erg (dolphin encounters possible). Afternoon sail back toward Hurghada. Sunset on deck.",
      },
      {
        day: 8,
        title: "Disembarkation",
        description:
          "Final breakfast on board. Disembark by 10am. Transfers to Hurghada airport or hotels. Surface interval requirements observed for all flight connections.",
      },
    ],
    crew: [
      {
        name: "Amr Mohamed",
        role: "Technical Dive Guide & Wreck Specialist",
        bio: "TDI Trimix Instructor and KISS Rebreather Instructor with years of experience on the deep wrecks of the Red Sea. Amr knows every penetration route on Rosalie Moller and has logged countless dives on the region's technical sites. A true wreck enthusiast who treats every dive as an opportunity to discover something new.",
      },
      {
        name: "Sofie Henriksson",
        role: "Dive Guide & Vessel Operations",
        bio: "Swedish-born technical diver with over 15 years exploring everything from the dark, cold wrecks of the Baltic to Antarctic expeditions and Red Sea reefs. A PADI Trimix Instructor who's dived in over ten countries, Sofie brings both precision and an infectious sense of adventure to every expedition. On this trip, she handles dive guiding and vessel logistics—making sure everything runs smoothly above and below the surface.",
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
      "Return flights from your home country",
      "7 nights full-board on premium liveaboard",
      "Up to 4 dives per day",
      "Nitrox for all divers",
      "Soft drinks, tea, coffee & water",
      "All marine park fees",
      "Airport transfers",
      "Tanks & weights",
      "Experienced wreck diving guides",
      "Underwater torch rental",
      "Daily dive briefings with historical context",
    ],
    notIncluded: [
      "Equipment rentals and technical gas upgrades (Trimix) available on board",
      "We'll create a custom package tailored to your diving needs and preferences",
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
    notes: [
      "The itinerary may be adjusted based on weather and sea conditions",
      "We can provide guidance on obtaining your Egypt visa",
      "A detailed information packet with packing list and trip preparation will be sent before departure",
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
