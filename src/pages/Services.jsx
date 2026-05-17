
// ╔══════════════════════════════════════════════════════╗
// ║  src/pages/Services.jsx                             ║
// ╚══════════════════════════════════════════════════════╝
import { C, SERVICES } from "../constants/brand";
import Eyebrow     from "../components/shared/Eyebrow";
import BtnOr       from "../components/shared/BtnOr";
import WavyPattern from "../components/WavyPattern";

export default function Services() {
  return (
    <div>
      <div style={{ background:C.lace, padding:"140px 60px 80px", position:"relative", overflow:"hidden" }}>
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:.4 }} viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice">
          <path d="M-80 150 Q360 50 720 200 Q1080 350 1520 150" stroke={C.sun} strokeWidth="28" fill="none" strokeLinecap="round"/>
          <path d="M-80 350 Q360 250 720 400 Q1080 550 1520 350" stroke={C.sun} strokeWidth="28" fill="none" strokeLinecap="round"/>
        </svg>
        <div style={{ position:"relative", zIndex:2 }}>
          <Eyebrow txt="What We Offer"/>
          <h1 style={{ fontFamily:"'Anybody',sans-serif", color:C.navy, fontSize:60, fontWeight:900, marginBottom:14 }}>Our <em style={{ color:C.or, fontStyle:"normal" }}>Services</em></h1>
          <p style={{ color:"#5a6a7a", fontSize:15, maxWidth:500, lineHeight:1.85 }}>End-to-end travel management — from your first inquiry to your safe return home.</p>
        </div>
      </div>
      <section style={{ padding:"88px 60px", background:"#fff" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {SERVICES.map((s,i) => (
            <div key={i} className="card-wrap" style={{ background:C.lace, borderRadius:14, padding:"36px 28px", border:"1px solid rgba(2,28,65,.07)", transition:"all .3s", position:"relative", overflow:"hidden" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow="0 18px 48px rgba(2,28,65,.1)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
              <div className="card-topbar"/>
              <div style={{ fontSize:36, marginBottom:16 }}>{s.icon}</div>
              <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:20, fontWeight:900, color:C.navy, marginBottom:12 }}>{s.t}</h4>
              <p style={{ fontSize:13, color:"#5a6a7a", lineHeight:1.85, marginBottom:20 }}>{s.p}</p>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:8 }}>
                {s.items.map((it,j) => (
                  <li key={j} style={{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:C.navy, fontWeight:500 }}>
                    <span style={{ width:6, height:6, background:C.or, borderRadius:"50%", flexShrink:0 }}/>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background:C.navy, padding:"80px 60px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <WavyPattern color={C.or} height={200} bg="transparent"/>
        <div style={{ position:"relative", zIndex:2 }}>
          <h2 style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:44, fontWeight:900, marginBottom:14 }}>Ready to <em style={{ color:C.or, fontStyle:"normal" }}>Start Planning?</em></h2>
          <p style={{ color:"rgba(255,255,255,.6)", fontSize:15, maxWidth:440, margin:"0 auto 30px", lineHeight:1.85 }}>Get a free consultation with our travel experts today.</p>
          <BtnOr style={{ fontSize:14, padding:"14px 36px" }}>Book Free Consultation</BtnOr>
        </div>
      </section>
    </div>
  );
}