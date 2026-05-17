// ── src/components/Footer.jsx ──────────────────────────────────────────────
import { useNavigate } from "react-router-dom";
import { C, ASSETS, CONTACT } from "../constants/brand";

export default function Footer() {
  const navigate = useNavigate();
  const links    = ["Home", "Destinations", "Services", "About", "Blog", "Career"];
  const pathMap  = { Home: "/", Destinations: "/destinations", Services: "/services", About: "/about", Blog: "/blog", Career: "/career" };
  const socials  = [{ label: "f", title: "Facebook" }, { label: "𝕏", title: "Twitter" }, { label: "◎", title: "Instagram" }, { label: "▶", title: "YouTube" }];

  return (
    <footer style={{ background: C.dark, padding: "64px 60px 26px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1.6fr", gap: 46, marginBottom: 46 }}>

        {/* Brand */}
        <div>
          <div onClick={() => navigate("/")} style={{ cursor: "pointer", marginBottom: 14 }}>
            <img src={ASSETS.logo} alt="Traveltix" style={{ height: 40, width: "auto", objectFit: "contain" }} />
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.38)", lineHeight: 1.9, maxWidth: 268 }}>
            Your trusted travel partner from visa to destination — making journeys smooth, well-planned and memorable since 2012.
          </p>
          <div style={{ display: "flex", gap: 9, marginTop: 20 }}>
            {socials.map(s => (
              <div key={s.title} title={s.title} style={{
                width: 34, height: 34, borderRadius: 6, border: "1px solid rgba(255,255,255,.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", fontSize: 13, color: "rgba(255,255,255,.45)",
                fontFamily: "'Anybody',sans-serif", fontWeight: 800, transition: "all .25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = C.or; e.currentTarget.style.borderColor = C.or; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "rgba(255,255,255,.45)"; }}
              >{s.label}</div>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h5 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 13, fontWeight: 800, marginBottom: 18, textTransform: "uppercase" }}>Pages</h5>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {links.map(l => (
              <li key={l}>
                <span onClick={() => navigate(pathMap[l])} style={{ fontSize: 13, color: "rgba(255,255,255,.38)", cursor: "pointer", transition: "color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = C.or}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.38)"}
                >{l}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 13, fontWeight: 800, marginBottom: 18, textTransform: "uppercase" }}>Contact Us</h5>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { icon: "📍", text: CONTACT.address },
              { icon: "📞", text: CONTACT.phone,         href: `tel:${CONTACT.phone.replace(/\s/g,"")}` },
              { icon: "✉",  text: CONTACT.emails.info,   href: `mailto:${CONTACT.emails.info}` },
              { icon: "✉",  text: CONTACT.emails.admin,  href: `mailto:${CONTACT.emails.admin}` },
              { icon: "✉",  text: CONTACT.emails.hr,     href: `mailto:${CONTACT.emails.hr}` },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: 12, color: "rgba(255,255,255,.38)", lineHeight: 1.6, transition: "color .2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = C.or}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.38)"}
                  >{item.text}</a>
                ) : (
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,.38)", lineHeight: 1.6 }}>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h5 style={{ fontFamily: "'Anybody',sans-serif", color: "#fff", fontSize: 13, fontWeight: 800, marginBottom: 18, textTransform: "uppercase" }}>Newsletter</h5>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.38)", lineHeight: 1.8, marginBottom: 14 }}>Subscribe for exclusive travel deals and early-bird offers.</p>
          <div style={{ display: "flex", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 6, overflow: "hidden" }}>
            <input placeholder="Your email address" style={{ flex: 1, background: "transparent", border: "none", padding: "11px 14px", color: "#fff", fontSize: 12, outline: "none" }} />
            <button style={{ background: C.or, color: "#fff", border: "none", fontFamily: "'Anybody',sans-serif", fontSize: 11, fontWeight: 800, padding: "9px 14px", margin: 3, borderRadius: 4, cursor: "pointer", textTransform: "uppercase", letterSpacing: ".5px" }}>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,.25)" }}>© 2025 Traveltix. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy", "Terms", "Cookies"].map(l => (
            <a key={l} href="#" style={{ fontSize: 11, color: "rgba(255,255,255,.25)", transition: "color .2s" }}
              onMouseEnter={e => e.currentTarget.style.color = C.or}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.25)"}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}