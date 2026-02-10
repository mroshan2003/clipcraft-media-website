import { useEffect, useState, useRef } from "react";

/* ===================== PORTFOLIO ===================== */

export default function Portfolio() {
  const [items, setItems] = useState([]);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [mutedVideoId, setMutedVideoId] = useState(null);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  /* ================= MANUAL SCROLL LOGIC ================= */

  useEffect(() => {
    const marquees = document.querySelectorAll(".manual-scroll");

    marquees.forEach((marquee) => {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      const startDrag = (x) => {
        isDown = true;
        marquee.classList.add("paused");
        startX = x;
        scrollLeft = marquee.scrollLeft;
      };

      const moveDrag = (x) => {
        if (!isDown) return;
        const walk = (x - startX) * 1.5;
        marquee.scrollLeft = scrollLeft - walk;
      };

      const stopDrag = () => {
        isDown = false;
        marquee.classList.remove("paused");
      };

      /* 🖱️ Mouse */
      marquee.addEventListener("mousedown", (e) => startDrag(e.pageX));
      marquee.addEventListener("mousemove", (e) => moveDrag(e.pageX));
      marquee.addEventListener("mouseup", stopDrag);
      marquee.addEventListener("mouseleave", stopDrag);

      /* 📱 Touch */
      marquee.addEventListener("touchstart", (e) =>
        startDrag(e.touches[0].pageX),
      );
      marquee.addEventListener("touchmove", (e) =>
        moveDrag(e.touches[0].pageX),
      );
      marquee.addEventListener("touchend", stopDrag);

      /* 🖱️ Wheel */
      marquee.addEventListener(
        "wheel",
        (e) => {
          marquee.classList.add("paused");
          marquee.scrollLeft += e.deltaY;
          clearTimeout(marquee._wheelTimeout);
          marquee._wheelTimeout = setTimeout(() => {
            marquee.classList.remove("paused");
          }, 300);
        },
        { passive: true },
      );
    });
  }, []);

  const shootEdit = items.filter((i) => i.category === "shoot_edit");
  const editOnly = items.filter((i) => i.category === "edit_only");

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="portfolio-title">Our Work</h2>

        <h3 className="row-title">Shoot + Edit</h3>
        <div className="marquee left manual-scroll">
          <div className="marquee-track">
            {[...shootEdit, ...shootEdit].map((item, index) => {
              const instanceId = `shoot-${item._id}-${index}`;
              return (
                <VideoCard
                  key={instanceId}
                  instanceId={instanceId}
                  item={item}
                  activeVideoId={activeVideoId}
                  setActiveVideoId={setActiveVideoId}
                  mutedVideoId={mutedVideoId}
                  setMutedVideoId={setMutedVideoId}
                />
              );
            })}
          </div>
        </div>

        <h3 className="row-title">Edit Only</h3>
        <div className="marquee right manual-scroll">
          <div className="marquee-track">
            {[...editOnly, ...editOnly].map((item, index) => {
              const instanceId = `edit-${item._id}-${index}`;
              return (
                <VideoCard
                  key={instanceId}
                  instanceId={instanceId}
                  item={item}
                  activeVideoId={activeVideoId}
                  setActiveVideoId={setActiveVideoId}
                  mutedVideoId={mutedVideoId}
                  setMutedVideoId={setMutedVideoId}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== VIDEO CARD ===================== */

function VideoCard({
  item,
  instanceId,
  activeVideoId,
  setActiveVideoId,
  mutedVideoId,
  setMutedVideoId,
}) {
  const videoRef = useRef(null);

  const isPlaying = activeVideoId === instanceId;
  const isMuted = mutedVideoId === instanceId;

  /* ▶️ Sync play state */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isPlaying) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    }
  }, [isPlaying]);

  /* 🔥 Auto pause when out of view */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isPlaying) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setActiveVideoId(null);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isPlaying, setActiveVideoId]);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});
    setActiveVideoId(instanceId);
    setMutedVideoId(instanceId);
  };

  const handleMouseLeave = () => {
    setActiveVideoId(null);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setMutedVideoId(nextMuted ? instanceId : null);
  };

  return (
    <div
      className={`portfolio-card ${isPlaying ? "active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={item.imageUrl}
        loop
        muted
        playsInline
        preload="auto"
      />

      {isPlaying && (
        <button className="mute-btn" onClick={toggleMute}>
          {isMuted ? "🔇" : "🔊"}
        </button>
      )}
    </div>
  );
}
