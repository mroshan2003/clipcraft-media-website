// src/admin/AdminDashboard.jsx

import React, { useEffect, useState } from "react";
import { AdminUpload } from "./AdminUpload";
import "./adminStyles.css";

export default function AdminDashboard({ adminKey }) {
  const [clients, setClients] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const loadClients = async () => {
    const res = await fetch(
      "https://clipcraft-backend-oka9.onrender.com/api/clients"
    );
    const data = await res.json();

    // Sort newest → oldest
    const sorted = [...data].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    setClients(sorted);
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const deleteClient = async () => {
    await fetch(
      `https://clipcraft-backend-oka9.onrender.com/api/clients/${deleteId}`,
      {
        method: "DELETE",
        headers: { "x-admin-key": adminKey },
      }
    );

    setShowDeleteModal(false);
    setDeleteId(null);
    loadClients();
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <div className="admin-dashboard-container">
      <h1 className="panel-title">Client Panel</h1>

      <AdminUpload adminKey={adminKey} refresh={loadClients} />

      <h2 className="list-title">All Clients (Newest → Oldest)</h2>

      <div className="client-grid">
        {clients.map((c) => (
          <div key={c._id} className="client-card enhanced-client-card">
            <img src={c.imageUrl} alt={c.name} className="client-logo-img" />
            <p className="client-name">{c.name}</p>

            <button
              className="delete-btn"
              onClick={() => openDeleteModal(c._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Popup */}
      {showDeleteModal && (
        <div className="modal-bg">
          <div className="modal-box">
            <h3>Delete Client?</h3>
            <p>This action cannot be undone.</p>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button className="confirm-delete-btn" onClick={deleteClient}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
