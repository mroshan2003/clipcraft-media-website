// src/admin/PortfolioDashboard.jsx
import React, { useEffect, useState } from "react";
import { PortfolioUpload } from "./PortfolioUpload";
import "./adminStyles.css";

export default function PortfolioDashboard({ adminKey }) {
  const [items, setItems] = useState([]);

  const loadPortfolio = async () => {
    const res = await fetch(
      "https://clipcraft-backend-oka9.onrender.com/api/portfolio"
    );
    const data = await res.json();
    setItems(data);
  };

  const deleteItem = async (id) => {
    if (!window.confirm("Delete this video?")) return;

    await fetch(
      `https://clipcraft-backend-oka9.onrender.com/api/portfolio/${id}`,
      {
        method: "DELETE",
        headers: { "x-admin-key": adminKey },
      }
    );

    loadPortfolio();
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

  return (
    <div className="admin-dashboard-container">
      <h1>Portfolio Panel</h1>

      <PortfolioUpload adminKey={adminKey} refresh={loadPortfolio} />

      <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>
        All Portfolio Videos
      </h2>

      <div className="client-grid">
        {items.map((item) => (
          <div key={item._id} className="client-card">
            <video
              src={item.imageUrl}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "12px",
                background: "#000",
              }}
              muted
              playsInline
              controls
            />
            <p style={{ marginTop: "8px", fontWeight: "600" }}>
              {item.title}
            </p>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
