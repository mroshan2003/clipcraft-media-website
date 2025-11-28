import React, { useState } from "react";

export function PortfolioUpload({ adminKey, refresh }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const upload = async () => {
    if (!title || !image) return alert("Enter title and select image");

    const form = new FormData();
    form.append("title", title);
    form.append("image", image);

    const res = await fetch(
      "https://clipcraft-backend-oka9.onrender.com/api/portfolio/upload",
      {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: form,
      }
    );

    const data = await res.json();

    if (data.success) {
      alert("Portfolio item added");
      setTitle("");
      setImage(null);
      setPreview(null);
      refresh();
    }
  };

  return (
    <div className="admin-upload-card">
      <h2>Upload Portfolio Image</h2>

      <input
        type="text"
        placeholder="Portfolio Title (ex: Wedding Shoot)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="file"
        accept="video/mp4,video/*"
        onChange={(e) => {
            setImage(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]));
        }}
      />


      {preview && (
        <video
            src={preview}
            className="preview-img"
            controls
            autoPlay={false}
        />
    )}


      <button onClick={upload}>Upload</button>
    </div>
  );
}
