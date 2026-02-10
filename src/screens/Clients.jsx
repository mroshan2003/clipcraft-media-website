import { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("/clients.json") // 🔥 STATIC FILE (NO RENDER)
      .then((res) => res.json())
      .then(setClients)
      .catch(() => setClients([]));
  }, []);

  // Cloudinary optimizer (SAFE)
  const optimizeImage = (url = "") =>
    url.includes("/upload/")
      ? url.replace("/upload/", "/upload/f_auto,q_auto,w_200/")
      : url;

  const displayClients = clients.length ? [...clients, ...clients] : [];

  return (
    <section className="clients-section reveal" id="brands">
      <div className="container">
        <p className="section-label">Trusted by Brands & Creators</p>

        <div className="clients-marquee">
          <div className="marquee-track-clients">
            {displayClients.map((client, i) => (
              <div className="client-logo-box" key={i}>
                <a
                  href={client.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={optimizeImage(client.imageUrl)}
                    alt={client.name || "Client logo"}
                    className="client-logo"
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
