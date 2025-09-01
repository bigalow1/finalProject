import React, { useState } from "react";
import { Link } from "react-router-dom";


const ForSignup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("https://blogbackend-cgj8.onrender.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Signup successful! You can now log in.");
      setFormData({ fullname: "", email: "", password: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-red-600 px-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-600 mb-6">
          Sign up to continue ordering your favorite meals
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-sm text-center mb-3">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullname" className="block font-medium text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-sm">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/ForLogin" className="text-red-600 font-medium hover:underline">
            Log in here
          </Link>
        </p>

        <p className="mt-4 text-xs text-center text-gray-400">
          By signing up, you agree to our{" "}
          <span className="text-red-500">Terms of Service</span> and{" "}
          <span className="text-red-500">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default ForSignup;
