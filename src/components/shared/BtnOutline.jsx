// ── src/components/shared/BtnOutline.jsx ───────────────────────────────────
import { C } from "../../constants/brand";

export default function BtnOutline({ children, onClick, dark = false, style = {} }) {
  const borderColor = dark ? C.navy : "rgba(255,255,255,.38)";
  const textColor   = dark ? C.navy : "#fff";
  const hoverBorder = dark ? C.or   : C.sky;
  const hoverText   = dark ? C.or   : C.sky;

  return (
    <button onClick={onClick} style={{
      border: `1.5px solid ${borderColor}`, color: textColor, background: "transparent",
      fontFamily: "'Anybody',sans-serif", fontSize: 12, fontWeight: 700,
      padding: "12px 24px", borderRadius: 6, letterSpacing: ".5px",
      textTransform: "uppercase", display: "inline-flex", alignItems: "center",
      gap: 8, transition: "all .25s", cursor: "pointer", ...style,
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = hoverBorder; e.currentTarget.style.color = hoverText; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.color = textColor; }}
    >
      {children}
    </button>
  );
}