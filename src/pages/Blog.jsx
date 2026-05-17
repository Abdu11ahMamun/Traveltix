

// ╔══════════════════════════════════════════════════════╗
// ║  src/pages/Blog.jsx                                 ║
// ╚══════════════════════════════════════════════════════╝
import { C, BLOG_POSTS } from "../constants/brand";
import Eyebrow     from "../components/shared/Eyebrow";
import BtnOr       from "../components/shared/BtnOr";
import WavyPattern from "../components/WavyPattern";

export default function Blog() {
  return (
    <div>
      <div style={{ background:C.navy, padding:"140px 60px 80px", position:"relative", overflow:"hidden" }}>
        <WavyPattern color={C.or} height={300} bg="transparent"/>
        <div style={{ position:"relative", zIndex:2 }}>
          <Eyebrow txt="Travel Journal" light/>
          <h1 style={{ fontFamily:"'Anybody',sans-serif", color:"#fff", fontSize:60, fontWeight:900, marginBottom:14 }}>Tips, Stories &<br/><em style={{ color:C.or, fontStyle:"normal" }}>Inspiration</em></h1>
          <p style={{ color:"rgba(255,255,255,.6)", fontSize:15, maxWidth:500, lineHeight:1.85 }}>Expert travel advice, destination guides, and stories from our community of explorers.</p>
        </div>
      </div>
      <section style={{ padding:"88px 60px", background:C.lace }}>
        {/* Featured */}
        <div style={{ borderRadius:16, overflow:"hidden", background:"#fff", border:"1px solid rgba(2,28,65,.07)", display:"grid", gridTemplateColumns:"1.2fr 1fr", marginBottom:40, transition:"all .3s" }}
          onMouseEnter={e=>{ e.currentTarget.style.boxShadow="0 16px 48px rgba(2,28,65,.12)"; e.currentTarget.style.transform="translateY(-3px)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}>
          <img src={BLOG_POSTS[0].img} alt="" style={{ width:"100%", height:360, objectFit:"cover" }}/>
          <div style={{ padding:40, display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
              <span style={{ background:C.or, color:"#fff", fontFamily:"'Anybody',sans-serif", fontSize:9, fontWeight:800, padding:"4px 12px", borderRadius:4, textTransform:"uppercase", letterSpacing:"1.5px" }}>{BLOG_POSTS[0].tag}</span>
              <span style={{ color:"#94a3b8", fontSize:12 }}>{BLOG_POSTS[0].date}</span>
            </div>
            <h2 style={{ fontFamily:"'Anybody',sans-serif", fontSize:26, fontWeight:900, color:C.navy, marginBottom:14, lineHeight:1.2 }}>{BLOG_POSTS[0].title}</h2>
            <p style={{ fontSize:14, color:"#5a6a7a", lineHeight:1.8, marginBottom:24 }}>{BLOG_POSTS[0].body}</p>
            <BtnOr style={{ alignSelf:"flex-start" }}>Read Article →</BtnOr>
          </div>
        </div>
        {/* Grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:22 }}>
          {BLOG_POSTS.slice(1).map((p,i) => (
            <div key={i} style={{ borderRadius:12, overflow:"hidden", background:"#fff", border:"1px solid rgba(2,28,65,.07)", transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 36px rgba(2,28,65,.1)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
              <img src={p.img} alt="" style={{ width:"100%", height:200, objectFit:"cover" }}/>
              <div style={{ padding:20 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                  <span style={{ background:C.or, color:"#fff", fontFamily:"'Anybody',sans-serif", fontSize:9, fontWeight:800, padding:"3px 9px", borderRadius:3, textTransform:"uppercase" }}>{p.tag}</span>
                  <span style={{ color:"#94a3b8", fontSize:11 }}>{p.date}</span>
                </div>
                <h4 style={{ fontFamily:"'Anybody',sans-serif", fontSize:16, fontWeight:900, color:C.navy, marginBottom:8, lineHeight:1.3 }}>{p.title}</h4>
                <p style={{ fontSize:13, color:"#5a6a7a", lineHeight:1.75, marginBottom:14 }}>{p.body}</p>
                <span style={{ fontFamily:"'Anybody',sans-serif", fontSize:11, fontWeight:800, color:C.or, cursor:"pointer", textTransform:"uppercase" }}>Read More →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}