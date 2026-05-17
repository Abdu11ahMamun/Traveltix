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

export default function SearchBar() {
  const [dest, setDest]         = useState("");
  const [tripType, setTripType] = useState("");
  const [month, setMonth]       = useState("");
  const [guests, setGuests]     = useState(2);
  const [showDrop, setShowDrop] = useState(false);

  const filtered = dest.length > 0
    ? ALL_DESTINATIONS.filter(d => d.toLowerCase().includes(dest.toLowerCase()))
    : ALL_DESTINATIONS;

  return (
    <div style={{ background: C.navy, padding: "32px 60px 44px" }}>

      {/* ── Tab row ── */}
      <div style={{ display: "flex", gap: 4, marginBottom: 0 }}>
        {["Package Tour", "Visa & Flights", "Hotel Only"].map((tab, i) => (
          <button key={tab} style={{
            padding: "11px 26px",
            fontFamily: "'Anybody',sans-serif",
            fontSize: 12, fontWeight: 800,
            letterSpacing: ".8px", textTransform: "uppercase",
            border: "none", cursor: "pointer",
            borderRadius: "8px 8px 0 0",
            background: i === 0 ? "#fff" : "rgba(255,255,255,.08)",
            color: i === 0 ? C.navy : "rgba(255,255,255,.45)",
            transition: "all .2s",
          }}
            onMouseEnter={e => { if (i !== 0) { e.currentTarget.style.background = "rgba(255,255,255,.14)"; e.currentTarget.style.color = "#fff"; }}}
            onMouseLeave={e => { if (i !== 0) { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.style.color = "rgba(255,255,255,.45)"; }}}
          >{tab}</button>
        ))}
      </div>

      {/* ── Search panel ── */}
      <div style={{
        background: "#fff",
        borderRadius: "0 12px 12px 12px",
        display: "flex",
        alignItems: "stretch",
        boxShadow: "0 20px 60px rgba(0,0,0,.25)",
        overflow: "visible",
        position: "relative",
      }}>

        {/* WHERE TO */}
        <div style={{ flex: "1.4", padding: "18px 24px", position: "relative", borderRight: "1px solid #f0f0f0" }}>
          <label style={{ display: "block", fontFamily: "'Anybody',sans-serif", fontSize: 10, fontWeight: 800, color: C.or, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 6 }}>
            📍 Where to?
          </label>
          <input
            value={dest}
            onChange={e => { setDest(e.target.value); setShowDrop(true); }}
            onFocus={() => setShowDrop(true)}
            onBlur={() => setTimeout(() => setShowDrop(false), 180)}
            placeholder="Search destinations..."
            style={{ width: "100%", border: "none", outline: "none", fontSize: 15, fontWeight: 600, color: C.navy, fontFamily: "'Epilogue',sans-serif", background: "transparent", padding: 0 }}
          />
          <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4, fontFamily: "'Epilogue',sans-serif" }}>
            {dest || "Any destination"}
          </div>
          {/* Dropdown */}
          {showDrop && (
            <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: "#fff", borderRadius: 10, boxShadow: "0 12px 40px rgba(2,28,65,.18)", zIndex: 999, maxHeight: 240, overflowY: "auto", border: "1px solid rgba(2,28,65,.08)" }}>
              {filtered.map((d, i) => (
                <div key={i} onMouseDown={() => { setDest(d); setShowDrop(false); }}
                  style={{ padding: "10px 16px", fontSize: 13, color: C.navy, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontFamily: "'Epilogue',sans-serif", borderBottom: "1px solid rgba(2,28,65,.04)", transition: "background .15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = C.lace}
                  onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                >
                  <span style={{ color: C.or, fontSize: 12 }}>📍</span>{d}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TRIP TYPE */}
        <div style={{ flex: "1", padding: "18px 24px", borderRight: "1px solid #f0f0f0" }}>
          <label style={{ display: "block", fontFamily: "'Anybody',sans-serif", fontSize: 10, fontWeight: 800, color: C.or, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 6 }}>
            ✈ Trip Type
          </label>
          <select
            value={tripType}
            onChange={e => setTripType(e.target.value)}
            style={{ width: "100%", border: "none", outline: "none", fontSize: 15, fontWeight: 600, color: tripType ? C.navy : "#94a3b8", fontFamily: "'Epilogue',sans-serif", background: "transparent", padding: 0, cursor: "pointer", appearance: "none" }}
          >
            <option value="">Select type...</option>
            {TRIP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{tripType || "Any type"}</div>
        </div>

        {/* WHEN */}
        <div style={{ flex: "1", padding: "18px 24px", borderRight: "1px solid #f0f0f0" }}>
          <label style={{ display: "block", fontFamily: "'Anybody',sans-serif", fontSize: 10, fontWeight: 800, color: C.or, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 6 }}>
            📅 When
          </label>
          <select
            value={month}
            onChange={e => setMonth(e.target.value)}
            style={{ width: "100%", border: "none", outline: "none", fontSize: 15, fontWeight: 600, color: month ? C.navy : "#94a3b8", fontFamily: "'Epilogue',sans-serif", background: "transparent", padding: 0, cursor: "pointer", appearance: "none" }}
          >
            <option value="">Pick a month...</option>
            {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{month || "Any time"}</div>
        </div>

        {/* TRAVELERS */}
        <div style={{ flex: "0.8", padding: "18px 24px", borderRight: "1px solid #f0f0f0", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <label style={{ display: "block", fontFamily: "'Anybody',sans-serif", fontSize: 10, fontWeight: 800, color: C.or, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 10 }}>
            👥 Travelers
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button onClick={() => setGuests(g => Math.max(1, g - 1))} style={{ width: 30, height: 30, borderRadius: "50%", border: `2px solid ${C.navy}`, background: "transparent", cursor: "pointer", fontSize: 18, color: C.navy, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 400, lineHeight: 1, flexShrink: 0 }}>−</button>
            <span style={{ fontFamily: "'Anybody',sans-serif", fontSize: 22, fontWeight: 900, color: C.navy, minWidth: 24, textAlign: "center" }}>{guests}</span>
            <button onClick={() => setGuests(g => g + 1)} style={{ width: 30, height: 30, borderRadius: "50%", border: `2px solid ${C.navy}`, background: "transparent", cursor: "pointer", fontSize: 18, color: C.navy, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 400, lineHeight: 1, flexShrink: 0 }}>+</button>
          </div>
          <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>person{guests > 1 ? "s" : ""}</div>
        </div>

        {/* SEARCH BUTTON */}
        <button style={{
          background: C.or,
          border: "none",
          borderRadius: "0 12px 12px 0",
          padding: "0 40px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          transition: "background .25s",
          flexShrink: 0,
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#d44e1e"}
          onMouseLeave={e => e.currentTarget.style.background = C.or}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <span style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 11, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase" }}>Search</span>
        </button>
      </div>

      {/* ── Trending ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Anybody',sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.35)", letterSpacing: "1.5px", textTransform: "uppercase" }}>Trending:</span>
        {TRENDING.map(tag => (
          <button key={tag} onMouseDown={() => setDest(tag)} style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,.2)",
            borderRadius: 20, padding: "5px 16px",
            fontFamily: "'Anybody',sans-serif",
            fontSize: 12, fontWeight: 700,
            color: "rgba(255,255,255,.6)",
            cursor: "pointer", transition: "all .2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = C.or; e.currentTarget.style.borderColor = C.or; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,.2)"; e.currentTarget.style.color = "rgba(255,255,255,.6)"; }}
          >✈ {tag}</button>
        ))}
      </div>

    </div>
  );
}