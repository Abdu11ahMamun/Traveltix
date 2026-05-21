import { C, ASSETS } from "../constants/brand";

export default function WavyPattern({ height = 120, bg = C.navy }) {
  return (
    <div style={{
      background: bg,
      width: "100%",
      overflow: "hidden",
      lineHeight: 0,
      position: "relative",
    }}>
      {/* top fade */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"50%", background:`linear-gradient(to bottom,${bg},transparent)`, zIndex:4, pointerEvents:"none" }}/>

      {/* image */}
      <img
        src={ASSETS.brandPattern}
        alt=""
        style={{
          width:"100%", height:height,
          objectFit:"fill", display:"block",
          pointerEvents:"none", userSelect:"none",
          filter:"saturate(0.4) brightness(0.5) hue-rotate(200deg)",
        }}
      />

      {/* tint overlay — sits directly over image */}
      <div style={{ position:"absolute", inset:0, background:"rgba(2,28,65,.6)", zIndex:2, pointerEvents:"none" }}/>

      {/* center glow */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,rgba(242,92,39,.15) 0%,transparent 65%)", zIndex:3, pointerEvents:"none" }}/>

      {/* bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"50%", background:`linear-gradient(to top,${bg},transparent)`, zIndex:4, pointerEvents:"none" }}/>
    </div>
  );
}