export default function Pricing() {
  return (
    <section className="section reveal" id="pricing">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-sub">
          Packages can be customized based on shoot days, edit volume and ad
          requirements.
        </p>

        <div className="grid grid-3">
          <div className="card pricing-card">
            <h3>STANDARD VIDEO PACK</h3>
            <ul>
              <li>8 videos</li>
              <li>Ideal for regular content needs</li>
            </ul>
            <button
              className="pricing-btn"
              onClick={() => {
                const pkg = "STANDARD VIDEO PACK";
                const msg = `Hi, I want more details about "${pkg}"`;
                const phone = "8778223527";

                window.open(
                  `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`,
                  "_blank"
                );
              }}
            >
              More Details
            </button>
          </div>

          <div className="card pricing-card pricing-card-featured">
            <h3>CONTENT PACK</h3>
            <ul>
              <li>10 videos</li>
              <li>Perfect mix of video + visual content</li>
            </ul>
            <button
              className="pricing-btn"
              onClick={() => {
                const pkg = "CONTENT PACK";
                const msg = `Hi, I want more details about "${pkg}"`;
                const phone = "8778223527";

                window.open(
                  `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`,
                  "_blank"
                );
              }}
            >
              More Details
            </button>
          </div>

          <div className="card pricing-card">
            <h3>BULK VIDEO PACK</h3>
            <ul>
              <li>15 videos</li>
              <li>Great for high-volume content creation</li>
            </ul>
            <button
              className="pricing-btn"
              onClick={() => {
                const pkg = "BULK VIDEO PACK";
                const msg = `Hi, I want more details about "${pkg}"`;
                const phone = "8778223527";

                window.open(
                  `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`,
                  "_blank"
                );
              }}
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
