export default function Home() {
  return (
    <section className="hero reveal" id="home">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="badge">
            Video Editing • Digital Marketing • Personal Branding{" "}
          </p>
          <h1>
            Content That Sells <br />
            <span className="highlight">Branding That Sticks</span>
          </h1>
          <p className="hero-sub">
            Clipcraft Media produces scroll-stopping videos, engaging reels, and
            complete social media systems for creators and businesses.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/918778223527?text=I%20saw%20your%20works%2C%20can%20you%20share%20the%20package%20details%20%3F"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>

            <a href="#portfolio" className="btn btn-outline">
              View Portfolio
            </a>
          </div>

          <div className="hero-meta">
            <span>50+ videos produced</span>
            <span>10M+ views generated</span>
          </div>
        </div>
      </div>
    </section>
  );
}