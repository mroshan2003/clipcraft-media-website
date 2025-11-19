import React, { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/.netlify/functions/submit", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", text: "Message sent successfully! We will contact you soon." });

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", text: "Something went wrong, try again later." });
      }
    } catch (error) {
      setStatus({ type: "error", text: "Server error. Try again later." });
    }

    setLoading(false);
  }

  return (
    <section className="cta section" id="contact">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">Grow Your Brand With Us</h2>
          <p className="cta__text">
            Let’s create something amazing for your business. Contact us today.
          </p>

          <form onSubmit={onSubmit} className="form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={onChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={onChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={onChange}
            />

            <textarea
              name="message"
              placeholder="Tell us about your project…"
              rows="4"
              required
              value={form.message}
              onChange={onChange}
            />

            <button className="btn btn--primary" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p
              style={{
                marginTop: "10px",
                color: status.type === "success" ? "green" : "red",
              }}
            >
              {status.text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
