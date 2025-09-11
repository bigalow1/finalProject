import React, { useEffect, useState } from "react";

function ApproveRestaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all restaurants
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await fetch("http://localhost:3002/restaurant/all", {
        headers: {
          "Content-Type": "application/json",
          // Add token if backend requires auth
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setRestaurants(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setLoading(false);
    }
  };

  // ✅ Approve Restaurant
  const approveRestaurant = async (id) => {
    try {
      const res = await fetch(`http://localhost:3002/restaurant/${id}/approve`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) throw new Error("Failed to approve restaurant");

      setRestaurants((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status: "Approved" } : r))
      );
    } catch (err) {
      console.error("Error approving restaurant:", err);
    }
  };

  // ✅ Reject Restaurant
  const rejectRestaurant = async (id) => {
    try {
      const res = await fetch(`http://localhost:3002/restaurant/${id}/reject`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) throw new Error("Failed to reject restaurant");

      setRestaurants((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status: "Rejected" } : r))
      );
    } catch (err) {
      console.error("Error rejecting restaurant:", err);
    }
  };

  if (loading) return <p className="p-6">Loading restaurants...</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[#E81F1F] mb-6">
        Approve or Reject Restaurants
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#E81F1F] text-white">
            <tr>
              <th className="px-6 py-3">Restaurant Name</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((r) => (
              <tr key={r._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{r.restaurantName}</td>
                <td className="px-6 py-4">{r.address}</td>
                <td className="px-6 py-4 font-bold">
                  {r.status || "Pending"}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => approveRestaurant(r._id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectRestaurant(r._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApproveRestaurant;
