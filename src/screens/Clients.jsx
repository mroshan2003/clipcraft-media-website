import { useEffect, useState } from "react";

export default function Clients() {
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
                <a
                  href={client.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={client.imageUrl}
                    alt={client.name}
                    className="client-logo"
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
