// ── src/components/BrandTone.jsx ───────────────────────────────────────────
import { C } from "../constants/brand";

const PILLS   = ["Clear","Warm","Transparent","Human","Honest","Approachable"];
const FILLED  = ["Human","Honest"];

export default function BrandTone() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 420 }}>
      {/* Left – sky blue */}
      <div style={{ background: C.sky, padding: "60px 54px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 36, fontWeight: 900, color: C.navy, marginBottom: 20 }}>Brand Tone</h2>
        <div style={{ width: 28, height: 3, background: C.or, borderRadius: 2, marginBottom: 18 }} />
        <p style={{ fontSize: 13, color: C.navy, lineHeight: 1.9, maxWidth: 320 }}>
          Traveltix is a trusted travel companion who takes care of every detail with care and expertise, making clients feel confident and excited about their trips.
        </p>
      </div>
      {/* Right – lace */}
      <div style={{ background: C.lace, padding: "60px 54px" }}>
        <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 36, fontWeight: 700, color: C.or, marginBottom: 36 }}>Personality</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          {PILLS.map(p => (
            <span key={p} className="pill-item" style={{
              border: `2px solid ${FILLED.includes(p) ? C.navy : C.or}`,
              color:      FILLED.includes(p) ? "#fff"   : C.navy,
              background: FILLED.includes(p) ? C.navy   : "transparent",
              fontFamily: "'Anybody',sans-serif", fontSize: 13, fontWeight: 800,
              padding: "9px 22px", borderRadius: 30, transition: "all .25s", cursor: "default",
            }}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}