import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [items, setItems] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  const shootRef = useRef(null);
  const editRef = useRef(null);

  const shootPaused = useRef(false);
  const editPaused = useRef(false);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  /* ================= SET INITIAL SCROLL POSITION ================= */
  useEffect(() => {
    const shootEl = shootRef.current;
    const editEl = editRef.current;

    if (shootEl) shootEl.scrollLeft = 0;
    if (editEl) editEl.scrollLeft = editEl.scrollWidth / 2; // start middle for opposite scroll
  }, [items]);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    let frame;

    const animate = () => {
      const scrollRow = (el, pausedRef, direction = 1) => {
        if (!el) return;
        if (!pausedRef.current) {
          el.scrollLeft += 0.5 * direction;
          if (direction === 1 && el.scrollLeft >= el.scrollWidth / 2)
            el.scrollLeft = 0;
          if (direction === -1 && el.scrollLeft <= 0)
            el.scrollLeft = el.scrollWidth / 2;
        }
      };

      scrollRow(shootRef.current, shootPaused, 1); // right
      scrollRow(editRef.current, editPaused, -1); // left

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const shootEdit = items.filter((i) => i.category === "shoot_edit");
  const editOnly = items.filter((i) => i.category === "edit_only");

  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Our Work</h2>

      {/* ================= SHOOT + EDIT ================= */}
      <h3 className="category">Shoot + Edit</h3>
      <div className="scroll-row" ref={shootRef}>
        {[...shootEdit, ...shootEdit, ...shootEdit].map((item, i) => (
          <VideoCard
            key={i}
            item={item}
            setActiveVideo={setActiveVideo}
            pause={() => (shootPaused.current = true)}
            resume={() => (shootPaused.current = false)}
          />
        ))}
      </div>

      {/* ================= EDIT ONLY ================= */}
      <h3 className="category">Edit Only</h3>
      <div className="scroll-row" ref={editRef}>
        {[...editOnly, ...editOnly, ...editOnly].map((item, i) => (
          <VideoCard
            key={i}
            item={item}
            setActiveVideo={setActiveVideo}
            pause={() => (editPaused.current = true)}
            resume={() => (editPaused.current = false)}
          />
        ))}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} close={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ================= VIDEO CARD ================= */
function VideoCard({ item, setActiveVideo, pause, resume }) {
  const videoRef = useRef(null);

  const handleEnter = () => {
    pause();
    videoRef.current?.play().catch(() => {});
  };

  const handleLeave = () => {
    resume();
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      className="video-card"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => setActiveVideo(item)}
    >
      <video ref={videoRef} src={item.imageUrl} muted loop playsInline />
      <div className="overlay">
        <div className="play">▶</div>
        <p>{item.title}</p>
      </div>
    </motion.div>
  );
}

/* ================= MODAL ================= */
function VideoModal({ video, close }) {
  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <motion.div
        className="modal-video"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <video src={video.imageUrl} controls autoPlay />
        <button className="close" onClick={close}>
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}
