import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaTrash,
  FaEdit,
  FaUsers,
  FaSave,
  FaTimes,
  FaLock,
} from "react-icons/fa";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    role: "User",
    password: "",
  });

  // Fetch all users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3002/user");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  // Update user (only include password if provided)
  const updateUser = async (id) => {
    // simple client-side validation
    if (!formData.fullname.trim()) {
      alert("Fullname is required.");
      return;
    }
    if (!formData.email.trim()) {
      alert("Email is required.");
      return;
    }
    if (formData.password && formData.password.length < 6) {
      alert("New password must be at least 6 characters.");
      return;
    }

    try {
      // build payload conditionally (send password only if user entered one)
      const payload = {
        fullname: formData.fullname,
        email: formData.email,
        role: formData.role,
      };
      if (formData.password && formData.password.trim() !== "") {
        payload.password = formData.password;
      }

      await fetch(`http://localhost:3002/user/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // reset editing state and refresh list
      setEditingUser(null);
      setFormData({ fullname: "", email: "", role: "User", password: "" });
      fetchUsers();
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await fetch(`http://localhost:3002/user/${id}`, {
        method: "DELETE",
      });
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  // Filter users
  const filteredUsers = users.filter(
    (u) =>
      u._id.toLowerCase().includes(search.toLowerCase()) ||
      u.fullname.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#E81F1F] mb-6 flex items-center gap-2">
        <FaUsers /> Manage Users
      </h1>

      {/* Search */}
      <div className="mb-6 flex items-center gap-3 bg-white shadow rounded-lg px-4 py-2 max-w-md">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by Fullname, Email, or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none"
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#E81F1F] text-white">
            <tr>
              <th className="px-6 py-3">user Id</th>
              <th className="px-6 py-3">fullname</th>
              <th className="px-6 py-3">email</th>
               <th className="px-6 py-3">password</th>
              <th className="px-6 py-3">role</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, idx) => (
              <motion.tr
                key={user._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-semibold">{user._id}</td>

                {/* Fullname */}
                <td className="px-6 py-4">
                  {editingUser === user._id ? (
                    <input
                      type="text"
                      value={formData.fullname}
                      onChange={(e) =>
                        setFormData({ ...formData, fullname: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.fullname
                  )}
                </td>

                {/* Email */}
                <td className="px-6 py-4">
                  {editingUser === user._id ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.email
                  )}
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  {editingUser === user._id ? (
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="border px-2 py-1 rounded"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Vendor">Vendor</option>
                      <option value="User">User</option>
                    </select>
                  ) : (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        user.role === "Admin"
                          ? "bg-purple-100 text-purple-700"
                          : user.role === "Vendor"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 flex gap-3 items-start">
                  {editingUser === user._id ? (
                    <>
                      <div className="flex flex-col gap-2 w-full">
                        {/* Password input (only used to set a new password) */}
                        <div className="flex items-center gap-2">
                          <FaLock className="text-black" />
                          <input
                            type="password"
                            placeholder="New password (leave blank to keep)"
                            value={formData.password}
                            onChange={(e) =>
                              setFormData({ ...formData, password: e.target.value })
                            }
                            className="border px-2 py-1 rounded w-full"
                          />
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => updateUser(user._id)}
                            className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-1"
                          >
                            <FaSave /> Save
                          </button>
                          <button
                            onClick={() => {
                              setEditingUser(null);
                              setFormData({ fullname: "", email: "", role: "User", password: "" });
                            }}
                            className="bg-gray-400 text-white px-3 py-1 rounded flex items-center gap-1"
                          >
                            <FaTimes /> Cancel
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingUser(user._id);
                          setFormData({
                            fullname: user.fullname || "",
                            email: user.email || "",
                            role: user.role || "User",
                            password: "",
                          });
                        }}
                        className="bg-yellow-500 text-white px-3 py-1 rounded flex items-center gap-1"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1"
                      >
                        <FaTrash /> Delete
                      </button>
                    </>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageUsers;
