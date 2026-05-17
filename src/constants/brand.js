// ── BRAND COLOR TOKENS ──
export const C = {
  or:    "#F25C27",
  sky:   "#A1DBF1",
  navy:  "#021C41",
  lace:  "#FAF3E7",
  sun:   "#FECD2A",
  white: "#fff",
  dark:  "#010f1f",
};

// ── ASSET IMPORTS ──
import hero         from "../assets/hero.png";
import logo         from "../assets/TravelTix-logo.png";
import logoAlt      from "../assets/travelTix.png";

// Indonesia
import nusaPenida   from "../assets/Nusa Penida, Indonesia.png";
import gateBali     from "../assets/Gate of Heavens, Indonesia.png";
import lakeBeratan1 from "../assets/Lake Beratan in Bali, Indonesia.png";
import lakeBeratan2 from "../assets/Lake Beratan in Bali, Indonesia (2).png";
import lakeBeratan3 from "../assets/Lake Beratan in Bali, Indonesia (3).png";
import lakeBeratan4 from "../assets/Lake Beratan in Bali, Indonesia (4).png";
import ubud1        from "../assets/Ubud, Indonesia.png";
import ubud2        from "../assets/Ubud, Indonesia (2).png";

// Turkey
import cappadocia   from "../assets/Cappadocia, Turkiye.png";
import blueMosque1  from "../assets/Blue Mosque, Turkiye.png";
import blueMosque2  from "../assets/Blue Mosque, Turkiye (2).png";
import istanbul1    from "../assets/Istanbul, Turkiye.png";
import istanbul2    from "../assets/Istanbul, Turkiye (2).png";

// Thailand
import bangkok1     from "../assets/Bangkok, Thailand.png";
import bangkok2     from "../assets/Bangkok, Thailand (2).png";
import phuket       from "../assets/Phuket, Thailand.png";
import pattaya      from "../assets/Pattaya, Thailand.png";

// Japan
import mtFuji1      from "../assets/Mt. Fuji, Japan.png";
import mtFuji2      from "../assets/Mt. Fuji, Japan (2).png";
import tokyo        from "../assets/Tokyo, Japan.png";
import osaka        from "../assets/Osaka, Japan.png";
import osakacastle  from "../assets/Osaka Castle, Japan.png";

// Malaysia
import kl1          from "../assets/Kuala Lumpur, Malaysia.png";
import kl2          from "../assets/Kuala Lumpur, Malaysia (2).png";
import kl3          from "../assets/Kuala Lumpur, Malaysia (3).png";
import putrajaya    from "../assets/Putrajaya, Malaysia.png";

// Maldives
import maldives1    from "../assets/Sun Siam Ohluveli, Maldives.png";
import maldives2    from "../assets/Sun Siam Ohluveli, Maldives (2).png";
import adaaran      from "../assets/Adaaran Club Rahnaalhi, Maldives.png";

// Singapore
import singapore1   from "../assets/Sinagpore City.png";
import singapore2   from "../assets/Sinagpore City (2).png";

// Nepal
import nepal        from "../assets/Nepal.png";
import kathmandu1   from "../assets/Kathmandu, Nepal.png";
import kathmandu2   from "../assets/Kathmandu, Nepal (2).png";
import pokhara1     from "../assets/Pokhara, Nepal.png";
import pokhara2     from "../assets/Pokhara, Nepal (2).png";

// Bhutan
import paro1        from "../assets/Paro, Bhutan.png";
import paro2        from "../assets/Paro, Bhutan (2).png";
import tigerNest    from "../assets/Tiger nest, Bhutan.png";
import thimpu       from "../assets/Thimpu, Bhutan.png";

// Sri Lanka
import colombo1     from "../assets/Colombo, Sri Lanka.png";
import colombo2     from "../assets/Colombo, Sri Lanka (2).png";
import elephantSL   from "../assets/Elephant Orphanage, Sri Lanka.png";
import ella         from "../assets/Ella, Sri Lanka.png";
import galle        from "../assets/Galle, Sri Lanka.png";
import nuwaraEliya  from "../assets/Nuwara Eliya, Sri Lanka.png";

export const ASSETS = {
  hero, logo, logoAlt,
  indonesia: { nusaPenida, gateBali, lakeBeratan1, lakeBeratan2, lakeBeratan3, lakeBeratan4, ubud1, ubud2 },
  turkey:    { cappadocia, blueMosque1, blueMosque2, istanbul1, istanbul2 },
  thailand:  { bangkok1, bangkok2, phuket, pattaya },
  japan:     { mtFuji1, mtFuji2, tokyo, osaka, osakacastle },
  malaysia:  { kl1, kl2, kl3, putrajaya },
  maldives:  { maldives1, maldives2, adaaran },
  singapore: { singapore1, singapore2 },
  nepal:     { nepal, kathmandu1, kathmandu2, pokhara1, pokhara2 },
  bhutan:    { paro1, paro2, tigerNest, thimpu },
  sriLanka:  { colombo1, colombo2, elephantSL, ella, galle, nuwaraEliya },
};

// ── COUNTRY HOVER DATA ──
export const COUNTRY_DATA = [
  { name: "Indonesia", img: lakeBeratan1 },
  { name: "Thailand",  img: bangkok1     },
  { name: "Turkey",    img: cappadocia   },
  { name: "Japan",     img: mtFuji1      },
  { name: "Malaysia",  img: kl1          },
  { name: "Singapore", img: singapore1   },
  { name: "Maldives",  img: maldives1    },
  { name: "Nepal",     img: pokhara1     },
  { name: "Bhutan",    img: tigerNest    },
  { name: "Sri Lanka", img: ella         },
];

// ── DESTINATIONS DATA ──
export const DESTINATIONS = [
  // Indonesia
  { img: nusaPenida,   cat: "Indonesia", name: "Nusa Penida",            sub: "Bali, Indonesia",        price: "$899",  featured: true },
  { img: ubud1,        cat: "Indonesia", name: "Ubud",                   sub: "Bali, Indonesia",        price: "$749"  },
  { img: gateBali,     cat: "Indonesia", name: "Gate of Heavens",        sub: "Bali, Indonesia",        price: "$799"  },
  { img: lakeBeratan1, cat: "Indonesia", name: "Lake Beratan",           sub: "Bedugul, Bali",          price: "$699"  },
  // Turkey
  { img: cappadocia,   cat: "Turkey",    name: "Cappadocia",             sub: "Central Anatolia",       price: "$1,099" },
  { img: istanbul1,    cat: "Turkey",    name: "Istanbul",               sub: "Istanbul, Turkey",       price: "$899"  },
  { img: blueMosque1,  cat: "Turkey",    name: "Blue Mosque",            sub: "Istanbul, Turkey",       price: "$849"  },
  // Thailand
  { img: bangkok1,     cat: "Thailand",  name: "Bangkok",                sub: "Bangkok, Thailand",      price: "$599"  },
  { img: phuket,       cat: "Thailand",  name: "Phuket",                 sub: "Phuket, Thailand",       price: "$699"  },
  { img: pattaya,      cat: "Thailand",  name: "Pattaya",                sub: "Chonburi, Thailand",     price: "$549"  },
  // Japan
  { img: mtFuji1,      cat: "Japan",     name: "Mt. Fuji",               sub: "Shizuoka, Japan",        price: "$1,299" },
  { img: tokyo,        cat: "Japan",     name: "Tokyo",                  sub: "Tokyo, Japan",           price: "$1,199" },
  { img: osaka,        cat: "Japan",     name: "Osaka",                  sub: "Osaka, Japan",           price: "$1,099" },
  // Malaysia
  { img: kl1,          cat: "Malaysia",  name: "Kuala Lumpur",           sub: "Kuala Lumpur, Malaysia", price: "$649"  },
  { img: putrajaya,    cat: "Malaysia",  name: "Putrajaya",              sub: "Putrajaya, Malaysia",    price: "$599"  },
  // Maldives
  { img: maldives1,    cat: "Maldives",  name: "Sun Siyam Olhuveli",     sub: "North Malé Atoll",       price: "$1,899" },
  { img: adaaran,      cat: "Maldives",  name: "Adaaran Club Rannalhi",  sub: "South Malé Atoll",       price: "$1,699" },
  // Singapore
  { img: singapore1,   cat: "Singapore", name: "Singapore City",         sub: "Singapore",              price: "$999"  },
  // Nepal
  { img: pokhara1,     cat: "Nepal",     name: "Pokhara",                sub: "Gandaki, Nepal",         price: "$549"  },
  { img: kathmandu1,   cat: "Nepal",     name: "Kathmandu",              sub: "Bagmati, Nepal",         price: "$499"  },
  // Bhutan
  { img: tigerNest,    cat: "Bhutan",    name: "Tiger's Nest",           sub: "Paro, Bhutan",           price: "$1,199" },
  { img: thimpu,       cat: "Bhutan",    name: "Thimphu",                sub: "Thimphu, Bhutan",        price: "$999"  },
  // Sri Lanka
  { img: ella,         cat: "Sri Lanka", name: "Ella",                   sub: "Badulla, Sri Lanka",     price: "$599"  },
  { img: colombo1,     cat: "Sri Lanka", name: "Colombo",                sub: "Western Province",       price: "$549"  },
  { img: galle,        cat: "Sri Lanka", name: "Galle",                  sub: "Southern Province",      price: "$579"  },
];

// ── BLOG POSTS DATA ──
export const BLOG_POSTS = [
  { img: nusaPenida, tag: "Travel Tips",   date: "March 28, 2025", title: "10 Must-Visit Hidden Gems in Southeast Asia",       body: "From misty mountain villages to secret lagoons — places most tourists simply never find.",               featured: true },
  { img: tigerNest,  tag: "Culture",       date: "March 20, 2025", title: "Complete Temple Etiquette Guide Across Asia",       body: "Respect local customs and make the most of every sacred site visit."                                    },
  { img: pokhara1,   tag: "Budget Travel", date: "March 12, 2025", title: "How to Travel Asia Comfortably on $60 a Day",       body: "Budget doesn't mean boring — your complete guide to affordable Asian adventures."                      },
  { img: mtFuji1,    tag: "Destinations",  date: "March 5, 2025",  title: "Why Japan Should Be Your Next Travel Destination",  body: "From cherry blossoms to ramen, there's no place on Earth quite like Japan."                           },
  { img: ubud1,      tag: "Indonesia",     date: "Feb 22, 2025",   title: "Bali Beyond the Tourist Trail: Hidden Treasures",   body: "Skip the crowds and discover the real Bali — from rice terraces to secret waterfalls."                },
  { img: maldives1,  tag: "Luxury",        date: "Feb 15, 2025",   title: "Maldives on a Budget: Is It Really Possible?",     body: "Yes! We break down how to experience the magic of the Maldives without spending a fortune."            },
];

// ── SERVICES DATA ──
export const SERVICES = [
  { icon: "📋", t: "Visa Processing",     p: "Complete visa assistance for all destinations — documentation, submission, tracking, and follow-up handled with care.", items: ["Tourist Visa", "Business Visa", "Student Visa", "Multiple Entry Visa"] },
  { icon: "✈",  t: "Flight Booking",     p: "Best fares guaranteed across all major airlines. We handle seat selection, upgrades, and itinerary changes.",           items: ["Economy & Business Class", "Connecting Flights", "Group Bookings", "Open-jaw Tickets"] },
  { icon: "🏨", t: "Hotel Reservations", p: "Carefully vetted accommodations at every price point — from boutique local stays to five-star luxury resorts.",         items: ["Budget Stays", "Boutique Hotels", "Luxury Resorts", "Serviced Apartments"] },
  { icon: "🗺",  t: "Custom Itineraries", p: "No cookie-cutter tours. Every trip is tailored around your pace, passions, and budget by dedicated travel advisors.",  items: ["Solo Travel", "Honeymoon Packages", "Family Trips", "Adventure Tours"] },
  { icon: "👥", t: "Group Tours",        p: "Tailored packages for families, friends, and corporate teams — logistics handled from start to finish.",                items: ["Family Tours", "Corporate Retreats", "School Trips", "Pilgrimage Tours"] },
  { icon: "🛡",  t: "Travel Insurance",   p: "Comprehensive travel insurance covering medical emergencies, trip cancellations, and lost baggage.",                    items: ["Medical Coverage", "Trip Cancellation", "Lost Baggage", "Emergency Evacuation"] },
];

// ── JOB LISTINGS ──
export const JOBS = [
  { title: "Senior Travel Consultant",       dept: "Operations",    type: "Full-time",          loc: "Dhanmondi, Dhaka", exp: "3–5 years", desc: "Lead client consultations, craft bespoke itineraries, and manage relationships for premium travel packages across Asia." },
  { title: "Visa Processing Specialist",     dept: "Visa & Docs",   type: "Full-time",          loc: "Dhanmondi, Dhaka", exp: "2–4 years", desc: "Handle visa applications across multiple countries, maintain documentation accuracy, and liaise with embassies." },
  { title: "Digital Marketing Executive",    dept: "Marketing",     type: "Full-time",          loc: "Dhanmondi, Dhaka", exp: "2–3 years", desc: "Drive Traveltix's social media presence, manage campaigns, and create engaging content for our travel-loving audience." },
  { title: "Customer Support Executive",     dept: "Support",       type: "Full-time",          loc: "Dhanmondi, Dhaka", exp: "1–2 years", desc: "Provide exceptional 24/7 support to travelers before, during, and after their trips with empathy and expertise." },
  { title: "Travel Content Writer",          dept: "Marketing",     type: "Part-time / Remote", loc: "Remote",           exp: "1–2 years", desc: "Create compelling travel guides, blog posts, and destination content that inspires our audience to explore Asia." },
  { title: "Business Development Executive", dept: "Sales",         type: "Full-time",          loc: "Dhanmondi, Dhaka", exp: "2–4 years", desc: "Build corporate client relationships, develop B2B travel packages, and expand Traveltix's market footprint." },
];

// ── CONTACT INFO ──
export const CONTACT = {
  address: "Rupayan Prime, House 2, Road 7, Dhanmondi, Dhaka - 1205",
  phone:   "+880 1886 005274",
  emails: {
    info:  "info.traveltix@gmail.com",
    admin: "admin@traveltixbd.com",
    hr:    "hr@traveltixbd.com",
  },
};