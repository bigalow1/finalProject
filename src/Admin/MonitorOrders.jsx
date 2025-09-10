import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaClipboardList } from "react-icons/fa";

const statuses = ["Pending", "Preparing", "Out for Delivery", "Delivered", "Cancelled"];

function MonitorOrder() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch orders from backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:3002/orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, []);

  // Update order status (PUT request to backend)
  const updateStatus = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:3002/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      // Update state locally after success
      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      console.error("Error updating order:", err);
    }
  };

  const filteredOrders = orders.filter(
    (o) =>
      o._id.toLowerCase().includes(search.toLowerCase()) ||
      o.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#E81F1F] mb-6">
        Admin Order Monitoring
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex items-center gap-3 bg-white shadow rounded-lg px-4 py-2 max-w-md">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by Order ID or Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none"
        />
      </div>

      {/* Orders Table */}
      {filteredOrders.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-12"
        >
          <FaClipboardList className="text-gray-400 text-6xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-600">
            No Orders Available
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Orders placed by customers will appear here in real-time.
          </p>
        </motion.div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#E81F1F] text-white">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Address</th>
                <th className="px-6 py-3">Items</th>
                <th className="px-6 py-3">Total</th>
                <th className="px-6 py-3">Payment</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, idx) => (
                <motion.tr
                  key={order._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-semibold">{order._id}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold">{order.name}</p>
                    <p className="text-gray-500 text-xs">{order.phone}</p>
                  </td>
                  <td className="px-6 py-4">{order.address}</td>
                  <td className="px-6 py-4">
                    {order.items?.map((item, i) => (
                      <p key={i}>
                        {item.qty} × {item.name}
                      </p>
                    ))}
                  </td>
                  <td className="px-6 py-4 font-bold">${order.total?.toFixed(2)}</td>
                  <td className="px-6 py-4">{order.paymentMethod}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Preparing"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Out for Delivery"
                          ? "bg-purple-100 text-purple-700"
                          : order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MonitorOrder;
