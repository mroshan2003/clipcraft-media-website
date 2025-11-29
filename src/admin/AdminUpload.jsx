import React, { useState } from "react";

export function AdminUpload({ adminKey, refresh }) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const upload = async () => {
    if (!name || !logo) {
      alert("Please enter client name and select a logo");
      return;
    }

    setLoading(true);
    setProgress(0);
    setSuccess(false);

    const form = new FormData();
    form.append("name", name);
    form.append("logo", logo);

    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://clipcraft-backend-oka9.onrender.com/api/clients/upload"
    );
    xhr.setRequestHeader("x-admin-key", adminKey);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);
      }
    };

    xhr.onload = () => {
      setLoading(false);
      const data = JSON.parse(xhr.responseText);

      if (xhr.status === 200 && data.client) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);

        setName("");
        setLogo(null);
        setPreview(null);
        setProgress(0);

        refresh();
      } else {
        alert(data.error || "Upload failed");
      }
    };

    xhr.send(form);
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

      {/* ⭐ Styled Choose File Button */}
      <div className="file-input-wrapper">
        <label className="file-input-label">
          Choose Logo
          <input
            type="file"
            accept="image/*"
            className="hidden-file-input"
            onChange={(e) => {
              const file = e.target.files[0];
              setLogo(file);
              if (file) setPreview(URL.createObjectURL(file));
            }}
          />
        </label>
      </div>

      {preview && (
        <img
          src={preview}
          className="preview-img"
          alt="preview"
          style={{
            width: "100px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        />
      )}

      {/* Progress bar */}
      {loading && (
        <div className="progress-wrapper">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {/* Success animation */}
      {success && <div className="success-animation">✔ Uploaded!</div>}

      <button onClick={upload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
