// ── src/components/shared/Eyebrow.jsx ──────────────────────────────────────
import { C } from "../../constants/brand";

export default function Eyebrow({ txt, light = false, center = false }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, marginBottom: 10,
      justifyContent: center ? "center" : "flex-start",
    }}>
      <div style={{ width: 26, height: 3, background: C.or, borderRadius: 2, flexShrink: 0 }} />
      <span style={{
        fontFamily: "'Anybody',sans-serif", fontSize: 10, fontWeight: 800,
        color: light ? C.sky : C.or, letterSpacing: "2.5px", textTransform: "uppercase",
      }}>{txt}</span>
      {center && <div style={{ width: 26, height: 3, background: C.or, borderRadius: 2, flexShrink: 0 }} />}
    </div>
  );
}