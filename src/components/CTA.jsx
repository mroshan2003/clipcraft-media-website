<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  onSubmit={(e) => { /* Netlify handles it; prevent only if you DIY */ }}
  className="form"
>
  <input type="hidden" name="form-name" value="contact" />
  <p hidden>
    <label>Don’t fill this out: <input name="bot-field" /></label>
  </p>

  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <input type="text" name="phone" placeholder="Phone" />
  <textarea name="message" placeholder="Tell us about your brand..." rows="3" />
  <button className="btn btn--primary" type="submit">Get Proposal</button>
</form>
