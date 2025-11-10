import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="container cta__wrap">
        <div>
          <h2>Ready to grow?</h2>
          <p className="muted">Tell us your goals. We’ll share a tailored plan within 24 hours.</p>
        </div>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="message" placeholder="Tell us about your brand..." rows="3" />
          <button className="btn btn--primary" type="submit">Get Proposal</button>
        </form>
      </div>
    </section>
  );
}
