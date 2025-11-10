import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__wrap">
        <a href="#" className="nav__brand">
          <img src="/logo1.jpg" alt="ClipCraft Media" />
          <span>ClipCraft Media</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          <a href="#services">Services</a>
          <a href="#cases">Work</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Clients</a>
          <a href="#contact" className="btn btn--sm btn--primary">Get Quote</a>
        </nav>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Menu"
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
