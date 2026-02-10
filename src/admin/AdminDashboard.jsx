// // src/admin/AdminDashboard.jsx

// import React, { useEffect, useState } from "react";
// import { AdminUpload } from "./AdminUpload";
// import "./adminStyles.css";

// export default function AdminDashboard({ adminKey }) {
//   const [clients, setClients] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);

//   // 🔥 LOAD FROM STATIC JSON (FAST)
//   const loadClients = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("/clients.json", { cache: "no-store" });
//       const data = await res.json();
//       setClients(data);
//     } catch (err) {
//       console.error("Failed to load clients.json");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const openDeleteModal = (id) => {
//     setDeleteId(id);
//     setShowDeleteModal(true);
//   };

//   // ❌ DELETE STILL USES API
//   const deleteClient = async () => {
//     await fetch(
//       `https://clipcraft-backend-oka9.onrender.com/api/clients/${deleteId}`,
//       {
//         method: "DELETE",
//         headers: { "x-admin-key": adminKey },
//       },
//     );

//     setShowDeleteModal(false);
//     setDeleteId(null);

//     // Reload updated static file
//     setTimeout(loadClients, 500);
//   };

//   useEffect(() => {
//     loadClients();
//   }, []);

//   // Cloudinary optimization (admin preview)
//   const optimizeImage = (url = "") =>
//     url.includes("/upload/")
//       ? url.replace("/upload/", "/upload/f_auto,q_auto,w_120/")
//       : url;

//   return (
//     <div className="admin-dashboard-container">
//       <h1 className="panel-title">Client Panel</h1>

//       {/* ✅ UPLOAD STILL WORKS */}
//       <AdminUpload adminKey={adminKey} refresh={loadClients} />

//       <h2 className="list-title">All Clients (Static Preview)</h2>

//       {loading && <p className="admin-loading">Loading clients…</p>}

//       <div className="client-grid">
//         {clients.map((c, i) => (
//           <div key={i} className="client-card enhanced-client-card">
//             <img
//               src={optimizeImage(c.imageUrl)}
//               alt={c.name}
//               className="client-logo-img"
//               loading="lazy"
//             />

//             <p className="client-name">{c.name}</p>

//             <button
//               className="delete-btn"
//               onClick={() => openDeleteModal(c._id)}
//             >
//               Delete
//             </button>

//             {c.link && (
//               <a
//                 href={c.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="insta-icon-btn"
//               >
//                 <i className="fa-brands fa-instagram"></i>
//               </a>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Delete Confirmation */}
//       {showDeleteModal && (
//         <div className="modal-bg">
//           <div className="modal-box">
//             <h3>Delete Client?</h3>
//             <p>This action cannot be undone.</p>

//             <div className="modal-actions">
//               <button
//                 className="cancel-btn"
//                 onClick={() => setShowDeleteModal(false)}
//               >
//                 Cancel
//               </button>
//               <button className="confirm-delete-btn" onClick={deleteClient}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
