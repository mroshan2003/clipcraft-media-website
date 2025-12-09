import React, { useEffect, useState } from "react";
import { revealOnScroll } from "./animations";
import "./App.css";
import Navbar from "./screens/Navbar";
import Home from "./screens/Home";
import Clients from "./screens/Clients";
import Reviews from "./screens/Reviews";
import AboutUs from "./screens/AboutUs";
import Pricing from "./screens/Pricing";
import Portfolio from "./screens/Portfolio";
import FAQ from "./screens/Faq";
import Contact from "./screens/Contact";
import Footer from "./screens/Footer";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import PortfolioDashboard from "./admin/PortfolioDashboard";

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
        <Clients />
        <Reviews />
        <AboutUs />
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
