// // src/admin/PortfolioDashboard.jsx
// import React, { useEffect, useState } from "react";
// import { PortfolioUpload } from "./PortfolioUpload";
// import "./adminStyles.css";

// export default function PortfolioDashboard({ adminKey }) {
//   const [items, setItems] = useState([]);
//   const [sortedItems, setSortedItems] = useState([]);

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);

//   const loadPortfolio = async () => {
//     const res = await fetch(
//       "https://clipcraft-backend-oka9.onrender.com/api/portfolio"
//     );
//     const data = await res.json();

//     // Newest → Oldest sorting
//     const sorted = [...data].sort(
//       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//     );

//     setItems(sorted);
//     setSortedItems(sorted);
//   };

//   const openDeleteModal = (id) => {
//     setDeleteId(id);
//     setShowDeleteModal(true);
//   };

//   const deleteItem = async () => {
//     await fetch(
//       `https://clipcraft-backend-oka9.onrender.com/api/portfolio/${deleteId}`,
//       {
//         method: "DELETE",
//         headers: { "x-admin-key": adminKey },
//       }
//     );

//     setShowDeleteModal(false);
//     setDeleteId(null);
//     loadPortfolio();
//   };

//   useEffect(() => {
//     loadPortfolio();
//   }, []);

//   return (
//     <div className="admin-dashboard-container">
//       <h1 className="panel-title">Portfolio Panel</h1>

//       {/* Upload Component */}
//       <PortfolioUpload adminKey={adminKey} refresh={loadPortfolio} />

//       <h2 className="list-title">Videos</h2>

//       <div className="client-grid">
//         {sortedItems.map((item) => (
//           <div key={item._id} className="client-card video-card">
//             <video
//               src={item.imageUrl}
//               className="portfolio-admin-video"
//               muted
//               playsInline
//               controls
//             />

//             <p className="video-title">{item.title}</p>

//             <button
//               className="delete-btn"
//               onClick={() => openDeleteModal(item._id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Delete Popup Modal */}
//       {showDeleteModal && (
//         <div className="modal-bg">
//           <div className="modal-box">
//             <h3>Delete Video?</h3>
//             <p>This action cannot be undone.</p>

//             <div className="modal-actions">
//               <button
//                 className="cancel-btn"
//                 onClick={() => setShowDeleteModal(false)}
//               >
//                 Cancel
//               </button>

//               <button className="confirm-delete-btn" onClick={deleteItem}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
