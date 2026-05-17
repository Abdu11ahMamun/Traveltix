// ╔══════════════════════════════════════════════════════╗
// ║  src/pages/Home.jsx                                  ║
// ╚══════════════════════════════════════════════════════╝
import { useNavigate } from "react-router-dom";
import { C, ASSETS, BLOG_POSTS } from "../constants/brand";
import Eyebrow       from "../components/shared/Eyebrow";
import BtnOr         from "../components/shared/BtnOr";
import BtnOutline    from "../components/shared/BtnOutline";
import Marquee       from "../components/Marquee";
import SearchBar     from "../components/SearchBar";
import WavyPattern   from "../components/WavyPattern";
import CountryHover  from "../components/CountryHover";
import BrandTone     from "../components/BrandTone";

const FEATURES = [
  { n:"01", icon:"🛡", t:"Visa Processing",    p:"End-to-end visa assistance — documentation, submission and tracking handled for you." },
  { n:"02", icon:"✈",  t:"Flight Booking",     p:"Best fares across all airlines. We handle upgrades and itinerary changes seamlessly." },
  { n:"03", icon:"🏨", t:"Hotel Reservations", p:"Vetted accommodations at every price point — boutique stays to five-star resorts." },
  { n:"04", icon:"👥", t:"Group Tours",        p:"Tailored packages for families, friends, and corporate teams — fully managed." },
  { n:"05", icon:"🗺",  t:"Custom Itineraries", p:"No cookie-cutter tours. Every trip built around your pace, passions, and budget." },
  { n:"06", icon:"🕐", t:"24/7 Support",       p:"Round-the-clock assistance before, during, and after your journey." },
];

// Home destination preview (4 cards)
const HOME_DESTS = [
  { img: ASSETS.indonesia.nusaPenida, cat:"Indonesia", name:"Nusa Penida",    sub:"Bali, Indonesia",    tall: true },
  { img: ASSETS.turkey.cappadocia,    cat:"Turkey",    name:"Cappadocia",     sub:"Central Anatolia" },
  { img: ASSETS.japan.mtFuji1,        cat:"Japan",     name:"Mt. Fuji",       sub:"Shizuoka, Japan" },
  { img: ASSETS.malaysia.kl1,         cat:"Malaysia",  name:"Kuala Lumpur",   sub:"Malaysia",           wide: true },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ height:"100vh", minHeight:640, position:"relative", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <img src={ASSETS.hero} alt="Hero" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(110deg,rgba(2,28,65,.93) 0%,rgba(2,28,65,.72) 55%,rgba(2,28,65,.22) 100%)" }} />
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:160, background:`linear-gradient(to top,${C.lace},transparent)` }} />
          <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:.06, pointerEvents:"none" }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <path d="M-100 200 Q200 80 400 250 Q600 420 800 200 Q1000 -20 1200 200 Q1400 420 1600 200" stroke={C.or} strokeWidth="28" fill="none" strokeLinecap="round"/>
            <path d="M-100 500 Q200 360 400 520 Q600 680 800 480 Q1000 280 1200 480 Q1400 680 1600 480" stroke={C.or} strokeWidth="28" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ position:"relative", zIndex:3, padding:"0 60px", display:"grid", gridTemplateColumns:"1.1fr .9fr", gap:48, alignItems:"center", width:"100%" }}>
          <div className="anim-slideup">
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(242,92,39,.18)", border:"1px solid rgba(242,92,39,.45)", color:C.or, fontFamily:"'Anybody',sans-serif", fontSize:10, fontWeight:800, padding:"6px 14px", borderRadius:4, marginBottom:22, letterSpacing:2, textTransform:"uppercase" }}>
              ✈ Your Co-Pilot to Every Trip
            </div>
            <h1 style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:66, fontWeight:900, lineHeight:.98, marginBottom:12, letterSpacing:-1 }}>
              We Handle<br/><span style={{ color:C.or }}>Hassles.</span><br/><span style={{ color:C.sky }}>Troubleless</span><br/>Travel.
            </h1>
            <p style={{ color:"rgba(255,255,255,.62)", fontSize:15, lineHeight:1.85, marginBottom:34, maxWidth:450, fontWeight:300 }}>
              Traveltix turns your journey into a stress-free, tailored experience — clear guidance and dependable expertise from visa to departure and beyond.
            </p>
            <div style={{ display:"flex", gap:12 }}>
              <BtnOr>Get Started →</BtnOr>
              <BtnOutline onClick={() => navigate("/services")}>Our Services</BtnOutline>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:12 }}>
            <svg className="plane-float" style={{ width:180, height:"auto", filter:`drop-shadow(0 8px 32px rgba(242,92,39,.5))` }} viewBox="0 0 240 200">
              <path d="M220 90 L160 80 L130 20 L110 20 L120 80 L60 72 L45 52 L30 52 L38 82 L20 85 L20 95 L38 98 L30 128 L45 128 L60 108 L120 100 L110 160 L130 160 L160 100 L220 90 Z" fill={C.or}/>
            </svg>
            {[["12K+","Happy Travelers"],["48+","Destinations"],["4.9★","Client Satisfaction"]].map(([n,l]) => (
              <div key={l} style={{ background:"rgba(255,255,255,.08)", backdropFilter:"blur(14px)", border:"1px solid rgba(255,255,255,.15)", borderRadius:10, padding:"14px 20px", display:"flex", alignItems:"center", gap:16, minWidth:200 }}>
                <div style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:28, fontWeight:900 }}><span style={{ color:C.or }}>{n}</span></div>
                <div style={{ color:"rgba(255,255,255,.52)", fontSize:12 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
      <SearchBar />

      {/* ── WHY CHOOSE ── */}
      <section style={{ padding:"88px 60px", background:C.lace }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:52, gap:32 }}>
          <div><Eyebrow txt="Why Choose Us"/><h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:44, fontWeight:900, color:C.navy }}>Why Choose <em style={{ color:C.or, fontStyle:"normal" }}>Traveltix</em></h2></div>
          <p style={{ color:"#5a6a7a", fontSize:14, maxWidth:380, lineHeight:1.85 }}>High-class service from visa processing to arrival — making your journey smooth and memorable.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {[
            { t:"High End Care from Start to Finish", p:"Expertise in everything from challenging visa applications to documentations, ticket bookings and travel counseling." },
            { t:"Personalized Counseling", p:"Professionalism and care at every step, from timely communication to seamless booking management." },
            { t:"Trust and Transparency", p:"Clear, honest advice and upfront pricing. No surprises and no hidden fees." },
          ].map((c,i) => (
            <div key={i} className="card-wrap" style={{ background:"#fff", borderRadius:12, padding:"34px 26px", border:"1px solid rgba(2,28,65,.07)", transition:"all .3s", position:"relative", overflow:"hidden" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow="0 18px 48px rgba(2,28,65,.1)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
              <div className="card-topbar"/>
              <div style={{ width:28, height:3, background:C.or, borderRadius:2, marginBottom:14 }}/>
              <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:18, fontWeight:900, color:C.navy, marginBottom:10, lineHeight:1.2 }}>{c.t}</h4>
              <p style={{ fontSize:13, color:"#5a6a7a", lineHeight:1.85 }}>{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      <WavyPattern/>
      <CountryHover/>

      {/* ── DESTINATIONS PREVIEW ── */}
      <section style={{ padding:"88px 60px", background:"#fff" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:46 }}>
          <div><Eyebrow txt="Top Picks"/><h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:44, fontWeight:900, color:C.navy }}>Popular <em style={{ color:C.or, fontStyle:"normal" }}>Destinations</em></h2></div>
          <span onClick={()=>navigate("/destinations")} style={{ fontFamily:"'Anybody',sans-serif", fontSize:12, fontWeight:800, color:C.or, borderBottom:`1.5px solid ${C.or}`, paddingBottom:2, cursor:"pointer", textTransform:"uppercase" }}>View All →</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1.45fr 1fr 1fr", gridTemplateRows:"280px 260px", gap:14 }}>
          {HOME_DESTS.map((d,i) => (
            <div key={i} style={{ borderRadius:18, overflow:"hidden", position:"relative", cursor:"pointer", gridRow:d.tall?"1/3":"auto", gridColumn:d.wide?"2/4":"auto" }}
              onMouseEnter={e=>{ e.currentTarget.querySelector("img").style.transform="scale(1.07)"; e.currentTarget.querySelector(".arr").style.background=C.or; }}
              onMouseLeave={e=>{ e.currentTarget.querySelector("img").style.transform="scale(1)"; e.currentTarget.querySelector(".arr").style.background="rgba(255,255,255,.14)"; }}>
              <img src={d.img} alt={d.name} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .55s" }}/>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(2,28,65,.78) 0%,transparent 55%)" }}/>
              <div className="arr" style={{ position:"absolute", top:16, right:16, width:36, height:36, background:"rgba(255,255,255,.14)", backdropFilter:"blur(6px)", borderRadius:"50%", border:"1px solid rgba(255,255,255,.25)", display:"flex", alignItems:"center", justifyContent:"center", transition:"background .25s", zIndex:2 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </div>
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:22, zIndex:2 }}>
                <div style={{ display:"inline-block", background:C.or, color:"#fff", fontFamily:"'Anybody',sans-serif", fontSize:9, fontWeight:800, padding:"3px 10px", borderRadius:3, marginBottom:6, letterSpacing:"1.5px", textTransform:"uppercase" }}>{d.cat}</div>
                <h3 style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:20, fontWeight:900, lineHeight:1.2, marginBottom:2 }}>{d.name}</h3>
                <span style={{ color:"rgba(255,255,255,.65)", fontSize:12 }}>{d.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding:"88px 60px", background:C.navy }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
          <div><Eyebrow txt="Our Services" light/><h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:44, fontWeight:900, color:"#fff" }}>Travel With <em style={{ color:C.or, fontStyle:"normal" }}>Confidence</em></h2></div>
          <p style={{ color:"rgba(255,255,255,.45)", fontSize:13, maxWidth:320, lineHeight:1.8 }}>Everything handled — from visa to landing — by Asia travel experts.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18, marginTop:50 }}>
          {FEATURES.map((f,i) => (
            <div key={i} style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)", borderRadius:12, padding:"30px 24px", transition:"all .3s", position:"relative", overflow:"hidden" }}
              onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,.09)"; e.currentTarget.style.borderColor="rgba(242,92,39,.35)"; e.currentTarget.style.transform="translateY(-4px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,.05)"; e.currentTarget.style.borderColor="rgba(255,255,255,.08)"; e.currentTarget.style.transform="none"; }}>
              <div style={{ fontFamily:"'Anybody',sans-serif", fontSize:68, fontWeight:900, color:"rgba(255,255,255,.04)", position:"absolute", top:10, right:14, lineHeight:1 }}>{f.n}</div>
              <div style={{ width:46, height:46, background:"rgba(242,92,39,.15)", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18, fontSize:22 }}>{f.icon}</div>
              <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:16, fontWeight:800, color:"#fff", marginBottom:8 }}>{f.t}</h4>
              <p style={{ fontSize:13, color:"rgba(255,255,255,.5)", lineHeight:1.8 }}>{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding:"88px 60px", background:C.lace }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>
          <div style={{ position:"relative" }}>
            <img src={ASSETS.indonesia.ubud1} alt="How" style={{ width:"100%", height:480, objectFit:"cover", borderRadius:14 }}/>
            <div style={{ position:"absolute", bottom:22, left:22, background:C.navy, borderRadius:10, padding:"16px 20px", display:"flex", gap:22 }}>
              {[["98%","Satisfaction Rate"],["10+","Years Expertise"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:26, fontWeight:900 }}><span style={{ color:C.or }}>{n}</span></div>
                  <div style={{ color:"rgba(255,255,255,.45)", fontSize:11 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow txt="How It Works"/>
            <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:42, fontWeight:900, color:C.navy, lineHeight:1.1, marginBottom:14 }}>Your Journey,<br/><em style={{ color:C.or, fontStyle:"normal" }}>Our Responsibility</em></h2>
            <p style={{ color:"#5a6a7a", fontSize:14, lineHeight:1.85, marginBottom:32 }}>We handle every detail so you focus entirely on the memories you are about to make.</p>
            {[["01","Choose Your Destination","Browse 48+ handpicked destinations and pick the region that speaks to you."],
              ["02","Personalized Consultation","Our advisors craft a bespoke itinerary around your dates, budget, and travel style."],
              ["03","We Handle the Paperwork","Visas, tickets, hotels, insurance — fully managed with complete transparency."],
              ["04","Travel & Enjoy","Arrive relaxed and supported with our 24/7 on-trip assistance team."]
            ].map(([n,t,p]) => (
              <div key={n} style={{ display:"flex", alignItems:"flex-start", gap:16, padding:"18px 0", borderBottom:"1px solid rgba(2,28,65,.08)" }}>
                <div style={{ width:40, height:40, borderRadius:8, background:"rgba(242,92,39,.1)", border:"1.5px solid rgba(242,92,39,.28)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Anybody',sans-serif", color:C.or, fontSize:14, fontWeight:900, flexShrink:0 }}>{n}</div>
                <div>
                  <h5 style={{ fontFamily:"'Anybody',sans-serif", fontSize:14, fontWeight:800, color:C.navy, marginBottom:3 }}>{t}</h5>
                  <p style={{ fontSize:13, color:"#5a6a7a", lineHeight:1.7 }}>{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandTone/>
      <WavyPattern color={C.sun} bg={C.lace} height={180}/>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding:"88px 60px", background:"#fff" }}>
        <div style={{ textAlign:"center", marginBottom:50 }}>
          <Eyebrow txt="Client Reviews" center/>
          <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:44, fontWeight:900, color:C.navy, marginTop:10 }}>What Our Travelers Say</h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {[
            { init:"RF", bg:C.or,   color:"#fff",   name:"Roy Franklin",  role:"Adventure Traveler, USA", text:"The Bali trip was beyond magical. Traveltix handled everything from visa to transfers. Every detail was flawless!" },
            { init:"GH", bg:C.navy, color:"#fff",   name:"Gary Howard",   role:"Family Traveler, UK",     text:"Traveltix's personal touch is unmatched. The Thailand family tour was perfectly managed." },
            { init:"LD", bg:C.sky,  color:C.navy,   name:"Louna Daniel",  role:"Solo Traveler, France",   text:"Cappadocia at sunrise in a hot air balloon — Traveltix made it happen seamlessly. Zero stress!" },
          ].map((t,i) => (
            <div key={i} style={{ background:C.lace, borderRadius:12, padding:26, border:`1px solid rgba(2,28,65,.06)`, transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.boxShadow="0 14px 40px rgba(2,28,65,.1)"; e.currentTarget.style.transform="translateY(-4px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}>
              <div style={{ fontFamily:"Georgia,serif", fontSize:52, color:"rgba(242,92,39,.2)", lineHeight:.7, marginBottom:10 }}>"</div>
              <div style={{ color:C.or, fontSize:13, letterSpacing:2, marginBottom:12 }}>★★★★★</div>
              <p style={{ fontSize:13, color:"#5a6a7a", lineHeight:1.85, fontStyle:"italic", marginBottom:20 }}>{t.text}</p>
              <div style={{ display:"flex", alignItems:"center", gap:12, paddingTop:16, borderTop:"1px solid rgba(2,28,65,.07)" }}>
                <div style={{ width:40, height:40, borderRadius:"50%", background:t.bg, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Anybody',sans-serif", color:t.color, fontWeight:900, fontSize:13 }}>{t.init}</div>
                <div>
                  <h5 style={{ fontFamily:"'Anybody',sans-serif", fontSize:13, fontWeight:800, color:C.navy }}>{t.name}</h5>
                  <span style={{ fontSize:11, color:"#94a3b8" }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── KEY MESSAGE ── */}
      <section style={{ background:C.navy, padding:"96px 60px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
        <div>
          <Eyebrow txt="Key Message" light/>
          <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:50, fontWeight:900, color:"#fff", lineHeight:1.05, marginBottom:18 }}>Your <em style={{ color:C.or, fontStyle:"normal" }}>Co-Pilot</em><br/>to Every Trip</h2>
          <div style={{ width:32, height:3, background:C.or, borderRadius:2, marginBottom:18 }}/>
          <p style={{ color:"rgba(255,255,255,.55)", fontSize:14, lineHeight:1.85, marginBottom:30, maxWidth:410 }}>We redefine your travel experience by delivering proactive care, sophisticated service, and dependable expertise.</p>
          <div style={{ display:"flex", gap:12 }}>
            <BtnOr>Contact Us</BtnOr>
            <BtnOutline onClick={()=>navigate("/destinations")}>Explore Trips</BtnOutline>
          </div>
        </div>
        <div style={{ position:"relative" }}>
          <img src={ASSETS.nepal.pokhara2} alt="Co-pilot" style={{ width:"100%", height:400, objectFit:"cover", borderRadius:14 }}/>
          <div style={{ position:"absolute", bottom:22, right:22, background:"rgba(255,255,255,.1)", backdropFilter:"blur(14px)", border:"1px solid rgba(255,255,255,.18)", borderRadius:10, padding:"18px 22px", textAlign:"right" }}>
            <p style={{ fontFamily:"'Anybody',sans-serif", fontSize:13, color:"rgba(255,255,255,.7)", fontStyle:"italic" }}>your</p>
            <strong style={{ fontFamily:"'Anybody',sans-serif", fontSize:20, fontWeight:900, color:C.or, display:"block", lineHeight:1.25 }}>Co-Pilot<br/>to Every Trip</strong>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section style={{ padding:"88px 60px", background:"#fff" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:46 }}>
          <div><Eyebrow txt="Travel Journal"/><h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:44, fontWeight:900, color:C.navy }}>Latest Tips & <em style={{ color:C.or, fontStyle:"normal" }}>Stories</em></h2></div>
          <span onClick={()=>navigate("/blog")} style={{ fontFamily:"'Anybody',sans-serif", fontSize:12, fontWeight:800, color:C.or, borderBottom:`1.5px solid ${C.or}`, paddingBottom:2, cursor:"pointer", textTransform:"uppercase" }}>All Articles →</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1.5fr 1fr 1fr", gap:20 }}>
          {BLOG_POSTS.slice(0,3).map((b,i) => (
            <div key={i} style={{ borderRadius:12, overflow:"hidden", background:C.lace, border:`1px solid rgba(2,28,65,.06)`, transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 36px rgba(2,28,65,.1)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
              <img src={b.img} alt={b.title} style={{ width:"100%", height:i===0?260:160, objectFit:"cover" }}/>
              <div style={{ padding:20 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                  <span style={{ background:C.or, color:"#fff", fontFamily:"'Anybody',sans-serif", fontSize:9, fontWeight:800, padding:"3px 9px", borderRadius:3, textTransform:"uppercase" }}>{b.tag}</span>
                  <span style={{ color:"#94a3b8", fontSize:11 }}>{b.date}</span>
                </div>
                <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:i===0?19:14, fontWeight:900, color:C.navy, marginBottom:7, lineHeight:1.3 }}>{b.title}</h4>
                <p style={{ fontSize:13, color:"#5a6a7a", lineHeight:1.75 }}>{b.body}</p>
                <span style={{ fontFamily:"'Anybody',sans-serif", fontSize:11, fontWeight:800, color:C.or, display:"inline-flex", marginTop:10, textTransform:"uppercase", cursor:"pointer" }}>Read More →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ position:"relative", padding:"108px 60px", textAlign:"center", overflow:"hidden" }}>
        <img src={ASSETS.maldives.maldives1} alt="CTA" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}/>
        <div style={{ position:"absolute", inset:0, background:"rgba(2,28,65,.83)" }}/>
        <div style={{ position:"relative", zIndex:2 }}>
          <h2 style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:48, fontWeight:900, marginBottom:14, lineHeight:1.1 }}>Get Closer With Us &<br/><em style={{ color:C.or, fontStyle:"normal" }}>Get Special Promo</em></h2>
          <p style={{ color:"rgba(255,255,255,.6)", fontSize:15, maxWidth:480, margin:"0 auto 32px", lineHeight:1.85 }}>Join 12,000+ travelers who've trusted Traveltix for stress-free journeys across Asia.</p>
          <BtnOr style={{ fontSize:14, padding:"15px 38px", borderRadius:7 }}>Contact Us Today</BtnOr>
          <p style={{ color:"rgba(255,255,255,.35)", fontSize:12, marginTop:16 }}>✈ Free Consultation · No Hidden Fees · 24/7 Support</p>
        </div>
      </section>
    </div>
  );
}