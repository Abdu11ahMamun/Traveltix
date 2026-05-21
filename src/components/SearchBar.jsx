import { useState } from "react";
import { C } from "../constants/brand";

const ALL_DESTINATIONS = [
  "Bali, Indonesia", "Ubud, Indonesia", "Nusa Penida, Indonesia",
  "Bangkok, Thailand", "Phuket, Thailand", "Pattaya, Thailand",
  "Cappadocia, Turkey", "Istanbul, Turkey",
  "Tokyo, Japan", "Osaka, Japan", "Mt. Fuji, Japan",
  "Kuala Lumpur, Malaysia", "Putrajaya, Malaysia",
  "Maldives", "Singapore",
  "Pokhara, Nepal", "Kathmandu, Nepal",
  "Tiger's Nest, Bhutan", "Thimphu, Bhutan",
  "Colombo, Sri Lanka", "Ella, Sri Lanka", "Galle, Sri Lanka",
];

const TRIP_TYPES = [
  "Honeymoon Package", "Family Tour", "Adventure Trip",
  "Cultural Tour", "Beach Holiday", "Mountain Trek",
  "City Break", "Corporate Trip", "Pilgrimage Tour",
];

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const TRENDING = ["Bali", "Maldives", "Istanbul", "Tokyo", "Phuket", "Pokhara"];
const TABS = ["Package Tour", "Visa & Flights", "Hotel Only"];

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState(0);
  const [dest, setDest]           = useState("");
  const [tripType, setTripType]   = useState("");
  const [month, setMonth]         = useState("");
  const [guests, setGuests]       = useState(2);
  const [showDrop, setShowDrop]   = useState(false);

  const filtered = dest.length > 0
    ? ALL_DESTINATIONS.filter(d => d.toLowerCase().includes(dest.toLowerCase()))
    : ALL_DESTINATIONS;

  return (
    <div style={{ background:C.navy, padding:"52px 60px 52px", position:"relative", overflow:"hidden" }}>

      {/* bg glows */}
      <div style={{ position:"absolute", bottom:"-80px", left:"-40px", width:380, height:380, background:"radial-gradient(circle,rgba(242,92,39,.07) 0%,transparent 65%)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", top:"-60px", right:"80px", width:300, height:300, background:"radial-gradient(circle,rgba(161,219,241,.04) 0%,transparent 65%)", pointerEvents:"none" }}/>

      {/* ── Top row: heading + tabs ── */}
      <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:28 }}>

        {/* heading */}
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
            <div style={{ width:24, height:1, background:C.or }}/>
            <span style={{ fontFamily:"'Epilogue',sans-serif", fontSize:10, fontWeight:600, color:C.or, textTransform:"uppercase", letterSpacing:3 }}>Plan your trip</span>
          </div>
          <h3 style={{ fontFamily:"'Anybody',sans-serif", fontSize:32, fontWeight:900, color:"#fff", letterSpacing:-1, lineHeight:1 }}>
            Where do you want to <span style={{ color:C.or }}>go?</span>
          </h3>
        </div>

        {/* pill tabs */}
        <div style={{ display:"flex", gap:4, background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)", borderRadius:99, padding:4 }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{
              fontFamily:"'Epilogue',sans-serif", fontSize:11, fontWeight:600,
              color: activeTab === i ? "#fff" : "rgba(255,255,255,.4)",
              textTransform:"uppercase", letterSpacing:".8px",
              padding:"8px 20px", borderRadius:99, border:"none",
              background: activeTab === i ? C.or : "transparent",
              cursor:"pointer", transition:"all .2s", whiteSpace:"nowrap",
            }}
              onMouseEnter={e => { if (activeTab !== i) e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { if (activeTab !== i) e.currentTarget.style.color = "rgba(255,255,255,.4)"; }}
            >{tab}</button>
          ))}
        </div>
      </div>

      {/* ── Search card ── */}
      <div style={{
        background:"rgba(255,255,255,.04)",
        border:"1px solid rgba(255,255,255,.08)",
        borderRadius:20, padding:6,
        display:"grid",
        gridTemplateColumns:"2fr 1fr 1fr 0.9fr auto",
        gap:2,
      }}>

        {/* WHERE TO */}
        <div style={{ padding:"16px 22px", borderRadius:16, position:"relative", cursor:"text",
          transition:"background .2s" }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.07)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={C.or} strokeWidth="2.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            <span style={{ fontFamily:"'Epilogue',sans-serif", fontSize:9, fontWeight:700, color:C.or, textTransform:"uppercase", letterSpacing:1.5 }}>Destination</span>
          </div>
          <input
            value={dest}
            onChange={e => { setDest(e.target.value); setShowDrop(true); }}
            onFocus={() => setShowDrop(true)}
            onBlur={() => setTimeout(() => setShowDrop(false), 180)}
            placeholder="Search destinations..."
            style={{ width:"100%", border:"none", outline:"none", fontSize:15, fontWeight:800, color:"#fff", fontFamily:"'Anybody',sans-serif", background:"transparent", padding:0, letterSpacing:"-.3px" }}
          />
          <div style={{ fontFamily:"'Epilogue',sans-serif", fontSize:11, color:"rgba(255,255,255,.3)", marginTop:3, fontWeight:300 }}>
            {dest || "Bali, Tokyo, Istanbul..."}
          </div>
          {/* dropdown */}
          {showDrop && (
            <div style={{ position:"absolute", top:"calc(100% + 8px)", left:0, right:0, background:"#fff", borderRadius:12, boxShadow:"0 16px 48px rgba(2,28,65,.22)", zIndex:999, maxHeight:220, overflowY:"auto", border:"1px solid rgba(2,28,65,.08)" }}>
              {filtered.map((d, i) => (
                <div key={i} onMouseDown={() => { setDest(d); setShowDrop(false); }}
                  style={{ padding:"10px 16px", fontSize:13, color:C.navy, cursor:"pointer", display:"flex", alignItems:"center", gap:10, fontFamily:"'Epilogue',sans-serif", borderBottom:"1px solid rgba(2,28,65,.04)", transition:"background .15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = C.lace}
                  onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={C.or} strokeWidth="2.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                  {d}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* divider */}
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:0, top:"20%", bottom:"20%", width:1, background:"rgba(255,255,255,.07)" }}/>
          <div style={{ padding:"16px 22px", borderRadius:16, transition:"background .2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.07)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={C.or} strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              <span style={{ fontFamily:"'Epilogue',sans-serif", fontSize:9, fontWeight:700, color:C.or, textTransform:"uppercase", letterSpacing:1.5 }}>Trip Type</span>
            </div>
            <select value={tripType} onChange={e => setTripType(e.target.value)}
              style={{ width:"100%", border:"none", outline:"none", fontSize:15, fontWeight:800, color: tripType ? "#fff" : "rgba(255,255,255,.4)", fontFamily:"'Anybody',sans-serif", background:"transparent", padding:0, cursor:"pointer", appearance:"none", letterSpacing:"-.3px" }}>
              <option value="">Select type</option>
              {TRIP_TYPES.map(t => <option key={t} value={t} style={{ color:C.navy }}>{t}</option>)}
            </select>
            <div style={{ fontFamily:"'Epilogue',sans-serif", fontSize:11, color:"rgba(255,255,255,.3)", marginTop:3, fontWeight:300 }}>
              {tripType || "Adventure, Honeymoon..."}
            </div>
          </div>
        </div>

        {/* WHEN */}
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:0, top:"20%", bottom:"20%", width:1, background:"rgba(255,255,255,.07)" }}/>
          <div style={{ padding:"16px 22px", borderRadius:16, transition:"background .2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.07)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={C.or} strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              <span style={{ fontFamily:"'Epilogue',sans-serif", fontSize:9, fontWeight:700, color:C.or, textTransform:"uppercase", letterSpacing:1.5 }}>Travel Month</span>
            </div>
            <select value={month} onChange={e => setMonth(e.target.value)}
              style={{ width:"100%", border:"none", outline:"none", fontSize:15, fontWeight:800, color: month ? "#fff" : "rgba(255,255,255,.4)", fontFamily:"'Anybody',sans-serif", background:"transparent", padding:0, cursor:"pointer", appearance:"none", letterSpacing:"-.3px" }}>
              <option value="">Pick a month</option>
              {MONTHS.map(m => <option key={m} value={m} style={{ color:C.navy }}>{m}</option>)}
            </select>
            <div style={{ fontFamily:"'Epilogue',sans-serif", fontSize:11, color:"rgba(255,255,255,.3)", marginTop:3, fontWeight:300 }}>
              {month || "Any time works"}
            </div>
          </div>
        </div>

        {/* TRAVELERS */}
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:0, top:"20%", bottom:"20%", width:1, background:"rgba(255,255,255,.07)" }}/>
          <div style={{ padding:"16px 22px", borderRadius:16, transition:"background .2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.07)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:6 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={C.or} strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span style={{ fontFamily:"'Epilogue',sans-serif", fontSize:9, fontWeight:700, color:C.or, textTransform:"uppercase", letterSpacing:1.5 }}>Travelers</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <button onClick={() => setGuests(g => Math.max(1, g - 1))}
                style={{ width:26, height:26, borderRadius:"50%", border:"1px solid rgba(255,255,255,.2)", background:"rgba(255,255,255,.06)", color:"rgba(255,255,255,.7)", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", transition:"all .2s", flexShrink:0 }}
                onMouseEnter={e => { e.currentTarget.style.background = C.or; e.currentTarget.style.borderColor = C.or; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.2)"; e.currentTarget.style.color = "rgba(255,255,255,.7)"; }}
              >−</button>
              <span style={{ fontFamily:"'Anybody',sans-serif", fontSize:20, fontWeight:900, color:"#fff", minWidth:20, textAlign:"center" }}>{guests}</span>
              <button onClick={() => setGuests(g => g + 1)}
                style={{ width:26, height:26, borderRadius:"50%", border:"1px solid rgba(255,255,255,.2)", background:"rgba(255,255,255,.06)", color:"rgba(255,255,255,.7)", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", transition:"all .2s", flexShrink:0 }}
                onMouseEnter={e => { e.currentTarget.style.background = C.or; e.currentTarget.style.borderColor = C.or; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.2)"; e.currentTarget.style.color = "rgba(255,255,255,.7)"; }}
              >+</button>
            </div>
            <div style={{ fontFamily:"'Epilogue',sans-serif", fontSize:11, color:"rgba(255,255,255,.3)", marginTop:3, fontWeight:300 }}>
              person{guests > 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <button
          onMouseEnter={e => e.currentTarget.style.background = "#d44e1f"}
          onMouseLeave={e => e.currentTarget.style.background = C.or}
          style={{ background:C.or, border:"none", borderRadius:14, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6, padding:"0 28px", cursor:"pointer", minWidth:90, transition:"background .2s", flexShrink:0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <span style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:10, fontWeight:800, letterSpacing:"1px", textTransform:"uppercase" }}>Search</span>
        </button>
      </div>

      {/* ── Trending ── */}
      <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:20, flexWrap:"wrap" }}>
        <span style={{ fontFamily:"'Epilogue',sans-serif", fontSize:10, fontWeight:500, color:"rgba(255,255,255,.28)", textTransform:"uppercase", letterSpacing:1, display:"flex", alignItems:"center", gap:7 }}>
          Trending
          <span style={{ width:1, height:12, background:"rgba(255,255,255,.15)", display:"inline-block" }}/>
        </span>
        {TRENDING.map(tag => (
          <button key={tag} onMouseDown={() => setDest(tag)}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(242,92,39,.12)"; e.currentTarget.style.borderColor = "rgba(242,92,39,.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,.5)"; e.currentTarget.style.background = "rgba(255,255,255,.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; }}
            style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.1)", borderRadius:99, padding:"5px 14px", fontFamily:"'Epilogue',sans-serif", fontSize:11, fontWeight:500, color:"rgba(255,255,255,.5)", cursor:"pointer", transition:"all .2s", display:"flex", alignItems:"center", gap:5 }}>
            <span style={{ width:4, height:4, borderRadius:"50%", background:C.or, flexShrink:0 }}/>
            {tag}
          </button>
        ))}
        <span style={{ marginLeft:"auto", fontFamily:"'Epilogue',sans-serif", fontSize:10, color:"rgba(255,255,255,.2)", display:"flex", alignItems:"center", gap:5 }}>
          <span style={{ width:5, height:5, borderRadius:"50%", background:C.or, display:"inline-block" }}/>
          Free consultation · No hidden fees
        </span>
      </div>

    </div>
  );
}