import { useState, useEffect, useRef } from "react";

/* ── BRAND TOKENS ── */
const C = {
  or: "#F25C27", sky: "#A1DBF1", navy: "#021C41",
  lace: "#FAF3E7", sun: "#FECD2A", white: "#fff", dark: "#010f1f"
};

/* ── GOOGLE FONTS ── */
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700&family=Epilogue:wght@300;400;500;600&display=swap');
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Epilogue',sans-serif;overflow-x:hidden}
    h1,h2,h3,h4,h5,strong{font-family:'Anybody',sans-serif}
    a{text-decoration:none;color:inherit;cursor:pointer}
    img{display:block;width:100%;height:100%;object-fit:cover}
    input,textarea,select{font-family:'Epilogue',sans-serif}
    @keyframes planefloat{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(-14px) rotate(-2deg)}}
    @keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @keyframes fadein{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
    @keyframes slideup{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    .fadein{animation:fadein .6s ease forwards}
    .pill-hover:hover{background:#021C41!important;border-color:#021C41!important;color:#fff!important}
    ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#010f1f}::-webkit-scrollbar-thumb{background:#F25C27;border-radius:3px}
  `}</style>
);

/* ── SHARED COMPONENTS ── */
const Eyebrow = ({ txt, light = false, center = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, justifyContent: center ? "center" : "flex-start" }}>
    <div style={{ width: 26, height: 3, background: C.or, borderRadius: 2, flexShrink: 0 }} />
    <span style={{ fontFamily: "'Anybody',sans-serif", fontSize: 10, fontWeight: 800, color: light ? C.sky : C.or, letterSpacing: "2.5px", textTransform: "uppercase" }}>{txt}</span>
    {center && <div style={{ width: 26, height: 3, background: C.or, borderRadius: 2, flexShrink: 0 }} />}
  </div>
);

const Sec2 = ({ children, bg = C.white, style = {} }) => (
  <section style={{ padding: "88px 60px", background: bg, ...style }}>{children}</section>
);

const BtnOr = ({ children, href = "#", style = {} }) => (
  <a href={href} style={{ background: C.or, color: "#fff", fontFamily: "'Anybody',sans-serif", fontSize: 12, fontWeight: 800, padding: "13px 28px", borderRadius: 6, letterSpacing: ".5px", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, transition: "all .25s", cursor: "pointer", ...style }}
    onMouseEnter={e => { e.currentTarget.style.background = "#d44e1e"; e.currentTarget.style.transform = "translateY(-2px)"; }}
    onMouseLeave={e => { e.currentTarget.style.background = C.or; e.currentTarget.style.transform = "translateY(0)"; }}>
    {children}
  </a>
);

const BtnOutline = ({ children, href = "#", dark = false, style = {} }) => (
  <a href={href} style={{ border: `1.5px solid ${dark ? C.navy : "rgba(255,255,255,.38)"}`, color: dark ? C.navy : "#fff", fontFamily: "'Anybody',sans-serif", fontSize: 12, fontWeight: 700, padding: "12px 24px", borderRadius: 6, letterSpacing: ".5px", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, transition: "all .25s", cursor: "pointer", ...style }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = dark ? C.or : C.sky; e.currentTarget.style.color = dark ? C.or : C.sky; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = dark ? C.navy : "rgba(255,255,255,.38)"; e.currentTarget.style.color = dark ? C.navy : "#fff"; }}>
    {children}
  </a>
);

const WavyPattern = ({ color = C.or, height = 200, bg = C.navy }) => (
  <div style={{ background: bg, height, position: "relative", overflow: "hidden" }}>
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox={`0 0 1440 ${height}`} preserveAspectRatio="xMidYMid slice">
      <path d={`M-80 ${height * .25} Q180 ${height * .05} 360 ${height * .35} Q540 ${height * .65} 720 ${height * .25} Q900 ${-height * .05} 1080 ${height * .3} Q1260 ${height * .65} 1440 ${height * .3} Q1480 ${height * .25} 1540 ${height * .3}`} stroke={color} strokeWidth="32" fill="none" strokeLinecap="round" />
      <path d={`M-80 ${height * .65} Q180 ${height * .45} 360 ${height * .75} Q540 ${height} 720 ${height * .65} Q900 ${height * .3} 1080 ${height * .7} Q1260 ${height} 1440 ${height * .7} Q1480 ${height * .65} 1540 ${height * .7}`} stroke={color} strokeWidth="32" fill="none" strokeLinecap="round" />
    </svg>
  </div>
);

const LogoMark = ({ size = 34 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div style={{ width: size, height: size, background: C.or, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width={size * .58} height={size * .58} viewBox="0 0 24 24" fill="#fff">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    </div>
    <span style={{ fontFamily: "'Anybody',sans-serif", fontSize: size * .65, fontWeight: 900, color: "#fff" }}>Travel<em style={{ color: C.or, fontStyle: "normal" }}>tix</em></span>
  </div>
);

/* ── NAV ── */
const Nav = ({ page, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Home", "Destinations", "Services", "About", "Career"];
  return (
    <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 999, padding: "0 60px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all .4s", background: scrolled ? "rgba(2,28,65,.96)" : "transparent", boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,.28)" : "none" }}>
      <div onClick={() => setPage("Home")} style={{ cursor: "pointer" }}><LogoMark /></div>
      <ul style={{ display: "flex", gap: 28, listStyle: "none" }}>
        {links.map(l => (
          <li key={l}>
            <span onClick={() => setPage(l)} style={{ fontFamily: "'Anybody',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: ".8px", textTransform: "uppercase", cursor: "pointer", color: page === l ? "#fff" : "rgba(255,255,255,.68)", borderBottom: page === l ? `2px solid ${C.or}` : "2px solid transparent", paddingBottom: 3, transition: "all .2s" }}>
              {l}
            </span>
          </li>
        ))}
      </ul>
      <div />
    </nav>
  );
};

/* ── MARQUEE ── */
const Marquee = () => {
  const items = ["Visa Processing", "Flight Booking", "Hotel Reservation", "Tour Packages", "Travel Insurance", "Airport Transfers", "Group Travel", "Corporate Trips"];
  const doubled = [...items, ...items];
  return (
    <div style={{ background: C.or, padding: "13px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
      <div style={{ display: "inline-flex", animation: "mq 22s linear infinite" }}>
        {doubled.map((t, i) => (
          <span key={i} style={{ fontFamily: "'Anybody',sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.92)", padding: "0 26px", display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span>✈</span>{t}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── COUNTRY HOVER ── */
const countryData = [
  { name: "Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80&auto=format&fit=crop" },
  { name: "Thailand", img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600&q=80&auto=format&fit=crop" },
  { name: "Turkey", img: "https://images.unsplash.com/photo-1570447026890-40e38cfa55fd?w=1600&q=80&auto=format&fit=crop" },
  { name: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80&auto=format&fit=crop" },
  { name: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&q=80&auto=format&fit=crop" },
  { name: "Malaysia", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600&q=80&auto=format&fit=crop" },
  { name: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80&auto=format&fit=crop" },
];

const CountryHover = () => {
  const [active, setActive] = useState(0);
  return (
    <div style={{ position: "relative", height: "88vh", minHeight: 560, overflow: "hidden" }}>
      {countryData.map((c, i) => (
        <div key={i} style={{ position: "absolute", inset: 0, backgroundImage: `url('${c.img}')`, backgroundSize: "cover", backgroundPosition: "center", opacity: i === active ? 1 : 0, transition: "opacity .65s ease" }} />
      ))}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(2,28,65,.4),rgba(2,28,65,.18) 50%,rgba(2,28,65,.62) 100%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 2, display: "flex", height: "100%" }}>
        {countryData.map((c, i) => (
          <div key={i} onMouseEnter={() => setActive(i)}
            style={{ flex: i === active ? 2.5 : 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: 30, cursor: "pointer", borderRight: i < countryData.length - 1 ? "1px solid rgba(255,255,255,.18)" : "none", transition: "flex .55s cubic-bezier(.4,0,.2,1)", position: "relative", background: i === active ? "rgba(242,92,39,.06)" : "transparent" }}>
            <span style={{ fontFamily: "'Anybody',sans-serif", color: i === active ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.5)", fontSize: 9, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", marginBottom: 10, transition: "color .3s" }}>Visit</span>
            <span style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontWeight: 900, opacity: i === active ? 1 : .6, transition: "all .4s", ...(i === active ? { fontSize: 52, writingMode: "horizontal-tb", transform: "none", margin: "auto 0", padding: "0 20px", lineHeight: 1, textShadow: "0 4px 24px rgba(0,0,0,.4)" } : { fontSize: 17, writingMode: "vertical-rl", transform: "rotate(180deg)" }) }}>
              {c.name}
            </span>
            {i === active && (
              <a href="#" style={{ display: "inline-block", marginTop: 18, background: C.or, color: "#fff", fontFamily: "'Anybody',sans-serif", fontSize: 11, fontWeight: 800, padding: "10px 22px", borderRadius: 5, letterSpacing: ".8px", textTransform: "uppercase" }}>Explore →</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── BRAND TONE ── */
const BrandTone = () => {
  const pills = ["Clear", "Warm", "Transparent", "Human", "Honest", "Approachable"];
  const filled = ["Human", "Honest"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 420 }}>
      <div style={{ background: C.sky, padding: "60px 54px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 36, fontWeight: 900, color: C.navy, marginBottom: 20 }}>Brand Tone</h2>
        <div style={{ width: 28, height: 3, background: C.or, borderRadius: 2, marginBottom: 18 }} />
        <p style={{ fontSize: 13, color: C.navy, lineHeight: 1.9, maxWidth: 320 }}>Traveltix is a trusted travel companion who takes care of every detail with care and expertise, making clients feel confident and excited about their trips.</p>
      </div>
      <div style={{ background: C.lace, padding: "60px 54px" }}>
        <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 36, fontWeight: 700, color: C.or, marginBottom: 36 }}>Personality</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          {pills.map((p, i) => (
            <span key={i} className="pill-hover" style={{ border: `2px solid ${C.or}`, color: filled.includes(p) ? "#fff" : C.navy, background: filled.includes(p) ? C.navy : "transparent", borderColor: filled.includes(p) ? C.navy : C.or, fontFamily: "'Anybody',sans-serif", fontSize: 13, fontWeight: 800, padding: "9px 22px", borderRadius: 30, transition: "all .25s", cursor: "default" }}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── FOOTER ── */
const Footer = ({ setPage }) => (
  <footer style={{ background: C.dark, padding: "64px 60px 26px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr", gap: 46, marginBottom: 46 }}>
      <div>
        <div onClick={() => setPage("Home")} style={{ cursor: "pointer", marginBottom: 14 }}><LogoMark /></div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,.38)", lineHeight: 1.9, maxWidth: 268 }}>Your trusted travel partner from visa to destination — making journeys smooth, well-planned and memorable since 2012.</p>
        <div style={{ display: "flex", gap: 9, marginTop: 20 }}>
          {["fb", "tw", "ig", "yt"].map(s => (
            <div key={s} style={{ width: 34, height: 34, borderRadius: 6, border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 11, color: "rgba(255,255,255,.4)", fontFamily: "'Anybody',sans-serif", fontWeight: 800 }}
              onMouseEnter={e => { e.currentTarget.style.background = C.or; e.currentTarget.style.borderColor = C.or; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "rgba(255,255,255,.4)"; }}>
              {s === "fb" ? "f" : s === "tw" ? "𝕏" : s === "ig" ? "◎" : "▶"}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 13, fontWeight: 800, marginBottom: 18, textTransform: "uppercase" }}>Pages</h5>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {["Home", "Destinations", "Services", "About", "Career"].map(l => (
            <li key={l}><span onClick={() => setPage(l)} style={{ fontSize: 13, color: "rgba(255,255,255,.38)", cursor: "pointer", transition: "color .2s" }}
              onMouseEnter={e => e.currentTarget.style.color = C.or}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.38)"}>{l}</span></li>
          ))}
        </ul>
      </div>
      <div>
        <h5 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 13, fontWeight: 800, marginBottom: 18, textTransform: "uppercase" }}>Contact Us</h5>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { icon: "📍", text: "Rupayan Prime, House 2, Road 7, Dhanmondi, Dhaka - 1205" },
            { icon: "📞", text: "+880 1886 005274", href: "tel:+8801886005274" },
            { icon: "✉", text: "info.traveltix@gmail.com", href: "mailto:info.traveltix@gmail.com" },
            { icon: "✉", text: "admin@traveltixbd.com", href: "mailto:admin@traveltixbd.com" },
            { icon: "✉", text: "hr@traveltixbd.com", href: "mailto:hr@traveltixbd.com" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              {item.href ? (
                <a href={item.href} style={{ fontSize: 12, color: "rgba(255,255,255,.38)", lineHeight: 1.6, transition: "color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = C.or}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.38)"}>{item.text}</a>
              ) : (
                <span style={{ fontSize: 12, color: "rgba(255,255,255,.38)", lineHeight: 1.6 }}>{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,.25)" }}>© 2025 Traveltix. All rights reserved.</p>
      <div style={{ display: "flex", gap: 20 }}>
        {["Privacy", "Terms", "Cookies"].map(l => (
          <a key={l} href="#" style={{ fontSize: 11, color: "rgba(255,255,255,.25)", transition: "color .2s" }}
            onMouseEnter={e => e.currentTarget.style.color = C.or}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.25)"}>{l}</a>
        ))}
      </div>
    </div>
  </footer>
);

/* ═══════════════════════════════════════════════
   PAGE: HOME
═══════════════════════════════════════════════ */
const HomePage = ({ setPage }) => {
  const destCards = [
    { img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80&auto=format&fit=crop", cat: "Indonesia", name: "Kelingking Beach", sub: "Nusa Penida, Bali", tall: true },
    { img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=900&q=80&auto=format&fit=crop", cat: "Thailand", name: "Grand Palace", sub: "Bangkok, Thailand" },
    { img: "https://images.unsplash.com/photo-1570447026890-40e38cfa55fd?w=900&q=80&auto=format&fit=crop", cat: "Turkey", name: "Cappadocia", sub: "Central Anatolia" },
    { img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1400&q=80&auto=format&fit=crop", cat: "Indonesia", name: "Padar Island", sub: "East Nusa Tenggara", wide: true },
  ];
  const features = [
    { n: "01", icon: "🛡", t: "Visa Processing", p: "End-to-end visa assistance — documentation, submission and tracking handled for you." },
    { n: "02", icon: "✈", t: "Flight Booking", p: "Best fares across all airlines. We handle upgrades and itinerary changes seamlessly." },
    { n: "03", icon: "🏨", t: "Hotel Reservations", p: "Vetted accommodations at every price point — boutique stays to five-star resorts." },
    { n: "04", icon: "👥", t: "Group Tours", p: "Tailored packages for families, friends, and corporate teams — fully managed." },
    { n: "05", icon: "🗺", t: "Custom Itineraries", p: "No cookie-cutter tours. Every trip built around your pace, passions, and budget." },
    { n: "06", icon: "🕐", t: "24/7 Support", p: "Round-the-clock assistance before, during, and after your journey." },
  ];
  return (
    <div>
      {/* HERO */}
      <section style={{ height: "100vh", minHeight: 640, position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1600&q=80&auto=format&fit=crop" alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg,rgba(2,28,65,.93) 0%,rgba(2,28,65,.72) 55%,rgba(2,28,65,.22) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: `linear-gradient(to top,${C.lace},transparent)` }} />
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .06, pointerEvents: "none" }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <path d="M-100 200 Q200 80 400 250 Q600 420 800 200 Q1000 -20 1200 200 Q1400 420 1600 200" stroke={C.or} strokeWidth="28" fill="none" strokeLinecap="round" />
            <path d="M-100 500 Q200 360 400 520 Q600 680 800 480 Q1000 280 1200 480 Q1400 680 1600 480" stroke={C.or} strokeWidth="28" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 3, padding: "0 60px", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 48, alignItems: "center", width: "100%" }}>
          <div style={{ animation: "slideup .8s ease forwards" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(242,92,39,.18)", border: "1px solid rgba(242,92,39,.45)", color: C.or, fontFamily: "'Anybody',sans-serif", fontSize: 10, fontWeight: 800, padding: "6px 14px", borderRadius: 4, marginBottom: 22, letterSpacing: 2, textTransform: "uppercase" }}>
              ✈ Your Co-Pilot to Every Trip
            </div>
            <h1 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 66, fontWeight: 900, lineHeight: .98, marginBottom: 12, letterSpacing: -1 }}>
              We Handle<br />
              <span style={{ color: C.or }}>Hassles.</span><br />
              <span style={{ color: C.sky }}>Troubleless</span><br />
              Travel.
            </h1>
            <p style={{ color: "rgba(255,255,255,.62)", fontSize: 15, lineHeight: 1.85, marginBottom: 34, maxWidth: 450, fontWeight: 300 }}>
              Traveltix turns your journey into a stress-free, tailored experience — clear guidance and dependable expertise from visa to departure and beyond.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <BtnOr>Get Started →</BtnOr>
              <BtnOutline onClick={() => setPage("Services")}>Our Services</BtnOutline>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
            <svg style={{ width: 180, height: "auto", filter: `drop-shadow(0 8px 32px rgba(242,92,39,.5))`, animation: "planefloat 4s ease-in-out infinite" }} viewBox="0 0 240 200">
              <path d="M220 90 L160 80 L130 20 L110 20 L120 80 L60 72 L45 52 L30 52 L38 82 L20 85 L20 95 L38 98 L30 128 L45 128 L60 108 L120 100 L110 160 L130 160 L160 100 L220 90 Z" fill={C.or} />
              <path d="M220 90 L160 80 L130 20 L110 20 L120 80 L60 72 L45 52 L30 52 L38 82 L20 85 L20 95 L38 98 L30 128 L45 128 L60 108 L120 100 L110 160 L130 160 L160 100 L220 90 Z" fill="none" stroke="#fff" strokeWidth="3" opacity=".25" />
            </svg>
            {[["12K+", "Happy Travelers"], ["48+", "Destinations"], ["4.9★", "Client Satisfaction"]].map(([n, l]) => (
              <div key={l} style={{ background: "rgba(255,255,255,.08)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 10, padding: "14px 20px", display: "flex", alignItems: "center", gap: 16, minWidth: 200 }}>
                <div style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 28, fontWeight: 900, lineHeight: 1 }}><span style={{ color: C.or }}>{n}</span></div>
                <div style={{ color: "rgba(255,255,255,.52)", fontSize: 12 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* WHY CHOOSE */}
      <Sec2 bg={C.lace}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, gap: 32 }}>
          <div><Eyebrow txt="Why Choose Us" /><h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 44, fontWeight: 900, color: C.navy }}>Why Choose <em style={{ color: C.or, fontStyle: "normal" }}>Traveltix</em></h2></div>
          <p style={{ color: "#5a6a7a", fontSize: 14, maxWidth: 380, lineHeight: 1.85 }}>High-class service from visa processing to arrival — making your journey smooth, well-planned and memorable.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {[
            { t: "High End Care from Start to Finish", p: "Expertise in everything from challenging visa applications to documentations, ticket bookings and travel counseling — a hassle-free, all-in-one travel solution." },
            { t: "Personalized Counseling", p: "Professionalism and care at every step, from timely communication to seamless booking management. We tailor each trip for maximum comfort." },
            { t: "Trust and Transparency", p: "Clear, honest advice and upfront pricing. No surprises and no hidden fees. We save your time and effort so you look forward to your trip." },
          ].map((c, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "34px 26px", border: "1px solid rgba(2,28,65,.07)", transition: "all .3s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 18px 48px rgba(2,28,65,.1)"; e.currentTarget.querySelector(".topbar").style.transform = "scaleX(1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.querySelector(".topbar").style.transform = "scaleX(0)"; }}>
              <div className="topbar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: C.or, transform: "scaleX(0)", transformOrigin: "left", transition: "transform .35s" }} />
              <div style={{ width: 28, height: 3, background: C.or, borderRadius: 2, marginBottom: 14 }} />
              <h4 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 18, fontWeight: 900, color: C.navy, marginBottom: 10, lineHeight: 1.2 }}>{c.t}</h4>
              <p style={{ fontSize: 13, color: "#5a6a7a", lineHeight: 1.85 }}>{c.p}</p>
            </div>
          ))}
        </div>
      </Sec2>

      <WavyPattern />

      <CountryHover />

      {/* DESTINATIONS */}
      <Sec2>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 46 }}>
          <div><Eyebrow txt="Top Picks" /><h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 44, fontWeight: 900, color: C.navy }}>Popular <em style={{ color: C.or, fontStyle: "normal" }}>Destinations</em></h2></div>
          <span onClick={() => setPage("Destinations")} style={{ fontFamily: "'Anybody',sans-serif", fontSize: 12, fontWeight: 800, color: C.or, borderBottom: `1.5px solid ${C.or}`, paddingBottom: 2, cursor: "pointer", textTransform: "uppercase", letterSpacing: ".5px" }}>View All →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.45fr 1fr 1fr", gridTemplateRows: "280px 260px", gap: 14 }}>
          {destCards.map((d, i) => (
            <div key={i} style={{ borderRadius: 18, overflow: "hidden", position: "relative", cursor: "pointer", gridRow: d.tall ? "1/3" : "auto", gridColumn: d.wide ? "2/4" : "auto" }}
              onMouseEnter={e => { e.currentTarget.querySelector("img").style.transform = "scale(1.07)"; e.currentTarget.querySelector(".arr").style.background = C.or; }}
              onMouseLeave={e => { e.currentTarget.querySelector("img").style.transform = "scale(1)"; e.currentTarget.querySelector(".arr").style.background = "rgba(255,255,255,.14)"; }}>
              <img src={d.img} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .55s" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(2,28,65,.78) 0%,transparent 55%)" }} />
              <div className="arr" style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, background: "rgba(255,255,255,.14)", backdropFilter: "blur(6px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,.25)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .25s", zIndex: 2 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 22, zIndex: 2 }}>
                <div style={{ display: "inline-block", background: C.or, color: "#fff", fontFamily: "'Anybody',sans-serif", fontSize: 9, fontWeight: 800, padding: "3px 10px", borderRadius: 3, marginBottom: 6, letterSpacing: "1.5px", textTransform: "uppercase" }}>{d.cat}</div>
                <h3 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 20, fontWeight: 900, lineHeight: 1.2, marginBottom: 2 }}>{d.name}</h3>
                <span style={{ color: "rgba(255,255,255,.65)", fontSize: 12 }}>{d.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </Sec2>

      {/* FEATURES */}
      <Sec2 bg={C.navy}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div><Eyebrow txt="Our Services" light /><h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 44, fontWeight: 900, color: "#fff" }}>Travel With <em style={{ color: C.or, fontStyle: "normal" }}>Confidence</em></h2></div>
          <p style={{ color: "rgba(255,255,255,.45)", fontSize: 13, maxWidth: 320, lineHeight: 1.8 }}>Everything handled — from visa to landing — by Asia travel experts.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 50 }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: "30px 24px", transition: "all .3s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.09)"; e.currentTarget.style.borderColor = "rgba(242,92,39,.35)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.08)"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ fontFamily: "'Anybody',sans-serif", fontSize: 68, fontWeight: 900, color: "rgba(255,255,255,.04)", position: "absolute", top: 10, right: 14, lineHeight: 1 }}>{f.n}</div>
              <div style={{ width: 46, height: 46, background: "rgba(242,92,39,.15)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, fontSize: 22 }}>{f.icon}</div>
              <h4 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{f.t}</h4>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.8 }}>{f.p}</p>
            </div>
          ))}
        </div>
      </Sec2>

      {/* HOW IT WORKS */}
      <Sec2 bg={C.lace}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80&auto=format&fit=crop" alt="How" style={{ width: "100%", height: 480, objectFit: "cover", borderRadius: 14 }} />
            <div style={{ position: "absolute", bottom: 22, left: 22, background: C.navy, borderRadius: 10, padding: "16px 20px", display: "flex", gap: 22 }}>
              {[["98%", "Satisfaction Rate"], ["10+", "Years Expertise"]].map(([n, l], i) => (
                <div key={i} style={{ textAlign: i === 0 ? "left" : "left" }}>
                  <div style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 26, fontWeight: 900 }}><span style={{ color: C.or }}>{n}</span></div>
                  <div style={{ color: "rgba(255,255,255,.45)", fontSize: 11 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow txt="How It Works" />
            <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, marginBottom: 14 }}>Your Journey,<br /><em style={{ color: C.or, fontStyle: "normal" }}>Our Responsibility</em></h2>
            <p style={{ color: "#5a6a7a", fontSize: 14, lineHeight: 1.85, marginBottom: 32 }}>We handle every detail so you focus entirely on the memories you are about to make.</p>
            {[["01", "Choose Your Destination", "Browse 48+ handpicked destinations and pick the region that speaks to you."],
              ["02", "Personalized Consultation", "Our advisors craft a bespoke itinerary around your dates, budget, and travel style."],
              ["03", "We Handle the Paperwork", "Visas, tickets, hotels, insurance — fully managed with complete transparency."],
              ["04", "Travel & Enjoy", "Arrive relaxed and supported with our 24/7 on-trip assistance team."]
            ].map(([n, t, p]) => (
              <div key={n} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "18px 0", borderBottom: "1px solid rgba(2,28,65,.08)" }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(242,92,39,.1)", border: `1.5px solid rgba(242,92,39,.28)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Anybody',sans-serif", color: C.or, fontSize: 14, fontWeight: 900, flexShrink: 0 }}>{n}</div>
                <div>
                  <h5 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 14, fontWeight: 800, color: C.navy, marginBottom: 3 }}>{t}</h5>
                  <p style={{ fontSize: 13, color: "#5a6a7a", lineHeight: 1.7 }}>{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sec2>

      <BrandTone />
      <WavyPattern color={C.sun} bg={C.lace} height={180} />

      {/* KEY MESSAGE */}
      <section style={{ background: C.navy, padding: "96px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <Eyebrow txt="Key Message" light />
          <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 50, fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: 18 }}>Your <em style={{ color: C.or, fontStyle: "normal" }}>Co-Pilot</em><br />to Every Trip</h2>
          <div style={{ width: 32, height: 3, background: C.or, borderRadius: 2, marginBottom: 18 }} />
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 14, lineHeight: 1.85, marginBottom: 30, maxWidth: 410 }}>We redefine your travel experience by delivering proactive care, sophisticated service, and dependable expertise that enables seamless exploration of new horizons.</p>
          <div style={{ display: "flex", gap: 12 }}>
            <BtnOr>Contact Us</BtnOr>
            <BtnOutline>Explore Trips</BtnOutline>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=900&q=80&auto=format&fit=crop" alt="Co-pilot" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 14 }} />
          <div style={{ position: "absolute", bottom: 22, right: 22, background: "rgba(255,255,255,.1)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,.18)", borderRadius: 10, padding: "18px 22px", textAlign: "right" }}>
            <p style={{ fontFamily: "'Anybody',sans-serif", fontSize: 13, color: "rgba(255,255,255,.7)", fontStyle: "italic" }}>your</p>
            <strong style={{ fontFamily: "'Anybody',sans-serif", fontSize: 20, fontWeight: 900, color: C.or, display: "block", lineHeight: 1.25 }}>Co-Pilot<br />to Every Trip</strong>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "108px 60px", textAlign: "center", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop" alt="CTA" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(2,28,65,.83)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 48, fontWeight: 900, marginBottom: 14, lineHeight: 1.1 }}>Get Closer With Us &<br /><em style={{ color: C.or, fontStyle: "normal" }}>Get Special Promo</em></h2>
          <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.85 }}>Join 12,000+ travelers who've trusted Traveltix for stress-free journeys across Asia.</p>
          <BtnOr style={{ fontSize: 14, padding: "15px 38px", borderRadius: 7, margin: "0 auto" }}>Contact Us Today</BtnOr>
          <p style={{ color: "rgba(255,255,255,.35)", fontSize: 12, marginTop: 16 }}>✈ Free Consultation · No Hidden Fees · 24/7 Support</p>
        </div>
      </section>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   PAGE: DESTINATIONS
═══════════════════════════════════════════════ */
const DestinationsPage = () => {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Indonesia", "Thailand", "Turkey", "Japan", "Singapore", "Malaysia", "Maldives"];
  const dests = [
    { img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&auto=format&fit=crop", cat: "Indonesia", name: "Kelingking Beach", sub: "Nusa Penida, Bali", price: "$899" },
    { img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80&auto=format&fit=crop", cat: "Indonesia", name: "Padar Island", sub: "East Nusa Tenggara", price: "$749" },
    { img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80&auto=format&fit=crop", cat: "Thailand", name: "Phi Phi Islands", sub: "Krabi, Thailand", price: "$699" },
    { img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80&auto=format&fit=crop", cat: "Thailand", name: "Grand Palace", sub: "Bangkok, Thailand", price: "$599" },
    { img: "https://images.unsplash.com/photo-1570447026890-40e38cfa55fd?w=800&q=80&auto=format&fit=crop", cat: "Turkey", name: "Cappadocia Balloons", sub: "Central Anatolia", price: "$1,099" },
    { img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80&auto=format&fit=crop", cat: "Turkey", name: "Pamukkale", sub: "Denizli, Turkey", price: "$799" },
    { img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop", cat: "Japan", name: "Kyoto Temples", sub: "Kyoto, Japan", price: "$1,299" },
    { img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80&auto=format&fit=crop", cat: "Japan", name: "Tokyo City", sub: "Tokyo, Japan", price: "$1,199" },
    { img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80&auto=format&fit=crop", cat: "Singapore", name: "Marina Bay Sands", sub: "Singapore", price: "$999" },
    { img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80&auto=format&fit=crop", cat: "Malaysia", name: "Kuala Lumpur", sub: "Kuala Lumpur, MY", price: "$649" },
    { img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80&auto=format&fit=crop", cat: "Maldives", name: "Maldives Atolls", sub: "North Malé Atoll", price: "$1,899" },
    { img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80&auto=format&fit=crop", cat: "Thailand", name: "Krabi Cliffs", sub: "Krabi, Thailand", price: "$749" },
  ];
  const filtered = filter === "All" ? dests : dests.filter(d => d.cat === filter);
  return (
    <div>
      <div style={{ background: C.navy, padding: "140px 60px 80px", position: "relative", overflow: "hidden" }}>
        <WavyPattern color={C.or} height={300} bg="transparent" />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow txt="Explore" light />
          <h1 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 60, fontWeight: 900, marginBottom: 14 }}>Our <em style={{ color: C.or, fontStyle: "normal" }}>Destinations</em></h1>
          <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, maxWidth: 500, lineHeight: 1.85 }}>48+ handpicked destinations across Asia — from pristine beaches to ancient temples. Your next adventure awaits.</p>
        </div>
      </div>
      <Sec2 bg={C.lace}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{ padding: "10px 22px", fontFamily: "'Anybody',sans-serif", fontSize: 12, fontWeight: 800, borderRadius: 30, border: `1.5px solid ${filter === c ? C.navy : "rgba(2,28,65,.2)"}`, background: filter === c ? C.navy : "#fff", color: filter === c ? C.or : C.navy, cursor: "pointer", letterSpacing: ".5px", textTransform: "uppercase", transition: "all .25s" }}>{c}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {filtered.map((d, i) => (
            <div key={i} style={{ borderRadius: 14, overflow: "hidden", background: "#fff", border: "1px solid rgba(2,28,65,.07)", transition: "all .3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(2,28,65,.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                <img src={d.img} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", top: 12, left: 12, background: C.or, color: "#fff", fontFamily: "'Anybody',sans-serif", fontSize: 9, fontWeight: 800, padding: "3px 10px", borderRadius: 3, textTransform: "uppercase", letterSpacing: "1.5px" }}>{d.cat}</div>
                <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(2,28,65,.8)", color: "#fff", fontFamily: "'Anybody',sans-serif", fontSize: 12, fontWeight: 800, padding: "5px 12px", borderRadius: 6 }}>From {d.price}</div>
              </div>
              <div style={{ padding: 20 }}>
                <h4 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 18, fontWeight: 900, color: C.navy, marginBottom: 4 }}>{d.name}</h4>
                <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 14 }}>📍 {d.sub}</p>
                <BtnOr style={{ width: "100%", justifyContent: "center", fontSize: 11, padding: "11px" }}>View Package</BtnOr>
              </div>
            </div>
          ))}
        </div>
      </Sec2>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   PAGE: SERVICES
═══════════════════════════════════════════════ */
const ServicesPage = () => {
  const services = [
    { icon: "📋", t: "Visa Processing", p: "Complete visa assistance for all destinations — documentation, submission, tracking, and follow-up handled with care and expertise.", items: ["Tourist Visa", "Business Visa", "Student Visa", "Multiple Entry Visa"] },
    { icon: "✈", t: "Flight Booking", p: "Best fares guaranteed across all major airlines. We handle seat selection, upgrades, and itinerary changes so you don't have to.", items: ["Economy & Business Class", "Connecting Flights", "Group Bookings", "Open-jaw Tickets"] },
    { icon: "🏨", t: "Hotel Reservations", p: "Carefully vetted accommodations at every price point — from boutique local stays to five-star luxury resorts.", items: ["Budget Stays", "Boutique Hotels", "Luxury Resorts", "Serviced Apartments"] },
    { icon: "🗺", t: "Custom Itineraries", p: "No cookie-cutter tours here. Every trip is tailored around your pace, passions, and budget by dedicated travel advisors.", items: ["Solo Travel", "Honeymoon Packages", "Family Trips", "Adventure Tours"] },
    { icon: "👥", t: "Group Tours", p: "Tailored group packages for families, friends, and corporate teams — logistics handled from start to finish.", items: ["Family Tours", "Corporate Retreats", "School Trips", "Pilgrimage Tours"] },
    { icon: "🛡", t: "Travel Insurance", p: "Comprehensive travel insurance covering medical emergencies, trip cancellations, and lost baggage for complete peace of mind.", items: ["Medical Coverage", "Trip Cancellation", "Lost Baggage", "Emergency Evacuation"] },
  ];
  return (
    <div>
      <div style={{ background: C.lace, padding: "140px 60px 80px", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .4 }} viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice">
          <path d="M-80 150 Q360 50 720 200 Q1080 350 1520 150" stroke={C.sun} strokeWidth="28" fill="none" strokeLinecap="round" />
          <path d="M-80 350 Q360 250 720 400 Q1080 550 1520 350" stroke={C.sun} strokeWidth="28" fill="none" strokeLinecap="round" />
        </svg>
        <div style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow txt="What We Offer" />
          <h1 style={{ fontFamily: "'Anybody',sans-serif", color: C.navy, fontSize: 60, fontWeight: 900, marginBottom: 14 }}>Our <em style={{ color: C.or, fontStyle: "normal" }}>Services</em></h1>
          <p style={{ color: "#5a6a7a", fontSize: 15, maxWidth: 500, lineHeight: 1.85 }}>End-to-end travel management — from your first inquiry to your safe return home. Everything handled under one roof.</p>
        </div>
      </div>
      <Sec2 bg={C.white}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: C.lace, borderRadius: 14, padding: "36px 28px", border: "1px solid rgba(2,28,65,.07)", transition: "all .3s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 18px 48px rgba(2,28,65,.1)"; e.currentTarget.querySelector(".sbar").style.transform = "scaleX(1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.querySelector(".sbar").style.transform = "scaleX(0)"; }}>
              <div className="sbar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: C.or, transform: "scaleX(0)", transformOrigin: "left", transition: "transform .35s" }} />
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h4 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 20, fontWeight: 900, color: C.navy, marginBottom: 12 }}>{s.t}</h4>
              <p style={{ fontSize: 13, color: "#5a6a7a", lineHeight: 1.85, marginBottom: 20 }}>{s.p}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {s.items.map((it, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.navy, fontWeight: 500 }}>
                    <span style={{ width: 6, height: 6, background: C.or, borderRadius: "50%", flexShrink: 0 }} />{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Sec2>
      <section style={{ background: C.navy, padding: "80px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <WavyPattern color={C.or} height={200} bg="transparent" />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 44, fontWeight: 900, marginBottom: 14 }}>Ready to <em style={{ color: C.or, fontStyle: "normal" }}>Start Planning?</em></h2>
          <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, maxWidth: 440, margin: "0 auto 30px", lineHeight: 1.85 }}>Get a free consultation with our travel experts today. No commitment required.</p>
          <BtnOr style={{ margin: "0 auto", fontSize: 14, padding: "14px 36px" }}>Book Free Consultation</BtnOr>
        </div>
      </section>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   PAGE: ABOUT
═══════════════════════════════════════════════ */
const AboutPage = () => (
  <div>
    <div style={{ background: C.navy, padding: "140px 60px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-end" }}>
        <div style={{ paddingBottom: 80 }}>
          <Eyebrow txt="About Traveltix" light />
          <h1 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 56, fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>We Make Travel<br /><em style={{ color: C.or, fontStyle: "normal" }}>Effortless</em></h1>
          <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, lineHeight: 1.9, maxWidth: 460 }}>Traveltix BD is a trusted travel companion who takes care of every detail with care and expertise, making clients feel confident and excited about their trips — from visa to arrival.</p>
          <div style={{ display: "flex", gap: 32, marginTop: 40 }}>
            {[["12K+", "Happy Travelers"], ["48+", "Destinations"], ["10+", "Years Experience"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 36, fontWeight: 900 }}><span style={{ color: C.or }}>{n}</span></div>
                <div style={{ color: "rgba(255,255,255,.5)", fontSize: 12, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80&auto=format&fit=crop" alt="About" style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: "14px 14px 0 0" }} />
      </div>
    </div>
    <Sec2 bg={C.lace}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <div>
          <Eyebrow txt="Our Mission" />
          <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 40, fontWeight: 900, color: C.navy, marginBottom: 20 }}>Mission & <em style={{ color: C.or, fontStyle: "normal" }}>Vision</em></h2>
          <div style={{ marginBottom: 28 }}>
            <h4 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 18, fontWeight: 800, color: C.navy, marginBottom: 8 }}>Mission</h4>
            <p style={{ fontSize: 14, color: "#5a6a7a", lineHeight: 1.9 }}>To turn travel into a stress-free, tailored experience through clear guidance, thorough support, and a trusted partnership from visa to departure and beyond. We make sure your journey is smooth, well-planned and memorable even with your family.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 18, fontWeight: 800, color: C.navy, marginBottom: 8 }}>Vision</h4>
            <p style={{ fontSize: 14, color: "#5a6a7a", lineHeight: 1.9 }}>We want to redefine your travel experience by delivering proactive care, sophisticated service, and dependable expertise that enables seamless exploration of new horizons.</p>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?w=800&q=80&auto=format&fit=crop" alt="Mission" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 14 }} />
      </div>
    </Sec2>
    <BrandTone />
    <Sec2 bg={C.lace}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Eyebrow txt="Find Us" center />
        <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 40, fontWeight: 900, color: C.navy, marginTop: 10 }}>Contact <em style={{ color: C.or, fontStyle: "normal" }}>Information</em></h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
        {[
          { icon: "📍", t: "Our Office", lines: ["Rupayan Prime, House 2,", "Road 7, Dhanmondi,", "Dhaka - 1205, Bangladesh"] },
          { icon: "📞", t: "Phone", lines: ["+880 1886 005274"] },
          { icon: "✉", t: "Email", lines: ["info.traveltix@gmail.com", "admin@traveltixbd.com", "hr@traveltixbd.com"] },
        ].map((c, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "32px 28px", border: "1px solid rgba(2,28,65,.07)", textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 14 }}>{c.icon}</div>
            <h4 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 17, fontWeight: 800, color: C.navy, marginBottom: 12 }}>{c.t}</h4>
            {c.lines.map((l, j) => <p key={j} style={{ fontSize: 13, color: "#5a6a7a", lineHeight: 1.8 }}>{l}</p>)}
          </div>
        ))}
      </div>
    </Sec2>
  </div>
);

/* ═══════════════════════════════════════════════
   PAGE: CAREER
═══════════════════════════════════════════════ */
const CareerPage = () => {
  const [applied, setApplied] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", cover: "" });
  const handleSubmit = (jobTitle) => {
    setApplied(jobTitle);
    setTimeout(() => setApplied(null), 4000);
    setForm({ name: "", email: "", phone: "", position: jobTitle, cover: "" });
  };
  return (
    <div>
      {/* HERO */}
      <div style={{ background: C.navy, padding: "140px 60px 80px", position: "relative", overflow: "hidden" }}>
        <WavyPattern color={C.or} height={400} bg="transparent" />
        <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <Eyebrow txt="Join Our Team" light />
            <h1 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 56, fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>Build Your Career<br />in <em style={{ color: C.or, fontStyle: "normal" }}>Travel</em></h1>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, lineHeight: 1.9, maxWidth: 440, marginBottom: 32 }}>Join a passionate team that makes travel effortless for thousands of people. We're always looking for talented individuals who share our love for exploration and hospitality.</p>
            <div style={{ display: "flex", gap: 32 }}>
              {[["6", "Open Positions"], ["50+", "Team Members"], ["4.8★", "Glassdoor Rating"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 30, fontWeight: 900 }}><span style={{ color: C.or }}>{n}</span></div>
                  <div style={{ color: "rgba(255,255,255,.5)", fontSize: 12, marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop" alt="Team" style={{ width: "100%", height: 380, objectFit: "cover", borderRadius: 14 }} />
        </div>
      </div>

      {/* APPLICATION */}
      <Sec2 bg={C.navy}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
          <div>
            <Eyebrow txt="General Application" light />
            <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16 }}>Don't See Your <em style={{ color: C.or, fontStyle: "normal" }}>Role?</em></h2>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14, lineHeight: 1.9, marginBottom: 28 }}>We're always interested in meeting talented people. Send us your CV and tell us how you'd like to contribute to the Traveltix mission.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "📧", t: "HR Email", v: "hr@traveltixbd.com" },
                { icon: "📍", t: "Walk-in Address", v: "Rupayan Prime, House 2, Road 7, Dhanmondi, Dhaka - 1205" },
                { icon: "📞", t: "HR Contact", v: "+880 1886 005274" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 20, marginTop: 2 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Anybody',sans-serif", color: C.sky, fontSize: 11, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 3 }}>{c.t}</div>
                    <div style={{ color: "rgba(255,255,255,.75)", fontSize: 13 }}>{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 14, padding: "36px 32px" }}>
            <h4 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 24 }}>General Application</h4>
            {applied && (
              <div style={{ background: "rgba(22,163,74,.1)", border: "1.5px solid rgba(22,163,74,.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>✅</span>
                <p style={{ fontFamily: "'Anybody',sans-serif", fontSize: 12, fontWeight: 700, color: "#16a34a" }}>Application submitted! We'll get back to you at <strong>{form.email || "your email"}</strong> within 3 business days.</p>
              </div>
            )}
            {[
              { label: "Full Name", key: "name", type: "text", ph: "Your full name" },
              { label: "Email Address", key: "email", type: "email", ph: "your@email.com" },
              { label: "Phone Number", key: "phone", type: "tel", ph: "+880 XXXX XXXXXX" },
              { label: "Position of Interest", key: "position", type: "text", ph: "e.g. Travel Consultant" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 16 }}>
                <label style={{ fontFamily: "'Anybody',sans-serif", color: "rgba(255,255,255,.7)", fontSize: 12, fontWeight: 700, display: "block", marginBottom: 6, letterSpacing: ".5px", textTransform: "uppercase" }}>{f.label}</label>
                <input type={f.type} placeholder={f.ph} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={{ width: "100%", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 7, padding: "11px 14px", color: "#fff", fontSize: 13, outline: "none" }} />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontFamily: "'Anybody',sans-serif", color: "rgba(255,255,255,.7)", fontSize: 12, fontWeight: 700, display: "block", marginBottom: 6, letterSpacing: ".5px", textTransform: "uppercase" }}>Cover Note</label>
              <textarea placeholder="Tell us about yourself and why you'd like to join Traveltix..." value={form.cover} onChange={e => setForm({ ...form, cover: e.target.value })} rows={4}
                style={{ width: "100%", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 7, padding: "11px 14px", color: "#fff", fontSize: 13, outline: "none", resize: "vertical" }} />
            </div>
            <BtnOr style={{ width: "100%", justifyContent: "center", fontSize: 13, padding: "14px" }} onClick={() => handleSubmit("General Application")}>Submit Application</BtnOr>
          </div>
        </div>
      </Sec2>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState("Home");
  useEffect(() => { window.scrollTo(0, 0); }, [page]);
  const pages = { Home: <HomePage setPage={setPage} />, Destinations: <DestinationsPage />, Services: <ServicesPage />, About: <AboutPage />, Career: <CareerPage /> };
  return (
    <div style={{ fontFamily: "'Epilogue',sans-serif", background: C.white }}>
      <FontStyle />
      <Nav page={page} setPage={setPage} />
      <main>{pages[page]}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
