import React, { useEffect, useState } from "react";
import { revealOnScroll } from "./animations";
import "./index.css";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import PortfolioDashboard from "./admin/PortfolioDashboard";

/* ================= NAVBAR ================== */

function Navbar() {
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

/* ================= Home ================== */

function Home() {
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

/* ========= ENHANCED PORTFOLIO CLIENTS ========= */

function MarqueeClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("https://clipcraft-backend-oka9.onrender.com/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <section className="clients-section reveal" id="brands">
      <div className="container">
        <p className="section-label">Trusted by Brands & Creators</p>

        <div className="clients-marquee">
          <div className="marquee-track-clients">
            {[...clients, ...clients].map((client, i) => (
              <div className="client-logo-box" key={i}>
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= REVIEWS ================== */

function Reviews() {
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

/* ================= About Us ================== */

function AboutUs() {
  const steps = [
    {
      title: "Mohammed Yusuf M",
      desc: "Founder of Clipcraft Media | Editor",
      img: "Yusuf.jpg",
      link: "https://www.instagram.com/clipcraftor03?igsh=N3NpdnUyeXo3amZk",
    },
    {
      title: "Mohamed Roshan Akthar M",
      desc: "Co-Founder of Clipcraft Media",
      img: "Roshan.png",
      link: "https://www.instagram.com/itz_me._.rxsxhxn._?igsh=MXBldGFqa3AxcjFiZQ==",
    },
  ];

  return (
    <section className="section section-dark reveal" id="about">
      <div className="container">
        <h2 className="section-title">About us</h2>

        <div className="grid grid-2">
          {steps.map((s, i) => (
            <div
              className="card step-card founder-card"
              key={i}
              onClick={() => window.open(s.link, "_blank")}
            >
              <img src={s.img} alt={s.title} className="step-img" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= STATS ================== */

function Stats() {
  return (
    <section className="section stats reveal">
      <div className="container grid grid-3">
        <div className="stat">
          <h3>50+</h3>
          <p>Videos Produced</p>
        </div>
        <div className="stat">
          <h3>10M+</h3>
          <p>Views Generated</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Clients Worked With</p>
        </div>
      </div>
    </section>
  );
}

/* ================= PRICING ================== */

function Pricing() {
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
              <li>8 Reels</li>
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
              <li>3 posters</li>
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

/* ================= PORTFOLIO ================== */

function Portfolio() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://clipcraft-backend-oka9.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // Touch drag scrolling for mobile
  const handleTouchScroll = (e) => {
    const container = e.currentTarget;
    const touch = e.touches[0];

    if (!container.startX) {
      container.startX = touch.clientX;
      container.scrollLeftStart = container.scrollLeft;
    }

    const delta = touch.clientX - container.startX;
    container.scrollLeft = container.scrollLeftStart - delta;
  };

  const resetTouchVars = (e) => {
    e.currentTarget.startX = null;
  };

  return (
    <section className="section section-dark" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>

        {/* SCROLL WRAPPER */}
        <div
          className="portfolio-scroll-wrapper"
          onTouchMove={handleTouchScroll}
          onTouchEnd={resetTouchVars}
        >
          <div className="portfolio-scroll">
            {items.map((item) => (
              <div className="portfolio-item" key={item._id}>
                <video
                  src={item.imageUrl}
                  muted
                  playsInline
                  loop
                  onMouseEnter={(e) => {
                    e.target.muted = false; // 🔊 Unmute on hover
                    e.target.play();
                  }}
                  onMouseLeave={(e) => {
                    e.target.muted = true; // 🔇 Mute when hover ends
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                ></video>
              </div>
            ))}

            {/* Duplicate for infinite animation */}
            {items.map((item) => (
              <div className="portfolio-item" key={item._id + "-clone"}>
                <video
                  src={item.imageUrl}
                  muted
                  playsInline
                  loop
                  onMouseEnter={(e) => {
                    e.target.muted = false;
                    e.target.play();
                  }}
                  onMouseLeave={(e) => {
                    e.target.muted = true;
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                ></video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================== */

function FAQ() {
  const faqs = [
    {
      q: "Do you work with individual creators or only brands?",
      a: "We work with everyone — creators, coaches, startups and established brands. If you want to grow with content, we can help.",
    },
    {
      q: "Do you handle the entire video production process?",
      a: "Yes. We take care of everything end-to-end — strategy, scripting, shoot planning, production, editing and final delivery.",
    },
    {
      q: "How soon can we start seeing content going live?",
      a: "Once we finalise your package and strategy, it usually takes about 1–2 weeks to plan your first shoot and start rolling out content.",
    },
    {
      q: "Do you offer monthly content retainers?",
      a: "Yes. Our monthly retainers are designed to give you a consistent, predictable flow of content without you worrying about the process.",
    },
    {
      q: "Can the packages be customised for my brand’s needs?",
      a: "Absolutely. Shoot days, number of videos, reels and design assets can be customised based on your goals and budget.",
    },
  ];

  return (
    <section className="section reveal" id="faq">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================== */

function Contact() {
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
                href="https://www.instagram.com/clipcraftmedia.03?igsh=MXJjNXEwY24xMGE2Mg=="
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

/* ================= FOOTER ================== */

function Footer() {
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

/* ================= APP ROOT ================== */

export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [colorMode, setColorMode] = useState("dark");

  useEffect(() => {
    // track mouse
    window.addEventListener("mousemove", (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    });

    // ripple click
    window.addEventListener("click", (e) => {
      const ripple = document.createElement("div");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 400);
    });

    // detect section color
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setColorMode(entry.target.dataset.section);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  // MAGNETIC HOVER EFFECT
  useEffect(() => {
    const items = document.querySelectorAll(".magnetic-hover");

    items.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        item.style.setProperty("--tx", `${x * 0.2}px`);
        item.style.setProperty("--ty", `${y * 0.2}px`);
        item.classList.add("active");
      });

      item.addEventListener("mouseleave", () => {
        item.style.setProperty("--tx", `0px`);
        item.style.setProperty("--ty", `0px`);
        item.classList.remove("active");
      });
    });
  }, []);

  useEffect(() => {
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const [adminKey, setAdminKey] = useState(null);

  if (window.location.pathname === "/admin/clients") {
    return adminKey ? (
      <AdminDashboard adminKey={adminKey} />
    ) : (
      <AdminLogin onLogin={(key) => setAdminKey(key)} />
    );
  }

  if (window.location.pathname === "/admin/portfolio") {
    return adminKey ? (
      <PortfolioDashboard adminKey={adminKey} />
    ) : (
      <AdminLogin onLogin={setAdminKey} />
    );
  }

  return (
    <>
      <div className={`section-${colorMode}`}>
        <div className="cursor-main" style={{ left: pos.x, top: pos.y }} />

        <Navbar />
        <Home />
        <MarqueeClients />
        <Reviews />
        <AboutUs />
        <Stats />
        <Pricing />
        <Portfolio />
        <FAQ />
        <Contact />
        <Footer />
      </div>

      {/* Floating WhatsApp icon */}
      <a
        href="https://wa.me/918778223527?text=I%20saw%20your%20works%2C%20can%20you%20share%20the%20package%20details%20%3F"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/WhatsApp.svg.webp"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </>
  );
}
