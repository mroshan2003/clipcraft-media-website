// import React, { useState } from "react";

// export function AdminUpload({ adminKey, refresh }) {
//   const [name, setName] = useState("");
//   const [logo, setLogo] = useState(null);
//   const [link, setLink] = useState("");
//   const [preview, setPreview] = useState(null);
//   const [progress, setProgress] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const upload = async () => {
//     if (!name || !logo) {
//       alert("Please enter client name and select a logo");
//       return;
//     }

//     setLoading(true);
//     setProgress(0);
//     setSuccess(false);

//     const form = new FormData();
//     form.append("name", name);
//     form.append("logo", logo);
//     form.append("link", link);

//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://api.clipcraftmedia.in/api/clients/upload");
//     xhr.setRequestHeader("x-admin-key", adminKey);

//     xhr.upload.onprogress = (e) => {
//       if (e.lengthComputable) {
//         setProgress(Math.round((e.loaded / e.total) * 100));
//       }
//     };

//     xhr.onload = async () => {
//       setLoading(false);

//       if (xhr.status === 200) {
//         setSuccess(true);
//         setTimeout(() => setSuccess(false), 2000);

//         setName("");
//         setLogo(null);
//         setLink("");
//         setPreview(null);
//         setProgress(0);

//         // 🔥 IMPORTANT: reload STATIC JSON after backend regenerates it
//         setTimeout(() => {
//           refresh(); // AdminDashboard loads /clients.json
//         }, 500);
//       } else {
//         alert("Upload failed");
//       }
//     };

//     xhr.send(form);
//   };

//   return (
//     <div className="admin-upload-card">
//       <h2>Upload New Client</h2>

//       <input
//         type="text"
//         placeholder="Client name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Client link (Instagram / Website)"
//         value={link}
//         onChange={(e) => setLink(e.target.value)}
//       />

//       <div className="file-input-wrapper">
//         <label className="file-input-label">
//           Choose Logo
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden-file-input"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               setLogo(file);
//               if (file) setPreview(URL.createObjectURL(file));
//             }}
//           />
//         </label>
//       </div>

//       {preview && <img src={preview} alt="preview" className="preview-img" />}

//       {loading && (
//         <div className="progress-wrapper">
//           <div className="progress-bar" style={{ width: `${progress}%` }}>
//             {progress}%
//           </div>
//         </div>
//       )}

//       {success && <div className="success-animation">✔ Uploaded!</div>}

//       <button onClick={upload} disabled={loading}>
//         {loading ? "Uploading..." : "Upload"}
//       </button>
//     </div>
//   );
// }
