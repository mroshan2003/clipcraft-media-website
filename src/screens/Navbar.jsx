export default function Navbar() {
  const openMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    if (menu) menu.classList.add("active");
  };

  const closeMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    if (menu) menu.classList.remove("active");
  };

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <div>
            <img className="logo" src="logo.png" alt="" />
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#brands">Brands</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="btn btn-sm btn-primary">
              Contact
            </a>
          </nav>

          <div className="hamburger" onClick={openMenu}>
            ☰
          </div>
        </div>
      </header>

      {/* Mobile slide menu */}
      <div className="mobile-menu">
        <button className="close-btn" onClick={closeMenu}>
          ×
        </button>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#brands" onClick={closeMenu}>
          Brands
        </a>
        <a href="#reviews" onClick={closeMenu}>
          Reviews
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>
        <a href="#portfolio" onClick={closeMenu}>
          Portfolio
        </a>
        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>
        <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </>
  );
}