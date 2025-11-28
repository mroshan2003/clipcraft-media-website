import React, { useState } from "react";

export function AdminUpload({ adminKey, refresh }) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);

  const upload = async () => {
    if (!name || !logo) {
      alert("Please enter client name and select a logo");
      return;
    }

    const form = new FormData();
    form.append("name", name);
    form.append("logo", logo);

    const res = await fetch(
      "https://clipcraft-backend-oka9.onrender.com/api/clients/upload",
      {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: form,
      }
    );

    const data = await res.json();
    if (data.success) {
      alert("Client added!");
      setName("");
      setLogo(null);
      setPreview(null);
      refresh();
    } else {
      alert(data.error || "Upload failed");
    }
  };

  return (
    <div className="admin-upload-card">
      <h2>Upload New Client</h2>

      <input
        type="text"
        placeholder="Client name (ex: Nike, Habbada Fashions)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          setLogo(file);
          if (file) setPreview(URL.createObjectURL(file));
        }}
      />

      {preview && <img src={preview} className="preview-img" alt="preview" />}

      <button onClick={upload}>Upload</button>
    </div>
  );
}
