import React, { useEffect, useState } from "react";
import { AdminUpload } from "./AdminUpload";
import "./adminStyles.css";

export default function AdminDashboard({ adminKey }) {
  const [clients, setClients] = useState([]);

  const loadClients = async () => {
    const res = await fetch(
      "https://clipcraft-backend-oka9.onrender.com/api/clients"
    );
    const data = await res.json();
    setClients(data);
  };

  const deleteClient = async (id) => {
    if (!window.confirm("Delete this client?")) return;

    await fetch(
      `https://clipcraft-backend-oka9.onrender.com/api/clients/${id}`,
      {
        method: "DELETE",
        headers: { "x-admin-key": adminKey },
      }
    );

    loadClients();
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <div className="admin-dashboard-container">
      <h1>Client Panel</h1>

      <AdminUpload adminKey={adminKey} refresh={loadClients} />

      <h2 style={{ marginBottom: "10px", marginTop: "10px" }}>All Clients</h2>

      <div className="client-grid">
        {clients.map((c) => (
          <div key={c._id} className="client-card">
            <img src={c.imageUrl} alt={c.name} />
            <p>{c.name}</p>
            <button onClick={() => deleteClient(c._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
