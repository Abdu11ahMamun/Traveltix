// ── src/components/Marquee.jsx ─────────────────────────────────────────────
import { C } from "../constants/brand";

const ITEMS = ["Visa Processing","Flight Booking","Hotel Reservation","Tour Packages","Travel Insurance","Airport Transfers","Group Travel","Corporate Trips"];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{ background: C.or, padding: "13px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
      <div className="marquee-run" style={{ display: "inline-flex" }}>
        {doubled.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'Anybody',sans-serif", fontSize: 11, fontWeight: 800,
            letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.92)",
            padding: "0 26px", display: "inline-flex", alignItems: "center", gap: 10,
          }}>
            <span>✈</span>{t}
          </span>
        ))}
      </div>
    </div>
  );
}