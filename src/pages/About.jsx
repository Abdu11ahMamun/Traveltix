// ╔══════════════════════════════════════════════════════╗
// ║  src/pages/About.jsx                                ║
// ╚══════════════════════════════════════════════════════╝
import { C, ASSETS, CONTACT } from "../constants/brand";
import Eyebrow   from "../components/shared/Eyebrow";
import BrandTone from "../components/BrandTone";

export default function About() {
  return (
    <div>
      <div style={{ background:C.navy, padding:"140px 60px 0", position:"relative", overflow:"hidden" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"flex-end" }}>
          <div style={{ paddingBottom:80 }}>
            <Eyebrow txt="About Traveltix" light/>
            <h1 style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:56, fontWeight:900, lineHeight:1.05, marginBottom:20 }}>We Make Travel<br/><em style={{ color:C.or, fontStyle:"normal" }}>Effortless</em></h1>
            <p style={{ color:"rgba(255,255,255,.6)", fontSize:15, lineHeight:1.9, maxWidth:460 }}>Traveltix BD is a trusted travel companion who takes care of every detail with care and expertise, making clients feel confident and excited about their trips — from visa to arrival.</p>
            <div style={{ display:"flex", gap:32, marginTop:40 }}>
              {[["12K+","Happy Travelers"],["48+","Destinations"],["10+","Years Experience"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:36, fontWeight:900 }}><span style={{ color:C.or }}>{n}</span></div>
                  <div style={{ color:"rgba(255,255,255,.5)", fontSize:12, marginTop:4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={ASSETS.bhutan.tigerNest} alt="About" style={{ width:"100%", height:420, objectFit:"cover", borderRadius:"14px 14px 0 0" }}/>
        </div>
      </div>

      <section style={{ padding:"88px 60px", background:C.lace }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>
          <div>
            <Eyebrow txt="Our Mission"/>
            <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:40, fontWeight:900, color:C.navy, marginBottom:20 }}>Mission & <em style={{ color:C.or, fontStyle:"normal" }}>Vision</em></h2>
            <div style={{ marginBottom:28 }}>
              <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:18, fontWeight:800, color:C.navy, marginBottom:8 }}>Mission</h4>
              <p style={{ fontSize:14, color:"#5a6a7a", lineHeight:1.9 }}>To turn travel into a stress-free, tailored experience through clear guidance, thorough support, and a trusted partnership from visa to departure and beyond. We make sure your journey is smooth, well-planned and memorable even with your family.</p>
            </div>
            <div>
              <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:18, fontWeight:800, color:C.navy, marginBottom:8 }}>Vision</h4>
              <p style={{ fontSize:14, color:"#5a6a7a", lineHeight:1.9 }}>We want to redefine your travel experience by delivering proactive care, sophisticated service, and dependable expertise that enables seamless exploration of new horizons.</p>
            </div>
          </div>
          <img src={ASSETS.nepal.pokhara1} alt="Mission" style={{ width:"100%", height:400, objectFit:"cover", borderRadius:14 }}/>
        </div>
      </section>

      <BrandTone/>

      <section style={{ padding:"88px 60px", background:"#fff" }}>
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <Eyebrow txt="Our Team" center/>
          <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:44, fontWeight:900, color:C.navy, marginTop:10 }}>Meet the <em style={{ color:C.or, fontStyle:"normal" }}>People</em></h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:22 }}>
          {[
            { name:"Rahim Uddin",      role:"CEO & Founder",         init:"RU" },
            { name:"Nadia Hossain",    role:"Head of Operations",    init:"NH" },
            { name:"Arif Chowdhury",   role:"Lead Travel Advisor",   init:"AC" },
            { name:"Sadia Islam",      role:"Visa Specialist",       init:"SI" },
          ].map((m,i) => (
            <div key={i} style={{ background:C.lace, borderRadius:14, padding:"32px 24px", textAlign:"center", border:"1px solid rgba(2,28,65,.07)", transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 36px rgba(2,28,65,.1)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
              <div style={{ width:72, height:72, borderRadius:"50%", background:i%2===0?C.or:C.navy, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Anybody',sans-serif", color:"#fff", fontWeight:900, fontSize:22, margin:"0 auto 16px" }}>{m.init}</div>
              <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:16, fontWeight:800, color:C.navy, marginBottom:4 }}>{m.name}</h4>
              <p style={{ fontSize:12, color:"#94a3b8" }}>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding:"88px 60px", background:C.lace }}>
        <div style={{ textAlign:"center", marginBottom:48 }}>
          <Eyebrow txt="Find Us" center/>
          <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:40, fontWeight:900, color:C.navy, marginTop:10 }}>Contact <em style={{ color:C.or, fontStyle:"normal" }}>Information</em></h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:22 }}>
          {[
            { icon:"📍", t:"Our Office",  lines:[CONTACT.address] },
            { icon:"📞", t:"Phone",       lines:[CONTACT.phone] },
            { icon:"✉",  t:"Email",       lines:[CONTACT.emails.info, CONTACT.emails.admin, CONTACT.emails.hr] },
          ].map((c,i) => (
            <div key={i} style={{ background:"#fff", borderRadius:14, padding:"32px 28px", border:"1px solid rgba(2,28,65,.07)", textAlign:"center" }}>
              <div style={{ fontSize:36, marginBottom:14 }}>{c.icon}</div>
              <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:17, fontWeight:800, color:C.navy, marginBottom:12 }}>{c.t}</h4>
              {c.lines.map((l,j) => <p key={j} style={{ fontSize:13, color:"#5a6a7a", lineHeight:1.8 }}>{l}</p>)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}