export default function CTA() {
  return (
    <section className="cta section" id="contact">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">Grow Your Brand With Us</h2>
          <p className="cta__text">
            Let's create something amazing for your business. Get your free proposal today.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="phone" placeholder="Phone" />
            <textarea
              name="message"
              placeholder="Tell us about your brand..."
              rows="3"
              required
            />
            <button className="btn btn--primary" type="submit">Get Proposal</button>
          </form>
        </div>
      </div>
    </section>
  );
}
