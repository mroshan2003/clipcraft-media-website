import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__content">
        <p className="eyebrow">Full-Service Digital Marketing</p>
        <h1>
          We help brands grow with <span className="accent">strategy, content,</span> and performance ads.
        </h1>
        <p className="subhead">
          Social media, SEO, paid ads, web design, and end-to-end production for events and brand films.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Book a Free Strategy Call</a>
          <a href="#cases" className="btn btn--ghost">See Our Work</a>
        </div>

        <div className="hero__metrics">
          <div><strong>120+</strong><span>Clients</span></div>
          <div><strong>₹4.2Cr+</strong><span>Ad Spend Managed</span></div>
          <div><strong>8.9x</strong><span>Avg. ROAS (best)</span></div>
        </div>
      </div>
    </section>
  );
}
