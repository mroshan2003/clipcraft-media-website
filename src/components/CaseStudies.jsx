import React from "react";

const cases = [
  {
    title: "D2C Fashion Brand",
    img: "/case1.jpg",
    kpi: "5.4x ROAS",
    desc: "Scaled Meta + Google with UGC creatives and weekly optimizations."
  },
  {
    title: "Interior Studio",
    img: "/case2.jpg",
    kpi: "212% More Leads",
    desc: "Local SEO + landing pages + lead form ads for high-intent traffic."
  },
  {
    title: "Event Company",
    img: "/case3.jpg",
    kpi: "3.1x More Inquiries",
    desc: "Reels production + Instagram growth + retargeting video ads."
  }
];

export default function CaseStudies() {
  return (
    <section id="cases" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Featured Work</h2>
        <p className="section__subtitle">Recent case studies & outcomes</p>

        <div className="grid grid--3">
          {cases.map((c, i) => (
            <article className="case" key={i}>
              <div className="case__image">
                <img src={c.img} alt={c.title} loading="lazy" />
                <div className="case__badge">{c.kpi}</div>
              </div>
              <div className="case__content">
                <h3>{c.title}</h3>
                <p className="muted">{c.desc}</p>
                <a className="link" href="#">View details →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
