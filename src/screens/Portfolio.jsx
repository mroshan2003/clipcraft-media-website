import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("https://clipcraft-backend-oka9.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItems = activeCategory
    ? items.filter((item) => item.category === activeCategory)
    : [];

  // Touch drag scrolling
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

        <div className="portfolio-category-buttons">
          <button
            className={`portfolio-btn ${
              activeCategory === "shoot_edit" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("shoot_edit")}
          >
            Shoot + Edit
          </button>

          <button
            className={`portfolio-btn ${
              activeCategory === "edit_only" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("edit_only")}
          >
            Edit Only
          </button>
        </div>

        {/* SHOW VIDEOS ONLY AFTER CLICK */}
        {activeCategory && (
          <div
            className="portfolio-scroll-wrapper"
            onTouchMove={handleTouchScroll}
            onTouchEnd={resetTouchVars}
          >
            <div className="portfolio-scroll">
              {filteredItems.map((item) => (
                <div
                  className="portfolio-item"
                  key={item._id}
                  onMouseEnter={(e) =>
                    e.currentTarget.classList.add("active-video")
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove("active-video")
                  }
                >
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
                  />
                </div>
              ))}

              {/* DUPLICATE FOR INFINITE SCROLL */}
              {filteredItems.map((item) => (
                <div className="portfolio-item" key={item._id + "-clone"}>
                  <video src={item.imageUrl} muted playsInline loop />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
