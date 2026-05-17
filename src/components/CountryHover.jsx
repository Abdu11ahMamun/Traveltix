// ── src/components/CountryHover.jsx ───────────────────────────────────────
import { useState } from "react";
import { C, COUNTRY_DATA } from "../constants/brand";

export default function CountryHover() {
  const [active, setActive] = useState(0);
  return (
    <div style={{ position: "relative", height: "88vh", minHeight: 560, overflow: "hidden" }}>
      {/* Slide backgrounds */}
      {COUNTRY_DATA.map((c, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('${c.img}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: i === active ? 1 : 0, transition: "opacity .65s ease",
        }} />
      ))}

      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(2,28,65,.4),rgba(2,28,65,.18) 50%,rgba(2,28,65,.62) 100%)", zIndex: 1, pointerEvents: "none" }} />

      {/* Country columns */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", height: "100%" }}>
        {COUNTRY_DATA.map((c, i) => (
          <div key={i} onMouseEnter={() => setActive(i)} style={{
            flex: i === active ? 2.5 : 1,
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "flex-start", paddingTop: 30, cursor: "pointer",
            borderRight: i < COUNTRY_DATA.length - 1 ? "1px solid rgba(255,255,255,.18)" : "none",
            transition: "flex .55s cubic-bezier(.4,0,.2,1)", position: "relative",
            background: i === active ? "rgba(242,92,39,.06)" : "transparent",
          }}>
            <span style={{ fontFamily: "'Anybody',sans-serif", color: i === active ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.5)", fontSize: 9, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", marginBottom: 10, transition: "color .3s" }}>Visit</span>
            <span style={{
              fontFamily: "'Anybody',sans-serif", color: "#fff", fontWeight: 900,
              opacity: i === active ? 1 : .6, transition: "all .4s",
              ...(i === active
                ? { fontSize: 52, writingMode: "horizontal-tb", transform: "none", margin: "auto 0", padding: "0 20px", lineHeight: 1, textShadow: "0 4px 24px rgba(0,0,0,.4)" }
                : { fontSize: 17, writingMode: "vertical-rl", transform: "rotate(180deg)" }
              ),
            }}>{c.name}</span>
            {i === active && (
              <a style={{ display: "inline-block", marginTop: 18, background: C.or, color: "#fff", fontFamily: "'Anybody',sans-serif", fontSize: 11, fontWeight: 800, padding: "10px 22px", borderRadius: 5, letterSpacing: ".8px", textTransform: "uppercase" }}>
                Explore →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}