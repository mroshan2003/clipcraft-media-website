export default function Reviews() {
  const reviews = [
    {
      text: "Their video content and social media strategy helped us reach more clients in just 30 days than we did in the past six months. Professional team, smooth process, and incredible results.",
    },
    {
      text: "They handled our monthly reels, edits, and all branding creatives. Every deliverable was high-quality and perfectly on-brand.",
    },
    {
      text: "Clipcraft Media created a clean, powerful video ad that performed way beyond expectations. Their understanding of storytelling is next level.",
    },
  ];

  return (
    <section className="section reveal" id="reviews">
      <div className="container">
        <h2 className="section-title">Reviews</h2>
        <div className="grid grid-3">
          {reviews.map((r, i) => (
            <div className="card review-card" key={i}>
              <p className="review-text">“{r.text}”</p>
              <p className="review-name">{r.name}</p>
              <p className="review-tag">{r.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
