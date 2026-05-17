// ╔══════════════════════════════════════════════════════╗
// ║  src/pages/Career.jsx                               ║
// ╚══════════════════════════════════════════════════════╝
import { useState } from "react";
import { C, ASSETS, JOBS, CONTACT } from "../constants/brand";
import Eyebrow     from "../components/shared/Eyebrow";
import BtnOr       from "../components/shared/BtnOr";
import WavyPattern from "../components/WavyPattern";

const PERKS = [
  { icon:"✈",  t:"Free Travel Perks",  p:"Annual travel allowance + discounted packages for all team members" },
  { icon:"📈", t:"Career Growth",      p:"Clear promotion pathways and mentorship from industry leaders" },
  { icon:"🏥", t:"Health Benefits",    p:"Comprehensive health insurance covering you and your family" },
  { icon:"🕐", t:"Flexible Hours",     p:"Hybrid work model with flexible scheduling options" },
  { icon:"🎓", t:"Learning Budget",    p:"Annual L&D budget for courses, certifications and conferences" },
  { icon:"🎉", t:"Team Culture",       p:"Vibrant team events, retreats, and a genuinely supportive environment" },
];

function JobCard({ job }) {
  const [open, setOpen]   = useState(false);
  const [form, setForm]   = useState({ name:"", email:"", phone:"", cover:"" });
  const [sent, setSent]   = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setOpen(false);
    setForm({ name:"", email:"", phone:"", cover:"" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div style={{ background:C.lace, borderRadius:12, border:`1px solid ${open?C.or:"rgba(2,28,65,.08)"}`, overflow:"hidden", transition:"border-color .3s" }}>
      <div onClick={()=>setOpen(!open)} style={{ padding:"24px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer" }}>
        <div>
          <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:17, fontWeight:900, color:C.navy, marginBottom:8 }}>{job.title}</h4>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {[job.dept, job.type, `📍 ${job.loc}`, `${job.exp} exp.`].map((tag,i) => (
              <span key={i} style={{ background:i===0?"rgba(242,92,39,.12)":"#fff", color:i===0?C.or:"#5a6a7a", fontFamily:"'Anybody',sans-serif", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:4, border:"1px solid rgba(2,28,65,.08)", textTransform:"uppercase", letterSpacing:".8px" }}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          {sent && <span style={{ color:"#16a34a", fontFamily:"'Anybody',sans-serif", fontSize:12, fontWeight:700 }}>✅ Submitted!</span>}
          <BtnOr style={{ fontSize:11, padding:"8px 18px" }}>Apply Now</BtnOr>
          <span style={{ fontFamily:"'Anybody',sans-serif", fontSize:20, color:C.or, transform:open?"rotate(180deg)":"rotate(0)", transition:"transform .3s", display:"block" }}>▾</span>
        </div>
      </div>
      {open && (
        <div style={{ padding:"0 28px 28px", borderTop:"1px solid rgba(2,28,65,.08)" }}>
          <p style={{ fontSize:14, color:"#5a6a7a", lineHeight:1.85, margin:"20px 0 24px" }}>{job.desc}</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:12 }}>
            {[{label:"Full Name",key:"name",type:"text",ph:"Your full name"},{label:"Email",key:"email",type:"email",ph:"your@email.com"},{label:"Phone",key:"phone",type:"tel",ph:"+880 XXXX XXXXXX"}].map(f => (
              <div key={f.key}>
                <label style={{ fontFamily:"'Anybody',sans-serif", color:C.navy, fontSize:11, fontWeight:700, display:"block", marginBottom:5, textTransform:"uppercase", letterSpacing:".5px" }}>{f.label}</label>
                <input type={f.type} placeholder={f.ph} value={form[f.key]} onChange={e=>setForm({...form,[f.key]:e.target.value})}
                  style={{ width:"100%", background:"#fff", border:"1.5px solid rgba(2,28,65,.15)", borderRadius:7, padding:"10px 12px", color:C.navy, fontSize:13, outline:"none" }}/>
              </div>
            ))}
          </div>
          <label style={{ fontFamily:"'Anybody',sans-serif", color:C.navy, fontSize:11, fontWeight:700, display:"block", marginBottom:5, textTransform:"uppercase", letterSpacing:".5px" }}>Why are you a great fit?</label>
          <textarea placeholder={`Tell us why you're perfect for the ${job.title} role...`} value={form.cover} onChange={e=>setForm({...form,cover:e.target.value})} rows={3}
            style={{ width:"100%", background:"#fff", border:"1.5px solid rgba(2,28,65,.15)", borderRadius:7, padding:"10px 12px", color:C.navy, fontSize:13, outline:"none", resize:"vertical", marginBottom:16 }}/>
          <BtnOr onClick={handleSubmit}>Submit Application →</BtnOr>
        </div>
      )}
    </div>
  );
}

export default function Career() {
  const [genForm, setGenForm] = useState({ name:"", email:"", phone:"", position:"", cover:"" });
  const [genSent, setGenSent] = useState(false);
  const handleGen = () => { setGenSent(true); setGenForm({ name:"", email:"", phone:"", position:"", cover:"" }); setTimeout(()=>setGenSent(false),4000); };

  return (
    <div>
      {/* HERO */}
      <div style={{ background:C.navy, padding:"140px 60px 80px", position:"relative", overflow:"hidden" }}>
        <WavyPattern color={C.or} height={400} bg="transparent"/>
        <div style={{ position:"relative", zIndex:2, display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }}>
          <div>
            <Eyebrow txt="Join Our Team" light/>
            <h1 style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:56, fontWeight:900, lineHeight:1.05, marginBottom:20 }}>Build Your Career<br/>in <em style={{ color:C.or, fontStyle:"normal" }}>Travel</em></h1>
            <p style={{ color:"rgba(255,255,255,.6)", fontSize:15, lineHeight:1.9, maxWidth:440, marginBottom:32 }}>Join a passionate team that makes travel effortless for thousands of people. We're always looking for talented individuals who share our love for exploration and hospitality.</p>
            <div style={{ display:"flex", gap:32 }}>
              {[["6","Open Positions"],["50+","Team Members"],["4.8★","Glassdoor Rating"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:30, fontWeight:900 }}><span style={{ color:C.or }}>{n}</span></div>
                  <div style={{ color:"rgba(255,255,255,.5)", fontSize:12, marginTop:3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={ASSETS.indonesia.ubud2} alt="Team" style={{ width:"100%", height:380, objectFit:"cover", borderRadius:14 }}/>
        </div>
      </div>

      {/* PERKS */}
      <section style={{ padding:"88px 60px", background:C.lace }}>
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <Eyebrow txt="Why Work With Us" center/>
          <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:44, fontWeight:900, color:C.navy, marginTop:10 }}>Perks & <em style={{ color:C.or, fontStyle:"normal" }}>Benefits</em></h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {PERKS.map((p,i) => (
            <div key={i} style={{ background:"#fff", borderRadius:12, padding:"28px 24px", border:"1px solid rgba(2,28,65,.07)", display:"flex", gap:16, alignItems:"flex-start", transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 36px rgba(2,28,65,.1)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
              <div style={{ width:48, height:48, background:"rgba(242,92,39,.1)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{p.icon}</div>
              <div>
                <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:15, fontWeight:800, color:C.navy, marginBottom:6 }}>{p.t}</h4>
                <p style={{ fontSize:13, color:"#5a6a7a", lineHeight:1.75 }}>{p.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section style={{ padding:"88px 60px", background:"#fff" }}>
        <div style={{ marginBottom:48 }}>
          <Eyebrow txt="Open Roles"/>
          <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:44, fontWeight:900, color:C.navy }}>Current <em style={{ color:C.or, fontStyle:"normal" }}>Openings</em></h2>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          {JOBS.map((j,i) => <JobCard key={i} job={j}/>)}
        </div>
      </section>

      {/* GENERAL APPLICATION */}
      <section style={{ background:C.navy, padding:"88px 60px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"start" }}>
          <div>
            <Eyebrow txt="General Application" light/>
            <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:40, fontWeight:900, color:"#fff", marginBottom:16 }}>Don't See Your <em style={{ color:C.or, fontStyle:"normal" }}>Role?</em></h2>
            <p style={{ color:"rgba(255,255,255,.6)", fontSize:14, lineHeight:1.9, marginBottom:28 }}>We're always interested in meeting talented people. Send us your CV and tell us how you'd like to contribute to the Traveltix mission.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[
                { icon:"📧", t:"HR Email",       v:CONTACT.emails.hr },
                { icon:"📍", t:"Walk-in Address", v:CONTACT.address },
                { icon:"📞", t:"HR Contact",      v:CONTACT.phone },
              ].map((c,i) => (
                <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                  <span style={{ fontSize:20, marginTop:2 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily:"'Anybody',sans-serif", color:C.sky, fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:3 }}>{c.t}</div>
                    <div style={{ color:"rgba(255,255,255,.75)", fontSize:13 }}>{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", borderRadius:14, padding:"36px 32px" }}>
            <h4 style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:20, fontWeight:800, marginBottom:24 }}>General Application</h4>
            {genSent && <div style={{ background:"rgba(22,163,74,.15)", border:"1.5px solid rgba(22,163,74,.4)", borderRadius:8, padding:"12px 16px", marginBottom:18, color:"#4ade80", fontFamily:"'Anybody',sans-serif", fontSize:13, fontWeight:700 }}>✅ Application submitted! We'll be in touch soon.</div>}
            {[{label:"Full Name",key:"name",type:"text",ph:"Your full name"},{label:"Email Address",key:"email",type:"email",ph:"your@email.com"},{label:"Phone Number",key:"phone",type:"tel",ph:"+880 XXXX XXXXXX"},{label:"Position of Interest",key:"position",type:"text",ph:"e.g. Travel Consultant"}].map(f => (
              <div key={f.key} style={{ marginBottom:14 }}>
                <label style={{ fontFamily:"'Anybody',sans-serif", color:"rgba(255,255,255,.7)", fontSize:11, fontWeight:700, display:"block", marginBottom:5, textTransform:"uppercase", letterSpacing:".5px" }}>{f.label}</label>
                <input type={f.type} placeholder={f.ph} value={genForm[f.key]} onChange={e=>setGenForm({...genForm,[f.key]:e.target.value})}
                  style={{ width:"100%", background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.12)", borderRadius:7, padding:"11px 14px", color:"#fff", fontSize:13, outline:"none" }}/>
              </div>
            ))}
            <div style={{ marginBottom:18 }}>
              <label style={{ fontFamily:"'Anybody',sans-serif", color:"rgba(255,255,255,.7)", fontSize:11, fontWeight:700, display:"block", marginBottom:5, textTransform:"uppercase", letterSpacing:".5px" }}>Cover Note</label>
              <textarea placeholder="Tell us about yourself and why you'd like to join Traveltix..." value={genForm.cover} onChange={e=>setGenForm({...genForm,cover:e.target.value})} rows={4}
                style={{ width:"100%", background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.12)", borderRadius:7, padding:"11px 14px", color:"#fff", fontSize:13, outline:"none", resize:"vertical" }}/>
            </div>
            <BtnOr onClick={handleGen} style={{ width:"100%", justifyContent:"center", fontSize:13, padding:"14px" }}>Submit Application</BtnOr>
          </div>
        </div>
      </section>
    </div>
  );
}