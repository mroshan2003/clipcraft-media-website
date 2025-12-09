import React, { useEffect, useState } from "react";

export default function Portfolio() {
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
