// ── src/components/Nav.jsx ─────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { C, ASSETS } from "../constants/brand";
import BtnOr from "./shared/BtnOr";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();
  const links     = ["Home", "Destinations", "Services", "About", "Blog", "Career"];
  const pathMap   = { Home: "/", Destinations: "/destinations", Services: "/services", About: "/about", Blog: "/blog", Career: "/career" };

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const isActive = (label) => {
    const path = pathMap[label];
    return label === "Home" ? location.pathname === "/" : location.pathname.startsWith(path);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 999,
      padding: "0 60px", height: 68, display: "flex", alignItems: "center",
      justifyContent: "space-between", transition: "all .4s",
      background: scrolled ? "rgba(2,28,65,.96)" : "transparent",
      boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,.28)" : "none",
    }}>
      {/* Logo */}
      <div onClick={() => navigate("/")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
        <img src={ASSETS.logo} alt="Traveltix" style={{ height: 36, width: "auto", objectFit: "contain" }} />
      </div>

      {/* Links */}
      <ul style={{ display: "flex", gap: 28, listStyle: "none" }}>
        {links.map(l => (
          <li key={l}>
            <span onClick={() => navigate(pathMap[l])} style={{
              fontFamily: "'Anybody',sans-serif", fontSize: 12, fontWeight: 700,
              letterSpacing: ".8px", textTransform: "uppercase", cursor: "pointer",
              color: isActive(l) ? "#fff" : "rgba(255,255,255,.68)",
              borderBottom: isActive(l) ? `2px solid ${C.or}` : "2px solid transparent",
              paddingBottom: 3, transition: "all .2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { if (!isActive(l)) e.currentTarget.style.color = "rgba(255,255,255,.68)"; }}
            >{l}</span>
          </li>
        ))}
      </ul>

      <BtnOr style={{ fontSize: 11, padding: "9px 20px" }}>Book a Trip</BtnOr>
    </nav>
  );
}