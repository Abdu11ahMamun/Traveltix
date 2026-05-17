
// ── src/App.jsx ────────────────────────────────────────────────────────────
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav        from "./components/Nav";
import Footer     from "./components/Footer";
import Home        from "./pages/Home";
import Destinations from "./pages/Destinations";
import Services    from "./pages/Services";
import About       from "./pages/About";
import Blog        from "./pages/Blog";
import Career      from "./pages/Career";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/services"     element={<Services />} />
          <Route path="/about"        element={<About />} />
          <Route path="/blog"         element={<Blog />} />
          <Route path="/career"       element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}