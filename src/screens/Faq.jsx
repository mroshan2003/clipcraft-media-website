export default function FAQ() {
  const faqs = [
    {
      q: "Do you work with individual creators or only brands?",
      a: "We work with everyone — creators, coaches, startups and established brands. If you want to grow with content, we can help.",
    },
    {
      q: "Do you handle the entire video production process?",
      a: "Yes. We take care of everything end-to-end — strategy, scripting, shoot planning, production, editing and final delivery.",
    },
    {
      q: "How soon can we start seeing content going live?",
      a: "Once we finalise your package and strategy, it usually takes about 1–2 weeks to plan your first shoot and start rolling out content.",
    },
    {
      q: "Do you offer monthly content retainers?",
      a: "Yes. Our monthly retainers are designed to give you a consistent, predictable flow of content without you worrying about the process.",
    },
    {
      q: "Can the packages be customised for my brand’s needs?",
      a: "Absolutely. Shoot days, number of videos, reels and design assets can be customised based on your goals and budget.",
    },
  ];

  return (
    <section className="section reveal" id="faq">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
