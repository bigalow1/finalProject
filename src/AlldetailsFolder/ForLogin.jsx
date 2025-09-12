import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AlldetailsFolder/AuthContext.jsx"; // ✅ import AuthContext

function ForLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ from AuthContext

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:3002/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // keep cookies if backend sets them
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Invalid login credentials.");

      // ✅ Save user in AuthContext + localStorage
      login(data.user || data);

      setSuccess("Login successful!");
      setFormData({ email: "", password: "" });

      // ✅ Always redirect to checkout page
      navigate("/checkoutpage", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-red-900 to-black px-4 py-12">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Log in to continue ordering your favorite meals
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mb-3">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/ForSignup" className="text-red-600 hover:underline font-medium">
            Sign up
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          By logging in, you agree to our{" "}
          <span className="text-red-500">Terms</span> and{" "}
          <span className="text-red-500">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

export default ForLogin;
