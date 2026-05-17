import { C, ASSETS } from "../constants/brand";

export default function WavyPattern({ height = 200, bg = C.navy, opacity = 1 }) {
  return (
    <div style={{
      background: bg,
      height,
      position: "relative",
      overflow: "hidden",
    }}>
      <img
        src={ASSETS.brandPattern}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
}