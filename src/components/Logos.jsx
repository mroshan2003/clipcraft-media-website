import React from "react";

const logos = ["/logo1.png","/logo2.png","/logo3.png","/logo4.png","/logo5.png","/logo6.png"];

export default function Logos() {
  return (
    <section className="logos">
      <div className="container">
        <p className="logos__title">Trusted by growing brands</p>
        <div className="logos__marquee">
          {[...logos, ...logos].map((src, i) => (
            <img key={i} src={src} alt="Brand logo" />
          ))}
        </div>
      </div>
    </section>
  );
}
