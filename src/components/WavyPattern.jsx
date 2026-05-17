import { C, ASSETS } from "../constants/brand";

export default function WavyPattern({ height = 240, bg = C.navy }) {
  return (
    <div style={{
      background: bg,
      width: "100%",
      lineHeight: 0, // removes inline gap under img
      overflow: "hidden",
    }}>
      <img
        src={ASSETS.brandPattern}
        alt=""
        style={{
          width: "100%",
          height: height,
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
}