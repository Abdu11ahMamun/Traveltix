import { useState, useEffect, useRef } from "react";
import { C } from "../constants/brand";

const TESTIMONIALS = [
  {
    name: "Joe Marshall",
    role: "Business Traveler",
    text: "Traveltix made our corporate trip to Singapore completely seamless. Every detail — flights, hotel, transfers — was handled with zero hassle. Absolutely professional from start to finish.",
    rating: 5,
    initials: "JM",
    color: C.or,
  },
  {
    name: "Luna Muller",
    role: "Solo Traveler, Germany",
    text: "I was nervous about traveling solo in Asia but Traveltix gave me all the confidence I needed. My Bali itinerary was perfectly crafted and I felt supported at every step.",
    rating: 5,
    initials: "LM",
    color: C.navy,
  },
  {
    name: "Roy Franklin",
    role: "Adventure Traveler, USA",
    text: "The Bali trip was beyond magical. Traveltix handled everything from visa to morning transfers. Every detail was flawless — I just showed up and enjoyed the experience!",
    rating: 5,
    initials: "RF",
    color: "#2563eb",
  },
  {
    name: "Gary Howard",
    role: "Family Traveler, UK",
    text: "Traveling with three kids is stressful enough, but Traveltix made our Thailand trip feel like a breeze. The kids still talk about it — best family holiday we've ever had.",
    rating: 5,
    initials: "GH",
    color: "#16a34a",
  },
  {
    name: "Louna Daniel",
    role: "Solo Traveler, France",
    text: "Cappadocia at sunrise in a hot air balloon — a dream I never thought I'd live. Traveltix made it happen seamlessly. Clear communication, honest pricing, and zero stress.",
    rating: 5,
    initials: "LD",
    color: C.sky,
  },
];

export default function TestimonialsCarousel() {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const VISIBLE = 4;
  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setOffset(o => (o + 1) % total);
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [paused, total]);

  // Build visible items (looped)
  const visibleItems = Array.from({ length: VISIBLE }, (_, i) =>
    TESTIMONIALS[(offset + i) % total]
  );

  return (
    <section style={{ background: "#fff", padding: "88px 60px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ width: 32, height: 2, background: C.or }} />
          <span style={{ fontFamily: "'Anybody',sans-serif", fontSize: 10, fontWeight: 800, color: C.or, letterSpacing: "2.5px", textTransform: "uppercase" }}>Client Reviews</span>
          <div style={{ width: 32, height: 2, background: C.or }} />
        </div>
        <h2 style={{ fontFamily: "'Anybody',sans-serif", fontSize: 44, fontWeight: 900, color: C.navy }}>
          What Our Travelers Say
        </h2>
      </div>

      {/* Cards */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          overflow: "hidden",
        }}
      >
        {visibleItems.map((t, i) => (
          <div
            key={`${offset}-${i}`}
            style={{
              background: C.lace,
              borderRadius: 16,
              padding: "28px 24px",
              border: "1px solid rgba(2,28,65,.06)",
              display: "flex",
              flexDirection: "column",
              gap: 0,
              animation: "fadein .45s ease forwards",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Quote mark */}
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 64,
              color: C.or,
              lineHeight: .7,
              marginBottom: 12,
              opacity: .25,
            }}>"</div>

            {/* Stars */}
            <div style={{ color: C.or, fontSize: 14, letterSpacing: 2, marginBottom: 14 }}>
              {"★".repeat(t.rating)}
            </div>

            {/* Review text */}
            <p style={{
              fontSize: 13,
              color: "#5a6a7a",
              lineHeight: 1.85,
              fontStyle: "italic",
              flex: 1,
              marginBottom: 24,
            }}>
              {t.text}
            </p>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(2,28,65,.07)", marginBottom: 18 }} />

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: t.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Anybody',sans-serif",
                color: t.color === C.sky ? C.navy : "#fff",
                fontWeight: 900,
                fontSize: 14,
                flexShrink: 0,
              }}>
                {t.initials}
              </div>
              <div>
                <strong style={{ fontFamily: "'Anybody',sans-serif", fontSize: 14, fontWeight: 800, color: C.navy, display: "block" }}>
                  {t.name}
                </strong>
                <span style={{ fontSize: 12, color: "#94a3b8" }}>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 36 }}>
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setOffset(i)}
            style={{
              width: i === offset ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === offset ? C.or : "rgba(2,28,65,.15)",
              border: "none",
              cursor: "pointer",
              transition: "all .3s",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}