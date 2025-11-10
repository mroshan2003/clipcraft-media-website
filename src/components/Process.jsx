import React from "react";

const steps = [
  { step: "01", title: "Discovery", text: "We audit your brand, audience, and past performance." },
  { step: "02", title: "Strategy", text: "Positioning, messaging, and channel plan aligned to KPIs." },
  { step: "03", title: "Create", text: "Content, landing pages, and ad creatives that convert." },
  { step: "04", title: "Launch", text: "Track, test, and optimize across the funnel." },
  { step: "05", title: "Scale", text: "Budget allocation to highest-ROI segments and creatives." },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <h2 className="section__title">Our Process</h2>
        <p className="section__subtitle">Clear, collaborative, data-driven.</p>
        <ol className="process">
          {steps.map((s, i) => (
            <li key={i}>
              <span className="process__num">{s.step}</span>
              <div>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
