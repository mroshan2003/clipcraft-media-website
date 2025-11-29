import React, { useState } from "react";

export function PortfolioUpload({ adminKey, refresh }) {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);

  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const upload = async () => {
    if (!title || !video) {
      alert("Please enter a title and select a video");
      return;
    }

    setLoading(true);
    setProgress(0);
    setSpeed(null);
    setTimeLeft(null);
    setSuccess(false);

    const form = new FormData();
    form.append("title", title);
    form.append("image", video);

    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://clipcraft-backend-oka9.onrender.com/api/portfolio/upload"
    );
    xhr.setRequestHeader("x-admin-key", adminKey);

    let lastLoaded = 0;
    let lastTime = Date.now();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);

        const now = Date.now();
        const deltaTime = (now - lastTime) / 1000;
        const deltaLoaded = event.loaded - lastLoaded;

        if (deltaTime > 0) {
          const uploadSpeed = deltaLoaded / deltaTime;
          setSpeed(uploadSpeed);

          const remaining = event.total - event.loaded;
          const timeRemaining = remaining / uploadSpeed;
          setTimeLeft(timeRemaining);
        }

        lastLoaded = event.loaded;
        lastTime = now;
      }
    };

    xhr.onload = () => {
      setLoading(false);

      const data = JSON.parse(xhr.responseText);

      if (xhr.status === 200 && data.item) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);

        setTitle("");
        setVideo(null);
        setPreview(null);
        setProgress(0);
        setSpeed(null);
        setTimeLeft(null);

        refresh();
      } else {
        alert(data.error || "Upload failed");
      }
    };

    xhr.send(form);
  };

  return (
    <div className="admin-upload-card">
      <h2>Upload Portfolio Video</h2>

      <input
        type="text"
        placeholder="Video Title (ex: Wedding Reel)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* ⭐ Styled File Button */}
      <div className="file-input-wrapper">
        <label className="file-input-label">
          Choose Video
          <input
            type="file"
            accept="video/*"
            className="hidden-file-input"
            onChange={(e) => {
              const file = e.target.files[0];
              setVideo(file);
              if (file) setPreview(URL.createObjectURL(file));
            }}
          />
        </label>
      </div>

      {preview && (
        <video
          src={preview}
          className="preview-img"
          muted
          playsInline
          controls
          style={{ height: "200px", objectFit: "cover", marginTop: "10px" }}
        />
      )}

      {loading && (
        <>
          <div className="progress-wrapper">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>

          <p className="speed-info">
            {speed && `Speed: ${(speed / 1024 / 1024).toFixed(2)} MB/s`}
            {timeLeft && ` • Time Left: ${Math.ceil(timeLeft)}s`}
          </p>
        </>
      )}

      {success && <div className="success-animation">✔ Video Uploaded!</div>}

      <button onClick={upload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
