// ── src/components/shared/BtnOr.jsx ────────────────────────────────────────
import { C } from "../../constants/brand";

export default function BtnOr({ children, onClick, style = {} }) {
  return (
    <button onClick={onClick} style={{
      background: C.or, color: "#fff", fontFamily: "'Anybody',sans-serif",
      fontSize: 12, fontWeight: 800, padding: "13px 28px", borderRadius: 6,
      letterSpacing: ".5px", textTransform: "uppercase", border: "none",
      display: "inline-flex", alignItems: "center", gap: 8,
      transition: "all .25s", cursor: "pointer", ...style,
    }}
      onMouseEnter={e => { e.currentTarget.style.background = "#d44e1e"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = C.or;      e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {children}
    </button>
  );
}


