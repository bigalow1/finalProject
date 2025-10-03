// ForLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ForLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://final-backend-57f6.onrender.com/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json().catch(() => ({}));
      console.log("[Login Response]", data);

      if (!res.ok) {
        const msg = data.message || `Login failed (${res.status})`;
        throw new Error(msg);
      }

      if (!data.checkUser) {
        throw new Error("Login succeeded but server returned no user data.");
      }

      // Save user & token in AuthContext
      login(data.checkUser, data.token || data.accessToken || null);

      // Redirect by role
      if (data.checkUser.role?.toLowerCase() === "Admin") {
        console.log("[Login] Redirecting → /Dash");
        navigate("/Dash", { replace: true });
      } else {
        console.log("[Login] Redirecting → /CheckoutPage");
        navigate("/CheckoutPage", { replace: true });
      }
    } catch (err) {
      console.error("[Login Error]", err);
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-red-600 px-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForLogin;
