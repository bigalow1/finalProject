import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

     try {
    const res = await fetch("http://localhost:3002/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("Login response:", data);

    if (!res.ok) throw new Error(data.message || "Login failed");

    if (data.checkUser && data.checkUser.role === "Admin") {
      navigate("/Dash", { replace: true });
    } else if (data.checkUser) {
      navigate("/CheckoutPage", { replace: true });
    } else {
      throw new Error("No user data returned from server");
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-red-600 px-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>

        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm text-center mb-3">{success}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForLogin;
