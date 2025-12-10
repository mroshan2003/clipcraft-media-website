export default function Contact() {
  return (
    <section className="section section-dark reveal" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Let’s Work Together</h2>
          <p className="section-sub">
            Share your details and we’ll respond with ideas and a clear plan for
            your brand.
          </p>

          <ul className="contact-list upgraded-contact">
            {/* Location */}
            <li className="contact-card">
              <a
                href="https://www.google.com/maps/search/Ramanathapuram,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-box">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>Ramanathapuram, Tamil Nadu</span>
              </a>
            </li>

            {/* Email */}
            <li className="contact-card">
              <a
                href="mailto:clipcraftmedia03@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-box">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span>clipcraftmedia03@gmail.com</span>
              </a>
            </li>

            {/* WhatsApp */}
            <li className="contact-card">
              <a
                href="https://wa.me/918778223527?text=Hi%2C%20I%20want%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-box">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <span>+91-8778223527</span>
              </a>
            </li>

            {/* Instagram */}
            <li className="contact-card">
              <a
                href="https://www.instagram.com/clipcraftor03/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-box">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <span>clipcraftmedia.03</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
