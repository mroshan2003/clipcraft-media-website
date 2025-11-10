import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Logos from "./components/Logos.jsx";
import Services from "./components/Services.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Process from "./components/Process.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <CaseStudies />
        <Process />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
