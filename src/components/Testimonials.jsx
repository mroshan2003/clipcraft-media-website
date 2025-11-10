import React, { useEffect, useRef } from "react";

const items = [
  { text: "They boosted our inbound leads within the first month. The creative quality is top-notch.", name: "Priya S.", role: "Founder, Luxe Interiors", avatar: "/avatar1.jpg" },
  { text: "Clear strategy + weekly updates. We finally see where the ad money goes.", name: "Vikram R.", role: "CEO, D2C Apparel", avatar: "/avatar2.jpg" },
  { text: "Our reels now perform 3x better. Professional team and fast turnaround.", name: "Anitha K.", role: "Marketing Head, EventsCo", avatar: "/avatar3.jpg" },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  // Simple auto-scroll
  useEffect(() => {
    const el = trackRef.current;
    let pos = 0;
    const id = setInterval(() => {
      if (!el) return;
      pos = (pos + 1) % (el.scrollWidth / 2);
      el.scrollTo({ left: pos, behavior: "smooth" });
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section__title">What Clients Say</h2>
        <p className="section__subtitle">Social proof that matters</p>
        <div className="carousel">
          <div className="carousel__track" ref={trackRef}>
            {[...items, ...items].map((t, i) => (
              <article className="testimonial" key={i}>
                <p>“{t.text}”</p>
                <div className="testimonial__user">
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span className="muted">{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
