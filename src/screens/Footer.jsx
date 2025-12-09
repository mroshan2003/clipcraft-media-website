export default function Footer() {
  return (
    <footer className="footer reveal">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">Clipcraft Media</p>
          <p className="footer-tagline">
            Turning challenges into creative content.
          </p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#brands">Brands</a>
          <a href="#reviews">Reviews</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Clipcraft Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}