import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a className="nav__brand footer__brand" href="#">
            <img src="/logo1.png" alt="ClipCraft Media" />
            <span>ClipCraft Media</span>
          </a>
          <p className="muted">Digital marketing, content, and production that moves the needle.</p>
        </div>

        <div>
          <h4>Services</h4>
          <ul className="linklist">
            <li><a href="#services">Performance Ads</a></li>
            <li><a href="#services">Social Media</a></li>
            <li><a href="#services">SEO</a></li>
            <li><a href="#services">Web Design</a></li>
            <li><a href="#services">Brand Films</a></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul className="linklist">
            <li><a href="#cases">Case Studies</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#testimonials">Clients</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="linklist">
            <li><a href="mailto:hello@clipcraftmedia.com">hello@clipcraftmedia.com</a></li>
            <li><a href="tel:+911234567890">+91 12345 67890</a></li>
            <li>Chennai, Tamil Nadu</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bar">
        <span>© {new Date().getFullYear()} ClipCraft Media. All rights reserved.</span>
        <a className="link" href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}
