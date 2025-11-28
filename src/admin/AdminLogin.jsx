import React, { useState } from "react";
import "./adminStyles.css";

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!password) return alert("Enter password");

    setLoading(true);

    // Call backend to verify password
    const res = await fetch(
      "https://clipcraft-backend-oka9.onrender.com/api/clients/verify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      }
    );

    setLoading(false);

    if (res.status === 200) {
      onLogin(password); // password valid → login
    } else {
      alert("Invalid password!");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h1>Admin Login</h1>

        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login} disabled={loading}>
          {loading ? "Checking..." : "Login"}
        </button>
      </div>
    </div>
  );
}
