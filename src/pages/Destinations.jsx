// ╔══════════════════════════════════════════════════════╗
// ║  src/pages/Destinations.jsx                         ║
// ╚══════════════════════════════════════════════════════╝
import { useState } from "react";
import { C, DESTINATIONS } from "../constants/brand";
import Eyebrow from "../components/shared/Eyebrow";
import BtnOr   from "../components/shared/BtnOr";
import WavyPattern from "../components/WavyPattern";

const CATS = ["All","Indonesia","Turkey","Thailand","Japan","Malaysia","Maldives","Singapore","Nepal","Bhutan","Sri Lanka"];

export default function Destinations() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? DESTINATIONS : DESTINATIONS.filter(d => d.cat === filter);
  return (
    <div>
      <div style={{ background:C.navy, padding:"140px 60px 80px", position:"relative", overflow:"hidden" }}>
        <WavyPattern color={C.or} height={300} bg="transparent"/>
        <div style={{ position:"relative", zIndex:2 }}>
          <Eyebrow txt="Explore" light/>
          <h1 style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:60, fontWeight:900, marginBottom:14 }}>Our <em style={{ color:C.or, fontStyle:"normal" }}>Destinations</em></h1>
          <p style={{ color:"rgba(255,255,255,.6)", fontSize:15, maxWidth:500, lineHeight:1.85 }}>48+ handpicked destinations across Asia — from pristine beaches to ancient temples.</p>
        </div>
      </div>
      <section style={{ padding:"88px 60px", background:C.lace }}>
        <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:40 }}>
          {CATS.map(c => (
            <button key={c} onClick={()=>setFilter(c)} style={{ padding:"10px 22px", fontFamily:"'Anybody',sans-serif", fontSize:12, fontWeight:800, borderRadius:30, border:`1.5px solid ${filter===c?C.navy:"rgba(2,28,65,.2)"}`, background:filter===c?C.navy:"#fff", color:filter===c?C.or:C.navy, cursor:"pointer", letterSpacing:".5px", textTransform:"uppercase", transition:"all .25s" }}>{c}</button>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:22 }}>
          {shown.map((d,i) => (
            <div key={i} style={{ borderRadius:14, overflow:"hidden", background:"#fff", border:"1px solid rgba(2,28,65,.07)", transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 14px 40px rgba(2,28,65,.12)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
              <div style={{ position:"relative", height:220, overflow:"hidden" }}>
                <img src={d.img} alt={d.name} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .5s" }}
                  onMouseEnter={e=>e.currentTarget.style.transform="scale(1.06)"}
                  onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}/>
                <div style={{ position:"absolute", top:12, left:12, background:C.or, color:"#fff", fontFamily:"'Anybody',sans-serif", fontSize:9, fontWeight:800, padding:"3px 10px", borderRadius:3, textTransform:"uppercase", letterSpacing:"1.5px" }}>{d.cat}</div>
                <div style={{ position:"absolute", top:12, right:12, background:"rgba(2,28,65,.8)", color:"#fff", fontFamily:"'Anybody',sans-serif", fontSize:12, fontWeight:800, padding:"5px 12px", borderRadius:6 }}>From {d.price}</div>
              </div>
              <div style={{ padding:20 }}>
                <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:18, fontWeight:900, color:C.navy, marginBottom:4 }}>{d.name}</h4>
                <p style={{ fontSize:12, color:"#94a3b8", marginBottom:14 }}>📍 {d.sub}</p>
                <BtnOr style={{ width:"100%", justifyContent:"center", fontSize:11, padding:"11px" }}>View Package</BtnOr>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}