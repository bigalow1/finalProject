import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForSignup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://final-backend-57f6.onrender.com/user/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      // backend must return JSON
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup successful!");
      navigate("/CheckoutPage"); // ✅ take new users to checkout
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-red-600 px-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full name"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-red-600">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForSignup;
