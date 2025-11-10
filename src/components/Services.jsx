import React from "react";

const services = [
  {
    title: "Performance Marketing",
    desc: "Meta & Google Ads with creative testing, funnel-building, and conversion tracking.",
    points: ["Full-funnel strategy","Creative iterations","Retargeting & lookalikes"]
  },
  {
    title: "Social Media Management",
    desc: "Monthly content calendars, shoots, reels, and community management.",
    points: ["Content planning","Reels & shorts","Engagement & moderation"]
  },
  {
    title: "SEO & Content",
    desc: "Technical audits, keyword strategy, and on-page/off-page optimization.",
    points: ["Keyword mapping","Blog strategy","On-page + links"]
  },
  {
    title: "Web Design & Dev",
    desc: "Fast, SEO-friendly websites and landing pages focused on conversion.",
    points: ["UX + copy","Responsive build","Analytics setup"]
  },
  {
    title: "Brand Films & Event Shoots",
    desc: "Pre/post wedding, birthdays, corporate events & product films.",
    points: ["Scripts & storyboards","On-set direction","Edit & grade"]
  },
  {
    title: "Branding & Identity",
    desc: "Logo, color, typography, and brand guidelines for consistency.",
    points: ["Brand strategy","Visual identity","Guideline docs"]
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section__title">Services</h2>
        <p className="section__subtitle">Everything you need to grow—under one roof.</p>
        <div className="grid grid--3">
          {services.map((s, i) => (
            <article className="card" key={i}>
              <h3>{s.title}</h3>
              <p className="muted">{s.desc}</p>
              <ul className="list">
                {s.points.map((p, k) => <li key={k}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
