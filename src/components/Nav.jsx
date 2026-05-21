// ╔══════════════════════════════════════════════════════╗
// ║  src/components/Nav.jsx                              ║
// ╚══════════════════════════════════════════════════════╝
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { C, ASSETS } from "../constants/brand";
import React from "react";


const LINKS = [
  { label:"Home",         path:"/" },
  { label:"Destinations", path:"/destinations" },
  { label:"Services",     path:"/services" },
  { label:"About",        path:"/about" },
  { label:"Blog",         path:"/blog" },
  { label:"Career",       path:"/career" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      height:64, display:"flex", alignItems:"center",
      justifyContent:"space-between", padding:"0 52px",
      background: scrolled ? "rgba(1,15,31,.96)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom:"1px solid rgba(255,255,255,.05)",
      transition:"background .35s, backdrop-filter .35s",
    }}>

      {/* Logo */}
      <img
        src={ASSETS.logo}           // TravelTix-logo.png — make sure it's the white version
        alt="Traveltix"
        style={{ height:66, width:"auto", cursor:"pointer" }}
        onClick={() => navigate("/")}
      />

      {/* Links */}
      <div style={{ display:"flex", gap:30 }}>
        {LINKS.map(({ label, path }) => {
          const active = location.pathname === path;
          return (
            <span key={path} onClick={() => navigate(path)} style={{
              fontFamily:"'Epilogue',sans-serif", fontSize:11, fontWeight:500,
              color: active ? "#fff" : "rgba(255,255,255,.45)",
              textTransform:"uppercase", letterSpacing:".8px", cursor:"pointer",
              borderBottom: active ? `1.5px solid ${C.or}` : "1.5px solid transparent",
              paddingBottom:2, transition:"color .2s",
            }}>{label}</span>
          );
        })}
      </div>

      {/* Right — phone + CTA */}
      <div style={{ display:"flex", alignItems:"center", gap:18 }}>
        <span style={{ fontFamily:"'Epilogue',sans-serif", fontSize:11, color:"rgba(255,255,255,.3)", display:"flex", alignItems:"center", gap:6 }}>
          <span style={{ width:5, height:5, background:C.or, borderRadius:"50%", display:"inline-block", flexShrink:0 }}/>
          +880 1886 005274
        </span>
        <button style={{ fontFamily:"'Anybody',sans-serif", fontSize:10, fontWeight:800, color:"#fff", background:C.or, border:"none", padding:"10px 20px", borderRadius:3, cursor:"pointer", textTransform:"uppercase", letterSpacing:".8px" }}>
          Book a Trip
        </button>
      </div>
    </nav>
  );
}