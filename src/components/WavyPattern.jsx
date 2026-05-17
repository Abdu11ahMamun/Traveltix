
// ── src/components/WavyPattern.jsx ─────────────────────────────────────────
import { C } from "../constants/brand";

export default function WavyPattern({ color = C.or, height = 200, bg = C.navy }) {
  const h = height;
  return (
    <div style={{ background: bg, height, position: "relative", overflow: "hidden" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox={`0 0 1440 ${h}`} preserveAspectRatio="xMidYMid slice">
        <path
          d={`M-80 ${h*.25} Q180 ${h*.05} 360 ${h*.35} Q540 ${h*.65} 720 ${h*.25} Q900 ${-h*.05} 1080 ${h*.3} Q1260 ${h*.65} 1440 ${h*.3} Q1480 ${h*.25} 1540 ${h*.3}`}
          stroke={color} strokeWidth="32" fill="none" strokeLinecap="round" />
        <path
          d={`M-80 ${h*.65} Q180 ${h*.45} 360 ${h*.75} Q540 ${h} 720 ${h*.65} Q900 ${h*.3} 1080 ${h*.7} Q1260 ${h} 1440 ${h*.7} Q1480 ${h*.65} 1540 ${h*.7}`}
          stroke={color} strokeWidth="32" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
